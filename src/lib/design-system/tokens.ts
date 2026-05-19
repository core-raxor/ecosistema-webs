export const sharedTokens = {
  colors: {
    background: "#07090E",
    surface: "#0D1117",
    surfaceAlt: "#141B23",
    surfaceHover: "#1A232E",
    border: "rgba(255, 255, 255, 0.09)",
    borderStrong: "rgba(255, 255, 255, 0.13)",
    borderFocus: "rgba(255, 255, 255, 0.25)",
    text: "#EEF2F7",
    textSecondary: "#8B96A8",
    textMuted: "#5C6B80",
    textInverted: "#07090E",
  },

  typography: {
    fontFamily: {
      base: '"Inter", ui-sans-serif, system-ui, sans-serif',
      mono: '"Geist Mono", "JetBrains Mono", ui-monospace, monospace',
    },
    weights: {
      light: 300,
      regular: 400,
      medium: 500,
      semibold: 600,
      bold: 700,
    },
    scale: {
      display: "5rem",
      hero: "clamp(2.75rem, 6vw, 3.75rem)",
      h1: "clamp(2rem, 4vw, 2.75rem)",
      h2: "clamp(1.5rem, 3vw, 2rem)",
      h3: "clamp(1.125rem, 2vw, 1.375rem)",
      h4: "1.125rem",
      body: "1rem",
      small: "0.875rem",
      micro: "0.75rem",
      label: "0.6875rem",
    },
    letterSpacing: {
      tight: "-0.04em",
      normal: "-0.02em",
      wide: "0.08em",
    },
  },

  effects: {
    radius: {
      xs: "2px",
      sm: "4px",
      md: "6px",
      lg: "10px",
      xl: "14px",
      "2xl": "20px",
      full: "9999px",
    },
    shadows: {
      sm: "0 1px 2px rgba(0, 0, 0, 0.5)",
      md: "0 2px 8px rgba(0, 0, 0, 0.5), 0 1px 2px rgba(0, 0, 0, 0.4)",
      lg: "0 4px 16px rgba(0, 0, 0, 0.55), 0 2px 6px rgba(0, 0, 0, 0.45)",
      xl: "0 8px 32px rgba(0, 0, 0, 0.6), 0 4px 12px rgba(0, 0, 0, 0.5)",
      innerHighlight: "inset 0 1px 0 rgba(255, 255, 255, 0.06)",
    },
    blur: {
      light: "6px",
      strong: "14px",
    },
  },

  motion: {
    duration: {
      instant: "100ms",
      fast: "200ms",
      base: "350ms",
      slow: "550ms",
      cinematic: "900ms",
    },
    easing: {
      standard: "cubic-bezier(0.16, 1, 0.3, 1)",
      decelerate: "cubic-bezier(0.0, 0.0, 0.2, 1)",
      accelerate: "cubic-bezier(0.4, 0.0, 1.0, 1.0)",
      spring: "cubic-bezier(0.34, 1.56, 0.64, 1)",
    },
  },

  background: {
    depthTop:
      "radial-gradient(ellipse 80% 40% at 50% 0%, rgba(220, 230, 255, 0.055) 0%, transparent 100%)",
    depthCenter: "radial-gradient(circle at 50% 58%, rgba(0, 0, 0, 0.35) 0%, transparent 50%)",
  },
} as const;

export type SharedTokens = typeof sharedTokens;
