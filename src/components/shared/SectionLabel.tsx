"use client";

import { motion } from "framer-motion";

const TRANSITION = {
  duration: 0.25,
  ease: [0.22, 1, 0.36, 1] as [number, number, number, number],
};

type SectionLabelProps = {
  children: React.ReactNode;
  centered?: boolean;
  className?: string;
};

export function SectionLabel({ children, centered = false, className }: SectionLabelProps) {
  if (centered) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.35 }}
        transition={TRANSITION}
        className={`mx-auto flex items-center gap-5 ${className ?? "max-w-56"}`}
      >
        <div className="h-px flex-1 bg-(--border)" />
        <p className="shrink-0 text-[11px] uppercase tracking-[0.22em] text-(--text-muted)">
          {children}
        </p>
        <div className="h-px flex-1 bg-(--border)" />
      </motion.div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.35 }}
      transition={TRANSITION}
      className="max-w-55"
    >
      <p className="text-[11px] uppercase tracking-[0.18em] text-(--text-muted)">{children}</p>
      <div className="mt-4 h-px w-full bg-(--border)" />
    </motion.div>
  );
}
