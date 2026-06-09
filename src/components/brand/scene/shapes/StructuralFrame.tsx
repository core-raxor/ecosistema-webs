"use client";

import { mergeParamObjectConfig } from "@/components/brand/scene/engine/parametricObjectContract";
import type { ParamObjectConfig } from "@/lib/types/scene";
import { useFrame, useThree } from "@react-three/fiber";
import type React from "react";
import { useEffect, useRef } from "react";
import * as THREE from "three";

// ── Icosahedron — Platonic solid ─────────────────────────────────────────────
//
//  12 vertices, 30 edges, 20 equilateral-triangular faces.
//  Vertices: all signed permutations of (0, ±1, ±φ), where φ = (1+√5)/2.
//
//  Two-tier point system:
//    • Nodes   (large)  — 12 vertices at radius R, cfg.pointSize × NODE_SIZE_RATIO
//    • Surface (normal) — edge interior + face barycentric fill, cfg.pointSize
//                         edge: (majorSegments−1) pts per edge, spacing consistent with nodes
//                         face: FACE_SUBDIVISIONS=7 → 15 interior pts per face (300 total)
//
//  NODE_SIZE_RATIO, FACE_SUBDIVISIONS — Dextor-exclusive, not in shared contract.

const NODE_SIZE_RATIO = 1.4;
const FACE_SUBDIVISIONS = 7; // n=7 → C(6,2)=15 interior pts per triangular face
const Z_ROTATION_SPEED = 0.008;

// ── Golden ratio ──────────────────────────────────────────────────────────────

const φ = (1 + Math.sqrt(5)) / 2;
const φNorm = Math.sqrt(1 + φ * φ);

// ── Geometry ──────────────────────────────────────────────────────────────────

interface IcoGeometry {
  nodePositions: Float32Array; // 12 vertex pts
  surfacePositions: Float32Array; // edge interior + face interior pts
}

