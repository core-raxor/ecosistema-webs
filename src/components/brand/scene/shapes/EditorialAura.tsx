"use client";

import { useFrame } from "@react-three/fiber";
import { useEffect, useRef } from "react";
import type React from "react";
import * as THREE from "three";
import type { ParamObjectConfig } from "@/lib/types/scene";
import { mergeParamObjectConfig } from "@/components/brand/scene/engine/parametricObjectContract";

// ── Full Isometric Structural Cube ────────────────────────────────────────────
//
//  6 faces built as equidistant point grids on a cube centered at [0,0,0].
//  half = cfg.majorRadius   G = cfg.majorSegments
//
//  Dedup: shared edges and corners stored once via posKey Map.

function lerpVal(a: number, b: number, t: number): number {
  return a + (b - a) * t;
}

// ── Geometry ──────────────────────────────────────────────────────────────────

interface CubeGeometry {
  positions: Float32Array;
  pointCount: number;
}

function buildFullIsometricCube(cfg: ParamObjectConfig): CubeGeometry {
  const G = cfg.majorSegments;
  const h = cfg.majorRadius;

  const seen = new Map<string, number>();
  const pts: number[] = [];

  function posKey(x: number, y: number, z: number): string {
    return `${x.toFixed(5)},${y.toFixed(5)},${z.toFixed(5)}`;
  }

  function getOrAdd(x: number, y: number, z: number): number {
    const k = posKey(x, y, z);
    let i = seen.get(k);
    if (i === undefined) {
      i = pts.length / 3;
      pts.push(x, y, z);
      seen.set(k, i);
    }
    return i;
  }

  type PosGetter = (i: number, j: number) => [number, number, number];

  function buildFace(getPos: PosGetter): void {
    for (let i = 0; i <= G; i++) {
      for (let j = 0; j <= G; j++) {
        const [x, y, z] = getPos(i, j);
        getOrAdd(x, y, z);
      }
    }
  }

  buildFace((i, j) => [lerpVal(-h, +h, i / G), +h, lerpVal(-h, +h, j / G)]);
  buildFace((i, j) => [lerpVal(-h, +h, i / G), -h, lerpVal(-h, +h, j / G)]);
  buildFace((i, j) => [lerpVal(-h, +h, i / G), lerpVal(-h, +h, j / G), +h]);
  buildFace((i, j) => [lerpVal(-h, +h, i / G), lerpVal(-h, +h, j / G), -h]);
  buildFace((i, j) => [-h, lerpVal(-h, +h, i / G), lerpVal(-h, +h, j / G)]);
  buildFace((i, j) => [+h, lerpVal(-h, +h, i / G), lerpVal(-h, +h, j / G)]);

  return { positions: new Float32Array(pts), pointCount: pts.length / 3 };
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

interface CubeState {
  mat: THREE.ShaderMaterial;
  scaleUni: THREE.IUniform<number>;
  objectScale: number;
  baseAlpha: number;
  baseTiltX: number;
  baseTiltY: number;
  baseTiltZ: number;
  objectRotationEnabled: boolean;
  objectRotationSpeed: number;
}

// ── Component ─────────────────────────────────────────────────────────────────

interface EditorialAuraProps {
  accentColor?: string;
  objectConfig?: Partial<ParamObjectConfig> | undefined;
  scrollScaleRef?: React.RefObject<number> | undefined;
}

export function EditorialAura({ accentColor, objectConfig, scrollScaleRef }: EditorialAuraProps) {
  const groupRef = useRef<THREE.Group>(null);
  const stateRef = useRef<CubeState | null>(null);

  useEffect(() => {
    const group = groupRef.current;
    if (!group || stateRef.current) return;

    const cfg = mergeParamObjectConfig(objectConfig);
    const cube = buildFullIsometricCube(cfg);

    const geo = new THREE.BufferGeometry();
    geo.setAttribute("position", new THREE.BufferAttribute(cube.positions, 3));

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
      baseTiltX: cfg.baseTiltX,
      baseTiltY: cfg.baseTiltY,
      baseTiltZ: cfg.baseTiltZ,
      objectRotationEnabled: cfg.objectRotationEnabled,
      objectRotationSpeed: cfg.objectRotationSpeed,
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
    group.scale.setScalar(state.objectScale * s);
    group.rotation.x = state.baseTiltX;
    group.rotation.y = state.objectRotationEnabled
      ? state.baseTiltY + t * state.objectRotationSpeed
      : state.baseTiltY;
    group.rotation.z = state.baseTiltZ;
  });

  return <group ref={groupRef} />;
}
