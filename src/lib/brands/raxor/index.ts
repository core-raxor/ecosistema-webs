import type { BrandConfig } from "@/lib/types";

// ============================================================================
// RAXOR: ENGLISH CONTENT
// ============================================================================

const raxor_en = {
  hero: {
    logoText: "RAXOR",
    navItems: ["Home", "Process", "Services", "Contact"],
    headline: "Systems that keep operations moving.",
    primaryCta: "Get in touch",
    secondaryCta: "",
    microNote: "",
  },

  identity: {
    label: "RAXOR",
    title:
      "We build practical digital infrastructure designed to help businesses operate clearly, deliver consistently and scale without operational chaos.",
    stats: [
      { value: "1+", label: "Year Active" },
      { value: "50+", label: "Projects Delivered" },
      { value: "2–4 wks", label: "Avg. Delivery" },
    ],
  },

  process: {
    title: "How RAXOR works",
    steps: [
      {
        title: "Define",
        description:
          "We analyze how your business currently operates and where structure is missing.",
        benefits: ["Clear scope", "Real operational needs"],
      },
      {
        title: "Plan",
        description:
          "We design the platform structure, workflows and operational logic around your business model.",
        benefits: ["Built with intention", "No unnecessary complexity"],
      },
      {
        title: "Build",
        description:
          "We develop the system using modern no-code and low-code technologies with professional execution standards.",
        benefits: ["Fast execution", "Professional quality"],
      },
      {
        title: "Integrate",
        description:
          "We connect the tools, workflows and operational layers your business depends on.",
        benefits: ["Connected operations", "Less friction"],
      },
      {
        title: "Launch",
        description:
          "Your system is delivered tested, functional and ready for real business operations.",
        benefits: ["Operational from day one"],
      },
    ],
  },

  services: {
    title: "RAXOR System",
    items: [
      {
        name: "Foundation System",
        label: "Foundation",
        description:
          "The professional digital base your business needs to launch, operate and manage clients from day one.",
        includes: [
          "Professional website",
          "Client capture & management",
          "Admin panel",
          "Core tools setup",
        ],
        cta: "Apply",
        price: "$800–$2,000",
      },
      {
        name: "Operations System",
        label: "Operations",
        description:
          "An internal operational platform that centralizes your processes, workflows and team management.",
        includes: [
          "Internal operational platform",
          "Client & process management",
          "Operational workflows",
          "Centralized system",
        ],
        cta: "Apply",
        price: "$2,500–$6,000",
      },
      {
        name: "Business Platform",
        label: "Platform",
        description:
          "A custom business platform built to centralize and scale your operations with full control.",
        includes: [
          "Custom business platform",
          "Advanced operations management",
          "Roles & permissions",
          "Client or internal portals",
        ],
        cta: "Apply",
        price: "$6,000–$15,000",
      },
      {
        name: "MVP Launch System",
        label: "MVP",
        description:
          "A functional no-code/low-code MVP designed for startups and founders ready to validate their product fast.",
        includes: [
          "Functional MVP",
          "No-code/low-code architecture",
          "User management",
          "Scalable base",
        ],
        cta: "Apply",
        price: "$4,000–$12,000",
      },
    ],
  },

  final: {
    statement: "Infrastructure that supports real growth.",
    cta: "Build your system",
  },

  contact: {
    title: "Work with RAXOR",
    description:
      "We design and build digital systems structured around how your business actually operates.",
    note: "Built for real operations.",
  },

  footer: {
    tagline: "System. Operations. Growth.",
  },
};

// ============================================================================
// RAXOR: SPANISH CONTENT
// ============================================================================

