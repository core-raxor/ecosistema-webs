"use client";

import { useEffect, useRef } from "react";
import type React from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";
import type { ParamObjectConfig } from "@/lib/types/scene";
import { mergeParamObjectConfig } from "@/components/brand/scene/engine/parametricObjectContract";

// ── Pentagonal Bipyramid ───────────────────────────────────────────────────────
//
//  7 vertices (2 poles + 5 equatorial), 15 edges, 10 triangular faces.
//  Static geometry: vertices + edge fill + barycentric face fill.
//  Motion: Y-axis rotation (horizontal spin), Z lean stays fixed.
//
//  POLE_RATIO / EDGE_FILL / FACE_FILL_F — Vaxen-exclusive constants.

const POLE_RATIO = 1.65;
const EDGE_FILL = 6; // interior pts per edge × 15 edges = 90 pts
const FACE_FILL_F = 10; // 36 interior pts per face × 10 faces = 360 pts

// ── Geometry ──────────────────────────────────────────────────────────────────

function buildBipyramid(cfg: ParamObjectConfig): Float32Array {
  const r = cfg.majorRadius;
  const h = r * POLE_RATIO;

  const verts: THREE.Vector3[] = [new THREE.Vector3(0, h, 0), new THREE.Vector3(0, -h, 0)];
  for (let k = 0; k < 5; k++) {
    const angle = (2 * Math.PI * k) / 5;
    verts.push(new THREE.Vector3(Math.cos(angle) * r, 0, Math.sin(angle) * r));
  }

  // 15 edges: 5 top + 5 bottom + 5 equatorial
  const edges: [number, number][] = [];
  for (let k = 0; k < 5; k++) {
    const eq = k + 2;
    const eq2 = ((k + 1) % 5) + 2;
    edges.push([0, eq]);
    edges.push([1, eq]);
    edges.push([eq, eq2]);
  }

  // 10 faces: 5 top + 5 bottom
  const faces: [number, number, number][] = [];
  for (let k = 0; k < 5; k++) {
    const eq = k + 2;
    const eq2 = ((k + 1) % 5) + 2;
    faces.push([0, eq, eq2]);
    faces.push([1, eq, eq2]);
  }

  const pts: number[] = [];
  for (const v of verts) pts.push(v.x, v.y, v.z);

  // Edge interior points
  for (const [ai, bi] of edges) {
    const va = verts[ai]!,
      vb = verts[bi]!;
    for (let s = 1; s <= EDGE_FILL; s++) {
      const t = s / (EDGE_FILL + 1);
      pts.push(va.x + (vb.x - va.x) * t, va.y + (vb.y - va.y) * t, va.z + (vb.z - va.z) * t);
    }
  }

  const F = FACE_FILL_F;
  for (const [ai, bi, ci] of faces) {
    const va = verts[ai]!,
      vb = verts[bi]!,
      vc = verts[ci]!;
    for (let i = 1; i < F; i++) {
      for (let j = 1; j < F - i; j++) {
        const w = F - i - j;
        pts.push(
          va.x * (i / F) + vb.x * (j / F) + vc.x * (w / F),
          va.y * (i / F) + vb.y * (j / F) + vc.y * (w / F),
          va.z * (i / F) + vb.z * (j / F) + vc.z * (w / F),
        );
      }
    }
  }

  return new Float32Array(pts);
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
    vec2  uv   = gl_PointCoord - vec2(0.5);
    float dist = length(uv);
    float shape = 1.0 - smoothstep(0.30, 0.50, dist);
    if (shape < 0.01) discard;
    gl_FragColor = vec4(uColor, shape * uAlpha);
  }
`;

// ── State ─────────────────────────────────────────────────────────────────────

interface BipyramidState {
  mat: THREE.ShaderMaterial;
  scaleUni: THREE.IUniform<number>;
  objectScale: number;
  baseAlpha: number;
  rotSpeed: number;
  baseTiltX: number;
  baseTiltY: number;
  baseTiltZ: number;
}

// ── Component ─────────────────────────────────────────────────────────────────

interface TechnicalDepthProps {
  accentColor?: string;
  objectConfig?: Partial<ParamObjectConfig> | undefined;
  scrollScaleRef?: React.RefObject<number> | undefined;
}

export function TechnicalDepth({ accentColor, objectConfig, scrollScaleRef }: TechnicalDepthProps) {
  const groupRef = useRef<THREE.Group>(null);
  const stateRef = useRef<BipyramidState | null>(null);

  useEffect(() => {
    const group = groupRef.current;
    if (!group || stateRef.current) return;

    const cfg = mergeParamObjectConfig(objectConfig);
    const positions = buildBipyramid(cfg);

    const color = new THREE.Color(cfg.basePointColor);
    if (accentColor) color.lerp(new THREE.Color(accentColor), cfg.accentMix);

    const scaleUni: THREE.IUniform<number> = { value: 600 };

    const geo = new THREE.BufferGeometry();
    geo.setAttribute("position", new THREE.BufferAttribute(positions, 3));

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

    group.add(new THREE.Points(geo, mat));
    group.scale.setScalar(cfg.objectScale);

    stateRef.current = {
      mat,
      scaleUni,
      objectScale: cfg.objectScale,
      baseAlpha: cfg.pointAlpha,
      rotSpeed: cfg.objectRotationEnabled ? cfg.objectRotationSpeed : 0,
      baseTiltX: cfg.baseTiltX,
      baseTiltY: cfg.baseTiltY,
      baseTiltZ: cfg.baseTiltZ,
    };

    return () => {
      group.clear();
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
    group.scale.setScalar(state.objectScale * s);
    group.rotation.x = state.baseTiltX;
    group.rotation.y = state.baseTiltY + t * state.rotSpeed;
    group.rotation.z = state.baseTiltZ;
  });

  return <group ref={groupRef} />;
}
