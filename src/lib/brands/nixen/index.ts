import type { BrandConfig } from "@/lib/types";

// ============================================================================
// NIXEN: CONTENT LAYER
// ============================================================================

const nixen_content = {
  hero: {
    logoText: "NIXEN",
    navItems: ["Home", "Process", "Services", "Contact"],
    headline: "Remove what slows you down.",
    primaryCta: "Get in touch",
    secondaryCta: "",
    microNote: "",
  },

  identity: {
    label: "NIXEN",
    title:
      "We automate the manual overhead slowing your operations so your team can focus on what actually matters.",
    stats: [
      { value: "+1", label: "Year active" },
      { value: "+20", label: "Projects delivered" },
      { value: "2–4 wks", label: "Avg. delivery" },
    ],
  },

  process: {
    title: "How NIXEN works",
    steps: [
      {
        title: "Map",
        description: "We identify which workflows are creating friction and cost.",
        benefits: ["Losses identified", "Priorities clear"],
      },
      {
        title: "Design",
        description: "We define the automation architecture for your operations.",
        benefits: ["Structured first"],
      },
      {
        title: "Build",
        description: "We implement the automations across your key processes.",
        benefits: ["Tested", "Production-ready"],
      },
      {
        title: "Integrate",
        description: "We connect tools, CRM, forms, and systems.",
        benefits: ["No manual input"],
      },
      {
        title: "Optimize",
        description: "We refine flows for cleaner, more stable performance.",
        benefits: ["More efficient over time"],
      },
    ],
  },

  services: {
    title: "NIXEN System",
    items: [
      {
        name: "Core Automation",
        label: "Foundation",
        description: "The first automations that save the most time.",
        includes: ["Key workflows", "Basic integrations", "Task automation", "Flow setup"],
        cta: "Apply",
        price: "$200–$800",
      },
      {
        name: "Sales Automation",
        label: "Revenue",
        description: "A system that captures and follows leads automatically.",
        includes: ["Lead capture", "Auto follow-up", "Pipeline flows", "CRM integration"],
        cta: "Apply",
        price: "$1,500–$5,000",
      },
      {
        name: "Business Automation",
        label: "Operations",
        description: "End-to-end automation for complex operations.",
        includes: [
          "Full workflow design",
          "System integration",
          "Advanced logic",
          "Scale-ready flows",
        ],
        cta: "Apply",
        price: "$5,000–$12,000",
      },
    ],
  },

  final: {
    statement: "Working harder is not the answer.",
    cta: "Automate your business",
  },

  contact: {
    title: "Work with NIXEN",
    description: "We find the manual work slowing you down and remove it.",
    note: "For real operations.",
  },

  footer: {
    tagline: "Automation. Efficiency. Scale.",
  },
};

// ============================================================================
// NIXEN: BRAND CONFIG
// ============================================================================

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
  siteUrl: "https://nixen.co",
} as const;

export const nixen = {
  slug: "nixen",
  name: "NIXEN",
  theme: {
    colors: { accent: "#EF4444" },
    scene: {
      type: "automation-flow" as const,
      shape: "circle" as const,
      objectConfig: {
        // geometry — F=2 geodesic sphere: 42 nodes + 240 edge pts = ~282 pts
        // majorSegments / minorSegments unused by AutomationFlow (internal constants)
        majorSegments: 12,
        minorSegments: 28,
        majorRadius: 1.35,
        minorRadius: 0.42,
        objectScale: 1.4,
        targetPointSpacing: 0.24,
        spacingTolerance: 0.04,
        // material
        pointSize: 0.028,
        pointAlpha: 0.84,
        basePointColor: "#d7deec",
        accentMix: 0.045,
        // pose — frontal oblique: sphere visible with depth
        baseTiltX: -0.3,
        baseTiltY: 0.45,
        baseTiltZ: 0,
        // particle flow — disabled
        particleFlowEnabled: false,
        particleFlowSpeed: 0,
        particleFlowLayerOffset: 0,
        particleFlowDirection: 1 as const,
        particleFlowLaneDuration: 0,
        // rotation — slow horizontal Y spin, matches ecosystem speed
        objectRotationEnabled: true,
        objectRotationSpeed: 0.05,
      },
    },
  },
  content: nixen_content,
  seo: nixen_seo,
  links: {
    primaryCta: "/apply",
    contact: "/contact",
    linkedin: "",
    instagram: "",
  },
} satisfies BrandConfig;
