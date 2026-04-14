import type { BrandConfig, BrandTheme } from "@/lib/types";

// ============================================================================
// DEXTOR: CONTENT LAYER
// ============================================================================

const dextor_content = {
  hero: {
    logoText: "DEXTOR",
    navItems: ["Home", "Process", "Services", "Contact"],
    leftText: "Structure systems ",
    rightText: "that brings clarity",
    primaryCta: "",
    secondaryCta: "",
    microNote: "",
  },

  identity: {
    label: "WE ARE",
    title: "Business architecture for companies that need control.",
    description: [
      "We turn intuition into structure.",
      "Decisions become measurable, repeatable, and profitable.",
    ],
    highlights: ["Clear model", "Operating control", "Measurable growth", "Decisions with data"],
  },

  process: {
    title: "How DEXTOR works",
    steps: [
      {
        title: "Diagnose",
        description: "We find structural gaps, leaks, and friction.",
      },
      {
        title: "Redesign",
        description: "We clarify model, offer, and business direction.",
      },
      {
        title: "Architect",
        description: "We map the system your business should run on.",
      },
      {
        title: "Control",
        description: "We install metrics, dashboards, and decision logic.",
      },
      {
        title: "Optimize",
        description: "We refine the system for cleaner growth.",
      },
    ],
  },

  services: {
    title: "DEXTOR System",
    items: [
      {
        name: "DEXTOR DIAGNOSIS",
        label: "Diagnosis",
        description: "A structural audit for clearer business decisions.",
        includes: ["Business audit", "Layer map", "Bottlenecks", "Strategic report"],
        cta: "Request",
      },
      {
        name: "DEXTOR STRUCTURE",
        label: "Structure",
        description: "Business architecture built for clarity and operation.",
        includes: ["Model design", "Offer structure", "Revenue logic", "Process map"],
        cta: "Request",
      },
      {
        name: "DEXTOR CONTROL",
        label: "Control",
        description: "A control layer for decisions backed by data.",
        includes: ["KPIs", "Tracking", "Dashboard", "Financial control"],
        cta: "Apply",
      },
      {
        name: "DEXTOR INTELLIGENCE",
        label: "Intelligence",
        description: "A business system designed to learn and optimize.",
        includes: ["Forecasting", "Optimization logic", "AI support", "Growth structure"],
        cta: "Apply",
      },
    ],
  },

  final: {
    statement: "Your business can run.",
    subline: "Control is what scales it.",
    cta: "Structure business",
  },

  contact: {
    title: "Work with DEXTOR",
    description: "We analyze your structure and define the control system.",
    cta: "Apply",
    note: "For operating companies.",
  },

  footer: {
    tagline: "Architecture. Control. Profitability.",
    minimalText: "Business systems built for measurable control.",
  },
};

// ============================================================================
// DEXTOR: LINKS & ASSETS
// ============================================================================

const dextor_links = {
  primaryCta: "/apply",
  contact: "/contact",
  linkedin: "",
  instagram: "",
};

const dextor_assets = {};

// ============================================================================
// DEXTOR: PRESENTATION LAYER (Theme + UI)
// ============================================================================

const dextor_theme: BrandTheme = {
  colors: {
    primary: "#E8EEF5",
    secondary: "#0B0F14",
    background: "#07090D",
    surface: "#0E131A",
    surfaceAlt: "#151B24",
    border: "#202A36",
    text: "#F5F7FA",
    textMuted: "#93A0B2",
    accent: "#D1D5DB",
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
    page: "dark-premium-structural",
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
      hero: "linear-gradient(180deg, rgba(0,0,0,0.04) 0%, rgba(0,0,0,0.75) 100%)",
      section: "linear-gradient(180deg, #06080C 0%, #0E131A 100%)",
    },
    imageTreatment: {
      style: "clean, sharp, strategic, premium, minimal contrast",
      overlay: "soft dark overlay",
      emphasis: "system, dashboard, structure, control",
    },
    motion: {
      style: "smooth, precise, controlled",
      duration: "200ms",
      easing: "cubic-bezier(0.22, 1, 0.36, 1)",
    },
  },

  visualSystem: {
    scene: {
      type: "structural-frame",
      shape: "soft-square",
      placement: "right",
      size: "sm",
      layerCount: 1,
      borderStyle: "none",
      glow: "none",
    },
    particles: {
      mode: "none",
      density: "none",
      speed: "static",
      opacity: "low",
    },
    grid: {
      mode: "technical",
      opacity: "low",
    },
    glow: {
      mode: "ambient",
      intensity: "low",
    },
    atmosphere: {
      noise: "none",
      depth: "medium",
      contrast: "balanced",
    },
  },
};

const dextor_ui = {
  hero: { variant: "split" as const },
  identity: { variant: "editorial-left" as const },
  process: { variant: "interactive-list" as const },
  services: { variant: "stacked-cards" as const },
  final: { variant: "centered-statement" as const },
  contact: { variant: "editorial-contact" as const },
  motion: { intensity: "low" as const },
};

// ============================================================================
// DEXTOR: FINAL COMPOSITION
// ============================================================================

const dextor_page = {
  sections: ["hero", "identity", "process", "services", "final", "contact"],
} as const;

export const dextor_seo = {
  title: "DEXTOR | Business architecture and intelligence for controlled growth",
  description:
    "DEXTOR structures business models, operations, analytics and decision systems for companies that need clarity, control and scalable growth.",
  path: "/dextor",
  image: "/og/dextor.jpg",
  keywords: [
    "DEXTOR",
    "business architecture",
    "business intelligence",
    "operating systems",
    "KPI systems",
    "strategic control",
  ],
  siteUrl: "https://dextor.co",
} as const;

export const dextor = {
  slug: "dextor",
  name: "DEXTOR",
  theme: dextor_theme,
  ui: dextor_ui,
  content: dextor_content,
  page: dextor_page,
  seo: dextor_seo,
  links: dextor_links,
  assets: dextor_assets,
} satisfies BrandConfig;
