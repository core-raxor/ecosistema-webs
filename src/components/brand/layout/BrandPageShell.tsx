import { BrandScene } from "@/components/brand/scene/BrandScene";
import { GlobalBackground } from "@/components/shared/background/GlobalBackground";
import { IntroScreen } from "@/components/shared/intro/IntroScreen";
import { ContactModal } from "@/components/shared/modal/ContactModal";
import { ContactModalProvider } from "@/components/shared/modal/ContactModalContext";
import { KyrexisMark } from "@/components/system/KyrexisMark";
import { getBrandCssVars } from "@/lib/core/theme-vars";
import type { BrandConfig } from "@/lib/types";
import type { ReactNode } from "react";

type BrandPageShellProps = {
  brand: Pick<BrandConfig, "theme" | "content" | "links" | "name" | "slug" | "assets">;
  children: ReactNode;
};

export function BrandPageShell({ brand, children }: BrandPageShellProps) {
  const logoMark = brand.assets?.logoMark ? (
    <KyrexisMark className="size-48 md:size-96" />
  ) : undefined;

  return (
    <ContactModalProvider>
      <div style={getBrandCssVars(brand)} className="relative min-h-screen bg-(--bg) text-(--text)">
        <IntroScreen logoText={brand.content.hero.logoText ?? brand.name} logoMark={logoMark} />
        <GlobalBackground />
        <BrandScene brand={brand as BrandConfig} />
        <main className="relative z-10">{children}</main>
        <ContactModal brand={brand} />
      </div>
    </ContactModalProvider>
  );
}
