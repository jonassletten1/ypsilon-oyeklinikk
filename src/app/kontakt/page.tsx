import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import type { Metadata } from "next";

export const metadata: Metadata = { title: "Kontakt" };

const infoItems = [
  { title: "Besøksadresse", value: "Storgata 1, 3. etasje\n0155 Oslo" },
  { title: "Telefon", value: "+47 22 00 00 00" },
  { title: "E-post", value: "post@ypsilonoyeklinikk.no" },
  { title: "Åpningstider", value: "Mandag–fredag\n08:00–16:00" },
];

const inputStyle: React.CSSProperties = {
  width: "100%", fontFamily: "var(--font-sans)", fontSize: 14, fontWeight: 300,
  color: "#2D2F4A", background: "#fff", border: "1px solid #D0D7DE",
  borderRadius: 4, padding: "10px 14px", outline: "none",
};

export default function KontaktPage() {
  return (
    <>
      <Header />
      <main style={{ flex: 1, background: "#F4F6F8", padding: "64px 48px" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <div style={{ fontSize: 10, fontWeight: 500, letterSpacing: "0.18em", textTransform: "uppercase", color: "#4A6B8A", marginBottom: 12 }}>KONTAKT</div>
          <h1 style={{ fontSize: 40, fontWeight: 300, letterSpacing: "0.10em", textTransform: "uppercase", color: "#2D2F4A", marginBottom: 48, lineHeight: 1.2 }}>KONTAKT OSS</h1>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 32 }}>
            <div style={{ background: "#fff", borderRadius: 4, padding: "32px 28px", boxShadow: "0 1px 3px rgba(45,47,74,0.06)" }}>
              <h3 style={{ fontSize: 14, fontWeight: 500, letterSpacing: "0.10em", textTransform: "uppercase", color: "#2D2F4A", marginBottom: 24 }}>Send melding</h3>
              {([["NAVN", "text", "Ditt navn"], ["E-POST", "email", "din@epost.no"], ["TELEFON", "tel", "+47 000 00 000"]] as [string, string, string][]).map(([lbl, type, ph]) => (
                <div key={lbl} style={{ marginBottom: 14 }}>
                  <label style={{ display: "block", fontSize: 10, fontWeight: 500, letterSpacing: "0.12em", textTransform: "uppercase", color: "#2D2F4A", marginBottom: 6 }}>{lbl}</label>
                  <input type={type} placeholder={ph} style={inputStyle} />
                </div>
              ))}
              <div style={{ marginBottom: 20 }}>
                <label style={{ display: "block", fontSize: 10, fontWeight: 500, letterSpacing: "0.12em", textTransform: "uppercase", color: "#2D2F4A", marginBottom: 6 }}>MELDING</label>
                <textarea rows={4} style={{ ...inputStyle, resize: "vertical" }} />
              </div>
              <button style={{ width: "100%", background: "#4A6B8A", color: "#fff", border: "none", borderRadius: 4, padding: "13px", fontSize: 11, fontWeight: 500, letterSpacing: "0.12em", textTransform: "uppercase", cursor: "pointer", fontFamily: "var(--font-sans)" }}>
                Send melding
              </button>
            </div>
            <div>
              {infoItems.map(item => (
                <div key={item.title} style={{ background: "#fff", borderRadius: 4, padding: "20px 24px", boxShadow: "0 1px 3px rgba(45,47,74,0.06)", marginBottom: 12 }}>
                  <div style={{ fontSize: 10, fontWeight: 500, letterSpacing: "0.14em", textTransform: "uppercase", color: "#4A6B8A", marginBottom: 8 }}>{item.title}</div>
                  <div style={{ fontSize: 14, fontWeight: 300, lineHeight: 1.65, color: "#2D2F4A", whiteSpace: "pre-line" }}>{item.value}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
