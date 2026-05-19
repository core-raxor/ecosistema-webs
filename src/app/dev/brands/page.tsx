import { notFound } from "next/navigation";
import Link from "next/link";
import { getAllBrands } from "@/lib/brands/registry";

// Dev-only route — blocked in production
export default function DevBrandsPage() {
  if (process.env.NODE_ENV === "production") notFound();

  const brands = getAllBrands();

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "#07090E",
        color: "#EEF2F7",
        fontFamily: "system-ui, sans-serif",
        padding: "3rem 2rem",
      }}
    >
      <div style={{ maxWidth: "1400px", margin: "0 auto" }}>
        {/* Header */}
        <div style={{ marginBottom: "2.5rem" }}>
          <p
            style={{
              fontSize: "11px",
              textTransform: "uppercase",
              letterSpacing: "0.18em",
              color: "#6B7280",
              marginBottom: "0.5rem",
            }}
          >
            Dev Preview
          </p>
          <h1
            style={{
              fontSize: "1.5rem",
              fontWeight: 300,
              letterSpacing: "-0.02em",
              margin: 0,
            }}
          >
            Brand Previews
          </h1>
          <p style={{ fontSize: "13px", color: "#6B7280", marginTop: "0.5rem" }}>
            Not available in production.
          </p>
        </div>

        {/* Brand list */}
        <ul style={{ listStyle: "none", padding: 0, margin: "0 0 4rem 0" }}>
          {brands.map((brand, i) => (
            <li
              key={brand.slug}
              style={{
                borderTop: i === 0 ? "1px solid #1F2937" : "none",
                borderBottom: "1px solid #1F2937",
              }}
            >
              <Link
                href={`/dev/brands/${brand.slug}`}
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  padding: "1.25rem 0",
                  color: "inherit",
                  textDecoration: "none",
                  gap: "1rem",
                }}
              >
                <span
                  style={{
                    fontSize: "11px",
                    color: "#4B5563",
                    letterSpacing: "0.12em",
                    fontVariantNumeric: "tabular-nums",
                    minWidth: "1.5rem",
                  }}
                >
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span style={{ flex: 1, fontSize: "1rem", letterSpacing: "-0.01em" }}>
                  {brand.name}
                </span>
                <span
                  style={{
                    fontSize: "11px",
                    color: "#4B5563",
                    letterSpacing: "0.08em",
                    textTransform: "uppercase",
                  }}
                >
                  {brand.slug}
                </span>
                <span style={{ color: "#4B5563", fontSize: "14px" }}>→</span>
              </Link>
            </li>
          ))}
        </ul>

        {/* Comparison section */}
        <div style={{ marginBottom: "2rem" }}>
          <p
            style={{
              fontSize: "11px",
              textTransform: "uppercase",
              letterSpacing: "0.18em",
              color: "#6B7280",
              marginBottom: "0.5rem",
            }}
          >
            Comparison
          </p>
          <div style={{ height: "1px", background: "#1F2937", marginBottom: "2rem" }} />
        </div>

        {/* Iframe grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 600px), 1fr))",
            gap: "2.5rem",
          }}
        >
          {brands.map((brand) => (
            <div key={brand.slug}>
              {/* Brand label */}
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "0.75rem",
                  marginBottom: "0.75rem",
                }}
              >
                <span
                  style={{
                    fontSize: "11px",
                    textTransform: "uppercase",
                    letterSpacing: "0.18em",
                    color: "#6B7280",
                  }}
                >
                  {brand.name}
                </span>
                <Link
                  href={`/dev/brands/${brand.slug}`}
                  target="_blank"
                  style={{
                    fontSize: "11px",
                    color: "#4B5563",
                    textDecoration: "none",
                    letterSpacing: "0.08em",
                  }}
                >
                  ↗ open
                </Link>
              </div>

              {/* Iframe */}
              <iframe
                src={`/dev/brands/${brand.slug}`}
                title={brand.name}
                style={{
                  width: "100%",
                  height: "80vh",
                  border: "1px solid #1F2937",
                  borderRadius: "12px",
                  overflow: "hidden",
                  display: "block",
                  background: "#07090E",
                }}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
