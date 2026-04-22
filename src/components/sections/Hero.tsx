"use client";

import Link from "next/link";

export default function Hero() {
  return (
    <section style={{
      background: "#2D2F4A",
      minHeight: 560,
      display: "flex", alignItems: "center", justifyContent: "center",
      padding: "96px 48px",
    }}>
      <div style={{ maxWidth: 720, textAlign: "center" }}>
        <div style={{ fontSize: 12, fontWeight: 500, letterSpacing: "0.20em", textTransform: "uppercase", color: "#7A9BB5", marginBottom: 24 }}>
          Privat øyeklinikk · Spesialisthelsetjenester
        </div>

        <h1 style={{ fontSize: 56, fontWeight: 300, letterSpacing: "0.10em", textTransform: "uppercase", color: "#fff", lineHeight: 1.15, marginBottom: 28 }}>
          VI TAR VARE<br />PÅ SYNET DITT
        </h1>

        <p style={{ fontSize: 20, fontWeight: 300, lineHeight: 1.8, color: "rgba(255,255,255,0.7)", marginBottom: 44, maxWidth: 520, margin: "0 auto 44px" }}>
          Undersøkelse, behandling og kirurgi av høy kvalitet. Alle våre leger er godkjente spesialister i øyesykdommer.
        </p>

        <div style={{ display: "flex", gap: 16, justifyContent: "center", flexWrap: "wrap" }}>
          <Link href="/kontakt" style={{
            background: "#4A6B8A", color: "#fff", borderRadius: 4,
            fontSize: 13, fontWeight: 500, letterSpacing: "0.10em", textTransform: "uppercase",
            padding: "16px 40px", textDecoration: "none", transition: "background 200ms",
          }}
            onMouseEnter={e => (e.currentTarget.style.background = "#3A5570")}
            onMouseLeave={e => (e.currentTarget.style.background = "#4A6B8A")}
          >
            Kontakt oss
          </Link>
          <Link href="/tjenester" style={{
            background: "transparent", color: "rgba(255,255,255,0.85)",
            border: "1px solid rgba(255,255,255,0.4)", borderRadius: 4,
            fontSize: 13, fontWeight: 400, letterSpacing: "0.10em", textTransform: "uppercase",
            padding: "16px 40px", textDecoration: "none", transition: "all 200ms",
          }}
            onMouseEnter={e => { e.currentTarget.style.borderColor = "rgba(255,255,255,0.8)"; e.currentTarget.style.color = "#fff"; }}
            onMouseLeave={e => { e.currentTarget.style.borderColor = "rgba(255,255,255,0.4)"; e.currentTarget.style.color = "rgba(255,255,255,0.85)"; }}
          >
            Se tjenester
          </Link>
        </div>
      </div>
    </section>
  );
}
