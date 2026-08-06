import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import YpsilonLogo from "@/components/layout/YpsilonLogo";
import type { Metadata } from "next";

export const metadata: Metadata = { title: "Personvern" };

const bodyText: React.CSSProperties = {
  fontSize: 17, fontWeight: 300, lineHeight: 1.85, color: "#4A5568",
};

export default function PersonvernPage() {
  return (
    <>
      <Header />
      <main style={{ flex: 1 }}>

        {/* Page header */}
        <section className="page-band" style={{ background: "#40577C" }}>
          <div style={{ maxWidth: 900, margin: "0 auto" }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 20 }}>
              <div style={{ fontSize: 11, fontWeight: 600, letterSpacing: "0.20em", textTransform: "uppercase", color: "#7A9BB5" }}>
                JURIDISK
              </div>
              <YpsilonLogo light large />
            </div>
            <h1 style={{ fontFamily: "var(--font-heading)", fontSize: "clamp(32px, 3.5vw, 48px)", fontWeight: 700, color: "#FAFBFC", lineHeight: 1.15, letterSpacing: "-0.01em" }}>
              Personvern
            </h1>
          </div>
        </section>

        {/* Content */}
        <section className="content-section" style={{ background: "#F4F6F8" }}>
          <div style={{ maxWidth: 760, margin: "0 auto" }}>

            <p style={{ ...bodyText, marginBottom: 56, maxWidth: 580 }}>
              Ypsilon Øyeklinikk AS er behandlingsansvarlig for personopplysninger vi behandler om deg som pasient og besøkende.
            </p>

            {[
              {
                label: "HVILKE OPPLYSNINGER VI SAMLER INN",
                heading: "Personopplysninger vi behandler",
                paragraphs: [
                  "Som helseklinikk behandler vi personopplysninger som er nødvendige for å yte helsehjelp. Dette inkluderer navn, fødselsnummer, kontaktinformasjon, og helseopplysninger som fremgår av din journal.",
                  "Opplysningene samles inn ved henvisning, ved kontakt med klinikken, og under konsultasjoner.",
                ],
              },
              {
                label: "GRUNNLAG FOR BEHANDLING",
                heading: "Lovlig grunnlag",
                paragraphs: [
                  "Vi behandler personopplysninger med grunnlag i helsepersonelloven og pasientjournalloven. Behandling av helseopplysninger er nødvendig for å gi deg forsvarlig helsehjelp.",
                  "For henvendelser via kontaktskjema behandler vi opplysninger basert på ditt samtykke.",
                ],
              },
              {
                label: "LAGRING OG SLETTING",
                heading: "Journalplikt og oppbevaring",
                paragraphs: [
                  "Pasientjournaler oppbevares i minimum 10 år etter siste journalføring, i henhold til pasientjournalloven § 13.",
                  "Opplysninger som ikke er en del av pasientjournalen slettes når formålet med behandlingen er oppfylt.",
                ],
              },
              {
                label: "INFORMASJONSKAPSLER OG KART",
                heading: "Nettsiden og eksterne tjenester",
                paragraphs: [
                  "Nettsiden setter ingen informasjonskapsler for sporing eller analyse.",
                  "På kontakt- og adressesiden tilbyr vi et kart fra Google Maps. Kartet lastes ikke automatisk — det vises først når du selv velger å laste det. Når du gjør det, kan Google sette informasjonskapsler og behandle opplysninger i henhold til Googles egen personvernerklæring.",
                ],
              },
              {
                label: "DINE RETTIGHETER",
                heading: "Rettigheter etter personvernforordningen",
                paragraphs: [
                  "Du har rett til innsyn i opplysninger vi har om deg, rett til å kreve retting av uriktige opplysninger, og rett til å klage til Datatilsynet dersom du mener vi behandler opplysninger i strid med regelverket.",
                  "For å benytte deg av dine rettigheter, ta kontakt med oss på post@ypsilonoyeklinikk.no.",
                ],
              },
              {
                label: "KONTAKT",
                heading: "Behandlingsansvarlig",
                paragraphs: [
                  "Ypsilon Øyeklinikk AS\nHotvetalleen 15A, Drammen\npost@ypsilonoyeklinikk.no",
                  "Datatilsynet kan kontaktes på postkasse@datatilsynet.no eller telefon 22 39 69 00.",
                ],
              },
            ].map((section, idx, arr) => (
              <div key={section.label} style={{
                paddingBottom: idx < arr.length - 1 ? 52 : 0,
                marginBottom: idx < arr.length - 1 ? 52 : 0,
                borderBottom: idx < arr.length - 1 ? "1px solid #E2E8EF" : "none",
              }}>
                <div style={{ fontSize: 11, fontWeight: 600, letterSpacing: "0.16em", textTransform: "uppercase", color: "#40577C", marginBottom: 14 }}>{section.label}</div>
                <h2 style={{ fontFamily: "var(--font-heading)", fontSize: 24, fontWeight: 700, color: "#1A1D2E", marginBottom: 20, lineHeight: 1.25 }}>{section.heading}</h2>
                {section.paragraphs.map((p, i) => (
                  <p key={i} style={{ ...bodyText, marginBottom: i < section.paragraphs.length - 1 ? 16 : 0, whiteSpace: "pre-line" }}>{p}</p>
                ))}
              </div>
            ))}

          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
