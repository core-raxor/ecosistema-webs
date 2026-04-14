import type { BrandConfig, BrandTheme } from "@/lib/types";

// ============================================================================
// IXERA: CONTENT LAYER
// ============================================================================

const ixera_content = {
  hero: {
    logoText: "IXERA",
    navItems: ["Home", "Process", "Services", "Contact"],
    leftText: "We place AI",
    rightText:
      "inside operations",
    primaryCta: "",
    secondaryCta: "",
    microNote: "",
  },

  identity: {
    label: "WE ARE",
    title: "Operational intelligence for businesses that need leverage.",
    description: [
      "We place AI inside communication, decisions, and execution.",
      "Tools become one coherent intelligence layer.",
    ],
    highlights: [
      "AI in operations",
      "Decision support",
      "Connected automations",
      "Less manual thinking",
    ],
  },

  process: {
    title: "How IXERA works",
    steps: [
      {
        title: "Analyze",
        description: "We find where intelligence should intervene.",
      },
      {
        title: "Design",
        description: "We map the role AI should play in the system.",
      },
      {
        title: "Build",
        description: "We build prompts, agents, and logic.",
      },
      {
        title: "Integrate",
        description: "We connect AI with your channels and operations.",
      },
      {
        title: "Optimize",
        description: "We refine the system around performance.",
      },
    ],
  },

  services: {
    title: "IXERA System",
    items: [
      {
        name: "IXERA Starter",
        label: "Introduction",
        description: "A first intelligence layer for daily operations.",
        includes: [
          "ChatGPT setup",
          "Prompt system",
          "Basic automation",
          "Client responses",
        ],
        cta: "Start",
      },
      {
        name: "IXERA Growth",
        label: "Automation",
        description: "Communication and lead flow handled with AI.",
        includes: [
          "AI chatbot",
          "Lead automation",
          "Email system",
          "Content generation",
        ],
        cta: "Start",
      },
      {
        name: "IXERA Pro",
        label: "Intelligence System",
        description: "AI installed as a working layer across the business.",
        includes: [
          "AI brain",
          "Decision system",
          "Advanced automation",
          "Internal AI tools",
        ],
        cta: "Apply",
      },
      {
        name: "IXERA Scale",
        label: "Autonomous System",
        description: "A semi-autonomous system built to keep learning.",
        includes: [
          "AI agents",
          "Full automation",
          "AI analytics",
          "Continuous optimization",
        ],
        cta: "Apply",
      },
    ],
  },

  final: {
    statement: "AI tools are not enough.",
    subline: "Your business needs intelligence in motion.",
    cta: "Integrate AI",
  },

  contact: {
    title: "Work with IXERA",
    description: "We define where AI should think, act, and respond.",
    cta: "Apply",
    note: "For operating teams.",
  },

  footer: {
    tagline: "Intelligence. Automation. Decision.",
    minimalText: "AI integrated into real operations.",
  },
};

// ============================================================================
// IXERA: LINKS & ASSETS
// ============================================================================

const ixera_links = {
  primaryCta: "/apply",
  contact: "/contact",
  linkedin: "",
  instagram: "",
};

const ixera_assets = {};

// ============================================================================
// IXERA: PRESENTATION LAYER (Theme + UI)
// ============================================================================

const ixera_theme: BrandTheme = {
  colors: {
    primary: "#E6F0FF",
    secondary: "#0A0F1C",
    background: "#07090D",
    surface: "#0B1220",
    surfaceAlt: "#111827",
    border: "#1F2A37",
    text: "#F5F7FA",
    textMuted: "#94A3B8",
    accent: "#FFFFFF",
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
    page: "dark-intelligence-system",
    cards: "glass-structured-ai",
    buttons: "precision-action",
    inputs: "outlined-minimal",
    sections: {
      hero: "intelligence statement",
      identity: "problem-awareness",
      process: "system intelligence layers",
      services: "ai system levels",
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
      hero: "linear-gradient(180deg, rgba(2,4,10,0.2) 0%, rgba(2,4,10,0.9) 100%)",
      section: "linear-gradient(180deg, #02040A 0%, #0B1220 100%)",
    },
    imageTreatment: {
      style: "AI systems, dashboards, neural logic, data flow",
      overlay: "dark blue intelligence overlay",
      emphasis: "decision, automation, intelligence",
    },
    motion: {
      style: "precise, reactive, system-like",
      duration: "160ms",
      easing: "cubic-bezier(0.22, 1, 0.36, 1)",
    },
  },

  visualSystem: {
    scene: {
      type: "intelligence-network",
      shape: "circle",
      placement: "right",
      size: "sm",
      layerCount: 1,
      borderStyle: "none",
      glow: "none",
    },
    particles: {
      mode: "network",
      density: "medium",
      speed: "medium",
      opacity: "medium",
    },
    grid: {
      mode: "none",
      opacity: "none",
    },
    glow: {
      mode: "focused",
      intensity: "high",
    },
    atmosphere: {
      noise: "soft",
      depth: "high",
      contrast: "strong",
    },
  },
};

const ixera_ui = {
  hero: { variant: "split" as const },
  identity: { variant: "editorial-left" as const },
  process: { variant: "interactive-list" as const },
  services: { variant: "stacked-cards" as const },
  final: { variant: "centered-statement" as const },
  contact: { variant: "editorial-contact" as const },
  motion: { intensity: "high" as const },
};

// ============================================================================
// IXERA: FINAL COMPOSITION
// ============================================================================

const ixera_page = {
  sections: ["hero", "identity", "process", "services", "final", "contact"],
} as const;

export const ixera_seo = {
  title: "IXERA | AI systems for automation, decision and business operations",
  description:
    "IXERA integrates AI, automation and operational logic for businesses that want smarter workflows, assisted decision-making and scalable execution.",
  path: "/ixera",
  image: "/og/ixera.jpg",
  keywords: [
    "IXERA",
    "AI systems",
    "business automation",
    "AI agents",
    "operational intelligence",
    "AI integrations",
  ],
  siteUrl: "https://ixera.co",
} as const;

export const ixera = {
  slug: "ixera",
  name: "IXERA",
  theme: ixera_theme,
  ui: ixera_ui,
  content: ixera_content,
  page: ixera_page,
  seo: ixera_seo,
  links: ixera_links,
  assets: ixera_assets,
} satisfies BrandConfig;
