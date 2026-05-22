import type { BrandConfig } from "@/lib/types";

// ============================================================================
// NIXEN: ENGLISH CONTENT
// ============================================================================

const nixen_en = {
  hero: {
    logoText: "NIXEN",
    navItems: ["Home", "Process", "Services", "Contact"],
    headline: "Automate what slows operations down.",
    primaryCta: "Get in touch",
    secondaryCta: "",
    microNote: "",
  },

  identity: {
    label: "NIXEN",
    title:
      "We eliminate operational bottlenecks and automate repetitive processes so your business can run faster, cleaner and with less manual effort.",
    stats: [
      { value: "1+", label: "Year Active" },
      { value: "20+", label: "Projects Delivered" },
      { value: "2–4 wks", label: "Avg. Delivery" },
    ],
  },

  process: {
    title: "How NIXEN works",
    steps: [
      {
        title: "Map",
        description:
          "We identify the repetitive tasks, bottlenecks and operational friction affecting your workflows.",
        benefits: ["Clear inefficiencies identified"],
      },
      {
        title: "Design",
        description:
          "We structure the automation logic around how your business actually operates.",
        benefits: ["Structured before automated"],
      },
      {
        title: "Build",
        description:
          "We implement workflows, automations and operational integrations across your systems.",
        benefits: ["Tested", "Production-ready"],
      },
      {
        title: "Integrate",
        description:
          "We connect your tools, CRM, forms and operational platforms into one automated flow.",
        benefits: ["Less manual work", "Better coordination"],
      },
      {
        title: "Optimize",
        description:
          "We continuously refine workflows to improve speed, stability and operational efficiency.",
        benefits: ["More efficient over time"],
      },
    ],
  },

  services: {
    title: "NIXEN System",
    items: [
      {
        name: "Core Automation",
        label: "Foundation",
        description:
          "Essential automations designed to remove repetitive manual work from your daily operations.",
        includes: [
          "Workflow automation",
          "Basic integrations",
          "Task automation",
          "Operational flows",
        ],
        cta: "Apply",
        price: "$200–$800",
      },
      {
        name: "Sales Automation",
        label: "Revenue",
        description:
          "Automated sales workflows that help capture, organize and follow up with leads efficiently.",
        includes: ["Lead automation", "Automated follow-up", "CRM flows", "Sales integrations"],
        cta: "Apply",
        price: "$1,500–$5,000",
      },
      {
        name: "Business Automation",
        label: "Operations",
        description:
          "Advanced automation systems designed to support complex operational workflows at scale.",
        includes: [
          "Full workflow systems",
          "Advanced integrations",
          "Operational logic",
          "Scalable automations",
        ],
        cta: "Apply",
        price: "$5,000–$12,000",
      },
    ],
  },

  final: {
    statement: "Efficiency requires systems, not effort.",
    cta: "Automate your business",
  },

  contact: {
    title: "Work with NIXEN",
    description:
      "We identify the operational work slowing your business down and replace it with structured automation systems.",
    note: "Automation built for real operations.",
  },

  footer: {
    tagline: "Automation. Efficiency. Scale.",
  },
};

// ============================================================================
// NIXEN: SPANISH CONTENT
// ============================================================================

