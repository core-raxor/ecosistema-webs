"use client";

import type { ParamObjectConfig, SceneType } from "@/lib/types";
import { Canvas } from "@react-three/fiber";
import type { RefObject } from "react";
import { AutomationFlow } from "./shapes/AutomationFlow";
import { EditorialAura } from "./shapes/EditorialAura";
import { GlobeGrid } from "./shapes/GlobeGrid";
import { IntelligenceNetwork } from "./shapes/IntelligenceNetwork";
import { OperationalCore } from "./shapes/OperationalCore";
import { StructuralFrame } from "./shapes/StructuralFrame";
import { TechnicalDepth } from "./shapes/TechnicalDepth";

// ── Types ─────────────────────────────────────────────────────────────────────

interface SceneCanvasProps {
  sceneType: SceneType;
  accentColor: string;
  objectConfig?: Partial<ParamObjectConfig> | undefined;
  scrollScaleRef?: RefObject<number> | undefined;
  scrollColorRef?: RefObject<number> | undefined;
}

// ── Shape dispatcher ──────────────────────────────────────────────────────────

function ActiveShape({
  sceneType,
  accentColor,
  objectConfig,
  scrollScaleRef,
  scrollColorRef,
}: SceneCanvasProps) {
  switch (sceneType) {
    case "operational-core":
      return (
        <OperationalCore
          accentColor={accentColor}
          objectConfig={objectConfig}
          scrollScaleRef={scrollScaleRef}
          scrollColorRef={scrollColorRef}
        />
      );
    case "editorial-aura":
      return (
        <EditorialAura
          accentColor={accentColor}
          objectConfig={objectConfig}
          scrollScaleRef={scrollScaleRef}
          scrollColorRef={scrollColorRef}
        />
      );
    case "structural-frame":
      return (
        <StructuralFrame
          accentColor={accentColor}
          objectConfig={objectConfig}
          scrollScaleRef={scrollScaleRef}
          scrollColorRef={scrollColorRef}
        />
      );
    case "intelligence-network":
      return (
        <IntelligenceNetwork
          accentColor={accentColor}
          objectConfig={objectConfig}
          scrollScaleRef={scrollScaleRef}
          scrollColorRef={scrollColorRef}
        />
      );
    case "automation-flow":
      return (
        <AutomationFlow
          accentColor={accentColor}
          objectConfig={objectConfig}
          scrollScaleRef={scrollScaleRef}
          scrollColorRef={scrollColorRef}
        />
      );
    case "technical-depth":
      return (
        <TechnicalDepth
          accentColor={accentColor}
          objectConfig={objectConfig}
          scrollScaleRef={scrollScaleRef}
          scrollColorRef={scrollColorRef}
        />
      );
    case "globe-grid":
      return (
        <GlobeGrid
          accentColor={accentColor}
          objectConfig={objectConfig}
          scrollScaleRef={scrollScaleRef}
          scrollColorRef={scrollColorRef}
        />
      );
  }
}

// ── Canvas ────────────────────────────────────────────────────────────────────

export function SceneCanvas({
  sceneType,
  accentColor,
  objectConfig,
  scrollScaleRef,
  scrollColorRef,
}: SceneCanvasProps) {
  return (
    <Canvas
      camera={{ position: [0, 0, 5.5], fov: 45 }}
      gl={{ antialias: true, alpha: true }}
      dpr={[1, 2]}
      style={{ background: "transparent" }}
    >
      <ActiveShape
        sceneType={sceneType}
        accentColor={accentColor}
        objectConfig={objectConfig}
        scrollScaleRef={scrollScaleRef}
        scrollColorRef={scrollColorRef}
      />
    </Canvas>
  );
}
