"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useScroll } from "framer-motion";
import { SectionContainer } from "@/components/shared/layout/SectionContainer";
import { SectionLabel } from "@/components/shared/SectionLabel";
import type { BrandConfig } from "@/lib/types";

const WORD_TRANSITION = {
  duration: 0.25,
  ease: [0.22, 1, 0.36, 1] as [number, number, number, number],
};

export default function Identity({ brand }: { brand: BrandConfig }) {
  const content = brand.content.identity;
  const words = content.title.split(" ");

  const sectionRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start 55%", "end 55%"],
    // progress 0  = section top at 55% viewport (object enters)
    // progress 0.5 = section midpoint at 55% → all words activate
    // progress 1  = section bottom at 55% viewport (object exits)
  });

  const [visibleCount, setVisibleCount] = useState(0);

  useEffect(() => {
    return scrollYProgress.on("change", (p) => {
      const next = p >= 0.5 ? words.length : Math.round((p / 0.5) * words.length);
      setVisibleCount((prev) => (prev !== next ? next : prev));
    });
  }, [scrollYProgress, words.length]);

  return (
    <div ref={sectionRef}>
      <SectionContainer id="identity" className="pt-28 md:pt-36 pb-24 md:pb-32">
        {content.label && <SectionLabel centered>{content.label}</SectionLabel>}

        <h2
          className="mx-0 mt-10 max-w-[22ch] text-left font-light text-(--text) md:mx-auto md:text-center"
          style={{
            fontSize: "clamp(2.4rem, 5vw, 4.5rem)",
            lineHeight: "1.05",
            letterSpacing: "-0.02em",
            fontFamily: "var(--font-heading)",
          }}
        >
          {words.map((word, i) => (
            <motion.span
              key={i}
              animate={{
                opacity: i < visibleCount ? 1 : 0,
                y: i < visibleCount ? 0 : 8,
              }}
              transition={WORD_TRANSITION}
              style={{ display: "inline-block", marginRight: "0.25em" }}
            >
              {word}
            </motion.span>
          ))}
        </h2>

        {content.stats && content.stats.length > 0 && (
          <motion.div
            animate={{
              opacity: visibleCount >= words.length ? 1 : 0,
              y: visibleCount >= words.length ? 0 : 14,
            }}
            transition={{ duration: 0.4, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
            className="mt-16 flex items-start justify-start md:mx-auto md:mt-20 md:justify-center"
          >
            {content.stats.map((stat, i) => (
              <div
                key={i}
                className="flex flex-col items-start gap-1.5 px-5 md:items-center md:px-12"
                style={
                  i > 0
                    ? { borderLeft: "1px solid color-mix(in srgb, var(--border) 60%, transparent)" }
                    : undefined
                }
              >
                <span
                  className="font-normal"
                  style={{
                    fontSize: "clamp(1.6rem, 2.8vw, 2.4rem)",
                    lineHeight: 1,
                    letterSpacing: "-0.02em",
                    color: "var(--text)",
                    fontFamily: "var(--font-heading)",
                  }}
                >
                  {stat.value}
                </span>
                <span
                  className="text-[10px] uppercase tracking-[0.18em] text-left md:text-center"
                  style={{ color: "var(--text-muted)", fontFamily: "var(--font-body)" }}
                >
                  {stat.label}
                </span>
              </div>
            ))}
          </motion.div>
        )}
      </SectionContainer>
    </div>
  );
}
