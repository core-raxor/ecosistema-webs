import type { BrandConfig, BrandTheme } from "@/lib/types";

// ============================================================================
// AELOR: CONTENT LAYER
// ============================================================================

const aelor_content = {
  hero: {
    logoText: "AELOR",
    navItems: ["Home", "Process", "Services", "Contact"],
    leftText: "We shape",
    rightText: "how brands are understood",
    primaryCta: "Start",
    secondaryCta: "",
    microNote: "",
  },

  identity: {
    label: "AELOR",
    title: "Design that sharpens perception.",
    description: ["We turn visual identity, UX, and positioning into one coherent signal."],
    highlights: ["Brand", "Experience", "Positioning", "Clarity"],
  },

  process: {
    title: "A clear design system",
    steps: [
      {
        title: "Audit",
        description: "We identify friction, noise, and weak perception.",
      },
      {
        title: "Position",
        description: "We define the signal your brand should own.",
      },
      {
        title: "Design",
        description: "We build the visual and experiential system around it.",
      },
      {
        title: "Refine",
        description: "We tighten hierarchy, clarity, and conversion flow.",
      },
      {
        title: "Align",
        description: "Your brand starts operating with consistency.",
      },
    ],
  },

  services: {
    title: "AELOR System",
    items: [
      {
        name: "Identity",
        label: "Foundation",
        description: "A visual base built for clarity and recognition.",
        includes: ["Logo", "Color", "Typography", "Guidelines"],
        cta: "Request",
      },
      {
        name: "Experience",
        label: "Interface",
        description: "A sharper user experience built to guide and convert.",
        includes: ["UX/UI", "Landing", "Hierarchy", "Flow"],
        cta: "Request",
      },
      {
        name: "Positioning",
        label: "Direction",
        description: "Brand, message, and design aligned as one system.",
        includes: ["Strategy", "Narrative", "System", "Direction"],
        cta: "Apply",
      },
    ],
  },

  final: {
    statement: "A brand should feel clear before it feels impressive.",
    subline: "That is where perception starts.",
    cta: "Start",
  },

  contact: {
    title: "Work with AELOR",
    description: "We review the brand and define the next move.",
    cta: "Contact",
    note: "",
  },

  footer: {
    tagline: "Perception. Experience. Positioning.",
    minimalText: "Design systems for brands that need clarity.",
  },
};

// ============================================================================
// AELOR: LINKS & ASSETS
// ============================================================================

const aelor_links = {
  primaryCta: "/start",
  contact: "/contact",
  linkedin: "",
  instagram: "",
};

const aelor_assets = {};

// ============================================================================
// AELOR: PRESENTATION LAYER (Theme + UI)
// ============================================================================

