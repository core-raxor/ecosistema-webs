"use client";

import { SectionContainer } from "@/components/shared/layout/SectionContainer";
import type { BrandConfig } from "@/lib/types";
import { motion } from "framer-motion";

export default function Identity({ brand }: { brand: BrandConfig }) {
  const content = brand.content.identity;
  const variant = brand.ui.identity?.variant || "editorial-left";

  const descriptionBlocks = Array.isArray(content.description)
    ? content.description
    : [content.description].filter(Boolean);

  const highlights = Array.isArray(content.highlights) ? content.highlights : [];

  const isMinimal = variant === "minimal";
  const motionLevel = brand.ui.motion?.intensity || "low";

  const transition =
    motionLevel === "high"
      ? { duration: 0.7 }
      : motionLevel === "medium"
        ? { duration: 0.45 }
        : { duration: 0.25 };

  return (
    <SectionContainer id="identity" className="pt-28 md:pt-32">
      <div className="mx-auto max-w-7xl">
        {/* Label + line */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={transition}
          className="max-w-[220px]"
        >
          {content.label && (
            <p className="text-[11px] uppercase tracking-[0.18em] text-[var(--text-muted)]">
              {content.label}
            </p>
          )}
          <div className="mt-4 h-px w-full bg-[var(--border)]" />
        </motion.div>

        {/* Main editorial layout */}
        <div className="mt-12 grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-16">
          {/* Left dominant content */}
          <div className="lg:col-span-7">
            <motion.h2
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.35 }}
              transition={transition}
              className="max-w-[12ch] font-light text-[var(--text)]"
              style={{
                fontSize: isMinimal ? "var(--text-h2)" : "var(--text-h1)",
                letterSpacing: "var(--tracking-tight)",
                fontFamily: "var(--font-heading)",
                lineHeight: "1.02",
              }}
            >
              {content.title}
            </motion.h2>

            <div className="mt-8 max-w-[42rem] space-y-6">
              {descriptionBlocks.map((paragraph: string, i: number) => (
                <motion.p
                  key={i}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.35 }}
                  transition={{ ...transition, delay: i * 0.04 }}
                  className="text-base leading-8 text-[var(--text-muted)] md:text-lg"
                >
                  {paragraph}
                </motion.p>
              ))}
            </div>
          </div>

          {/* Right support column */}
          <div className="lg:col-span-5 lg:pt-2">
            {highlights.length > 0 && (
              <div className="grid gap-3">
                {highlights.map((item: string, i: number) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: 10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, amount: 0.35 }}
                    transition={{ ...transition, delay: i * 0.05 }}
                    className="flex items-center gap-4 border-b border-[var(--border)] pb-4 text-sm text-[var(--text-muted)] md:text-base"
                  >
                    <span className="inline-block h-[6px] w-[6px] rounded-full bg-[var(--brand-accent)] opacity-80" />
                    <span>{item}</span>
                  </motion.div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </SectionContainer>
  );
}
