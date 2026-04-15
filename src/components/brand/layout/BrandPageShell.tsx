import { BrandScene } from "@/components/brand/scene/BrandScene";
import { GlobalBackground } from "@/components/shared/background/GlobalBackground";
import { getBrandCssVars } from "@/lib/core/theme-vars";
import type { BrandConfig } from "@/lib/types";
import type { ReactNode } from "react";

type BrandPageShellProps = {
  brand: Pick<BrandConfig, "theme" | "ui" | "content" | "links" | "name" | "slug" | "page">;
  children: ReactNode;
};

export function BrandPageShell({ brand, children }: BrandPageShellProps) {
  const showScene = brand.page?.showScene !== false;

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
