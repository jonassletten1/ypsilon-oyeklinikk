"use client";

import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import YpsilonLogo from "@/components/layout/YpsilonLogo";
import MapView from "@/components/sections/MapView";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Header />
      <main style={{ flex: 1 }}>

        {/* Intro band */}
        <section className="page-band" style={{ background: "#40577C" }}>
          <div style={{ maxWidth: 1200, margin: "0 auto", display: "flex", justifyContent: "space-between", alignItems: "center", gap: 48 }}>
            <div>
              <div style={{ fontSize: 11, fontWeight: 600, letterSpacing: "0.20em", textTransform: "uppercase", color: "#7A9BB5", marginBottom: 20 }}>
                Avtalespesialister i øyesykdommer · Hotvetalleen 15A, Drammen
              </div>
              <h1 style={{ fontFamily: "var(--font-heading)", fontSize: "clamp(36px, 4vw, 54px)", fontWeight: 700, color: "#FAFBFC", lineHeight: 1.15, marginBottom: 20, letterSpacing: "-0.01em" }}>
                Ypsilon Øyeklinikk
              </h1>
              <p style={{ fontSize: 17, fontWeight: 300, color: "rgba(250,251,252,0.65)", lineHeight: 1.7, maxWidth: 520 }}>
                Offentlig avtale med Helse Sør-Øst — åpnet 1. juni 2026
              </p>
            </div>
            <div className="hero-logo" style={{ flexShrink: 0, opacity: 0.85 }}>
              <YpsilonLogo light xlarge />
            </div>
          </div>
        </section>

        {/* Om oss */}
        <section className="content-section" style={{ background: "#FAFBFC" }}>
          <div className="two-col-grid-lg" style={{ maxWidth: 1200, margin: "0 auto" }}>
            <div>
              <h2 style={{ fontFamily: "var(--font-heading)", fontSize: 34, fontWeight: 700, color: "#1A1D2E", lineHeight: 1.2, marginBottom: 28 }}>
                Om klinikken
              </h2>
              <p style={{ fontSize: 17, fontWeight: 300, lineHeight: 1.85, color: "#4A5568", marginBottom: 20 }}>
                Ypsilon Øyeklinikk er en ny og moderne øyeklinikk i Drammen som åpnet 1. juni 2026. Klinikken drives av avtalespesialistene <strong style={{ fontWeight: 600, color: "#1A1D2E" }}>Jarle Sletten</strong> og <strong style={{ fontWeight: 600, color: "#1A1D2E" }}>Gurpreet Singh Khangura</strong>.
              </p>
              <p style={{ fontSize: 17, fontWeight: 300, lineHeight: 1.85, color: "#4A5568", marginBottom: 20 }}>
                Vi dekker alle områder av øyefaget. Klinikken har egen operasjonsstue og vi utfører også grå stær-operasjoner.
              </p>
              <p style={{ fontSize: 17, fontWeight: 300, lineHeight: 1.85, color: "#4A5568", marginBottom: 20 }}>
                Vi har offentlig avtale med Helse Sør-Øst. For nye pasienter er det nødvendig med henvisning fra lege, optiker eller helsestasjon.
              </p>
              <p style={{ fontSize: 17, fontWeight: 300, lineHeight: 1.85, color: "#4A5568", marginBottom: 36 }}>
                Prisen per konsultasjon er offentlige takster med egenandel på <strong style={{ fontWeight: 600, color: "#1A1D2E" }}>kr 443,–</strong>. Frikort kan benyttes. For barn under 18 år er det ingen egenandel.
              </p>
              <Link href="/pasientinformasjon" style={{
                display: "inline-flex", alignItems: "center", gap: 8,
                color: "#40577C", fontSize: 14, fontWeight: 500,
                letterSpacing: "0.06em", textDecoration: "none",
                borderBottom: "1px solid #40577C", paddingBottom: 2,
              }}>
                Pasientinformasjon →
              </Link>
            </div>

            <div>
              {[
                { label: "Adresse", value: "Hotvetalleen 15A, Drammen" },
                { label: "Åpnet", value: "1. juni 2026" },
                { label: "Åpningstider", value: "Mandag–fredag 08:00–16:00" },
                { label: "Telefon", value: "33 22 12 12" },
                { label: "Telefontid", value: "Mandag–fredag\n08:00–12:00 og 13:00–15:00" },
                { label: "E-post", value: "post@ypsilonoyeklinikk.no" },
                { label: "Offentlig avtale", value: "Helse Sør-Øst" },
              ].map((item, i) => (
                <div key={item.label} style={{
                  display: "grid", gridTemplateColumns: "160px 1fr", gap: 16,
                  padding: "18px 0",
                  borderTop: i === 0 ? "1px solid #E2E8EF" : "none",
                  borderBottom: "1px solid #E2E8EF",
                }}>
                  <div style={{ fontSize: 12, fontWeight: 500, letterSpacing: "0.10em", textTransform: "uppercase", color: "#7A9BB5" }}>{item.label}</div>
                  <div style={{ fontSize: 15, fontWeight: 400, color: "#1A1D2E", lineHeight: 1.65, whiteSpace: "pre-line" }}>{item.value}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Adkomst */}
        <section className="content-section" style={{ background: "#F4F6F8" }}>
          <div style={{ maxWidth: 1200, margin: "0 auto" }}>
            <div style={{ marginBottom: 52 }}>
              <div style={{ fontSize: 11, fontWeight: 600, letterSpacing: "0.18em", textTransform: "uppercase", color: "#40577C", marginBottom: 16 }}>ADKOMST OG PARKERING</div>
              <h2 style={{ fontFamily: "var(--font-heading)", fontSize: 32, fontWeight: 700, color: "#1A1D2E", lineHeight: 1.2 }}>
                Slik finner du oss
              </h2>
            </div>

            <div className="two-col-grid-72">

              {/* Venstre: tekst */}
              <div>
                {/* Inngang */}
                <div style={{ marginBottom: 40 }}>
                  <div style={{ fontSize: 12, fontWeight: 600, letterSpacing: "0.10em", textTransform: "uppercase", color: "#1A1D2E", marginBottom: 12 }}>Inngang</div>
                  <p style={{ fontSize: 16, fontWeight: 300, lineHeight: 1.85, color: "#4A5568" }}>
                    Inngangen er lokalisert på sørsiden av bygget, i retning av Drammenselva. Se etter vår logo ved inngangen.
                  </p>
                </div>

                {/* Parkering */}
                <div style={{ borderTop: "1px solid #E2E8EF", paddingTop: 32 }}>
                  <div style={{ fontSize: 12, fontWeight: 600, letterSpacing: "0.10em", textTransform: "uppercase", color: "#1A1D2E", marginBottom: 12 }}>Parkering</div>
                  <p style={{ fontSize: 16, fontWeight: 300, lineHeight: 1.85, color: "#4A5568", marginBottom: 16 }}>
                    Stor parkeringsplass rett utenfor inngangen.
                  </p>
                  <p style={{ fontSize: 16, fontWeight: 300, lineHeight: 1.85, color: "#4A5568" }}>
                    For øyeblikket er det fri parkering på grunn av bygningsarbeid, men følg gjeldende bestemmelser.
                  </p>
                </div>
              </div>

              {/* Høyre: kart — OpenStreetMap via Leaflet (vises med en gang, ingen sporingscookies, ryddig attribusjon) */}
              <div style={{ borderRadius: 6, overflow: "hidden", border: "1px solid #E2E8EF" }}>
                <MapView />
                <div style={{ padding: "16px 20px", background: "#FAFBFC", borderTop: "1px solid #E2E8EF", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                  <div style={{ fontSize: 14, fontWeight: 400, color: "#1A1D2E" }}>Hotvetalleen 15A, Drammen</div>
                  <a
                    href="https://maps.google.com/?q=Hotvetalleen+15A,+Drammen"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ fontSize: 13, color: "#40577C", textDecoration: "none", borderBottom: "1px solid #40577C", paddingBottom: 1 }}
                  >
                    Åpne i Google Maps →
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
