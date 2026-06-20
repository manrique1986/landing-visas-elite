import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });

export const metadata: Metadata = {
  metadataBase: new URL("https://landing-visas-elite.netlify.app"),
  title: "Visas Elite | Trae a tus padres a EE.UU. con acompañamiento premium",
  description:
    "+1.000 visas aprobadas. Catalina Cardozo brinda asistencia y acompañamiento premium para que los padres de colombianos en EE.UU. obtengan su visa americana.",
  openGraph: {
    title: "Visas Elite — Acompañamiento premium para la visa de tus padres",
    description:
      "+1.000 casos exitosos. Garantía de 8 semanas. Asistencia presencial en cada etapa del proceso.",
    type: "website",
    url: "https://catalinavisaselite.com",
  },
  twitter: { card: "summary_large_image" },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="es" className={inter.variable}>
      <body className="antialiased">{children}</body>
    </html>
  );
}
