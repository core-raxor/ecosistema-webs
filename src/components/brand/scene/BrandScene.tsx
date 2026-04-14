"use client";

import type { BrandConfig } from "@/lib/types";

type BrandSceneProps = {
	brand: BrandConfig;
};

function getScenePlacement(placement: "left" | "center" | "right") {
	if (placement === "left") {
		return "absolute left-[-8%] top-[10%] h-[70vh] w-[50vw]";
	}

	if (placement === "center") {
		return "absolute left-1/2 top-[12%] h-[70vh] w-[60vw] -translate-x-1/2";
	}

	return "absolute right-[-8%] top-[10%] h-[70vh] w-[50vw]";
}

function getSceneSize(size: "sm" | "md" | "lg") {
	if (size === "sm") {
		return "h-[240px] w-[240px] md:h-[280px] md:w-[280px]";
	}

	if (size === "lg") {
		return "h-[360px] w-[360px] md:h-[420px] md:w-[420px]";
	}

	return "h-[300px] w-[300px] md:h-[340px] md:w-[340px]";
}

function getShapeClass(shape: "circle" | "soft-square" | "square" | "hex" | "panel") {
	switch (shape) {
		case "circle":
			return "rounded-full";
		case "soft-square":
			return "rounded-[22%]";
		case "square":
			return "rounded-[14px]";
		case "hex":
			return "rounded-[28%]";
		case "panel":
			return "rounded-[10px]";
		default:
			return "rounded-full";
	}
}

function getBorderColor(borderStyle: "none" | "subtle" | "strong") {
	if (borderStyle === "none") return "transparent";
	if (borderStyle === "strong") return "color-mix(in srgb, var(--border) 95%, white 8%)";
	return "color-mix(in srgb, var(--border) 78%, transparent)";
}

function getGlowOpacity(glow: "none" | "soft" | "medium" | "strong") {
	if (glow === "none") return 0;
	if (glow === "soft") return 0.3;
	if (glow === "medium") return 0.5;
	return 0.72;
}

function getLayerInsets(layerCount: 1 | 2 | 3 | 4) {
	const all = ["12%", "24%", "36%", "48%"];
	return all.slice(0, layerCount);
}

