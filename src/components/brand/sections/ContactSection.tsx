"use client";

import { motion } from "framer-motion";
import { SectionContainer } from "@/components/shared/layout/SectionContainer";
import type { BrandConfig } from "@/lib/types";

export default function ContactSection({ brand }: { brand: BrandConfig }) {
  const content = brand.content.contact;
  const footer = brand.content.footer;
  const variant = brand.ui?.contact?.variant || "editorial-contact";
  const contactHref = brand.links?.contact || "#";
  const linkedin = brand.links?.linkedin;
  const instagram = brand.links?.instagram;
  const motionLevel = brand.ui?.motion?.intensity || "low";
  const ease: [number, number, number, number] = [0.22, 1, 0.36, 1];

  const transition =
    motionLevel === "high"
      ? { duration: 0.7, ease }
      : motionLevel === "medium"
        ? { duration: 0.45, ease }
        : { duration: 0.25, ease };

  const wordmark = brand.name || "BRAND";
  const isMinimal = variant === "minimal";

  if (isMinimal) {
    return (
      <SectionContainer id="contact" className="relative overflow-hidden pt-28 pb-10">
        <div className="mx-auto max-w-4xl">
          <motion.h2
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.35 }}
            transition={transition}
            className="font-light text-[var(--text)]"
            style={{
              fontSize: "var(--text-h1)",
              letterSpacing: "var(--tracking-tight)",
              fontFamily: "var(--font-heading)",
              lineHeight: "1.05",
            }}
          >
            {content.title}
          </motion.h2>

          {content.description && (
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.35 }}
              transition={{ ...transition, delay: 0.04 }}
              className="mt-4 max-w-xl text-[var(--text-muted)]"
              style={{ fontFamily: "var(--font-body)", lineHeight: "1.8" }}
            >
              {content.description}
            </motion.p>
          )}

          <div className="mt-10 flex flex-wrap items-center gap-6">
            {content.cta && (
              <motion.a
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.35 }}
                transition={{ ...transition, delay: 0.08 }}
                href={contactHref}
                className="rounded-full px-7 py-3 text-sm font-medium text-black transition-all hover:scale-[1.04]"
                style={{ background: "var(--brand-primary)" }}
              >
                {content.cta}
              </motion.a>
            )}

            {content.note && (
              <motion.span
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.35 }}
                transition={{ ...transition, delay: 0.1 }}
                className="text-sm text-[var(--text-muted)]"
                style={{ fontFamily: "var(--font-body)" }}
              >
                {content.note}
              </motion.span>
            )}
          </div>
        </div>
      </SectionContainer>
    );
  }

  return (
    <SectionContainer
      id="contact"
      className="relative overflow-hidden pt-28 pb-10 md:pt-32"
    >
      <div className="mx-auto max-w-7xl">
        {/* Label */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={transition}
          className="max-w-[220px]"
        >
          <p className="text-[11px] uppercase tracking-[0.18em] text-[var(--text-muted)]">
            Contact
          </p>
          <div className="mt-4 h-px w-full bg-[var(--border)]" />
        </motion.div>

        {/* Main layout */}
        <div className="mt-12 grid grid-cols-1 gap-14 lg:grid-cols-12 lg:gap-16">
          {/* Left dominant block */}
          <div className="lg:col-span-7">
            <motion.h2
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.35 }}
              transition={transition}
              className="max-w-[10.5ch] font-light text-[var(--text)]"
              style={{
                fontSize: "var(--text-h1)",
                letterSpacing: "var(--tracking-tight)",
                fontFamily: "var(--font-heading)",
                lineHeight: "1.02",
              }}
            >
              {content.title}
            </motion.h2>

            {content.description && (
              <motion.p
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.35 }}
                transition={{ ...transition, delay: 0.04 }}
                className="mt-6 max-w-[36rem] text-base leading-8 text-[var(--text-muted)] md:text-lg"
                style={{ fontFamily: "var(--font-body)" }}
              >
                {content.description}
              </motion.p>
            )}

            <div className="mt-10 flex flex-wrap items-center gap-6">
              {content.cta && (
                <motion.a
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.35 }}
                  transition={{ ...transition, delay: 0.08 }}
                  href={contactHref}
                  className="rounded-full px-7 py-3 text-sm font-medium text-black transition-all hover:scale-[1.04]"
                  style={{
                    background: "var(--brand-primary)",
                  }}
                >
                  {content.cta}
                </motion.a>
              )}

              {content.note && (
                <motion.span
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.35 }}
                  transition={{ ...transition, delay: 0.1 }}
                  className="text-sm text-[var(--text-muted)]"
                  style={{ fontFamily: "var(--font-body)" }}
                >
                  {content.note}
                </motion.span>
              )}
            </div>
          </div>

          {/* Right support column */}
          <div className="lg:col-span-5 lg:pt-2">
            {(linkedin || instagram) ? (
              <div className="grid gap-4">
                {linkedin && (
                  <a
                    href={linkedin}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-4 border-b border-[var(--border)] pb-4 text-sm text-[var(--text-muted)] transition hover:text-[var(--text)] md:text-base"
                  >
                    <span className="inline-block h-[6px] w-[6px] rounded-full bg-[var(--brand-accent)] opacity-80" />
                    <span>LinkedIn</span>
                  </a>
                )}

                {instagram && (
                  <a
                    href={instagram}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-4 border-b border-[var(--border)] pb-4 text-sm text-[var(--text-muted)] transition hover:text-[var(--text)] md:text-base"
                  >
                    <span className="inline-block h-[6px] w-[6px] rounded-full bg-[var(--brand-accent)] opacity-80" />
                    <span>Instagram</span>
                  </a>
                )}
              </div>
            ) : (
              <div className="hidden h-full lg:block" />
            )}
          </div>
        </div>

        {/* Footer text */}
        <div
          className="mt-24 pt-10"
          style={{
            borderTop: "1px solid var(--border)",
          }}
        >
          <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div>
              <p
                className="text-[11px] uppercase tracking-[0.18em]"
                style={{
                  color:
                    "color-mix(in srgb, var(--text-muted) 76%, transparent)",
                  fontFamily: "var(--font-body)",
                }}
              >
                {footer.tagline}
              </p>

              {footer.minimalText && (
                <p
                  className="mt-3 max-w-xl text-sm leading-7"
                  style={{
                    color:
                      "color-mix(in srgb, var(--text-muted) 84%, transparent)",
                    fontFamily: "var(--font-body)",
                  }}
                >
                  {footer.minimalText}
                </p>
              )}
            </div>
          </div>
        </div>

        {/* Cropped wordmark */}
        <div className="pointer-events-none relative mt-10 h-[7rem] overflow-hidden md:h-[10rem] lg:h-[12rem]">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 0.14, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ ...transition, delay: 0.08 }}
            className="absolute left-0 top-0 whitespace-nowrap font-light uppercase text-[var(--text)]"
            style={{
              fontSize: "clamp(6rem, 18vw, 16rem)",
              lineHeight: "0.88",
              letterSpacing: "-0.06em",
              fontFamily: "var(--font-heading)",
            }}
          >
            {wordmark}
          </motion.div>
        </div>
      </div>
    </SectionContainer>
  );
}
