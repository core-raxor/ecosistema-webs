"use client";

import { motion } from "framer-motion";
import { SectionContainer } from "@/components/shared/layout/SectionContainer";
import type { BrandConfig } from "@/lib/types";

export default function Final({ brand }: { brand: BrandConfig }) {
  const content = brand.content.final;
  const variant = brand.ui?.final?.variant || "centered-statement";
  const primaryHref = brand.links?.primaryCta || "#";
  const motionLevel = brand.ui?.motion?.intensity || "low";
  const ease: [number, number, number, number] = [0.22, 1, 0.36, 1];

  const transition =
    motionLevel === "high"
      ? { duration: 0.7, ease }
      : motionLevel === "medium"
        ? { duration: 0.45, ease }
        : { duration: 0.25, ease };

  if (variant === "minimal") {
    return (
      <SectionContainer id="final" className="py-24 lg:py-28">
        <div className="mx-auto max-w-4xl text-center">
          <motion.h2
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={transition}
              className="font-light text-[var(--text)]"
            style={{
              fontSize: "var(--text-h1)",
              lineHeight: "1.02",
              letterSpacing: "var(--tracking-tight)",
              fontFamily: "var(--font-heading)",
            }}
          >
            {content.statement}
            {content.subline ? (
              <span
                  className="mt-2 block"
                style={{
                  color:
                    "color-mix(in srgb, var(--text-muted) 82%, transparent)",
                }}
              >
                {content.subline}
              </span>
            ) : null}
          </motion.h2>

          <motion.a
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{
              ...transition, delay: 0.1 }}
            href={primaryHref}
            className="mt-10 inline-flex items-center justify-center rounded-full px-8 py-3 text-sm font-medium text-black transition-all hover:scale-[1.04]"
            style={{
              background: "var(--brand-primary)",
            }}
          >
            {content.cta}
          </motion.a>
        </div>
      </SectionContainer>
    );
  }

  if (variant === "centered-statement") {
    return (
      <SectionContainer
        id="final"
        className="flex min-h-[80vh] items-center py-28 md:min-h-[90vh] md:py-32"
      >
        <div className="mx-auto flex w-full max-w-5xl flex-col items-center text-center">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={transition}
            className="max-w-[220px]"
          >
            <p className="text-[11px] uppercase tracking-[0.18em] text-[var(--text-muted)]">
              Final
            </p>
            <div className="mt-4 h-px w-full bg-[var(--border)]" />
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ ...transition, delay: 0.04 }}
            className="mt-12 max-w-[11ch] font-light text-[var(--text)]"
            style={{
              fontSize: "clamp(3rem, 6vw, 5.8rem)",
              lineHeight: "0.96",
              letterSpacing: "var(--tracking-tight)",
              fontFamily: "var(--font-heading)",
            }}
          >
            {content.statement}
          </motion.h2>

          {content.subline ? (
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ ...transition, delay: 0.1 }}
              className="mt-6 max-w-[24rem] text-base leading-8 text-[var(--text-muted)] md:text-lg"
            >
              {content.subline}
            </motion.p>
          ) : null}

          <motion.a
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ ...transition, delay: 0.16 }}
            href={primaryHref}
            className="mt-10 inline-flex items-center justify-center rounded-full px-8 py-3 text-sm font-medium text-black transition-all hover:scale-[1.04]"
            style={{
              background: "var(--brand-primary)",
            }}
          >
            {content.cta}
          </motion.a>
        </div>
      </SectionContainer>
    );
  }

  return (
    <SectionContainer id="final" className="py-24 lg:py-28">
      <div className="mx-auto max-w-4xl text-center">
        <motion.h2
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={transition}
          className="font-light text-[var(--text)]"
          style={{
            fontSize: "var(--text-h1)",
            lineHeight: "1.02",
            letterSpacing: "var(--tracking-tight)",
            fontFamily: "var(--font-heading)",
          }}
        >
          {content.statement}
          {content.subline ? (
            <span
              className="mt-2 block"
              style={{
                color:
                  "color-mix(in srgb, var(--text-muted) 82%, transparent)",
              }}
            >
              {content.subline}
            </span>
          ) : null}
        </motion.h2>

        <motion.a
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ ...transition, delay: 0.1 }}
          href={primaryHref}
          className="mt-10 inline-flex items-center justify-center rounded-full px-8 py-3 text-sm font-medium text-black transition-all hover:scale-[1.04]"
          style={{
            background: "var(--brand-primary)",
          }}
        >
          {content.cta}
        </motion.a>
      </div>
    </SectionContainer>
  );
}
