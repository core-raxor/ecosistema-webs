"use client";

import type { BrandConfig } from "@/lib/types";
import { useScroll } from "framer-motion";
import dynamic from "next/dynamic";
import { useEffect, useRef } from "react";

// ── Lazy-load the R3F canvas — Three.js is not SSR-compatible ─────────────────

const SceneCanvas = dynamic(() => import("./SceneCanvas").then((m) => m.SceneCanvas), {
  ssr: false,
});

// ── Component ─────────────────────────────────────────────────────────────────

export function BrandScene({ brand }: { brand: Pick<BrandConfig, "theme"> }) {
  const scene = brand.theme.scene;

  const { scrollY } = useScroll();

  // scrollScaleRef: scale 1.0 → 0.05 over Hero scroll (0 → identityTopRef)
  // scrollColorRef: color lerp 0 → 1 from Identity start to Services start
  const scrollScaleRef = useRef(1);
  const scrollColorRef = useRef(0);
  const identityTopRef = useRef(800); // fallback ≈ window.innerHeight
  const servicesTopRef = useRef(2400); // fallback; overwritten after mount

  useEffect(() => {
    identityTopRef.current = window.innerHeight;
    const el = document.getElementById("services");
    if (el) {
      const top = el.getBoundingClientRect().top + window.scrollY;
      if (top > identityTopRef.current) servicesTopRef.current = top;
    }
  }, []);

  useEffect(() => {
    return scrollY.on("change", (y: number) => {
      // Scale: compresses during Hero, reaches 0.05 exactly at Identity start
      const tScale = Math.min(Math.max(y / identityTopRef.current, 0), 1);
      scrollScaleRef.current = 1 - tScale * 0.95;

      // Color: dissolves during Hero (0 → Identity start), same range as scale
      scrollColorRef.current = tScale;
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
          scrollColorRef={scrollColorRef}
        />
      </div>
    </div>
  );
}
