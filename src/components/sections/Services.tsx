"use client";

import { useState } from "react";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Link from "next/link";

const services = [
  { id: "undersokelse", title: "Øyeundersøkelse", desc: "Grundig undersøkelse av syn og øyehelse hos spesialist. Inkluderer syn, trykk og netthinne." },
  { id: "laser", title: "Laseroperasjon", desc: "Korreksjon av nærsynthet, langsynthet og astigmatisme med moderne LASIK og LASEK." },
  { id: "grastae", title: "Grå stær", desc: "Behandling og operasjon av grå stær med linseimplantat. Dagkirurgi med rask rehabilitering." },
  { id: "torroyne", title: "Tørre øyne", desc: "Utredning og behandling av tørre øyne, irritasjon og sicca-syndrom." },
  { id: "netthinne", title: "Netthinnediagnostikk", desc: "Avansert bildediagnostikk av netthinnen med OCT og funduskamera." },
  { id: "barn", title: "Barneoftalmologi", desc: "Undersøkelse og behandling av synsproblemer hos barn fra 3 år." },
];

function ServiceCard({ service, index }: { service: typeof services[0]; index: number }) {
  const [hovered, setHovered] = useState(false);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        background: hovered
          ? "linear-gradient(160deg, #fff 60%, rgba(74,107,138,0.04) 100%)"
          : "#fff",
        borderRadius: 6,
        padding: "32px 28px",
        boxShadow: hovered
          ? "0 12px 40px rgba(45,47,74,0.13), 0 2px 8px rgba(45,47,74,0.06)"
          : "0 1px 4px rgba(45,47,74,0.07)",
        cursor: "pointer",
        transition: "box-shadow 250ms ease, transform 250ms ease, background 250ms ease",
        transform: hovered ? "translateY(-6px)" : "translateY(0)",
        borderTop: `2px solid ${hovered ? "#4A6B8A" : "transparent"}`,
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Subtle corner accent */}
      <div style={{
        position: "absolute", top: 0, right: 0, width: 60, height: 60,
        background: "radial-gradient(circle at top right, rgba(74,107,138,0.07), transparent 70%)",
        transition: "opacity 250ms",
        opacity: hovered ? 1 : 0,
      }} />

      <div style={{ fontSize: 10, fontWeight: 500, letterSpacing: "0.14em", textTransform: "uppercase", color: "#4A6B8A", marginBottom: 12 }}>TJENESTE</div>
      <h3 style={{ fontSize: 16, fontWeight: 500, letterSpacing: "0.06em", textTransform: "uppercase", color: "#2D2F4A", marginBottom: 12, lineHeight: 1.3 }}>{service.title}</h3>
      <p style={{ fontSize: 14, fontWeight: 300, lineHeight: 1.7, color: "#5A6472", marginBottom: 20 }}>{service.desc}</p>
      <div style={{
        fontSize: 12, color: "#4A6B8A", letterSpacing: "0.04em",
        display: "flex", alignItems: "center", gap: 6, fontWeight: 500,
      }}>
        Les mer
        <motion.span animate={{ x: hovered ? 5 : 0 }} transition={{ duration: 0.2 }}>→</motion.span>
      </div>
    </motion.div>
  );
}

export default function Services() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section style={{ background: "#F4F6F8", padding: "96px 48px" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          style={{ textAlign: "center", marginBottom: 60 }}
        >
          <div style={{ fontSize: 10, fontWeight: 500, letterSpacing: "0.18em", textTransform: "uppercase", color: "#4A6B8A", marginBottom: 14 }}>HVA VI TILBYR</div>
          <h2 style={{ fontSize: 40, fontWeight: 300, letterSpacing: "0.08em", textTransform: "uppercase", color: "#2D2F4A", lineHeight: 1.15 }}>TJENESTER</h2>
        </motion.div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 20 }}>
          {services.map((s, i) => <ServiceCard key={s.id} service={s} index={i} />)}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          style={{ textAlign: "center", marginTop: 44 }}
        >
          <Link href="/tjenester" style={{
            background: "transparent", color: "#4A6B8A",
            border: "1px solid #4A6B8A", borderRadius: 4,
            fontSize: 11, fontWeight: 500, letterSpacing: "0.12em", textTransform: "uppercase",
            padding: "12px 28px", textDecoration: "none", display: "inline-block",
            transition: "all 200ms",
          }}
            onMouseEnter={e => { e.currentTarget.style.background = "#4A6B8A"; e.currentTarget.style.color = "#fff"; }}
            onMouseLeave={e => { e.currentTarget.style.background = "transparent"; e.currentTarget.style.color = "#4A6B8A"; }}
          >
            Se alle tjenester
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
