// Locale-keyed UI strings for static component text not sourced from brand content.
// Import UI_STRINGS and use useLocale() in client components to pick the active locale.

export const UI_STRINGS = {
  en: {
    contact: {
      sectionLabel: "Contact",
      colCompany: "Company",
      colNavigation: "Navigation",
      colContact: "Contact",
      colSocial: "Social",
      colSystem: "System",
      linkContact: "Contact",
      legalPrivacy: "Privacy Policy",
      legalCookies: "Cookie Policy",
      legalTerms: "Terms",
      copyright: "All rights reserved.",
    },
    modal: {
      fullName: "Full Name",
      email: "Email",
      company: "Company",
      message: "Message",
      optional: "optional",
      sending: "Sending…",
      send: "Send message",
      sent: "Message sent.",
      inTouch: "We’ll be in touch.",
    },
    sections: {
      faq: "FAQ",
      testimonials: "Testimonials",
      process: "process",
      services: "services",
    },
  },
  es: {
    contact: {
      sectionLabel: "Contacto",
      colCompany: "Empresa",
      colNavigation: "Navegación",
      colContact: "Contacto",
      colSocial: "Social",
      colSystem: "Legal",
      linkContact: "Contacto",
      legalPrivacy: "Política de privacidad",
      legalCookies: "Política de cookies",
      legalTerms: "Términos",
      copyright: "Todos los derechos reservados.",
    },
    modal: {
      fullName: "Nombre completo",
      email: "Correo electrónico",
      company: "Empresa",
      message: "Mensaje",
      optional: "opcional",
      sending: "Enviando…",
      send: "Enviar mensaje",
      sent: "Mensaje enviado.",
      inTouch: "Nos pondremos en contacto.",
    },
    sections: {
      faq: "FAQ",
      testimonials: "Testimonios",
      process: "proceso",
      services: "servicios",
    },
  },
} as const;

export type UILocale = keyof typeof UI_STRINGS;
