"use client";

import { useState } from "react";
import Link from "next/link";

const services = [
  { title: "Øyeundersøkelse", desc: "Grundig undersøkelse av syn og øyehelse hos spesialist. Inkluderer syn, trykk og netthinne." },
  { title: "Laseroperasjon", desc: "Korreksjon av nærsynthet, langsynthet og astigmatisme med moderne LASIK og LASEK." },
  { title: "Grå stær", desc: "Behandling og operasjon av grå stær med linseimplantat. Dagkirurgi." },
  { title: "Tørre øyne", desc: "Utredning og behandling av tørre øyne, irritasjon og sicca-syndrom." },
  { title: "Netthinnediagnostikk", desc: "Avansert bildediagnostikk av netthinnen med OCT og funduskamera." },
  { title: "Barneoftalmologi", desc: "Undersøkelse og behandling av synsproblemer hos barn fra 3 år." },
];

function ServiceRow({ service, index }: { service: typeof services[0]; index: number }) {
  const [hovered, setHovered] = useState(false);
  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        display: "grid",
        gridTemplateColumns: "48px 1fr 2fr",
        gap: 32,
        alignItems: "baseline",
        padding: "28px 0",
        borderBottom: "1px solid #E2E8EF",
        transition: "color 150ms ease",
        cursor: "default",
      }}
    >
      <div style={{
        fontSize: 12, fontWeight: 500, letterSpacing: "0.10em",
        color: hovered ? "#40577C" : "#B0BAC4",
        transition: "color 150ms ease",
      }}>
        0{index + 1}
      </div>
      <div style={{
        fontFamily: "var(--font-heading)",
        fontSize: 20,
        fontWeight: 600,
        color: hovered ? "#40577C" : "#1A1D2E",
        transition: "color 150ms ease",
        lineHeight: 1.3,
      }}>
        {service.title}
      </div>
      <div style={{
        fontSize: 16,
        fontWeight: 300,
        lineHeight: 1.7,
        color: "#4A5568",
      }}>
        {service.desc}
      </div>
    </div>
  );
}

export default function Services() {
  return (
    <section style={{ background: "#F4F6F8", padding: "104px 48px" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        <div style={{ marginBottom: 56 }}>
          <div style={{ fontSize: 11, fontWeight: 600, letterSpacing: "0.18em", textTransform: "uppercase", color: "#40577C", marginBottom: 16 }}>HVA VI TILBYR</div>
          <h2 style={{
            fontFamily: "var(--font-heading)",
            fontSize: 38,
            fontWeight: 700,
            color: "#1A1D2E",
            lineHeight: 1.2,
          }}>
            Spesialisttjenester for øyehelse
          </h2>
        </div>

        <div style={{ borderTop: "1px solid #E2E8EF" }}>
          {services.map((s, i) => <ServiceRow key={s.title} service={s} index={i} />)}
        </div>

        <div style={{ marginTop: 40 }}>
          <Link href="/tjenester" style={{
            display: "inline-flex", alignItems: "center", gap: 8,
            color: "#40577C", fontSize: 14, fontWeight: 500, letterSpacing: "0.06em",
            textDecoration: "none", borderBottom: "1px solid #40577C", paddingBottom: 2,
            transition: "opacity 150ms",
          }}
            onMouseEnter={e => (e.currentTarget.style.opacity = "0.7")}
            onMouseLeave={e => (e.currentTarget.style.opacity = "1")}
          >
            Se alle tjenester →
          </Link>
        </div>
      </div>
    </section>
  );
}
