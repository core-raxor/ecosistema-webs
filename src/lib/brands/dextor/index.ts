import type { BrandConfig } from "@/lib/types";

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
      { title: "Diagnose", description: "We find structural gaps, leaks, and friction." },
      { title: "Redesign", description: "We clarify model, offer, and business direction." },
      { title: "Architect", description: "We map the system your business should run on." },
      { title: "Control", description: "We install metrics, dashboards, and decision logic." },
      { title: "Optimize", description: "We refine the system for cleaner growth." },
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
// DEXTOR: BRAND CONFIG
// ============================================================================

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
  theme: {
    colors: { accent: "#94A3B8" },
    scene: {
      type: "structural-frame" as const,
      shape: "soft-square" as const,
      objectConfig: {
        // geometry — snub cube: 24 nodes + 60 edges × 7 interior pts = 444 pts
        majorSegments: 8,
        minorSegments: 3,
        majorRadius: 1.45,
        minorRadius: 0.35,
        objectScale: 1.35,
        targetPointSpacing: 0.28,
        spacingTolerance: 0.04,
        // material
        pointSize: 0.028,
        pointAlpha: 0.84,
        basePointColor: "#d7deec",
        accentMix: 0.045,
        // pose
        baseTiltX: -0.52,
        baseTiltY: 0.4,
        baseTiltZ: 0,
        // particle flow — disabled
        particleFlowEnabled: false,
        particleFlowSpeed: 0.045,
        particleFlowLayerOffset: 0.025,
        particleFlowDirection: 1 as const,
        particleFlowLaneDuration: 0,
        // object rotation — slow Y spin
        objectRotationEnabled: true,
        objectRotationSpeed: 0.05,
      },
    },
  },
  content: dextor_content,
  seo: dextor_seo,
  links: {
    primaryCta: "/apply",
    contact: "/contact",
    linkedin: "",
    instagram: "",
  },
} satisfies BrandConfig;
