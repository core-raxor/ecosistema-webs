import type { BrandConfig } from "@/lib/types";

// ============================================================================
// KYREXIS: CONTENT LAYER
// ============================================================================

const kyrexis_content = {
  hero: {
    logoText: "KYREXIS",
    navItems: ["Home", "Process", "Services", "Contact"],
    headline: "Your business doesn't need more effort. It needs a system.",
    primaryCta: "Get started",
    secondaryCta: "",
    microNote: "",
  },

  identity: {
    label: "KYREXIS",
    title:
      "We build, organize and scale businesses through integrated digital systems — not isolated services.",
    stats: [
      { value: "6", label: "Specialized models" },
      { value: "+100", label: "Projects delivered" },
      { value: "5+", label: "Business layers" },
    ],
  },

  process: {
    title: "How Kyrexis works",
    steps: [
      {
        title: "Identify",
        description: "We map the gaps and inefficiencies holding your business back.",
        benefits: ["Clear picture", "No wasted effort"],
      },
      {
        title: "Design",
        description: "We match the right systems to your stage and objectives.",
        benefits: ["Structured approach", "Right tools, right time"],
      },
      {
        title: "Build",
        description: "Our specialized models execute each layer of your business system.",
        benefits: ["Professional execution"],
      },
      {
        title: "Activate",
        description: "You pay, we start. Consultation is included from day one.",
        benefits: ["Fast start", "No hidden fees"],
      },
      {
        title: "Scale",
        description: "Systems that grow with your business and keep working over time.",
        benefits: ["Built for the long term"],
      },
    ],
  },

  services: {
    title: "Kyrexis Packages",
    items: [
      {
        name: "Digital Launch",
        label: "Foundation",
        description:
          "Everything you need to launch your business with a professional digital presence.",
        includes: ["Visual branding", "Professional web", "Initial digital structure"],
        cta: "Apply",
        price: "$800–$2,500",
      },
      {
        name: "Organized Business",
        label: "Structure",
        description:
          "Internal systems and operations organized so your business runs without chaos.",
        includes: ["Internal system", "Base automation", "UX optimization"],
        cta: "Apply",
        price: "$2,500–$6,000",
      },
      {
        name: "Automated Business",
        label: "Efficiency",
        description: "Operational automation that reduces manual work and increases throughput.",
        includes: ["Operational automation", "Integrations", "Functional system"],
        cta: "Apply",
        price: "$5,000–$12,000",
      },
      {
        name: "Intelligent Business",
        label: "Intelligence",
        description:
          "AI integrated into your business for smarter operations and better decisions.",
        includes: ["AI integration", "Advanced automation", "Optimized systems"],
        cta: "Apply",
        price: "$8,000–$20,000",
      },
      {
        name: "Enterprise Scale",
        label: "Scale",
        description:
          "Full-stack enterprise systems built to handle complexity and sustained growth.",
        includes: [
          "Advanced systems",
          "Data & metrics",
          "Automation & AI",
          "Scalable architecture",
        ],
        cta: "Apply",
        price: "$15,000–$50,000+",
      },
    ],
  },

  moreServices: {
    title: "Specialized Models",
    cards: [
      {
        slug: "aelor",
        title: "AELOR",
        description: "Design experiences that convert visitors into clients.",
        services: ["UX/UI Design", "Landing Pages", "Visual Branding", "CRO Optimization"],
        cta: "Visit AELOR",
        url: "https://aelor.co",
      },
      {
        slug: "raxor",
        title: "RAXOR",
        description: "Professional digital systems without long development cycles.",
        services: ["Web Platforms", "Internal Systems", "MVPs", "No-code Architecture"],
        cta: "Visit RAXOR",
        url: "https://raxor.co",
      },
      {
        slug: "nixen",
        title: "NIXEN",
        description: "Eliminate manual processes so your business runs at full capacity.",
        services: ["Process Automation", "Tool Integration", "Sales Flows", "Workflows"],
        cta: "Visit NIXEN",
        url: "https://nixen.co",
      },
      {
        slug: "ixera",
        title: "IXERA",
        description: "Integrate AI to operate smarter, sell more and scale with less effort.",
        services: ["Intelligent Chatbots", "AI Assistants", "AI for Sales", "Operations AI"],
        cta: "Visit IXERA",
        url: "https://ixera.co",
      },
      {
        slug: "dextor",
        title: "DEXTOR",
        description: "Understand and control your business with real data and clear metrics.",
        services: ["Business Dashboards", "Metrics Systems", "Financial Control", "BI"],
        cta: "Visit DEXTOR",
        url: "https://dextor.co",
      },
      {
        slug: "vaxen",
        title: "VAXEN",
        description: "Build the technical foundation your business needs to truly scale.",
        services: [
          "Custom Software",
          "System Architecture",
          "Advanced Backend",
          "Complex Integrations",
        ],
        cta: "Visit VAXEN",
        url: "https://vaxen.co",
      },
    ],
  },

  testimonials: {
    title: "What our clients say",
    items: [
      {
        name: "Carlos M.",
        role: "Founder, SaaS startup",
        text: "Kyrexis built the operational backbone our company needed to scale past 5 figures MRR. The system works on its own.",
        rating: 5,
      },
      {
        name: "Laura P.",
        role: "CEO, digital agency",
        text: "They didn't just deliver a system. They delivered clarity. Our team operates 3x faster now with zero micromanagement.",
        rating: 5,
      },
      {
        name: "Andrés R.",
        role: "E-commerce founder",
        text: "Before Kyrexis we were drowning in manual tasks. Now everything runs automatically and we focus on what actually matters.",
        rating: 5,
      },
      {
        name: "Sofía T.",
        role: "Marketing director",
        text: "The digital launch package gave us a professional presence in weeks. ROI was visible from month one.",
        rating: 5,
      },
      {
        name: "Miguel O.",
        role: "Operations manager",
        text: "Exceptional work. The automated workflows they built saved us 30+ hours per week across the entire team.",
        rating: 5,
      },
      {
        name: "Valeria C.",
        role: "Startup co-founder",
        text: "We tried building systems internally for two years. Kyrexis did it in eight weeks. Real results, no fluff.",
        rating: 5,
      },
      {
        name: "Daniel F.",
        role: "Business owner",
        text: "The Organized Business package completely restructured how we operate. Best investment we made this year.",
        rating: 5,
      },
      {
        name: "Isabella N.",
        role: "Product lead",
        text: "The AI integration made our support team 4x more efficient. Clients get answers instantly, 24/7.",
        rating: 5,
      },
      {
        name: "Roberto L.",
        role: "CFO, growth company",
        text: "Finally a vendor that speaks business outcomes, not technical jargon. They delivered exactly what was promised.",
        rating: 5,
      },
      {
        name: "Camila E.",
        role: "Freelancer turned agency",
        text: "Started with Digital Launch and scaled to Enterprise within 18 months. The system grew with us seamlessly.",
        rating: 5,
      },
    ],
  },

  faqs: {
    title: "Frequently asked questions",
    items: [
      {
        question: "What is Kyrexis and what does it do?",
        answer:
          "Kyrexis is a digital ecosystem that builds, organizes and scales businesses through integrated systems. We don't offer isolated services — we design complete operational frameworks using 6 specialized models that work together.",
      },
      {
        question: "How does the work process function?",
        answer:
          "You identify your need, select a package, contact us via chat, complete payment and we start immediately. Consultation is included from day one. Video calls are available for projects above $5,000 USD.",
      },
      {
        question: "How much does it cost to work with Kyrexis?",
        answer:
          "Packages start at $800 USD (Digital Launch) and go up to $50,000+ (Enterprise Scale). Each package has a defined scope and price range. No hidden fees — everything is clear before we start.",
      },
      {
        question: "How long does a project take to complete?",
        answer:
          "Delivery time depends on package and scope. Digital Launch typically takes 2–4 weeks. Enterprise Scale can take 3–6 months. The exact timeline is defined and agreed upon before work begins.",
      },
      {
        question: "Can I work directly with one of the specialized models?",
        answer:
          "Yes. If you know exactly what you need — pure UX/UI from AELOR, automation from NIXEN, or engineering from VAXEN — you can engage that model directly. Kyrexis is the recommended entry point if you're unsure of the right approach.",
      },
      {
        question: "What types of businesses does Kyrexis serve?",
        answer:
          "Freelancers launching their first digital presence, entrepreneurs organizing operations, growing companies automating and scaling, and enterprises building advanced infrastructure. We have a package for every stage of growth.",
      },
    ],
  },

  final: {
    statement: "A business built on systems doesn't depend on effort. It depends on structure.",
    cta: "Start now",
  },

  contact: {
    title: "Work with Kyrexis",
    description:
      "Tell us where your business is and what needs to change. We'll define the right system together.",
    note: "Systems that work.",
  },

  footer: {
    tagline: "Build. Organize. Scale.",
  },
};

