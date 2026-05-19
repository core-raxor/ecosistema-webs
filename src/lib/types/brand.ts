import type { BrandContent } from "./content";
import type { BrandTheme } from "./theme";

export type BrandKey = "aelor" | "dextor" | "raxor" | "ixera" | "nixen" | "vaxen";

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
  };

  content: BrandContent;

  seo?: BrandSeo;

  links?: {
    primaryCta?: string;
    contact?: string;
    linkedin?: string;
    instagram?: string;
  };
};

export type BrandsMap = Record<BrandKey, BrandConfig>;
