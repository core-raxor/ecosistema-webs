import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { BrandPageShell } from "@/components/brand/layout/BrandPageShell";

export const metadata: Metadata = {
  robots: { index: false, follow: false },
};
import { brandSectionRegistry, defaultBrandSections } from "@/components/brand/sections/registry";
import { getBrandBySlug } from "@/lib/brands/registry";

// Dev-only route — blocked in production
export default async function DevBrandPreviewPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  if (process.env.NODE_ENV === "production") notFound();

  const { slug } = await params;
  const brand = getBrandBySlug(slug);

  if (!brand) notFound();

  return (
    <BrandPageShell brand={brand}>
      {defaultBrandSections.map((sectionKey) => {
        const SectionComponent = brandSectionRegistry[sectionKey];
        if (!SectionComponent) return null;
        return <SectionComponent key={sectionKey} brand={brand} />;
      })}
    </BrandPageShell>
  );
}
