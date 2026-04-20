"use client";

import Link from "next/link";

export default function Hero() {
  return (
    <section style={{
      background: "#2D2F4A", minHeight: 560,
      display: "flex", alignItems: "center", justifyContent: "center",
      position: "relative", overflow: "hidden", padding: "80px 48px",
    }}>
      <svg style={{ position: "absolute", right: -60, top: "50%", transform: "translateY(-50%)", opacity: 0.06 }}
        width="600" height="400" viewBox="0 0 600 400" fill="none">
        <path d="M20 200 C120 40, 480 40, 580 200 C480 360, 120 360, 20 200Z" stroke="#fff" strokeWidth="2" fill="none" />
        <circle cx="300" cy="200" r="80" stroke="#fff" strokeWidth="2" fill="none" />
      </svg>

      <div style={{ maxWidth: 720, textAlign: "center", position: "relative", zIndex: 1 }}>
        <div style={{ fontSize: 11, fontWeight: 500, letterSpacing: "0.20em", textTransform: "uppercase", color: "#7A9BB5", marginBottom: 24 }}>
          Privat øyeklinikk · Spesialisthelsetjenester
        </div>
        <h1 style={{ fontSize: 58, fontWeight: 300, letterSpacing: "0.10em", textTransform: "uppercase", color: "#fff", lineHeight: 1.1, marginBottom: 28 }}>
          VI TAR VARE<br />PÅ SYNET DITT
        </h1>
        <p style={{ fontSize: 18, fontWeight: 300, lineHeight: 1.75, color: "rgba(255,255,255,0.65)", marginBottom: 40, maxWidth: 520, margin: "0 auto 40px" }}>
          Undersøkelse, behandling og kirurgi av høy kvalitet. Alle våre leger er godkjente spesialister i øyesykdommer.
        </p>
        <div style={{ display: "flex", gap: 16, justifyContent: "center", flexWrap: "wrap" }}>
          <Link href="/bestill-time" style={{
            background: "#4A6B8A", color: "#fff", borderRadius: 4,
            fontSize: 12, fontWeight: 500, letterSpacing: "0.12em", textTransform: "uppercase",
            padding: "14px 36px", textDecoration: "none", transition: "background 200ms",
          }}
            onMouseEnter={e => (e.currentTarget.style.background = "#5A7B9A")}
            onMouseLeave={e => (e.currentTarget.style.background = "#4A6B8A")}
          >
            Bestill time
          </Link>
          <Link href="/tjenester" style={{
            background: "transparent", color: "rgba(255,255,255,0.85)",
            border: "1px solid rgba(255,255,255,0.3)", borderRadius: 4,
            fontSize: 12, fontWeight: 400, letterSpacing: "0.12em", textTransform: "uppercase",
            padding: "14px 36px", textDecoration: "none", transition: "all 200ms",
          }}
            onMouseEnter={e => { e.currentTarget.style.borderColor = "rgba(255,255,255,0.7)"; e.currentTarget.style.color = "#fff"; }}
            onMouseLeave={e => { e.currentTarget.style.borderColor = "rgba(255,255,255,0.3)"; e.currentTarget.style.color = "rgba(255,255,255,0.85)"; }}
          >
            Se tjenester
          </Link>
        </div>
      </div>
    </section>
  );
}
