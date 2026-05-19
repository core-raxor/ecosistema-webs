"use client";

import {
  getClosedLoopAngle,
  resolveTorusSegments,
} from "@/components/brand/scene/engine/geometry/parametricGrammar";
import {
  CONTRACT_RANGES,
  mergeParamObjectConfig,
} from "@/components/brand/scene/engine/parametricObjectContract";
import type { ParamObjectConfig } from "@/lib/types/scene";
import { useFrame } from "@react-three/fiber";
import { useEffect, useRef } from "react";
import type React from "react";
import * as THREE from "three";

// ── Pure parametric torus ─────────────────────────────────────────────────────
//
//  x = (R + r·cos v)·cos u   y = r·sin v   z = (R + r·cos v)·sin u
//
//  No dScale. No vScale. Circular section. Correct from every angle.
//  Positions only — no normals needed for parametric flow motion.

interface TorusGeometry {
  positions: Float32Array; // M·N·3 — initial positions (used to size buffer)
  majorCount: number;
  minorCount: number;
}

function buildParametricTorus(cfg: ParamObjectConfig): TorusGeometry {
  const M = cfg.majorSegments;
  const N = cfg.minorSegments;
  const R = cfg.majorRadius;
  const r = cfg.minorRadius;

  const positions = new Float32Array(M * N * 3);
  let idx = 0;

  for (let vi = 0; vi < N; vi++) {
    const v = getClosedLoopAngle(vi, N);
    const rr = R + r * Math.cos(v);
    const y = r * Math.sin(v);

    for (let ui = 0; ui < M; ui++) {
      const u = getClosedLoopAngle(ui, M);
      positions[idx * 3] = rr * Math.cos(u);
      positions[idx * 3 + 1] = y;
      positions[idx * 3 + 2] = rr * Math.sin(u);
      idx++;
    }
  }

  return { positions, majorCount: M, minorCount: N };
}

// ── Shaders ───────────────────────────────────────────────────────────────────
//
// Uniform material: all points identical in size and alpha.
// Only perspective correction varies gl_PointSize — no per-point attributes.

const vertexShader = /* glsl */ `
  uniform float uScale;
  uniform float uPointSize;

  void main() {
    vec4 mvPosition = modelViewMatrix * vec4(position, 1.0);
    gl_PointSize = uPointSize * (uScale / -mvPosition.z);
    gl_Position  = projectionMatrix * mvPosition;
  }
`;

const fragmentShader = /* glsl */ `
  uniform vec3  uColor;
  uniform float uAlpha;

  void main() {
    vec2  uv    = gl_PointCoord - vec2(0.5);
    float dist  = length(uv);
    float shape = 1.0 - smoothstep(0.30, 0.50, dist);
    if (shape < 0.01) discard;
    gl_FragColor = vec4(uColor, shape * uAlpha);
  }
`;

// ── State ─────────────────────────────────────────────────────────────────────

interface TorusState {
  points: THREE.Points; // for cleanup only
  mat: THREE.ShaderMaterial;
  scaleUni: THREE.IUniform<number>;
  objectScale: number;
  baseAlpha: number;
  posAttr: THREE.BufferAttribute; // written each frame by flow logic
  majorCount: number;
  minorCount: number;
  majorRadius: number;
  minorRadius: number;
  // Fixed pose
  baseTiltX: number;
  baseTiltY: number;
  baseTiltZ: number;
  // Particle flow
  flowEnabled: boolean;
  flowSpeed: number;
  flowLayerOffset: number;
  flowDirection: 1 | -1;
}

// ── Component ─────────────────────────────────────────────────────────────────

interface OperationalCoreProps {
  accentColor?: string;
  objectConfig?: Partial<ParamObjectConfig> | undefined;
  scrollScaleRef?: React.RefObject<number> | undefined;
}

