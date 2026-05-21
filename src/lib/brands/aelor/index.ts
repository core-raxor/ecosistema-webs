import type { BrandConfig } from "@/lib/types";

// ============================================================================
// AELOR: CONTENT LAYER
// ============================================================================

const aelor_content = {
  hero: {
    logoText: "AELOR",
    navItems: ["Home", "Process", "Services", "Contact"],
    headline: "Design that converts.",
    primaryCta: "Get in touch",
    secondaryCta: "",
    microNote: "",
  },

  identity: {
    label: "AELOR",
    title:
      "We design the digital experience your offer deserves — clear, intentional, built to guide the right people toward a decision.",
    stats: [
      { value: "+1", label: "Year active" },
      { value: "+20", label: "Projects delivered" },
      { value: "2–3 wks", label: "Avg. delivery" },
    ],
  },

  process: {
    title: "How AELOR works",
    steps: [
      {
        title: "Audit",
        description: "We review your current experience and find what's costing conversions.",
        benefits: ["Know what to fix", "Nothing wasted"],
      },
      {
        title: "Position",
        description: "We define the visual message and hierarchy your brand needs.",
        benefits: ["Direction set", "Before design begins"],
      },
      {
        title: "Design",
        description: "We build the visual system around your offer and audience.",
        benefits: ["Every element justified"],
      },
      {
        title: "Refine",
        description: "We sharpen hierarchy, flow, and conversion logic.",
        benefits: ["Nothing distracts from the goal"],
      },
      {
        title: "Deliver",
        description: "Your brand operates with clarity and visual consistency.",
        benefits: ["Consistent over time"],
      },
    ],
  },

  services: {
    title: "AELOR System",
    items: [
      {
        name: "UX Audit",
        label: "Clarity",
        description: "A clear picture of what is costing you conversions.",
        includes: ["UX/UI audit", "Problem mapping", "Improvement plan", "Visual review"],
        cta: "Apply",
        price: "$300–$800",
      },
      {
        name: "Product Experience",
        label: "Interface",
        description: "A complete experience built to guide and convert.",
        includes: ["Full UX/UI", "Experience flow", "Visual system", "User journeys"],
        cta: "Apply",
        price: "$2,000–$5,000",
      },
      {
        name: "CRO Optimization",
        label: "Conversion",
        description: "Your existing interface redesigned around results.",
        includes: ["Deep UX audit", "Interface redesign", "Conversion logic", "Visual testing"],
        cta: "Apply",
        price: "$2,000–$6,000",
      },
    ],
  },

  final: {
    statement: "A brand should feel clear before it feels impressive.",
    cta: "Start",
  },

  contact: {
    title: "Work with AELOR",
    description: "We review your brand and define what needs to change.",
    note: "Design with direction.",
  },

  footer: {
    tagline: "Clarity. Design. Conversion.",
  },
};

// ============================================================================
// AELOR: BRAND CONFIG
// ============================================================================

export const aelor_seo = {
  title: "AELOR | Branding, UX/UI and perception systems for conversion",
  description:
    "AELOR builds brand identity, UX/UI and visual positioning systems for businesses that need stronger perception, better user experience and higher conversion.",
  path: "/aelor",
  image: "/og/aelor.jpg",
  keywords: [
    "AELOR",
    "branding systems",
    "UX UI design",
    "brand positioning",
    "visual identity",
    "conversion design",
  ],
  siteUrl: "https://aelor.co",
} as const;

export const aelor = {
  slug: "aelor",
  name: "AELOR",
  theme: {
    colors: { accent: "#FF7A1A" },
    scene: {
      type: "editorial-aura" as const,
      shape: "soft-square" as const,
      objectConfig: {
        // geometry — G=9, 10×10 grid per face, ~488 unique points
        majorSegments: 9,
        minorSegments: 3,
        majorRadius: 1.2,
        minorRadius: 0.35,
        objectScale: 1.1,
        targetPointSpacing: 0.32,
        spacingTolerance: 0.04,
        // material
        pointSize: 0.028,
        pointAlpha: 0.84,
        basePointColor: "#d7deec",
        accentMix: 0.045,
        // pose — isometric: one face top, two faces bottom/lateral
        baseTiltX: 0.62,
        baseTiltY: 0.7854,
        baseTiltZ: 0,
        // particle flow — disabled
        particleFlowEnabled: false,
        particleFlowSpeed: 0.045,
        particleFlowLayerOffset: 0.025,
        particleFlowDirection: 1 as const,
        // rotation — slow horizontal Y spin
        objectRotationEnabled: true,
        objectRotationSpeed: 0.05,
      },
    },
  },
  content: aelor_content,
  seo: aelor_seo,
  links: {
    primaryCta: "/start",
    contact: "/contact",
    linkedin: "",
    instagram: "",
  },
} satisfies BrandConfig;
