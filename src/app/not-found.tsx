import type { Metadata } from "next";
import { BrandPageShell } from "@/components/brand/layout/BrandPageShell";
import { getActiveBrand } from "@/lib/core/active-brand";
import Link from "next/link";

const brand = getActiveBrand();

export const metadata: Metadata = {
  title: `404 — ${brand.name}`,
  robots: { index: false, follow: false },
};

export default function NotFound() {
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
            404
          </h1>
          <p
            className="mt-6 text-lg leading-8"
            style={{ color: "var(--text-muted)", fontFamily: "var(--font-body)" }}
          >
            This page does not exist.
          </p>
          <Link
            href="/"
            className="mt-10 inline-block text-sm transition-opacity hover:opacity-70"
            style={{ color: "var(--text-muted)", fontFamily: "var(--font-body)" }}
          >
            ← Back
          </Link>
        </div>
      </div>
    </BrandPageShell>
  );
}
