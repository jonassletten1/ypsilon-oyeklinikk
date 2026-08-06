"use client";

import Link from "next/link";
import YpsilonLogo from "./YpsilonLogo";

export default function Footer() {
  return (
    <footer style={{ background: "#40577C", color: "#fff", padding: "64px 48px 36px" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        <div className="footer-grid">

          {/* Brand */}
          <div>
            <div style={{ marginBottom: 22 }}>
              <YpsilonLogo light large />
            </div>
            <p style={{ fontSize: 15, fontWeight: 300, lineHeight: 1.85, color: "rgba(255,255,255,0.50)", maxWidth: 260 }}>
              Ny og moderne øyeklinikk i Drammen. Offentlig avtale med Helse Sør-Øst. Åpnet 1. juni 2026.
            </p>
          </div>

          {/* Sider */}
          <div>
            <div style={{ fontSize: 10, fontWeight: 600, letterSpacing: "0.18em", textTransform: "uppercase", color: "#7A9BB5", marginBottom: 18 }}>SIDER</div>
            <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: 12 }}>
              {[
                { label: "Åpningstider", href: "/apningstider" },
                { label: "Pasientinformasjon", href: "/pasientinformasjon" },
                { label: "Priser", href: "/priser" },
                { label: "Kontakt", href: "/kontakt" },
              ].map(link => (
                <li key={link.href}>
                  <Link href={link.href} style={{ fontSize: 15, fontWeight: 300, color: "rgba(255,255,255,0.55)", textDecoration: "none", transition: "color 200ms" }}
                    onMouseEnter={e => (e.currentTarget.style.color = "#fff")}
                    onMouseLeave={e => (e.currentTarget.style.color = "rgba(255,255,255,0.55)")}
                  >{link.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Kontakt */}
          <div>
            <div style={{ fontSize: 10, fontWeight: 600, letterSpacing: "0.18em", textTransform: "uppercase", color: "#7A9BB5", marginBottom: 18 }}>KONTAKT</div>
            <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: 12 }}>
              <li style={{ fontSize: 15, fontWeight: 300, color: "rgba(255,255,255,0.55)", lineHeight: 1.6 }}>Hotvetalleen 15A<br />Drammen</li>
              <li>
                <a href="tel:+4733221212" style={{ fontSize: 15, fontWeight: 300, color: "rgba(255,255,255,0.55)", textDecoration: "none", transition: "color 200ms" }}
                  onMouseEnter={e => (e.currentTarget.style.color = "#fff")}
                  onMouseLeave={e => (e.currentTarget.style.color = "rgba(255,255,255,0.55)")}
                >33 22 12 12</a>
              </li>
              <li>
                <a href="mailto:post@ypsilonoyeklinikk.no" style={{ fontSize: 15, fontWeight: 300, color: "rgba(255,255,255,0.55)", textDecoration: "none", transition: "color 200ms" }}
                  onMouseEnter={e => (e.currentTarget.style.color = "#fff")}
                  onMouseLeave={e => (e.currentTarget.style.color = "rgba(255,255,255,0.55)")}
                >post@ypsilonoyeklinikk.no</a>
              </li>
              <li style={{ fontSize: 15, fontWeight: 300, color: "rgba(255,255,255,0.55)" }}>Man–fre 08:00–16:00</li>
            </ul>
          </div>

        </div>
        <div style={{ borderTop: "1px solid rgba(255,255,255,0.08)", paddingTop: 28, display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <div style={{ fontSize: 13, color: "rgba(255,255,255,0.30)", letterSpacing: "0.03em" }}>© 2026 Ypsilon Øyeklinikk AS</div>
          <Link href="/personvern" style={{ fontSize: 13, color: "rgba(255,255,255,0.30)", textDecoration: "none" }}>Personvern</Link>
        </div>
      </div>
    </footer>
  );
}
