export type SectionVariant =
	| "default"
	| "minimal"
	| "editorial"
	| "editorial-left"
	| "immersive"
	| "system"
	| "cards"
	| "stack"
	| "split"
	| "grid"
	| "timeline"
	| "interactive-list"
	| "stacked-cards"
	| "centered-statement"
	| "editorial-contact";

export type BrandUI = {
	hero?: { variant?: SectionVariant };
	identity?: { variant?: SectionVariant };
	process?: { variant?: SectionVariant };
	services?: { variant?: SectionVariant };
	final?: { variant?: SectionVariant };
	contact?: { variant?: SectionVariant };
	motion?: {
		intensity?: "low" | "medium" | "high";
	};
};
