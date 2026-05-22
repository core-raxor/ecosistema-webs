"use client";

import { brandSectionRegistry, defaultBrandSections } from "@/components/brand/sections/registry";
import { useLocale } from "@/lib/context/LocaleContext";
import type { BrandConfig } from "@/lib/types";

export function LocalizedBrandContent({ brand }: { brand: BrandConfig }) {
  const { locale } = useLocale();
  const content = brand.translations?.[locale] ?? brand.content;
  const localizedBrand = { ...brand, content };

  return (
    <>
      {(brand.sections ?? defaultBrandSections).map((sectionKey) => {
        const SectionComponent = brandSectionRegistry[sectionKey];
        if (!SectionComponent) return null;
        return <SectionComponent key={sectionKey} brand={localizedBrand} />;
      })}
    </>
  );
}
