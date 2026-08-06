import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import YpsilonLogo from "@/components/layout/YpsilonLogo";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = { title: "Pasientinformasjon" };

export default function PasientinformasjonPage() {
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
              Pasientinformasjon
            </h1>
          </div>
        </section>

        {/* Content */}
        <section className="content-section" style={{ background: "#F4F6F8" }}>
          <div style={{ maxWidth: 720, margin: "0 auto" }}>

            {/* Henvisning */}
            <div style={{ paddingBottom: 60, marginBottom: 60, borderBottom: "1px solid #D8E0E8" }}>
              <h2 style={{ fontFamily: "var(--font-heading)", fontSize: "clamp(24px, 2.5vw, 32px)", fontWeight: 400, color: "#1A1D2E", marginBottom: 28, lineHeight: 1.3 }}>
                Slik får du time hos oss
              </h2>
              <p style={{ fontSize: 18, fontWeight: 300, lineHeight: 1.8, color: "#2D3748", marginBottom: 20 }}>
                For nye pasienter er det nødvendig med henvisning fra <strong style={{ fontWeight: 600 }}>lege, optiker eller helsestasjon</strong>. Bakgrunnen for henvisning skal være mistanke om en sykdom eller tilstand som krever behandling eller oppfølging av øyelege.
              </p>
              <p style={{ fontSize: 16, fontWeight: 300, lineHeight: 1.85, color: "#4A5568", marginBottom: 16 }}>
                Når vi har mottatt henvisningen blir den vurdert og prioritert etter en felles veileder for hvordan man skal prioritere de ulike symptomer og tilstander i Norge. Tilstander hvor det er fare for varig synsreduksjon eller tap av syn blir prioritert raskt, mens andre tilstander som kan vente blir satt på venteliste.
              </p>
              <p style={{ fontSize: 16, fontWeight: 300, lineHeight: 1.85, color: "#4A5568", marginBottom: 16 }}>
                Dersom din tilstand endrer seg i løpet av ventetiden, eller du synes det er lenge å vente, kan du ta kontakt igjen med din optiker eller fastlege.
              </p>
              <p style={{ fontSize: 16, fontWeight: 300, lineHeight: 1.85, color: "#4A5568" }}>
                Dersom du er ny pasient hos oss, er det fint om vi kan få oversendt tidligere journal.
              </p>
            </div>

            {/* Time */}
            <div style={{ paddingBottom: 60, marginBottom: 60, borderBottom: "1px solid #D8E0E8" }}>
              <h2 style={{ fontFamily: "var(--font-heading)", fontSize: "clamp(24px, 2.5vw, 32px)", fontWeight: 400, color: "#1A1D2E", marginBottom: 28, lineHeight: 1.3 }}>
                Time hos oss
              </h2>
              <p style={{ fontSize: 18, fontWeight: 300, lineHeight: 1.8, color: "#2D3748", marginBottom: 20 }}>
                Time tildeles etter at vi har mottatt og vurdert din henvisning. Du vil bli kontaktet med tidspunkt for time — som regel via SMS.
              </p>
              <p style={{ fontSize: 16, fontWeight: 300, lineHeight: 1.85, color: "#4A5568", marginBottom: 16 }}>
                Avtalt time må avbestilles senest <strong style={{ fontWeight: 600, color: "#1A1D2E" }}>24 timer (virkedager)</strong> før den planlagte timen. Ved senere avbestilling vil det sendes ut et gebyr på <strong style={{ fontWeight: 600, color: "#1A1D2E" }}>kr 474,–</strong> på ikke benyttet time.
              </p>
              <p style={{ fontSize: 16, fontWeight: 300, lineHeight: 1.85, color: "#4A5568", marginBottom: 16 }}>
                For å avbestille time sender du helst en e-post til <a href="mailto:post@ypsilonoyeklinikk.no" style={{ color: "#40577C", textDecoration: "none", borderBottom: "1px solid #40577C" }}>post@ypsilonoyeklinikk.no</a>, eventuelt ringer du oss. <strong style={{ fontWeight: 600, color: "#1A1D2E" }}>Ikke oppgi sensitiv informasjon på e-post.</strong>
              </p>
              <p style={{ fontSize: 16, fontWeight: 300, lineHeight: 1.85, color: "#4A5568", marginBottom: 28 }}>
                Du kan også benytte avbestillingsskjemaet på kontaktsiden.
              </p>
              <Link href="/kontakt" style={{
                color: "#40577C", fontSize: 14, fontWeight: 500,
                letterSpacing: "0.05em", textDecoration: "none",
                borderBottom: "1px solid #40577C", paddingBottom: 2,
              }}>
                Avbestill time via kontaktskjema →
              </Link>
            </div>

            {/* Selvinnsjekk og betaling */}
            <div style={{ paddingBottom: 60, marginBottom: 60, borderBottom: "1px solid #D8E0E8" }}>
              <h2 style={{ fontFamily: "var(--font-heading)", fontSize: "clamp(24px, 2.5vw, 32px)", fontWeight: 400, color: "#1A1D2E", marginBottom: 28, lineHeight: 1.3 }}>
                Selvinnsjekk og betaling
              </h2>
              <p style={{ fontSize: 18, fontWeight: 300, lineHeight: 1.8, color: "#2D3748", marginBottom: 20 }}>
                Ved ankomst kan du selv gi beskjed om at du har møtt opp. Dette gjør du i en av våre selvinnsjekkautomater ved inngangen.
              </p>
              <p style={{ fontSize: 16, fontWeight: 300, lineHeight: 1.85, color: "#4A5568" }}>
                Etter timen kan du også betale på disse automatene, eventuelt via e-faktura eller SMS-lenke for betaling.
              </p>
            </div>

            {/* Brilleseddel */}
            <div style={{ paddingBottom: 60, marginBottom: 60, borderBottom: "1px solid #D8E0E8" }}>
              <h2 style={{ fontFamily: "var(--font-heading)", fontSize: "clamp(24px, 2.5vw, 32px)", fontWeight: 400, color: "#1A1D2E", marginBottom: 28, lineHeight: 1.3 }}>
                Brilleseddel og styrker
              </h2>
              <p style={{ fontSize: 16, fontWeight: 300, lineHeight: 1.85, color: "#4A5568", marginBottom: 16 }}>
                Vi gir kun ut brillesedler til barn som følges av øyelege for amblyopibehandling. Nøyaktig utmåling av brillestyrker til voksne og store barn er ikke noe vi prioriterer i offentlig helsevesen.
              </p>
              <p style={{ fontSize: 16, fontWeight: 300, lineHeight: 1.85, color: "#4A5568" }}>
                Oppsøk optiker dersom du mistenker at du trenger briller eller kontaktlinser.
              </p>
            </div>

            {/* Én spesialist */}
            <div style={{ paddingBottom: 60, marginBottom: 60, borderBottom: "1px solid #D8E0E8" }}>
              <h2 style={{ fontFamily: "var(--font-heading)", fontSize: "clamp(24px, 2.5vw, 32px)", fontWeight: 400, color: "#1A1D2E", marginBottom: 28, lineHeight: 1.3 }}>
                Hold deg til én spesialist
              </h2>
              <p style={{ fontSize: 16, fontWeight: 300, lineHeight: 1.85, color: "#4A5568" }}>
                Du bør holde deg til en og samme øyelege så langt det er mulig. Det er unødvendig bruk av ressurser dersom du blir henvist til ulike kontorer. Din tidligere øyelege sitter på viktig informasjon og vil ha sammenligningsgrunnlag som en ny spesialist ikke innehar. Husk å informere din henviser om hvilken øyelege du har vært hos tidligere.
              </p>
            </div>

            {/* Grå stær */}
            <div>
              <h2 style={{ fontFamily: "var(--font-heading)", fontSize: "clamp(24px, 2.5vw, 32px)", fontWeight: 400, color: "#1A1D2E", marginBottom: 28, lineHeight: 1.3 }}>
                Grå stær-operasjon
              </h2>
              <p style={{ fontSize: 18, fontWeight: 300, lineHeight: 1.8, color: "#2D3748", marginBottom: 16 }}>
                Klinikken har egen operasjonsstue og utfører grå stær-operasjoner. Operasjonen gjennomføres som dagkirurgi.
              </p>
              <p style={{ fontSize: 16, fontWeight: 300, lineHeight: 1.85, color: "#4A5568" }}>
                Detaljert informasjon om forberedelser og etterbehandling vil bli gjennomgått i forkant av operasjonen.
              </p>
            </div>

          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
