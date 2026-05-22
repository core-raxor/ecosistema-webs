"use client";

import { createContext, useContext, useState, useSyncExternalStore } from "react";
import type { ReactNode } from "react";

export type Locale = "en" | "es";

type LocaleContextValue = {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  isInitialized: boolean;
  hasStoredLocale: boolean;
};

const LocaleContext = createContext<LocaleContextValue | null>(null);

// ── External stores ────────────────────────────────────────────────────────────

// Detects client vs. server: getSnapshot always true on client, server snapshot false.
const noSubscribe = (_cb: () => void) => () => {};

function subscribeToStorage(cb: () => void) {
  window.addEventListener("storage", cb);
  return () => window.removeEventListener("storage", cb);
}

function getStoredLocale(): Locale | null {
  const v = localStorage.getItem("locale");
  return v === "en" || v === "es" ? v : null;
}

// ── Provider ───────────────────────────────────────────────────────────────────

export function LocaleProvider({ children }: { children: ReactNode }) {
  // Track locale set in the current tab (storage event doesn't fire for same-tab writes)
  const [manualLocale, setManualLocale] = useState<Locale | null>(null);

  // false on server, true on client — no useEffect needed
  const isClient = useSyncExternalStore(
    noSubscribe,
    () => true,
    () => false,
  );

  // Reads localStorage; updates when another tab changes it
  const storedLocale = useSyncExternalStore(subscribeToStorage, getStoredLocale, () => null);

  const setLocale = (next: Locale) => {
    localStorage.setItem("locale", next);
    setManualLocale(next);
  };

  const locale: Locale = manualLocale ?? storedLocale ?? "en";
  const isInitialized = isClient;
  const hasStoredLocale = isClient && (storedLocale !== null || manualLocale !== null);

  return (
    <LocaleContext.Provider value={{ locale, setLocale, isInitialized, hasStoredLocale }}>
      {children}
    </LocaleContext.Provider>
  );
}

export function useLocale() {
  const ctx = useContext(LocaleContext);
  if (!ctx) throw new Error("useLocale must be used within LocaleProvider");
  return ctx;
}