const raxor_es = {
  hero: {
    logoText: "RAXOR",
    navItems: ["Inicio", "Proceso", "Servicios", "Contacto"],
    headline: "Sistemas que mantienen la operación.",
    primaryCta: "Contactar",
    secondaryCta: "",
    microNote: "",
  },

  identity: {
    label: "RAXOR",
    title:
      "Construimos infraestructura digital práctica diseñada para ayudar a negocios a operar con claridad, entregar consistentemente y escalar sin caos operativo.",
    stats: [
      { value: "1+", label: "Año Activo" },
      { value: "50+", label: "Proyectos Entregados" },
      { value: "2–4 sem", label: "Entrega Promedio" },
    ],
  },

  process: {
    title: "Cómo funciona RAXOR",
    steps: [
      {
        title: "Define",
        description: "Analizamos cómo opera actualmente tu negocio y dónde hace falta estructura.",
        benefits: ["Alcance claro", "Necesidades operativas reales"],
      },
      {
        title: "Plan",
        description:
          "Diseñamos la estructura de la plataforma, workflows y lógica operativa alrededor de tu modelo de negocio.",
        benefits: ["Diseñado con intención", "Sin complejidad innecesaria"],
      },
      {
        title: "Build",
        description:
          "Desarrollamos el sistema utilizando tecnologías modernas no-code y low-code con estándares profesionales de ejecución.",
        benefits: ["Ejecución rápida", "Calidad profesional"],
      },
      {
        title: "Integrate",
        description:
          "Conectamos las herramientas, workflows y capas operativas de las que depende tu negocio.",
        benefits: ["Operaciones conectadas", "Menos fricción"],
      },
      {
        title: "Launch",
        description: "Tu sistema se entrega probado, funcional y listo para operaciones reales.",
        benefits: ["Operativo desde el primer día"],
      },
    ],
  },

  services: {
    title: "Sistema RAXOR",
    items: [
      {
        name: "Foundation System",
        label: "Foundation",
        description:
          "La base digital profesional que tu negocio necesita para lanzar, operar y gestionar clientes desde el primer día.",
        includes: [
          "Sitio web profesional",
          "Captación y gestión de clientes",
          "Panel administrativo",
          "Configuración de herramientas principales",
        ],
        cta: "Solicitar",
        price: "$800–$2,000",
      },
      {
        name: "Operations System",
        label: "Operations",
        description:
          "Una plataforma operativa interna que centraliza tus procesos, workflows y gestión de equipo.",
        includes: [
          "Plataforma operativa interna",
          "Gestión de clientes y procesos",
          "Workflows operativos",
          "Sistema centralizado",
        ],
        cta: "Solicitar",
        price: "$2,500–$6,000",
      },
      {
        name: "Business Platform",
        label: "Platform",
        description:
          "Una plataforma empresarial personalizada para centralizar y escalar tus operaciones con control total.",
        includes: [
          "Plataforma empresarial personalizada",
          "Gestión avanzada de operaciones",
          "Roles y permisos",
          "Portales internos o de clientes",
        ],
        cta: "Solicitar",
        price: "$6,000–$15,000",
      },
      {
        name: "MVP Launch System",
        label: "MVP",
        description:
          "Un MVP funcional en no-code/low-code diseñado para startups y founders que necesitan validar su producto rápidamente.",
        includes: [
          "MVP funcional",
          "Arquitectura no-code/low-code",
          "Gestión de usuarios",
          "Base escalable",
        ],
        cta: "Solicitar",
        price: "$4,000–$12,000",
      },
    ],
  },

  final: {
    statement: "Infraestructura que impulsa crecimiento real.",
    cta: "Construir sistema",
  },

  contact: {
    title: "Trabaja con RAXOR",
    description:
      "Diseñamos y construimos sistemas digitales estructurados alrededor de cómo realmente opera tu negocio.",
    note: "Diseñado para operaciones reales.",
  },

  footer: {
    tagline: "Sistema. Operaciones. Crecimiento.",
  },
};

// ============================================================================
// RAXOR: BRAND CONFIG
// ============================================================================

export const raxor_seo = {
  title: "RAXOR | Digital infrastructure and operational systems for modern businesses",
  description:
    "RAXOR builds professional digital platforms, internal systems and operational infrastructures that help businesses launch, organize and grow efficiently.",
  path: "/",
  image: "/og/raxor.jpg",
  keywords: [
    "RAXOR",
    "digital infrastructure",
    "operational systems",
    "web platforms",
    "internal systems",
    "no-code development",
    "MVP systems",
  ],
  siteUrl: "https://raxor.co",
} as const;

export const raxor = {
  slug: "raxor",
  name: "RAXOR",
  assets: {
    logoMark: true,
  },
  theme: {
    colors: { accent: "#8B5CF6" },
    scene: {
      type: "operational-core" as const,
      shape: "square" as const,
      objectConfig: {
        majorSegments: 38,
        minorSegments: 16,
        majorRadius: 1.2,
        minorRadius: 0.5,
        objectScale: 1.32,
        targetPointSpacing: 0.2,
        spacingTolerance: 0.035,
        pointSize: 0.028,
        pointAlpha: 0.84,
        basePointColor: "#d7deec",
        accentMix: 0.045,
        baseTiltX: 1.05,
        baseTiltY: 0.38,
        baseTiltZ: -0.52,
        particleFlowEnabled: true,
        particleFlowSpeed: 0.075,
        particleFlowLayerOffset: 0.22,
        particleFlowDirection: 1 as const,
      },
    },
  },
  content: raxor_en,
  translations: {
    es: raxor_es,
  },
  seo: raxor_seo,
  links: {
    primaryCta: "/build",
    contact: "/contact",
    linkedin: "",
    instagram: "",
  },
} satisfies BrandConfig;
