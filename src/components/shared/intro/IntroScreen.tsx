"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import type { Locale } from "@/lib/context/LocaleContext";
import { useLocale } from "@/lib/context/LocaleContext";

const EASE = [0.22, 1, 0.36, 1] as [number, number, number, number];

export function IntroScreen({ logoText }: { logoText: string }) {
  const { isInitialized, setLocale } = useLocale();
  const [dismissed, setDismissed] = useState(false);
  const [progress, setProgress] = useState(0);
  const [showButtons, setShowButtons] = useState(false);
  const [exiting, setExiting] = useState(false);

  // Show on every page load — dismissed only resets on hard reload (local state)
  const shouldShow = isInitialized && !dismissed;

  // Progress ticker — starts when intro becomes active
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

  // Show buttons 300ms after progress hits 100 — setState is in a callback, not in effect body
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
      className="fixed inset-0 z-9999 flex flex-col items-center justify-center"
      style={{ background: "var(--bg)", gap: "2.5rem" }}
    >
      {/* Logo pill — centered in the composition */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.1, ease: EASE }}
        className="px-4 py-2 text-[11px] uppercase"
        style={{
          border: "1px solid var(--border)",
          color: "var(--text)",
          background: "color-mix(in srgb, var(--surface) 80%, transparent)",
          backdropFilter: "blur(12px)",
          fontFamily: "var(--font-body)",
          letterSpacing: "0.18em",
          borderRadius: "9999px",
        }}
      >
        {logoText}
      </motion.div>

      {/* Below logo — counter fades out, language options fade in */}
      <div style={{ position: "relative", width: "100%", height: "8rem" }}>
        {/* Counter + progress bar */}
        <motion.div
          className="absolute inset-0 flex flex-col items-center justify-center gap-4"
          animate={{ opacity: showButtons ? 0 : 1, y: showButtons ? -8 : 0 }}
          transition={{ duration: 0.3, ease: EASE }}
        >
          <span
            className="tabular-nums font-light"
            style={{
              fontSize: "clamp(3.5rem, 6vw, 5rem)",
              lineHeight: 1,
              letterSpacing: "-0.04em",
              color: "var(--text)",
              fontFamily: "var(--font-heading)",
            }}
          >
            {Math.round(progress)}%
          </span>

          <div
            style={{
              width: 120,
              height: 1,
              background: "color-mix(in srgb, var(--border) 60%, transparent)",
              borderRadius: 9999,
              position: "relative",
              overflow: "hidden",
            }}
          >
            <div
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                bottom: 0,
                width: `${progress}%`,
                background: "var(--text-muted)",
                borderRadius: 9999,
                transition: "width 0.05s linear",
              }}
            />
          </div>
        </motion.div>

        {/* Language buttons — spread from center, straight corners */}
        {showButtons && (
          <div
            className="absolute inset-0 flex items-center justify-center"
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
      </div>
    </motion.div>
  );
}
