import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Script from "next/script";
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
        <Script id="meta-pixel" strategy="afterInteractive">
          {`
            !function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window, document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', '1845885416063022');
            fbq('track', 'PageView');
          `}
        </Script>
        <noscript>
          <img
            height="1"
            width="1"
            style={{ display: "none" }}
            src="https://www.facebook.com/tr?id=1845885416063022&ev=PageView&noscript=1"
            alt=""
          />
        </noscript>
        {children}
      </body>
    </html>
  );
}
