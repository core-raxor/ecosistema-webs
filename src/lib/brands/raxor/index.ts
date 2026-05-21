import type { BrandConfig } from "@/lib/types";

// ============================================================================
// RAXOR: CONTENT LAYER
// ============================================================================

const raxor_content = {
  hero: {
    logoText: "RAXOR",
    navItems: ["Home", "Process", "Services", "Contact"],
    headline: "Build systems that work.",
    primaryCta: "Get in touch",
    secondaryCta: "",
    microNote: "",
  },

  identity: {
    label: "RAXOR",
    title:
      "We build the operational foundation your business needs to capture clients, deliver consistently, and scale.",
    stats: [
      { value: "+1", label: "Year active" },
      { value: "+50", label: "Projects delivered" },
      { value: "2–4 wks", label: "Avg. delivery" },
    ],
  },

  process: {
    title: "How RAXOR works",
    steps: [
      {
        title: "Define",
        description: "We map how your business currently operates and where it needs structure.",
        benefits: ["Clear scope", "Realistic plan"],
      },
      {
        title: "Design",
        description: "We architect the system logic, data flow, and tooling.",
        benefits: ["No wasted cycles", "Structured logic"],
      },
      {
        title: "Build",
        description: "We construct the platform with professional standards throughout.",
        benefits: ["Clean output", "On schedule"],
      },
      {
        title: "Integrate",
        description: "We connect your tools, data, and operating layers.",
        benefits: ["One connected system"],
      },
      {
        title: "Launch",
        description: "The system goes live, tested and ready to run.",
        benefits: ["Operational from day one"],
      },
    ],
  },

  services: {
    title: "RAXOR System",
    items: [
      {
        name: "Base System",
        label: "Foundation",
        description: "The digital base your business needs to operate.",
        includes: [
          "Functional website",
          "Internal structure",
          "Client management",
          "Core system setup",
        ],
        cta: "Apply",
        price: "$500–$1,500",
      },
      {
        name: "Operating Platform",
        label: "Operations",
        description: "A complete platform built for daily operations.",
        includes: ["Full platform", "Operating flows", "Team management", "Control panel"],
        cta: "Apply",
        price: "$4,000–$10,000",
      },
      {
        name: "Scalable System",
        label: "Scale",
        description: "Advanced architecture built for serious growth.",
        includes: ["No-code architecture", "System integrations", "MVP structure", "Optimization"],
        cta: "Apply",
        price: "$6,000–$12,000",
      },
    ],
  },

  final: {
    statement: "Your business deserves more than a website.",
    cta: "Build your system",
  },

  contact: {
    title: "Work with RAXOR",
    description: "We design systems built around how your business actually works.",
    note: "For serious operations.",
  },

  footer: {
    tagline: "System. Structure. Scale.",
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
