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
                {/* Kollektivtransport */}
                <div style={{ marginBottom: 40 }}>
                  <div style={{ fontSize: 12, fontWeight: 600, letterSpacing: "0.10em", textTransform: "uppercase", color: "#1A1D2E", marginBottom: 12 }}>Kollektivtransport</div>
                  <p style={{ fontSize: 16, fontWeight: 300, lineHeight: 1.85, color: "#4A5568", marginBottom: 20 }}>
                    Nærmeste holdeplass er <strong style={{ fontWeight: 600, color: "#1A1D2E" }}>Ørengata</strong>, om lag 350 meter fra inngangen. Alle bussene under stopper her.
                  </p>

                  {[
                    { stop: "Ørengata", walk: "ca. 5 min gange" },
                    { stop: "Hamborgstrøm", walk: "ca. 8 min gange" },
                  ].map((h, i, arr) => (
                    <div key={h.stop} style={{
                      display: "flex", justifyContent: "space-between", alignItems: "baseline", gap: 16,
                      padding: "12px 0",
                      borderTop: "1px solid #E2E8EF",
                      borderBottom: i === arr.length - 1 ? "1px solid #E2E8EF" : "none",
                    }}>
                      <span style={{ fontSize: 15, fontWeight: 400, color: "#1A1D2E" }}>{h.stop}</span>
                      <span style={{ fontSize: 14, fontWeight: 300, color: "#7A9BB5", whiteSpace: "nowrap" }}>{h.walk}</span>
                    </div>
                  ))}

                  <div style={{ marginTop: 24 }}>
                    <div style={{ fontSize: 13, fontWeight: 600, color: "#1A1D2E", marginBottom: 6 }}>Fra Bragernes torg</div>
                    <p style={{ fontSize: 16, fontWeight: 300, lineHeight: 1.85, color: "#4A5568" }}>
                      Linje 1 (mot Mjøndalen / Sørensvingen) har avganger cirka hvert 7.–8. minutt på dagtid og bruker cirka 5 minutter til Ørengata fra Bragernes torg. Linje 4 (mot Bera) og linje 5 (mot Vinnes) stopper også på Ørengata. Samlet reisetid ca. 10 minutter fra Bragernes torg.
                    </p>
                  </div>

                  <div style={{ marginTop: 20 }}>
                    <div style={{ fontSize: 13, fontWeight: 600, color: "#1A1D2E", marginBottom: 6 }}>Fra Strømsø torg og Drammen busstasjon</div>
                    <p style={{ fontSize: 16, fontWeight: 300, lineHeight: 1.85, color: "#4A5568" }}>
                      Linje 4 (mot Bera) og linje 5 (mot Vinnes) går direkte til Ørengata uten bytte. Samlet reisetid ca. 15 minutter fra Strømsø torg og Drammen busstasjon. Et alternativ er å ta buss til Bragernes torg og bytte til linje 1.
                    </p>
                  </div>

                  <p style={{ fontSize: 15, fontWeight: 300, lineHeight: 1.8, color: "#7A9BB5", marginTop: 20 }}>
                    Fra Ørengata er det om lag 350 meter å gå til klinikken. Oppdaterte avgangstider finnes i reiseplanleggeren.
                  </p>

                  <div style={{ display: "flex", flexWrap: "wrap", gap: "10px 24px", marginTop: 20 }}>
                    <a href="https://brakar.no/" target="_blank" rel="noopener noreferrer"
                      style={{ fontSize: 14, color: "#40577C", textDecoration: "none", borderBottom: "1px solid #40577C", paddingBottom: 1 }}>
                      Planlegg reisen på brakar.no →
                    </a>
                    <a href="https://brakar.no/rutetabeller/" target="_blank" rel="noopener noreferrer"
                      style={{ fontSize: 14, color: "#40577C", textDecoration: "none", borderBottom: "1px solid #40577C", paddingBottom: 1 }}>
                      Rutetabeller →
                    </a>
                    <a href="https://www.google.com/maps/dir/?api=1&destination=Hotvetalleen+15A,+Drammen&travelmode=transit" target="_blank" rel="noopener noreferrer"
                      style={{ fontSize: 14, color: "#40577C", textDecoration: "none", borderBottom: "1px solid #40577C", paddingBottom: 1 }}>
                      Kollektiv- og gårute i Google Maps →
                    </a>
                  </div>
                </div>

                {/* Inngang */}
                <div style={{ borderTop: "1px solid #E2E8EF", paddingTop: 32, marginBottom: 40 }}>
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
