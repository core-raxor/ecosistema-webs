import type { Metadata } from "next";
import { Inter_Tight } from "next/font/google";
import { LocaleProvider } from "@/lib/context/LocaleContext";
import "./globals.css";

const interTight = Inter_Tight({
  variable: "--font-inter-tight",
  subsets: ["latin"],
  weight: ["300", "400"],
});

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/+$/, "") || "http://localhost:3001";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Ecosistema empresarial modular",
    template: "%s",
  },
  description:
    "Sistema modular multi-brand construido para servicios, operaciones, automatización, diseño, infraestructura e inteligencia empresarial.",
  robots: {
    index: true,
    follow: true,
  },
};

const orgSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "KYREXIS",
  url: SITE_URL,
  logo: `${SITE_URL}/icon.svg`,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${interTight.variable} h-full antialiased`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(orgSchema) }}
        />
      </head>
      <body className="min-h-full flex flex-col">
        <LocaleProvider>{children}</LocaleProvider>
      </body>
    </html>
  );
}
