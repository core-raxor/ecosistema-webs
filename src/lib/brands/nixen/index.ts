import type { BrandConfig, BrandTheme } from "@/lib/types";

// ============================================================================
// NIXEN: CONTENT LAYER
// ============================================================================

const nixen_content = {
  hero: {
    logoText: "NIXEN",
    navItems: ["Home", "Process", "Services", "Contact"],
    leftText: "We remove",
    rightText:
      "manual dependence",
    primaryCta: "",
    secondaryCta: "",
    microNote: "",
  },

  identity: {
    label: "WE ARE",
    title: "Operational automation for businesses that need autonomy.",
    description: [
      "We replace manual loops with structured workflows.",
      "The business runs with less founder dependence.",
    ],
    highlights: [
      "Mapped workflows",
      "Connected tools",
      "Automated operations",
      "Scalable flow",
    ],
  },

  process: {
    title: "How NIXEN works",
    steps: [
      {
        title: "Map",
        description: "We identify the workflows creating friction.",
      },
      {
        title: "Design",
        description: "We define the automation architecture.",
      },
      {
        title: "Automate",
        description: "We remove manual work across key operations.",
      },
      {
        title: "Integrate",
        description: "We connect tools, CRM, and system logic.",
      },
      {
        title: "Optimize",
        description: "We tune the system for cleaner scale.",
      },
    ],
  },

  services: {
    title: "NIXEN System",
    items: [
      {
        name: "NIXEN Mapping",
        label: "Structure",
        description: "A clear map of the workflows your business runs on.",
        includes: [
          "Process mapping",
          "Workflow structure",
          "Bottlenecks",
          "Automation plan",
        ],
        cta: "Start",
      },
      {
        name: "NIXEN Automation",
        label: "Automation",
        description: "Automation for the operations that waste the most time.",
        includes: [
          "Task automation",
          "Lead automation",
          "Communication flow",
          "Tool integration",
        ],
        cta: "Start",
      },
      {
        name: "NIXEN System",
        label: "System",
        description: "A connected operations layer built to run daily.",
        includes: [
          "Full workflows",
          "Client journey",
          "Operations system",
          "Control layer",
        ],
        cta: "Apply",
      },
      {
        name: "NIXEN Autonomous",
        label: "Autonomous",
        description: "A semi-autonomous business system for scale.",
        includes: [
          "End-to-end automation",
          "AI integration",
          "Operational agents",
          "Self-optimization",
        ],
        cta: "Apply",
      },
    ],
  },

  final: {
    statement: "Working more is not the answer.",
    subline: "A system that runs is.",
    cta: "Automate business",
  },

  contact: {
    title: "Work with NIXEN",
    description: "We define the workflows that should stop depending on you.",
    cta: "Apply",
    note: "For real operations.",
  },

  footer: {
    tagline: "Automation. System. Scale.",
    minimalText: "Operations rebuilt as a system.",
  },
};

// ============================================================================
// NIXEN: LINKS & ASSETS
// ============================================================================

const nixen_links = {
  primaryCta: "/apply",
  contact: "/contact",
  linkedin: "",
  instagram: "",
};

const nixen_assets = {};

// ============================================================================
// NIXEN: PRESENTATION LAYER (Theme + UI)
// ============================================================================

const nixen_theme: BrandTheme = {
  colors: {
    primary: "#EAF2FF",
    secondary: "#060B14",
    background: "#07090D",
    surface: "#0A0F1C",
    surfaceAlt: "#0F172A",
    border: "#1E293B",
    text: "#F5F7FA",
    textMuted: "#94A3B8",
    accent: "#EF4444",
    success: "#22C55E",
    warning: "#F59E0B",
    danger: "#EF4444",
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
    page: "system-architecture-dark",
    cards: "structured-automation",
    buttons: "action-driven",
    inputs: "minimal-structured",
    sections: {
      hero: "system statement",
      identity: "operational problem awareness",
      process: "automation layers",
      services: "system levels",
      final: "decision trigger",
      contact: "qualification entry",
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
      soft: "0 10px 30px rgba(0,0,0,0.35)",
      strong: "0 20px 60px rgba(0,0,0,0.55)",
    },
    blur: {
      light: "6px",
      strong: "12px",
    },
    gradients: {
      hero: "linear-gradient(180deg, rgba(1,3,10,0.2) 0%, rgba(1,3,10,0.95) 100%)",
      section: "linear-gradient(180deg, #01030A 0%, #0A0F1C 100%)",
    },
    imageTreatment: {
      style: "workflows, systems, dashboards, automation flows",
      overlay: "dark system overlay",
      emphasis: "structure, automation, flow",
    },
    motion: {
      style: "systematic, precise, functional",
      duration: "160ms",
      easing: "cubic-bezier(0.22, 1, 0.36, 1)",
    },
  },

  visualSystem: {
    scene: {
      type: "automation-flow",
      shape: "panel",
      placement: "right",
      size: "sm",
      layerCount: 1,
      borderStyle: "none",
      glow: "none",
    },
    particles: {
      mode: "flow",
      density: "medium",
      speed: "medium",
      opacity: "low",
    },
    grid: {
      mode: "soft",
      opacity: "low",
    },
    glow: {
      mode: "ambient",
      intensity: "medium",
    },
    atmosphere: {
      noise: "none",
      depth: "medium",
      contrast: "balanced",
    },
  },
};

const nixen_ui = {
  hero: { variant: "split" as const },
  identity: { variant: "editorial-left" as const },
  process: { variant: "interactive-list" as const },
  services: { variant: "stacked-cards" as const },
  final: { variant: "centered-statement" as const },
  contact: { variant: "editorial-contact" as const },
  motion: { intensity: "high" as const },
};

// ============================================================================
// NIXEN: FINAL COMPOSITION
// ============================================================================

const nixen_page = {
  sections: ["hero", "identity", "process", "services", "final", "contact"],
} as const;

export const nixen_seo = {
  title: "NIXEN | Automation systems for autonomous and scalable operations",
  description:
    "NIXEN designs workflows, integrations and autonomous automation systems for businesses that want to reduce manual work and scale operations efficiently.",
  path: "/nixen",
  image: "/og/nixen.jpg",
  keywords: [
    "NIXEN",
    "workflow automation",
    "business automation",
    "autonomous systems",
    "process automation",
    "operational scale",
  ],
} as const;

export const nixen = {
  slug: "nixen",
  name: "NIXEN",
  theme: nixen_theme,
  ui: nixen_ui,
  content: nixen_content,
  page: nixen_page,
  seo: nixen_seo,
  links: nixen_links,
  assets: nixen_assets,
} satisfies BrandConfig;
