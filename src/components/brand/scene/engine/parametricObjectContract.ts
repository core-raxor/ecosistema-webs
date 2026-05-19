import type { ParamObjectConfig, ParamObjectRanges } from "@/lib/types/scene";

// ── Ranges ────────────────────────────────────────────────────────────────────

export const CONTRACT_RANGES: ParamObjectRanges = {
  // Geometry
  // majorSegments min=3 accommodates cube grid (G=3+) and torus (explicit values bypass fallback)
  majorSegments: { min: 3, max: 120 },
  minorSegments: { min: 3, max: 120 },
  majorRadius: { min: 0.8, max: 3.0 },
  minorRadius: { min: 0.15, max: 1.5 },
  objectScale: { min: 0.5, max: 3.0 },
  targetPointSpacing: { min: 0.05, max: 0.8 },
  spacingTolerance: { min: 0.005, max: 0.15 },

  // Material
  pointSize: { min: 0.012, max: 0.06 },
  pointAlpha: { min: 0.3, max: 1.0 },
  accentMix: { min: 0.02, max: 0.08 },

  // Pose
  baseTiltX: { min: -1.6, max: 1.6 },
  baseTiltY: { min: -3.2, max: 3.2 },
  baseTiltZ: { min: -1.0, max: 1.0 },

  // Particle flow
  particleFlowSpeed: { min: 0.02, max: 0.35 },
  particleFlowLayerOffset: { min: 0.0, max: 0.8 },
  particleFlowLaneDuration: { min: 0, max: 10 },

  // Object rotation
  objectRotationSpeed: { min: 0, max: 2.0 },
};

// ── Defaults ──────────────────────────────────────────────────────────────────

export const CONTRACT_DEFAULTS: ParamObjectConfig = {
  // Geometry
  majorSegments: 52,
  minorSegments: 14,
  majorRadius: 1.45,
  minorRadius: 0.42,
  objectScale: 1.45,
  targetPointSpacing: 0.2,
  spacingTolerance: 0.035,

  // Material
  pointSize: 0.026,
  pointAlpha: 0.82,
  basePointColor: "#d7deec",
  accentMix: 0.045,

  // Pose
  baseTiltX: -0.62,
  baseTiltY: 0,
  baseTiltZ: -0.1,

  // Particle flow
  particleFlowEnabled: true,
  particleFlowSpeed: 0.08,
  particleFlowLayerOffset: 0.22,
  particleFlowDirection: 1 as const,
  particleFlowLaneDuration: 0, // 0 = continuous (default for all shapes)

  // Object rotation
  objectRotationEnabled: false,
  objectRotationSpeed: 0,
};

// ── Merge + clamp ─────────────────────────────────────────────────────────────

function clamp(v: number, min: number, max: number): number {
  return Math.min(Math.max(v, min), max);
}

export function mergeParamObjectConfig(override?: Partial<ParamObjectConfig>): ParamObjectConfig {
  if (!override) return { ...CONTRACT_DEFAULTS };

  const r = CONTRACT_RANGES;
  const d = CONTRACT_DEFAULTS;

  return {
    // Geometry
    majorSegments: Math.round(
      clamp(override.majorSegments ?? d.majorSegments, r.majorSegments.min, r.majorSegments.max),
    ),
    minorSegments: Math.round(
      clamp(override.minorSegments ?? d.minorSegments, r.minorSegments.min, r.minorSegments.max),
    ),
    majorRadius: clamp(override.majorRadius ?? d.majorRadius, r.majorRadius.min, r.majorRadius.max),
    minorRadius: clamp(override.minorRadius ?? d.minorRadius, r.minorRadius.min, r.minorRadius.max),
    objectScale: clamp(override.objectScale ?? d.objectScale, r.objectScale.min, r.objectScale.max),
    targetPointSpacing: clamp(
      override.targetPointSpacing ?? d.targetPointSpacing,
      r.targetPointSpacing.min,
      r.targetPointSpacing.max,
    ),
    spacingTolerance: clamp(
      override.spacingTolerance ?? d.spacingTolerance,
      r.spacingTolerance.min,
      r.spacingTolerance.max,
    ),

    // Material
    pointSize: clamp(override.pointSize ?? d.pointSize, r.pointSize.min, r.pointSize.max),
    pointAlpha: clamp(override.pointAlpha ?? d.pointAlpha, r.pointAlpha.min, r.pointAlpha.max),
    basePointColor: override.basePointColor ?? d.basePointColor,
    accentMix: clamp(override.accentMix ?? d.accentMix, r.accentMix.min, r.accentMix.max),

    // Pose
    baseTiltX: clamp(override.baseTiltX ?? d.baseTiltX, r.baseTiltX.min, r.baseTiltX.max),
    baseTiltY: clamp(override.baseTiltY ?? d.baseTiltY, r.baseTiltY.min, r.baseTiltY.max),
    baseTiltZ: clamp(override.baseTiltZ ?? d.baseTiltZ, r.baseTiltZ.min, r.baseTiltZ.max),

    // Particle flow
    particleFlowEnabled: override.particleFlowEnabled ?? d.particleFlowEnabled,
    particleFlowSpeed: clamp(
      override.particleFlowSpeed ?? d.particleFlowSpeed,
      r.particleFlowSpeed.min,
      r.particleFlowSpeed.max,
    ),
    particleFlowLayerOffset: clamp(
      override.particleFlowLayerOffset ?? d.particleFlowLayerOffset,
      r.particleFlowLayerOffset.min,
      r.particleFlowLayerOffset.max,
    ),
    particleFlowDirection: override.particleFlowDirection === -1 ? -1 : 1,
    particleFlowLaneDuration: clamp(
      override.particleFlowLaneDuration ?? d.particleFlowLaneDuration,
      r.particleFlowLaneDuration.min,
      r.particleFlowLaneDuration.max,
    ),

    // Object rotation
    objectRotationEnabled: override.objectRotationEnabled ?? d.objectRotationEnabled,
    objectRotationSpeed: clamp(
      override.objectRotationSpeed ?? d.objectRotationSpeed,
      r.objectRotationSpeed.min,
      r.objectRotationSpeed.max,
    ),
  };
}

