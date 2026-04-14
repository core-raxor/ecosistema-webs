import type { BrandConfig, BrandTheme } from "@/lib/types";

// ============================================================================
// VAXEN: CONTENT LAYER
// ============================================================================

const vaxen_content = {
  hero: {
    logoText: "VAXEN",
    navItems: ["Home", "Process", "Services", "Contact"],
    leftText: "We engineer",
    rightText: "the system layer beneath growth",
    primaryCta: "",
    secondaryCta: "",
    microNote: "",
  },

  identity: {
    label: "WE ARE",
    title: "Infrastructure engineering for scalable operations.",
    description: [
      "We design backend, data, and internal systems as one layer.",
      "Operations stop depending on fragile tool chains.",
    ],
    highlights: [
      "Backend first",
      "Connected data",
      "Stable architecture",
      "Engineering over patching",
    ],
  },

  process: {
    title: "How VAXEN works",
    steps: [
      {
        title: "Analyze",
        description: "We audit the systems, data, and constraints.",
      },
      {
        title: "Architect",
        description: "We define backend, data, and integration logic.",
      },
      {
        title: "Build",
        description: "We build the backend and internal tools.",
      },
      {
        title: "Integrate",
        description: "We connect systems, tools, and data flow.",
      },
      {
        title: "Scale",
        description: "We prepare the architecture for stability and growth.",
      },
    ],
  },

  services: {
    title: "VAXEN System",
    items: [
      {
        name: "VAXEN Setup",
        label: "Foundation",
        description: "The technical base your operations need first.",
        includes: [
          "Infrastructure setup",
          "Database structure",
          "Tool integration",
          "Basic automation",
        ],
        cta: "Start",
      },
      {
        name: "VAXEN Systems",
        label: "System",
        description: "An internal system built to run core operations.",
        includes: ["Internal tools", "System links", "Data flow", "Advanced automation"],
        cta: "Start",
      },
      {
        name: "VAXEN Engineering",
        label: "Engineering",
        description: "Advanced architecture for serious technical scale.",
        includes: ["API development", "Database design", "Modular systems", "Cloud infrastructure"],
        cta: "Apply",
      },
      {
        name: "VAXEN Platform",
        label: "Platform",
        description: "A platform layer for scalable products and systems.",
        includes: ["Micro SaaS", "User platform", "Dashboards", "Scalable architecture"],
        cta: "Apply",
      },
    ],
  },

  final: {
    statement: "Fragile operations do not scale.",
    subline: "Infrastructure does.",
    cta: "Build infrastructure",
  },

  contact: {
    title: "Work with VAXEN",
    description: "We define the architecture your business needs to run.",
    cta: "Apply",
    note: "For technical operations.",
  },

  footer: {
    tagline: "Backend. System. Infrastructure.",
    minimalText: "Engineering the layer behind growth.",
  },
};

// ============================================================================
// VAXEN: LINKS & ASSETS
// ============================================================================

const vaxen_links = {
  primaryCta: "/apply",
  contact: "/contact",
  linkedin: "",
  instagram: "",
};

const vaxen_assets = {};

// ============================================================================
// VAXEN: PRESENTATION LAYER (Theme + UI)
// ============================================================================

const vaxen_theme: BrandTheme = {
  colors: {
    primary: "#F3E8FF",
    secondary: "#05070A",
    background: "#07090D",
    surface: "#0B0D17",
    surfaceAlt: "#121426",
    border: "rgba(168,85,247,0.14)",
    text: "#F5F7FA",
    textMuted: "#94A3B8",
    accent: "#14532D",
    success: "#22C55E",
    warning: "#F59E0B",
    danger: "#EF4444",
  },

  typography: {
    fontHeading: "Inter Tight, Inter, sans-serif",
    fontBody: "Inter, sans-serif",
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
    page: "technical-infrastructure-dark",
    cards: "system-architecture",
    buttons: "precision-action",
    inputs: "minimal-technical",
    sections: {
      hero: "infrastructure statement",
      identity: "technical problem awareness",
      process: "system architecture layers",
      services: "engineering levels",
      final: "decision trigger",
      contact: "technical qualification",
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
      soft: "0 10px 30px rgba(0,0,0,0.4)",
      strong: "0 20px 60px rgba(0,0,0,0.6)",
    },
    blur: {
      light: "6px",
      strong: "12px",
    },
    gradients: {
      hero: "linear-gradient(180deg, rgba(2,3,10,0.2) 0%, rgba(2,3,10,0.95) 100%)",
      section: "linear-gradient(180deg, #02030A 0%, #0B0D17 100%)",
    },
    imageTreatment: {
      style: "backend systems, infrastructure diagrams, data flows, technical dashboards",
      overlay: "dark infrastructure overlay",
      emphasis: "structure, depth, engineering",
    },
    motion: {
      style: "precise, technical, controlled",
      duration: "160ms",
      easing: "cubic-bezier(0.22, 1, 0.36, 1)",
    },
  },

  visualSystem: {
    scene: {
      type: "technical-depth",
      shape: "panel",
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
      mode: "deep",
      intensity: "high",
    },
    atmosphere: {
      noise: "none",
      depth: "high",
      contrast: "strong",
    },
  },
};

const vaxen_ui = {
  hero: { variant: "split" as const },
  identity: { variant: "editorial-left" as const },
  process: { variant: "interactive-list" as const },
  services: { variant: "stacked-cards" as const },
  final: { variant: "centered-statement" as const },
  contact: { variant: "editorial-contact" as const },
  motion: { intensity: "high" as const },
};

// ============================================================================
// VAXEN: FINAL COMPOSITION
// ============================================================================

const vaxen_page = {
  sections: ["hero", "identity", "process", "services", "final", "contact"],
} as const;

export const vaxen_seo = {
  title: "VAXEN | Infrastructure engineering for scalable operations",
  description:
    "VAXEN builds backend, data, internal tools and technical infrastructure for businesses that need stable scalable operations.",
  path: "/vaxen",
  image: "/og/vaxen.jpg",
  keywords: [
    "VAXEN",
    "technical infrastructure",
    "backend systems",
    "internal tools",
    "business engineering",
    "scalable operations",
  ],
  siteUrl: "https://vaxen.co",
} as const;

export const vaxen = {
  slug: "vaxen",
  name: "VAXEN",
  theme: vaxen_theme,
  ui: vaxen_ui,
  content: vaxen_content,
  page: vaxen_page,
  seo: vaxen_seo,
  links: vaxen_links,
  assets: vaxen_assets,
} satisfies BrandConfig;
