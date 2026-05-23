"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import type { ReactNode } from "react";
import type { Locale } from "@/lib/context/LocaleContext";
import { useLocale } from "@/lib/context/LocaleContext";

const EASE = [0.22, 1, 0.36, 1] as [number, number, number, number];

type Props = {
  logoText: string;
  logoMark?: ReactNode;
};

export function IntroScreen({ logoText, logoMark }: Props) {
  const { isInitialized, setLocale } = useLocale();
  const [dismissed, setDismissed] = useState(false);
  const [progress, setProgress] = useState(0);
  const [showButtons, setShowButtons] = useState(false);
  const [exiting, setExiting] = useState(false);

  const shouldShow = isInitialized && !dismissed;

  // Progress ticker — same logic as before
  useEffect(() => {
    if (!shouldShow) return;

    let timer: ReturnType<typeof setTimeout>;
    let loadFired = document.readyState === "complete";
    let done = false;

    const handleLoad = () => {
      loadFired = true;
    };
    if (!loadFired) window.addEventListener("load", handleLoad, { once: true });

    const tick = () => {
      if (done) return;
      setProgress((prev) => {
        if (prev >= 100) {
          done = true;
          return 100;
        }
        if (loadFired) return Math.min(100, prev + 3);
        if (prev >= 65) return Math.min(90, prev + Math.random() * 0.5);
        return Math.min(65, prev + 2 + Math.random() * 2);
      });
      if (!done) timer = setTimeout(tick, 50);
    };

    timer = setTimeout(tick, 50);

    return () => {
      done = true;
      clearTimeout(timer);
      window.removeEventListener("load", handleLoad);
    };
  }, [shouldShow]);

  // Show buttons 300ms after progress reaches 100
  useEffect(() => {
    if (progress < 100) return;
    const t = setTimeout(() => setShowButtons(true), 300);
    return () => clearTimeout(t);
  }, [progress]);

  const handleSelect = (locale: Locale) => {
    setExiting(true);
    setLocale(locale);
  };

  if (!shouldShow && !exiting) return null;

  return (
    <motion.div
      initial={{ opacity: 1 }}
      animate={{ opacity: exiting ? 0 : 1, y: exiting ? -16 : 0 }}
      transition={{ duration: exiting ? 0.5 : 0, ease: EASE }}
      onAnimationComplete={() => {
        if (!exiting) return;
        setExiting(false);
        setDismissed(true);
      }}
      className="fixed inset-0 z-9999 flex items-center justify-center"
      style={{ background: "var(--bg)" }}
    >
      {/* Logo — fades in, then fills bottom-to-top as progress increases */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.4, delay: 0.1, ease: EASE }}
        className="relative"
      >
        {logoMark ? (
          <>
            {/* Ghost — background color, holds the logo shape invisible */}
            <div style={{ color: "var(--bg)" }}>{logoMark}</div>

            {/* Fill — natural color, clips from top revealing bottom-to-top */}
            <div
              className="absolute inset-0"
              style={{
                color: "var(--text)",
                clipPath: `inset(${(100 - progress).toFixed(1)}% 0 0 0)`,
                transition: "clip-path 0.08s linear",
              }}
            >
              {logoMark}
            </div>
          </>
        ) : (
          <span
            style={{
              display: "inline-block",
              padding: "0.5rem 1rem",
              border: "1px solid var(--border)",
              color: "var(--text)",
              background: "color-mix(in srgb, var(--surface) 80%, transparent)",
              backdropFilter: "blur(12px)",
              fontFamily: "var(--font-body)",
              fontSize: "11px",
              letterSpacing: "0.18em",
              textTransform: "uppercase",
              borderRadius: "9999px",
            }}
          >
            {logoText}
          </span>
        )}
      </motion.div>

      {/* Language buttons — pinned to viewport bottom */}
      {showButtons && (
        <div
          className="absolute bottom-12 left-0 right-0 flex items-center justify-center"
          style={{ gap: "clamp(2rem, 6vw, 4rem)" }}
        >
          {(["en", "es"] as const).map((loc, i) => (
            <motion.button
              key={loc}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: i * 0.1, ease: EASE }}
              onClick={() => handleSelect(loc)}
              type="button"
              className="px-8 py-3 text-[11px] uppercase transition-colors duration-200 hover:text-(--text)"
              style={{
                border: "1px solid color-mix(in srgb, var(--border) 80%, transparent)",
                color: "var(--text-muted)",
                background: "color-mix(in srgb, var(--surface) 80%, transparent)",
                backdropFilter: "blur(12px)",
                cursor: "pointer",
                fontFamily: "var(--font-body)",
                letterSpacing: "0.14em",
                borderRadius: 0,
              }}
            >
              {loc === "en" ? "English" : "Spanish"}
            </motion.button>
          ))}
        </div>
      )}
    </motion.div>
  );
}
