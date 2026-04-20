import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Ypsilon Øyeklinikk",
    template: "%s | Ypsilon Øyeklinikk",
  },
  description:
    "Ypsilon Øyeklinikk tilbyr spesialisttjenester innen øyehelse. Undersøkelse, behandling og kirurgi av høy kvalitet.",
  keywords: ["øyeklinikk", "øyelege", "øyeundersøkelse", "øyeoperasjon", "øyehelse", "Ypsilon"],
  authors: [{ name: "Ypsilon Øyeklinikk" }],
  metadataBase: new URL("https://ypsilonoyeklinikk.no"),
  openGraph: {
    type: "website",
    locale: "nb_NO",
    url: "https://ypsilonoyeklinikk.no",
    siteName: "Ypsilon Øyeklinikk",
    title: "Ypsilon Øyeklinikk",
    description:
      "Ypsilon Øyeklinikk tilbyr spesialisttjenester innen øyehelse. Undersøkelse, behandling og kirurgi av høy kvalitet.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="nb"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