export function OperationalCore({
  accentColor,
  objectConfig,
  scrollScaleRef,
}: OperationalCoreProps) {
  const groupRef = useRef<THREE.Group>(null);
  const stateRef = useRef<TorusState | null>(null);

  useEffect(() => {
    const group = groupRef.current;
    if (!group || stateRef.current) return;

    const cfg = mergeParamObjectConfig(objectConfig);

    // Resolve segments: use explicit values if provided, otherwise derive from spacing
    let { majorSegments, minorSegments } = cfg;
    const hasMajor = objectConfig?.majorSegments !== undefined;
    const hasMinor = objectConfig?.minorSegments !== undefined;
    if (!hasMajor || !hasMinor) {
      const resolved = resolveTorusSegments({
        majorRadius: cfg.majorRadius,
        minorRadius: cfg.minorRadius,
        targetPointSpacing: cfg.targetPointSpacing,
        minMajorSegments: CONTRACT_RANGES.majorSegments.min,
        maxMajorSegments: CONTRACT_RANGES.majorSegments.max,
        minMinorSegments: CONTRACT_RANGES.minorSegments.min,
        maxMinorSegments: CONTRACT_RANGES.minorSegments.max,
      });
      if (!hasMajor) majorSegments = resolved.majorSegments;
      if (!hasMinor) minorSegments = resolved.minorSegments;
    }

    const torus = buildParametricTorus({ ...cfg, majorSegments, minorSegments });

    const geo = new THREE.BufferGeometry();
    // Mutable copy for animated positions — base is kept immutable in state
    const posAttr = new THREE.BufferAttribute(torus.positions.slice(), 3);
    posAttr.setUsage(THREE.DynamicDrawUsage);
    geo.setAttribute("position", posAttr);

    const color = new THREE.Color(cfg.basePointColor);
    if (accentColor) color.lerp(new THREE.Color(accentColor), cfg.accentMix);

    const scaleUni: THREE.IUniform<number> = { value: 600 };
    const mat = new THREE.ShaderMaterial({
      vertexShader,
      fragmentShader,
      uniforms: {
        uColor: { value: color },
        uScale: scaleUni,
        uPointSize: { value: cfg.pointSize },
        uAlpha: { value: cfg.pointAlpha },
      },
      transparent: true,
      depthWrite: false,
    });

    const points = new THREE.Points(geo, mat);
    group.add(points);
    group.scale.setScalar(cfg.objectScale);

    stateRef.current = {
      points,
      mat,
      scaleUni,
      objectScale: cfg.objectScale,
      baseAlpha: cfg.pointAlpha,
      posAttr,
      majorCount: torus.majorCount,
      minorCount: torus.minorCount,
      majorRadius: cfg.majorRadius,
      minorRadius: cfg.minorRadius,
      baseTiltX: cfg.baseTiltX,
      baseTiltY: cfg.baseTiltY,
      baseTiltZ: cfg.baseTiltZ,
      flowEnabled: cfg.particleFlowEnabled,
      flowSpeed: cfg.particleFlowSpeed,
      flowLayerOffset: cfg.particleFlowLayerOffset,
      flowDirection: cfg.particleFlowDirection,
    };

    return () => {
      group.remove(points);
      geo.dispose();
      mat.dispose();
      stateRef.current = null;
    };
  }, [accentColor, objectConfig]);

  useFrame(({ camera, gl, clock }) => {
    const state = stateRef.current;
    const group = groupRef.current;
    if (!state || !group) return;

    // Perspective-correct point size
    state.scaleUni.value =
      ((camera as THREE.PerspectiveCamera).projectionMatrix.elements[5] ?? 0) *
      0.5 *
      gl.domElement.height;

    const s = scrollScaleRef?.current ?? 1;
    const alphaM = s >= 0.5 ? 1.0 : 0.05 + Math.max(0, (s - 0.1) / 0.4) * 0.95;
    state.mat.uniforms.uAlpha!.value = state.baseAlpha * alphaM;

    group.scale.setScalar(state.objectScale * s);
    group.rotation.x = state.baseTiltX;
    group.rotation.y = state.baseTiltY;
    group.rotation.z = state.baseTiltZ;

    if (!state.flowEnabled) return;

    // ── Particle flow — surface-constrained motion ────────────────────────
    //
    // Each point stays on the torus surface by recomputing its position from
    // its (majorIndex, minorIndex) each frame with an advancing U angle.
    //
    //   v        = (minorIndex / N) * 2π           — fixed per point
    //   u        = uBase + t * speed * dir + minorIndex * layerOffset
    //   x = (R + r·cos v) · cos u
    //   y = r · sin v
    //   z = (R + r·cos v) · sin u
    //
    // layerOffset staggers each minor ring's phase so adjacent rings don't
    // advance in lockstep — creates visible flow without global rotation.
    // Fully deterministic. No random. No noise. No displacement off-surface.

    const t = clock.getElapsedTime();
    const M = state.majorCount;
    const N = state.minorCount;
    const R = state.majorRadius;
    const r = state.minorRadius;
    const spd = state.flowSpeed * state.flowDirection;
    const phi = state.flowLayerOffset;
    const TWO_PI = Math.PI * 2;
    const pos = state.posAttr.array as Float32Array;

    for (let vi = 0; vi < N; vi++) {
      const v = (vi / N) * TWO_PI;
      const cv = Math.cos(v);
      const sv = Math.sin(v);
      const rr = R + r * cv;
      const y = r * sv;

      for (let ui = 0; ui < M; ui++) {
        const i = vi * M + ui;
        const u = (ui / M) * TWO_PI + t * spd + vi * phi;
        pos[i * 3] = rr * Math.cos(u);
        pos[i * 3 + 1] = y;
        pos[i * 3 + 2] = rr * Math.sin(u);
      }
    }

    state.posAttr.needsUpdate = true;
  });

  return <group ref={groupRef} />;
}
