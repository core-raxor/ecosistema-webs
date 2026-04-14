import { brands, isBrandKey } from "@/lib/brands";
import type { BrandConfig, BrandKey } from "@/lib/types";

export function getActiveBrandKey(): BrandKey {
  const value = process.env.NEXT_PUBLIC_BRAND_SLUG;

  if (!value || !isBrandKey(value)) {
    throw new Error(
      "Invalid or missing NEXT_PUBLIC_BRAND_SLUG. Expected one of the configured brand keys.",
    );
  }

  return value;
}

export function getActiveBrand(): BrandConfig {
  const key = getActiveBrandKey();
  return brands[key];
}
