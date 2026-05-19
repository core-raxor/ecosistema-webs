import type { BrandConfig } from "@/lib/types";

// ============================================================================
// NIXEN: CONTENT LAYER
// ============================================================================

const nixen_content = {
  hero: {
    logoText: "NIXEN",
    navItems: ["Home", "Process", "Services", "Contact"],
    leftText: "We remove",
    rightText: "manual dependence",
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
    highlights: ["Mapped workflows", "Connected tools", "Automated operations", "Scalable flow"],
  },

  process: {
    title: "How NIXEN works",
    steps: [
      { title: "Map", description: "We identify the workflows creating friction." },
      { title: "Design", description: "We define the automation architecture." },
      { title: "Automate", description: "We remove manual work across key operations." },
      { title: "Integrate", description: "We connect tools, CRM, and system logic." },
      { title: "Optimize", description: "We tune the system for cleaner scale." },
    ],
  },

  services: {
    title: "NIXEN System",
    items: [
      {
        name: "NIXEN Mapping",
        label: "Structure",
        description: "A clear map of the workflows your business runs on.",
        includes: ["Process mapping", "Workflow structure", "Bottlenecks", "Automation plan"],
        cta: "Start",
      },
      {
        name: "NIXEN Automation",
        label: "Automation",
        description: "Automation for the operations that waste the most time.",
        includes: ["Task automation", "Lead automation", "Communication flow", "Tool integration"],
        cta: "Start",
      },
      {
        name: "NIXEN System",
        label: "System",
        description: "A connected operations layer built to run daily.",
        includes: ["Full workflows", "Client journey", "Operations system", "Control layer"],
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
