import { forwardRef } from "react";

// Visuel carré généré côté client (html-to-image) pour le partage du résultat
// du quiz. Couleurs en dur (pas de var(--...)) : le clonage DOM fait par
// html-to-image ne garantit pas de résoudre les custom properties CSS, donc
// on fige ici les mêmes valeurs que src/index.css pour rester fidèle à la charte.
const PROFILE_HEX = {
  analytique: "#3D3562",
  relationnel: "#8FA998",
  creatif: "#E07A5F",
  stratege: "#2A2447",
  "manuel-artisanal": "#B85A42"
};

const SIZE = 600;

function firstSentence(text) {
  const cut = text.split(". ")[0].trim();
  return cut.endsWith(".") ? cut : `${cut}.`;
}

function ShareableResult({ profile, siteUrl }, ref) {
  const accent = PROFILE_HEX[profile.id] || "#3D3562";

  return (
    <div
      ref={ref}
      style={{
        width: SIZE,
        height: SIZE,
        boxSizing: "border-box",
        position: "relative",
        overflow: "hidden",
        background: "#FBF9F6",
        fontFamily: "'Inter', sans-serif",
        color: "#2E2B33",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        padding: 52
      }}
    >
      <svg
        viewBox="0 0 200 200"
        fill="none"
        stroke="#3D3562"
        strokeWidth="0.6"
        style={{ position: "absolute", top: -60, right: -70, width: 320, height: 320, opacity: 0.08 }}
      >
        <circle cx="100" cy="100" r="98" />
        <circle cx="100" cy="100" r="74" />
        <line x1="100" y1="2" x2="100" y2="198" />
        <line x1="2" y1="100" x2="198" y2="100" />
        <line x1="30" y1="30" x2="170" y2="170" />
        <line x1="170" y1="30" x2="30" y2="170" />
      </svg>

      <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
        <svg
          width="28" height="28" viewBox="0 0 24 24" fill="none"
          stroke="#2A2447" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"
        >
          <circle cx="12" cy="12" r="9.4" />
          <polygon points="15,9 12.6,12.6 9,15 11.4,11.4" fill="#E07A5F" stroke="none" />
        </svg>
        <span style={{ fontFamily: "'Sora', sans-serif", fontWeight: 700, fontSize: 22, color: "#2A2447", letterSpacing: "0.01em" }}>
          Boussole
        </span>
      </div>

      <div>
        <div style={{
          display: "flex", alignItems: "center", gap: 8, fontSize: 13, fontWeight: 600,
          letterSpacing: "0.08em", textTransform: "uppercase", color: "#8FA998", marginBottom: 18
        }}>
          <span style={{ width: 22, height: 1, background: "#8FA998", display: "inline-block" }} />
          Ton profil d'orientation
        </div>
        <div style={{
          display: "inline-flex", alignItems: "center", fontSize: 15, fontWeight: 600, color: "#fff",
          background: accent, padding: "7px 18px", borderRadius: 20, letterSpacing: "0.02em", marginBottom: 24
        }}>
          Profil {profile.label}
        </div>
        <p style={{
          fontFamily: "'Sora', sans-serif", fontSize: 28, fontWeight: 700, lineHeight: 1.32,
          color: "#2A2447", margin: 0
        }}>
          {firstSentence(profile.description)}
        </p>
      </div>

      <div style={{
        fontSize: 13, color: "#6B6675", borderTop: "1px solid #E4DFD8", paddingTop: 16, textAlign: "center"
      }}>
        {siteUrl}
      </div>
    </div>
  );
}

export default forwardRef(ShareableResult);
