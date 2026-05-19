"use client";

import { SectionContainer } from "@/components/shared/layout/SectionContainer";
import { SectionLabel } from "@/components/shared/SectionLabel";
import type { BrandConfig } from "@/lib/types";
import { motion } from "framer-motion";

const TRANSITION = {
  duration: 0.22,
  ease: [0.22, 1, 0.36, 1] as [number, number, number, number],
};

export default function Process({ brand }: { brand: BrandConfig }) {
  const content = brand.content.process;
  const activeIndex: number | null = null; // scroll activation placeholder

  return (
    <SectionContainer id="process" className="pt-28 md:pt-32">
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

              {/* 3-column grid */}
              <div className="relative grid items-start gap-6 px-6 py-8 md:px-10 md:py-10 lg:grid-cols-[3rem_3fr_2fr] lg:gap-10 lg:px-12">
                {/* Number */}
                <motion.span
                  animate={{
                    color: isActive
                      ? "var(--brand-accent)"
                      : "color-mix(in srgb, var(--text-muted) 60%, transparent)",
                  }}
                  transition={TRANSITION}
                  className="pt-1.5 text-[11px] tracking-[0.18em]"
                  style={{ fontFamily: "var(--font-body)" }}
                >
                  {num}
                </motion.span>

                {/* Title */}
                <h3
                  className="font-light leading-none text-(--text)"
                  style={{
                    fontSize: "clamp(2.2rem, 3.8vw, 3.6rem)",
                    letterSpacing: "-0.02em",
                    fontFamily: "var(--font-heading)",
                  }}
                >
                  {step.title}
                </h3>

                {/* Right — description + optional benefits */}
                <div className="flex flex-col gap-4 lg:pt-1.5">
                  <p
                    className="text-sm leading-7 text-(--text-muted) md:text-base md:leading-8"
                    style={{ fontFamily: "var(--font-body)" }}
                  >
                    {step.description}
                  </p>

                  {step.benefits && (
                    <p
                      className="text-sm leading-7 md:text-base md:leading-8"
                      style={{
                        color: "color-mix(in srgb, var(--text-muted) 70%, transparent)",
                        fontFamily: "var(--font-body)",
                      }}
                    >
                      {step.benefits}
                    </p>
                  )}
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </SectionContainer>
  );
}
