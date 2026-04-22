"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section style={{
      background: "#2D2F4A", minHeight: 600,
      display: "flex", alignItems: "center", justifyContent: "center",
      position: "relative", overflow: "hidden", padding: "80px 48px",
    }}>
      {/* Animated large eye motif */}
      <motion.div
        style={{ position: "absolute", right: -80, top: "50%", translateY: "-50%" }}
        animate={{ rotate: [0, 3, -3, 0], scale: [1, 1.02, 0.98, 1] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
      >
        <svg width="640" height="440" viewBox="0 0 640 440" fill="none" style={{ opacity: 0.07 }}>
          <path d="M20 220 C140 44, 500 44, 620 220 C500 396, 140 396, 20 220Z" stroke="#fff" strokeWidth="2" fill="none" />
          <circle cx="320" cy="220" r="88" stroke="#fff" strokeWidth="2" fill="none" />
          <line x1="320" y1="220" x2="320" y2="264" stroke="#fff" strokeWidth="2" strokeLinecap="round" />
          <line x1="294" y1="195" x2="320" y2="220" stroke="#fff" strokeWidth="2" strokeLinecap="round" />
          <line x1="346" y1="195" x2="320" y2="220" stroke="#fff" strokeWidth="2" strokeLinecap="round" />
        </svg>
      </motion.div>

      {/* Soft top-left glow */}
      <div style={{
        position: "absolute", top: -120, left: -120, width: 480, height: 480,
        borderRadius: "50%", background: "radial-gradient(circle, rgba(74,107,138,0.18) 0%, transparent 70%)",
        pointerEvents: "none",
      }} />

      {/* Gradient fade to next section */}
      <div style={{
        position: "absolute", bottom: 0, left: 0, right: 0, height: 80,
        background: "linear-gradient(to bottom, transparent, #F4F6F8)",
        pointerEvents: "none",
      }} />

      <div style={{ maxWidth: 720, textAlign: "center", position: "relative", zIndex: 1 }}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          style={{ fontSize: 11, fontWeight: 500, letterSpacing: "0.20em", textTransform: "uppercase", color: "#7A9BB5", marginBottom: 24 }}
        >
          Privat øyeklinikk · Spesialisthelsetjenester
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.15, ease: "easeOut" }}
          style={{ fontSize: 62, fontWeight: 300, letterSpacing: "0.10em", textTransform: "uppercase", color: "#fff", lineHeight: 1.1, marginBottom: 28 }}
        >
          VI TAR VARE<br />PÅ SYNET DITT
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
          style={{ fontSize: 18, fontWeight: 300, lineHeight: 1.75, color: "rgba(255,255,255,0.65)", marginBottom: 40, maxWidth: 520, margin: "0 auto 40px" }}
        >
          Undersøkelse, behandling og kirurgi av høy kvalitet. Alle våre leger er godkjente spesialister i øyesykdommer.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.45, ease: "easeOut" }}
          style={{ display: "flex", gap: 16, justifyContent: "center", flexWrap: "wrap" }}
        >
          <Link href="/kontakt" style={{
            background: "#4A6B8A", color: "#fff", borderRadius: 4,
            fontSize: 12, fontWeight: 500, letterSpacing: "0.12em", textTransform: "uppercase",
            padding: "14px 36px", textDecoration: "none", transition: "background 200ms, transform 200ms",
          }}
            onMouseEnter={e => { e.currentTarget.style.background = "#5A7B9A"; e.currentTarget.style.transform = "translateY(-2px)"; }}
            onMouseLeave={e => { e.currentTarget.style.background = "#4A6B8A"; e.currentTarget.style.transform = "translateY(0)"; }}
          >
            Kontakt oss
          </Link>
          <Link href="/tjenester" style={{
            background: "transparent", color: "rgba(255,255,255,0.85)",
            border: "1px solid rgba(255,255,255,0.3)", borderRadius: 4,
            fontSize: 12, fontWeight: 400, letterSpacing: "0.12em", textTransform: "uppercase",
            padding: "14px 36px", textDecoration: "none", transition: "all 200ms",
          }}
            onMouseEnter={e => { e.currentTarget.style.borderColor = "rgba(255,255,255,0.7)"; e.currentTarget.style.color = "#fff"; e.currentTarget.style.transform = "translateY(-2px)"; }}
            onMouseLeave={e => { e.currentTarget.style.borderColor = "rgba(255,255,255,0.3)"; e.currentTarget.style.color = "rgba(255,255,255,0.85)"; e.currentTarget.style.transform = "translateY(0)"; }}
          >
            Se tjenester
          </Link>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.8 }}
          style={{ marginTop: 56, display: "flex", flexDirection: "column", alignItems: "center", gap: 6 }}
        >
          <div style={{ fontSize: 9, letterSpacing: "0.18em", textTransform: "uppercase", color: "rgba(255,255,255,0.3)" }}>Scroll</div>
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
            style={{ width: 1, height: 28, background: "linear-gradient(to bottom, rgba(255,255,255,0.4), transparent)" }}
          />
        </motion.div>
      </div>
    </section>
  );
}
