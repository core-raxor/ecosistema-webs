import { BrandPageShell } from "@/components/brand/layout/BrandPageShell";
import { LocalizedBrandContent } from "@/components/brand/layout/LocalizedBrandContent";
import { getActiveBrand } from "@/lib/core/active-brand";
import { buildBrandMetadata } from "@/lib/core/brand-metadata";
import type { Metadata } from "next";

export function generateMetadata(): Metadata {
  const brand = getActiveBrand();
  return buildBrandMetadata(brand);
}

export default function HomePage() {
  const brand = getActiveBrand();

  return (
    <BrandPageShell brand={brand}>
      <LocalizedBrandContent brand={brand} />
    </BrandPageShell>
  );
}
