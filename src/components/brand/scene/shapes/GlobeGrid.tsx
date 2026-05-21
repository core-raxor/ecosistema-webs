"use client";

import { mergeParamObjectConfig } from "@/components/brand/scene/engine/parametricObjectContract";
import type { ParamObjectConfig } from "@/lib/types/scene";
import { useFrame, useThree } from "@react-three/fiber";
import type React from "react";
import { useEffect, useRef } from "react";
import * as THREE from "three";

// ── Globe grid geometry ───────────────────────────────────────────────────────
//
//  Sphere parametrization:
//    x = R · sin(θ) · cos(φ)
//    y = R · cos(θ)          (Y is up)
//    z = R · sin(θ) · sin(φ)
//
//  majorSegments → meridian count (longitude lines, pole-to-pole)
//  minorSegments → parallel count (latitude circles, poles excluded)
//  majorRadius   → sphere radius
//  targetPointSpacing → controls point density along each line

function buildGlobeGrid(cfg: ParamObjectConfig): Float32Array {
  const MERIDIANS = cfg.majorSegments;
  const PARALLELS = cfg.minorSegments;
  const R = cfg.majorRadius;
  const spacing = cfg.targetPointSpacing;
  const TWO_PI = Math.PI * 2;

  const meridianArc = Math.PI * R;
  const ptsPerMeridian = Math.max(6, Math.round(meridianArc / spacing));

  const verts: number[] = [];

  // Meridians: pole-to-pole arcs at each longitude
  for (let i = 0; i < MERIDIANS; i++) {
    const phi = (i / MERIDIANS) * TWO_PI;
    const cosPhi = Math.cos(phi);
    const sinPhi = Math.sin(phi);
    for (let j = 0; j <= ptsPerMeridian; j++) {
      const theta = (j / ptsPerMeridian) * Math.PI;
      const sinT = Math.sin(theta);
      const cosT = Math.cos(theta);
      verts.push(R * sinT * cosPhi, R * cosT, R * sinT * sinPhi);
    }
  }

  // Parallels: latitude circles at evenly spaced elevations (poles excluded)
  for (let k = 1; k <= PARALLELS; k++) {
    const theta = (k / (PARALLELS + 1)) * Math.PI;
    const sinT = Math.sin(theta);
    const cosT = Math.cos(theta);
    const latCirc = TWO_PI * R * sinT;
    const ptsAtLat = Math.max(6, Math.round(latCirc / spacing));
    for (let l = 0; l < ptsAtLat; l++) {
      const phi = (l / ptsAtLat) * TWO_PI;
      verts.push(R * sinT * Math.cos(phi), R * cosT, R * sinT * Math.sin(phi));
    }
  }

  return new Float32Array(verts);
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

interface GlobeState {
  points: THREE.Points;
  mat: THREE.ShaderMaterial;
  scaleUni: THREE.IUniform<number>;
  objectScale: number;
  baseAlpha: number;
  baseTiltX: number;
  baseTiltY: number;
  baseTiltZ: number;
  rotationEnabled: boolean;
  rotationSpeed: number;
  initialColor: THREE.Color;
  bgColor: THREE.Color;
}

// ── Component ─────────────────────────────────────────────────────────────────

interface GlobeGridProps {
  accentColor?: string;
  objectConfig?: Partial<ParamObjectConfig> | undefined;
  scrollScaleRef?: React.RefObject<number> | undefined;
  scrollColorRef?: React.RefObject<number> | undefined;
}

export function GlobeGrid({
  accentColor,
  objectConfig,
  scrollScaleRef,
  scrollColorRef,
}: GlobeGridProps) {
  const groupRef = useRef<THREE.Group>(null);
  const stateRef = useRef<GlobeState | null>(null);
  const { gl } = useThree();

  useEffect(() => {
    const group = groupRef.current;
    if (!group || stateRef.current) return;

    const cfg = mergeParamObjectConfig(objectConfig);

    const positions = buildGlobeGrid(cfg);

    const geo = new THREE.BufferGeometry();
    geo.setAttribute("position", new THREE.BufferAttribute(positions, 3));

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
      baseTiltX: cfg.baseTiltX,
      baseTiltY: cfg.baseTiltY,
      baseTiltZ: cfg.baseTiltZ,
      rotationEnabled: cfg.objectRotationEnabled,
      rotationSpeed: cfg.objectRotationSpeed,
      initialColor: color.clone(),
      bgColor: new THREE.Color(
        getComputedStyle(gl.domElement).getPropertyValue("--bg").trim() || "#07090E",
      ),
    };

    return () => {
      group.remove(points);
      geo.dispose();
      mat.dispose();
      stateRef.current = null;
    };
  }, [accentColor, objectConfig, gl]);

  useFrame(({ camera, gl, clock }) => {
    const state = stateRef.current;
    const group = groupRef.current;
    if (!state || !group) return;

    state.scaleUni.value =
      ((camera as THREE.PerspectiveCamera).projectionMatrix.elements[5] ?? 0) *
      0.5 *
      gl.domElement.height;

    const s = scrollScaleRef?.current ?? 1;
    const colorT = scrollColorRef?.current ?? 0;
    (state.mat.uniforms.uColor!.value as THREE.Color)
      .copy(state.initialColor)
      .lerp(state.bgColor, colorT);
    state.mat.uniforms.uAlpha!.value = state.baseAlpha * Math.pow(1 - colorT, 2);

    group.scale.setScalar(state.objectScale * s);
    group.rotation.x = state.baseTiltX;
    group.rotation.z = state.baseTiltZ;

    if (state.rotationEnabled) {
      group.rotation.y = state.baseTiltY + clock.getElapsedTime() * state.rotationSpeed;
    } else {
      group.rotation.y = state.baseTiltY;
    }
  });

  return <group ref={groupRef} />;
}
