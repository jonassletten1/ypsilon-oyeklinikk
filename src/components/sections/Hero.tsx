"use client";

import Link from "next/link";

export default function Hero() {
  return (
    <section style={{
      background: "linear-gradient(160deg, #22253A 0%, #2D2F4A 55%, #354060 100%)",
      minHeight: 600,
      display: "flex",
      alignItems: "center",
      padding: "112px 48px",
      position: "relative",
      overflow: "hidden",
    }}>
      {/* subtle decorative circle */}
      <div style={{
        position: "absolute", right: -120, top: -120,
        width: 560, height: 560, borderRadius: "50%",
        background: "rgba(74,107,138,0.12)",
        pointerEvents: "none",
      }} />
      <div style={{
        position: "absolute", right: 80, bottom: -180,
        width: 320, height: 320, borderRadius: "50%",
        background: "rgba(74,107,138,0.07)",
        pointerEvents: "none",
      }} />

      <div style={{ maxWidth: 1200, margin: "0 auto", width: "100%", position: "relative" }}>
        <div style={{ maxWidth: 680 }}>
          <div style={{
            display: "inline-flex", alignItems: "center", gap: 10,
            fontSize: 12, fontWeight: 600, letterSpacing: "0.18em",
            textTransform: "uppercase", color: "#7A9BB5", marginBottom: 28,
          }}>
            <span style={{ display: "inline-block", width: 28, height: 1, background: "#7A9BB5" }} />
            Øyeklinikk · Drammen · Åpnet 1. juni 2026
          </div>

          <h1 style={{
            fontFamily: "var(--font-heading)",
            fontSize: "clamp(40px, 5vw, 62px)",
            fontWeight: 700,
            color: "#FAFBFC",
            lineHeight: 1.2,
            marginBottom: 28,
            letterSpacing: "-0.01em",
          }}>
            Vi tar vare på<br />synet ditt
          </h1>

          <p style={{
            fontSize: 19,
            fontWeight: 300,
            lineHeight: 1.8,
            color: "rgba(250,251,252,0.72)",
            marginBottom: 48,
            maxWidth: 500,
          }}>
            Undersøkelse, behandling og kirurgi av høy kvalitet.
            Alle våre leger er godkjente spesialister i øyesykdommer.
          </p>

          <div style={{ display: "flex", gap: 16, flexWrap: "wrap" }}>
            <Link
              href="/kontakt"
              style={{
                background: "#40577C",
                color: "#FAFBFC",
                borderRadius: 5,
                fontSize: 14,
                fontWeight: 500,
                letterSpacing: "0.08em",
                padding: "17px 44px",
                textDecoration: "none",
                transition: "background var(--transition-base)",
                boxShadow: "0 4px 16px rgba(74,107,138,0.35)",
              }}
              onMouseEnter={e => (e.currentTarget.style.background = "#334363")}
              onMouseLeave={e => (e.currentTarget.style.background = "#40577C")}
            >
              Kontakt oss
            </Link>
            <Link
              href="/pasientinformasjon"
              style={{
                background: "transparent",
                color: "rgba(250,251,252,0.82)",
                border: "1.5px solid rgba(250,251,252,0.28)",
                borderRadius: 5,
                fontSize: 14,
                fontWeight: 400,
                letterSpacing: "0.08em",
                padding: "17px 44px",
                textDecoration: "none",
                transition: "all var(--transition-base)",
              }}
              onMouseEnter={e => { e.currentTarget.style.borderColor = "rgba(250,251,252,0.7)"; e.currentTarget.style.color = "#FAFBFC"; }}
              onMouseLeave={e => { e.currentTarget.style.borderColor = "rgba(250,251,252,0.28)"; e.currentTarget.style.color = "rgba(250,251,252,0.82)"; }}
            >
              Pasientinformasjon
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
