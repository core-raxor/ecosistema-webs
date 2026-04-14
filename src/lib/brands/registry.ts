import type { BrandConfig, BrandKey, BrandsMap } from "@/lib/types";
import { aelor } from "./aelor";
import { dextor } from "./dextor";
import { ixera } from "./ixera";
import { nixen } from "./nixen";
import { raxor } from "./raxor";
import { vaxen } from "./vaxen";

export const brands: BrandsMap = {
  aelor,
  dextor,
  ixera,
  nixen,
  raxor,
  vaxen,
};

export const brandKeys = Object.keys(brands) as BrandKey[];

export function isBrandKey(value: string): value is BrandKey {
  return value in brands;
}

export function getBrandBySlug(slug: string): BrandConfig | null {
  return isBrandKey(slug) ? brands[slug] : null;
}

export function getAllBrands(): BrandConfig[] {
  return brandKeys.map((key) => brands[key]);
}
