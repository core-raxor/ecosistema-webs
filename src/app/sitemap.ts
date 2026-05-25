import { getActiveBrand } from "@/lib/core/active-brand";
import type { MetadataRoute } from "next";

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/+$/, "") || "http://localhost:3001";

// Fixed date — updated manually when content changes, not on every build.
const LAST_MODIFIED = new Date("2026-05-24");

export default function sitemap(): MetadataRoute.Sitemap {
  const brand = getActiveBrand();
  const baseUrl = brand.seo?.siteUrl?.replace(/\/+$/, "") || SITE_URL;

  return [
    {
      url: `${baseUrl}/`,
      lastModified: LAST_MODIFIED,
      changeFrequency: "monthly",
      priority: 1,
    },
  ];
}
