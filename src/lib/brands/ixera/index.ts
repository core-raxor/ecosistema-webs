import type { BrandConfig } from "@/lib/types";

// ============================================================================
// IXERA: ENGLISH CONTENT
// ============================================================================

const ixera_en = {
  hero: {
    logoText: "IXERA",
    navItems: ["Home", "Process", "Services", "Contact"],
    headline: "AI integrated into real business operations.",
    primaryCta: "Get in touch",
    secondaryCta: "",
    microNote: "",
  },

  identity: {
    label: "IXERA",
    title:
      "We build AI systems designed to operate inside your business — helping teams respond faster, execute smarter and scale more efficiently.",
    stats: [
      { value: "1+", label: "Year Active" },
      { value: "10+", label: "Projects Delivered" },
      { value: "4–8 wks", label: "Avg. Delivery" },
    ],
  },

  process: {
    title: "How IXERA works",
    steps: [
      {
        title: "Identify",
        description:
          "We analyze where AI can create the highest operational leverage inside your business.",
        benefits: ["Highest impact first", "No unnecessary complexity"],
      },
      {
        title: "Design",
        description:
          "We define how AI should support workflows, communication and execution across your operations.",
        benefits: ["Strategy before implementation"],
      },
      {
        title: "Build",
        description:
          "We develop the prompts, agents, automations and AI systems tailored to your workflows.",
        benefits: ["Built around your business context"],
      },
      {
        title: "Integrate",
        description:
          "We connect AI with your tools, communication channels and operational systems.",
        benefits: ["Integrated into operations"],
      },
      {
        title: "Optimize",
        description:
          "We continuously refine the system using real usage, performance and operational feedback.",
        benefits: ["Improves over time"],
      },
    ],
  },

  services: {
    title: "IXERA System",
    items: [
      {
        name: "AI Launch System",
        label: "Launch",
        description:
          "A practical first AI layer that automates communication, lead handling and repetitive tasks inside your business.",
        includes: [
          "AI chatbot for web or WhatsApp",
          "Smart response system",
          "Lead & inquiry automation",
          "Business prompt setup",
        ],
        cta: "Apply",
        price: "$500–$1,500",
      },
      {
        name: "Smart Business Operations",
        label: "Operations",
        description:
          "An intelligent operational system designed to reduce manual workload and optimize how your team executes daily.",
        includes: [
          "AI support & customer service system",
          "Intelligent operational automation",
          "CRM & tool integration",
          "Workflow optimization",
        ],
        cta: "Apply",
        price: "$2,000–$5,000",
      },
      {
        name: "AI Growth Engine",
        label: "Growth",
        description:
          "AI systems built to accelerate sales, automate lead follow-up and improve commercial execution.",
        includes: [
          "AI sales & lead capture system",
          "Commercial AI bots",
          "Client follow-up automation",
          "CRM & channel integration",
        ],
        cta: "Apply",
        price: "$4,000–$9,000",
      },
      {
        name: "Intelligent Business System",
        label: "Intelligence",
        description:
          "A full AI infrastructure built around your business operations — scalable, integrated and designed to grow with you.",
        includes: [
          "Custom business AI system",
          "AI assistants for teams",
          "Advanced multi-area automation",
          "Scalable AI architecture",
        ],
        cta: "Apply",
        price: "$8,000–$20,000+",
      },
    ],
  },

  final: {
    statement: "AI that runs inside operations.",
    cta: "Build your AI system",
  },

  contact: {
    title: "Work with IXERA",
    description:
      "We identify where AI can improve execution, communication and operational efficiency inside your business.",
    note: "AI built for operations.",
  },

  footer: {
    tagline: "Intelligence. Automation. Execution.",
  },
};

// ============================================================================
// IXERA: SPANISH CONTENT
// ============================================================================

