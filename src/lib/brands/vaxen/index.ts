import type { BrandConfig } from "@/lib/types";

// ============================================================================
// VAXEN: ENGLISH CONTENT
// ============================================================================

const vaxen_en = {
  hero: {
    logoText: "VAXEN",
    navItems: ["Home", "Process", "Services", "Contact"],
    headline: "Engineered for businesses built to scale.",
    primaryCta: "Get in touch",
    secondaryCta: "",
    microNote: "",
  },

  identity: {
    label: "VAXEN",
    title:
      "We architect and develop custom technical infrastructure designed for businesses that need performance, control and long-term scalability.",
    stats: [
      { value: "1+", label: "Year Active" },
      { value: "5+", label: "Projects Delivered" },
      { value: "6–12 wks", label: "Avg. Delivery" },
    ],
  },

  process: {
    title: "How VAXEN works",
    steps: [
      {
        title: "Assess",
        description:
          "We analyze technical limitations, operational bottlenecks and future scalability requirements.",
        benefits: ["Clear technical direction"],
      },
      {
        title: "Architect",
        description:
          "We design the infrastructure, backend logic and system architecture around your operational needs.",
        benefits: ["Built correctly from the foundation"],
      },
      {
        title: "Build",
        description:
          "We develop the backend systems, APIs and technical infrastructure with full engineering control.",
        benefits: ["No shortcuts", "Full customization"],
      },
      {
        title: "Integrate",
        description:
          "We connect services, databases, operational systems and external platforms into one stable architecture.",
        benefits: ["Connected technical ecosystem"],
      },
      {
        title: "Scale",
        description:
          "We prepare the infrastructure to support growth, complexity and long-term operational demands.",
        benefits: ["Built for sustained scalability"],
      },
    ],
  },

  services: {
    title: "VAXEN System",
    items: [
      {
        name: "Custom Development",
        label: "Foundation",
        description:
          "Fully custom software systems designed around how your business actually operates.",
        includes: ["Custom software", "Backend systems", "API architecture", "Data structure"],
        cta: "Apply",
        price: "$3,000–$8,000",
      },
      {
        name: "Enterprise System",
        label: "Platform",
        description:
          "Advanced technical platforms engineered for operational scale and complex business requirements.",
        includes: [
          "Full platform",
          "Advanced integrations",
          "Backend architecture",
          "Operational infrastructure",
        ],
        cta: "Apply",
        price: "$15,000–$40,000",
      },
      {
        name: "Advanced Engineering",
        label: "Scale",
        description:
          "High-performance engineering infrastructure designed for large-scale and technically demanding operations.",
        includes: [
          "Scalable systems",
          "Cloud infrastructure",
          "Data engineering",
          "High-performance architecture",
        ],
        cta: "Apply",
        price: "$50,000–$150,000",
      },
    ],
  },

  final: {
    statement: "Infrastructure engineered to last.",
    cta: "Build your infrastructure",
  },

  contact: {
    title: "Work with VAXEN",
    description:
      "We design and engineer the technical infrastructure your business needs to operate reliably and scale with confidence.",
    note: "Engineering without shortcuts.",
  },

  footer: {
    tagline: "Engineering. Infrastructure. Scale.",
  },
};

// ============================================================================
// VAXEN: SPANISH CONTENT
// ============================================================================

