import type { BrandConfig, BrandTheme } from "@/lib/types";

// ============================================================================
// RAXOR: CONTENT LAYER
// ============================================================================

const raxor_content = {
  hero: {
    logoText: "RAXOR",
    navItems: ["Home", "Process", "Services", "Contact"],
    leftText: "We build",
    rightText:
      "what execution needs",
    primaryCta: "",
    secondaryCta: "",
    microNote: "",
  },

  identity: {
    label: "WE ARE",
    title: "Business infrastructure built for execution.",
    description: [
      "We connect acquisition, conversion, and delivery.",
      "The business stops depending on scattered pieces.",
    ],
    highlights: [
      "Offer structure",
      "Client flow",
      "Connected operations",
      "Execution first",
    ],
  },

  process: {
    title: "How RAXOR works",
    steps: [
      {
        title: "Define",
        description: "We clarify the offer and operating logic.",
      },
      {
        title: "Structure",
        description: "We map acquisition, conversion, and delivery.",
      },
      {
        title: "Build",
        description: "We build the assets and system layer.",
      },
      {
        title: "Integrate",
        description: "We connect each moving part into one flow.",
      },
      {
        title: "Activate",
        description: "The system starts running with real client flow.",
      },
    ],
  },

  services: {
    title: "RAXOR System",
    items: [
      {
        name: "RAXOR Launch",
        label: "Foundation",
        description: "A starting system for a business that needs structure.",
        includes: [
          "Landing page",
          "Lead capture",
          "CRM base",
          "Offer structure",
        ],
        cta: "Start",
      },
      {
        name: "RAXOR Growth",
        label: "Client Flow",
        description: "A client flow built to generate and manage demand.",
        includes: [
          "Sales funnel",
          "Automation",
          "Email flow",
          "Lead tracking",
        ],
        cta: "Start",
      },
      {
        name: "RAXOR Pro",
        label: "Full System",
        description: "A full operating system for execution and control.",
        includes: [
          "Infrastructure",
          "Sales system",
          "Operations system",
          "Dashboard",
        ],
        cta: "Apply",
      },
    ],
  },

  final: {
    statement: "More tools will not fix it.",
    subline: "A working system will.",
    cta: "Build system",
  },

  contact: {
    title: "Work with RAXOR",
    description: "We map the system your business needs to operate.",
    cta: "Apply",
    note: "For serious projects.",
  },

  footer: {
    tagline: "System. Structure. Execution.",
    minimalText: "Operational infrastructure for real businesses.",
  },
};

// ============================================================================
// RAXOR: LINKS & ASSETS
// ============================================================================

const raxor_links = {
  primaryCta: "/build",
  contact: "/contact",
  linkedin: "",
  instagram: "",
};

const raxor_assets = {};

// ============================================================================
// RAXOR: PRESENTATION LAYER (Theme + UI)
// ============================================================================

const raxor_theme: BrandTheme = {
  colors: {
    primary: "#F5F7FA",
    secondary: "#0A0D12",
    background: "#07090D",
    surface: "#0E1117",
    surfaceAlt: "#151A22",
    border: "#1E2630",
    text: "#F5F7FA",
    textMuted: "#8B95A7",
    accent: "#8B5CF6",
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
    page: "dark-system-minimal",
    cards: "structured-dark-elevated",
    buttons: "clean-functional",
    inputs: "outlined-minimal",
    sections: {
      hero: "direct value statement",
      identity: "problem clarity block",
      process: "system breakdown",
      services: "offer structure",
      final: "conversion close",
      contact: "low friction entry",
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
      section: "linear-gradient(180deg, #040608 0%, #0E1117 100%)",
    },
    imageTreatment: {
      style: "clean, technical, system-oriented",
      overlay: "soft dark overlay",
      emphasis: "systems, dashboards, structure",
    },
    motion: {
      style: "precise, fast, controlled",
      duration: "180ms",
      easing: "cubic-bezier(0.22, 1, 0.36, 1)",
    },
  },

  visualSystem: {
    scene: {
      type: "operational-core",
      shape: "square",
      placement: "right",
      size: "sm",
      layerCount: 1,
      borderStyle: "none",
      glow: "none",
    },
    particles: {
      mode: "field",
      density: "low",
      speed: "slow",
      opacity: "low",
    },
    grid: {
      mode: "soft",
      opacity: "low",
    },
    glow: {
      mode: "focused",
      intensity: "medium",
    },
    atmosphere: {
      noise: "soft",
      depth: "medium",
      contrast: "balanced",
    },
  },
};

const raxor_ui = {
  hero: { variant: "split" as const },
  identity: { variant: "editorial-left" as const },
  process: { variant: "interactive-list" as const },
  services: { variant: "stacked-cards" as const },
  final: { variant: "centered-statement" as const },
  contact: { variant: "editorial-contact" as const },
  motion: { intensity: "low" as const },
};

// ============================================================================
// RAXOR: FINAL COMPOSITION
// ============================================================================

const raxor_page = {
  sections: ["hero", "identity", "process", "services", "final", "contact"],
} as const;

export const raxor_seo = {
  title: "RAXOR | Digital business infrastructure for launch and growth",
  description:
    "RAXOR builds websites, funnels, CRM flows and operational systems for businesses that need a functional digital infrastructure ready to sell and grow.",
  path: "/raxor",
  image: "/og/raxor.jpg",
  keywords: [
    "RAXOR",
    "digital infrastructure",
    "sales funnels",
    "landing pages",
    "CRM systems",
    "business launch systems",
  ],
} as const;

export const raxor = {
  slug: "raxor",
  name: "RAXOR",
  theme: raxor_theme,
  ui: raxor_ui,
  content: raxor_content,
  page: raxor_page,
  seo: raxor_seo,
  links: raxor_links,
  assets: raxor_assets,
} satisfies BrandConfig;