const ixera_es = {
  hero: {
    logoText: "IXERA",
    navItems: ["Inicio", "Proceso", "Servicios", "Contacto"],
    headline: "AI integrada en operaciones empresariales reales.",
    primaryCta: "Contactar",
    secondaryCta: "",
    microNote: "",
  },

  identity: {
    label: "IXERA",
    title:
      "Construimos sistemas AI diseñados para operar dentro de tu negocio — ayudando a equipos a responder más rápido, ejecutar de forma más inteligente y escalar eficientemente.",
    stats: [
      { value: "1+", label: "Año Activo" },
      { value: "10+", label: "Proyectos Entregados" },
      { value: "4–8 sem", label: "Entrega Promedio" },
    ],
  },

  process: {
    title: "Cómo funciona IXERA",
    steps: [
      {
        title: "Identify",
        description:
          "Analizamos dónde la AI puede generar mayor impacto operativo dentro de tu negocio.",
        benefits: ["Mayor impacto primero", "Sin complejidad innecesaria"],
      },
      {
        title: "Design",
        description:
          "Definimos cómo la AI debe apoyar workflows, comunicación y ejecución dentro de tus operaciones.",
        benefits: ["Estrategia antes de implementación"],
      },
      {
        title: "Build",
        description:
          "Desarrollamos prompts, agentes, automatizaciones y sistemas AI adaptados a tus workflows.",
        benefits: ["Diseñado alrededor de tu contexto empresarial"],
      },
      {
        title: "Integrate",
        description:
          "Conectamos la AI con tus herramientas, canales de comunicación y sistemas operativos.",
        benefits: ["Integrado dentro de las operaciones"],
      },
      {
        title: "Optimize",
        description:
          "Refinamos continuamente el sistema utilizando uso real, rendimiento y feedback operativo.",
        benefits: ["Mejora continuamente"],
      },
    ],
  },

  services: {
    title: "Sistema IXERA",
    items: [
      {
        name: "AI Launch System",
        label: "Launch",
        description:
          "Una primera capa práctica de AI que automatiza comunicación, gestión de leads y tareas repetitivas dentro de tu negocio.",
        includes: [
          "Chatbot AI para web o WhatsApp",
          "Sistema de respuestas inteligentes",
          "Automatización de leads y consultas",
          "Configuración de prompts empresariales",
        ],
        cta: "Solicitar",
        price: "$500–$1,500",
      },
      {
        name: "Smart Business Operations",
        label: "Operations",
        description:
          "Un sistema operativo inteligente diseñado para reducir carga manual y optimizar cómo tu equipo ejecuta el día a día.",
        includes: [
          "Sistema AI de soporte al cliente",
          "Automatización operativa inteligente",
          "Integración con CRM y herramientas",
          "Optimización de workflows",
        ],
        cta: "Solicitar",
        price: "$2,000–$5,000",
      },
      {
        name: "AI Growth Engine",
        label: "Growth",
        description:
          "Sistemas AI diseñados para acelerar ventas, automatizar seguimiento de leads y mejorar la ejecución comercial.",
        includes: [
          "Sistema AI para ventas y captación",
          "Bots comerciales inteligentes",
          "Automatización de seguimiento de clientes",
          "Integración con CRM y canales",
        ],
        cta: "Solicitar",
        price: "$4,000–$9,000",
      },
      {
        name: "Intelligent Business System",
        label: "Intelligence",
        description:
          "Una infraestructura AI completa construida alrededor de tus operaciones — escalable, integrada y diseñada para crecer contigo.",
        includes: [
          "Sistema AI empresarial personalizado",
          "Asistentes AI para equipos",
          "Automatización avanzada multiárea",
          "Arquitectura AI escalable",
        ],
        cta: "Solicitar",
        price: "$8,000–$20,000+",
      },
    ],
  },

  final: {
    statement: "AI que opera dentro del negocio.",
    cta: "Construir sistema AI",
  },

  contact: {
    title: "Trabaja con IXERA",
    description:
      "Identificamos dónde la AI puede mejorar ejecución, comunicación y eficiencia operativa dentro de tu negocio.",
    note: "AI diseñada para operaciones.",
  },

  footer: {
    tagline: "Inteligencia. Automatización. Ejecución.",
  },
};

// ============================================================================
// IXERA: BRAND CONFIG
// ============================================================================

export const ixera_seo = {
  title: "IXERA | AI systems and operational intelligence for modern businesses",
  description:
    "IXERA integrates AI, automation and operational intelligence into business workflows to improve execution, support, decision-making and scalability.",
  path: "/",
  image: "/og/ixera.jpg",
  keywords: [
    "IXERA",
    "AI systems",
    "AI automation",
    "AI agents",
    "operational intelligence",
    "AI business systems",
    "AI integrations",
  ],
  siteUrl: "https://ixera.co",
} as const;

export const ixera = {
  slug: "ixera",
  name: "IXERA",
  assets: {
    logoMark: true,
  },
  theme: {
    colors: { accent: "#93C5FD" },
    scene: {
      type: "intelligence-network" as const,
      shape: "circle" as const,
      objectConfig: {
        majorSegments: 38,
        minorSegments: 7,
        majorRadius: 1.35,
        minorRadius: 0.35,
        objectScale: 1.45,
        targetPointSpacing: 0.22,
        spacingTolerance: 0.04,
        pointSize: 0.028,
        pointAlpha: 0.84,
        basePointColor: "#d7deec",
        accentMix: 0.045,
        baseTiltX: 0,
        baseTiltY: 0,
        baseTiltZ: 0,
        particleFlowEnabled: false,
        particleFlowSpeed: 0,
        particleFlowLayerOffset: 0,
        particleFlowDirection: 1 as const,
        particleFlowLaneDuration: 0,
        objectRotationEnabled: true,
        objectRotationSpeed: 0.01,
      },
    },
  },
  content: ixera_en,
  translations: {
    es: ixera_es,
  },
  seo: ixera_seo,
  links: {
    primaryCta: "/apply",
    contact: "/contact",
    linkedin: "",
    instagram: "",
  },
} satisfies BrandConfig;
