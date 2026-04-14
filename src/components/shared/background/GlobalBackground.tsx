"use client";

import type { BrandConfig } from "@/lib/types";
import { AmbientGlow } from "./AmbientGlow";
import { ParticlesLayer } from "./ParticlesLayer";

type GlobalBackgroundProps = {
	brand: Pick<BrandConfig, "theme" | "slug">;
}

export function GlobalBackground({ brand }: GlobalBackgroundProps) {
	const isAelor = brand.slug === "aelor";
	const isDextor = brand.slug === "dextor";
	const isRaxor = brand.slug === "raxor";
	const isIxera = brand.slug === "ixera";
	const isNixen = brand.slug === "nixen";
	const isVaxen = brand.slug === "vaxen";

	return (
		<div className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
			<div className="absolute inset-0 bg-[var(--bg)]" />

			<AmbientGlow />
			{isRaxor && <ParticlesLayer brand={brand} />}

			<div
				className="absolute inset-0"
				style={{
					background:
						"radial-gradient(circle at 50% 0%, rgba(255,255,255,0.035), transparent 38%)",
				}}
			/>

			{isAelor && (
				<div
					className="absolute inset-0"
					style={{
						backgroundImage:
							"radial-gradient(rgba(255,255,255,0.02) 0.6px, transparent 0.6px)",
						backgroundSize: "6px 6px",
						opacity: 0.015,
					}}
				/>
			)}

			{isDextor && (
				<div
					className="absolute inset-0"
					style={{
						background:
							"linear-gradient(180deg, rgba(255,255,255,0.02), transparent 40%)",
					}}
				/>
			)}

			{isNixen && (
				<div
					className="absolute inset-0"
					style={{
						backgroundImage:
							"linear-gradient(rgba(255,255,255,0.035) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.035) 1px, transparent 1px)",
						backgroundSize: "80px 80px",
						opacity: 0.04,
					}}
				/>
			)}

			{isVaxen && (
				<>
					<div
						className="absolute inset-0"
						style={{
							backgroundImage:
								"radial-gradient(rgba(168,85,247,0.08) 1px, transparent 1px)",
							backgroundSize: "10px 10px",
							opacity: 0.04,
						}}
					/>
					<div
						className="absolute inset-0"
						style={{
							background:
								"linear-gradient(180deg, rgba(0,0,0,0.4), rgba(0,0,0,0.9))",
						}}
					/>
				</>
			)}

			{isIxera && (
				<div
					className="absolute inset-0"
					style={{
						background: "transparent",
					}}
				/>
			)}

			{isRaxor && (
				<div
					className="absolute inset-0"
					style={{
						background: "linear-gradient(180deg, rgba(255,255,255,0.015), transparent 42%)",
					}}
				/>
			)}

			<div
				className="absolute inset-0"
				style={{
					background: "linear-gradient(180deg, rgba(0,0,0,0.14) 0%, rgba(0,0,0,0.34) 100%)",
				}}
			/>
		</div>
	);
}
