"use client";

import type { BrandConfig } from "@/lib/types";
import dynamic from "next/dynamic";
import { useScroll } from "framer-motion";
import { useEffect, useRef } from "react";

// ── Lazy-load the R3F canvas — Three.js is not SSR-compatible ─────────────────

const SceneCanvas = dynamic(() => import("./SceneCanvas").then((m) => m.SceneCanvas), {
  ssr: false,
});

// ── Component ─────────────────────────────────────────────────────────────────

export function BrandScene({ brand }: { brand: Pick<BrandConfig, "theme"> }) {
  const scene = brand.theme.scene;

  const { scrollY } = useScroll();

  // Plain ref — updated on every scroll event, read inside R3F useFrame at 60fps.
  // Maps scrollY [0, 650px] → scaleFactor [1.0, 0.30]. Clamped at both ends.
  const scrollScaleRef = useRef(1);

  useEffect(() => {
    return scrollY.on("change", (y: number) => {
      const t = Math.min(Math.max(y / 550, 0), 1);
      scrollScaleRef.current = 1 - t * 0.9;
    });
  }, [scrollY]);

  if (!scene) return null;

  return (
    <div className="pointer-events-none fixed inset-0 z-1 overflow-hidden">
      <div className="absolute left-1/2 top-[55%] h-[88vh] w-[86vw] max-h-240 max-w-280 min-h-108 min-w-130 -translate-x-1/2 -translate-y-1/2">
        <SceneCanvas
          sceneType={scene.type}
          accentColor={brand.theme.colors.accent}
          objectConfig={scene.objectConfig}
          scrollScaleRef={scrollScaleRef}
        />
      </div>
    </div>
  );
}
