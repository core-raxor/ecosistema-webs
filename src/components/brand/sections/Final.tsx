"use client";

import { Cta } from "@/components/shared/Cta";
import { SectionContainer } from "@/components/shared/layout/SectionContainer";
import { useContactModal } from "@/components/shared/modal/ContactModalContext";
import type { BrandConfig } from "@/lib/types";
import { motion } from "framer-motion";
import dynamic from "next/dynamic";

const TunnelCanvas = dynamic(() => import("@/components/brand/scene/FinalTunnelCanvas"), {
  ssr: false,
});

const TRANSITION = {
  duration: 0.25,
  ease: [0.22, 1, 0.36, 1] as [number, number, number, number],
};

export default function Final({ brand }: { brand: BrandConfig }) {
  const content = brand.content.final;
  const primaryHref = brand.links?.primaryCta || "#";
  const accentColor = brand.theme.colors.accent;
  const { openModal } = useContactModal();

  return (
    <div className="relative overflow-hidden" style={{ background: "var(--bg)" }}>
      {/* Tunnel background */}
      <div className="pointer-events-none absolute inset-0 z-0">
        <TunnelCanvas accentColor={accentColor} />
      </div>

      {/* Top gradient — bridges Services exit into tunnel, no abrupt brightness jump */}
      <div
        className="pointer-events-none absolute inset-x-0 top-0 z-20 h-32 md:h-40"
        style={{ background: "linear-gradient(to bottom, var(--bg) 0%, transparent 100%)" }}
      />

      {/* Bottom gradient — bridges tunnel into ContactSection */}
      <div
        className="pointer-events-none absolute inset-x-0 bottom-0 z-20 h-24 md:h-32"
        style={{ background: "linear-gradient(to top, var(--bg) 0%, transparent 100%)" }}
      />

      <SectionContainer
        id="final"
        className="relative z-10 flex min-h-[80vh] items-center py-28 md:min-h-[90vh] md:py-32"
      >
        <div className="mx-auto flex w-full max-w-5xl flex-col items-center text-center">
          <motion.h2
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ ...TRANSITION, delay: 0.04 }}
            className="max-w-[16ch] font-normal text-(--text)"
            style={{
              fontSize: "clamp(3.5rem, 7vw, 6.5rem)",
              lineHeight: "1.0",
              letterSpacing: "-0.02em",
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
    </div>
  );
}
