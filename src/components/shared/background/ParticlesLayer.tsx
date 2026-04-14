"use client";

import type { BrandConfig } from "@/lib/types";
import { useEffect, useRef } from "react";

type Particle = {
  x: number;
  y: number;
  r: number;
  vx: number;
  vy: number;
  alpha: number;
};

type ParticlesLayerProps = {
  brand: Pick<BrandConfig, "theme" | "slug">;
};

function getParticleCount(
  mode: "none" | "dust" | "field" | "network" | "flow",
  density: "none" | "low" | "medium",
  width: number,
  height: number,
) {
  if (mode === "none" || density === "none") return 0;

  const areaFactor = (width * height) / 22000;

  if (mode === "dust") {
    return density === "low"
      ? Math.min(26, Math.floor(areaFactor * 0.45))
      : Math.min(42, Math.floor(areaFactor * 0.7));
  }

  if (mode === "field") {
    return density === "low"
      ? Math.min(34, Math.floor(areaFactor * 0.65))
      : Math.min(56, Math.floor(areaFactor * 0.92));
  }

  if (mode === "network") {
    return density === "low"
      ? Math.min(42, Math.floor(areaFactor * 0.75))
      : Math.min(68, Math.floor(areaFactor * 1.1));
  }

  if (mode === "flow") {
    return density === "low"
      ? Math.min(30, Math.floor(areaFactor * 0.58))
      : Math.min(54, Math.floor(areaFactor * 0.9));
  }

  return 0;
}

export function ParticlesLayer({ brand }: ParticlesLayerProps) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    if (brand.slug !== "raxor") return;

    const particlesConfig = brand.theme.visualSystem?.particles ?? {
      mode: "field" as const,
      density: "low" as const,
      speed: "slow" as const,
      opacity: "low" as const,
    };
    const mode = particlesConfig.mode;
    const density = particlesConfig.density;

    if (mode === "none" || density === "none") return;

    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationId = 0;
    let particles: Particle[] = [];

    const setup = () => {
      const dpr = window.devicePixelRatio || 1;
      const width = window.innerWidth;
      const height = window.innerHeight;

      canvas.width = width * dpr;
      canvas.height = height * dpr;
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;

      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

      const count = getParticleCount(mode, density, width, height);

      particles = Array.from({ length: count }).map(() => {
        const directionalBias =
          mode === "flow"
            ? {
                vx: (Math.random() - 0.5) * 0.07,
                vy: (Math.random() - 0.5) * 0.07,
              }
            : mode === "network"
              ? {
                  vx: (Math.random() - 0.5) * 0.07,
                  vy: (Math.random() - 0.5) * 0.07,
                }
              : mode === "field"
                ? {
                    vx: (Math.random() - 0.5) * 0.07,
                    vy: (Math.random() - 0.5) * 0.07,
                  }
                : {
                    vx: (Math.random() - 0.5) * 0.07,
                    vy: (Math.random() - 0.5) * 0.07,
                  };

        return {
          x: Math.random() * width,
          y: Math.random() * height,
          r:
            mode === "dust"
              ? Math.random() * 1.1 + 0.25
              : mode === "network"
                ? Math.random() * 1.5 + 0.5
                : Math.random() * 1.3 + 0.4,
          vx: directionalBias.vx,
          vy: directionalBias.vy,
          alpha: Math.random() * 0.15 + 0.03,
        };
      });
    };

    const draw = () => {
      const width = window.innerWidth;
      const height = window.innerHeight;

      ctx.clearRect(0, 0, width, height);

      for (const p of particles) {
        p.x += p.vx;
        p.y += p.vy;

        if (mode === "flow") {
          if (p.x > width + 10) p.x = -10;
          if (p.x < -10) p.x = width + 10;
          if (p.y < 0) p.y = height;
          if (p.y > height) p.y = 0;
        } else {
          if (p.x < 0) p.x = width;
          if (p.x > width) p.x = 0;
          if (p.y < 0) p.y = height;
          if (p.y > height) p.y = 0;
        }

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle =
          mode === "network"
            ? `rgba(140, 190, 255, ${p.alpha})`
            : mode === "flow"
              ? `rgba(180, 215, 255, ${p.alpha})`
              : `rgba(255,255,255,${p.alpha})`;
        ctx.fill();
      }

      animationId = requestAnimationFrame(draw);
    };

    setup();
    draw();

    const handleResize = () => setup();
    window.addEventListener("resize", handleResize);

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener("resize", handleResize);
    };
  }, [brand]);

  return <canvas ref={canvasRef} className="absolute inset-0" />;
}