const vaxen_es = {
  hero: {
    logoText: "VAXEN",
    navItems: ["Inicio", "Proceso", "Servicios", "Contacto"],
    headline: "Ingeniería para negocios que escalan.",
    primaryCta: "Contactar",
    secondaryCta: "",
    microNote: "",
  },

  identity: {
    label: "VAXEN",
    title:
      "Arquitectamos y desarrollamos infraestructura técnica personalizada diseñada para negocios que necesitan rendimiento, control y escalabilidad a largo plazo.",
    stats: [
      { value: "1+", label: "Año Activo" },
      { value: "5+", label: "Proyectos Entregados" },
      { value: "6–12 sem", label: "Entrega Promedio" },
    ],
  },

  process: {
    title: "Cómo funciona VAXEN",
    steps: [
      {
        title: "Assess",
        description:
          "Analizamos limitaciones técnicas, cuellos de botella operativos y necesidades futuras de escalabilidad.",
        benefits: ["Dirección técnica clara"],
      },
      {
        title: "Architect",
        description:
          "Diseñamos la infraestructura, lógica backend y arquitectura de sistemas alrededor de tus necesidades operativas.",
        benefits: ["Construido correctamente desde la base"],
      },
      {
        title: "Build",
        description:
          "Desarrollamos sistemas backend, APIs e infraestructura técnica con control total de ingeniería.",
        benefits: ["Sin atajos", "Personalización completa"],
      },
      {
        title: "Integrate",
        description:
          "Conectamos servicios, bases de datos, sistemas operativos y plataformas externas dentro de una arquitectura estable.",
        benefits: ["Ecosistema técnico conectado"],
      },
      {
        title: "Scale",
        description:
          "Preparamos la infraestructura para soportar crecimiento, complejidad y exigencias operativas a largo plazo.",
        benefits: ["Diseñado para escalabilidad sostenida"],
      },
    ],
  },

  services: {
    title: "Sistema VAXEN",
    items: [
      {
        name: "Desarrollo Personalizado",
        label: "Foundation",
        description:
          "Sistemas de software completamente personalizados diseñados alrededor de cómo realmente opera tu negocio.",
        includes: [
          "Software personalizado",
          "Sistemas backend",
          "Arquitectura API",
          "Estructura de datos",
        ],
        cta: "Solicitar",
        price: "$3,000–$8,000",
      },
      {
        name: "Sistema Enterprise",
        label: "Platform",
        description:
          "Plataformas técnicas avanzadas diseñadas para escalabilidad operativa y necesidades empresariales complejas.",
        includes: [
          "Plataforma completa",
          "Integraciones avanzadas",
          "Arquitectura backend",
          "Infraestructura operativa",
        ],
        cta: "Solicitar",
        price: "$15,000–$40,000",
      },
      {
        name: "Ingeniería Avanzada",
        label: "Scale",
        description:
          "Infraestructura de ingeniería de alto rendimiento diseñada para operaciones técnicas exigentes y de gran escala.",
        includes: [
          "Sistemas escalables",
          "Infraestructura cloud",
          "Ingeniería de datos",
          "Arquitectura de alto rendimiento",
        ],
        cta: "Solicitar",
        price: "$50,000–$150,000",
      },
    ],
  },

  final: {
    statement: "Infraestructura diseñada para durar.",
    cta: "Construir infraestructura",
  },

  contact: {
    title: "Trabaja con VAXEN",
    description:
      "Diseñamos y desarrollamos la infraestructura técnica que tu negocio necesita para operar con estabilidad y escalar con confianza.",
    note: "Ingeniería sin atajos.",
  },

  footer: {
    tagline: "Ingeniería. Infraestructura. Escala.",
  },
};

// ============================================================================
// VAXEN: BRAND CONFIG
// ============================================================================

export const vaxen_seo = {
  title: "VAXEN | Engineering systems and scalable technical infrastructure",
  description:
    "VAXEN designs and develops backend systems, technical infrastructure and scalable software architecture for businesses that require long-term operational stability and control.",
  path: "/vaxen",
  image: "/og/vaxen.jpg",
  keywords: [
    "VAXEN",
    "technical infrastructure",
    "backend systems",
    "scalable architecture",
    "engineering systems",
    "custom software",
    "enterprise engineering",
  ],
  siteUrl: "https://vaxen.co",
} as const;

export const vaxen = {
  slug: "vaxen",
  name: "VAXEN",
  assets: {
    logoMark: true,
  },
  theme: {
    colors: { accent: "#22C55E" },
    scene: {
      type: "technical-depth" as const,
      shape: "panel" as const,
      objectConfig: {
        majorSegments: 8,
        minorSegments: 3,
        majorRadius: 1.38,
        minorRadius: 0.35,
        objectScale: 1.08,
        targetPointSpacing: 0.2,
        spacingTolerance: 0.035,
        pointSize: 0.028,
        pointAlpha: 0.84,
        basePointColor: "#d7deec",
        accentMix: 0.045,
        baseTiltX: 0,
        baseTiltY: 0.4,
        baseTiltZ: 0.52,
        particleFlowEnabled: false,
        particleFlowSpeed: 0,
        particleFlowLayerOffset: 0,
        particleFlowDirection: 1 as const,
        particleFlowLaneDuration: 0,
        objectRotationEnabled: true,
        objectRotationSpeed: 0.05,
      },
    },
  },
  content: vaxen_en,
  translations: {
    es: vaxen_es,
  },
  seo: vaxen_seo,
  links: {
    primaryCta: "/apply",
    contact: "/contact",
    linkedin: "",
    instagram: "",
  },
} satisfies BrandConfig;
