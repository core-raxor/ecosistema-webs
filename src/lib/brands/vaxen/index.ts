import type { BrandConfig } from "@/lib/types";

// ============================================================================
// VAXEN: CONTENT LAYER
// ============================================================================

const vaxen_content = {
  hero: {
    logoText: "VAXEN",
    navItems: ["Home", "Process", "Services", "Contact"],
    headline: "Systems engineered to last.",
    primaryCta: "Get in touch",
    secondaryCta: "",
    microNote: "",
  },

  identity: {
    label: "VAXEN",
    title:
      "We architect and build the custom technical systems your business needs to scale — no templates, no shortcuts.",
    stats: [
      { value: "+1", label: "Year active" },
      { value: "+5", label: "Projects delivered" },
      { value: "6–12 wks", label: "Avg. delivery" },
    ],
  },

  process: {
    title: "How VAXEN works",
    steps: [
      {
        title: "Assess",
        description: "We audit technical constraints, gaps, and growth blockers.",
        benefits: ["No surprises", "Clear constraints"],
      },
      {
        title: "Architect",
        description: "We design the system structure from the ground up.",
        benefits: ["Correct from the start"],
      },
      {
        title: "Build",
        description: "We develop the backend, APIs, and core systems.",
        benefits: ["Full control", "No shortcuts"],
      },
      {
        title: "Integrate",
        description: "We connect all systems, data layers, and services.",
        benefits: ["One foundation"],
      },
      {
        title: "Scale",
        description: "We prepare the architecture for real operational load.",
        benefits: ["Ready for growth"],
      },
    ],
  },

  services: {
    title: "VAXEN System",
    items: [
      {
        name: "Custom Development",
        label: "Foundation",
        description: "A fully custom system built for how you operate.",
        includes: ["Custom software", "Backend architecture", "API design", "Data structure"],
        cta: "Apply",
        price: "$3,000–$8,000",
      },
      {
        name: "Enterprise System",
        label: "Platform",
        description: "A complete technical platform built for scale.",
        includes: [
          "Full platform",
          "Complex integrations",
          "System architecture",
          "Advanced backend",
        ],
        cta: "Apply",
        price: "$15,000–$40,000",
      },
      {
        name: "Advanced Engineering",
        label: "Scale",
        description: "Distributed architecture for serious technical scale.",
        includes: [
          "Scalable systems",
          "Data infrastructure",
          "High performance",
          "Cloud architecture",
        ],
        cta: "Apply",
        price: "$50,000–$150,000",
      },
    ],
  },

  final: {
    statement: "Some systems you outgrow. Build one you will not.",
    cta: "Build your infrastructure",
  },

  contact: {
    title: "Work with VAXEN",
    description: "We define the architecture your business needs to operate at scale.",
    note: "For technical operations.",
  },

  footer: {
    tagline: "Engineering. Architecture. Scale.",
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
