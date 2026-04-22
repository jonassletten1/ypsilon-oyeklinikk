"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export default function AboutSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section style={{ background: "#fff", padding: "96px 48px" }}>
      <div ref={ref} style={{ maxWidth: 1200, margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1fr", gap: 80, alignItems: "center" }}>
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          <div style={{ fontSize: 10, fontWeight: 500, letterSpacing: "0.18em", textTransform: "uppercase", color: "#4A6B8A", marginBottom: 16 }}>OM OSS</div>
          <h2 style={{ fontSize: 38, fontWeight: 300, letterSpacing: "0.08em", textTransform: "uppercase", color: "#2D2F4A", lineHeight: 1.2, marginBottom: 24 }}>
            EN KLINIKK<br />DU KAN STOLE PÅ
          </h2>
          <p style={{ fontSize: 16, fontWeight: 300, lineHeight: 1.75, color: "#5A6472", marginBottom: 20 }}>
            Ypsilon Øyeklinikk ble etablert med ett mål: å gi pasienter tilgang til øyespesialisttjenester av høyeste kvalitet, uten unødvendig ventetid.
          </p>
          <p style={{ fontSize: 16, fontWeight: 300, lineHeight: 1.75, color: "#5A6472" }}>
            Alle våre leger er godkjente spesialister med bred erfaring fra både offentlig og privat sektor.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
          style={{
            background: "linear-gradient(135deg, #F4F6F8 0%, #EAECF0 100%)",
            borderRadius: 8, height: 380,
            display: "flex", alignItems: "center", justifyContent: "center",
            border: "1px solid #E8ECF0",
            position: "relative", overflow: "hidden",
          }}
        >
          {/* Decorative gradient circles */}
          <div style={{ position: "absolute", top: -40, right: -40, width: 200, height: 200, borderRadius: "50%", background: "radial-gradient(circle, rgba(74,107,138,0.08) 0%, transparent 70%)" }} />
          <div style={{ position: "absolute", bottom: -30, left: -30, width: 160, height: 160, borderRadius: "50%", background: "radial-gradient(circle, rgba(45,47,74,0.05) 0%, transparent 70%)" }} />
          <div style={{ textAlign: "center", position: "relative", zIndex: 1 }}>
            <svg width="64" height="44" viewBox="0 0 64 44" fill="none" style={{ opacity: 0.18 }}>
              <path d="M2 22 C14 4, 50 4, 62 22 C50 40, 14 40, 2 22Z" stroke="#2D2F4A" strokeWidth="2" fill="none" />
              <circle cx="32" cy="22" r="9" stroke="#2D2F4A" strokeWidth="2" fill="none" />
            </svg>
            <div style={{ fontSize: 11, color: "#6B7B86", letterSpacing: "0.08em", marginTop: 12, textTransform: "uppercase" }}>Bilde — Klinikkinteriør</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
