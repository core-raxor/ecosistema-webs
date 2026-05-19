"use client";

import { SectionContainer } from "@/components/shared/layout/SectionContainer";
import { SectionLabel } from "@/components/shared/SectionLabel";
import type { BrandConfig } from "@/lib/types";
import { motion } from "framer-motion";

const TRANSITION = { duration: 0.25 };

// Returns the title as an array of activatable line units.
// Currently a single-unit fallback — when scroll activation is implemented,
// content.title can be replaced with a string[] or split on a delimiter here.
function toIdentityLines(title: string): string[] {
  return [title];
}

export default function Identity({ brand }: { brand: BrandConfig }) {
  const content = brand.content.identity;
  const lines = toIdentityLines(content.title);

  return (
    <SectionContainer id="identity" className="pt-28 md:pt-36">
      {content.label && <SectionLabel centered>{content.label}</SectionLabel>}

      {/* Statement — each span is a future scroll-activated line unit */}
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.25 }}
        transition={{ ...TRANSITION, delay: 0.06 }}
        className="mx-auto mt-10 max-w-[18ch] text-center font-light text-(--text)"
        style={{
          fontSize: "clamp(3rem, 6.5vw, 5.5rem)",
          lineHeight: "1.05",
          letterSpacing: "-0.025em",
          fontFamily: "var(--font-heading)",
        }}
      >
        {lines.map((line, i) => (
          <span key={i} className="block" data-identity-line>
            {line}
          </span>
        ))}
      </motion.h2>
    </SectionContainer>
  );
}