function buildIcosahedron(cfg: ParamObjectConfig): IcoGeometry {
  const R = cfg.majorRadius;

  // 12 vertices — all signed permutations of (0, ±1, ±φ), normalized to radius R
  const rawVerts: [number, number, number][] = [
    [0, 1, φ],
    [0, -1, φ],
    [0, 1, -φ],
    [0, -1, -φ],
    [1, φ, 0],
    [-1, φ, 0],
    [1, -φ, 0],
    [-1, -φ, 0],
    [φ, 0, 1],
    [-φ, 0, 1],
    [φ, 0, -1],
    [-φ, 0, -1],
  ];

  const verts = rawVerts.map(
    ([x, y, z]) => new THREE.Vector3((x * R) / φNorm, (y * R) / φNorm, (z * R) / φNorm),
  );

  // Edge detection — raw squared distance between adjacent vertices = 4.
  const edgeLen2 = (4 * R * R) / (1 + φ * φ);
  const eps = edgeLen2 * 0.06;

  const edges: [number, number][] = [];
  const adjSet = new Map<number, Set<number>>();
  for (let i = 0; i < 12; i++) adjSet.set(i, new Set());

  for (let i = 0; i < 12; i++) {
    for (let j = i + 1; j < 12; j++) {
      if (Math.abs(verts[i]!.distanceToSquared(verts[j]!) - edgeLen2) < eps) {
        edges.push([i, j]);
        adjSet.get(i)!.add(j);
        adjSet.get(j)!.add(i);
      }
    }
  }
  // Detects exactly 30 edges.

  // Face detection — 20 triangles: triplets where every pair is adjacent.
  const faces: [number, number, number][] = [];
  for (let a = 0; a < 12; a++) {
    const nbA = adjSet.get(a)!;
    for (const b of nbA) {
      if (b <= a) continue;
      const nbB = adjSet.get(b)!;
      for (const c of nbB) {
        if (c <= b || !nbA.has(c)) continue;
        faces.push([a, b, c]);
      }
    }
  }
  // Detects exactly 20 faces.

  // Node positions — 12 vertices
  const nodePositions = new Float32Array(12 * 3);
  verts.forEach((v, i) => {
    nodePositions[i * 3] = v.x;
    nodePositions[i * 3 + 1] = v.y;
    nodePositions[i * 3 + 2] = v.z;
  });

  // Surface points — edge interior + face interior
  const surfacePts: number[] = [];

  // Edge interior — straight lerp, (majorSegments−1) pts per segment.
  // Vertex→first-interior dist = edgeLen/N = same as interior spacing. ✓
  const N = Math.max(2, cfg.majorSegments);
  const edgePtMap = new Map<string, true>();

  function posKey(v: THREE.Vector3): string {
    return `${v.x.toFixed(5)},${v.y.toFixed(5)},${v.z.toFixed(5)}`;
  }

  for (const [ai, bi] of edges) {
    const va = verts[ai]!;
    const vb = verts[bi]!;
    for (let step = 1; step < N; step++) {
      const t = step / N;
      const p = va.clone().lerp(vb, t);
      const k = posKey(p);
      if (!edgePtMap.has(k)) {
        edgePtMap.set(k, true);
        surfacePts.push(p.x, p.y, p.z);
      }
    }
  }

  // Face interior fill — barycentric grid, interior points only (i,j,k > 0).
  // FACE_SUBDIVISIONS=7: C(6,2)=15 interior pts per face × 20 faces = 300 pts.
  const D = FACE_SUBDIVISIONS;
  for (const [ai, bi, ci] of faces) {
    const va = verts[ai]!;
    const vb = verts[bi]!;
    const vc = verts[ci]!;
    for (let ii = 1; ii < D; ii++) {
      for (let jj = 1; jj < D - ii; jj++) {
        const kk = D - ii - jj;
        surfacePts.push(
          (ii * va.x + jj * vb.x + kk * vc.x) / D,
          (ii * va.y + jj * vb.y + kk * vc.y) / D,
          (ii * va.z + jj * vb.z + kk * vc.z) / D,
        );
      }
    }
  }

  return {
    nodePositions,
    surfacePositions: new Float32Array(surfacePts),
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

interface IcoState {
  surfaceMat: THREE.ShaderMaterial;
  nodeMat: THREE.ShaderMaterial;
  scaleUni: THREE.IUniform<number>;
  nodeScaleUni: THREE.IUniform<number>;
  objectScale: number;
  baseAlpha: number;
  baseTiltX: number;
  baseTiltY: number;
  baseTiltZ: number;
  objectRotationEnabled: boolean;
  objectRotationSpeed: number;
  initialColor: THREE.Color;
  bgColor: THREE.Color;
}

// ── Component ─────────────────────────────────────────────────────────────────

interface StructuralFrameProps {
  accentColor?: string;
  objectConfig?: Partial<ParamObjectConfig> | undefined;
  scrollScaleRef?: React.RefObject<number> | undefined;
  scrollColorRef?: React.RefObject<number> | undefined;
}

export function StructuralFrame({
  accentColor,
  objectConfig,
  scrollScaleRef,
  scrollColorRef,
}: StructuralFrameProps) {
  const groupRef = useRef<THREE.Group>(null);
  const stateRef = useRef<IcoState | null>(null);
  const { gl } = useThree();

  useEffect(() => {
    const group = groupRef.current;
    if (!group || stateRef.current) return;

    const cfg = mergeParamObjectConfig(objectConfig);
    const geo = buildIcosahedron(cfg);

    const color = new THREE.Color(cfg.basePointColor);
    if (accentColor) color.lerp(new THREE.Color(accentColor), cfg.accentMix);

    const scaleUni: THREE.IUniform<number> = { value: 600 };
    const nodeScaleUni: THREE.IUniform<number> = { value: 600 };

    // Surface points (edge interior + face interior)
    const surfaceGeo = new THREE.BufferGeometry();
    surfaceGeo.setAttribute("position", new THREE.BufferAttribute(geo.surfacePositions, 3));
    const surfaceMat = new THREE.ShaderMaterial({
      vertexShader,
      fragmentShader,
      uniforms: {
        uColor: { value: color.clone() },
        uScale: scaleUni,
        uPointSize: { value: cfg.pointSize },
        uAlpha: { value: cfg.pointAlpha },
      },
      transparent: true,
      depthWrite: false,
    });

    // Node points (12 vertices, slightly larger)
    const nodeGeo = new THREE.BufferGeometry();
    nodeGeo.setAttribute("position", new THREE.BufferAttribute(geo.nodePositions, 3));
    const nodeMat = new THREE.ShaderMaterial({
      vertexShader,
      fragmentShader,
      uniforms: {
        uColor: { value: color.clone() },
        uScale: nodeScaleUni,
        uPointSize: { value: cfg.pointSize * NODE_SIZE_RATIO },
        uAlpha: { value: cfg.pointAlpha },
      },
      transparent: true,
      depthWrite: false,
    });

    group.add(new THREE.Points(surfaceGeo, surfaceMat));
    group.add(new THREE.Points(nodeGeo, nodeMat));
    group.scale.setScalar(cfg.objectScale);

    stateRef.current = {
      surfaceMat,
      nodeMat,
      scaleUni,
      nodeScaleUni,
      objectScale: cfg.objectScale,
      baseAlpha: cfg.pointAlpha,
      baseTiltX: cfg.baseTiltX,
      baseTiltY: cfg.baseTiltY,
      baseTiltZ: cfg.baseTiltZ,
      objectRotationEnabled: cfg.objectRotationEnabled,
      objectRotationSpeed: cfg.objectRotationSpeed,
      initialColor: color.clone(),
      bgColor: new THREE.Color(
        getComputedStyle(gl.domElement).getPropertyValue("--bg").trim() || "#07090E",
      ),
    };

    return () => {
      group.clear();
      surfaceGeo.dispose();
      surfaceMat.dispose();
      nodeGeo.dispose();
      nodeMat.dispose();
      stateRef.current = null;
    };
  }, [accentColor, objectConfig, gl]);

  useFrame(({ camera, gl, clock }) => {
    const state = stateRef.current;
    const group = groupRef.current;
    if (!state || !group) return;

    const s =
      ((camera as THREE.PerspectiveCamera).projectionMatrix.elements[5] ?? 0) *
      0.5 *
      gl.domElement.height;

    state.scaleUni.value = s;
    state.nodeScaleUni.value = s;

    const t = clock.getElapsedTime();
    const sc = scrollScaleRef?.current ?? 1;
    const colorT = scrollColorRef?.current ?? 0;
    const fade = Math.pow(1 - colorT, 2);

    (state.surfaceMat.uniforms.uColor!.value as THREE.Color)
      .copy(state.initialColor)
      .lerp(state.bgColor, colorT);
    (state.nodeMat.uniforms.uColor!.value as THREE.Color)
      .copy(state.initialColor)
      .lerp(state.bgColor, colorT);

    state.surfaceMat.uniforms.uAlpha!.value = state.baseAlpha * fade;
    state.nodeMat.uniforms.uAlpha!.value = state.baseAlpha * fade;

    group.scale.setScalar(state.objectScale * sc);
    group.rotation.x = state.baseTiltX;
    group.rotation.y = state.objectRotationEnabled
      ? state.baseTiltY + t * state.objectRotationSpeed
      : state.baseTiltY;
    group.rotation.z = state.objectRotationEnabled
      ? state.baseTiltZ + t * Z_ROTATION_SPEED
      : state.baseTiltZ;
  });

  return <group ref={groupRef} />;
}
