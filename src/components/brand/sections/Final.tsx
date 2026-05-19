"use client";

import { motion } from "framer-motion";
import { SectionContainer } from "@/components/shared/layout/SectionContainer";
import { Cta } from "@/components/shared/Cta";
import { useContactModal } from "@/components/shared/modal/ContactModalContext";
import type { BrandConfig } from "@/lib/types";

const TRANSITION = {
  duration: 0.25,
  ease: [0.22, 1, 0.36, 1] as [number, number, number, number],
};

export default function Final({ brand }: { brand: BrandConfig }) {
  const content = brand.content.final;
  const primaryHref = brand.links?.primaryCta || "#";
  const { openModal } = useContactModal();

  return (
    <SectionContainer
      id="final"
      className="flex min-h-[80vh] items-center py-28 md:min-h-[90vh] md:py-32"
    >
      <div className="mx-auto flex w-full max-w-5xl flex-col items-center text-center">
        <motion.h2
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ ...TRANSITION, delay: 0.04 }}
          className="max-w-[14ch] font-light text-(--text)"
          style={{
            fontSize: "clamp(3rem, 6vw, 5.8rem)",
            lineHeight: "0.96",
            letterSpacing: "-0.025em",
            fontFamily: "var(--font-heading)",
          }}
        >
          {content.statement}
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ ...TRANSITION, delay: 0.12 }}
          className="mt-10"
        >
          <Cta href={primaryHref} onClick={openModal}>
            {content.cta}
          </Cta>
        </motion.div>
      </div>
    </SectionContainer>
  );
}
