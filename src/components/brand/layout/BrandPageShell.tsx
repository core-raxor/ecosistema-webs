import type { ReactNode } from "react";
import type { BrandConfig } from "@/lib/types";
import { getBrandCssVars } from "@/lib/core/theme-vars";
import { GlobalBackground } from "@/components/shared/background/GlobalBackground";
import { BrandScene } from "@/components/brand/scene/BrandScene";

type BrandPageShellProps = {
  brand: Pick<BrandConfig, "theme" | "ui" | "content" | "links" | "name" | "slug">;
  children: ReactNode;
};

export function BrandPageShell({ brand, children }: BrandPageShellProps) {
  const showScene = brand.slug !== "aelor";

  return (
    <div
      style={getBrandCssVars(brand)}
      className="relative min-h-screen bg-[var(--bg)] text-[var(--text)]"
    >
      <GlobalBackground brand={brand} />
      {showScene && <BrandScene brand={brand as BrandConfig} />}
      <main className="relative z-10">{children}</main>
    </div>
  );
}
