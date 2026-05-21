"use client";

import { motion, useScroll } from "framer-motion";
import { SectionLabel } from "@/components/shared/SectionLabel";
import { useContactModal } from "@/components/shared/modal/ContactModalContext";
import type { BrandConfig } from "@/lib/types";
import { useRef, useState, useEffect } from "react";

// ── Constants ─────────────────────────────────────────────────────────────────

const STEP_TRANSITION = {
  duration: 0.18,
  ease: [0.25, 1, 0.35, 1] as [number, number, number, number],
};

const EXIT_TRANSITION = {
  duration: 0.32,
  ease: [0.25, 1, 0.35, 1] as [number, number, number, number],
};

// ── Component ─────────────────────────────────────────────────────────────────

export default function Services({ brand }: { brand: BrandConfig }) {
  const { items } = brand.content.services;
  const maxIndex = items.length - 1;
  const { openModal } = useContactModal();

  // totalSteps = 1 intro + N cards + 1 exit
  const totalSteps = items.length + 2;

  const wrapperRef = useRef<HTMLDivElement>(null);

  // stepIndex:
  //   0          → intro
  //   1..N       → card (index = stepIndex - 1)
  //   totalSteps - 1  → exit
  const [stepIndex, setStepIndex] = useState(0);

  const { scrollYProgress } = useScroll({
    target: wrapperRef,
    offset: ["start start", "end end"],
  });

  // Subscribe to scroll progress and discretize into step index
  useEffect(() => {
    return scrollYProgress.on("change", (progress) => {
      const next = Math.min(totalSteps - 1, Math.max(0, Math.round(progress * (totalSteps - 1))));
      setStepIndex((prev) => (prev !== next ? next : prev));
    });
  }, [scrollYProgress, totalSteps]);

  // ── Derived state ────────────────────────────────────────────────────────

  const isIntro = stepIndex === 0;
  const activeCardIndex: number | null =
    stepIndex >= 1 && stepIndex <= items.length ? stepIndex - 1 : null;
  const isExit = stepIndex === totalSteps - 1;

  // ── Render ────────────────────────────────────────────────────────────────

  return (
    <div ref={wrapperRef} style={{ height: `${totalSteps * 55}vh` }}>
      <section id="services" className="sticky top-0 h-screen overflow-hidden">
        {/* ── Exit overlay — blackout when last card leaves ───────────────── */}
        <motion.div
          animate={{ opacity: isExit ? 1 : 0 }}
          transition={EXIT_TRANSITION}
          className="pointer-events-none absolute inset-0 z-10"
          style={{ background: "var(--bg)" }}
        />

        {/* ── Intro layer ─────────────────────────────────────────────────── */}
        <motion.div
          animate={{
            opacity: isIntro ? 1 : 0,
            y: isIntro ? 0 : -10,
          }}
          transition={STEP_TRANSITION}
          style={{
            position: "absolute",
            inset: 0,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            pointerEvents: isIntro ? "auto" : "none",
          }}
        >
          <SectionLabel centered className="max-w-48 md:max-w-sm">
            <span>{brand.name}</span>
            <span className="opacity-60"> services</span>
          </SectionLabel>
        </motion.div>

        {/* ── Step dots ───────────────────────────────────────────────────── */}
        <motion.div
          animate={{ opacity: activeCardIndex !== null && !isExit ? 1 : 0 }}
          transition={STEP_TRANSITION}
          className="pointer-events-none absolute bottom-7 left-0 right-0 z-20 flex justify-center gap-2"
        >
          {items.map((_, i) => (
            <motion.span
              key={i}
              animate={{
                opacity: activeCardIndex === i ? 0.85 : 0.2,
                scale: activeCardIndex === i ? 1 : 0.7,
              }}
              transition={STEP_TRANSITION}
              className="inline-block h-1 w-1 rounded-full"
              style={{ background: "var(--text-muted)" }}
            />
          ))}
        </motion.div>

        {/* ── Cards layer ─────────────────────────────────────────────────── */}
        {/* All cards share the same absolute position. Only one is visible. */}
        {items.map((item, i) => {
          const isActive = activeCardIndex === i;
          const isExitCard = isExit && i === maxIndex;

          return (
            <motion.article
              key={i}
              data-service-card={i}
              animate={
                isExitCard
                  ? { opacity: 0, scale: 0.96, y: -24 }
                  : isActive
                    ? { opacity: 1, scale: 1, y: 0 }
                    : { opacity: 0, scale: 0.98, y: -4 }
              }
              transition={isExitCard ? EXIT_TRANSITION : STEP_TRANSITION}
              style={{
                position: "absolute",
                inset: 0,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                pointerEvents: isActive ? "auto" : "none",
              }}
            >
              {/* Width container — relative so the halo can position against it */}
              <div className="relative w-full max-w-5xl px-4 md:px-6 lg:px-8">
                {/* Card surface */}
                <motion.div
                  animate={{
                    boxShadow: isActive
                      ? "0 24px 80px rgba(0,0,0,0.60), 0 8px 32px rgba(0,0,0,0.55), 0 2px 6px rgba(0,0,0,0.4), inset 0 1px 0 rgba(255,255,255,0.06)"
                      : "0 8px 32px rgba(0,0,0,0.55), 0 2px 6px rgba(0,0,0,0.4), inset 0 1px 0 rgba(255,255,255,0.06)",
                  }}
                  transition={STEP_TRANSITION}
                  className="relative flex flex-col overflow-hidden md:min-h-[64vh]"
                  style={{
                    borderRadius: "var(--radius-xl)",
                    border: "1px solid var(--border)",
                    background: "color-mix(in srgb, var(--surface) 90%, transparent)",
                    backdropFilter: "blur(var(--blur-light))",
                  }}
                >
                  {/* Inner content */}
                  <div className="relative flex flex-1 flex-col justify-between p-8 md:p-12 lg:p-14">
                    {/* Top — number + label + title */}
                    <div>
                      <div className="flex items-center gap-4">
                        <span
                          className="text-[10px] tracking-[0.14em]"
                          style={{
                            color: "var(--text-muted)",
                            opacity: 0.55,
                            fontFamily: "var(--font-body)",
                          }}
                        >
                          {String(i + 1).padStart(2, "0")}
                        </span>
                        {item.label && (
                          <span
                            className="text-[11px] uppercase tracking-[0.18em] opacity-45"
                            style={{ color: "var(--text-muted)", fontFamily: "var(--font-body)" }}
                          >
                            {item.label}
                          </span>
                        )}
                      </div>

                      <h3
                        className="mt-8 max-w-[16ch] font-light text-(--text)"
                        style={{
                          fontSize: "clamp(1.75rem, 3.2vw, 3rem)",
                          lineHeight: "1.0",
                          letterSpacing: "-0.015em",
                          textTransform: "uppercase",
                          fontFamily: "var(--font-heading)",
                        }}
                      >
                        {item.name}
                      </h3>
                    </div>

                    {/* Bottom — description + includes + cta */}
                    <div className="grid gap-10 lg:grid-cols-2 lg:items-end">
                      <div className="max-w-[42ch]">
                        <p
                          className="text-[16px] leading-8 text-(--text-muted) md:text-[18px]"
                          style={{ fontFamily: "var(--font-body)" }}
                        >
                          {item.description}
                        </p>
                      </div>

                      <div className="flex flex-col gap-5">
                        {item.includes?.length > 0 && (
                          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-3">
                            {item.includes.map((inc, j) => (
                              <li
                                key={j}
                                className="flex items-center gap-2.5 text-sm text-(--text-muted)"
                                style={{ fontFamily: "var(--font-body)" }}
                              >
                                <span
                                  className="inline-block h-1.25 w-1.25 shrink-0 rounded-full"
                                  style={{ background: "var(--text-muted)", opacity: 0.35 }}
                                />
                                {inc}
                              </li>
                            ))}
                          </ul>
                        )}

                        {item.price && (
                          <p
                            className="text-[11px] uppercase tracking-[0.14em] opacity-55"
                            style={{ color: "var(--text)", fontFamily: "var(--font-body)" }}
                          >
                            {item.price}
                          </p>
                        )}

                        {item.cta && (
                          <motion.button
                            type="button"
                            onClick={openModal}
                            whileHover={{ y: -1 }}
                            transition={{ duration: 0.15, ease: [0.22, 1, 0.36, 1] }}
                            className="self-start text-[11px] uppercase tracking-[0.14em] opacity-55 transition-opacity duration-200 hover:opacity-90"
                            style={{
                              color: "var(--text)",
                              fontFamily: "var(--font-body)",
                              background: "none",
                              border: "none",
                              padding: 0,
                              cursor: "pointer",
                            }}
                          >
                            {item.cta} →
                          </motion.button>
                        )}
                      </div>
                    </div>
                  </div>
                </motion.div>

                {/* Accent — directional light: crown edge top + ambient floor glow */}
                <motion.div
                  className="pointer-events-none absolute inset-y-0 left-4 right-4 md:left-6 md:right-6 lg:left-8 lg:right-8"
                  animate={{ opacity: isActive ? 1 : 0 }}
                  transition={STEP_TRANSITION}
                  style={{
                    borderRadius: "var(--radius-xl)",
                    borderTop: "1px solid color-mix(in srgb, var(--brand-accent) 38%, transparent)",
                    boxShadow: [
                      "inset 0 1px 0 color-mix(in srgb, var(--brand-accent) 22%, transparent)",
                      "0 28px 55px -18px color-mix(in srgb, var(--brand-accent) 24%, transparent)",
                    ].join(", "),
                  }}
                />
              </div>
            </motion.article>
          );
        })}
      </section>
    </div>
  );
}
