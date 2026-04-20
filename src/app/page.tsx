import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";
import Services from "@/components/sections/Services";
import AboutSection from "@/components/sections/AboutSection";
import TestimonialsSection from "@/components/sections/TestimonialsSection";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Header />
      <main style={{ flex: 1 }}>
        <Hero />
        <Services />
        <AboutSection />
        <TestimonialsSection />
        <section style={{ background: "#4A6B8A", padding: "64px 48px", textAlign: "center" }}>
          <div style={{ fontSize: 10, fontWeight: 500, letterSpacing: "0.18em", textTransform: "uppercase", color: "rgba(255,255,255,0.65)", marginBottom: 16 }}>
            KLAR FOR Å KOMME I GANG?
          </div>
          <h2 style={{ fontSize: 36, fontWeight: 300, letterSpacing: "0.10em", textTransform: "uppercase", color: "#fff", marginBottom: 28, lineHeight: 1.2 }}>
            BESTILL TIME I DAG
          </h2>
          <Link href="/bestill-time" style={{
            background: "#fff", color: "#4A6B8A", borderRadius: 4,
            fontSize: 12, fontWeight: 500, letterSpacing: "0.12em", textTransform: "uppercase",
            padding: "14px 36px", textDecoration: "none", display: "inline-block",
          }}>
            Bestill time
          </Link>
        </section>
      </main>
      <Footer />
    </>
  );
}
