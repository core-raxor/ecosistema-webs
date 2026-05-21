"use client";

import { SectionContainer } from "@/components/shared/layout/SectionContainer";
import { SectionLabel } from "@/components/shared/SectionLabel";
import type { BrandConfig } from "@/lib/types";
import { motion } from "framer-motion";

export default function Testimonials({ brand }: { brand: BrandConfig }) {
  const content = brand.content.testimonials;

  if (!content) return null;

  // Duplicate items for seamless infinite loop
  const items = [...content.items, ...content.items];

  return (
    <SectionContainer id="testimonials" className="pt-28 md:pt-36 pb-24 md:pb-32 overflow-hidden">
      <SectionLabel centered>Testimonials</SectionLabel>

      <motion.h2
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.35, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
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

      {/* Gradient masks for fade-out at edges */}
      <div
        className="relative mt-14"
        style={{
          maskImage:
            "linear-gradient(to right, transparent 0%, black 8%, black 92%, transparent 100%)",
        }}
      >
        <div
          className="flex gap-5"
          style={{
            animation: "testimonials-scroll 70s linear infinite",
            width: "max-content",
          }}
        >
          {items.map((item, i) => (
            <TestimonialCard key={i} item={item} />
          ))}
        </div>
      </div>

      <style>{`
        @keyframes testimonials-scroll {
          from { transform: translateX(0); }
          to   { transform: translateX(-50%); }
        }
        @media (prefers-reduced-motion: reduce) {
          .testimonials-track { animation-play-state: paused !important; }
        }
      `}</style>
    </SectionContainer>
  );
}

// ── Sub-component ─────────────────────────────────────────────────────────────

function StarIcon() {
  return (
    <svg width="12" height="12" viewBox="0 0 12 12" fill="currentColor">
      <path d="M6 1l1.236 2.497L10 3.819l-2 1.95.472 2.75L6 7.25 3.528 8.52 4 5.769 2 3.819l2.764-.322z" />
    </svg>
  );
}

function TestimonialCard({
  item,
}: {
  item: { name: string; role: string; text: string; rating: number };
}) {
  return (
    <div
      className="flex shrink-0 flex-col gap-4 rounded-2xl p-5"
      style={{
        width: "clamp(260px, 28vw, 320px)",
        background: "color-mix(in srgb, var(--surface) 55%, transparent)",
        border: "1px solid color-mix(in srgb, var(--border) 60%, transparent)",
        backdropFilter: "blur(6px)",
      }}
    >
      {/* Stars */}
      <div className="flex gap-0.5" style={{ color: "var(--text-muted)" }}>
        {Array.from({ length: item.rating }).map((_, i) => (
          <StarIcon key={i} />
        ))}
      </div>

      {/* Text */}
      <p
        className="text-sm leading-relaxed flex-1"
        style={{
          color: "var(--text-muted)",
          fontFamily: "var(--font-body)",
        }}
      >
        &ldquo;{item.text}&rdquo;
      </p>

      {/* Author */}
      <div className="flex flex-col gap-0.5">
        <span
          className="text-xs font-medium"
          style={{ color: "var(--text)", fontFamily: "var(--font-body)" }}
        >
          {item.name}
        </span>
        <span
          className="text-[11px]"
          style={{
            color: "color-mix(in srgb, var(--text-muted) 70%, transparent)",
            fontFamily: "var(--font-body)",
          }}
        >
          {item.role}
        </span>
      </div>
    </div>
  );
}
