"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

const services = ["Øyeundersøkelse", "Laseroperasjon", "Grå stær", "Tørre øyne", "Netthinnediagnostikk"];
const dates = ["Man 12. mai", "Tir 13. mai", "Ons 14. mai", "Tor 15. mai", "Fre 16. mai", "Man 19. mai", "Tir 20. mai", "Ons 21. mai"];
const times = ["08:15", "09:00", "10:30", "13:00", "14:15", "15:30"];

const inputStyle: React.CSSProperties = {
  width: "100%", fontFamily: "var(--font-sans)", fontSize: 14, fontWeight: 300,
  color: "#2D2F4A", background: "#fff", border: "1px solid #D0D7DE",
  borderRadius: 4, padding: "10px 14px", outline: "none", marginTop: 6,
};
const labelStyle: React.CSSProperties = {
  fontSize: 10, fontWeight: 500, letterSpacing: "0.12em", textTransform: "uppercase", color: "#2D2F4A", display: "block",
};

export default function BestillTimePage() {
  const router = useRouter();
  const [step, setStep] = useState(1);
  const [form, setForm] = useState({ service: "", date: "", time: "" });

  return (
    <div style={{ background: "#F4F6F8", minHeight: "100vh", padding: "64px 48px" }}>
      <div style={{ maxWidth: 640, margin: "0 auto" }}>
        <Link href="/" style={{ background: "none", border: "none", color: "#4A6B8A", fontSize: 12, cursor: "pointer", letterSpacing: "0.08em", marginBottom: 32, display: "flex", alignItems: "center", gap: 6, textDecoration: "none" }}>
          ← Tilbake
        </Link>
        <div style={{ fontSize: 10, fontWeight: 500, letterSpacing: "0.18em", textTransform: "uppercase", color: "#4A6B8A", marginBottom: 12 }}>TIMEBESTILLING</div>
        <h1 style={{ fontSize: 36, fontWeight: 300, letterSpacing: "0.10em", textTransform: "uppercase", color: "#2D2F4A", marginBottom: 40, lineHeight: 1.2 }}>BESTILL TIME</h1>

        <div style={{ display: "flex", gap: 8, marginBottom: 40, alignItems: "center" }}>
          {["Tjeneste", "Dato", "Personalia"].map((s, i) => (
            <div key={s} style={{ display: "flex", alignItems: "center", gap: 8 }}>
              <div style={{
                width: 24, height: 24, borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center",
                background: step >= i + 1 ? "#4A6B8A" : "#E8ECF0",
                color: step >= i + 1 ? "#fff" : "#6B7B86", fontSize: 10, fontWeight: 500,
              }}>{i + 1}</div>
              <span style={{ fontSize: 11, letterSpacing: "0.08em", textTransform: "uppercase", color: step === i + 1 ? "#2D2F4A" : "#6B7B86" }}>{s}</span>
              {i < 2 && <div style={{ width: 32, height: 1, background: "#E8ECF0" }} />}
            </div>
          ))}
        </div>

        <div style={{ background: "#fff", borderRadius: 4, padding: "32px 28px", boxShadow: "0 1px 3px rgba(45,47,74,0.06)" }}>
          {step === 1 && (
            <div>
              <div style={{ fontSize: 14, fontWeight: 400, letterSpacing: "0.04em", textTransform: "uppercase", color: "#2D2F4A", marginBottom: 20 }}>Velg tjeneste</div>
              {services.map(s => (
                <div key={s} onClick={() => setForm(f => ({ ...f, service: s }))} style={{
                  padding: "14px 16px", border: `1px solid ${form.service === s ? "#4A6B8A" : "#E8ECF0"}`,
                  borderRadius: 4, marginBottom: 8, cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "space-between",
                  background: form.service === s ? "rgba(74,107,138,0.04)" : "#fff", transition: "all 150ms",
                }}>
                  <span style={{ fontSize: 14, fontWeight: 300, color: "#2D2F4A" }}>{s}</span>
                  {form.service === s && <span style={{ color: "#4A6B8A" }}>✓</span>}
                </div>
              ))}
              <button onClick={() => form.service && setStep(2)} style={{
                width: "100%", marginTop: 16, background: form.service ? "#4A6B8A" : "#D0D7DE", color: "#fff",
                border: "none", borderRadius: 4, padding: "13px", fontSize: 12, fontWeight: 500,
                letterSpacing: "0.12em", textTransform: "uppercase", cursor: form.service ? "pointer" : "default", fontFamily: "var(--font-sans)",
              }}>Neste →</button>
            </div>
          )}

          {step === 2 && (
            <div>
              <div style={{ fontSize: 14, fontWeight: 400, letterSpacing: "0.04em", textTransform: "uppercase", color: "#2D2F4A", marginBottom: 20 }}>Velg dato og tid</div>
              <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 8, marginBottom: 20 }}>
                {dates.map((d, i) => (
                  <div key={d} onClick={() => i !== 2 && setForm(f => ({ ...f, date: d }))} style={{
                    padding: "10px 8px", border: `1px solid ${form.date === d ? "#4A6B8A" : "#E8ECF0"}`,
                    borderRadius: 4, cursor: i === 2 ? "default" : "pointer", textAlign: "center",
                    background: i === 2 ? "#F4F6F8" : form.date === d ? "rgba(74,107,138,0.04)" : "#fff",
                    opacity: i === 2 ? 0.4 : 1, transition: "all 150ms",
                  }}>
                    <div style={{ fontSize: 11, fontWeight: 400, color: "#2D2F4A" }}>{d.split(" ")[0]}</div>
                    <div style={{ fontSize: 12, fontWeight: 300, color: "#5A6472" }}>{d.split(" ").slice(1).join(" ")}</div>
                  </div>
                ))}
              </div>
              {form.date && (
                <div style={{ marginBottom: 20 }}>
                  <div style={{ fontSize: 11, fontWeight: 500, letterSpacing: "0.12em", textTransform: "uppercase", color: "#6B7B86", marginBottom: 10 }}>Ledige tider</div>
                  <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
                    {times.map(t => (
                      <div key={t} onClick={() => setForm(f => ({ ...f, time: t }))} style={{
                        padding: "8px 14px", border: `1px solid ${form.time === t ? "#4A6B8A" : "#E8ECF0"}`,
                        borderRadius: 4, fontSize: 13, color: "#2D2F4A", cursor: "pointer",
                        background: form.time === t ? "rgba(74,107,138,0.06)" : "#F4F6F8", transition: "all 150ms",
                      }}>{t}</div>
                    ))}
                  </div>
                </div>
              )}
              <div style={{ display: "flex", gap: 10 }}>
                <button onClick={() => setStep(1)} style={{ flex: 1, background: "transparent", color: "#5A6472", border: "1px solid #D0D7DE", borderRadius: 4, padding: "13px", fontSize: 12, letterSpacing: "0.08em", textTransform: "uppercase", cursor: "pointer", fontFamily: "var(--font-sans)" }}>← Tilbake</button>
                <button onClick={() => form.date && setStep(3)} style={{ flex: 2, background: form.date ? "#4A6B8A" : "#D0D7DE", color: "#fff", border: "none", borderRadius: 4, padding: "13px", fontSize: 12, fontWeight: 500, letterSpacing: "0.12em", textTransform: "uppercase", cursor: form.date ? "pointer" : "default", fontFamily: "var(--font-sans)" }}>Neste →</button>
              </div>
            </div>
          )}

          {step === 3 && (
            <div>
              <div style={{ fontSize: 14, fontWeight: 400, letterSpacing: "0.04em", textTransform: "uppercase", color: "#2D2F4A", marginBottom: 20 }}>Dine opplysninger</div>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 14, marginBottom: 14 }}>
                <div><label style={labelStyle}>FORNAVN</label><input style={inputStyle} placeholder="Ola" /></div>
                <div><label style={labelStyle}>ETTERNAVN</label><input style={inputStyle} placeholder="Nordmann" /></div>
              </div>
              <div style={{ marginBottom: 14 }}><label style={labelStyle}>E-POST</label><input style={inputStyle} type="email" placeholder="ola@nordmann.no" /></div>
              <div style={{ marginBottom: 24 }}><label style={labelStyle}>TELEFON</label><input style={inputStyle} type="tel" placeholder="+47 900 00 000" /></div>
              <div style={{ background: "#F4F6F8", borderRadius: 4, padding: "16px", marginBottom: 20, fontSize: 13, color: "#5A6472", lineHeight: 1.6 }}>
                <div style={{ fontWeight: 500, color: "#2D2F4A", marginBottom: 4, letterSpacing: "0.04em", textTransform: "uppercase", fontSize: 11 }}>Oppsummering</div>
                <div>Tjeneste: <strong>{form.service}</strong></div>
                <div>Dato: <strong>{form.date}{form.time ? ` kl. ${form.time}` : ""}</strong></div>
              </div>
              <div style={{ display: "flex", gap: 10 }}>
                <button onClick={() => setStep(2)} style={{ flex: 1, background: "transparent", color: "#5A6472", border: "1px solid #D0D7DE", borderRadius: 4, padding: "13px", fontSize: 12, letterSpacing: "0.08em", textTransform: "uppercase", cursor: "pointer", fontFamily: "var(--font-sans)" }}>← Tilbake</button>
                <button onClick={() => setStep(4)} style={{ flex: 2, background: "#4A6B8A", color: "#fff", border: "none", borderRadius: 4, padding: "13px", fontSize: 12, fontWeight: 500, letterSpacing: "0.12em", textTransform: "uppercase", cursor: "pointer", fontFamily: "var(--font-sans)" }}>Bekreft time</button>
              </div>
            </div>
          )}

          {step === 4 && (
            <div style={{ textAlign: "center", padding: "16px 0" }}>
              <div style={{ width: 56, height: 56, borderRadius: "50%", background: "rgba(74,107,138,0.1)", display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 20px" }}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#4A6B8A" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="20 6 9 17 4 12" />
                </svg>
              </div>
              <div style={{ fontSize: 14, fontWeight: 500, letterSpacing: "0.10em", textTransform: "uppercase", color: "#2D2F4A", marginBottom: 10 }}>Time bekreftet</div>
              <p style={{ fontSize: 14, fontWeight: 300, lineHeight: 1.7, color: "#5A6472", marginBottom: 24 }}>
                Vi sender en bekreftelse til din e-post. Du vil også motta en påminnelse dagen før timen.
              </p>
              <Link href="/" style={{ background: "#4A6B8A", color: "#fff", border: "none", borderRadius: 4, padding: "12px 28px", fontSize: 11, fontWeight: 500, letterSpacing: "0.12em", textTransform: "uppercase", cursor: "pointer", textDecoration: "none", display: "inline-block" }}>
                Tilbake til forsiden
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
