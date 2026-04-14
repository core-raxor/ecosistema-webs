export type HeroContent = {
  leftText: string;
  rightText: string;
  primaryCta: string;
  secondaryCta?: string;
  microNote?: string;
  navItems?: string[];
  logoText?: string;
};

export type IdentityContent = {
  label: string;
  title: string;
  description: string[];
  highlights: string[];
};

export type ProcessStep = {
  title: string;
  description: string;
};

export type ProcessContent = {
  title: string;
  steps: ProcessStep[];
};

export type ServiceItem = {
  name: string;
  label: string;
  description: string;
  includes: string[];
  cta: string;
};

export type ServicesContent = {
  title: string;
  items: ServiceItem[];
};

export type FinalContent = {
  statement: string;
  subline?: string;
  cta: string;
};

export type ContactContent = {
  title: string;
  description: string;
  cta: string;
  note?: string;
};

export type FooterContent = {
  tagline: string;
  minimalText?: string;
};

export type BrandContent = {
  hero: HeroContent;
  identity: IdentityContent;
  process: ProcessContent;
  services: ServicesContent;
  final: FinalContent;
  contact: ContactContent;
  footer: FooterContent;
};
