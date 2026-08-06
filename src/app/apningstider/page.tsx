import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import YpsilonLogo from "@/components/layout/YpsilonLogo";
import type { Metadata } from "next";

export const metadata: Metadata = { title: "Åpningstider" };

export default function ApningstiderPage() {
  return (
    <>
      <Header />
      <main style={{ flex: 1 }}>

        {/* Page header */}
        <section className="page-band" style={{ background: "#40577C" }}>
          <div style={{ maxWidth: 900, margin: "0 auto" }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 20 }}>
              <div style={{ fontSize: 11, fontWeight: 600, letterSpacing: "0.20em", textTransform: "uppercase", color: "#7A9BB5" }}>
                INFORMASJON
              </div>
              <YpsilonLogo light large />
            </div>
            <h1 style={{ fontFamily: "var(--font-heading)", fontSize: "clamp(32px, 3.5vw, 48px)", fontWeight: 700, color: "#FAFBFC", lineHeight: 1.15, letterSpacing: "-0.01em" }}>
              Åpningstider
            </h1>
          </div>
        </section>

        {/* Content */}
        <section className="content-section-sm" style={{ background: "#F4F6F8" }}>
          <div style={{ maxWidth: 900, margin: "0 auto" }}>

            {/* Åpningsmelding */}
            <p style={{ fontSize: 17, fontWeight: 300, color: "#4A5568", lineHeight: 1.85, marginBottom: 56, maxWidth: 580 }}>
              Ypsilon Øyeklinikk åpnet <strong style={{ fontWeight: 600, color: "#1A1D2E" }}>1. juni 2026</strong>.
            </p>

            <div className="two-col-grid">

              {/* Åpningstider */}
              <div>
                <div style={{ fontSize: 12, fontWeight: 600, letterSpacing: "0.14em", textTransform: "uppercase", color: "#40577C", marginBottom: 24 }}>Åpningstider</div>
                {[
                  ["Mandag", "08:00 – 16:00"],
                  ["Tirsdag", "08:00 – 16:00"],
                  ["Onsdag", "08:00 – 16:00"],
                  ["Torsdag", "08:00 – 16:00"],
                  ["Fredag", "08:00 – 16:00"],
                  ["Lørdag – Søndag", "Stengt"],
                ].map(([dag, tid], i) => (
                  <div key={dag} style={{
                    display: "flex", justifyContent: "space-between", alignItems: "center",
                    padding: "16px 0",
                    borderTop: i === 0 ? "1px solid #E2E8EF" : "none",
                    borderBottom: "1px solid #E2E8EF",
                  }}>
                    <span style={{ fontSize: 16, fontWeight: 300, color: dag === "Lørdag – Søndag" ? "#9AA3AD" : "#1A1D2E" }}>{dag}</span>
                    <span style={{ fontSize: 16, fontWeight: dag === "Lørdag – Søndag" ? 300 : 500, color: dag === "Lørdag – Søndag" ? "#9AA3AD" : "#1A1D2E" }}>{tid}</span>
                  </div>
                ))}
              </div>

              {/* Telefontid */}
              <div>
                <div style={{ fontSize: 12, fontWeight: 600, letterSpacing: "0.14em", textTransform: "uppercase", color: "#40577C", marginBottom: 24 }}>Telefontid</div>
                {[
                  ["Mandag", "08:00–12:00 · 13:00–15:00"],
                  ["Tirsdag", "08:00–12:00 · 13:00–15:00"],
                  ["Onsdag", "08:00–12:00 · 13:00–15:00"],
                  ["Torsdag", "08:00–12:00 · 13:00–15:00"],
                  ["Fredag", "08:00–12:00 · 13:00–15:00"],
                  ["Lørdag – Søndag", "Stengt"],
                ].map(([dag, tid], i) => (
                  <div key={dag} style={{
                    display: "flex", justifyContent: "space-between", alignItems: "center",
                    padding: "16px 0",
                    borderTop: i === 0 ? "1px solid #E2E8EF" : "none",
                    borderBottom: "1px solid #E2E8EF",
                  }}>
                    <span style={{ fontSize: 16, fontWeight: 300, color: dag === "Lørdag – Søndag" ? "#9AA3AD" : "#1A1D2E" }}>{dag}</span>
                    <span style={{ fontSize: 16, fontWeight: dag === "Lørdag – Søndag" ? 300 : 500, color: dag === "Lørdag – Søndag" ? "#9AA3AD" : "#1A1D2E" }}>{tid}</span>
                  </div>
                ))}
                <p style={{ fontSize: 14, fontWeight: 300, color: "#7A9BB5", marginTop: 16, lineHeight: 1.65 }}>
                  Vi ber om at henvendelser skjer innenfor telefontiden.
                </p>
              </div>

            </div>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
