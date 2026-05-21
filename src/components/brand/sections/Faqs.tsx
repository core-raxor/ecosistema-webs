"use client";

import { SectionContainer } from "@/components/shared/layout/SectionContainer";
import { SectionLabel } from "@/components/shared/SectionLabel";
import type { BrandConfig } from "@/lib/types";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

const EASE = [0.22, 1, 0.36, 1] as [number, number, number, number];

export default function Faqs({ brand }: { brand: BrandConfig }) {
  const content = brand.content.faqs;
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  if (!content) return null;

  const toggle = (i: number) => setActiveIndex((prev) => (prev === i ? null : i));

  return (
    <div className="relative">
      <SectionContainer id="faqs" className="pt-28 md:pt-36 pb-24 md:pb-32">
        <SectionLabel centered>FAQ</SectionLabel>

        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.35, delay: 0.1, ease: EASE }}
          className="mt-10 text-center font-light"
          style={{
            fontSize: "clamp(2rem, 3.5vw, 3.2rem)",
            lineHeight: 1.1,
            letterSpacing: "-0.02em",
            color: "var(--text)",
            fontFamily: "var(--font-heading)",
          }}
        >
          {content.title}
        </motion.h2>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.4, delay: 0.2, ease: EASE }}
          className="mx-auto mt-14 max-w-2xl"
        >
          {content.items.map((item, i) => (
            <FaqItem
              key={i}
              item={item}
              isOpen={activeIndex === i}
              isLast={i === content.items.length - 1}
              onToggle={() => toggle(i)}
            />
          ))}
        </motion.div>
      </SectionContainer>
      <div
        className="pointer-events-none absolute inset-x-0 bottom-0 z-10 h-40 md:h-56"
        style={{ background: "linear-gradient(to top, var(--bg), transparent)" }}
      />
    </div>
  );
}

// ── Sub-component ─────────────────────────────────────────────────────────────

function FaqItem({
  item,
  isOpen,
  isLast,
  onToggle,
}: {
  item: { question: string; answer: string };
  isOpen: boolean;
  isLast: boolean;
  onToggle: () => void;
}) {
  return (
    <div
      style={{
        borderBottom: isLast
          ? "none"
          : "1px solid color-mix(in srgb, var(--border) 60%, transparent)",
      }}
    >
      <button
        onClick={onToggle}
        className="flex w-full items-start justify-between gap-6 py-6 text-left transition-opacity duration-200 hover:opacity-70"
        aria-expanded={isOpen}
      >
        <span
          className="font-normal text-sm md:text-base leading-snug"
          style={{
            color: isOpen ? "var(--text)" : "color-mix(in srgb, var(--text) 85%, transparent)",
            fontFamily: "var(--font-body)",
            transition: "color 0.2s ease",
          }}
        >
          {item.question}
        </span>
        <span
          className="mt-0.5 shrink-0 h-4 w-4 flex items-center justify-center transition-transform duration-300"
          style={{
            color: "var(--text-muted)",
            transform: isOpen ? "rotate(45deg)" : "rotate(0deg)",
          }}
          aria-hidden
        >
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
            <path
              d="M7 2v10M2 7h10"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
            />
          </svg>
        </span>
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            key="answer"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: EASE }}
            style={{ overflow: "hidden" }}
          >
            <p
              className="pb-6 text-sm leading-relaxed"
              style={{
                color: "color-mix(in srgb, var(--text-muted) 90%, transparent)",
                fontFamily: "var(--font-body)",
              }}
            >
              {item.answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
