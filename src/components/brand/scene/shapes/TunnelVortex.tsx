"use client";

import { useFrame } from "@react-three/fiber";
import type React from "react";
import { useEffect, useRef } from "react";
import * as THREE from "three";

// ── Tunnel constants ──────────────────────────────────────────────────────────

const Z_FAR = -14;
const Z_NEAR = 2;
const Z_DEPTH = Z_NEAR - Z_FAR; // 16

// Hyperboloid funnel: r(z) = sqrt(R_THROAT² + (z - Z_FAR)² * K_HYPER²)
// r(Z_FAR) = 0.10  (vanishing-point glow cluster)
// r(Z_NEAR) ≈ 2.20 (wide near opening)
const R_THROAT = 0.1;
const K_HYPER = 0.137;

function ringRadius(z: number): number {
  const dz = z - Z_FAR;
  return Math.sqrt(R_THROAT * R_THROAT + dz * dz * K_HYPER * K_HYPER);
}

// Rings (horizontal cross-sections)
const RING_COUNT = 28;
const PTS_PER_RING = 48;
const Z_STEP_RING = Z_DEPTH / RING_COUNT; // ≈ 0.571

// Lanes (longitudinal lines — independent particles at fixed angles)
const LANE_COUNT = 16;
const LANE_PTS = 40;
const Z_STEP_LANE = Z_DEPTH / LANE_PTS; // 0.4

const TOTAL_RING_PTS = RING_COUNT * PTS_PER_RING; // 1344
const TOTAL_LANE_PTS = LANE_COUNT * LANE_PTS; //  640
const TOTAL_PTS = TOTAL_RING_PTS + TOTAL_LANE_PTS; // 1984

const SPEED = 2.5; // world units / second

// ── Shaders ───────────────────────────────────────────────────────────────────

const vertexShader = /* glsl */ `
  uniform float uScale;
  uniform float uPointSize;
  varying float vDepth;

  void main() {
    vDepth = position.z;
    vec4 mvPosition = modelViewMatrix * vec4(position, 1.0);
    gl_PointSize = max(uPointSize * (uScale / -mvPosition.z), 1.0);
    gl_Position  = projectionMatrix * mvPosition;
  }
`;

const fragmentShader = /* glsl */ `
  uniform vec3  uColor;
  uniform float uAlpha;
  varying float vDepth;

  const float Z_FAR_C = -14.0;

  void main() {
    vec2  uv    = gl_PointCoord - vec2(0.5);
    float dist  = length(uv);
    float shape = 1.0 - smoothstep(0.30, 0.50, dist);
    if (shape < 0.01) discard;

    // Dim at far end, bright as particles approach; fade out right before camera
    float fadeIn  = clamp((vDepth - Z_FAR_C) / 10.0, 0.0, 1.0);
    float fadeOut = 1.0 - clamp((vDepth - 0.5) / 1.5, 0.0, 1.0);
    float a = mix(0.10, uAlpha, fadeIn * fadeIn) * fadeOut;

    gl_FragColor = vec4(uColor, shape * a);
  }
`;

// ── State ─────────────────────────────────────────────────────────────────────

interface TunnelState {
  mat: THREE.ShaderMaterial;
  scaleUni: THREE.IUniform<number>;
  positions: Float32Array;
  posAttr: THREE.BufferAttribute;
  ringCos: Float32Array;
  ringSin: Float32Array;
  laneCos: Float32Array;
  laneSin: Float32Array;
}

// ── Component ─────────────────────────────────────────────────────────────────

interface TunnelVortexProps {
  accentColor?: string;
}

export function TunnelVortex({ accentColor }: TunnelVortexProps) {
  const groupRef = useRef<THREE.Group>(null);
  const stateRef = useRef<TunnelState | null>(null);

  useEffect(() => {
    const group = groupRef.current;
    if (!group || stateRef.current) return;

    const color = new THREE.Color("#d7deec");
    if (accentColor) color.lerp(new THREE.Color(accentColor), 0.06);

    // Precompute unit-circle coords — multiplied by r(z) each frame
    const ringCos = new Float32Array(PTS_PER_RING);
    const ringSin = new Float32Array(PTS_PER_RING);
    for (let j = 0; j < PTS_PER_RING; j++) {
      const a = (2 * Math.PI * j) / PTS_PER_RING;
      ringCos[j] = Math.cos(a);
      ringSin[j] = Math.sin(a);
    }

    const laneCos = new Float32Array(LANE_COUNT);
    const laneSin = new Float32Array(LANE_COUNT);
    for (let l = 0; l < LANE_COUNT; l++) {
      const a = (2 * Math.PI * l) / LANE_COUNT;
      laneCos[l] = Math.cos(a);
      laneSin[l] = Math.sin(a);
    }

    // Positions buffer — x, y, z all updated every frame
    const positions = new Float32Array(TOTAL_PTS * 3);

    const posAttr = new THREE.BufferAttribute(positions, 3);
    posAttr.setUsage(THREE.DynamicDrawUsage);

    const geo = new THREE.BufferGeometry();
    geo.setAttribute("position", posAttr);

    const scaleUni: THREE.IUniform<number> = { value: 600 };

    const mat = new THREE.ShaderMaterial({
      vertexShader,
      fragmentShader,
      uniforms: {
        uColor: { value: color },
        uScale: scaleUni,
        uPointSize: { value: 0.03 },
        uAlpha: { value: 0.88 },
      },
      transparent: true,
      depthWrite: false,
      blending: THREE.AdditiveBlending,
    });

    group.add(new THREE.Points(geo, mat));

    stateRef.current = { mat, scaleUni, positions, posAttr, ringCos, ringSin, laneCos, laneSin };

    return () => {
      group.clear();
      geo.dispose();
      mat.dispose();
      stateRef.current = null;
    };
  }, [accentColor]);

  useFrame(({ camera, gl, clock }) => {
    const state = stateRef.current;
    const group = groupRef.current;
    if (!state || !group) return;

    state.scaleUni.value =
      ((camera as THREE.PerspectiveCamera).projectionMatrix.elements[5] ?? 0) *
      0.5 *
      gl.domElement.height;

    const t = clock.getElapsedTime();
    const { positions, posAttr, ringCos, ringSin, laneCos, laneSin } = state;

    // Rings: x, y scale with hyperboloid radius at each ring's current z
    for (let i = 0; i < RING_COUNT; i++) {
      const phase = (((t * SPEED + i * Z_STEP_RING) % Z_DEPTH) + Z_DEPTH) % Z_DEPTH;
      const z = Z_FAR + phase;
      const r = ringRadius(z);
      const base = i * PTS_PER_RING;
      for (let j = 0; j < PTS_PER_RING; j++) {
        const p = (base + j) * 3;
        positions[p] = r * ringCos[j]!;
        positions[p + 1] = r * ringSin[j]!;
        positions[p + 2] = z;
      }
    }

    // Lanes: same radius function, each point independent along z
    for (let l = 0; l < LANE_COUNT; l++) {
      for (let p = 0; p < LANE_PTS; p++) {
        const phase = (((t * SPEED + p * Z_STEP_LANE) % Z_DEPTH) + Z_DEPTH) % Z_DEPTH;
        const z = Z_FAR + phase;
        const r = ringRadius(z);
        const ptIdx = TOTAL_RING_PTS + l * LANE_PTS + p;
        positions[ptIdx * 3] = r * laneCos[l]!;
        positions[ptIdx * 3 + 1] = r * laneSin[l]!;
        positions[ptIdx * 3 + 2] = z;
      }
    }

    posAttr.needsUpdate = true;
  });

  return <group ref={groupRef} />;
}
