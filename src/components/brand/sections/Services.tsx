"use client";

import { motion } from "framer-motion";
import { SectionContainer } from "@/components/shared/layout/SectionContainer";
import type { BrandConfig } from "@/lib/types";

export default function Services({ brand }: { brand: BrandConfig }) {
  const content = brand.content.services;
  const variant = brand.ui?.services?.variant || "cards";
  const motionLevel = brand.ui?.motion?.intensity || "low";

  const sharedProps = {
    title: content.title,
    items: content.items,
    motionLevel,
  };

  if (variant === "stacked-cards") {
    return <StackedCardsVariant {...sharedProps} />;
  }

  if (variant === "stack") {
    return <StackVariant {...sharedProps} />;
  }

  if (variant === "minimal") {
    return <MinimalVariant {...sharedProps} />;
  }

  return <CardsVariant {...sharedProps} />;
}

type ServiceItem = {
  name: string;
  label: string;
  description: string;
  includes: string[];
  cta: string;
};

type VariantProps = {
  title: string;
  items: ServiceItem[];
  motionLevel?: "low" | "medium" | "high" ;
};

function getTransition(motionLevel?: string) {
  const ease: [number, number, number, number] = [0.22, 1, 0.36, 1];

  return motionLevel === "high"
    ? { duration: 0.45, ease }
    : motionLevel === "medium"
      ? { duration: 0.3, ease }
      : { duration: 0.22, ease };
}

