export type BrandSectionKey =
  | "hero"
  | "identity"
  | "process"
  | "services"
  | "final"
  | "contact";

export type BrandPageConfig = {
  sections: readonly BrandSectionKey[];
};
