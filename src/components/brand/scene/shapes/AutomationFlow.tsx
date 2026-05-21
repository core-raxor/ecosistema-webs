"use client";

import { mergeParamObjectConfig } from "@/components/brand/scene/engine/parametricObjectContract";
import type { ParamObjectConfig } from "@/lib/types/scene";
import { useFrame } from "@react-three/fiber";
import type React from "react";
import { useEffect, useRef } from "react";
import * as THREE from "three";

// ── Connected Geodesic Network — F=3 Icosahedron Subdivision ─────────────────
//
//  Two-tier point system exclusive to Nixen:
//    • Nodes  (large)  — 92 geodesic vertices (F=3: 12 + 60 edge + 20 face)
//    • Edges  (small)  — 2 interior pts × 270 edges = 540 pts
//
//  Construction per icosahedron face [A,B,C] at frequency F=3:
//    Barycentric grid: point(u,v) = normalize(A·(F−u−v)/F + B·u/F + C·v/F) · R
//    Edges: for each (u,v) with u+v < F:
//      (u,v)→(u+1,v)  horizontal
//      (u,v)→(u,v+1)  diagonal
//      (u+1,v)→(u,v+1) anti-diagonal  ← closes downward triangles
//
//  NODE_SIZE_RATIO hardcoded — Nixen-exclusive, not in shared contract.

const FREQ = 3;
const NODE_SIZE_RATIO = 1.8;

// ── Icosahedron base data ─────────────────────────────────────────────────────

const φ = (1 + Math.sqrt(5)) / 2;

