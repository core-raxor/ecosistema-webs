import { BrandPageShell } from "@/components/brand/layout/BrandPageShell";
import { brandSectionRegistry, defaultBrandSections } from "@/components/brand/sections/registry";
import { getActiveBrand } from "@/lib/core/active-brand";
import { buildBrandMetadata } from "@/lib/core/brand-metadata";
import type { Metadata } from "next";

export function generateMetadata(): Metadata {
  const brand = getActiveBrand();
  return buildBrandMetadata(brand);
}

export default function HomePage() {
  const brand = getActiveBrand();
  const sections = brand.page?.sections ?? defaultBrandSections;

  return (
    <BrandPageShell brand={brand}>
      {sections.map((sectionKey) => {
        const SectionComponent = brandSectionRegistry[sectionKey];

        if (!SectionComponent) return null;

        return <SectionComponent key={sectionKey} brand={brand} />;
      })}
    </BrandPageShell>
  );
}
