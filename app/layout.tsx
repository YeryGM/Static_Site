import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import "./globals.css";
import "./sections.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap"
});

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  display: "swap"
});

export const metadata: Metadata = {
  metadataBase: new URL("https://transfribol.com"),
  title: "Transporte de carga nacional e internacional - TRANSFRIBOL",
  description:
    "Soluciones logisticas, transporte internacional, importacion y exportacion conectando Bolivia con el mundo con seguridad, puntualidad y eficiencia operativa.",
  icons: {
    icon: "/images/brand/transfribol-logo.jpeg"
  },
  openGraph: {
    title: "TRANSFRIBOL S.R.L. - Transporte de carga nacional e internacional",
    description:
      "Soluciones logisticas, transporte internacional, importacion y exportacion conectando Bolivia con el mundo con seguridad, puntualidad y eficiencia operativa.",
    url: "https://transfribol.com",
    siteName: "TRANSFRIBOL S.R.L.",
    locale: "es_BO",
    type: "website",
    images: [{ url: "/images/brand/transfribol-logo.jpeg", width: 800, height: 600 }]
  },
  twitter: {
    card: "summary_large_image",
    title: "TRANSFRIBOL S.R.L. - Transporte de carga nacional e internacional",
    description:
      "Soluciones logisticas, transporte internacional, importacion y exportacion conectando Bolivia con el mundo.",
    images: ["/images/brand/transfribol-logo.jpeg"]
  }
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="es" className={`${inter.variable} ${outfit.variable}`}>
      <body>{children}</body>
    </html>
  );
}
