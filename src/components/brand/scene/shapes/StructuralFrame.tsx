"use client";

import { useEffect, useRef } from "react";
import type React from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";
import type { ParamObjectConfig } from "@/lib/types/scene";
import { mergeParamObjectConfig } from "@/components/brand/scene/engine/parametricObjectContract";

// ── Snub Cube — Archimedean solid, fully triangulated ────────────────────────
//
//  24 vertices, 60 edges + 6 square diagonals = 66 segments, all faces triangular.
//  Vertices: all even elements of the signed permutation group B₃ applied to
//  (1, 1/ξ, ξ), where ξ ≈ 1.8393 is the tribonacci constant (real root of
//  x³ − x² − x − 1 = 0). "Even element" = det +1 = (even perm × even neg
//  count) or (odd perm × odd neg count).
//
//  Two-tier point system (same pattern as AutomationFlow):
//    • Nodes  (large)  — 24 vertices at radius R
//    • Edges  (small)  — (majorSegments−1) interior pts per edge, straight lerp
//
//  NODE_SIZE_RATIO hardcoded — Dextor-exclusive, not in shared contract.

const NODE_SIZE_RATIO = 2.0;
const Z_ROTATION_SPEED = 0.015; // secondary axis — slow precession, ~7 min full cycle

// ── Tribonacci constant ────────────────────────────────────────────────────────

const ξ = 1.8392867552141612; // real root of x³ − x² − x − 1 = 0
const ξi = 1 / ξ; // ≈ 0.5437

// ── Geometry ──────────────────────────────────────────────────────────────────

interface SnubGeometry {
  nodePositions: Float32Array;
  edgePositions: Float32Array;
}

function buildSnubCube(cfg: ParamObjectConfig): SnubGeometry {
  const R = cfg.majorRadius;

  // 24 raw vertices — even B₃ signed permutations of (a, b, c) = (1, 1/ξ, ξ)
  const a = 1,
    b = ξi,
    c = ξ;
  const rawVerts: [number, number, number][] = [
    // Even permutations, 0 negatives (3)
    [a, b, c],
    [b, c, a],
    [c, a, b],
    // Even permutations, 2 negatives (9)
    [-a, -b, c],
    [-a, b, -c],
    [a, -b, -c],
    [-b, -c, a],
    [-b, c, -a],
    [b, -c, -a],
    [-c, -a, b],
    [-c, a, -b],
    [c, -a, -b],
    // Odd permutations, 1 negative (9)
    [-a, c, b],
    [a, -c, b],
    [a, c, -b],
    [-c, b, a],
    [c, -b, a],
    [c, b, -a],
    [-b, a, c],
    [b, -a, c],
    [b, a, -c],
    // Odd permutations, 3 negatives (3)
    [-a, -c, -b],
    [-c, -b, -a],
    [-b, -a, -c],
  ];

  // Normalize each vertex to radius R (snub cube is vertex-transitive: all |v| equal)
  const verts = rawVerts.map(([x, y, z]) => {
    const len = Math.sqrt(x * x + y * y + z * z);
    return new THREE.Vector3((x * R) / len, (y * R) / len, (z * R) / len);
  });

  // Edge detection: adjacent vertices share the snub cube edge length
  // From v0=(a,b,c) to v1=(b,c,a): rawEdgeLen^2 = (a-b)^2+(b-c)^2+(c-a)^2
  const rawEdgeLen2 = (a - b) * (a - b) + (b - c) * (b - c) + (c - a) * (c - a);
  const rawNorm2 = a * a + b * b + c * c; // same for all vertices
  const edgeLen2 = rawEdgeLen2 * ((R * R) / rawNorm2);
  const eps = edgeLen2 * 0.08;

  const edges: [number, number][] = [];
  for (let i = 0; i < 24; i++) {
    for (let j = i + 1; j < 24; j++) {
      if (Math.abs(verts[i]!.distanceToSquared(verts[j]!) - edgeLen2) < eps) {
        edges.push([i, j]);
      }
    }
  }

  // Find 6 square faces and add one diagonal per square, making every face triangular.
  // Square [u, a, c, b]: u adjacent to a and b (not each other), c adjacent to both a and b (not u).
  // Diagonal: u-c (opposite corners of the square).
  const adjSet = new Map<number, Set<number>>();
  for (let i = 0; i < 24; i++) adjSet.set(i, new Set());
  for (const [ei, ej] of edges) {
    adjSet.get(ei)!.add(ej);
    adjSet.get(ej)!.add(ei);
  }

  const squareKeys = new Set<string>();
  const diagonals: [number, number][] = [];

  for (let u = 0; u < 24; u++) {
    const nbrs = [...adjSet.get(u)!];
    for (let i = 0; i < nbrs.length; i++) {
      for (let j = i + 1; j < nbrs.length; j++) {
        const na = nbrs[i]!,
          nb = nbrs[j]!;
        if (adjSet.get(na)!.has(nb)) continue; // triangle face, skip
        for (const c of adjSet.get(na)!) {
          if (c === u || !adjSet.get(nb)!.has(c)) continue;
          const key = [u, na, c, nb].sort((x, y) => x - y).join(",");
          if (!squareKeys.has(key)) {
            squareKeys.add(key);
            diagonals.push([Math.min(u, c), Math.max(u, c)]);
          }
        }
      }
    }
  }

  // All segments: 60 edges + 6 square diagonals
  const allSegments = [...edges, ...diagonals];

  // Node positions (24 vertices)
  const nodePositions = new Float32Array(24 * 3);
  verts.forEach((v, i) => {
    nodePositions[i * 3] = v.x;
    nodePositions[i * 3 + 1] = v.y;
    nodePositions[i * 3 + 2] = v.z;
  });

  // Edge interior points — straight lerp, (majorSegments-1) pts per segment
  const N = Math.max(2, cfg.majorSegments);
  const edgePtMap = new Map<string, true>();
  const edgePts: number[] = [];

  function posKey(v: THREE.Vector3): string {
    return `${v.x.toFixed(5)},${v.y.toFixed(5)},${v.z.toFixed(5)}`;
  }

  for (const [ai, bi] of allSegments) {
    const va = verts[ai]!;
    const vb = verts[bi]!;
    for (let step = 1; step < N; step++) {
      const t = step / N;
      const p = va.clone().lerp(vb, t);
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

interface SnubState {
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
}

// ── Component ─────────────────────────────────────────────────────────────────

interface StructuralFrameProps {
  accentColor?: string;
  objectConfig?: Partial<ParamObjectConfig> | undefined;
  scrollScaleRef?: React.RefObject<number> | undefined;
}

export function StructuralFrame({
  accentColor,
  objectConfig,
  scrollScaleRef,
}: StructuralFrameProps) {
  const groupRef = useRef<THREE.Group>(null);
  const stateRef = useRef<SnubState | null>(null);

  useEffect(() => {
    const group = groupRef.current;
    if (!group || stateRef.current) return;

    const cfg = mergeParamObjectConfig(objectConfig);
    const geo = buildSnubCube(cfg);

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
    const alphaM = sc >= 0.5 ? 1.0 : 0.05 + Math.max(0, (sc - 0.1) / 0.4) * 0.95;

    state.edgeMat.uniforms.uAlpha!.value = state.baseAlpha * alphaM;
    state.nodeMat.uniforms.uAlpha!.value = state.baseAlpha * alphaM;
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
