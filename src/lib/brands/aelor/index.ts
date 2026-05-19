import type { BrandConfig } from "@/lib/types";

// ============================================================================
// AELOR: CONTENT LAYER
// ============================================================================

const aelor_content = {
  hero: {
    logoText: "AELOR",
    navItems: ["Home", "Process", "Services", "Contact"],
    leftText: "We shape",
    rightText: "how brands are understood",
    primaryCta: "Start",
    secondaryCta: "",
    microNote: "",
  },

  identity: {
    label: "AELOR",
    title: "Design that sharpens perception.",
    description: ["We turn visual identity, UX, and positioning into one coherent signal."],
    highlights: ["Brand", "Experience", "Positioning", "Clarity"],
  },

  process: {
    title: "A clear design system",
    steps: [
      { title: "Audit", description: "We identify friction, noise, and weak perception." },
      { title: "Position", description: "We define the signal your brand should own." },
      { title: "Design", description: "We build the visual and experiential system around it." },
      { title: "Refine", description: "We tighten hierarchy, clarity, and conversion flow." },
      { title: "Align", description: "Your brand starts operating with consistency." },
    ],
  },

  services: {
    title: "AELOR System",
    items: [
      {
        name: "Identity",
        label: "Foundation",
        description: "A visual base built for clarity and recognition.",
        includes: ["Logo", "Color", "Typography", "Guidelines"],
        cta: "Request",
      },
      {
        name: "Experience",
        label: "Interface",
        description: "A sharper user experience built to guide and convert.",
        includes: ["UX/UI", "Landing", "Hierarchy", "Flow"],
        cta: "Request",
      },
      {
        name: "Positioning",
        label: "Direction",
        description: "Brand, message, and design aligned as one system.",
        includes: ["Strategy", "Narrative", "System", "Direction"],
        cta: "Apply",
      },
    ],
  },

  final: {
    statement: "A brand should feel clear before it feels impressive.",
    subline: "That is where perception starts.",
    cta: "Start",
  },

  contact: {
    title: "Work with AELOR",
    description: "We review the brand and define the next move.",
    cta: "Contact",
    note: "",
  },

  footer: {
    tagline: "Perception. Experience. Positioning.",
    minimalText: "Design systems for brands that need clarity.",
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
