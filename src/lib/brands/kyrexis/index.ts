import type { BrandConfig } from "@/lib/types";

// ============================================================================
// KYREXIS: ENGLISH CONTENT
// ============================================================================

const kyrexis_en = {
  hero: {
    logoText: "KYREXIS",
    navItems: ["Home", "Process", "Services", "Contact"],
    headline: "Your business needs a system.",
    primaryCta: "Get started",
    secondaryCta: "",
    microNote: "",
  },

  identity: {
    label: "KYREXIS",
    title:
      "We help businesses launch, organize and scale through connected digital systems designed to work together — not isolated services.",
    stats: [
      { value: "6", label: "Specialized Models" },
      { value: "100+", label: "Projects Delivered" },
      { value: "5+", label: "Business Layers Structured" },
    ],
  },

  process: {
    title: "How Kyrexis works",
    steps: [
      {
        title: "Identify",
        description:
          "We uncover the operational gaps, inefficiencies and friction slowing your business down.",
        benefits: ["Clear priorities", "No wasted effort"],
      },
      {
        title: "Design",
        description:
          "We define the right operational structure based on your stage, goals and business model.",
        benefits: ["Strategic direction", "Systems aligned to growth"],
      },
      {
        title: "Build",
        description: "Each specialized model develops the systems your business actually needs.",
        benefits: ["Professional execution", "Built for real operations"],
      },
      {
        title: "Activate",
        description:
          "Once payment is completed, we start immediately with consultation included from day one.",
        benefits: ["Fast onboarding", "Clear communication"],
      },
      {
        title: "Scale",
        description:
          "Your systems evolve with your business so operations remain stable as complexity grows.",
        benefits: ["Built for long-term growth"],
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
          "Everything needed to launch your business with a professional digital presence and operational foundation.",
        includes: ["Visual identity", "Professional website", "Initial business structure"],
        cta: "Apply",
        price: "$800–$2,500",
      },
      {
        name: "Organized Business",
        label: "Structure",
        description:
          "Operational systems designed to bring clarity, organization and stability to your business.",
        includes: ["Internal systems", "Base automation", "UX optimization"],
        cta: "Apply",
        price: "$2,500–$6,000",
      },
      {
        name: "Automated Business",
        label: "Efficiency",
        description:
          "Automation systems that reduce manual work and keep your operations moving efficiently.",
        includes: ["Operational automation", "Integrations", "Workflow systems"],
        cta: "Apply",
        price: "$5,000–$12,000",
      },
      {
        name: "Intelligent Business",
        label: "Intelligence",
        description:
          "AI integrated into your business operations to improve execution, support and decision-making.",
        includes: ["AI integration", "Advanced automation", "Intelligent systems"],
        cta: "Apply",
        price: "$8,000–$20,000",
      },
      {
        name: "Enterprise Scale",
        label: "Scale",
        description:
          "Advanced operational infrastructure built for businesses managing growth, complexity and scale.",
        includes: [
          "Advanced systems",
          "Data & analytics",
          "AI automation",
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
        description:
          "Design experiences that improve perception, guide decisions and increase conversion.",
        services: ["UX/UI Design", "Visual Branding", "CRO", "Landing Pages"],
        cta: "Visit AELOR",
        url: "https://aelor.co",
      },
      {
        slug: "raxor",
        title: "RAXOR",
        description:
          "Build practical digital systems that help businesses operate and grow efficiently.",
        services: ["Web Platforms", "Internal Systems", "MVPs", "No-code Solutions"],
        cta: "Visit RAXOR",
        url: "https://raxor.co",
      },
      {
        slug: "nixen",
        title: "NIXEN",
        description:
          "Automate repetitive operations so your business runs with less manual effort.",
        services: ["Workflow Automation", "Tool Integration", "Sales Flows", "Operational Systems"],
        cta: "Visit NIXEN",
        url: "https://nixen.co",
      },
      {
        slug: "ixera",
        title: "IXERA",
        description:
          "Integrate AI into your operations to improve execution, support and scalability.",
        services: ["AI Assistants", "AI Chatbots", "AI Sales Systems", "Operational AI"],
        cta: "Visit IXERA",
        url: "https://ixera.co",
      },
      {
        slug: "dextor",
        title: "DEXTOR",
        description: "Turn business data into visibility, control and smarter decisions.",
        services: ["Dashboards", "KPI Systems", "Financial Tracking", "Business Intelligence"],
        cta: "Visit DEXTOR",
        url: "https://dextor.co",
      },
      {
        slug: "vaxen",
        title: "VAXEN",
        description:
          "Engineer scalable technical infrastructure for businesses with advanced operational needs.",
        services: [
          "Custom Software",
          "Backend Systems",
          "System Architecture",
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
        question: "What is Kyrexis?",
        answer:
          "Kyrexis is a digital business ecosystem that helps companies launch, organize, automate and scale through connected operational systems. Instead of isolated services, we build structured solutions designed to work together.",
      },
      {
        question: "How does the process work?",
        answer:
          "You select the package that fits your business, contact us through chat, complete payment and we begin immediately. Consultation is included from day one. Video calls are available for projects above $5,000 USD.",
      },
      {
        question: "How much does it cost?",
        answer:
          "Packages start at $800 USD and scale based on complexity, scope and operational requirements. Every project has clearly defined pricing before work begins.",
      },
      {
        question: "How long does a project take?",
        answer:
          "Smaller systems typically take 2–4 weeks, while advanced enterprise infrastructure can take several months. Timelines are defined before the project starts.",
      },
      {
        question: "Can I work directly with a specialized model?",
        answer:
          "Yes. If you already know what you need — design, automation, AI, analytics or engineering — you can work directly with the corresponding model.",
      },
      {
        question: "What types of businesses do you work with?",
        answer:
          "We work with freelancers, startups, growing businesses and companies that need stronger operational systems, automation and scalable infrastructure.",
      },
    ],
  },

  final: {
    statement: "The right system changes everything.",
    cta: "Start now",
  },

  contact: {
    title: "Work with Kyrexis",
    description:
      "Tell us where your business is today and what needs to improve. We'll define the right operational structure together.",
    note: "Systems that work.",
  },

  footer: {
    tagline: "Build. Organize. Scale.",
  },
};

// ============================================================================
// KYREXIS: SPANISH CONTENT
// ============================================================================

const kyrexis_es = {
  hero: {
    logoText: "KYREXIS",
    navItems: ["Inicio", "Proceso", "Servicios", "Contacto"],
    headline: "Tu negocio necesita un sistema.",
    primaryCta: "Comenzar",
    secondaryCta: "",
    microNote: "",
  },

  identity: {
    label: "KYREXIS",
    title:
      "Ayudamos a negocios a lanzar, organizar y escalar mediante sistemas digitales conectados diseñados para trabajar juntos — no servicios aislados.",
    stats: [
      { value: "6", label: "Modelos Especializados" },
      { value: "100+", label: "Proyectos Entregados" },
      { value: "5+", label: "Capas Empresariales Estructuradas" },
    ],
  },

  process: {
    title: "Cómo funciona Kyrexis",
    steps: [
      {
        title: "Identify",
        description:
          "Detectamos las fricciones, ineficiencias y problemas operativos que están frenando tu negocio.",
        benefits: ["Prioridades claras", "Sin esfuerzo desperdiciado"],
      },
      {
        title: "Design",
        description:
          "Definimos la estructura operativa adecuada según tu etapa, objetivos y modelo de negocio.",
        benefits: ["Dirección estratégica", "Sistemas alineados al crecimiento"],
      },
      {
        title: "Build",
        description:
          "Cada modelo especializado desarrolla los sistemas que tu negocio realmente necesita.",
        benefits: ["Ejecución profesional", "Diseñado para operaciones reales"],
      },
      {
        title: "Activate",
        description:
          "Una vez realizado el pago, comenzamos inmediatamente con consultoría incluida desde el primer día.",
        benefits: ["Inicio rápido", "Comunicación clara"],
      },
      {
        title: "Scale",
        description:
          "Tus sistemas evolucionan junto a tu negocio para mantener operaciones estables a medida que aumenta la complejidad.",
        benefits: ["Diseñado para crecimiento a largo plazo"],
      },
    ],
  },

  services: {
    title: "Paquetes Kyrexis",
    items: [
      {
        name: "Lanzamiento Digital",
        label: "Foundation",
        description:
          "Todo lo necesario para lanzar tu negocio con una presencia digital profesional y una base operativa sólida.",
        includes: ["Identidad visual", "Sitio web profesional", "Estructura empresarial inicial"],
        cta: "Solicitar",
        price: "$800–$2,500",
      },
      {
        name: "Negocio Organizado",
        label: "Structure",
        description:
          "Sistemas operativos diseñados para aportar claridad, organización y estabilidad a tu negocio.",
        includes: ["Sistemas internos", "Automatización base", "Optimización UX"],
        cta: "Solicitar",
        price: "$2,500–$6,000",
      },
      {
        name: "Negocio Automatizado",
        label: "Efficiency",
        description:
          "Sistemas de automatización que reducen trabajo manual y mantienen tus operaciones funcionando eficientemente.",
        includes: ["Automatización operativa", "Integraciones", "Sistemas de workflows"],
        cta: "Solicitar",
        price: "$5,000–$12,000",
      },
      {
        name: "Negocio Inteligente",
        label: "Intelligence",
        description:
          "Inteligencia artificial integrada en tus operaciones para mejorar ejecución, soporte y toma de decisiones.",
        includes: ["Integración AI", "Automatización avanzada", "Sistemas inteligentes"],
        cta: "Solicitar",
        price: "$8,000–$20,000",
      },
      {
        name: "Escalamiento Empresarial",
        label: "Scale",
        description:
          "Infraestructura operativa avanzada diseñada para negocios que manejan crecimiento, complejidad y escalabilidad.",
        includes: [
          "Sistemas avanzados",
          "Datos y analítica",
          "Automatización AI",
          "Arquitectura escalable",
        ],
        cta: "Solicitar",
        price: "$15,000–$50,000+",
      },
    ],
  },

  moreServices: {
    title: "Modelos Especializados",
    cards: [
      {
        slug: "aelor",
        title: "AELOR",
        description:
          "Diseñamos experiencias que mejoran percepción, guían decisiones y aumentan conversión.",
        services: ["Diseño UX/UI", "Branding Visual", "CRO", "Landing Pages"],
        cta: "Visitar AELOR",
        url: "https://aelor.co",
      },
      {
        slug: "raxor",
        title: "RAXOR",
        description:
          "Construimos sistemas digitales prácticos que ayudan a negocios a operar y crecer eficientemente.",
        services: ["Plataformas Web", "Sistemas Internos", "MVPs", "Soluciones No-code"],
        cta: "Visitar RAXOR",
        url: "https://raxor.co",
      },
      {
        slug: "nixen",
        title: "NIXEN",
        description:
          "Automatizamos operaciones repetitivas para que tu negocio funcione con menos esfuerzo manual.",
        services: [
          "Automatización de Workflows",
          "Integración de Herramientas",
          "Flujos de Venta",
          "Sistemas Operativos",
        ],
        cta: "Visitar NIXEN",
        url: "https://nixen.co",
      },
      {
        slug: "ixera",
        title: "IXERA",
        description:
          "Integramos AI en tus operaciones para mejorar ejecución, soporte y escalabilidad.",
        services: ["Asistentes AI", "Chatbots AI", "Sistemas AI para Ventas", "AI Operacional"],
        cta: "Visitar IXERA",
        url: "https://ixera.co",
      },
      {
        slug: "dextor",
        title: "DEXTOR",
        description:
          "Transformamos datos empresariales en visibilidad, control y mejores decisiones.",
        services: ["Dashboards", "Sistemas KPI", "Control Financiero", "Business Intelligence"],
        cta: "Visitar DEXTOR",
        url: "https://dextor.co",
      },
      {
        slug: "vaxen",
        title: "VAXEN",
        description:
          "Diseñamos infraestructura técnica escalable para negocios con necesidades operativas avanzadas.",
        services: [
          "Software Personalizado",
          "Sistemas Backend",
          "Arquitectura de Sistemas",
          "Integraciones Complejas",
        ],
        cta: "Visitar VAXEN",
        url: "https://vaxen.co",
      },
    ],
  },

  testimonials: {
    title: "Lo que dicen nuestros clientes",
    items: [
      {
        name: "Carlos M.",
        role: "Fundador de startup SaaS",
        text: "Kyrexis construyó la base operativa que necesitábamos para superar las 5 cifras MRR. El sistema funciona prácticamente solo.",
        rating: 5,
      },
      {
        name: "Laura P.",
        role: "CEO de agencia digital",
        text: "No solo entregaron un sistema. Entregaron claridad. Nuestro equipo ahora opera 3 veces más rápido y sin micromanagement.",
        rating: 5,
      },
      {
        name: "Andrés R.",
        role: "Fundador e-commerce",
        text: "Antes de Kyrexis estábamos ahogados en tareas manuales. Ahora todo funciona automáticamente y nos enfocamos en lo que realmente importa.",
        rating: 5,
      },
      {
        name: "Sofía T.",
        role: "Directora de marketing",
        text: "El paquete de Lanzamiento Digital nos dio una presencia profesional en semanas. El ROI fue visible desde el primer mes.",
        rating: 5,
      },
      {
        name: "Miguel O.",
        role: "Gerente de operaciones",
        text: "Trabajo excepcional. Los workflows automatizados que desarrollaron nos ahorran más de 30 horas semanales en todo el equipo.",
        rating: 5,
      },
      {
        name: "Valeria C.",
        role: "Co-fundadora startup",
        text: "Intentamos construir sistemas internamente durante dos años. Kyrexis lo hizo en ocho semanas. Resultados reales, sin humo.",
        rating: 5,
      },
      {
        name: "Daniel F.",
        role: "Dueño de negocio",
        text: "El paquete Negocio Organizado reestructuró completamente nuestra forma de operar. La mejor inversión que hicimos este año.",
        rating: 5,
      },
      {
        name: "Isabella N.",
        role: "Product lead",
        text: "La integración AI hizo que nuestro equipo de soporte fuera 4 veces más eficiente. Los clientes reciben respuestas instantáneas 24/7.",
        rating: 5,
      },
      {
        name: "Roberto L.",
        role: "CFO empresa en crecimiento",
        text: "Por fin un proveedor que habla de resultados empresariales y no de jerga técnica. Entregaron exactamente lo prometido.",
        rating: 5,
      },
      {
        name: "Camila E.",
        role: "Freelancer convertida en agencia",
        text: "Comencé con Lanzamiento Digital y escalé hasta Enterprise en 18 meses. El sistema creció junto con nosotros sin problemas.",
        rating: 5,
      },
    ],
  },

  faqs: {
    title: "Preguntas frecuentes",
    items: [
      {
        question: "¿Qué es Kyrexis?",
        answer:
          "Kyrexis es un ecosistema digital empresarial que ayuda a compañías a lanzar, organizar, automatizar y escalar mediante sistemas operativos conectados. En lugar de servicios aislados, construimos soluciones estructuradas diseñadas para trabajar juntas.",
      },
      {
        question: "¿Cómo funciona el proceso?",
        answer:
          "Seleccionas el paquete que mejor se adapta a tu negocio, nos contactas por chat, realizas el pago y comenzamos inmediatamente. La consultoría está incluida desde el primer día. Las videollamadas están disponibles para proyectos superiores a $5,000 USD.",
      },
      {
        question: "¿Cuánto cuesta?",
        answer:
          "Los paquetes comienzan desde $800 USD y escalan según complejidad, alcance y necesidades operativas. Cada proyecto tiene precios claramente definidos antes de iniciar.",
      },
      {
        question: "¿Cuánto tiempo tarda un proyecto?",
        answer:
          "Los sistemas más pequeños normalmente toman entre 2–4 semanas, mientras que infraestructuras empresariales avanzadas pueden tomar varios meses. Los tiempos se definen antes de iniciar el proyecto.",
      },
      {
        question: "¿Puedo trabajar directamente con un modelo especializado?",
        answer:
          "Sí. Si ya sabes exactamente lo que necesitas — diseño, automatización, AI, analítica o ingeniería — puedes trabajar directamente con el modelo correspondiente.",
      },
      {
        question: "¿Con qué tipos de negocios trabajan?",
        answer:
          "Trabajamos con freelancers, startups, negocios en crecimiento y empresas que necesitan mejores sistemas operativos, automatización e infraestructura escalable.",
      },
    ],
  },

  final: {
    statement: "El sistema correcto cambia todo.",
    cta: "Comenzar ahora",
  },

  contact: {
    title: "Trabaja con Kyrexis",
    description:
      "Cuéntanos dónde está hoy tu negocio y qué necesita mejorar. Definiremos juntos la estructura operativa adecuada.",
    note: "Sistemas que funcionan.",
  },

  footer: {
    tagline: "Construir. Organizar. Escalar.",
  },
};

// ============================================================================
// KYREXIS: BRAND CONFIG
// ============================================================================

export const kyrexis_seo = {
  title: "KYREXIS | Digital systems built for business growth",
  description:
    "KYREXIS helps businesses launch, organize, automate and scale through connected digital systems — combining design, automation, AI, data and engineering into one operational ecosystem.",
  path: "/kyrexis",
  image: "/og/kyrexis.jpg",
  keywords: [
    "KYREXIS",
    "business systems",
    "digital ecosystem",
    "automation",
    "AI integration",
    "operational systems",
    "business growth",
    "scalable operations",
  ],
  siteUrl: "https://kyrexis.co",
} as const;

export const kyrexis = {
  slug: "kyrexis",
  name: "KYREXIS",
  assets: {
    logoMark: true,
  },
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
  content: kyrexis_en,
  translations: {
    es: kyrexis_es,
  },
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
