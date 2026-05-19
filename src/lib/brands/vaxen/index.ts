import type { BrandConfig } from "@/lib/types";

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
    label: "OUR AGENCY",
    title: "",
    description: [
      "We design and build backend, data, and internal systems as a unified layer. Instead of relying on fragmented tools, we create structured, reliable infrastructure that supports operations, scales with the business, and gives companies full control over how their technology works.",
    ],
    highlights: ["", "", "", ""],
  },

  process: {
    title: "How VAXEN works",
    steps: [
      { title: "Analyze", description: "We audit the systems, data, and constraints." },
      { title: "Architect", description: "We define backend, data, and integration logic." },
      { title: "Build", description: "We build the backend and internal tools." },
      { title: "Integrate", description: "We connect systems, tools, and data flow." },
      { title: "Scale", description: "We prepare the architecture for stability and growth." },
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
// VAXEN: BRAND CONFIG
// ============================================================================

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
  theme: {
    colors: { accent: "#22C55E" },
    scene: {
      type: "technical-depth" as const,
      shape: "panel" as const,
      objectConfig: {
        // geometry — pentagonal bipyramid: 7 verts + 15 edges × 7 interior pts + 150 face pts = 262 pts
        majorSegments: 8,
        minorSegments: 3,
        majorRadius: 1.38,
        minorRadius: 0.35,
        objectScale: 1.08,
        targetPointSpacing: 0.2,
        spacingTolerance: 0.035,
        // material
        pointSize: 0.028,
        pointAlpha: 0.84,
        basePointColor: "#d7deec",
        accentMix: 0.045,
        // pose — Z lean only, pure horizontal Y rotation
        baseTiltX: 0,
        baseTiltY: 0.4,
        baseTiltZ: 0.52,
        // particle flow — disabled
        particleFlowEnabled: false,
        particleFlowSpeed: 0,
        particleFlowLayerOffset: 0,
        particleFlowDirection: 1 as const,
        particleFlowLaneDuration: 0,
        // rotation — slow horizontal Y spin, Z lean stays fixed
        objectRotationEnabled: true,
        objectRotationSpeed: 0.05,
      },
    },
  },
  content: vaxen_content,
  seo: vaxen_seo,
  links: {
    primaryCta: "/apply",
    contact: "/contact",
    linkedin: "",
    instagram: "",
  },
} satisfies BrandConfig;
