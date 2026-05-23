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
        name: "UX Audit",
        label: "Clarity",
        description:
          "A complete review of your digital experience to identify what is reducing clarity and conversion.",
        includes: ["UX/UI audit", "Friction mapping", "Improvement plan", "Visual review"],
        cta: "Apply",
        price: "$300–$800",
      },
      {
        name: "Product Experience",
        label: "Interface",
        description:
          "A complete UX/UI system designed to guide users clearly through your product or service.",
        includes: ["Full UX/UI", "Experience flows", "Visual system", "User journeys"],
        cta: "Apply",
        price: "$2,000–$5,000",
      },
      {
        name: "CRO Optimization",
        label: "Conversion",
        description:
          "Strategic redesign focused on improving user flow, perception and conversion performance.",
        includes: [
          "Advanced UX audit",
          "Interface redesign",
          "Conversion structure",
          "Visual testing",
        ],
        cta: "Apply",
        price: "$2,000–$6,000",
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
        name: "Auditoría UX",
        label: "Clarity",
        description:
          "Una revisión completa de tu experiencia digital para identificar qué está reduciendo claridad y conversión.",
        includes: ["Auditoría UX/UI", "Mapeo de fricción", "Plan de mejora", "Revisión visual"],
        cta: "Solicitar",
        price: "$300–$800",
      },
      {
        name: "Experiencia de Producto",
        label: "Interface",
        description:
          "Un sistema UX/UI completo diseñado para guiar usuarios claramente a través de tu producto o servicio.",
        includes: ["UX/UI completo", "Flujos de experiencia", "Sistema visual", "User journeys"],
        cta: "Solicitar",
        price: "$2,000–$5,000",
      },
      {
        name: "Optimización CRO",
        label: "Conversion",
        description:
          "Rediseño estratégico enfocado en mejorar flujo de usuario, percepción y rendimiento de conversión.",
        includes: [
          "Auditoría UX avanzada",
          "Rediseño de interfaz",
          "Estructura de conversión",
          "Testing visual",
        ],
        cta: "Solicitar",
        price: "$2,000–$6,000",
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
  path: "/aelor",
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
