"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";
import { useSyncExternalStore } from "react";

type CtaSize = "sm" | "md";

type CtaProps = {
  href: string;
  children: ReactNode;
  size?: CtaSize;
  className?: string;
  onClick?: (e: React.MouseEvent) => void;
};

const CTA_TRANSITION = {
  duration: 0.2,
  ease: [0.22, 1, 0.36, 1] as [number, number, number, number],
};

const SWEEP_TRANSITION = {
  duration: 0.55,
  ease: [0.22, 1, 0.36, 1] as [number, number, number, number],
};

const SIZE: Record<CtaSize, string> = {
  sm: "px-5 py-2.5",
  md: "px-8 py-3",
};

export function Cta({ href, children, size = "md", className = "", onClick }: CtaProps) {
  const touch = useSyncExternalStore(
    (cb) => {
      const mq = window.matchMedia("(hover: none)");
      mq.addEventListener("change", cb);
      return () => mq.removeEventListener("change", cb);
    },
    () => window.matchMedia("(hover: none)").matches,
    () => false,
  );

  return (
    <motion.a
      href={href}
      onClick={
        onClick
          ? (e) => {
              e.preventDefault();
              onClick(e);
            }
          : undefined
      }
      {...(!touch && { whileHover: "hover" })}
      whileTap="tap"
      variants={{
        hover: {
          y: -2,
          boxShadow: "0 14px 36px rgba(0,0,0,0.78), inset 0 1px 0 rgba(255,255,255,0.10)",
          borderColor: "rgba(255,255,255,0.30)",
        },
        tap: {
          y: 0,
          boxShadow: "0 3px 12px rgba(0,0,0,0.60), inset 0 1px 0 rgba(255,255,255,0.04)",
          borderColor: "rgba(255,255,255,0.10)",
        },
      }}
      transition={CTA_TRANSITION}
      className={`relative overflow-hidden inline-flex items-center rounded-full text-[11px] uppercase tracking-[0.14em] text-(--text) backdrop-blur-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-(--brand-accent) focus-visible:ring-offset-2 ${SIZE[size]} ${className}`}
      style={{
        background: "color-mix(in srgb, var(--surface) 92%, white 3%)",
        border: touch ? "1px solid rgba(255,255,255,0.24)" : "1px solid rgba(255,255,255,0.12)",
        boxShadow: touch
          ? "0 8px 28px rgba(0,0,0,0.62), inset 0 1px 0 rgba(255,255,255,0.08)"
          : "0 4px 16px rgba(0,0,0,0.50), inset 0 1px 0 rgba(255,255,255,0.05)",
      }}
    >
      {/* Brightness overlay — always visible on touch, fades in on hover */}
      <motion.span
        variants={{
          default: { opacity: 0, transition: CTA_TRANSITION },
          hover: { opacity: 1, transition: CTA_TRANSITION },
          tap: { opacity: 0.4, transition: CTA_TRANSITION },
        }}
        initial="default"
        animate={touch ? "hover" : "default"}
        className="pointer-events-none absolute inset-0 rounded-full"
        style={{ background: "rgba(255,255,255,0.08)" }}
      />
      {/* Light sweep — only on non-touch devices */}
      {!touch && (
        <motion.span
          variants={{
            default: { x: "-100%", transition: { duration: 0 } },
            hover: { x: "220%", transition: SWEEP_TRANSITION },
            tap: { x: "-100%", transition: { duration: 0 } },
          }}
          initial="default"
          animate="default"
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              "linear-gradient(105deg, transparent 35%, rgba(255,255,255,0.10) 50%, transparent 65%)",
          }}
        />
      )}
      <span className="relative z-10">{children}</span>
    </motion.a>
  );
}
