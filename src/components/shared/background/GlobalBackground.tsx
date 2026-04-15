"use client";

import type { BrandBackgroundOverlay, BrandConfig } from "@/lib/types";
import { ParticlesLayer } from "./ParticlesLayer";

type GlobalBackgroundProps = {
  brand: Pick<BrandConfig, "theme">;
};

function BackgroundPattern({
  pattern,
}: {
  pattern: NonNullable<BrandBackgroundOverlay["pattern"]>;
}) {
  const { type, color, size, opacity, dotRadius = "1px" } = pattern;

  const backgroundImage =
    type === "dot-grid"
      ? `radial-gradient(${color} ${dotRadius}, transparent ${dotRadius})`
      : `linear-gradient(${color} 1px, transparent 1px), linear-gradient(90deg, ${color} 1px, transparent 1px)`;

  return (
    <div className="absolute inset-0" style={{ backgroundImage, backgroundSize: size, opacity }} />
  );
}

export function GlobalBackground({ brand }: GlobalBackgroundProps) {
  const overlay = brand.theme.backgroundOverlay;
  const particlesMode = brand.theme.visualSystem?.particles?.mode;
  const hasParticles = particlesMode !== undefined && particlesMode !== "none";

  return (
    <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
      <div className="absolute inset-0 bg-(--bg)]" />

      {hasParticles && <ParticlesLayer brand={brand} />}

      <div
        className="absolute inset-0"
        style={{
          background: "radial-gradient(circle at 50% 0%, rgba(255,255,255,0.035), transparent 38%)",
        }}
      />

      {overlay?.pattern && <BackgroundPattern pattern={overlay.pattern} />}

      {overlay?.gradientOverlay && (
        <div className="absolute inset-0" style={{ background: overlay.gradientOverlay }} />
      )}

      <div
        className="absolute inset-0"
        style={{
          background: "linear-gradient(180deg, rgba(0,0,0,0.14) 0%, rgba(0,0,0,0.34) 100%)",
        }}
      />
    </div>
  );
}
