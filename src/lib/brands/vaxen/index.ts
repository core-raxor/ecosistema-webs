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
        name: "Foundation",
        label: "Foundation",
        description:
          "A professional digital infrastructure built from scratch to give your business the technical base it needs to operate and grow.",
        includes: [
          "Custom web interface",
          "Auth & user system",
          "Structured backend & database",
          "Essential integrations & deployment",
        ],
        cta: "Apply",
        price: "$3,000–$6,000",
      },
      {
        name: "Operations System",
        label: "Operations",
        description:
          "A custom operational platform that centralizes internal processes, eliminates manual work and prepares your business for growth.",
        includes: [
          "Custom operational platform",
          "Internal modules & admin panel",
          "Platform & API integrations",
          "Growth-ready backend architecture",
        ],
        cta: "Apply",
        price: "$7,000–$15,000",
      },
      {
        name: "Digital Platform",
        label: "Platform",
        description:
          "A fully custom frontend and backend platform built for businesses with active operations that need stability, performance and scale.",
        includes: [
          "Full custom frontend & backend",
          "Advanced API architecture & integrations",
          "Cloud infrastructure & data processing",
          "Performance optimization & advanced security",
        ],
        cta: "Apply",
        price: "$15,000–$35,000",
      },
      {
        name: "Scale Infrastructure",
        label: "Scale",
        description:
          "Enterprise-grade distributed architecture engineered for high-growth businesses with critical technical needs and complex operations.",
        includes: [
          "Advanced distributed enterprise architecture",
          "Scalable high-performance cloud infrastructure",
          "Advanced backend & complex data systems",
          "Deep enterprise integrations & critical optimization",
        ],
        cta: "Apply",
        price: "$35,000–$100,000+",
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
        name: "Foundation",
        label: "Foundation",
        description:
          "Una infraestructura digital profesional construida desde cero para darle a tu negocio la base técnica que necesita para operar y crecer.",
        includes: [
          "Interfaz web personalizada",
          "Sistema de autenticación y usuarios",
          "Backend estructurado y base de datos",
          "Integraciones esenciales y deployment",
        ],
        cta: "Solicitar",
        price: "$3,000–$6,000",
      },
      {
        name: "Operations System",
        label: "Operations",
        description:
          "Una plataforma operativa personalizada que centraliza procesos internos, elimina trabajo manual y prepara tu negocio para crecer.",
        includes: [
          "Plataforma operativa personalizada",
          "Módulos internos y panel administrativo",
          "Integraciones entre plataformas y APIs",
          "Arquitectura backend preparada para crecimiento",
        ],
        cta: "Solicitar",
        price: "$7,000–$15,000",
      },
      {
        name: "Digital Platform",
        label: "Platform",
        description:
          "Una plataforma full custom de frontend y backend para negocios con operaciones activas que necesitan estabilidad, rendimiento y escalabilidad.",
        includes: [
          "Desarrollo full custom frontend y backend",
          "Arquitectura API avanzada e integraciones complejas",
          "Infraestructura cloud y procesamiento de datos",
          "Optimización de rendimiento y seguridad avanzada",
        ],
        cta: "Solicitar",
        price: "$15,000–$35,000",
      },
      {
        name: "Scale Infrastructure",
        label: "Scale",
        description:
          "Arquitectura distribuida de nivel empresarial para negocios de alto crecimiento con necesidades técnicas críticas y operaciones complejas.",
        includes: [
          "Arquitectura empresarial avanzada y distribuida",
          "Infraestructura cloud escalable de alto rendimiento",
          "Backend avanzado y sistemas de datos complejos",
          "Integraciones empresariales profundas y optimización crítica",
        ],
        cta: "Solicitar",
        price: "$35,000–$100,000+",
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
  path: "/",
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