function StackedCardsVariant({
  title,
  items,
  motionLevel,
}: VariantProps) {
  const transition = getTransition(motionLevel);

  return (
    <SectionContainer id="services" className="pt-28 md:pt-32">
      <div className="mx-auto max-w-7xl">
        {/* Label */}
        <div className="max-w-[220px]">
          <p className="text-[11px] uppercase tracking-[0.18em] text-[var(--text-muted)]">
            Services
          </p>
          <div className="mt-4 h-px w-full bg-[var(--border)]" />
        </div>

        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={transition}
          viewport={{ once: true, amount: 0.3 }}
          className="mt-10 max-w-[12ch] font-light text-[var(--text)]"
          style={{
            fontSize: "var(--text-h1)",
            letterSpacing: "var(--tracking-tight)",
            fontFamily: "var(--font-heading)",
            lineHeight: "1.02",
          }}
        >
          {title}
        </motion.h2>

        {/* Stacked narrative cards */}
        <div className="mt-16">
          {items.map((item, i) => {
            const isLast = i === items.length - 1;

            return (
              <div
                key={i}
                className="relative"
                style={{
                  height: isLast ? "150vh" : "130vh",
                }}
              >
                <div className="sticky top-20">
                  <motion.article
                    initial={{ opacity: 0, y: 30, scale: 0.985 }}
                    whileInView={{ opacity: 1, y: 0, scale: 1 }}
                    transition={{ ...transition, delay: i * 0.03 }}
                    viewport={{ once: true, amount: 0.2 }}
                    className="relative overflow-hidden border"
                    style={{
                      minHeight: isLast ? "78vh" : "84vh",
                      borderRadius: "var(--radius-xl)",
                      borderColor: "var(--border)",
                      background:
                        "color-mix(in srgb, var(--surface) 82%, transparent)",
                      boxShadow: "var(--shadow-soft)",
                      backdropFilter: "blur(var(--blur-light))",
                    }}
                  >
                    {/* ambient glow */}
                    <div
                      className="pointer-events-none absolute inset-0"
                      style={{
                        background: isLast
                          ? "radial-gradient(circle at 80% 20%, color-mix(in srgb, var(--brand-accent) 18%, transparent), transparent 45%)"
                          : "radial-gradient(circle at 20% 20%, color-mix(in srgb, var(--brand-accent) 12%, transparent), transparent 42%)",
                      }}
                    />

                    {/* inner layout */}
                    <div className="relative flex min-h-[inherit] flex-col justify-between p-7 md:p-10 lg:p-14">
                      {/* top row */}
                      <div className="grid gap-10 lg:grid-cols-12">
                        <div className="lg:col-span-7">
                          {item.label && (
                            <p className="text-[11px] uppercase tracking-[0.18em] text-[var(--text-muted)]">
                              {item.label}
                            </p>
                          )}

                          <h3
                            className="mt-5 max-w-[10ch] font-light text-[var(--text)]"
                            style={{
                              fontSize: "clamp(2.8rem, 5.5vw, 5.2rem)",
                              lineHeight: "0.94",
                              letterSpacing: "var(--tracking-tight)",
                              fontFamily: "var(--font-heading)",
                            }}
                          >
                            {item.name}
                          </h3>
                        </div>

                        <div className="lg:col-span-5 lg:pt-2">
                          <p className="max-w-[32rem] text-base leading-8 text-[var(--text-muted)] md:text-lg">
                            {item.description}
                          </p>
                        </div>
                      </div>

                      {/* bottom row */}
                      <div className="mt-12 grid gap-10 lg:grid-cols-12 lg:items-end">
                        <div className="lg:col-span-7">
                          {item.includes?.length > 0 && (
                            <ul className="grid gap-3 sm:grid-cols-2">
                              {item.includes.map((inc, j) => (
                                <li
                                  key={j}
                                  className="flex items-center gap-3 border-b border-[var(--border)] pb-3 text-sm text-[var(--text-muted)] md:text-base"
                                >
                                  <span className="inline-block h-[6px] w-[6px] rounded-full bg-[var(--brand-accent)] opacity-80" />
                                  <span>{inc}</span>
                                </li>
                              ))}
                            </ul>
                          )}
                        </div>

                        <div className="lg:col-span-5 lg:flex lg:justify-end">
                          <a
                            href="#contact"
                            className="inline-flex items-center rounded-full px-7 py-3 text-sm font-medium text-black transition-transform hover:scale-[1.03]"
                            style={{
                              backgroundColor: "var(--brand-primary)",
                            }}
                          >
                            {item.cta}
                          </a>
                        </div>
                      </div>

                      {/* last card special ending */}
                      {isLast && (
                        <div className="mt-14 flex items-end justify-between gap-6 border-t border-[var(--border)] pt-8">
                          <p className="max-w-[24rem] text-sm uppercase tracking-[0.16em] text-[var(--text-muted)]">
                            Final layer of the system.
                          </p>

                          <div className="hidden md:block h-px w-28 bg-[var(--border)]" />
                        </div>
                      )}
                    </div>
                  </motion.article>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </SectionContainer>
  );
}

function CardsVariant({
  title,
  items,
  motionLevel,
}: VariantProps) {
  const transition = getTransition(motionLevel);

  return (
    <SectionContainer id="services">
      <div className="mx-auto max-w-6xl">
        <motion.h2
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={transition}
          viewport={{ once: true, amount: 0.3 }}
          className="mt-6 font-light"
          style={{
            fontSize: "var(--text-h1)",
            letterSpacing: "var(--tracking-tight)",
            fontFamily: "var(--font-heading)",
            lineHeight: "1.02",
            color: "var(--text)",
          }}
        >
          {title}
        </motion.h2>

        <div className="mt-14 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {items.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ ...transition, delay: i * 0.04 }}
              viewport={{ once: true, amount: 0.2 }}
              className="group border p-8 transition-transform hover:-translate-y-1"
              style={{
                borderRadius: "var(--radius-lg)",
                borderColor: "var(--border)",
                background:
                  "color-mix(in srgb, var(--surface) 82%, transparent)",
                boxShadow: "var(--shadow-soft)",
                backdropFilter: "blur(var(--blur-light))",
              }}
            >
              {item.label && (
                <p className="text-xs uppercase tracking-[var(--tracking-wide)] text-[var(--text-muted)]">
                  {item.label}
                </p>
              )}

              <h3
                className="mt-2"
                style={{
                  fontSize: "var(--text-h3)",
                  fontFamily: "var(--font-heading)",
                  color: "var(--text)",
                }}
              >
                {item.name}
              </h3>

              <p className="mt-4 leading-7 text-[var(--text-muted)]">
                {item.description}
              </p>

              {item.includes.length > 0 && (
                <ul className="mt-6 space-y-2 text-sm text-[var(--text-muted)]">
                  {item.includes.map((inc, j) => (
                    <li key={j}>• {inc}</li>
                  ))}
                </ul>
              )}

              <span
                className="mt-6 inline-block text-sm font-medium"
                style={{ color: "var(--brand-primary)" }}
              >
                {item.cta}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </SectionContainer>
  );
}

function StackVariant({
  title,
  items,
  motionLevel,
}: VariantProps) {
  const transition = getTransition(motionLevel);

  return (
    <SectionContainer id="services">
      <div className="mx-auto max-w-5xl">
        <motion.h2
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={transition}
          viewport={{ once: true, amount: 0.3 }}
          className="mb-10 mt-6 font-light"
          style={{
            fontSize: "var(--text-h1)",
            letterSpacing: "var(--tracking-tight)",
            fontFamily: "var(--font-heading)",
            color: "var(--text)",
          }}
        >
          {title}
        </motion.h2>

        <div className="space-y-10">
          {items.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ ...transition, delay: i * 0.04 }}
              viewport={{ once: true, amount: 0.2 }}
              className="border-b pb-8"
              style={{ borderColor: "var(--border)" }}
            >
              <div className="flex flex-wrap items-center gap-3">
                <h3
                  style={{
                    fontSize: "var(--text-h2)",
                    fontFamily: "var(--font-heading)",
                    color: "var(--text)",
                  }}
                >
                  {item.name}
                </h3>

                {item.label && (
                  <span className="text-xs uppercase tracking-[var(--tracking-wide)] text-[var(--text-muted)]">
                    {item.label}
                  </span>
                )}
              </div>

              <p className="mt-3 max-w-2xl leading-7 text-[var(--text-muted)]">
                {item.description}
              </p>

              {item.includes.length > 0 && (
                <ul className="mt-5 space-y-2 text-sm text-[var(--text-muted)]">
                  {item.includes.map((inc, j) => (
                    <li key={j}>• {inc}</li>
                  ))}
                </ul>
              )}

              <span
                className="mt-5 inline-block text-sm font-medium"
                style={{ color: "var(--brand-primary)" }}
              >
                {item.cta}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </SectionContainer>
  );
}

function MinimalVariant({
  title,
  items,
  motionLevel,
}: VariantProps) {
  const transition = getTransition(motionLevel);

  return (
    <SectionContainer id="services" className="py-20">
      <div className="mx-auto max-w-4xl">
        <motion.h2
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={transition}
          viewport={{ once: true, amount: 0.3 }}
          className="mb-10 mt-6 font-light"
          style={{
            fontSize: "var(--text-h2)",
            letterSpacing: "var(--tracking-tight)",
            fontFamily: "var(--font-heading)",
            color: "var(--text)",
          }}
        >
          {title}
        </motion.h2>

        {items.map((item, i) => (
          <motion.p
            key={i}
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ ...transition, delay: i * 0.03 }}
            viewport={{ once: true, amount: 0.3 }}
            className="mb-4 leading-7 text-[var(--text-muted)]"
          >
            <span style={{ color: "var(--text)" }}>{item.name}</span> —{" "}
            {item.description}
          </motion.p>
        ))}
      </div>
    </SectionContainer>
  );
}