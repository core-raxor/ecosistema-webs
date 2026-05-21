import type { BrandConfig } from "@/lib/types";

// ============================================================================
// DEXTOR: CONTENT LAYER
// ============================================================================

const dextor_content = {
  hero: {
    logoText: "DEXTOR",
    navItems: ["Home", "Process", "Services", "Contact"],
    headline: "Turn your data into decisions.",
    primaryCta: "Get in touch",
    secondaryCta: "",
    microNote: "",
  },

  identity: {
    label: "DEXTOR",
    title:
      "We give your business the metrics and control it needs to make decisions without guessing.",
    stats: [
      { value: "+1", label: "Year active" },
      { value: "+10", label: "Projects delivered" },
      { value: "3–6 wks", label: "Avg. delivery" },
    ],
  },

  process: {
    title: "How DEXTOR works",
    steps: [
      {
        title: "Diagnose",
        description: "We audit your current metrics, data sources, and gaps.",
        benefits: ["Gaps identified", "Nothing assumed"],
      },
      {
        title: "Structure",
        description: "We organize your data into clean, usable systems.",
        benefits: ["Clean input", "Reliable output"],
      },
      {
        title: "Build",
        description: "We create dashboards, metrics, and control systems.",
        benefits: ["Full visibility"],
      },
      {
        title: "Connect",
        description: "We integrate all data sources into one unified view.",
        benefits: ["One source of truth"],
      },
      {
        title: "Optimize",
        description: "We refine the system for cleaner, faster decisions.",
        benefits: ["Adapts as you grow"],
      },
    ],
  },

  services: {
    title: "DEXTOR System",
    items: [
      {
        name: "Business Dashboard",
        label: "Visibility",
        description: "A clear view of how your business is actually doing.",
        includes: ["Custom dashboard", "KPI setup", "Visual reports", "Performance view"],
        cta: "Apply",
        price: "$300–$1,000",
      },
      {
        name: "Financial Control",
        label: "Control",
        description: "A system built to track and understand your finances.",
        includes: ["Cash flow", "Cost tracking", "Revenue view", "Financial reports"],
        cta: "Apply",
        price: "$2,000–$5,000",
      },
      {
        name: "Business Intelligence",
        label: "Intelligence",
        description: "Deep analysis and decision support across the business.",
        includes: ["Data integration", "Advanced analytics", "BI system", "Strategic insights"],
        cta: "Apply",
        price: "$8,000–$20,000",
      },
    ],
  },

  final: {
    statement: "You cannot improve what you cannot see.",
    cta: "Get control",
  },

  contact: {
    title: "Work with DEXTOR",
    description: "We analyze your business and build the control system it needs.",
    note: "For operating businesses.",
  },

  footer: {
    tagline: "Data. Control. Decisions.",
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
    colors: { accent: "#2DD4BF" },
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
