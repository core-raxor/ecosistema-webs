import type { BrandConfig } from "@/lib/types";

// ============================================================================
// DEXTOR: ENGLISH CONTENT
// ============================================================================

const dextor_en = {
  hero: {
    logoText: "DEXTOR",
    navItems: ["Home", "Process", "Services", "Contact"],
    headline: "Turn data into operational clarity.",
    primaryCta: "Get in touch",
    secondaryCta: "",
    microNote: "",
  },

  identity: {
    label: "DEXTOR",
    title:
      "We build visibility and control systems that help businesses make decisions with confidence instead of guesswork.",
    stats: [
      { value: "1+", label: "Year Active" },
      { value: "10+", label: "Projects Delivered" },
      { value: "3–6 wks", label: "Avg. Delivery" },
    ],
  },

  process: {
    title: "How DEXTOR works",
    steps: [
      {
        title: "Diagnose",
        description:
          "We analyze your current metrics, reporting structure and operational blind spots.",
        benefits: ["Clear gaps identified", "Nothing assumed"],
      },
      {
        title: "Structure",
        description:
          "We organize your business data into systems that are reliable, readable and actionable.",
        benefits: ["Clean data flow", "Reliable visibility"],
      },
      {
        title: "Build",
        description:
          "We create dashboards, KPI systems and reporting structures tailored to your operations.",
        benefits: ["Real operational insight"],
      },
      {
        title: "Connect",
        description:
          "We integrate your tools, platforms and data sources into one connected system.",
        benefits: ["One source of truth"],
      },
      {
        title: "Optimize",
        description:
          "We refine the system continuously so your decisions stay fast, clear and scalable.",
        benefits: ["Better decisions over time"],
      },
    ],
  },

  services: {
    title: "DEXTOR System",
    items: [
      {
        name: "DEXTOR START",
        label: "Start",
        description:
          "A custom dashboard system that gives you initial clarity on your business performance, revenue and key metrics.",
        includes: [
          "Custom main dashboard",
          "Basic KPI setup",
          "Revenue & sales tracking",
          "Executive reports",
        ],
        cta: "Apply",
        price: "$500–$1,500",
      },
      {
        name: "DEXTOR CONTROL",
        label: "Control",
        description:
          "An operational and financial visibility system that gives your business the structure to grow with control.",
        includes: [
          "Operational & financial dashboards",
          "Cash flow & cost control",
          "Centralized data integration",
          "Automated reporting",
        ],
        cta: "Apply",
        price: "$2,000–$5,000",
      },
      {
        name: "DEXTOR INTELLIGENCE",
        label: "Intelligence",
        description:
          "An advanced business intelligence system designed for complex operations that need strategic decision-making.",
        includes: [
          "Advanced BI system",
          "Multi-source data integration",
          "Strategic dashboards",
          "Scalable data architecture",
        ],
        cta: "Apply",
        price: "$5,000–$12,000",
      },
      {
        name: "DEXTOR OS",
        label: "OS",
        description:
          "A complete business intelligence infrastructure built to centralize metrics, reporting and decision-making across the organization.",
        includes: [
          "Full BI architecture",
          "Centralized metrics system",
          "Multi-dashboard ecosystem",
          "Continuous optimization",
        ],
        cta: "Apply",
        price: "$10,000–$25,000+",
      },
    ],
  },

  final: {
    statement: "Better decisions start with clearer visibility.",
    cta: "Get control",
  },

  contact: {
    title: "Work with DEXTOR",
    description:
      "We analyze your business operations and build the visibility systems needed to improve control and decision-making.",
    note: "Built for operational clarity.",
  },

  footer: {
    tagline: "Data. Visibility. Decisions.",
  },
};

// ============================================================================
// DEXTOR: SPANISH CONTENT
// ============================================================================

