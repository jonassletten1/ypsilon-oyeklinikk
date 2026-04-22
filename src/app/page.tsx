"use client";

import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";
import Services from "@/components/sections/Services";
import AboutSection from "@/components/sections/AboutSection";
import Link from "next/link";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

function CtaBand() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section style={{
      background: "#4A6B8A",
      padding: "80px 48px 80px",
      textAlign: "center",
      clipPath: "polygon(0 8%, 100% 0%, 100% 100%, 0% 100%)",
      marginTop: -40,
    }}>
      <div ref={ref} style={{ paddingTop: 24 }}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          <div style={{ fontSize: 10, fontWeight: 500, letterSpacing: "0.18em", textTransform: "uppercase", color: "rgba(255,255,255,0.65)", marginBottom: 16 }}>
            HAR DU SPØRSMÅL?
          </div>
          <h2 style={{ fontSize: 36, fontWeight: 300, letterSpacing: "0.10em", textTransform: "uppercase", color: "#fff", marginBottom: 32, lineHeight: 1.2 }}>
            TA KONTAKT MED OSS
          </h2>
          <Link href="/kontakt" style={{
            background: "#fff", color: "#4A6B8A", borderRadius: 4,
            fontSize: 12, fontWeight: 500, letterSpacing: "0.12em", textTransform: "uppercase",
            padding: "14px 36px", textDecoration: "none", display: "inline-block",
            transition: "transform 200ms, box-shadow 200ms",
          }}
            onMouseEnter={e => { e.currentTarget.style.transform = "translateY(-2px)"; e.currentTarget.style.boxShadow = "0 8px 24px rgba(0,0,0,0.15)"; }}
            onMouseLeave={e => { e.currentTarget.style.transform = "translateY(0)"; e.currentTarget.style.boxShadow = "none"; }}
          >
            Kontakt oss
          </Link>
        </motion.div>
      </div>
    </section>
  );
}

export default function Home() {
  return (
    <>
      <Header />
      <main style={{ flex: 1 }}>
        <Hero />
        <Services />
        <AboutSection />
        <CtaBand />
      </main>
      <Footer />
    </>
  );
}
