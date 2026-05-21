export type HeroContent = {
  headline: string;
  primaryCta: string;
  secondaryCta?: string;
  microNote?: string;
  navItems?: string[];
  logoText?: string;
};

export type IdentityStat = {
  value: string;
  label: string;
};

export type IdentityContent = {
  label: string;
  title: string;
  stats?: IdentityStat[];
};

export type ProcessStep = {
  title: string;
  description: string;
  benefits?: string[];
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
  price?: string;
};

export type ServicesContent = {
  title: string;
  items: ServiceItem[];
};

export type FinalContent = {
  statement: string;
  cta: string;
};

export type ContactContent = {
  title: string;
  description: string;
  note?: string;
};

export type FooterContent = {
  tagline: string;
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
