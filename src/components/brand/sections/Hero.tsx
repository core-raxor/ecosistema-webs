"use client";

import { motion } from "framer-motion";
import { SectionContainer } from "@/components/shared/layout/SectionContainer";
import type { BrandConfig } from "@/lib/types";

type HeroProps = {
  brand: BrandConfig;
};

function getSectionHref(label: string) {
  const key = label.toLowerCase();

  if (key === "home" || key === "hero") return "#hero";
  if (key === "process") return "#process";
  if (key === "services") return "#services";
  if (key === "contact") return "#contact";
  if (key === "identity") return "#identity";
  if (key === "final") return "#final";

  return "#";
}

function renderLines(text: string) {
  return text.split("\n").map((line, index) => (
    <span key={index} className="block">
      {line}
    </span>
  ));
}

export function Hero({ brand }: HeroProps) {
  const hero = brand.content.hero;
  const contactHref = brand.links?.contact || "#";
  const motionLevel = brand.ui.motion?.intensity || "low";

  const transition =
    motionLevel === "high"
      ? { duration: 0.7 }
      : motionLevel === "medium"
        ? { duration: 0.45 }
        : { duration: 0.25 };

  const navItems = hero.navItems?.length
    ? hero.navItems
    : ["Home", "Process", "Services", "Contact"];

  const logoText = hero.logoText || brand.name;
  const heroLeft = hero.leftText;
  const heroRight = hero.rightText;

  const topCtaLabel = hero.primaryCta?.trim() || "Get in touch";
  const scrollLabel = hero.microNote?.trim() || "Scroll down";

  return (
    <section id="hero" className="relative min-h-screen overflow-hidden">
      <SectionContainer noPaddingY className="flex min-h-screen flex-col">
        <div className="relative flex min-h-screen flex-col">
          <motion.header
            initial={{ opacity: 0, y: -16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={transition}
            className="flex items-center justify-between gap-6 pt-5 md:pt-6"
          >
            <div className="shrink-0">
              <a
                href="#hero"
                className="inline-flex items-center rounded-full border border-[var(--border)] bg-[var(--surface)]/80 px-4 py-2 text-[11px] uppercase tracking-[0.18em] text-[var(--text)] backdrop-blur-md transition-colors duration-200"
              >
                {logoText}
              </a>
            </div>

            <nav className="hidden md:flex items-center justify-center">
              <div className="flex items-center gap-2 rounded-full border border-[var(--border)] bg-[var(--surface)]/80 px-2 py-2 backdrop-blur-md">
                {navItems.map((item) => (
                  <a
                    key={item}
                    href={getSectionHref(item)}
                    className="relative group overflow-hidden rounded-full px-4 py-2 text-[11px] uppercase tracking-[0.14em] text-[var(--text-muted)] transition-colors duration-300"
                  >
                      <span className="absolute inset-0 rounded-full bg-[var(--brand-accent)] scale-90 opacity-0 transition-all duration-300 group-hover:scale-100 group-hover:opacity-[0.10]" />
                    <span className="relative z-10 transition-colors duration-300 group-hover:text-[var(--brand-accent)]">
                      {item}
                    </span>
                  </a>
                ))}
              </div>
            </nav>

            <div className="shrink-0">
              <a
                href={contactHref}
                className="inline-flex items-center rounded-full border border-[var(--border)] bg-[var(--surface)]/85 px-5 py-2.5 text-[11px] uppercase tracking-[0.14em] text-[var(--text)] transition-all duration-300 hover:border-[var(--brand-accent)] hover:bg-[var(--brand-accent)] hover:text-black"
              >
                {topCtaLabel}
              </a>
            </div>
          </motion.header>

          <div className="relative flex flex-1 items-center">
            <div className="grid w-full grid-cols-1 lg:grid-cols-12">
              <motion.div
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={transition}
                className="lg:col-span-12"
              >
                <div className="grid min-h-[48vh] grid-cols-1 items-end gap-y-10 lg:grid-cols-[1fr_1fr] lg:gap-x-20">
                  <div className="flex items-start self-start">
                    <h1
                      className="max-w-[12ch] uppercase text-[var(--text)]"
                      style={{
                        fontSize: "clamp(2.8rem, 5.2vw, 4.8rem)",
                        lineHeight: "0.92",
                        letterSpacing: "-0.03em",
                        fontFamily: "var(--font-heading)",
                        fontWeight: 500,
                      }}
                    >
                      {renderLines(heroLeft)}
                    </h1>
                  </div>

                  <div className="flex items-end justify-start lg:justify-end self-end">
                    <h1
                      className="max-w-[13ch] text-left uppercase text-[var(--text)] lg:text-right"
                      style={{
                        fontSize: "clamp(2.8rem, 5.2vw, 4.8rem)",
                        lineHeight: "0.92",
                        letterSpacing: "-0.03em",
                        fontFamily: "var(--font-heading)",
                        fontWeight: 500,
                      }}
                    >
                      {renderLines(heroRight)}
                    </h1>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ ...transition, delay: 0.12 }}
            className="flex justify-center pb-6 md:pb-8"
          >
            <a
              href="#identity"
              className="group inline-flex flex-col items-center gap-3 text-[11px] uppercase tracking-[0.16em] text-[var(--text-muted)]"
            >
              <span className="transition-colors duration-200 group-hover:text-[var(--brand-accent)]">
                {scrollLabel}
              </span>
              <span className="h-px w-24 bg-[var(--border)] transition-all duration-300 group-hover:w-32 group-hover:bg-[var(--brand-accent)]" />
            </a>
          </motion.div>
        </div>
      </SectionContainer>
    </section>
  );
}
