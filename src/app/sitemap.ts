import { getActiveBrand } from "@/lib/core/active-brand";
import type { MetadataRoute } from "next";

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/+$/, "") || "http://localhost:3001";

export default function sitemap(): MetadataRoute.Sitemap {
  const brand = getActiveBrand();

  const routes: MetadataRoute.Sitemap = [
    {
      url: `${SITE_URL}/`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },
  ];

  if (brand.links?.contact) {
    routes.push({
      url: `${SITE_URL}${brand.links.contact.startsWith("/") ? brand.links.contact : `/${brand.links.contact}`}`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.6,
    });
  }

  return routes;
}
