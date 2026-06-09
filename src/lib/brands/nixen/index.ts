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
        name: "Operational Foundation",
        label: "Foundation",
        description:
          "Essential automations that remove repetitive manual work, connect your tools and give your operations a structured base.",
        includes: [
          "Repetitive task automation",
          "Basic tool integrations",
          "Form & response automation",
          "Simple operational flows",
        ],
        cta: "Apply",
        price: "$300–$1,200",
      },
      {
        name: "Operational System",
        label: "System",
        description:
          "A connected operational system that automates internal processes, links your platforms and improves coordination across your business.",
        includes: [
          "Operational process automation",
          "Advanced platform integrations",
          "Multi-step workflows",
          "Notification & control systems",
        ],
        cta: "Apply",
        price: "$1,500–$5,000",
      },
      {
        name: "Growth Automation",
        label: "Growth",
        description:
          "Automated infrastructure focused on lead capture, follow-up and operational scaling for businesses ready to grow without adding manual workload.",
        includes: [
          "Lead & sales automation",
          "Automated follow-up & CRM",
          "Onboarding automation",
          "Commercial dashboards",
        ],
        cta: "Apply",
        price: "$3,000–$8,000",
      },
      {
        name: "Operational Infrastructure",
        label: "Infrastructure",
        description:
          "Complete operational infrastructure designed for businesses with complex operations that need advanced automation and full system integration.",
        includes: [
          "Full workflow architecture",
          "Advanced multi-system automation",
          "Internal operational interfaces",
          "Cross-department automation",
        ],
        cta: "Apply",
        price: "$7,000–$20,000",
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
        name: "Operational Foundation",
        label: "Foundation",
        description:
          "Automatizaciones esenciales que eliminan trabajo manual repetitivo, conectan tus herramientas y le dan a tu operación una base estructurada.",
        includes: [
          "Automatización de tareas repetitivas",
          "Integraciones básicas entre herramientas",
          "Automatización de formularios y respuestas",
          "Flujos operativos simples",
        ],
        cta: "Solicitar",
        price: "$300–$1,200",
      },
      {
        name: "Operational System",
        label: "System",
        description:
          "Un sistema operativo conectado que automatiza procesos internos, enlaza tus plataformas y mejora la coordinación en tu negocio.",
        includes: [
          "Automatización de procesos operativos",
          "Integraciones avanzadas entre plataformas",
          "Workflows multi-paso conectados",
          "Sistemas de notificaciones y control",
        ],
        cta: "Solicitar",
        price: "$1,500–$5,000",
      },
      {
        name: "Growth Automation",
        label: "Growth",
        description:
          "Infraestructura automatizada enfocada en captación, seguimiento y escalamiento operativo para negocios que buscan crecer sin aumentar carga manual.",
        includes: [
          "Automatización de leads y ventas",
          "Seguimiento automatizado y CRM",
          "Automatización de onboarding",
          "Dashboards comerciales",
        ],
        cta: "Solicitar",
        price: "$3,000–$8,000",
      },
      {
        name: "Operational Infrastructure",
        label: "Infrastructure",
        description:
          "Infraestructura operativa completa para empresas con operaciones complejas que necesitan automatización avanzada e integración total de sistemas.",
        includes: [
          "Arquitectura completa de workflows",
          "Automatización avanzada multi-sistema",
          "Interfaces operativas internas",
          "Automatización entre departamentos",
        ],
        cta: "Solicitar",
        price: "$7,000–$20,000",
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
  path: "/",
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
  assets: {
    logoMark: true,
  },
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
