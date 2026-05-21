"use client";

import { Cta } from "@/components/shared/Cta";
import { useContactModal } from "@/components/shared/modal/ContactModalContext";
import type { BrandConfig } from "@/lib/types";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";

const ENTRY = { duration: 0.25 };

const NAV_TRANSITION = {
  duration: 0.2,
  ease: [0.22, 1, 0.36, 1] as [number, number, number, number],
};

const NAV_SWEEP = {
  duration: 0.5,
  ease: [0.22, 1, 0.36, 1] as [number, number, number, number],
};

const DRAWER_TRANSITION = {
  duration: 0.38,
  ease: [0.22, 1, 0.36, 1] as [number, number, number, number],
};

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

export function Hero({ brand }: HeroProps) {
  const hero = brand.content.hero;
  const contactHref = brand.links?.contact || "#";
  const { openModal } = useContactModal();
  const [menuOpen, setMenuOpen] = useState(false);

  const navItems = hero.navItems?.length
    ? hero.navItems
    : ["Home", "Process", "Services", "Contact"];

  const logoText = hero.logoText || brand.name;
  const ctaLabel = hero.primaryCta?.trim() || "Get in touch";

  // Close drawer on Escape
  useEffect(() => {
    if (!menuOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMenuOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [menuOpen]);

  // Lock body scroll while drawer is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <section id="hero" className="relative min-h-[100svh] overflow-hidden px-5 md:px-8 lg:px-12">
      <div className="relative z-10 mx-auto flex min-h-[100svh] w-full max-w-7xl flex-col">
        {/* ── Header ─────────────────────────────────────────────────────── */}
        <motion.header
          initial={{ opacity: 0, y: -16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={ENTRY}
          className="flex items-center justify-between gap-6 pt-5 md:pt-6"
        >
          {/* Logo */}
          <div className="shrink-0">
            <a
              href="#hero"
              className="inline-flex items-center rounded-full border border-(--border) bg-(--surface)/80 px-4 py-2 text-[11px] uppercase tracking-[0.18em] text-(--text) backdrop-blur-md transition-colors duration-200"
            >
              {logoText}
            </a>
          </div>

          {/* Nav */}
          <nav className="hidden items-center justify-center md:flex">
            {/* Container — brightens border + adds depth shadow on any item hover */}
            <motion.div
              whileHover={{
                borderColor: "rgba(255,255,255,0.18)",
                boxShadow: "0 4px 20px rgba(0,0,0,0.38), inset 0 1px 0 rgba(255,255,255,0.07)",
              }}
              transition={NAV_TRANSITION}
              className="flex items-center gap-2 rounded-full px-2 py-2 backdrop-blur-md"
              style={{
                background: "color-mix(in srgb, var(--surface) 90%, white 2%)",
                border: "1px solid rgba(255,255,255,0.10)",
                boxShadow: "0 2px 12px rgba(0,0,0,0.22)",
              }}
            >
              {navItems.map((item) => (
                /* Item — surface + sweep on hover, no movement */
                <motion.a
                  key={item}
                  href={getSectionHref(item)}
                  whileHover="hover"
                  whileTap="tap"
                  variants={{
                    hover: {
                      backgroundColor: "rgba(255,255,255,0.10)",
                      boxShadow: "inset 0 1px 0 rgba(255,255,255,0.12)",
                    },
                    tap: {
                      backgroundColor: "rgba(255,255,255,0.06)",
                      boxShadow: "inset 0 1px 0 rgba(255,255,255,0.06)",
                    },
                  }}
                  transition={NAV_TRANSITION}
                  className="group relative overflow-hidden rounded-full px-4 py-2 text-[11px] uppercase tracking-[0.14em] text-(--text-muted)"
                >
                  {/* Light sweep — same material as Cta, slightly softer */}
                  <motion.span
                    variants={{
                      default: { x: "-100%", transition: { duration: 0 } },
                      hover: { x: "220%", transition: NAV_SWEEP },
                      tap: { x: "-100%", transition: { duration: 0 } },
                    }}
                    initial="default"
                    animate="default"
                    className="pointer-events-none absolute inset-0"
                    style={{
                      background:
                        "linear-gradient(105deg, transparent 35%, rgba(255,255,255,0.05) 50%, transparent 65%)",
                    }}
                  />
                  <span className="relative z-10 transition-colors duration-200 group-hover:text-(--text)">
                    {item}
                  </span>
                </motion.a>
              ))}
            </motion.div>
          </nav>

          {/* Right side — hamburger (mobile) + CTA */}
          <div className="flex shrink-0 items-center gap-3">
            {/* Hamburger — mobile only */}
            <button
              className="md:hidden flex h-9 w-9 flex-col items-center justify-center gap-1.25 rounded-full border border-(--border) bg-(--surface)/80 backdrop-blur-md transition-colors duration-200"
              onClick={() => setMenuOpen((o) => !o)}
              aria-label={menuOpen ? "Close menu" : "Open menu"}
            >
              <motion.span
                animate={{ rotate: menuOpen ? 45 : 0, y: menuOpen ? 7 : 0 }}
                transition={NAV_TRANSITION}
                className="block h-px w-4 bg-(--text)"
              />
              <motion.span
                animate={{ opacity: menuOpen ? 0 : 1, scaleX: menuOpen ? 0 : 1 }}
                transition={NAV_TRANSITION}
                className="block h-px w-4 bg-(--text)"
              />
              <motion.span
                animate={{ rotate: menuOpen ? -45 : 0, y: menuOpen ? -7 : 0 }}
                transition={NAV_TRANSITION}
                className="block h-px w-4 bg-(--text)"
              />
            </button>

            <Cta href={contactHref} size="sm" onClick={openModal}>
              {ctaLabel}
            </Cta>
          </div>
        </motion.header>

        {/* ── Mobile drawer ──────────────────────────────────────────────── */}
        <AnimatePresence>
          {menuOpen && (
            <>
              {/* Backdrop */}
              <motion.div
                key="backdrop"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.25 }}
                className="fixed inset-0 z-40 md:hidden"
                style={{ background: "rgba(0,0,0,0.55)", backdropFilter: "blur(2px)" }}
                onClick={() => setMenuOpen(false)}
              />

              {/* Panel */}
              <motion.div
                key="panel"
                initial={{ y: "-100%" }}
                animate={{ y: 0 }}
                exit={{ y: "-100%" }}
                transition={DRAWER_TRANSITION}
                className="fixed inset-x-0 top-0 z-50 md:hidden"
                style={{
                  background: "color-mix(in srgb, var(--surface) 92%, black 4%)",
                  borderBottom: "1px solid rgba(255,255,255,0.10)",
                  boxShadow: "0 8px 40px rgba(0,0,0,0.5)",
                  backdropFilter: "blur(24px)",
                }}
              >
                {/* Panel header */}
                <div className="flex items-center justify-between px-5 pt-5 pb-3">
                  <a
                    href="#hero"
                    onClick={() => setMenuOpen(false)}
                    className="inline-flex items-center rounded-full border border-(--border) bg-(--surface)/80 px-4 py-2 text-[11px] uppercase tracking-[0.18em] text-(--text)"
                  >
                    {logoText}
                  </a>
                  <button
                    onClick={() => setMenuOpen(false)}
                    className="flex h-9 w-9 items-center justify-center rounded-full border border-(--border) bg-(--surface)/80 text-(--text-muted)"
                    aria-label="Close menu"
                  >
                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                      <path
                        d="M1 1l10 10M11 1L1 11"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                      />
                    </svg>
                  </button>
                </div>

                {/* Nav items */}
                <nav className="flex flex-col px-5 pb-8 pt-4 gap-1">
                  {navItems.map((item, i) => (
                    <motion.a
                      key={item}
                      href={getSectionHref(item)}
                      initial={{ opacity: 0, x: -12 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.22, delay: i * 0.05 }}
                      onClick={() => setMenuOpen(false)}
                      className="rounded-xl px-4 py-3.5 text-[11px] uppercase tracking-[0.18em] text-(--text-muted) transition-colors duration-150 active:bg-(--surface)"
                      style={{ borderBottom: "1px solid rgba(255,255,255,0.05)" }}
                    >
                      {item}
                    </motion.a>
                  ))}

                  {/* CTA inside drawer */}
                  <div className="pt-4">
                    <Cta
                      href={contactHref}
                      onClick={() => {
                        setMenuOpen(false);
                        openModal();
                      }}
                      className="w-full justify-center"
                    >
                      {ctaLabel}
                    </Cta>
                  </div>
                </nav>
              </motion.div>
            </>
          )}
        </AnimatePresence>

        {/* ── Centered body ──────────────────────────────────────────────── */}
        <div className="flex flex-1 flex-col items-center justify-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ ...ENTRY, delay: 0.06 }}
            className="flex flex-col items-center text-center translate-y-[4vh]"
          >
            {/* Headline */}
            <h1
              className="max-w-[16ch] font-normal text-(--text)"
              style={{
                fontSize: "clamp(3.5rem, 7vw, 6.5rem)",
                lineHeight: "1.0",
                letterSpacing: "-0.02em",
                fontFamily: "var(--font-heading)",
              }}
            >
              {hero.headline}
            </h1>

            {/* Primary CTA */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ ...ENTRY, delay: 0.14 }}
              className="mt-7"
            >
              <Cta href={contactHref} onClick={openModal}>
                {ctaLabel}
              </Cta>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
