// ── Parametric Geometry Grammar ───────────────────────────────────────────────
//
// Pure math helpers shared across all 3D shape components.
// No imports from Three.js, React, or project internals — fully portable.

// Returns the angle (rad) for a closed-loop parametric curve at index i
// of N total segments. Distributes N points evenly in [0, 2π) — the loop
// closes because the last point's successor is index 0 (never emits 2π).
export function getClosedLoopAngle(index: number, segments: number): number {
  return (index / segments) * Math.PI * 2;
}

// Estimates the integer segment count that best matches targetSpacing along
// a closed loop of given circumference. Clamps to [minSegments, maxSegments].
export function estimateClosedLoopSegments(
  circumference: number,
  targetSpacing: number,
  minSegments: number,
  maxSegments: number,
): number {
  const ideal = Math.round(circumference / targetSpacing);
  return Math.min(Math.max(ideal, minSegments), maxSegments);
}

// Returns true if first and last points are within tolerance of each other.
// Used to verify a closed loop is geometrically closed (not just parametrically).
export function validateLoopClosure(
  first: readonly [number, number, number],
  last: readonly [number, number, number],
  tolerance = 0.001,
): boolean {
  const dx = first[0] - last[0];
  const dy = first[1] - last[1];
  const dz = first[2] - last[2];
  return Math.sqrt(dx * dx + dy * dy + dz * dz) < tolerance;
}

// Writes (x, y, z) into a Float32Array at byte offset `offset` (in triplets).
export function pushPoint3(
  arr: Float32Array,
  offset: number,
  x: number,
  y: number,
  z: number,
): void {
  arr[offset * 3] = x;
  arr[offset * 3 + 1] = y;
  arr[offset * 3 + 2] = z;
}

// Returns the circumference of the major (outer) ring of a torus: 2π·R
export function getTorusMajorCircumference(majorRadius: number): number {
  return Math.PI * 2 * majorRadius;
}

// Returns the circumference of the minor (tube) ring of a torus: 2π·r
export function getTorusMinorCircumference(minorRadius: number): number {
  return Math.PI * 2 * minorRadius;
}

interface ResolveTorusSegmentsInput {
  majorRadius: number;
  minorRadius: number;
  targetPointSpacing: number;
  minMajorSegments: number;
  maxMajorSegments: number;
  minMinorSegments: number;
  maxMinorSegments: number;
}

interface ResolvedTorusSegments {
  majorSegments: number;
  minorSegments: number;
}

// Derives (majorSegments, minorSegments) from geometry + desired point spacing.
// Uses the mean tube radius (R) for the major ring and r for the minor ring.
// Both counts are clamped to their respective [min, max] bounds.
export function resolveTorusSegments(input: ResolveTorusSegmentsInput): ResolvedTorusSegments {
  const {
    majorRadius,
    minorRadius,
    targetPointSpacing,
    minMajorSegments,
    maxMajorSegments,
    minMinorSegments,
    maxMinorSegments,
  } = input;

  const majorSegments = estimateClosedLoopSegments(
    getTorusMajorCircumference(majorRadius),
    targetPointSpacing,
    minMajorSegments,
    maxMajorSegments,
  );

  const minorSegments = estimateClosedLoopSegments(
    getTorusMinorCircumference(minorRadius),
    targetPointSpacing,
    minMinorSegments,
    maxMinorSegments,
  );

  return { majorSegments, minorSegments };
}
