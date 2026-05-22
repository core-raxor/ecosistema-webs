"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { useLocale } from "@/lib/context/LocaleContext";
import { UI_STRINGS } from "@/lib/i18n/ui-strings";
import type { BrandConfig } from "@/lib/types";
import { useContactModal } from "./ContactModalContext";

// ── Types ─────────────────────────────────────────────────────────────────────

interface ContactModalProps {
  brand: Pick<BrandConfig, "name" | "content">;
}

interface FormState {
  name: string;
  email: string;
  company: string;
  message: string;
}

// ── Transitions ───────────────────────────────────────────────────────────────

const BACKDROP = { duration: 0.22, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] };
const CARD = { duration: 0.28, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] };
const FIELD = { duration: 0.18, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] };

// ── Field component ───────────────────────────────────────────────────────────

interface FieldProps {
  label: string;
  id: string;
  type?: string;
  value: string;
  onChange: (v: string) => void;
  required?: boolean;
  optional?: boolean;
  multiline?: boolean;
  autoFocus?: boolean;
}

function Field({
  label,
  id,
  type = "text",
  value,
  onChange,
  required,
  optional,
  multiline,
  autoFocus,
}: FieldProps) {
  const { locale } = useLocale();
  const [focused, setFocused] = useState(false);
  const hasValue = value.trim().length > 0;

  const inputClass =
    "w-full bg-transparent py-3 text-sm text-(--text) placeholder-transparent focus:outline-none transition-colors duration-150 resize-none";

  return (
    <div className="relative">
      <label
        htmlFor={id}
        className="flex items-center gap-2 text-[10px] uppercase tracking-[0.22em] transition-colors duration-150"
        style={{ color: focused ? "var(--text)" : "var(--text-muted)" }}
      >
        {label}
        {optional && (
          <span className="normal-case tracking-normal opacity-40" style={{ fontSize: "10px" }}>
            {UI_STRINGS[locale].modal.optional}
          </span>
        )}
      </label>

      {multiline ? (
        <textarea
          id={id}
          rows={3}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
          required={required}
          className={inputClass}
          style={{ fontFamily: "var(--font-body)" }}
        />
      ) : (
        <input
          id={id}
          type={type}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
          required={required}
          autoFocus={autoFocus}
          className={inputClass}
          style={{ fontFamily: "var(--font-body)" }}
        />
      )}

      {/* Bottom border */}
      <div className="relative h-px">
        <div className="absolute inset-0" style={{ background: "var(--border)" }} />
        <motion.div
          className="absolute inset-0 origin-left"
          animate={{
            scaleX: focused || hasValue ? 1 : 0,
            opacity: focused ? 1 : hasValue ? 0.5 : 0,
          }}
          transition={FIELD}
          style={{ background: "var(--brand-accent)" }}
        />
      </div>
    </div>
  );
}

// ── Modal ─────────────────────────────────────────────────────────────────────

