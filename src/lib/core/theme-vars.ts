import type { CSSProperties } from "react";
import type { BrandConfig } from "@/lib/types";

type BrandShellTokens = Pick<BrandConfig, "theme">;

export function getBrandCssVars(brand: BrandShellTokens): CSSProperties {
	const { colors, typography, effects } = brand.theme;

	return {
		"--bg": colors.background,
		"--surface": colors.surface,
		"--surface-alt": colors.surfaceAlt,
		"--border": colors.border,
		"--text": colors.text,
		"--text-muted": colors.textMuted,
		"--brand-primary": colors.primary,
		"--brand-secondary": colors.secondary,
		"--brand-accent": colors.accent,
		"--brand-glow": colors.accent,
		"--radius-lg": effects.radius.lg,
		"--radius-xl": effects.radius.xl,
		"--shadow-soft": effects.shadows.soft,
		"--shadow-strong": effects.shadows.strong,
		"--blur-light": effects.blur.light,
		"--blur-strong": effects.blur.strong,
		"--font-heading": typography.fontHeading,
		"--font-body": typography.fontBody,
		"--tracking-tight": typography.letterSpacing.tight,
		"--tracking-normal": typography.letterSpacing.normal,
		"--tracking-wide": typography.letterSpacing.wide,
		"--text-hero": typography.scale.hero,
		"--text-h1": typography.scale.h1,
		"--text-h2": typography.scale.h2,
		"--text-h3": typography.scale.h3,
		"--text-body": typography.scale.body,
		"--text-small": typography.scale.small,
	} as CSSProperties;
}
