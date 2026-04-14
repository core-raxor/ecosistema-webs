"use client";

import { SectionContainer } from "@/components/shared/layout/SectionContainer";
import type { BrandConfig } from "@/lib/types";
import { motion } from "framer-motion";
import { useState } from "react";

export default function Process({ brand }: { brand: BrandConfig }) {
  const content = brand.content.process;
  const variant = brand.ui?.process?.variant || "default";
  const motionLevel = brand.ui?.motion?.intensity || "low";
  const ease: [number, number, number, number] = [0.22, 1, 0.36, 1];

  const [activeIndex, setActiveIndex] = useState(0);
  const isSystem = variant === "system";

  const transition =
    motionLevel === "high"
      ? { duration: 0.45, ease }
      : motionLevel === "medium"
        ? { duration: 0.3, ease }
        : { duration: 0.22, ease };

  return (
    <SectionContainer id="process" className="pt-28 md:pt-32">
      <div className="mx-auto max-w-7xl">
        {/* Label */}
        <div className="max-w-[220px]">
          <p className="text-[11px] uppercase tracking-[0.18em] text-[var(--text-muted)]">
            Process
          </p>
          <div className="mt-4 h-px w-full bg-[var(--border)]" />
        </div>

        {/* Title */}
        <h2
          className="mt-10 max-w-[12ch] font-light text-[var(--text)]"
          style={{
            fontSize: "var(--text-h1)",
            letterSpacing: "var(--tracking-tight)",
            fontFamily: "var(--font-heading)",
            lineHeight: "1.02",
          }}
        >
          {content.title}
        </h2>

        {/* Interactive block */}
        <div
          className="mt-14 overflow-hidden border"
          style={{
            borderRadius: "var(--radius-xl)",
            borderColor: "var(--border)",
            background: "color-mix(in srgb, var(--surface) 74%, transparent)",
            boxShadow: "var(--shadow-soft)",
            backdropFilter: "blur(var(--blur-light))",
          }}
        >
          {content.steps.map((step, index) => {
            const isActive = activeIndex === index;

            return (
              <motion.div
                key={step.title || index}
                onMouseEnter={() => setActiveIndex(index)}
                onFocus={() => setActiveIndex(index)}
                tabIndex={0}
                className="group relative cursor-pointer outline-none last:border-none"
                style={{
                  borderBottom:
                    index === content.steps.length - 1
                      ? "none"
                      : "1px solid color-mix(in srgb, var(--border) 75%, transparent)",
                }}
                animate={{
                  opacity: isActive ? 1 : 0.62,
                }}
                transition={transition}
              >
                {/* Active glow */}
                <motion.div
                  className="pointer-events-none absolute inset-0"
                  animate={{ opacity: isActive ? 1 : 0 }}
                  transition={transition}
                >
                  <div
                    className="absolute inset-0"
                    style={{
                      background:
                        "radial-gradient(circle at 22% 50%, color-mix(in srgb, var(--brand-accent) 14%, transparent) 0%, transparent 72%)",
                    }}
                  />
                </motion.div>

                {/* Active line accent */}
                <motion.div
                  className="absolute left-0 top-0 h-full"
                  animate={{
                    width: isActive ? 2 : 0,
                    opacity: isActive ? 1 : 0,
                  }}
                  transition={transition}
                  style={{
                    background: "var(--brand-accent)",
                  }}
                />

                <div className="relative grid items-start gap-8 px-6 py-8 md:px-10 md:py-10 lg:grid-cols-[1.15fr_0.85fr] lg:px-12">
                  {/* Left side */}
                  <div className="flex items-start gap-6">
                    <span
                      className="pt-2 text-[11px] tracking-[0.18em]"
                      style={{
                        color: "color-mix(in srgb, var(--text-muted) 75%, transparent)",
                        fontFamily: "var(--font-body)",
                      }}
                    >
                      {(index + 1).toString().padStart(2, "0")}
                    </span>

                    <motion.h3
                      animate={{
                        x: isActive ? 10 : 0,
                        opacity: isActive ? 1 : 0.82,
                        scale: isActive ? 1 : 0.965,
                        color: isActive
                          ? "var(--text)"
                          : "color-mix(in srgb, var(--text) 88%, transparent)",
                      }}
                      transition={transition}
                      className="font-light leading-[0.92]"
                      style={{
                        fontSize: isSystem
                          ? "clamp(3rem, 5.2vw, 5rem)"
                          : "clamp(2.4rem, 4.5vw, 4.2rem)",
                        letterSpacing: "var(--tracking-tight)",
                        fontFamily: "var(--font-heading)",
                        transformOrigin: "left center",
                      }}
                    >
                      {step.title}
                    </motion.h3>
                  </div>

                  {/* Right side */}
                  <motion.div
                    animate={{
                      opacity: isActive ? 1 : 0.38,
                      y: isActive ? 0 : 4,
                      x: isActive ? -6 : 0,
                    }}
                    transition={transition}
                    className="max-w-[460px] lg:pt-2"
                  >
                    <p
                      className="text-base leading-8"
                      style={{
                        color: "color-mix(in srgb, var(--text-muted) 94%, transparent)",
                        fontFamily: "var(--font-body)",
                      }}
                    >
                      {step.description}
                    </p>
                  </motion.div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </SectionContainer>
  );
}
