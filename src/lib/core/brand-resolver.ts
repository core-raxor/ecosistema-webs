import { getBrandBySlug } from "@/lib/brands";
import type { BrandConfig } from "@/lib/types";
import { notFound } from "next/navigation";

function hasRequiredBrandShape(brand: BrandConfig): boolean {
  return Boolean(
    brand.slug &&
    brand.name &&
    brand.theme &&
    brand.ui &&
    brand.content &&
    brand.content.hero &&
    brand.content.identity &&
    brand.content.process &&
    brand.content.services &&
    brand.content.final &&
    brand.content.contact &&
    brand.content.footer,
  );
}

export function validateBrandConfig(brand: BrandConfig): BrandConfig {
  if (!hasRequiredBrandShape(brand)) {
    throw new Error(`Invalid brand config for slug "${brand.slug}"`);
  }

  return brand;
}

export function getBrandOrNull(slug: string): BrandConfig | null {
  const brand = getBrandBySlug(slug);

  if (!brand) {
    return null;
  }

  return validateBrandConfig(brand);
}

export function getBrandOrThrow(slug: string): BrandConfig {
  const brand = getBrandOrNull(slug);

  if (!brand) {
    notFound();
  }

  return brand;
}