// ============================================================================
// KYREXIS: BRAND CONFIG
// ============================================================================

export const kyrexis_seo = {
  title: "KYREXIS | Digital ecosystem for business systems",
  description:
    "Kyrexis builds, organizes and scales businesses through integrated digital systems — design, automation, AI, data and engineering working together.",
  path: "/kyrexis",
  image: "/og/kyrexis.jpg",
  keywords: [
    "KYREXIS",
    "digital ecosystem",
    "business systems",
    "digital transformation",
    "automation",
    "AI integration",
    "scale business",
  ],
  siteUrl: "https://kyrexis.co",
} as const;

export const kyrexis = {
  slug: "kyrexis",
  name: "KYREXIS",
  theme: {
    colors: { accent: "#A8B4C0" },
    scene: {
      type: "globe-grid" as const,
      shape: "circle" as const,
      objectConfig: {
        majorSegments: 18,
        minorSegments: 12,
        majorRadius: 1.3,
        minorRadius: 0.35,
        objectScale: 1.55,
        targetPointSpacing: 0.09,
        spacingTolerance: 0.04,
        pointSize: 0.026,
        pointAlpha: 0.9,
        basePointColor: "#d7deec",
        accentMix: 0.08,
        baseTiltX: 0.35,
        baseTiltY: 0.5,
        baseTiltZ: 0.1,
        particleFlowEnabled: false,
        particleFlowSpeed: 0,
        particleFlowLayerOffset: 0,
        particleFlowDirection: 1 as const,
        particleFlowLaneDuration: 0,
        objectRotationEnabled: true,
        objectRotationSpeed: 0.03,
      },
    },
  },
  content: kyrexis_content,
  sections: [
    "hero",
    "identity",
    "process",
    "services",
    "moreServices",
    "testimonials",
    "faqs",
    "final",
    "contact",
  ] as const,
  seo: kyrexis_seo,
  links: {
    primaryCta: "/start",
    contact: "/contact",
    linkedin: "",
    instagram: "",
  },
} satisfies BrandConfig;
