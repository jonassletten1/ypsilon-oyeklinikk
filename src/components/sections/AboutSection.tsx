import Link from "next/link";

export default function AboutSection() {
  return (
    <section style={{ background: "#FAFBFC", padding: "104px 48px" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1fr", gap: 88, alignItems: "start" }}>
        <div>
          <div style={{ fontSize: 11, fontWeight: 600, letterSpacing: "0.18em", textTransform: "uppercase", color: "#40577C", marginBottom: 18 }}>OM OSS</div>
          <h2 style={{
            fontFamily: "var(--font-heading)",
            fontSize: 38,
            fontWeight: 700,
            color: "#1A1D2E",
            lineHeight: 1.25,
            marginBottom: 32,
          }}>
            En klinikk<br />du kan stole på
          </h2>
          <p style={{ fontSize: 17, fontWeight: 300, lineHeight: 1.85, color: "#4A5568", marginBottom: 20 }}>
            Ypsilon Øyeklinikk er en ny og moderne øyeklinikk i Drammen som åpnet 1. juni 2026. Klinikken drives av avtalespesialistene <strong style={{ fontWeight: 600, color: "#1A1D2E" }}>Jarle Sletten</strong> og <strong style={{ fontWeight: 600, color: "#1A1D2E" }}>Gurpreet Singh Khangura</strong>.
          </p>
          <p style={{ fontSize: 17, fontWeight: 300, lineHeight: 1.85, color: "#4A5568", marginBottom: 20 }}>
            Vi dekker alle områder av øyefaget. Klinikken har egen operasjonsstue og utfører også grå stær-operasjoner.
          </p>
          <p style={{ fontSize: 17, fontWeight: 300, lineHeight: 1.85, color: "#4A5568", marginBottom: 36 }}>
            Vi har offentlig avtale med Helse Sør-Øst. For nye pasienter er det nødvendig med henvisning fra lege, optiker eller helsestasjon.
          </p>
          <Link href="/pasientinformasjon" style={{
            display: "inline-flex", alignItems: "center", gap: 8,
            color: "#40577C", fontSize: 14, fontWeight: 500,
            letterSpacing: "0.06em", textDecoration: "none",
            borderBottom: "1px solid #40577C", paddingBottom: 2,
          }}>
            Les mer om pasientinformasjon →
          </Link>
        </div>

        <div>
          {[
            { label: "Adresse", value: "Hotvetalleen 15A, Drammen" },
            { label: "Offentlig avtale", value: "Helse Sør-Øst" },
            { label: "Spesialitet", value: "Alle områder av øyefaget" },
            { label: "Operasjonsstue", value: "Grå stær og andre inngrep" },
          ].map((item, i) => (
            <div key={item.label} style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: 16,
              padding: "22px 0",
              borderTop: i === 0 ? "1px solid #E2E8EF" : "none",
              borderBottom: "1px solid #E2E8EF",
            }}>
              <div style={{ fontSize: 12, fontWeight: 500, letterSpacing: "0.10em", textTransform: "uppercase", color: "#7A9BB5" }}>{item.label}</div>
              <div style={{ fontSize: 16, fontWeight: 400, color: "#1A1D2E", lineHeight: 1.5 }}>{item.value}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
