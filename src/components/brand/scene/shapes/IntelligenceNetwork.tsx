"use client";

import { useEffect, useRef } from "react";
import type React from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";
import type { ParamObjectConfig } from "@/lib/types/scene";
import { mergeParamObjectConfig } from "@/components/brand/scene/engine/parametricObjectContract";

// ── Horizontal Cognitive Grid — Oblate Spherical Field ────────────────────────
//
//  Buffer layout: [ meridian pts (static) | parallel pts (dynamic) ]
//
//  Meridians (MERIDIANS=14) — static skeleton, poles deduped.
//  Parallels (P=minorSegments) — animated: theta advances at FLOW_SPEED rad/s.
//    N_p = majorSegments points per ring, no dedup.
//
//  Oblate ellipsoid:
//    x = R · sin(φ) · cos(θ) · SX    SX=1.75 → wide
//    y = R · cos(φ)           · SY    SY=0.74 → height
//    z = R · sin(φ) · sin(θ)  · SZ    SZ=0.82 → depth
//
//  Point count (P=7, N_p=38, MERIDIANS=14, PPM=22):
//    Meridians: 2 poles + 14 × 21 interior = 296 static pts
//    Parallels: 7 × 38                     = 266 dynamic pts
//    Total ≈ 562 points

// ── Constants ─────────────────────────────────────────────────────────────────

const MERIDIANS = 14;
const POINTS_PER_MERIDIAN = 22;
const FLOW_SPEED = 0.075; // rad/s — matches Raxor particleFlowSpeed

const SX = 1.75;
const SY = 0.74;
const SZ = 0.82;

// ── Geometry ──────────────────────────────────────────────────────────────────

interface ParallelLane {
  phi: number;
  N_p: number;
}

interface SphereGeometry {
  positions: Float32Array;
  pointCount: number;
  parallelsStart: number; // point index where parallel section begins
  parallels: ParallelLane[];
}

function buildCognitiveSphericalGrid(cfg: ParamObjectConfig): SphereGeometry {
  const R = cfg.majorRadius;
  const N_p = cfg.majorSegments; // points per parallel ring
  const P = cfg.minorSegments; // number of parallels

  const pts: number[] = [];

  // Meridians — static, poles deduped
  let northAdded = false;
  let southAdded = false;

  for (let m = 0; m < MERIDIANS; m++) {
    const theta = (2 * Math.PI * m) / MERIDIANS;
    for (let step = 0; step <= POINTS_PER_MERIDIAN; step++) {
      const phi = (Math.PI * step) / POINTS_PER_MERIDIAN;
      const x = R * Math.sin(phi) * Math.cos(theta) * SX;
      const y = R * Math.cos(phi) * SY;
      const z = R * Math.sin(phi) * Math.sin(theta) * SZ;

      if (step === 0) {
        if (!northAdded) {
          pts.push(x, y, z);
          northAdded = true;
        }
      } else if (step === POINTS_PER_MERIDIAN) {
        if (!southAdded) {
          pts.push(x, y, z);
          southAdded = true;
        }
      } else {
        pts.push(x, y, z);
      }
    }
  }

  const parallelsStart = pts.length / 3;
  const parallels: ParallelLane[] = [];

  // Parallels — dynamic section (theta will be animated), no dedup
  for (let p = 0; p < P; p++) {
    const phi = (Math.PI * (p + 1)) / (P + 1);
    parallels.push({ phi, N_p });
    for (let step = 0; step < N_p; step++) {
      const theta = (2 * Math.PI * step) / N_p;
      pts.push(
        R * Math.sin(phi) * Math.cos(theta) * SX,
        R * Math.cos(phi) * SY,
        R * Math.sin(phi) * Math.sin(theta) * SZ,
      );
    }
  }

  return {
    positions: new Float32Array(pts),
    pointCount: pts.length / 3,
    parallelsStart,
    parallels,
  };
}

// ── Shaders ───────────────────────────────────────────────────────────────────

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

interface SphereState {
  mat: THREE.ShaderMaterial;
  scaleUni: THREE.IUniform<number>;
  objectScale: number;
  baseAlpha: number;
  posArray: Float32Array;
  posAttr: THREE.BufferAttribute;
  parallelsStart: number;
  parallels: ParallelLane[];
  R: number;
  baseTiltX: number;
  baseTiltY: number;
  baseTiltZ: number;
}

// ── Component ─────────────────────────────────────────────────────────────────

interface IntelligenceNetworkProps {
  accentColor?: string;
  objectConfig?: Partial<ParamObjectConfig> | undefined;
  scrollScaleRef?: React.RefObject<number> | undefined;
}

export function IntelligenceNetwork({
  accentColor,
  objectConfig,
  scrollScaleRef,
}: IntelligenceNetworkProps) {
  const groupRef = useRef<THREE.Group>(null);
  const stateRef = useRef<SphereState | null>(null);

  useEffect(() => {
    const group = groupRef.current;
    if (!group || stateRef.current) return;

    const cfg = mergeParamObjectConfig(objectConfig);
    const sphere = buildCognitiveSphericalGrid(cfg);

    const geo = new THREE.BufferGeometry();
    const posAttr = new THREE.BufferAttribute(sphere.positions, 3);
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
      mat,
      scaleUni,
      objectScale: cfg.objectScale,
      baseAlpha: cfg.pointAlpha,
      posArray: sphere.positions,
      posAttr,
      parallelsStart: sphere.parallelsStart,
      parallels: sphere.parallels,
      R: cfg.majorRadius,
      baseTiltX: cfg.baseTiltX,
      baseTiltY: cfg.baseTiltY,
      baseTiltZ: cfg.baseTiltZ,
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

    state.scaleUni.value =
      ((camera as THREE.PerspectiveCamera).projectionMatrix.elements[5] ?? 0) *
      0.5 *
      gl.domElement.height;

    const t = clock.getElapsedTime();
    const s = scrollScaleRef?.current ?? 1;
    const alphaM = s >= 0.5 ? 1.0 : 0.05 + Math.max(0, (s - 0.1) / 0.4) * 0.95;
    state.mat.uniforms.uAlpha!.value = state.baseAlpha * alphaM;

    const thetaOffset = t * FLOW_SPEED;

    // Animate parallel points — advance theta while keeping phi and R fixed
    let idx = state.parallelsStart * 3;
    for (const { phi, N_p } of state.parallels) {
      const sinPhi = Math.sin(phi);
      const yVal = state.R * Math.cos(phi) * SY;
      for (let step = 0; step < N_p; step++) {
        const theta = (2 * Math.PI * step) / N_p + thetaOffset;
        state.posArray[idx++] = state.R * sinPhi * Math.cos(theta) * SX;
        state.posArray[idx++] = yVal;
        state.posArray[idx++] = state.R * sinPhi * Math.sin(theta) * SZ;
      }
    }
    state.posAttr.needsUpdate = true;

    group.scale.setScalar(state.objectScale * s);
    group.rotation.x = state.baseTiltX;
    group.rotation.y = state.baseTiltY;
    group.rotation.z = state.baseTiltZ;
  });

  return <group ref={groupRef} />;
}