const aelor_theme: BrandTheme & {
  interactive: {
    accent: string;
    accentSoft: string;
    accentStrong: string;
    buttonBg: string;
    buttonText: string;
    buttonBorder: string;
    cardBg: string;
    cardBorder: string;
    cardHoverBorder: string;
    interactiveLine: string;
    glowSubtle: string;
  };
} = {
  colors: {
    primary: "#E6E9EF",
    secondary: "#0B0D12",
    background: "#07090D",
    surface: "#0F1218",
    surfaceAlt: "#151922",
    border: "#1F2630",
    text: "#F5F7FA",
    textMuted: "#8F99A8",
    accent: "#FF7A1A",
    success: "#6EE7B7",
    warning: "#FACC15",
    danger: "#FB7185",
  },

  typography: {
    fontHeading: "Inter, Helvetica Neue, Arial, sans-serif",
    fontBody: "Inter, Helvetica Neue, Arial, sans-serif",
    fontMono: "IBM Plex Mono, monospace",
    weights: {
      light: 300,
      regular: 400,
      medium: 500,
      semibold: 600,
      bold: 800,
    },
    scale: {
      hero: "clamp(3rem, 7vw, 6rem)",
      h1: "clamp(2.2rem, 4.5vw, 3.8rem)",
      h2: "clamp(1.6rem, 3vw, 2.6rem)",
      h3: "clamp(1.2rem, 2vw, 1.6rem)",
      body: "1rem",
      small: "0.9rem",
    },
    letterSpacing: {
      tight: "-0.04em",
      normal: "-0.02em",
      wide: "0.08em",
    },
  },

  surfaces: {
    page: "dark-premium-minimal",
    cards: "soft-dark-elevated",
    buttons: "clean-contrast-premium",
    inputs: "outlined-minimal",
    sections: {
      hero: "clean strategic intro",
      identity: "clarity positioning block",
      process: "structured logic grid",
      services: "conversion-focused cards",
      final: "confidence close",
      contact: "frictionless access",
    },
  },

  effects: {
    radius: {
      sm: "8px",
      md: "14px",
      lg: "20px",
      xl: "26px",
    },
    shadows: {
      soft: "0 10px 30px rgba(0,0,0,0.25)",
      strong: "0 20px 60px rgba(0,0,0,0.45)",
    },
    blur: {
      light: "6px",
      strong: "12px",
    },
    gradients: {
      hero: "linear-gradient(180deg, rgba(0,0,0,0.05) 0%, rgba(0,0,0,0.7) 100%)",
      section: "linear-gradient(180deg, #05070A 0%, #0F1218 100%)",
    },
    imageTreatment: {
      style: "clean, sharp, premium, minimal contrast",
      overlay: "soft dark overlay",
      emphasis: "product, interface, clarity",
    },
    motion: {
      style: "smooth, precise, controlled",
      duration: "200ms",
      easing: "cubic-bezier(0.22, 1, 0.36, 1)",
    },
  },

  interactive: {
    accent: "#FF7A1A",
    accentSoft: "rgba(255,122,26,0.12)",
    accentStrong: "#FF8C3A",
    buttonBg: "#FF7A1A",
    buttonText: "#0B0D12",
    buttonBorder: "rgba(255,122,26,0.22)",
    cardBg: "#10141A",
    cardBorder: "rgba(255,122,26,0.14)",
    cardHoverBorder: "rgba(255,122,26,0.3)",
    interactiveLine: "rgba(255,122,26,0.22)",
    glowSubtle: "rgba(255,122,26,0.14)",
  },

  visualSystem: {
    scene: {
      type: "editorial-aura",
      shape: "circle",
      placement: "right",
      size: "sm",
      layerCount: 1,
      borderStyle: "none",
      glow: "none",
    },
    particles: {
      mode: "dust",
      density: "low",
      speed: "slow",
      opacity: "low",
    },
    grid: {
      mode: "none",
      opacity: "none",
    },
    glow: {
      mode: "ambient",
      intensity: "medium",
    },
    atmosphere: {
      noise: "soft",
      depth: "medium",
      contrast: "soft",
    },
  },
};

const aelor_ui = {
  hero: { variant: "split" as const },
  identity: { variant: "editorial-left" as const },
  process: { variant: "interactive-list" as const },
  services: { variant: "stacked-cards" as const },
  final: { variant: "centered-statement" as const },
  contact: { variant: "editorial-contact" as const },
  motion: { intensity: "low" as const },
};

// ============================================================================
// AELOR: FINAL COMPOSITION
// ============================================================================

const aelor_page = {
  sections: ["hero", "identity", "process", "services", "final", "contact"],
} as const;

export const aelor_seo = {
  title: "AELOR | Branding, UX/UI and perception systems for conversion",
  description:
    "AELOR builds brand identity, UX/UI and visual positioning systems for businesses that need stronger perception, better user experience and higher conversion.",
  path: "/aelor",
  image: "/og/aelor.jpg",
  keywords: [
    "AELOR",
    "branding systems",
    "UX UI design",
    "brand positioning",
    "visual identity",
    "conversion design",
  ],
  siteUrl: "https://aelor.co",
} as const;

export const aelor = {
  slug: "aelor",
  name: "AELOR",
  theme: aelor_theme,
  ui: aelor_ui,
  content: aelor_content,
  page: aelor_page,
  seo: aelor_seo,
  links: aelor_links,
  assets: aelor_assets,
} satisfies BrandConfig;
