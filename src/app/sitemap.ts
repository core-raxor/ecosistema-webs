import type { MetadataRoute } from "next";
import { getAllBrands } from "@/lib/brands";

const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/+$/, "") ||
  "http://localhost:3001";

export default function sitemap(): MetadataRoute.Sitemap {
  const brands = getAllBrands();

  const brandRoutes = brands.map((brand) => ({
    url: `${SITE_URL}/${brand.slug}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: 0.8,
  }));

  return [
    {
      url: SITE_URL,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },
    ...brandRoutes,
  ];
}
