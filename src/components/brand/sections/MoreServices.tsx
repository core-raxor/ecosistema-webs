"use client";

import { SectionContainer } from "@/components/shared/layout/SectionContainer";
import { SectionLabel } from "@/components/shared/SectionLabel";
import type { BrandConfig } from "@/lib/types";
import { motion } from "framer-motion";
import React, { useEffect, useRef, useState, useSyncExternalStore } from "react";

const CARD_TRANSITION = {
  duration: 0.4,
  ease: [0.22, 1, 0.36, 1] as [number, number, number, number],
};

const DESKTOP_VISIBLE = 3;
const DESKTOP_GAP = 20;
const MOBILE_GAP = 16;

export default function MoreServices({ brand }: { brand: BrandConfig }) {
  const content = brand.content.moreServices;
  const [activeIndex, setActiveIndex] = useState(0);
  const touch = useSyncExternalStore(
    (cb) => {
      const mq = window.matchMedia("(hover: none)");
      mq.addEventListener("change", cb);
      return () => mq.removeEventListener("change", cb);
    },
    () => window.matchMedia("(hover: none)").matches,
    () => false,
  );

  const desktopRef = useRef<HTMLDivElement>(null);
  const mobileRef = useRef<HTMLDivElement>(null);
  const [desktopCardPx, setDesktopCardPx] = useState(0);
  const [mobileCardPx, setMobileCardPx] = useState(0);

  useEffect(() => {
    const measure = () => {
      if (desktopRef.current) {
        const w = desktopRef.current.getBoundingClientRect().width;
        setDesktopCardPx((w - DESKTOP_GAP * (DESKTOP_VISIBLE - 1)) / DESKTOP_VISIBLE);
      }
      if (mobileRef.current) {
        setMobileCardPx(mobileRef.current.getBoundingClientRect().width);
      }
    };
    measure();
    const ro = new ResizeObserver(measure);
    if (desktopRef.current) ro.observe(desktopRef.current);
    if (mobileRef.current) ro.observe(mobileRef.current);
    return () => ro.disconnect();
  }, []);

  if (!content) return null;

  const cards = content.cards;
  const total = cards.length;
  const maxDesktop = total - DESKTOP_VISIBLE;
  const maxMobile = total - 1;

  const prev = () => setActiveIndex((i) => Math.max(0, i - 1));

  const desktopStep = desktopCardPx + DESKTOP_GAP;
  const mobileStep = mobileCardPx + MOBILE_GAP;

  return (
    <div className="relative">
      <div
        className="pointer-events-none absolute inset-x-0 top-0 z-10 h-40 md:h-56"
        style={{ background: "linear-gradient(to bottom, var(--bg), transparent)" }}
      />
      <SectionContainer id="more-services" className="pt-28 md:pt-36 pb-24 md:pb-32">
        <SectionLabel centered>Ecosystem</SectionLabel>

        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ ...CARD_TRANSITION, delay: 0.1 }}
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

        {/* Desktop — 3 cards visible */}
        <div className="relative mt-14 hidden md:block">
          <div ref={desktopRef} className="overflow-hidden">
            <motion.div
              className="flex"
              style={{ gap: DESKTOP_GAP }}
              animate={{ x: desktopCardPx > 0 ? -activeIndex * desktopStep : 0 }}
              transition={CARD_TRANSITION}
            >
              {cards.map((card, i) => (
                <div
                  key={card.slug}
                  style={{
                    width:
                      desktopCardPx > 0
                        ? desktopCardPx
                        : `calc((100% - ${DESKTOP_GAP * (DESKTOP_VISIBLE - 1)}px) / ${DESKTOP_VISIBLE})`,
                    flexShrink: 0,
                  }}
                >
                  <ServiceCard card={card} index={i} touch={touch} />
                </div>
              ))}
            </motion.div>
          </div>

          <div className="mt-8 flex items-center justify-center gap-4">
            <NavButton onClick={prev} disabled={activeIndex === 0} dir="left" />
            <Dots total={maxDesktop + 1} active={activeIndex} onDot={setActiveIndex} />
            <NavButton
              onClick={() => setActiveIndex((i) => Math.min(maxDesktop, i + 1))}
              disabled={activeIndex === maxDesktop}
              dir="right"
            />
          </div>
        </div>

        {/* Mobile — 1 card visible */}
        <div className="relative mt-12 block md:hidden">
          <div ref={mobileRef} className="overflow-hidden">
            <motion.div
              className="flex"
              style={{ gap: MOBILE_GAP }}
              animate={{ x: mobileCardPx > 0 ? -activeIndex * mobileStep : 0 }}
              transition={CARD_TRANSITION}
            >
              {cards.map((card, i) => (
                <div
                  key={card.slug}
                  style={{
                    width: mobileCardPx > 0 ? mobileCardPx : "100%",
                    flexShrink: 0,
                  }}
                >
                  <ServiceCard card={card} index={i} touch={touch} />
                </div>
              ))}
            </motion.div>
          </div>

          <div className="mt-6 flex items-center justify-center gap-4">
            <NavButton onClick={prev} disabled={activeIndex === 0} dir="left" />
            <Dots total={total} active={activeIndex} onDot={setActiveIndex} />
            <NavButton
              onClick={() => setActiveIndex((i) => Math.min(maxMobile, i + 1))}
              disabled={activeIndex === maxMobile}
              dir="right"
            />
          </div>
        </div>
      </SectionContainer>
    </div>
  );
}

