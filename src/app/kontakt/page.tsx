import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import YpsilonLogo from "@/components/layout/YpsilonLogo";
import type { Metadata } from "next";

export const metadata: Metadata = { title: "Kontakt" };

const inputStyle: React.CSSProperties = {
  width: "100%", fontFamily: "var(--font-sans)", fontSize: 16, fontWeight: 300,
  color: "#1A1D2E", background: "#fff", border: "1px solid #D0D7DE",
  borderRadius: 4, padding: "12px 16px", outline: "none",
};

export default function KontaktPage() {
  return (
    <>
      <Header />
      <main style={{ flex: 1 }}>

        {/* Page header */}
        <section className="page-band" style={{ background: "#40577C" }}>
          <div style={{ maxWidth: 1100, margin: "0 auto" }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 20 }}>
              <div style={{ fontSize: 11, fontWeight: 600, letterSpacing: "0.20em", textTransform: "uppercase", color: "#7A9BB5" }}>
                KONTAKT
              </div>
              <YpsilonLogo light large />
            </div>
            <h1 style={{ fontFamily: "var(--font-heading)", fontSize: "clamp(32px, 3.5vw, 48px)", fontWeight: 700, color: "#FAFBFC", lineHeight: 1.15, letterSpacing: "-0.01em", marginBottom: 20 }}>
              Kontakt oss
            </h1>
            <p style={{ fontSize: 17, fontWeight: 300, color: "rgba(250,251,252,0.60)", lineHeight: 1.7, maxWidth: 480 }}>
              Telefontid mandag–fredag <strong style={{ fontWeight: 500, color: "rgba(250,251,252,0.85)" }}>08:00–12:00 og 13:00–15:00</strong>.
            </p>
          </div>
        </section>

        {/* Content */}
        <section className="content-section" style={{ background: "#F4F6F8" }}>
          <div style={{ maxWidth: 1100, margin: "0 auto" }}>

            {/* Avbestilling notice */}
            <div style={{ borderLeft: "3px solid #40577C", paddingLeft: 24, marginBottom: 56 }}>
              <div style={{ fontSize: 12, fontWeight: 600, letterSpacing: "0.14em", textTransform: "uppercase", color: "#40577C", marginBottom: 10 }}>Avbestille avtalt time</div>
              <p style={{ fontSize: 16, fontWeight: 300, color: "#4A5568", lineHeight: 1.8, marginBottom: 12 }}>
                Dersom ditt problem har gått over eller du har fått hjelp hos andre, ber vi deg om å avbestille timen din slik at andre pasienter kan benytte plassen.
              </p>
              <p style={{ fontSize: 16, fontWeight: 300, color: "#4A5568", lineHeight: 1.8 }}>
                Send helst en e-post til <a href="mailto:post@ypsilonoyeklinikk.no" style={{ color: "#40577C", textDecoration: "none", borderBottom: "1px solid #40577C" }}>post@ypsilonoyeklinikk.no</a>, eventuelt ring oss eller bruk skjemaet nedenfor. <strong style={{ fontWeight: 600, color: "#1A1D2E" }}>Ikke oppgi sensitiv informasjon på e-post.</strong>
              </p>
            </div>

            <div className="two-col-grid">

              {/* Form */}
              <div>
                <div style={{ fontSize: 12, fontWeight: 600, letterSpacing: "0.14em", textTransform: "uppercase", color: "#40577C", marginBottom: 28 }}>Send melding</div>
                {([["Navn", "text", "Ditt navn"], ["E-post", "email", "din@epost.no"], ["Telefon", "tel", "+47 000 00 000"]] as [string, string, string][]).map(([lbl, type, ph]) => (
                  <div key={lbl} style={{ marginBottom: 18 }}>
                    <label style={{ display: "block", fontSize: 13, fontWeight: 500, color: "#1A1D2E", marginBottom: 8 }}>{lbl}</label>
                    <input type={type} placeholder={ph} style={inputStyle} />
                  </div>
                ))}
                <div style={{ marginBottom: 28 }}>
                  <label style={{ display: "block", fontSize: 13, fontWeight: 500, color: "#1A1D2E", marginBottom: 8 }}>Melding</label>
                  <textarea rows={5} placeholder="Skriv din melding her..." style={{ ...inputStyle, resize: "vertical" }} />
                </div>
                <a href="mailto:post@ypsilonoyeklinikk.no" style={{ display: "inline-block", background: "#40577C", color: "#fff", border: "none", borderRadius: 4, padding: "14px 28px", fontSize: 14, fontWeight: 500, cursor: "pointer", fontFamily: "var(--font-sans)", letterSpacing: "0.04em", textDecoration: "none" }}>
                  Send melding
                </a>
                <p style={{ fontSize: 13, fontWeight: 300, color: "#7A9BB5", lineHeight: 1.6, marginTop: 14 }}>
                  Skjemaet åpner din e-postklient og sender til post@ypsilonoyeklinikk.no. Ikke oppgi sensitiv informasjon på e-post.
                </p>
              </div>

              {/* Info */}
              <div>
                <div style={{ fontSize: 12, fontWeight: 600, letterSpacing: "0.14em", textTransform: "uppercase", color: "#40577C", marginBottom: 28 }}>Kontaktinformasjon</div>
                {[
                  { title: "Adresse", value: "Hotvetalleen 15A, Drammen" },
                  { title: "Telefon", value: "33 22 12 12" },
                  { title: "E-post", value: "post@ypsilonoyeklinikk.no" },
                  { title: "Telefontid", value: "Mandag–fredag\n08:00–12:00 og 13:00–15:00" },
                  { title: "Åpningstider", value: "Mandag–fredag\n08:00–16:00" },
                ].map((item, i) => (
                  <div key={item.title} style={{
                    padding: "18px 0",
                    borderTop: i === 0 ? "1px solid #E2E8EF" : "none",
                    borderBottom: "1px solid #E2E8EF",
                    display: "grid", gridTemplateColumns: "140px 1fr", gap: 16, alignItems: "start",
                  }}>
                    <div style={{ fontSize: 12, fontWeight: 500, letterSpacing: "0.08em", textTransform: "uppercase", color: "#7A9BB5" }}>{item.title}</div>
                    <div style={{ fontSize: 15, fontWeight: 400, lineHeight: 1.65, color: "#1A1D2E", whiteSpace: "pre-line" }}>{item.value}</div>
                  </div>
                ))}
              </div>

            </div>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
