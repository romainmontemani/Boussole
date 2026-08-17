import { Link } from "react-router-dom";
import { TestiCard } from "./Testimonials.jsx";
import { PROFILES } from "../data/profiles.js";
import { TESTIMONIALS } from "../data/testimonials.js";

// Trois témoignages de profils différents, pour donner un aperçu varié sur
// l'accueil. La liste complète reste sur /parcours (voir Testimonials.jsx).
const FEATURED_IDS = ["lea", "yanis", "ines"];

export default function HomeTestimonials() {
  const featured = FEATURED_IDS.map((id) => TESTIMONIALS.find((t) => t.id === id)).filter(
    Boolean
  );

  return (
    <section className="home-testi-section">
      <div className="wrap">
        <div className="section-head">
          <div className="eyebrow">Parcours</div>
          <h2>Des histoires qui peuvent te parler.</h2>
        </div>
        <div className="home-testi-grid">
          {featured.map((t) => {
            const profile = PROFILES.find((p) => p.id === t.profileId);
            return <TestiCard testimonial={t} profile={profile} key={t.id} />;
          })}
        </div>
        <div className="home-testi-cta">
          <Link to="/parcours" className="btn-ghost">
            Voir tous les parcours
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M5 12h14M13 6l6 6-6 6" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}
