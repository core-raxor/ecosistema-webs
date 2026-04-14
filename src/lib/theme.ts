export const globalTheme = {
	colors: {
		background: "#07090D",
		surface: "#0D1117",
		surfaceAlt: "#121821",
		border: "rgba(255,255,255,0.08)",
		text: "#F5F7FA",
		textMuted: "#98A2B3",
	},
	spacing: {
		sectionX: "clamp(1.25rem, 3vw, 3rem)",
		sectionY: "clamp(5rem, 8vw, 8rem)",
		container: "1280px",
	},
	radius: {
		sm: "10px",
		md: "16px",
		lg: "24px",
		xl: "32px",
	},
	shadow: {
		soft: "0 10px 30px rgba(0,0,0,0.22)",
		strong: "0 20px 80px rgba(0,0,0,0.35)",
	},
	blur: {
		light: "10px",
		strong: "24px",
	},
	motion: {
		fast: "180ms",
		base: "280ms",
		slow: "600ms",
		easing: "cubic-bezier(0.22, 1, 0.36, 1)",
	},
} as const;