const dextor_es = {
  hero: {
    logoText: "DEXTOR",
    navItems: ["Inicio", "Proceso", "Servicios", "Contacto"],
    headline: "Convierte datos en claridad operativa.",
    primaryCta: "Contactar",
    secondaryCta: "",
    microNote: "",
  },

  identity: {
    label: "DEXTOR",
    title:
      "Construimos sistemas de visibilidad y control que ayudan a negocios a tomar decisiones con confianza en lugar de depender de suposiciones.",
    stats: [
      { value: "1+", label: "Año Activo" },
      { value: "10+", label: "Proyectos Entregados" },
      { value: "3–6 sem", label: "Entrega Promedio" },
    ],
  },

  process: {
    title: "Cómo funciona DEXTOR",
    steps: [
      {
        title: "Diagnose",
        description:
          "Analizamos tus métricas actuales, estructura de reportes y puntos ciegos operativos.",
        benefits: ["Brechas identificadas", "Nada se asume"],
      },
      {
        title: "Structure",
        description:
          "Organizamos los datos de tu negocio en sistemas confiables, claros y accionables.",
        benefits: ["Flujo de datos limpio", "Visibilidad confiable"],
      },
      {
        title: "Build",
        description:
          "Creamos dashboards, sistemas KPI y estructuras de reportes adaptadas a tus operaciones.",
        benefits: ["Visibilidad operativa real"],
      },
      {
        title: "Connect",
        description:
          "Integramos tus herramientas, plataformas y fuentes de datos en un solo sistema conectado.",
        benefits: ["Una sola fuente de verdad"],
      },
      {
        title: "Optimize",
        description:
          "Refinamos continuamente el sistema para que tus decisiones sean más rápidas, claras y escalables.",
        benefits: ["Mejores decisiones con el tiempo"],
      },
    ],
  },

  services: {
    title: "Sistema DEXTOR",
    items: [
      {
        name: "DEXTOR START",
        label: "Start",
        description:
          "Un sistema de dashboard personalizado que te da claridad inicial sobre el estado de tu negocio, ingresos y métricas clave.",
        includes: [
          "Dashboard principal personalizado",
          "Configuración básica de KPIs",
          "Tracking de ingresos y ventas",
          "Reportes ejecutivos",
        ],
        cta: "Solicitar",
        price: "$500–$1,500",
      },
      {
        name: "DEXTOR CONTROL",
        label: "Control",
        description:
          "Un sistema de visibilidad operativa y financiera que le da a tu negocio la estructura necesaria para crecer con control.",
        includes: [
          "Dashboards operativos y financieros",
          "Control de flujo de caja y costos",
          "Integración centralizada de datos",
          "Reportes automatizados",
        ],
        cta: "Solicitar",
        price: "$2,000–$5,000",
      },
      {
        name: "DEXTOR INTELLIGENCE",
        label: "Intelligence",
        description:
          "Un sistema avanzado de inteligencia empresarial diseñado para operaciones complejas que necesitan tomar decisiones estratégicas.",
        includes: [
          "Sistema avanzado de BI",
          "Integración de múltiples fuentes",
          "Dashboards estratégicos",
          "Arquitectura de datos escalable",
        ],
        cta: "Solicitar",
        price: "$5,000–$12,000",
      },
      {
        name: "DEXTOR OS",
        label: "OS",
        description:
          "Una infraestructura completa de inteligencia empresarial para centralizar métricas, reporting y toma de decisiones en toda la organización.",
        includes: [
          "Arquitectura completa de BI",
          "Sistema centralizado de métricas",
          "Ecosistema multi-dashboard",
          "Optimización continua",
        ],
        cta: "Solicitar",
        price: "$10,000–$25,000+",
      },
    ],
  },

  final: {
    statement: "Mejores decisiones comienzan con claridad.",
    cta: "Obtener control",
  },

  contact: {
    title: "Trabaja con DEXTOR",
    description:
      "Analizamos las operaciones de tu negocio y construimos los sistemas de visibilidad necesarios para mejorar control y toma de decisiones.",
    note: "Diseñado para claridad operativa.",
  },

  footer: {
    tagline: "Datos. Visibilidad. Decisiones.",
  },
};

// ============================================================================
// DEXTOR: BRAND CONFIG
// ============================================================================

export const dextor_seo = {
  title: "DEXTOR | Business intelligence and operational control systems",
  description:
    "DEXTOR structures data, metrics and operational visibility systems for businesses that need clearer decisions, stronger control and scalable growth.",
  path: "/",
  image: "/og/dextor.jpg",
  keywords: [
    "DEXTOR",
    "business intelligence",
    "KPI systems",
    "dashboards",
    "operational control",
    "analytics systems",
    "business metrics",
  ],
  siteUrl: "https://dextor.co",
} as const;

export const dextor = {
  slug: "dextor",
  name: "DEXTOR",
  assets: {
    logoMark: true,
  },
  theme: {
    colors: { accent: "#2DD4BF" },
    scene: {
      type: "structural-frame" as const,
      shape: "soft-square" as const,
      objectConfig: {
        majorSegments: 6,
        minorSegments: 3,
        majorRadius: 1.45,
        minorRadius: 0.35,
        objectScale: 1.4,
        targetPointSpacing: 0.28,
        spacingTolerance: 0.04,
        pointSize: 0.028,
        pointAlpha: 0.84,
        basePointColor: "#d7deec",
        accentMix: 0.045,
        baseTiltX: -0.38,
        baseTiltY: 0.4,
        baseTiltZ: 0,
        particleFlowEnabled: false,
        particleFlowSpeed: 0.045,
        particleFlowLayerOffset: 0.025,
        particleFlowDirection: 1 as const,
        particleFlowLaneDuration: 0,
        objectRotationEnabled: true,
        objectRotationSpeed: 0.04,
      },
    },
  },
  content: dextor_en,
  translations: {
    es: dextor_es,
  },
  seo: dextor_seo,
  links: {
    primaryCta: "/apply",
    contact: "/contact",
    linkedin: "",
    instagram: "",
  },
} satisfies BrandConfig;
