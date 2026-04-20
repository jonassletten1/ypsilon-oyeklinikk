"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import YpsilonLogo from "./YpsilonLogo";

const links = [
  { label: "Tjenester", href: "/tjenester" },
  { label: "Om oss", href: "/om-oss" },
  { label: "Priser", href: "/priser" },
  { label: "Kontakt", href: "/kontakt" },
];

export default function Header() {
  const pathname = usePathname();

  return (
    <header style={{
      position: "sticky", top: 0, zIndex: 50,
      background: "#fff", borderBottom: "1px solid #E8ECF0",
      display: "flex", alignItems: "center", justifyContent: "space-between",
      padding: "0 48px", height: 68,
    }}>
      <Link href="/" style={{ textDecoration: "none" }}>
        <YpsilonLogo />
      </Link>

      <nav style={{ display: "flex", gap: 32, alignItems: "center" }}>
        {links.map(link => {
          const isActive = pathname === link.href;
          return (
            <Link key={link.href} href={link.href} style={{
              fontSize: 11, fontWeight: 400, letterSpacing: "0.12em",
              textTransform: "uppercase", textDecoration: "none",
              color: isActive ? "#2D2F4A" : "#5A6472",
              borderBottom: isActive ? "1.5px solid #4A6B8A" : "1.5px solid transparent",
              paddingBottom: 2, transition: "color 200ms",
            }}>
              {link.label}
            </Link>
          );
        })}
      </nav>

      <Link href="/bestill-time" style={{
        background: "#4A6B8A", color: "#fff", borderRadius: 4,
        fontSize: 11, fontWeight: 500, letterSpacing: "0.12em", textTransform: "uppercase",
        padding: "10px 22px", textDecoration: "none", transition: "background 200ms",
      }}
        onMouseEnter={e => (e.currentTarget.style.background = "#3A5570")}
        onMouseLeave={e => (e.currentTarget.style.background = "#4A6B8A")}
      >
        Bestill time
      </Link>
    </header>
  );
}
