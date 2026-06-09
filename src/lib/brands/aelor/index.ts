import type { BrandConfig } from "@/lib/types";

// ============================================================================
// AELOR: ENGLISH CONTENT
// ============================================================================

const aelor_en = {
  hero: {
    logoText: "AELOR",
    navItems: ["Home", "Process", "Services", "Contact"],
    headline: "Design built for conversion.",
    primaryCta: "Get in touch",
    secondaryCta: "",
    microNote: "",
  },

  identity: {
    label: "AELOR",
    title:
      "We design digital experiences that make your business feel clear, intentional and professionally positioned from the first interaction.",
    stats: [
      { value: "1+", label: "Year Active" },
      { value: "20+", label: "Projects Delivered" },
      { value: "2–3 wks", label: "Avg. Delivery" },
    ],
  },

  process: {
    title: "How AELOR works",
    steps: [
      {
        title: "Audit",
        description:
          "We analyze your current brand and experience to identify friction, confusion and conversion blockers.",
        benefits: ["Clarity first", "Nothing assumed"],
      },
      {
        title: "Position",
        description:
          "We define the visual direction, messaging hierarchy and perception your business needs.",
        benefits: ["Strategic direction", "Built around your audience"],
      },
      {
        title: "Design",
        description: "We create the experience system around your offer, structure and user flow.",
        benefits: ["Every element has a purpose"],
      },
      {
        title: "Refine",
        description:
          "We optimize hierarchy, interaction and conversion flow to improve decision-making.",
        benefits: ["Cleaner navigation", "Better conversion"],
      },
      {
        title: "Deliver",
        description:
          "Your brand launches with consistency, clarity and a system designed to evolve over time.",
        benefits: ["Consistent experience", "Ready to scale"],
      },
    ],
  },

  services: {
    title: "AELOR System",
    items: [
      {
        name: "Foundation",
        label: "Foundation",
        description:
          "A complete visual audit and strategic direction to sharpen your brand perception and digital clarity.",
        includes: [
          "Visual & UX audit",
          "Strategic visual direction",
          "Digital identity refinement",
          "Basic branding system",
        ],
        cta: "Apply",
        price: "$700–$1,500",
      },
      {
        name: "Conversion Landing",
        label: "Landing",
        description:
          "A fully optimized landing page designed to turn visitors into clients through clear structure and persuasive design.",
        includes: ["Conversion strategy", "UX wireframe", "Full landing design", "CTA strategy"],
        cta: "Apply",
        price: "$1,500–$3,000",
      },
      {
        name: "Digital Experience",
        label: "Experience",
        description:
          "A complete UX/UI system built for clarity, usability and scalability across your digital product.",
        includes: ["Full UX/UI", "Experience architecture", "User flows", "Design system"],
        cta: "Apply",
        price: "$3,000–$8,000",
      },
      {
        name: "Conversion System",
        label: "System",
        description:
          "A deep strategic redesign focused on maximizing conversion performance and visual perception at every touchpoint.",
        includes: [
          "Deep UX/CRO audit",
          "Strategic redesign",
          "Conversion optimization",
          "Visual testing",
        ],
        cta: "Apply",
        price: "$5,000–$12,000",
      },
    ],
  },

  final: {
    statement: "Clear design always converts first.",
    cta: "Start",
  },

  contact: {
    title: "Work with AELOR",
    description:
      "We review your current experience and define what needs to improve to increase clarity, perception and conversion.",
    note: "Design with direction.",
  },

  footer: {
    tagline: "Clarity. Design. Conversion.",
  },
};

// ============================================================================
// AELOR: SPANISH CONTENT
// ============================================================================