export function BrandScene({ brand }: BrandSceneProps) {
	const scene =
		brand.theme.visualSystem?.scene ?? {
			type: "editorial-aura" as const,
			shape: "circle" as const,
			placement: "right" as const,
			size: "md" as const,
			layerCount: 2 as const,
			borderStyle: "subtle" as const,
			glow: "soft" as const,
		};

	const placementClass = getScenePlacement(scene.placement);
	const sizeClass = getSceneSize(scene.size);
	const shapeClass = getShapeClass(scene.shape);
	const borderColor = getBorderColor(scene.borderStyle);
	const glowOpacity = getGlowOpacity(scene.glow);
	const layerInsets = getLayerInsets(scene.layerCount);

	const isNetwork = scene.type === "intelligence-network";
	const isFlow = scene.type === "automation-flow";
	const isTechnical = scene.type === "technical-depth";
	const isEditorial = scene.type === "editorial-aura";
	const isStructural = scene.type === "structural-frame";
	const isOperational = scene.type === "operational-core";

	return (
		<div className="pointer-events-none fixed inset-0 z-[1] overflow-hidden">
			<div className={`${placementClass} opacity-90`}>
				<div className="flex h-full w-full items-center justify-center">
					<div
						className={`relative ${sizeClass} ${shapeClass}`}
						style={{
							border: `1px solid ${borderColor}`,
							boxShadow: "var(--shadow-strong)",
							background: isEditorial
								? "radial-gradient(circle at 35% 30%, color-mix(in srgb, var(--brand-primary) 18%, transparent), transparent 58%), radial-gradient(circle at 70% 72%, color-mix(in srgb, var(--brand-accent) 16%, transparent), transparent 54%)"
								: isStructural
									? "linear-gradient(180deg, color-mix(in srgb, var(--surface) 82%, transparent), color-mix(in srgb, var(--surface-alt) 86%, transparent))"
									: isOperational
										? "radial-gradient(circle at 30% 30%, color-mix(in srgb, var(--brand-primary) 14%, transparent), transparent 42%), linear-gradient(180deg, color-mix(in srgb, var(--surface) 86%, transparent), color-mix(in srgb, var(--surface-alt) 92%, transparent))"
										: isNetwork
											? "radial-gradient(circle at 50% 50%, color-mix(in srgb, var(--brand-accent) 22%, transparent), transparent 52%), radial-gradient(circle at 30% 30%, color-mix(in srgb, var(--brand-primary) 12%, transparent), transparent 48%)"
											: isFlow
												? "linear-gradient(135deg, color-mix(in srgb, var(--brand-accent) 10%, transparent), transparent 35%), linear-gradient(180deg, color-mix(in srgb, var(--surface) 84%, transparent), color-mix(in srgb, var(--surface-alt) 92%, transparent))"
												: "radial-gradient(circle at 50% 50%, color-mix(in srgb, var(--brand-accent) 18%, transparent), transparent 58%), linear-gradient(180deg, color-mix(in srgb, var(--surface) 88%, transparent), color-mix(in srgb, var(--surface-alt) 96%, transparent))",
						}}
					>
						{glowOpacity > 0 && (
							<div
								className={`absolute inset-0 ${shapeClass}`}
								style={{
									background: `radial-gradient(circle at 50% 50%, color-mix(in srgb, var(--brand-accent) ${Math.round(glowOpacity * 100)}%, transparent), transparent 70%)`,
									filter: "blur(26px)",
									opacity: glowOpacity,
									transform: isTechnical ? "scale(1.08)" : "scale(1.12)",
								}}
							/>
						)}

						{layerInsets.map((inset, index) => (
							<div
								key={index}
								className={`absolute ${shapeClass}`}
								style={{
									inset,
									border: `1px solid ${
										scene.borderStyle === "none"
											? "transparent"
											: `color-mix(in srgb, var(--border) ${
													index === 0 ? "82%" : index === 1 ? "68%" : index === 2 ? "54%" : "40%"
											  }, transparent)`
									}`,
								}}
							/>
						))}

						{isNetwork && (
							<>
								<div
									className="absolute h-[10px] w-[10px] rounded-full"
									style={{
										top: "18%",
										left: "22%",
										background: "var(--brand-accent)",
										boxShadow: "0 0 22px color-mix(in srgb, var(--brand-accent) 70%, transparent)",
									}}
								/>
								<div
									className="absolute h-[8px] w-[8px] rounded-full"
									style={{
										top: "30%",
										right: "18%",
										background: "var(--brand-primary)",
										opacity: 0.8,
									}}
								/>
								<div
									className="absolute h-[9px] w-[9px] rounded-full"
									style={{
										bottom: "22%",
										left: "30%",
										background: "var(--brand-accent)",
										opacity: 0.85,
									}}
								/>
							</>
						)}

						{isFlow && (
							<>
								<div
									className="absolute left-[16%] right-[16%] top-[28%] h-px"
									style={{
										background:
											"linear-gradient(90deg, transparent, color-mix(in srgb, var(--brand-accent) 42%, transparent), transparent)",
									}}
								/>
								<div
									className="absolute left-[20%] right-[12%] top-[50%] h-px"
									style={{
										background:
											"linear-gradient(90deg, transparent, color-mix(in srgb, var(--brand-primary) 28%, transparent), transparent)",
									}}
								/>
								<div
									className="absolute left-[24%] right-[20%] top-[68%] h-px"
									style={{
										background:
											"linear-gradient(90deg, transparent, color-mix(in srgb, var(--brand-accent) 34%, transparent), transparent)",
									}}
								/>
							</>
						)}

						{isTechnical && (
							<>
								<div
									className="absolute inset-[18%] rounded-[inherit]"
									style={{
										border: "1px dashed color-mix(in srgb, var(--border) 55%, transparent)",
									}}
								/>
								<div
									className="absolute left-1/2 top-1/2 h-[14px] w-[14px] -translate-x-1/2 -translate-y-1/2 rounded-full"
									style={{
										background: "var(--brand-accent)",
										boxShadow: "0 0 30px color-mix(in srgb, var(--brand-accent) 55%, transparent)",
										opacity: 0.9,
									}}
								/>
							</>
						)}
					</div>
				</div>
			</div>
		</div>
	);
}
