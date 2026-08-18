// Motif décoratif de cercles concentriques réutilisé comme texture de fond
// (hero, FAQ, Ressources, bandeau CTA) — toujours en arrière-plan du contenu.
// `spin` active la rotation lente continue (voir .compass-mark-spin dans
// index.css), désactivée automatiquement sous prefers-reduced-motion.
export default function CompassMark({ spin = false }) {
  return (
    <div className={`compass-mark${spin ? " compass-mark-spin" : ""}`} aria-hidden="true">
      <svg viewBox="0 0 200 200" fill="none" stroke="currentColor" strokeWidth="0.6">
        <circle cx="100" cy="100" r="98" />
        <circle cx="100" cy="100" r="74" />
        <line x1="100" y1="2" x2="100" y2="198" />
        <line x1="2" y1="100" x2="198" y2="100" />
        <line x1="30" y1="30" x2="170" y2="170" />
        <line x1="170" y1="30" x2="30" y2="170" />
      </svg>
    </div>
  );
}
