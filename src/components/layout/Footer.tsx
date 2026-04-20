"use client";

import Link from "next/link";
import YpsilonLogo from "./YpsilonLogo";

const cols = [
  {
    title: "TJENESTER",
    links: [
      { label: "Øyeundersøkelse", href: "/tjenester" },
      { label: "Laseroperasjon", href: "/tjenester" },
      { label: "Grå stær", href: "/tjenester" },
      { label: "Tørre øyne", href: "/tjenester" },
      { label: "Barneoftalmologi", href: "/tjenester" },
    ],
  },
  {
    title: "KLINIKKEN",
    links: [
      { label: "Om oss", href: "/om-oss" },
      { label: "Priser", href: "/priser" },
      { label: "Kontakt", href: "/kontakt" },
    ],
  },
  {
    title: "KONTAKT",
    links: [
      { label: "+47 22 00 00 00", href: "tel:+4722000000" },
      { label: "post@ypsilonoyeklinikk.no", href: "mailto:post@ypsilonoyeklinikk.no" },
      { label: "Storgata 1, Oslo", href: "/kontakt" },
      { label: "Man–fre 08–16", href: "/kontakt" },
    ],
  },
];

export default function Footer() {
  return (
    <footer style={{ background: "#2D2F4A", color: "#fff", padding: "56px 48px 32px" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        <div style={{ display: "grid", gridTemplateColumns: "2fr 1fr 1fr 1fr", gap: 40, marginBottom: 48 }}>
          <div>
            <div style={{ marginBottom: 20 }}>
              <YpsilonLogo light />
            </div>
            <p style={{ fontSize: 13, fontWeight: 300, lineHeight: 1.7, color: "rgba(255,255,255,0.55)", maxWidth: 260 }}>
              Privat øyeklinikk med spesialisthelsetjenester. Undersøkelse, behandling og kirurgi av høy kvalitet.
            </p>
          </div>
          {cols.map(col => (
            <div key={col.title}>
              <div style={{ fontSize: 10, fontWeight: 500, letterSpacing: "0.16em", textTransform: "uppercase", color: "#7A9BB5", marginBottom: 16 }}>{col.title}</div>
              <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: 8 }}>
                {col.links.map(link => (
                  <li key={link.label}>
                    <Link href={link.href} style={{ fontSize: 13, fontWeight: 300, color: "rgba(255,255,255,0.6)", textDecoration: "none", transition: "color 200ms" }}
                      onMouseEnter={e => (e.currentTarget.style.color = "#fff")}
                      onMouseLeave={e => (e.currentTarget.style.color = "rgba(255,255,255,0.6)")}
                    >{link.label}</Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div style={{ borderTop: "1px solid rgba(255,255,255,0.1)", paddingTop: 24, display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <div style={{ fontSize: 11, color: "rgba(255,255,255,0.35)", letterSpacing: "0.04em" }}>© 2025 Ypsilon Øyeklinikk AS · Org.nr. 000 000 000</div>
          <div style={{ display: "flex", gap: 20 }}>
            <Link href="/personvern" style={{ fontSize: 11, color: "rgba(255,255,255,0.35)", textDecoration: "none" }}>Personvern</Link>
            <Link href="/cookies" style={{ fontSize: 11, color: "rgba(255,255,255,0.35)", textDecoration: "none" }}>Cookies</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
