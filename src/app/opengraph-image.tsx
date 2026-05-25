import { ImageResponse } from "next/og";
import { getActiveBrand } from "@/lib/core/active-brand";

export const runtime = "nodejs";
export const alt = "Brand preview";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OgImage() {
  const brand = getActiveBrand();
  const accent = brand.theme.colors.accent;
  const tagline = brand.content.footer?.tagline ?? "";

  return new ImageResponse(
    <div
      style={{
        width: "1200px",
        height: "630px",
        background: "#0a0a0a",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        padding: "72px 80px",
        fontFamily: "sans-serif",
        position: "relative",
      }}
    >
      {/* accent bar top */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "3px",
          background: accent,
        }}
      />

      {/* brand name */}
      <div
        style={{
          fontSize: "96px",
          fontWeight: 700,
          color: "#ffffff",
          letterSpacing: "-4px",
          lineHeight: 1,
        }}
      >
        {brand.name}
      </div>

      {/* tagline + accent dot */}
      <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
        <div
          style={{
            width: "32px",
            height: "3px",
            background: accent,
            borderRadius: "2px",
          }}
        />
        <div
          style={{
            fontSize: "22px",
            color: "rgba(255,255,255,0.5)",
            letterSpacing: "3px",
            textTransform: "uppercase",
          }}
        >
          {tagline}
        </div>
      </div>
    </div>,
    { ...size },
  );
}
