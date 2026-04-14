import type { ComponentType } from "react";
import type { BrandConfig, BrandSectionKey } from "@/lib/types";

import { Hero } from "./Hero";
import Identity from "./Identity";
import Process from "./Process";
import Services from "./Services";
import Final from "./Final";
import ContactSection from "./ContactSection";

export type BrandSectionComponent = ComponentType<{
  brand: BrandConfig;
}>;

export const brandSectionRegistry: Record<
  BrandSectionKey,
  BrandSectionComponent
> = {
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
