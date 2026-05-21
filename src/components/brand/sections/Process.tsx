"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useScroll } from "framer-motion";
import { SectionContainer } from "@/components/shared/layout/SectionContainer";
import { SectionLabel } from "@/components/shared/SectionLabel";
import type { BrandConfig } from "@/lib/types";

const TRANSITION = {
  duration: 0.22,
  ease: [0.22, 1, 0.36, 1] as [number, number, number, number],
};

export default function Process({ brand }: { brand: BrandConfig }) {
  const content = brand.content.process;
  const N = content.steps.length;
  const accentHex = brand.theme.colors.accent;

  const sectionRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start 55%", "end 55%"],
  });

  useEffect(() => {
    return scrollYProgress.on("change", (p) => {
      if (p <= 0 || p >= 1) {
        setActiveIndex((prev) => (prev !== null ? null : prev));
      } else {
        const next = Math.min(N - 1, Math.max(0, Math.floor(p * N)));
        setActiveIndex((prev) => (prev !== next ? next : prev));
      }
    });
  }, [scrollYProgress, N]);

  return (
    <div ref={sectionRef}>
      <SectionContainer id="process" className="pt-28 md:pt-32 pb-4 md:pb-6">
        <SectionLabel>
          <span>{brand.name}</span>
          <span className="opacity-60"> process</span>
        </SectionLabel>

        {/* Steps — open editorial list */}
        <div className="mt-14 border-t" style={{ borderColor: "var(--border)" }}>
          {content.steps.map((step, index) => {
            const isActive = activeIndex === index;
            const num = (index + 1).toString().padStart(2, "0");

            return (
              <motion.div
                key={index}
                data-process-step={index}
                role="listitem"
                className="relative cursor-default border-b transition-colors duration-220"
                style={{ borderColor: "color-mix(in srgb, var(--border) 65%, transparent)" }}
                animate={{ opacity: isActive ? 1 : 0.35 }}
                transition={TRANSITION}
              >
                {/* Left accent bar */}
                <motion.div
                  className="absolute left-0 top-0 h-full w-0.5"
                  animate={{ opacity: isActive ? 1 : 0 }}
                  transition={TRANSITION}
                  style={{ background: "var(--brand-accent)" }}
                />
                {/* Accent glow — wide gradient that bleeds inward, creates light-emission feel */}
                <motion.div
                  className="pointer-events-none absolute left-0 top-0 h-full w-6"
                  animate={{ opacity: isActive ? 1 : 0 }}
                  transition={TRANSITION}
                  style={{
                    background: `linear-gradient(to right, ${accentHex}22, transparent)`,
                  }}
                />

                {/* 3-column grid */}
                <div className="relative grid grid-cols-[2rem_1fr] items-start gap-x-4 gap-y-6 px-6 py-8 md:px-10 md:py-10 lg:grid-cols-[3rem_3fr_2fr] lg:gap-x-10 lg:gap-y-0 lg:px-12">
                  {/* Number */}
                  <motion.span
                    animate={{
                      color: isActive
                        ? "var(--brand-accent)"
                        : "color-mix(in srgb, var(--text-muted) 60%, transparent)",
                      filter: isActive
                        ? `drop-shadow(0 0 5px ${accentHex}99)`
                        : "drop-shadow(0 0 0px transparent)",
                    }}
                    transition={TRANSITION}
                    className="pt-1.5 text-[11px] tracking-[0.18em]"
                    style={{ fontFamily: "var(--font-body)" }}
                  >
                    {num}
                  </motion.span>

                  {/* Title */}
                  <h3
                    className="font-light text-(--text)"
                    style={{
                      fontSize: "clamp(1.75rem, 3.2vw, 3rem)",
                      lineHeight: "1.0",
                      letterSpacing: "-0.015em",
                      textTransform: "uppercase",
                      fontFamily: "var(--font-heading)",
                    }}
                  >
                    {step.title}
                  </h3>

                  {/* Right — description + optional benefits */}
                  <div className="col-span-2 flex flex-col gap-4 lg:col-span-1 lg:pt-1.5">
                    <p
                      className="text-[16px] leading-7 text-(--text-muted) md:leading-8"
                      style={{ fontFamily: "var(--font-body)" }}
                    >
                      {step.description}
                    </p>

                    {step.benefits && step.benefits.length > 0 && (
                      <div className="mt-1 flex flex-wrap gap-x-4 gap-y-1">
                        {step.benefits.map((b, i) => (
                          <span
                            key={i}
                            className="flex items-center gap-1.5 text-[11px] uppercase tracking-[0.14em]"
                            style={{
                              color: "color-mix(in srgb, var(--text-muted) 60%, transparent)",
                              fontFamily: "var(--font-body)",
                            }}
                          >
                            <span
                              className="shrink-0 text-[8px] leading-none"
                              style={{ opacity: 0.5, letterSpacing: 0 }}
                            >
                              ✦
                            </span>
                            {b}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </SectionContainer>
    </div>
  );
}