const ICO_RAW: [number, number, number][] = [
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

const ICO_FACES: [number, number, number][] = [
  [0, 1, 8],
  [0, 1, 9],
  [0, 4, 5],
  [0, 4, 8],
  [0, 5, 9],
  [1, 6, 7],
  [1, 6, 8],
  [1, 7, 9],
  [2, 3, 10],
  [2, 3, 11],
  [2, 4, 5],
  [2, 4, 10],
  [2, 5, 11],
  [3, 6, 7],
  [3, 6, 10],
  [3, 7, 11],
  [4, 8, 10],
  [5, 9, 11],
  [6, 8, 10],
  [7, 9, 11],
];

// ── Geometry ──────────────────────────────────────────────────────────────────

interface GeodesicGeometry {
  nodePositions: Float32Array;
  edgePositions: Float32Array;
}

function buildGeodesicSphere(cfg: ParamObjectConfig): GeodesicGeometry {
  const R = cfg.majorRadius;
  const norm = R / Math.sqrt(1 + φ * φ);

  const icoVerts = ICO_RAW.map(([x, y, z]) => new THREE.Vector3(x * norm, y * norm, z * norm));

  const vertMap = new Map<string, number>();
  const verts: THREE.Vector3[] = [];
  const edgeSet = new Set<string>();
  const edges: [number, number][] = [];

  function posKey(v: THREE.Vector3): string {
    return `${v.x.toFixed(5)},${v.y.toFixed(5)},${v.z.toFixed(5)}`;
  }

  function getVert(
    A: THREE.Vector3,
    B: THREE.Vector3,
    C: THREE.Vector3,
    u: number,
    v: number,
  ): number {
    const w = FREQ - u - v;
    const p = new THREE.Vector3(
      A.x * (w / FREQ) + B.x * (u / FREQ) + C.x * (v / FREQ),
      A.y * (w / FREQ) + B.y * (u / FREQ) + C.y * (v / FREQ),
      A.z * (w / FREQ) + B.z * (u / FREQ) + C.z * (v / FREQ),
    )
      .normalize()
      .multiplyScalar(R);
    const k = posKey(p);
    let idx = vertMap.get(k);
    if (idx === undefined) {
      idx = verts.length;
      verts.push(p);
      vertMap.set(k, idx);
    }
    return idx;
  }

  function addEdge(ai: number, bi: number): void {
    const key = ai < bi ? `${ai}|${bi}` : `${bi}|${ai}`;
    if (!edgeSet.has(key)) {
      edgeSet.add(key);
      edges.push([ai, bi]);
    }
  }

  // Build full triangulated mesh per face
  for (const [ai, bi, ci] of ICO_FACES) {
    const A = icoVerts[ai]!;
    const B = icoVerts[bi]!;
    const C = icoVerts[ci]!;

    for (let u = 0; u <= FREQ; u++) {
      for (let v = 0; v <= FREQ - u; v++) {
        if (u + v < FREQ) {
          const p00 = getVert(A, B, C, u, v);
          const p10 = getVert(A, B, C, u + 1, v);
          const p01 = getVert(A, B, C, u, v + 1);
          addEdge(p00, p10); // horizontal
          addEdge(p00, p01); // diagonal
          addEdge(p10, p01); // anti-diagonal — closes downward triangles
        }
      }
    }
  }

  // All vertices are nodes (large points)
  const nodePositions = new Float32Array(verts.length * 3);
  verts.forEach((v, i) => {
    nodePositions[i * 3] = v.x;
    nodePositions[i * 3 + 1] = v.y;
    nodePositions[i * 3 + 2] = v.z;
  });

  // Edge interior points — 2 per edge (t = 1/3, 2/3)
  const edgePtMap = new Map<string, true>();
  const edgePts: number[] = [];

  for (const [ai, bi] of edges) {
    const a = verts[ai]!;
    const b = verts[bi]!;
    for (const t of [1 / 3, 2 / 3]) {
      const p = a.clone().lerp(b, t).normalize().multiplyScalar(R);
      const k = posKey(p);
      if (!edgePtMap.has(k)) {
        edgePtMap.set(k, true);
        edgePts.push(p.x, p.y, p.z);
      }
    }
  }

  return {
    nodePositions,
    edgePositions: new Float32Array(edgePts),
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

interface GeoState {
  edgeMat: THREE.ShaderMaterial;
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

interface AutomationFlowProps {
  accentColor?: string;
  objectConfig?: Partial<ParamObjectConfig> | undefined;
  scrollScaleRef?: React.RefObject<number> | undefined;
  scrollColorRef?: React.RefObject<number> | undefined;
}

export function AutomationFlow({
  accentColor,
  objectConfig,
  scrollScaleRef,
  scrollColorRef,
}: AutomationFlowProps) {
  const groupRef = useRef<THREE.Group>(null);
  const stateRef = useRef<GeoState | null>(null);

  useEffect(() => {
    const group = groupRef.current;
    if (!group || stateRef.current) return;

    const cfg = mergeParamObjectConfig(objectConfig);
    const geo = buildGeodesicSphere(cfg);

    const color = new THREE.Color(cfg.basePointColor);
    if (accentColor) color.lerp(new THREE.Color(accentColor), cfg.accentMix);

    const scaleUni: THREE.IUniform<number> = { value: 600 };
    const nodeScaleUni: THREE.IUniform<number> = { value: 600 };

    const edgeGeo = new THREE.BufferGeometry();
    edgeGeo.setAttribute("position", new THREE.BufferAttribute(geo.edgePositions, 3));
    const edgeMat = new THREE.ShaderMaterial({
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

    group.add(new THREE.Points(edgeGeo, edgeMat));
    group.add(new THREE.Points(nodeGeo, nodeMat));
    group.scale.setScalar(cfg.objectScale);

    stateRef.current = {
      edgeMat,
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
      bgColor: new THREE.Color("#07090E"),
    };

    return () => {
      group.clear();
      edgeGeo.dispose();
      edgeMat.dispose();
      nodeGeo.dispose();
      nodeMat.dispose();
      stateRef.current = null;
    };
  }, [accentColor, objectConfig]);

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
    (state.edgeMat.uniforms.uColor!.value as THREE.Color)
      .copy(state.initialColor)
      .lerp(state.bgColor, colorT);
    (state.nodeMat.uniforms.uColor!.value as THREE.Color)
      .copy(state.initialColor)
      .lerp(state.bgColor, colorT);
    state.edgeMat.uniforms.uAlpha!.value = state.baseAlpha;
    state.nodeMat.uniforms.uAlpha!.value = state.baseAlpha;
    group.scale.setScalar(state.objectScale * sc);
    group.rotation.x = state.baseTiltX;
    group.rotation.y = state.objectRotationEnabled
      ? state.baseTiltY + t * state.objectRotationSpeed
      : state.baseTiltY;
    group.rotation.z = state.baseTiltZ;
  });

  return <group ref={groupRef} />;
}
