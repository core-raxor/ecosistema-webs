import type { BrandContent } from "./content";
import type { BrandPageConfig } from "./sections";
import type { BrandTheme } from "./theme";
import type { BrandUI } from "./ui";

export type BrandKey =
  | "aelor"
  | "dextor"
  | "raxor"
  | "ixera"
  | "nixen"
  | "vaxen";

export type BrandSeo = {
  title: string;
  description: string;
  siteUrl?: string;
  path?: string;
  image?: string;
  keywords?: readonly string[];
};

export type BrandConfig = {
  slug: BrandKey;
  name: string;
  theme: BrandTheme;

  assets?: {
    logo?: string;
    heroImage?: string;
    finalImage?: string;
  };

  ui: BrandUI;
  content: BrandContent;
  page?: BrandPageConfig;

  seo?: BrandSeo;

  links?: {
    primaryCta?: string;
    contact?: string;
    linkedin?: string;
    instagram?: string;
  };
};

export type BrandsMap = Record<BrandKey, BrandConfig>;
