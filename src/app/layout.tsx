import type { Metadata } from "next";
import { Inter_Tight } from "next/font/google";
import { LocaleProvider } from "@/lib/context/LocaleContext";
import { getActiveBrand } from "@/lib/core/active-brand";
import "./globals.css";

const interTight = Inter_Tight({
  variable: "--font-inter-tight",
  subsets: ["latin"],
  weight: ["300", "400"],
});

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/+$/, "") || "http://localhost:3001";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const brand = getActiveBrand();
  const brandUrl = brand.seo?.siteUrl ?? SITE_URL;

  const orgSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: brand.name,
    url: brandUrl,
    logo: `${brandUrl}/icon.svg`,
    description: brand.seo?.description,
    sameAs: [brand.links?.instagram, brand.links?.linkedin].filter(
      (v): v is string => typeof v === "string" && v.length > 0,
    ),
  };

  const webSiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: brand.name,
    url: brandUrl,
  };

  return (
    <html lang="en" className={`${interTight.variable} h-full antialiased`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(orgSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(webSiteSchema) }}
        />
      </head>
      <body className="min-h-full flex flex-col">
        <LocaleProvider>{children}</LocaleProvider>
      </body>
    </html>
  );
}
