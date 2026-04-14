import type { BrandConfig, BrandSectionKey } from "@/lib/types";
import type { ComponentType } from "react";

import ContactSection from "./ContactSection";
import Final from "./Final";
import { Hero } from "./Hero";
import Identity from "./Identity";
import Process from "./Process";
import Services from "./Services";

export type BrandSectionComponent = ComponentType<{
  brand: BrandConfig;
}>;

export const brandSectionRegistry: Record<BrandSectionKey, BrandSectionComponent> = {
  hero: Hero,
  identity: Identity,
  process: Process,
  services: Services,
  final: Final,
  contact: ContactSection,
};

export const defaultBrandSections: BrandSectionKey[] = [
  "hero",
  "identity",
  "process",
  "services",
  "final",
  "contact",
];
