import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Transporte de carga nacional e internacional - TRANSFRIBOL",
  description:
    "Soluciones logisticas, transporte internacional, importacion y exportacion conectando Bolivia con el mundo con seguridad, puntualidad y eficiencia operativa.",
  icons: {
    icon: "/images/brand/transfribol-logo.jpeg"
  }
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}
