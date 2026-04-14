import type { Metadata } from "next";
import type { BrandConfig } from "@/lib/types";

const DEFAULT_SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/+$/, "") ||
  "http://localhost:3001";

const DEFAULT_OG_IMAGE = "/og/default-brand.jpg";

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
    brand.seo?.description ??
    brand.content.contact.description ??
    `${brand.name} business system`;

  const path = brand.seo?.path ?? "/";
  const canonical = absoluteUrl(path, baseUrl);

  const ogImage = absoluteUrl(
    brand.seo?.image ?? brand.assets?.heroImage ?? DEFAULT_OG_IMAGE,
    baseUrl
  );

  const keywords = [...(brand.seo?.keywords ?? [
    brand.name,
    brand.slug,
    "business system",
    "brand ecosystem",
  ])];

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
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: `${brand.name} preview image`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [ogImage],
    },
    robots: {
      index: true,
      follow: true,
    },
  };
}
