import type { BrandConfig } from "@/lib/types";
import type { Metadata } from "next";

const DEFAULT_SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/+$/, "") || "http://localhost:3001";

function getBaseUrl(brand: BrandConfig) {
  return brand.seo?.siteUrl?.replace(/\/+$/, "") || DEFAULT_SITE_URL;
}

function absoluteUrl(path: string, baseUrl: string) {
  if (!path) return baseUrl;
  if (path.startsWith("http://") || path.startsWith("https://")) return path;
  return `${baseUrl}${path.startsWith("/") ? path : `/${path}`}`;
}

export function buildBrandMetadata(brand: BrandConfig): Metadata {
  const baseUrl = getBaseUrl(brand);

  const title = brand.seo?.title ?? brand.name;
  const description =
    brand.seo?.description ?? brand.content.contact.description ?? `${brand.name} business system`;

  const path = brand.seo?.path ?? "/";
  const canonical = absoluteUrl(path, baseUrl);

  const keywords = [
    ...(brand.seo?.keywords ?? [brand.name, brand.slug, "business system", "brand ecosystem"]),
  ];

  return {
    metadataBase: new URL(baseUrl),
    title,
    description,
    keywords,
    alternates: {
      canonical,
    },
    openGraph: {
      title,
      description,
      url: canonical,
      siteName: brand.name,
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
    },
    robots: {
      index: true,
      follow: true,
    },
  };
}