// ── Sub-components ────────────────────────────────────────────────────────────

function ServiceCard({
  card,
  index,
  touch,
}: {
  card: {
    slug: string;
    title: string;
    description: string;
    services: string[];
    cta: string;
    url: string;
  };
  index: number;
  touch: boolean;
}) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.35, delay: index * 0.05, ease: [0.22, 1, 0.36, 1] }}
      className="flex h-full flex-col gap-5 rounded-2xl p-6"
      style={{
        background: "color-mix(in srgb, var(--surface) 60%, transparent)",
        border: "1px solid color-mix(in srgb, var(--border) 70%, transparent)",
        backdropFilter: "blur(8px)",
      }}
    >
      <div>
        <p
          className="mb-2 text-[10px] uppercase tracking-[0.2em]"
          style={{ color: "var(--text-muted)", fontFamily: "var(--font-body)" }}
        >
          Specialized
        </p>
        <h3
          className="font-normal"
          style={{
            fontSize: "clamp(1.2rem, 1.8vw, 1.5rem)",
            letterSpacing: "-0.01em",
            color: "var(--text)",
            fontFamily: "var(--font-heading)",
          }}
        >
          {card.title}
        </h3>
      </div>

      <p
        className="flex-1 text-sm leading-relaxed"
        style={{ color: "var(--text-muted)", fontFamily: "var(--font-body)" }}
      >
        {card.description}
      </p>

      <ul className="flex flex-col gap-1.5">
        {card.services.map((s) => (
          <li
            key={s}
            className="flex items-center gap-2 text-xs"
            style={{ color: "var(--text-muted)", fontFamily: "var(--font-body)" }}
          >
            <span className="h-px w-3 shrink-0" style={{ background: "var(--border)" }} />
            {s}
          </li>
        ))}
      </ul>

      <a
        href={card.url}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-1 inline-block rounded-lg px-4 py-2.5 text-center text-xs font-medium uppercase tracking-[0.12em] transition-all duration-200"
        style={{
          border: touch
            ? "1px solid var(--text-muted)"
            : "1px solid color-mix(in srgb, var(--border) 80%, transparent)",
          color: touch ? "var(--text)" : "var(--text-muted)",
          fontFamily: "var(--font-body)",
        }}
        {...(!touch && {
          onMouseEnter: (e: React.MouseEvent<HTMLAnchorElement>) => {
            const el = e.currentTarget;
            el.style.borderColor = "var(--text-muted)";
            el.style.color = "var(--text)";
          },
          onMouseLeave: (e: React.MouseEvent<HTMLAnchorElement>) => {
            const el = e.currentTarget;
            el.style.borderColor = "color-mix(in srgb, var(--border) 80%, transparent)";
            el.style.color = "var(--text-muted)";
          },
        })}
      >
        {card.cta}
      </a>
    </motion.article>
  );
}

function Dots({
  total,
  active,
  onDot,
}: {
  total: number;
  active: number;
  onDot: (i: number) => void;
}) {
  return (
    <div className="flex gap-2">
      {Array.from({ length: total }).map((_, i) => (
        <button
          key={i}
          onClick={() => onDot(i)}
          className="h-1 rounded-full transition-all duration-300"
          style={{
            width: i === active ? "2rem" : "0.5rem",
            background:
              i === active
                ? "var(--text-muted)"
                : "color-mix(in srgb, var(--border) 80%, transparent)",
          }}
          aria-label={`Go to slide ${i + 1}`}
        />
      ))}
    </div>
  );
}

function NavButton({
  onClick,
  disabled,
  dir,
}: {
  onClick: () => void;
  disabled: boolean;
  dir: "left" | "right";
}) {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className="flex h-8 w-8 items-center justify-center rounded-full transition-all duration-200"
      style={{
        border: "1px solid color-mix(in srgb, var(--border) 70%, transparent)",
        color: disabled
          ? "color-mix(in srgb, var(--text-muted) 30%, transparent)"
          : "var(--text-muted)",
        background: "transparent",
        cursor: disabled ? "default" : "pointer",
      }}
      aria-label={dir === "left" ? "Previous" : "Next"}
    >
      <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
        {dir === "left" ? (
          <path
            d="M8.5 2.5L4 7l4.5 4.5"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        ) : (
          <path
            d="M5.5 2.5L10 7l-4.5 4.5"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        )}
      </svg>
    </button>
  );
}
