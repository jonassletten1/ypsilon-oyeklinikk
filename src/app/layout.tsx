import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "Ypsilon Øyeklinikk",
    template: "%s | Ypsilon Øyeklinikk",
  },
  description:
    "Privat øyeklinikk med spesialisthelsetjenester. Undersøkelse, behandling og kirurgi av høy kvalitet.",
  keywords: ["øyeklinikk", "øyelege", "øyeundersøkelse", "øyeoperasjon", "øyehelse", "Ypsilon"],
  metadataBase: new URL("https://ypsilonoyeklinikk.no"),
  openGraph: {
    type: "website",
    locale: "nb_NO",
    url: "https://ypsilonoyeklinikk.no",
    siteName: "Ypsilon Øyeklinikk",
    title: "Ypsilon Øyeklinikk",
    description: "Privat øyeklinikk med spesialisthelsetjenester. Undersøkelse, behandling og kirurgi av høy kvalitet.",
  },
  robots: { index: true, follow: true },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "MedicalClinic",
  "name": "Ypsilon Øyeklinikk",
  "alternateName": "Ypsilon Oyeklinikk",
  "url": "https://ypsilonoyeklinikk.no",
  "logo": "https://ypsilonoyeklinikk.no/logo/logo.svg",
  "image": "https://ypsilonoyeklinikk.no/logo/logo.svg",
  "telephone": "+4733221212",
  "email": "post@ypsilonoyeklinikk.no",
  "priceRange": "kr 443",
  "medicalSpecialty": "Ophthalmic",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Hotvetalleen 15A",
    "addressLocality": "Drammen",
    "addressCountry": "NO",
  },
  "openingHoursSpecification": [
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      "opens": "08:00",
      "closes": "16:00",
    },
  ],
  "founder": [
    { "@type": "Person", "name": "Jarle Sletten" },
    { "@type": "Person", "name": "Gurpreet Singh Khangura" },
  ],
  "foundingDate": "2026-06-01",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="nb">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body style={{ minHeight: "100vh", display: "flex", flexDirection: "column" }}>
        {children}
      </body>
    </html>
  );
}
