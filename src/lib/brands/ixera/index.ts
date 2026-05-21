import type { BrandConfig } from "@/lib/types";

// ============================================================================
// IXERA: CONTENT LAYER
// ============================================================================

const ixera_content = {
  hero: {
    logoText: "IXERA",
    navItems: ["Home", "Process", "Services", "Contact"],
    headline: "AI built into your operations.",
    primaryCta: "Get in touch",
    secondaryCta: "",
    microNote: "",
  },

  identity: {
    label: "IXERA",
    title:
      "We build AI into your business as a working layer — not a tool you use manually, but one that thinks and acts inside your operations.",
    stats: [
      { value: "+1", label: "Year active" },
      { value: "+10", label: "Projects delivered" },
      { value: "4–8 wks", label: "Avg. delivery" },
    ],
  },

  process: {
    title: "How IXERA works",
    steps: [
      {
        title: "Identify",
        description: "We find where AI creates the most leverage in your operation.",
        benefits: ["Highest leverage first", "No wasted spend"],
      },
      {
        title: "Design",
        description: "We define the role AI should play in your specific context.",
        benefits: ["Strategy before build"],
      },
      {
        title: "Build",
        description: "We build the models, prompts, agents, and logic.",
        benefits: ["Built for your context"],
      },
      {
        title: "Integrate",
        description: "We connect AI with your tools, channels, and operations.",
        benefits: ["Part of the system"],
      },
      {
        title: "Optimize",
        description: "We refine around real performance data.",
        benefits: ["Improves with use"],
      },
    ],
  },

  services: {
    title: "IXERA System",
    items: [
      {
        name: "AI Starter",
        label: "Introduction",
        description: "A first AI layer for your most repetitive operations.",
        includes: ["AI chatbot", "Prompt system", "Basic automation", "Client responses"],
        cta: "Apply",
        price: "$300–$1,000",
      },
      {
        name: "AI for Sales",
        label: "Revenue",
        description: "Intelligent systems built to support your sales process.",
        includes: ["Sales bots", "Smart responses", "Lead automation", "Content generation"],
        cta: "Apply",
        price: "$2,000–$6,000",
      },
      {
        name: "Business AI System",
        label: "Operations",
        description: "AI embedded across the core of your operations.",
        includes: ["AI brain", "Decision support", "Advanced automation", "Internal AI tools"],
        cta: "Apply",
        price: "$8,000–$20,000",
      },
    ],
  },

  final: {
    statement: "AI tools alone will not move your business.",
    cta: "Build your AI system",
  },

  contact: {
    title: "Work with IXERA",
    description: "We define where AI should think, act, and respond in your business.",
    note: "For teams ready to operate smarter.",
  },

  footer: {
    tagline: "Intelligence. Automation. Decision.",
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
