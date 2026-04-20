const reviews = [
  { name: "Kari S.", text: "Utrolig profesjonell klinikk. Fikk grundig undersøkelse og svar på alle spørsmål.", rating: 5 },
  { name: "Petter L.", text: "Ble operert for grå stær. Alt gikk knirkefritt og synet er mye bedre nå.", rating: 5 },
  { name: "Ingrid M.", text: "Rask time, hyggelig personale og grundig lege. Anbefales på det sterkeste.", rating: 5 },
];

export default function TestimonialsSection() {
  return (
    <section style={{ background: "#F4F6F8", padding: "88px 48px" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        <div style={{ textAlign: "center", marginBottom: 56 }}>
          <div style={{ fontSize: 10, fontWeight: 500, letterSpacing: "0.18em", textTransform: "uppercase", color: "#4A6B8A", marginBottom: 14 }}>PASIENTOPPLEVELSER</div>
          <h2 style={{ fontSize: 38, fontWeight: 300, letterSpacing: "0.08em", textTransform: "uppercase", color: "#2D2F4A" }}>HVA SIER PASIENTENE</h2>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 16 }}>
          {reviews.map(r => (
            <div key={r.name} style={{ background: "#fff", borderRadius: 4, padding: "28px 24px", boxShadow: "0 1px 3px rgba(45,47,74,0.06)" }}>
              <div style={{ color: "#4A6B8A", fontSize: 14, marginBottom: 14, letterSpacing: 2 }}>{"★".repeat(r.rating)}</div>
              <p style={{ fontSize: 15, fontWeight: 300, lineHeight: 1.7, color: "#5A6472", marginBottom: 20, fontStyle: "italic" }}>"{r.text}"</p>
              <div style={{ fontSize: 11, fontWeight: 500, letterSpacing: "0.10em", textTransform: "uppercase", color: "#2D2F4A" }}>{r.name}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
