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

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="nb">
      <body style={{ minHeight: "100vh", display: "flex", flexDirection: "column" }}>
        {children}
      </body>
    </html>
  );
}
