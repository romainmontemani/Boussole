// Le tracé officiel du logo Boussole : cercle fin + aiguille diagonale terracotta.
// Ce composant est la SEULE source du logo dans toute l'app — ne jamais redessiner
// l'icône ailleurs, toujours importer <Logo /> pour garantir la cohérence de marque.
export default function Logo({ size = 26, withLabel = true, color = "currentColor" }) {
  return (
    <div className="logo" style={{ fontSize: withLabel ? 20 : 0 }}>
      <svg
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill="none"
        stroke={color}
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <circle cx="12" cy="12" r="9.4" />
        <polygon
          className="logo-needle"
          points="15,9 12.6,12.6 9,15 11.4,11.4"
          fill="var(--terracotta)"
          stroke="none"
        />
      </svg>
      {withLabel && "Boussole"}
    </div>
  );
}
