import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import type { Metadata } from "next";

export const metadata: Metadata = { title: "Priser" };

const prices = [
  ["Øyeundersøkelse", "900 kr"],
  ["Synsprøve og refraksjonsbestemmelse", "600 kr"],
  ["Konsultasjon øyelege", "1 200 kr"],
  ["LASIK laseroperasjon (per øye)", "8 500 kr"],
  ["Grå stær operasjon (per øye)", "14 000 kr"],
  ["Netthinneundersøkelse (OCT)", "500 kr"],
];

export default function PriserPage() {
  return (
    <>
      <Header />
      <main style={{ flex: 1, background: "#F4F6F8", minHeight: "70vh", padding: "80px 48px" }}>
        <div style={{ maxWidth: 800, margin: "0 auto" }}>
          <div style={{ fontSize: 10, fontWeight: 500, letterSpacing: "0.18em", textTransform: "uppercase", color: "#4A6B8A", marginBottom: 14 }}>PRISER</div>
          <h1 style={{ fontSize: 40, fontWeight: 300, letterSpacing: "0.10em", textTransform: "uppercase", color: "#2D2F4A", marginBottom: 40 }}>PRISLISTE</h1>
          <div style={{ background: "#fff", borderRadius: 4, overflow: "hidden", boxShadow: "0 1px 3px rgba(45,47,74,0.06)" }}>
            {prices.map(([name, price], i) => (
              <div key={name} style={{
                padding: "16px 24px",
                borderBottom: i < prices.length - 1 ? "1px solid #E8ECF0" : "none",
                display: "flex", justifyContent: "space-between", alignItems: "center",
              }}>
                <span style={{ fontSize: 14, fontWeight: 300, color: "#2D2F4A" }}>{name}</span>
                <span style={{ fontSize: 14, fontWeight: 400, color: "#4A6B8A", letterSpacing: "0.04em" }}>{price}</span>
              </div>
            ))}
          </div>
          <p style={{ fontSize: 12, color: "#6B7B86", marginTop: 16, lineHeight: 1.6 }}>
            Alle priser inkluderer moms. Noen tjenester kan dekkes av NAV eller forsikring.
          </p>
        </div>
      </main>
      <Footer />
    </>
  );
}
