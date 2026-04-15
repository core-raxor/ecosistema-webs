import { brandKeys, brands, isBrandKey } from "@/lib/brands";
import type { BrandConfig, BrandKey } from "@/lib/types";

export function getActiveBrandKey(): BrandKey {
  const value = process.env.NEXT_PUBLIC_BRAND_SLUG;

  if (!value || !isBrandKey(value)) {
    throw new Error(
      `[ENV ERROR] Invalid or missing NEXT_PUBLIC_BRAND_SLUG: "${value}". ` +
        `Expected one of: ${brandKeys.join(", ")}. ` +
        `Check .env.example`,
    );
  }

  return value;
}

export function getActiveBrand(): BrandConfig {
  const key = getActiveBrandKey();
  return brands[key];
}
