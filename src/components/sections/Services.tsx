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
        background: "#fff",
        borderRadius: 6,
        padding: "32px 28px",
        boxShadow: hovered
          ? "0 6px 24px rgba(45,47,74,0.11)"
          : "0 1px 4px rgba(45,47,74,0.07)",
        transition: "box-shadow 220ms ease",
        borderTop: `3px solid ${hovered ? "#4A6B8A" : "#E8ECF0"}`,
      }}
    >
      <h3 style={{ fontSize: 17, fontWeight: 500, letterSpacing: "0.04em", textTransform: "uppercase", color: "#2D2F4A", marginBottom: 12, lineHeight: 1.3 }}>
        {service.title}
      </h3>
      <p style={{ fontSize: 16, fontWeight: 300, lineHeight: 1.75, color: "#5A6472" }}>
        {service.desc}
      </p>
    </div>
  );
}

export default function Services() {
  return (
    <section style={{ background: "#F4F6F8", padding: "96px 48px" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        <div style={{ textAlign: "center", marginBottom: 60 }}>
          <div style={{ fontSize: 11, fontWeight: 500, letterSpacing: "0.18em", textTransform: "uppercase", color: "#4A6B8A", marginBottom: 14 }}>HVA VI TILBYR</div>
          <h2 style={{ fontSize: 40, fontWeight: 300, letterSpacing: "0.08em", textTransform: "uppercase", color: "#2D2F4A", lineHeight: 1.15 }}>TJENESTER</h2>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 20 }}>
          {services.map(s => <ServiceCard key={s.id} service={s} />)}
        </div>

        <div style={{ textAlign: "center", marginTop: 44 }}>
          <Link href="/tjenester" style={{
            background: "transparent", color: "#4A6B8A",
            border: "1px solid #4A6B8A", borderRadius: 4,
            fontSize: 13, fontWeight: 500, letterSpacing: "0.10em", textTransform: "uppercase",
            padding: "14px 32px", textDecoration: "none", display: "inline-block",
            transition: "all 200ms",
          }}
            onMouseEnter={e => { e.currentTarget.style.background = "#4A6B8A"; e.currentTarget.style.color = "#fff"; }}
            onMouseLeave={e => { e.currentTarget.style.background = "transparent"; e.currentTarget.style.color = "#4A6B8A"; }}
          >
            Se alle tjenester
          </Link>
        </div>
      </div>
    </section>
  );
}
