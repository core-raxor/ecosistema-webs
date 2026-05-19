"use client";

import { motion } from "framer-motion";
import { SectionLabel } from "@/components/shared/SectionLabel";
import type { BrandConfig } from "@/lib/types";

const TRANSITION = {
  duration: 0.25,
  ease: [0.22, 1, 0.36, 1] as [number, number, number, number],
};

// ── Helpers ───────────────────────────────────────────────────────────────────

function navHref(label: string): string {
  const key = label.toLowerCase();
  if (key === "home") return "#hero";
  return `#${key}`;
}

// ── Component ─────────────────────────────────────────────────────────────────

export default function ContactSection({ brand }: { brand: BrandConfig }) {
  const footer = brand.content.footer;
  const contactHref = brand.links?.contact || "#contact";
  const instagram = brand.links?.instagram || "";
  const wordmark = brand.name || "BRAND";
  const year = new Date().getFullYear();

  // ── Footer navigation ──────────────────────────────────────────────────────
  const rawNavItems = brand.content.hero.navItems ?? ["Home", "Process", "Services", "Contact"];
  const navLinks = rawNavItems.map((label) => ({ label, href: navHref(label) }));

  // ── Social media column ────────────────────────────────────────────────────
  const socialLinks = [
    { label: "Instagram", href: instagram || "#" },
    { label: "Twitter", href: "#" },
    { label: "YouTube", href: "#" },
  ];

  // ── System / legal column ─────────────────────────────────────────────────
  const legalLinks = [
    { label: "Privacy Policy", href: "#" },
    { label: "Cookie Policy", href: "#" },
    { label: "Terms", href: "#" },
  ];

  return (
    <section id="contact" className="relative overflow-hidden" style={{ background: "var(--bg)" }}>
      {/* ── Constrained content ─────────────────────────────────────────────── */}
      <div className="mx-auto max-w-7xl px-5 pb-0 pt-16 md:px-8 md:pt-20 lg:px-12">
        <SectionLabel>Contact</SectionLabel>

        {/* ── FOOTER COLUMNS ────────────────────────────────────────────────── */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ ...TRANSITION, delay: 0.06 }}
          className="mt-12 pt-12"
        >
          <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-5 lg:gap-8">
            {/* Column 1 — Company */}
            <div>
              <p
                className="mb-5 text-[10px] uppercase tracking-[0.22em]"
                style={{ color: "var(--text-muted)", fontFamily: "var(--font-body)" }}
              >
                Company
              </p>
              <p
                className="mb-3 font-light text-(--text)"
                style={{
                  fontSize: "clamp(1rem, 1.4vw, 1.1rem)",
                  letterSpacing: "-0.01em",
                  fontFamily: "var(--font-heading)",
                }}
              >
                {brand.name}
              </p>
              <p
                className="text-[11px] uppercase tracking-[0.14em]"
                style={{
                  color: "color-mix(in srgb, var(--text-muted) 72%, transparent)",
                  fontFamily: "var(--font-body)",
                }}
              >
                {footer.tagline}
              </p>
              {footer.minimalText && (
                <p
                  className="mt-3 text-sm leading-6"
                  style={{
                    color: "color-mix(in srgb, var(--text-muted) 60%, transparent)",
                    fontFamily: "var(--font-body)",
                  }}
                >
                  {footer.minimalText}
                </p>
              )}
            </div>

            {/* Column 2 — Navigation */}
            <div>
              <p
                className="mb-5 text-[10px] uppercase tracking-[0.22em]"
                style={{ color: "var(--text-muted)", fontFamily: "var(--font-body)" }}
              >
                Navigation
              </p>
              <ul className="flex flex-col gap-3">
                {navLinks.map(({ label, href }) => (
                  <li key={label}>
                    <a
                      href={href}
                      className="text-sm text-(--text-muted) opacity-55 transition-all duration-150 hover:opacity-90 hover:text-(--text)"
                      style={{ fontFamily: "var(--font-body)" }}
                    >
                      {label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 3 — Contact */}
            <div>
              <p
                className="mb-5 text-[10px] uppercase tracking-[0.22em]"
                style={{ color: "var(--text-muted)", fontFamily: "var(--font-body)" }}
              >
                Contact
              </p>
              <ul className="flex flex-col gap-3">
                <li>
                  <a
                    href={contactHref}
                    target={contactHref.startsWith("http") ? "_blank" : undefined}
                    rel={contactHref.startsWith("http") ? "noreferrer" : undefined}
                    className="text-sm text-(--text-muted) opacity-55 transition-all duration-150 hover:opacity-90 hover:text-(--text)"
                    style={{ fontFamily: "var(--font-body)" }}
                  >
                    Contact
                  </a>
                </li>
              </ul>
            </div>

            {/* Column 4 — Social Media */}
            <div>
              <p
                className="mb-5 text-[10px] uppercase tracking-[0.22em]"
                style={{ color: "var(--text-muted)", fontFamily: "var(--font-body)" }}
              >
                Social
              </p>
              <ul className="flex flex-col gap-3">
                {socialLinks.map(({ label, href }) => (
                  <li key={label}>
                    <a
                      href={href}
                      target={href.startsWith("http") ? "_blank" : undefined}
                      rel={href.startsWith("http") ? "noreferrer" : undefined}
                      className="text-sm text-(--text-muted) opacity-55 transition-all duration-150 hover:opacity-90 hover:text-(--text)"
                      style={{ fontFamily: "var(--font-body)" }}
                    >
                      {label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 5 — System */}
            <div>
              <p
                className="mb-5 text-[10px] uppercase tracking-[0.22em]"
                style={{ color: "var(--text-muted)", fontFamily: "var(--font-body)" }}
              >
                System
              </p>
              <ul className="flex flex-col gap-3">
                {legalLinks.map(({ label, href }) => (
                  <li key={label}>
                    <a
                      href={href}
                      className="text-sm text-(--text-muted) opacity-55 transition-all duration-150 hover:opacity-90 hover:text-(--text)"
                      style={{ fontFamily: "var(--font-body)" }}
                    >
                      {label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </motion.div>

        {/* ── LEGAL ROW ─────────────────────────────────────────────────────── */}
        <div
          className="mt-14 flex flex-col gap-3 border-t pb-12 pt-8 sm:flex-row sm:items-center sm:justify-between"
          style={{ borderColor: "color-mix(in srgb, var(--border) 70%, transparent)" }}
        >
          <p
            className="text-[11px] uppercase tracking-[0.16em]"
            style={{
              color: "color-mix(in srgb, var(--text-muted) 58%, transparent)",
              fontFamily: "var(--font-body)",
            }}
          >
            © {year} {brand.name}. All rights reserved.
          </p>
          <p
            className="text-[11px] uppercase tracking-[0.16em]"
            style={{
              color: "color-mix(in srgb, var(--text-muted) 45%, transparent)",
              fontFamily: "var(--font-body)",
            }}
          >
            {footer.tagline}
          </p>
        </div>
      </div>

      {/* ── FULL-WIDTH CROPPED WORDMARK (centered) ────────────────────────── */}
      {/* flex justify-center centers the wordmark; overflow-hidden clips translateY(30%) */}
      <div className="pointer-events-none relative flex w-full justify-center overflow-hidden">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 0.14 }}
          viewport={{ once: true, amount: 0.05 }}
          transition={{ ...TRANSITION, delay: 0.12 }}
          className="shrink-0 select-none whitespace-nowrap font-semibold uppercase text-(--text)"
          style={{
            fontSize: "clamp(6rem, 30vw, 26rem)",
            lineHeight: 0.78,
            letterSpacing: "-0.07em",
            fontFamily: "var(--font-heading)",
            transform: "translateY(30%)",
          }}
        >
          {wordmark}
        </motion.div>
      </div>
    </section>
  );
}