const aelor_es = {
  hero: {
    logoText: "AELOR",
    navItems: ["Inicio", "Proceso", "Servicios", "Contacto"],
    headline: "Diseño construido para convertir.",
    primaryCta: "Contactar",
    secondaryCta: "",
    microNote: "",
  },

  identity: {
    label: "AELOR",
    title:
      "Diseñamos experiencias digitales que hacen que tu negocio se perciba claro, intencional y profesional desde la primera interacción.",
    stats: [
      { value: "1+", label: "Año Activo" },
      { value: "20+", label: "Proyectos Entregados" },
      { value: "2–3 sem", label: "Entrega Promedio" },
    ],
  },

  process: {
    title: "Cómo funciona AELOR",
    steps: [
      {
        title: "Audit",
        description:
          "Analizamos tu marca y experiencia actual para detectar fricción, confusión y bloqueos de conversión.",
        benefits: ["Claridad primero", "Nada se asume"],
      },
      {
        title: "Position",
        description:
          "Definimos la dirección visual, jerarquía de comunicación y percepción que tu negocio necesita.",
        benefits: ["Dirección estratégica", "Diseñado para tu audiencia"],
      },
      {
        title: "Design",
        description:
          "Creamos el sistema de experiencia alrededor de tu oferta, estructura y flujo de usuario.",
        benefits: ["Cada elemento tiene un propósito"],
      },
      {
        title: "Refine",
        description:
          "Optimizamos jerarquía, interacción y flujo de conversión para mejorar la toma de decisiones.",
        benefits: ["Navegación más clara", "Mejor conversión"],
      },
      {
        title: "Deliver",
        description:
          "Tu marca se lanza con consistencia, claridad y un sistema diseñado para evolucionar con el tiempo.",
        benefits: ["Experiencia consistente", "Lista para escalar"],
      },
    ],
  },

  services: {
    title: "Sistema AELOR",
    items: [
      {
        name: "Foundation",
        label: "Foundation",
        description:
          "Una auditoría visual completa y dirección estratégica para mejorar la percepción de tu marca y claridad digital.",
        includes: [
          "Auditoría visual y UX",
          "Dirección visual estratégica",
          "Refinación de identidad digital",
          "Sistema básico de branding",
        ],
        cta: "Solicitar",
        price: "$700–$1,500",
      },
      {
        name: "Conversion Landing",
        label: "Landing",
        description:
          "Una landing completamente optimizada para convertir visitantes en clientes mediante estructura clara y diseño persuasivo.",
        includes: [
          "Estrategia de conversión",
          "Wireframe UX",
          "Diseño completo de landing",
          "CTA strategy",
        ],
        cta: "Solicitar",
        price: "$1,500–$3,000",
      },
      {
        name: "Digital Experience",
        label: "Experience",
        description:
          "Un sistema UX/UI completo diseñado para claridad, usabilidad y escalabilidad en tu producto digital.",
        includes: [
          "UX/UI completo",
          "Arquitectura de experiencia",
          "Flujos de usuario",
          "Design system",
        ],
        cta: "Solicitar",
        price: "$3,000–$8,000",
      },
      {
        name: "Conversion System",
        label: "System",
        description:
          "Un rediseño estratégico profundo enfocado en maximizar conversión y percepción visual en cada punto de contacto.",
        includes: [
          "Auditoría UX/CRO profunda",
          "Rediseño estratégico",
          "Optimización de conversión",
          "Testing visual estratégico",
        ],
        cta: "Solicitar",
        price: "$5,000–$12,000",
      },
    ],
  },

  final: {
    statement: "El diseño claro siempre convierte.",
    cta: "Comenzar",
  },

  contact: {
    title: "Trabaja con AELOR",
    description:
      "Revisamos tu experiencia actual y definimos qué necesita mejorar para aumentar claridad, percepción y conversión.",
    note: "Diseño con dirección.",
  },

  footer: {
    tagline: "Claridad. Diseño. Conversión.",
  },
};

// ============================================================================
// AELOR: BRAND CONFIG
// ============================================================================

export const aelor_seo = {
  title: "AELOR | Branding, UX/UI and conversion-focused digital experiences",
  description:
    "AELOR designs brand identity, UX/UI systems and digital experiences that improve perception, strengthen positioning and increase conversion.",
  path: "/",
  image: "/og/aelor.jpg",
  keywords: [
    "AELOR",
    "branding systems",
    "UX UI design",
    "conversion design",
    "digital experience",
    "visual identity",
    "CRO",
  ],
  siteUrl: "https://aelor.co",
} as const;

export const aelor = {
  slug: "aelor",
  name: "AELOR",
  assets: {
    logoMark: true,
  },
  theme: {
    colors: { accent: "#FF7A1A" },
    scene: {
      type: "editorial-aura" as const,
      shape: "soft-square" as const,
      objectConfig: {
        majorSegments: 9,
        minorSegments: 3,
        majorRadius: 1.2,
        minorRadius: 0.35,
        objectScale: 1.1,
        targetPointSpacing: 0.32,
        spacingTolerance: 0.04,
        pointSize: 0.028,
        pointAlpha: 0.84,
        basePointColor: "#d7deec",
        accentMix: 0.045,
        baseTiltX: 0.62,
        baseTiltY: 0.7854,
        baseTiltZ: 0,
        particleFlowEnabled: false,
        particleFlowSpeed: 0.045,
        particleFlowLayerOffset: 0.025,
        particleFlowDirection: 1 as const,
        objectRotationEnabled: true,
        objectRotationSpeed: 0.05,
      },
    },
  },
  content: aelor_en,
  translations: {
    es: aelor_es,
  },
  seo: aelor_seo,
  links: {
    primaryCta: "/start",
    contact: "/contact",
    linkedin: "",
    instagram: "",
  },
} satisfies BrandConfig;
