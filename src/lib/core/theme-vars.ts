import { sharedTokens } from "@/lib/design-system/tokens";
import type { BrandConfig } from "@/lib/types";
import type { CSSProperties } from "react";

function accentToRgba(hex: string, alpha: number): string {
  const clean = hex.replace("#", "");
  if (clean.length !== 6) return hex;
  const r = parseInt(clean.slice(0, 2), 16);
  const g = parseInt(clean.slice(2, 4), 16);
  const b = parseInt(clean.slice(4, 6), 16);
  return `rgba(${r}, ${g}, ${b}, ${alpha})`;
}

export function getBrandCssVars(brand: Pick<BrandConfig, "theme">): CSSProperties {
  const { colors, typography, effects, motion, background } = sharedTokens;
  const accent = brand.theme.colors.accent;

  return {
    // ── Shared: colors ───────────────────────────────────────────────────────
    "--bg": colors.background,
    "--surface": colors.surface,
    "--surface-alt": colors.surfaceAlt,
    "--surface-hover": colors.surfaceHover,
    "--border": colors.border,
    "--border-strong": colors.borderStrong,
    "--border-focus": colors.borderFocus,
    "--text": colors.text,
    "--text-secondary": colors.textSecondary,
    "--text-muted": colors.textMuted,
    "--text-inverted": colors.textInverted,

    // ── Shared: typography ───────────────────────────────────────────────────
    "--font-base": typography.fontFamily.base,
    "--font-mono": typography.fontFamily.mono,
    // legacy aliases — section components reference these names
    "--font-heading": typography.fontFamily.base,
    "--font-body": typography.fontFamily.base,

    "--text-display": typography.scale.display,
    "--text-hero": typography.scale.hero,
    "--text-h1": typography.scale.h1,
    "--text-h2": typography.scale.h2,
    "--text-h3": typography.scale.h3,
    "--text-h4": typography.scale.h4,
    "--text-body": typography.scale.body,
    "--text-small": typography.scale.small,
    "--text-micro": typography.scale.micro,
    "--text-label": typography.scale.label,

    "--tracking-tight": typography.letterSpacing.tight,
    "--tracking-normal": typography.letterSpacing.normal,
    "--tracking-wide": typography.letterSpacing.wide,

    // ── Shared: effects ──────────────────────────────────────────────────────
    "--radius-xs": effects.radius.xs,
    "--radius-sm": effects.radius.sm,
    "--radius-md": effects.radius.md,
    "--radius-lg": effects.radius.lg,
    "--radius-xl": effects.radius.xl,
    "--radius-2xl": effects.radius["2xl"],

    "--shadow-sm": effects.shadows.sm,
    "--shadow-md": effects.shadows.md,
    "--shadow-lg": effects.shadows.lg,
    "--shadow-xl": effects.shadows.xl,
    "--shadow-inner": effects.shadows.innerHighlight,
    // legacy aliases — section components reference these names
    "--shadow-soft": effects.shadows.md,
    "--shadow-strong": effects.shadows.xl,

    "--blur-light": effects.blur.light,
    "--blur-strong": effects.blur.strong,

    // ── Shared: motion ───────────────────────────────────────────────────────
    "--motion-instant": motion.duration.instant,
    "--motion-fast": motion.duration.fast,
    "--motion-base": motion.duration.base,
    "--motion-slow": motion.duration.slow,
    "--motion-cinematic": motion.duration.cinematic,

    "--ease-standard": motion.easing.standard,
    "--ease-decelerate": motion.easing.decelerate,
    "--ease-accelerate": motion.easing.accelerate,
    "--ease-spring": motion.easing.spring,

    // ── Shared: background depth ─────────────────────────────────────────────
    "--bg-depth-top": background.depthTop,
    "--bg-depth-center": background.depthCenter,

    // ── Brand tokens: accent + derived variants ───────────────────────────────
    "--brand-accent": accent,
    "--brand-accent-soft": accentToRgba(accent, 0.12),
    "--brand-accent-glow": accentToRgba(accent, 0.22),
    "--brand-accent-border": accentToRgba(accent, 0.2),
    // legacy aliases
    "--brand-primary": colors.text,
    "--brand-glow": accentToRgba(accent, 0.22),
  } as CSSProperties;
}
