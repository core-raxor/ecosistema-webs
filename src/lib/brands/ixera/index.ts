import type { BrandConfig } from "@/lib/types";

// ============================================================================
// IXERA: CONTENT LAYER
// ============================================================================

const ixera_content = {
  hero: {
    logoText: "IXERA",
    navItems: ["Home", "Process", "Services", "Contact"],
    leftText: "We place AI",
    rightText: "inside operations",
    primaryCta: "",
    secondaryCta: "",
    microNote: "",
  },

  identity: {
    label: "WE ARE",
    title: "Operational intelligence for businesses that need leverage.",
    description: [
      "We place AI inside communication, decisions, and execution.",
      "Tools become one coherent intelligence layer.",
    ],
    highlights: [
      "AI in operations",
      "Decision support",
      "Connected automations",
      "Less manual thinking",
    ],
  },

  process: {
    title: "How IXERA works",
    steps: [
      { title: "Analyze", description: "We find where intelligence should intervene." },
      { title: "Design", description: "We map the role AI should play in the system." },
      { title: "Build", description: "We build prompts, agents, and logic." },
      { title: "Integrate", description: "We connect AI with your channels and operations." },
      { title: "Optimize", description: "We refine the system around performance." },
    ],
  },

  services: {
    title: "IXERA System",
    items: [
      {
        name: "IXERA Starter",
        label: "Introduction",
        description: "A first intelligence layer for daily operations.",
        includes: ["ChatGPT setup", "Prompt system", "Basic automation", "Client responses"],
        cta: "Start",
      },
      {
        name: "IXERA Growth",
        label: "Automation",
        description: "Communication and lead flow handled with AI.",
        includes: ["AI chatbot", "Lead automation", "Email system", "Content generation"],
        cta: "Start",
      },
      {
        name: "IXERA Pro",
        label: "Intelligence System",
        description: "AI installed as a working layer across the business.",
        includes: ["AI brain", "Decision system", "Advanced automation", "Internal AI tools"],
        cta: "Apply",
      },
      {
        name: "IXERA Scale",
        label: "Autonomous System",
        description: "A semi-autonomous system built to keep learning.",
        includes: ["AI agents", "Full automation", "AI analytics", "Continuous optimization"],
        cta: "Apply",
      },
    ],
  },

  final: {
    statement: "AI tools are not enough.",
    subline: "Your business needs intelligence in motion.",
    cta: "Integrate AI",
  },

  contact: {
    title: "Work with IXERA",
    description: "We define where AI should think, act, and respond.",
    cta: "Apply",
    note: "For operating teams.",
  },

  footer: {
    tagline: "Intelligence. Automation. Decision.",
    minimalText: "AI integrated into real operations.",
  },
};

// ============================================================================
// IXERA: BRAND CONFIG
// ============================================================================

export const ixera_seo = {
  title: "IXERA | AI systems for automation, decision and business operations",
  description:
    "IXERA integrates AI, automation and operational logic for businesses that want smarter workflows, assisted decision-making and scalable execution.",
  path: "/ixera",
  image: "/og/ixera.jpg",
  keywords: [
    "IXERA",
    "AI systems",
    "business automation",
    "AI agents",
    "operational intelligence",
    "AI integrations",
  ],
  siteUrl: "https://ixera.co",
} as const;

export const ixera = {
  slug: "ixera",
  name: "IXERA",
  theme: {
    colors: { accent: "#93C5FD" },
    scene: {
      type: "intelligence-network" as const,
      shape: "circle" as const,
      objectConfig: {
        // majorSegments → pointsPerParallel (38)
        // minorSegments → numberOfParallels  (7)
        // internal constants: MERIDIANS=14, POINTS_PER_MERIDIAN=22
        majorSegments: 38,
        minorSegments: 7,
        majorRadius: 1.35,
        minorRadius: 0.35,
        objectScale: 1.45,
        targetPointSpacing: 0.22,
        spacingTolerance: 0.04,
        // material
        pointSize: 0.028,
        pointAlpha: 0.84,
        basePointColor: "#d7deec",
        accentMix: 0.045,
        // pose — frozen for visual calibration
        baseTiltX: 0,
        baseTiltY: 0,
        baseTiltZ: 0,
        // particle flow — disabled
        particleFlowEnabled: false,
        particleFlowSpeed: 0,
        particleFlowLayerOffset: 0,
        particleFlowDirection: 1 as const,
        particleFlowLaneDuration: 0,
        // rotation — slow horizontal Y spin
        objectRotationEnabled: true,
        objectRotationSpeed: 0.01,
      },
    },
  },
  content: ixera_content,
  seo: ixera_seo,
  links: {
    primaryCta: "/apply",
    contact: "/contact",
    linkedin: "",
    instagram: "",
  },
} satisfies BrandConfig;