// ── Validation (dev only) ─────────────────────────────────────────────────────

export function validateConfig(config: ParamObjectConfig, label: string): void {
  if (process.env.NODE_ENV === "production") return;

  const r = CONTRACT_RANGES;
  const warn = (field: string, v: number, min: number, max: number) =>
    console.warn(`[ParametricObject:${label}] ${field} ${v} outside range [${min}, ${max}]`);

  // Geometry
  if (config.majorSegments < r.majorSegments.min || config.majorSegments > r.majorSegments.max)
    warn("majorSegments", config.majorSegments, r.majorSegments.min, r.majorSegments.max);
  if (config.minorSegments < r.minorSegments.min || config.minorSegments > r.minorSegments.max)
    warn("minorSegments", config.minorSegments, r.minorSegments.min, r.minorSegments.max);
  if (config.majorRadius < r.majorRadius.min || config.majorRadius > r.majorRadius.max)
    warn("majorRadius", config.majorRadius, r.majorRadius.min, r.majorRadius.max);
  if (config.minorRadius < r.minorRadius.min || config.minorRadius > r.minorRadius.max)
    warn("minorRadius", config.minorRadius, r.minorRadius.min, r.minorRadius.max);
  if (config.objectScale < r.objectScale.min || config.objectScale > r.objectScale.max)
    warn("objectScale", config.objectScale, r.objectScale.min, r.objectScale.max);
  if (
    config.targetPointSpacing < r.targetPointSpacing.min ||
    config.targetPointSpacing > r.targetPointSpacing.max
  )
    warn(
      "targetPointSpacing",
      config.targetPointSpacing,
      r.targetPointSpacing.min,
      r.targetPointSpacing.max,
    );

  // Material
  if (config.pointSize < r.pointSize.min || config.pointSize > r.pointSize.max)
    warn("pointSize", config.pointSize, r.pointSize.min, r.pointSize.max);
  if (config.pointAlpha < r.pointAlpha.min || config.pointAlpha > r.pointAlpha.max)
    warn("pointAlpha", config.pointAlpha, r.pointAlpha.min, r.pointAlpha.max);
  if (config.accentMix < r.accentMix.min || config.accentMix > r.accentMix.max)
    warn("accentMix", config.accentMix, r.accentMix.min, r.accentMix.max);
  if (!/^#[0-9a-fA-F]{6}$/.test(config.basePointColor))
    console.warn(
      `[ParametricObject:${label}] basePointColor "${config.basePointColor}" is not a valid 6-digit hex`,
    );

  // Particle flow
  if (
    config.particleFlowSpeed < r.particleFlowSpeed.min ||
    config.particleFlowSpeed > r.particleFlowSpeed.max
  )
    warn(
      "particleFlowSpeed",
      config.particleFlowSpeed,
      r.particleFlowSpeed.min,
      r.particleFlowSpeed.max,
    );
  if (
    config.particleFlowLayerOffset < r.particleFlowLayerOffset.min ||
    config.particleFlowLayerOffset > r.particleFlowLayerOffset.max
  )
    warn(
      "particleFlowLayerOffset",
      config.particleFlowLayerOffset,
      r.particleFlowLayerOffset.min,
      r.particleFlowLayerOffset.max,
    );
  if (
    config.particleFlowLaneDuration < r.particleFlowLaneDuration.min ||
    config.particleFlowLaneDuration > r.particleFlowLaneDuration.max
  )
    warn(
      "particleFlowLaneDuration",
      config.particleFlowLaneDuration,
      r.particleFlowLaneDuration.min,
      r.particleFlowLaneDuration.max,
    );

  // Object rotation
  if (
    config.objectRotationSpeed < r.objectRotationSpeed.min ||
    config.objectRotationSpeed > r.objectRotationSpeed.max
  )
    warn(
      "objectRotationSpeed",
      config.objectRotationSpeed,
      r.objectRotationSpeed.min,
      r.objectRotationSpeed.max,
    );
}
