import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import YpsilonLogo from "@/components/layout/YpsilonLogo";
import type { Metadata } from "next";

export const metadata: Metadata = { title: "Priser" };

export default function PriserPage() {
  return (
    <>
      <Header />
      <main style={{ flex: 1 }}>

        {/* Page header */}
        <section className="page-band" style={{ background: "#40577C" }}>
          <div style={{ maxWidth: 900, margin: "0 auto" }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 20 }}>
              <div style={{ fontSize: 11, fontWeight: 600, letterSpacing: "0.20em", textTransform: "uppercase", color: "#7A9BB5" }}>
                PRISER
              </div>
              <YpsilonLogo light large />
            </div>
            <h1 style={{ fontFamily: "var(--font-heading)", fontSize: "clamp(32px, 3.5vw, 48px)", fontWeight: 700, color: "#FAFBFC", lineHeight: 1.15, letterSpacing: "-0.01em" }}>
              Prisliste
            </h1>
          </div>
        </section>

        {/* Content */}
        <section className="content-section" style={{ background: "#F4F6F8" }}>
          <div style={{ maxWidth: 800, margin: "0 auto" }}>

            <p style={{ fontSize: 17, fontWeight: 300, color: "#4A5568", lineHeight: 1.85, marginBottom: 56, maxWidth: 560 }}>
              Vi har offentlig avtale med Helse Sør-Øst og benytter offentlige takster.
            </p>

            {/* Egenandel */}
            <div style={{ marginBottom: 64 }}>
              <div style={{ fontSize: 12, fontWeight: 600, letterSpacing: "0.14em", textTransform: "uppercase", color: "#40577C", marginBottom: 24 }}>Egenandel</div>
              {[
                { label: "Konsultasjon", sublabel: "Frikort kan benyttes", price: "kr 443,–" },
                { label: "Barn under 18 år", sublabel: "Ingen egenandel", price: "kr 0,–" },
              ].map((row, i) => (
                <div key={row.label} style={{
                  display: "flex", justifyContent: "space-between", alignItems: "center",
                  padding: "20px 0",
                  borderTop: i === 0 ? "1px solid #E2E8EF" : "none",
                  borderBottom: "1px solid #E2E8EF",
                }}>
                  <div>
                    <div style={{ fontSize: 17, fontWeight: 400, color: "#1A1D2E", marginBottom: 4 }}>{row.label}</div>
                    <div style={{ fontSize: 14, fontWeight: 300, color: "#7A9BB5" }}>{row.sublabel}</div>
                  </div>
                  <div style={{ fontSize: 22, fontWeight: 500, color: "#1A1D2E", letterSpacing: "0.01em" }}>{row.price}</div>
                </div>
              ))}
            </div>

            {/* Takstplakat */}
            <div>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", marginBottom: 20 }}>
                <div style={{ fontSize: 12, fontWeight: 600, letterSpacing: "0.14em", textTransform: "uppercase", color: "#40577C" }}>Full takstplakat</div>
                <a
                  href="/prisliste.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: "inline-flex", alignItems: "center", gap: 6,
                    color: "#40577C", fontSize: 13, fontWeight: 500,
                    textDecoration: "none", letterSpacing: "0.04em",
                    borderBottom: "1px solid #40577C", paddingBottom: 1,
                  }}
                >
                  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M15 3h6v6M10 14L21 3M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>
                  </svg>
                  Åpne i fullskjerm
                </a>
              </div>
              <a href="/prisliste.pdf" target="_blank" rel="noopener noreferrer" style={{ display: "block" }}>
                <img
                  src="/images/prisliste.png"
                  alt="Takstplakat for avtalespesialister 2026"
                  style={{ width: "100%", height: "auto", display: "block", border: "1px solid #E2E8EF", borderRadius: 4 }}
                />
              </a>
              <p style={{ fontSize: 14, fontWeight: 300, color: "#9AA3AD", lineHeight: 1.7, marginTop: 16 }}>
                Prisene er offentlige takster fastsatt av myndighetene. Frikort godtas ved konsultasjon.
              </p>
            </div>

          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
