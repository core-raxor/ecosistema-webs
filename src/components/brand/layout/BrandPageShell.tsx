import { BrandScene } from "@/components/brand/scene/BrandScene";
import { GlobalBackground } from "@/components/shared/background/GlobalBackground";
import { ContactModal } from "@/components/shared/modal/ContactModal";
import { ContactModalProvider } from "@/components/shared/modal/ContactModalContext";
import { getBrandCssVars } from "@/lib/core/theme-vars";
import type { BrandConfig } from "@/lib/types";
import type { ReactNode } from "react";

type BrandPageShellProps = {
  brand: Pick<BrandConfig, "theme" | "content" | "links" | "name" | "slug">;
  children: ReactNode;
};

export function BrandPageShell({ brand, children }: BrandPageShellProps) {
  return (
    <ContactModalProvider>
      <div style={getBrandCssVars(brand)} className="relative min-h-screen bg-(--bg) text-(--text)">
        <GlobalBackground />
        <BrandScene brand={brand as BrandConfig} />
        <main className="relative z-10">{children}</main>
        <ContactModal brand={brand} />
      </div>
    </ContactModalProvider>
  );
}
