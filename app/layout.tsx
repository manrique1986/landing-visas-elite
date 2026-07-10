import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });

export const metadata: Metadata = {
  metadataBase: new URL("https://visaselite.com"),
  title: "Catalina Visas Elite | Trae a tus padres a EE.UU. con acompañamiento premium",
  description:
    "+1.000 visas aprobadas. Catalina Cardozo brinda asistencia y acompañamiento premium para que los padres de colombianos en EE.UU. obtengan su visa americana.",
  alternates: {
    canonical: "https://visaselite.com",
  },
  openGraph: {
    title: "Catalina Visas Elite — Acompañamiento premium para la visa de tus padres",
    description:
      "+1.000 casos exitosos. Garantía de 8 semanas. Asistencia presencial en cada etapa del proceso.",
    type: "website",
    url: "https://visaselite.com",
  },
  twitter: { card: "summary_large_image" },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "Catalina Visas Elite",
  url: "https://visaselite.com",
  description:
    "Agencia especializada en asesoría y gestión de trámites de visa americana para padres de colombianos residentes en EE.UU., con acompañamiento premium presencial en cada etapa del proceso.",
  areaServed: "CO",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Tabio",
    addressRegion: "Cundinamarca",
    addressCountry: "CO",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="es" className={inter.variable}>
      <body className="antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}
