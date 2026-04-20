"use client";

interface Props {
  light?: boolean;
}

export default function YpsilonLogo({ light = false }: Props) {
  const stroke = light ? "#fff" : "#4A6B8A";
  const textColor = light ? "#fff" : "#2D2F4A";
  const subColor = light ? "rgba(255,255,255,0.6)" : "#6B7B86";

  return (
    <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
      <svg width="32" height="22" viewBox="0 0 32 22" fill="none">
        <path d="M1 11 C7 3, 25 3, 31 11 C25 19, 7 19, 1 11Z" stroke={stroke} strokeWidth="1.5" fill="none" />
        <circle cx="16" cy="11" r="4.5" stroke={stroke} strokeWidth="1.5" fill="none" />
        <line x1="16" y1="11" x2="16" y2="14.5" stroke={stroke} strokeWidth="1.5" strokeLinecap="round" />
        <line x1="13.5" y1="8.2" x2="16" y2="11" stroke={stroke} strokeWidth="1.5" strokeLinecap="round" />
        <line x1="18.5" y1="8.2" x2="16" y2="11" stroke={stroke} strokeWidth="1.5" strokeLinecap="round" />
      </svg>
      <div>
        <div style={{ fontSize: 13, fontWeight: 300, letterSpacing: "0.18em", textTransform: "uppercase", color: textColor, lineHeight: 1.2 }}>Ypsilon</div>
        <div style={{ fontSize: 8, fontWeight: 300, letterSpacing: "0.14em", textTransform: "uppercase", color: subColor, lineHeight: 1 }}>Øyeklinikk</div>
      </div>
    </div>
  );
}
