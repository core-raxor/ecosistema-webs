import { BrandPageShell } from "@/components/brand/layout/BrandPageShell";
import { getActiveBrand } from "@/lib/core/active-brand";
import { buildBrandMetadata } from "@/lib/core/brand-metadata";
import type { Metadata } from "next";
import Link from "next/link";

export function generateMetadata(): Metadata {
  const brand = getActiveBrand();
  return {
    ...buildBrandMetadata(brand),
    title: `Gracias — ${brand.name}`,
    robots: { index: false, follow: false },
  };
}

export default function GraciasPage() {
  const brand = getActiveBrand();

  return (
    <BrandPageShell brand={brand}>
      <div className="flex min-h-screen items-center justify-center px-6">
        <div className="max-w-2xl text-center">
          <p
            className="text-sm uppercase tracking-[0.28em]"
            style={{ color: "var(--brand-primary)" }}
          >
            {brand.name}
          </p>
          <h1
            className="mt-4 font-semibold"
            style={{
              fontSize: "var(--text-h1)",
              fontFamily: "var(--font-heading)",
              color: "var(--text)",
            }}
          >
            Gracias
          </h1>
          <p
            className="mt-6 text-lg leading-8"
            style={{ color: "var(--text-muted)", fontFamily: "var(--font-body)" }}
          >
            Hemos recibido tu solicitud. Pronto nos pondremos en contacto.
          </p>
          <Link
            href="/"
            className="mt-10 inline-block text-sm transition-opacity hover:opacity-70"
            style={{ color: "var(--text-muted)", fontFamily: "var(--font-body)" }}
          >
            ← Volver
          </Link>
        </div>
      </div>
    </BrandPageShell>
  );
}