export function ContactModal({ brand }: ContactModalProps) {
  const { isOpen, closeModal } = useContactModal();
  const { locale } = useLocale();
  const ui = UI_STRINGS[locale].modal;
  const contact = brand.content.contact;
  const cardRef = useRef<HTMLDivElement>(null);

  const [form, setForm] = useState<FormState>({ name: "", email: "", company: "", message: "" });
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);

  const setField = (key: keyof FormState) => (v: string) =>
    setForm((prev) => ({ ...prev, [key]: v }));

  // Scroll lock
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  // Escape key
  useEffect(() => {
    if (!isOpen) return;
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeModal();
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [isOpen, closeModal]);

  // Focus trap — keeps keyboard navigation inside the modal
  useEffect(() => {
    if (!isOpen) return;
    const card = cardRef.current;
    if (!card) return;

    const getFocusable = () =>
      Array.from(
        card.querySelectorAll<HTMLElement>(
          'button, input, select, textarea, [tabindex]:not([tabindex="-1"])',
        ),
      );

    // Focus the first input on open
    const timer = setTimeout(() => getFocusable()[0]?.focus(), 50);

    const trap = (e: KeyboardEvent) => {
      if (e.key !== "Tab") return;
      const focusable = getFocusable();
      if (!focusable.length) return;
      const first = focusable[0]!;
      const last = focusable[focusable.length - 1]!;
      if (e.shiftKey) {
        if (document.activeElement === first) {
          e.preventDefault();
          last.focus();
        }
      } else {
        if (document.activeElement === last) {
          e.preventDefault();
          first.focus();
        }
      }
    };

    document.addEventListener("keydown", trap);
    return () => {
      clearTimeout(timer);
      document.removeEventListener("keydown", trap);
    };
  }, [isOpen]);

  // Reset state when closed
  useEffect(() => {
    if (!isOpen) {
      const t = setTimeout(() => {
        setForm({ name: "", email: "", company: "", message: "" });
        setSent(false);
      }, 400);
      return () => clearTimeout(t);
    }
  }, [isOpen]);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    // Simulate async submit — replace with real endpoint
    await new Promise((r) => setTimeout(r, 800));
    setLoading(false);
    setSent(true);
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center px-4 py-6 md:py-8">
          {/* Backdrop */}
          <motion.div
            key="backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={BACKDROP}
            className="absolute inset-0 cursor-pointer"
            style={{ background: "rgba(0,0,0,0.72)", backdropFilter: "blur(6px)" }}
            onClick={closeModal}
          />

          {/* Card */}
          <motion.div
            key="card"
            ref={cardRef}
            role="dialog"
            aria-modal="true"
            aria-labelledby="contact-modal-title"
            initial={{ opacity: 0, scale: 0.96, y: 12 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.96, y: 8 }}
            transition={CARD}
            className="relative w-full max-w-lg overflow-hidden"
            style={{
              borderRadius: "var(--radius-xl)",
              border: "1px solid var(--border)",
              background: "color-mix(in srgb, var(--bg) 92%, var(--surface) 8%)",
              boxShadow:
                "0 32px 80px rgba(0,0,0,0.70), 0 8px 32px rgba(0,0,0,0.50), inset 0 1px 0 rgba(255,255,255,0.05)",
            }}
          >
            {/* Accent top line */}
            <div
              className="absolute top-0 left-0 right-0 h-px"
              style={{ background: "color-mix(in srgb, var(--brand-accent) 55%, transparent)" }}
            />

            <div className="p-8 md:p-10">
              {/* Close */}
              <button
                onClick={closeModal}
                className="absolute right-6 top-6 flex h-8 w-8 items-center justify-center rounded-full transition-colors duration-150"
                style={{
                  border: "1px solid var(--border)",
                  background: "var(--surface)",
                  color: "var(--text-muted)",
                }}
                aria-label="Close"
              >
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                  <path
                    d="M1 1l10 10M11 1L1 11"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                  />
                </svg>
              </button>

              <AnimatePresence mode="wait">
                {/* ── Form ────────────────────────────────────────────────── */}
                {!sent && (
                  <motion.div
                    key="form"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0, y: -8 }}
                    transition={{ duration: 0.18 }}
                  >
                    {/* Header */}
                    <div className="mb-8 pr-8">
                      <h2
                        id="contact-modal-title"
                        className="font-light text-(--text)"
                        style={{
                          fontSize: "clamp(1.6rem, 3vw, 2rem)",
                          lineHeight: "1.1",
                          letterSpacing: "-0.02em",
                          fontFamily: "var(--font-heading)",
                        }}
                      >
                        {contact.title || `Work with ${brand.name}`}
                      </h2>
                      {contact.description && (
                        <p
                          className="mt-2 text-sm leading-6"
                          style={{ color: "var(--text-muted)", fontFamily: "var(--font-body)" }}
                        >
                          {contact.description}
                        </p>
                      )}
                    </div>

                    {/* Fields */}
                    <form onSubmit={handleSubmit} noValidate>
                      <div className="flex flex-col gap-6">
                        <Field
                          id="modal-name"
                          label={ui.fullName}
                          value={form.name}
                          onChange={setField("name")}
                          required
                        />
                        <Field
                          id="modal-email"
                          label={ui.email}
                          type="email"
                          value={form.email}
                          onChange={setField("email")}
                          required
                        />
                        <Field
                          id="modal-company"
                          label={ui.company}
                          value={form.company}
                          onChange={setField("company")}
                          optional
                        />
                        <Field
                          id="modal-message"
                          label={ui.message}
                          value={form.message}
                          onChange={setField("message")}
                          optional
                          multiline
                        />
                      </div>

                      {/* Footer */}
                      <div className="mt-8 flex items-center justify-between gap-4">
                        <button
                          type="submit"
                          disabled={loading || !form.name.trim() || !form.email.trim()}
                          className="relative overflow-hidden inline-flex items-center rounded-full px-7 py-2.5 text-[11px] uppercase tracking-[0.14em] text-(--text) transition-all duration-200 disabled:opacity-40"
                          style={{
                            background: "color-mix(in srgb, var(--surface) 92%, white 3%)",
                            border: "1px solid rgba(255,255,255,0.12)",
                            boxShadow:
                              "0 4px 16px rgba(0,0,0,0.50), inset 0 1px 0 rgba(255,255,255,0.05)",
                            fontFamily: "var(--font-body)",
                          }}
                        >
                          <span className="relative z-10">{loading ? ui.sending : ui.send}</span>
                        </button>

                        {contact.note && (
                          <p
                            className="text-[10px] uppercase tracking-[0.16em] opacity-50"
                            style={{ color: "var(--text-muted)", fontFamily: "var(--font-body)" }}
                          >
                            {contact.note}
                          </p>
                        )}
                      </div>
                    </form>
                  </motion.div>
                )}

                {/* ── Success ──────────────────────────────────────────────── */}
                {sent && (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.28 }}
                    className="flex min-h-88 flex-col items-start justify-center gap-4"
                  >
                    {/* Accent dot */}
                    <div
                      className="mb-2 h-1.5 w-1.5 rounded-full"
                      style={{ background: "var(--brand-accent)" }}
                    />
                    <h2
                      className="font-light text-(--text)"
                      style={{
                        fontSize: "clamp(2rem, 4vw, 2.8rem)",
                        lineHeight: "1.0",
                        letterSpacing: "-0.025em",
                        fontFamily: "var(--font-heading)",
                      }}
                    >
                      {ui.sent}
                    </h2>
                    <p
                      className="text-sm leading-6"
                      style={{ color: "var(--text-muted)", fontFamily: "var(--font-body)" }}
                    >
                      {ui.inTouch}
                    </p>
                    <p
                      className="mt-4 text-[10px] uppercase tracking-[0.22em] opacity-35"
                      style={{ color: "var(--text-muted)", fontFamily: "var(--font-body)" }}
                    >
                      {brand.name}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
