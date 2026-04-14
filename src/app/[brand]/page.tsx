import type { Metadata } from "next";
import { getAllBrands } from "@/lib/brands";
import { getBrandOrThrow } from "@/lib/core/brand-resolver";
import { buildBrandMetadata } from "@/lib/core/brand-metadata";
import {
  defaultBrandSections,
  brandSectionRegistry,
} from "@/components/brand/sections/registry";
import { BrandPageShell } from "@/components/brand/layout/BrandPageShell";

type BrandPageProps = {
  params: Promise<{ brand: string }>;
};

export async function generateStaticParams() {
  return getAllBrands().map((brand) => ({
    brand: brand.slug,
  }));
}

export async function generateMetadata({
  params,
}: BrandPageProps): Promise<Metadata> {
  const { brand } = await params;
  const data = getBrandOrThrow(brand);
  return buildBrandMetadata(data);
}

export default async function BrandPage({ params }: BrandPageProps) {
  const { brand } = await params;
  const data = getBrandOrThrow(brand);
  const sections = data.page?.sections ?? defaultBrandSections;

  return (
    <BrandPageShell brand={data}>
      {sections.map((sectionKey) => {
        const SectionComponent = brandSectionRegistry[sectionKey];

        if (!SectionComponent) return null;

        return <SectionComponent key={sectionKey} brand={data} />;
      })}
    </BrandPageShell>
  );
}