const nixen_es = {
  hero: {
    logoText: "NIXEN",
    navItems: ["Inicio", "Proceso", "Servicios", "Contacto"],
    headline: "Automatiza lo que frena las operaciones.",
    primaryCta: "Contactar",
    secondaryCta: "",
    microNote: "",
  },

  identity: {
    label: "NIXEN",
    title:
      "Eliminamos cuellos de botella operativos y automatizamos procesos repetitivos para que tu negocio funcione más rápido, más limpio y con menos esfuerzo manual.",
    stats: [
      { value: "1+", label: "Año Activo" },
      { value: "20+", label: "Proyectos Entregados" },
      { value: "2–4 sem", label: "Entrega Promedio" },
    ],
  },

  process: {
    title: "Cómo funciona NIXEN",
    steps: [
      {
        title: "Map",
        description:
          "Identificamos tareas repetitivas, cuellos de botella y fricción operativa que afectan tus workflows.",
        benefits: ["Ineficiencias claramente identificadas"],
      },
      {
        title: "Design",
        description:
          "Estructuramos la lógica de automatización alrededor de cómo realmente opera tu negocio.",
        benefits: ["Estructurado antes de automatizar"],
      },
      {
        title: "Build",
        description:
          "Implementamos workflows, automatizaciones e integraciones operativas dentro de tus sistemas.",
        benefits: ["Probado", "Listo para producción"],
      },
      {
        title: "Integrate",
        description:
          "Conectamos tus herramientas, CRM, formularios y plataformas operativas dentro de un flujo automatizado.",
        benefits: ["Menos trabajo manual", "Mejor coordinación"],
      },
      {
        title: "Optimize",
        description:
          "Refinamos continuamente los workflows para mejorar velocidad, estabilidad y eficiencia operativa.",
        benefits: ["Más eficiente con el tiempo"],
      },
    ],
  },

  services: {
    title: "Sistema NIXEN",
    items: [
      {
        name: "Automatización Base",
        label: "Foundation",
        description:
          "Automatizaciones esenciales diseñadas para eliminar trabajo manual repetitivo de tus operaciones diarias.",
        includes: [
          "Automatización de workflows",
          "Integraciones básicas",
          "Automatización de tareas",
          "Flujos operativos",
        ],
        cta: "Solicitar",
        price: "$200–$800",
      },
      {
        name: "Automatización de Ventas",
        label: "Revenue",
        description:
          "Workflows automatizados de ventas diseñados para capturar, organizar y dar seguimiento a leads eficientemente.",
        includes: [
          "Automatización de leads",
          "Seguimiento automatizado",
          "Flujos CRM",
          "Integraciones de ventas",
        ],
        cta: "Solicitar",
        price: "$1,500–$5,000",
      },
      {
        name: "Automatización Empresarial",
        label: "Operations",
        description:
          "Sistemas avanzados de automatización diseñados para soportar workflows operativos complejos a escala.",
        includes: [
          "Sistemas completos de workflows",
          "Integraciones avanzadas",
          "Lógica operativa",
          "Automatizaciones escalables",
        ],
        cta: "Solicitar",
        price: "$5,000–$12,000",
      },
    ],
  },

  final: {
    statement: "La eficiencia requiere sistemas, no esfuerzo.",
    cta: "Automatizar negocio",
  },

  contact: {
    title: "Trabaja con NIXEN",
    description:
      "Identificamos el trabajo operativo que está ralentizando tu negocio y lo reemplazamos con sistemas de automatización estructurados.",
    note: "Automatización diseñada para operaciones reales.",
  },

  footer: {
    tagline: "Automatización. Eficiencia. Escala.",
  },
};

// ============================================================================
// NIXEN: BRAND CONFIG
// ============================================================================

export const nixen_seo = {
  title: "NIXEN | Automation systems and workflows for scalable operations",
  description:
    "NIXEN designs automation systems, workflows and operational integrations that reduce manual work and help businesses operate more efficiently at scale.",
  path: "/nixen",
  image: "/og/nixen.jpg",
  keywords: [
    "NIXEN",
    "workflow automation",
    "business automation",
    "operational systems",
    "process automation",
    "scalable workflows",
    "automation systems",
  ],
  siteUrl: "https://nixen.co",
} as const;

export const nixen = {
  slug: "nixen",
  name: "NIXEN",
  theme: {
    colors: { accent: "#EF4444" },
    scene: {
      type: "automation-flow" as const,
      shape: "circle" as const,
      objectConfig: {
        majorSegments: 12,
        minorSegments: 28,
        majorRadius: 1.35,
        minorRadius: 0.42,
        objectScale: 1.4,
        targetPointSpacing: 0.24,
        spacingTolerance: 0.04,
        pointSize: 0.028,
        pointAlpha: 0.84,
        basePointColor: "#d7deec",
        accentMix: 0.045,
        baseTiltX: -0.3,
        baseTiltY: 0.45,
        baseTiltZ: 0,
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
  content: nixen_en,
  translations: {
    es: nixen_es,
  },
  seo: nixen_seo,
  links: {
    primaryCta: "/apply",
    contact: "/contact",
    linkedin: "",
    instagram: "",
  },
} satisfies BrandConfig;
