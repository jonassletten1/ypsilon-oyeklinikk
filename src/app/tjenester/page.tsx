import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Services from "@/components/sections/Services";
import type { Metadata } from "next";

export const metadata: Metadata = { title: "Tjenester" };

export default function TjenesterPage() {
  return (
    <>
      <Header />
      <main style={{ flex: 1 }}>
        <section style={{ background: "#2D2F4A", padding: "80px 48px 64px" }}>
          <div style={{ maxWidth: 1200, margin: "0 auto" }}>
            <div style={{ fontSize: 10, fontWeight: 500, letterSpacing: "0.18em", textTransform: "uppercase", color: "#7A9BB5", marginBottom: 16 }}>TJENESTER</div>
            <h1 style={{ fontSize: 48, fontWeight: 300, letterSpacing: "0.10em", textTransform: "uppercase", color: "#fff", lineHeight: 1.1 }}>VÅRE TJENESTER</h1>
          </div>
        </section>
        <Services />
      </main>
      <Footer />
    </>
  );
}
