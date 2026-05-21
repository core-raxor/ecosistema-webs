// ── Scene types ───────────────────────────────────────────────────────────────

export type SceneType =
  | "editorial-aura"
  | "structural-frame"
  | "operational-core"
  | "intelligence-network"
  | "automation-flow"
  | "technical-depth"
  | "globe-grid";

export type SceneShape = "circle" | "soft-square" | "square" | "panel";

// ── Parametric object config ──────────────────────────────────────────────────
//
// Engine rules (not configurable per brand):
//   - All loops are closed      (getClosedLoopAngle enforces [0, 2π))
//   - All points share one material (single ShaderMaterial, uniform size/alpha/color)
//   - Construction by rings/curves only (no random points, no isolated vertices)
//   - Pose is always fixed       (no orbital rotation)
//   - Motion is internal only    (per-point wave on tube surface, deterministic)

export interface ParamObjectConfig {
  // ── Geometry ──────────────────────────────────────────────────────────────
  majorSegments: number; // points around main ring (u)
  minorSegments: number; // points around tube     (v)
  majorRadius: number; // ring centre distance from origin
  minorRadius: number; // tube radius
  objectScale: number; // uniform group scale
  targetPointSpacing: number; // target arc-length between adjacent points (world units)
  spacingTolerance: number; // acceptable deviation from targetPointSpacing

  // ── Material ──────────────────────────────────────────────────────────────
  pointSize: number; // uniform point size (shader uniform)
  pointAlpha: number; // uniform point alpha (shader uniform)
  basePointColor: string; // hex base color before accent lerp
  accentMix: number; // lerp factor toward brand accent color [0, 1]

  // ── Pose — fixed, never changes at runtime ────────────────────────────────
  baseTiltX: number; // static X tilt (rad)
  baseTiltY: number; // static Y tilt (rad)
  baseTiltZ: number; // static Z tilt (rad)

  // ── Particle flow (surface-constrained motion) ────────────────────────────
  particleFlowEnabled: boolean; // activate surface flow
  particleFlowSpeed: number; // angular advance per second along U ring (rad/s)
  particleFlowLayerOffset: number; // phase offset between consecutive minor rings (rad)
  particleFlowDirection: 1 | -1; // 1 = forward (right), -1 = backward (left)
  particleFlowLaneDuration: number; // seconds per active lane — 0 = continuous, >0 = sequential

  // ── Object rotation ───────────────────────────────────────────────────────
  objectRotationEnabled: boolean; // activate full-object Y rotation
  objectRotationSpeed: number; // radians per second
}

export interface ParamObjectRanges {
  // ── Geometry ──────────────────────────────────────────────────────────────
  majorSegments: { min: number; max: number };
  minorSegments: { min: number; max: number };
  majorRadius: { min: number; max: number };
  minorRadius: { min: number; max: number };
  objectScale: { min: number; max: number };
  targetPointSpacing: { min: number; max: number };
  spacingTolerance: { min: number; max: number };

  // ── Material ──────────────────────────────────────────────────────────────
  pointSize: { min: number; max: number };
  pointAlpha: { min: number; max: number };
  accentMix: { min: number; max: number };

  // ── Pose ──────────────────────────────────────────────────────────────────
  baseTiltX: { min: number; max: number };
  baseTiltY: { min: number; max: number };
  baseTiltZ: { min: number; max: number };

  // ── Particle flow ─────────────────────────────────────────────────────────
  particleFlowSpeed: { min: number; max: number };
  particleFlowLayerOffset: { min: number; max: number };
  particleFlowLaneDuration: { min: number; max: number };

  // ── Object rotation ───────────────────────────────────────────────────────
  objectRotationSpeed: { min: number; max: number };
}
