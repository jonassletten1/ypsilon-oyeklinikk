"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import YpsilonLogo from "./YpsilonLogo";

const links = [
  { label: "Åpningstider", href: "/apningstider" },
  { label: "Pasientinformasjon", href: "/pasientinformasjon" },
  { label: "Priser", href: "/priser" },
  { label: "Kontakt", href: "/kontakt" },
];

export default function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <>
      <header style={{
        position: "sticky", top: 0, zIndex: 50,
        background: "rgba(250,251,252,0.97)",
        backdropFilter: "blur(8px)",
        borderBottom: "1px solid #E2E8EF",
        display: "flex", alignItems: "center", justifyContent: "space-between",
        padding: "0 48px", height: 76,
        boxShadow: "0 1px 3px rgba(45,47,74,0.05)",
      }}>
        <Link href="/" style={{ textDecoration: "none" }} onClick={() => setOpen(false)}>
          <YpsilonLogo />
        </Link>

        {/* Desktop nav */}
        <nav className="header-nav">
          {links.map(link => {
            const isActive = pathname === link.href;
            return (
              <Link key={link.href} href={link.href} style={{
                fontSize: 14,
                fontWeight: isActive ? 500 : 400,
                letterSpacing: "0.03em",
                textDecoration: "none",
                color: isActive ? "#1A1D2E" : "#4A5568",
                borderBottom: isActive ? "2px solid #40577C" : "2px solid transparent",
                paddingBottom: 2,
                transition: "color var(--transition-fast)",
              }}
                onMouseEnter={e => { if (!isActive) e.currentTarget.style.color = "#1A1D2E"; }}
                onMouseLeave={e => { if (!isActive) e.currentTarget.style.color = "#4A5568"; }}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        <Link href="/kontakt" className="header-cta" style={{
          background: "#40577C", color: "#FAFBFC",
          borderRadius: 5,
          fontSize: 13, fontWeight: 500, letterSpacing: "0.06em",
          padding: "11px 26px", textDecoration: "none",
          transition: "background var(--transition-base)",
          boxShadow: "0 2px 8px rgba(74,107,138,0.25)",
        }}
          onMouseEnter={e => (e.currentTarget.style.background = "#334363")}
          onMouseLeave={e => (e.currentTarget.style.background = "#40577C")}
        >
          Kontakt oss
        </Link>

        {/* Hamburger — only visible on mobile via CSS */}
        <button
          className="nav-hamburger"
          onClick={() => setOpen(v => !v)}
          style={{
            background: "none", border: "none", cursor: "pointer",
            padding: 8, flexDirection: "column",
            gap: 5, alignItems: "center", justifyContent: "center",
          }}
          aria-label={open ? "Lukk meny" : "Åpne meny"}
        >
          <span style={{ display: "block", width: 22, height: 2, background: "#1A1D2E", borderRadius: 2, transition: "all 200ms", transform: open ? "translateY(7px) rotate(45deg)" : "none" }} />
          <span style={{ display: "block", width: 22, height: 2, background: "#1A1D2E", borderRadius: 2, transition: "all 200ms", opacity: open ? 0 : 1 }} />
          <span style={{ display: "block", width: 22, height: 2, background: "#1A1D2E", borderRadius: 2, transition: "all 200ms", transform: open ? "translateY(-7px) rotate(-45deg)" : "none" }} />
        </button>
      </header>

      {/* Mobile menu overlay — completely outside header flex */}
      {open && (
        <div style={{
          position: "fixed", top: 76, left: 0, right: 0, bottom: 0,
          background: "rgba(250,251,252,0.99)",
          zIndex: 49,
          display: "flex", flexDirection: "column",
          padding: "16px 0",
          borderTop: "1px solid #E2E8EF",
        }}>
          {links.map(link => {
            const isActive = pathname === link.href;
            return (
              <Link key={link.href} href={link.href}
                onClick={() => setOpen(false)}
                style={{
                  fontSize: 18,
                  fontWeight: isActive ? 500 : 300,
                  color: isActive ? "#1A1D2E" : "#4A5568",
                  textDecoration: "none",
                  padding: "18px 28px",
                  borderBottom: "1px solid #E2E8EF",
                  display: "block",
                }}
              >
                {link.label}
              </Link>
            );
          })}
          <div style={{ padding: "24px 28px" }}>
            <Link href="/kontakt" onClick={() => setOpen(false)} style={{
              display: "inline-block",
              background: "#40577C", color: "#fff",
              borderRadius: 5, padding: "14px 28px",
              fontSize: 15, fontWeight: 500, textDecoration: "none",
            }}>
              Kontakt oss
            </Link>
          </div>
        </div>
      )}
    </>
  );
}
