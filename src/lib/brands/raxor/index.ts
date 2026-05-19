import type { BrandConfig } from "@/lib/types";

// ============================================================================
// RAXOR: CONTENT LAYER
// ============================================================================

const raxor_content = {
  hero: {
    logoText: "RAXOR",
    navItems: ["Home", "Process", "Services", "Contact"],
    leftText: "We build",
    rightText: "what execution needs",
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
    highlights: ["Offer structure", "Client flow", "Connected operations", "Execution first"],
  },

  process: {
    title: "How RAXOR works",
    steps: [
      { title: "Define", description: "We clarify the offer and operating logic." },
      { title: "Structure", description: "We map acquisition, conversion, and delivery." },
      { title: "Build", description: "We build the assets and system layer." },
      { title: "Integrate", description: "We connect each moving part into one flow." },
      { title: "Activate", description: "The system starts running with real client flow." },
    ],
  },

  services: {
    title: "RAXOR System",
    items: [
      {
        name: "RAXOR Launch",
        label: "Foundation",
        description: "A starting system for a business that needs structure.",
        includes: ["Landing page", "Lead capture", "CRM base", "Offer structure"],
        cta: "Start",
      },
      {
        name: "RAXOR Growth",
        label: "Client Flow",
        description: "A client flow built to generate and manage demand.",
        includes: ["Sales funnel", "Automation", "Email flow", "Lead tracking"],
        cta: "Start",
      },
      {
        name: "RAXOR Pro",
        label: "Full System",
        description: "A full operating system for execution and control.",
        includes: ["Infrastructure", "Sales system", "Operations system", "Dashboard"],
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
// RAXOR: BRAND CONFIG
// ============================================================================

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
  siteUrl: "https://raxor.co",
} as const;

export const raxor = {
  slug: "raxor",
  name: "RAXOR",
  theme: {
    colors: { accent: "#8B5CF6" },
    scene: {
      type: "operational-core" as const,
      shape: "square" as const,
      objectConfig: {
        // geometry — 38 × 16 = 608 points
        majorSegments: 38,
        minorSegments: 16,
        majorRadius: 1.2,
        minorRadius: 0.5,
        objectScale: 1.32,
        targetPointSpacing: 0.2,
        spacingTolerance: 0.035,
        // material
        pointSize: 0.028,
        pointAlpha: 0.84,
        basePointColor: "#d7deec",
        accentMix: 0.045,
        // pose — fixed
        baseTiltX: 1.05,
        baseTiltY: 0.38,
        baseTiltZ: -0.52,
        // particle flow
        particleFlowEnabled: true,
        particleFlowSpeed: 0.075,
        particleFlowLayerOffset: 0.22,
        particleFlowDirection: 1 as const,
      },
    },
  },
  content: raxor_content,
  seo: raxor_seo,
  links: {
    primaryCta: "/build",
    contact: "/contact",
    linkedin: "",
    instagram: "",
  },
} satisfies BrandConfig;
