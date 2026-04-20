"use client";

import { useState } from "react";
import Link from "next/link";

const services = [
  { id: "undersokelse", title: "Øyeundersøkelse", desc: "Grundig undersøkelse av syn og øyehelse hos spesialist. Inkluderer syn, trykk og netthinne." },
  { id: "laser", title: "Laseroperasjon", desc: "Korreksjon av nærsynthet, langsynthet og astigmatisme med moderne LASIK og LASEK." },
  { id: "grastae", title: "Grå stær", desc: "Behandling og operasjon av grå stær med linseimplantat. Dagkirurgi med rask rehabilitering." },
  { id: "torroyne", title: "Tørre øyne", desc: "Utredning og behandling av tørre øyne, irritasjon og sicca-syndrom." },
  { id: "netthinne", title: "Netthinnediagnostikk", desc: "Avansert bildediagnostikk av netthinnen med OCT og funduskamera." },
  { id: "barn", title: "Barneoftalmologi", desc: "Undersøkelse og behandling av synsproblemer hos barn fra 3 år." },
];

function ServiceCard({ service }: { service: typeof services[0] }) {
  const [hovered, setHovered] = useState(false);
  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        background: "#fff", borderRadius: 4, padding: "28px 24px",
        boxShadow: hovered ? "0 4px 16px rgba(45,47,74,0.10)" : "0 1px 3px rgba(45,47,74,0.06)",
        cursor: "pointer", transition: "box-shadow 200ms ease",
        borderTop: `2px solid ${hovered ? "#4A6B8A" : "transparent"}`,
      }}
    >
      <div style={{ fontSize: 10, fontWeight: 500, letterSpacing: "0.14em", textTransform: "uppercase", color: "#4A6B8A", marginBottom: 10 }}>TJENESTE</div>
      <h3 style={{ fontSize: 16, fontWeight: 400, letterSpacing: "0.06em", textTransform: "uppercase", color: "#2D2F4A", marginBottom: 10, lineHeight: 1.3 }}>{service.title}</h3>
      <p style={{ fontSize: 14, fontWeight: 300, lineHeight: 1.65, color: "#5A6472", marginBottom: 16 }}>{service.desc}</p>
      <div style={{ fontSize: 12, color: "#4A6B8A", letterSpacing: "0.04em", display: "flex", alignItems: "center", gap: 4 }}>
        Les mer <span style={{ transition: "transform 200ms", transform: hovered ? "translateX(4px)" : "none" }}>→</span>
      </div>
    </div>
  );
}

export default function Services() {
  return (
    <section style={{ background: "#F4F6F8", padding: "88px 48px" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        <div style={{ textAlign: "center", marginBottom: 56 }}>
          <div style={{ fontSize: 10, fontWeight: 500, letterSpacing: "0.18em", textTransform: "uppercase", color: "#4A6B8A", marginBottom: 14 }}>HVA VI TILBYR</div>
          <h2 style={{ fontSize: 38, fontWeight: 300, letterSpacing: "0.08em", textTransform: "uppercase", color: "#2D2F4A", lineHeight: 1.15 }}>TJENESTER</h2>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 16 }}>
          {services.map(s => <ServiceCard key={s.id} service={s} />)}
        </div>
        <div style={{ textAlign: "center", marginTop: 40 }}>
          <Link href="/tjenester" style={{
            background: "transparent", color: "#4A6B8A",
            border: "1px solid #4A6B8A", borderRadius: 4,
            fontSize: 11, fontWeight: 500, letterSpacing: "0.12em", textTransform: "uppercase",
            padding: "12px 28px", textDecoration: "none", display: "inline-block",
          }}>
            Se alle tjenester
          </Link>
        </div>
      </div>
    </section>
  );
}
