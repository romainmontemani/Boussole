import { Link, useNavigate } from "react-router-dom";
import heroImg from "../assets/images/hero.jpg";

export default function Hero() {
  const navigate = useNavigate();

  return (
    <section className="hero" id="accueil">
      <div className="compass-mark">
        <svg viewBox="0 0 200 200" fill="none" stroke="#3D3562" strokeWidth="0.6">
          <circle cx="100" cy="100" r="98" />
          <circle cx="100" cy="100" r="74" />
          <line x1="100" y1="2" x2="100" y2="198" />
          <line x1="2" y1="100" x2="198" y2="100" />
          <line x1="30" y1="30" x2="170" y2="170" />
          <line x1="170" y1="30" x2="30" y2="170" />
        </svg>
      </div>
      <div className="hero-image">
        <img src={heroImg} alt="Personne face à la mer, en pleine réflexion" />
      </div>
      <div className="wrap">
        <div className="eyebrow">Orientation &amp; avenir</div>
        <h1>
          Retrouve le nord
          <br />
          de ton <span>avenir</span>.
        </h1>
        <p className="lead">
          Un espace pensé pour t'aider à voir plus clair dans tes choix de
          formation, d'études et d'orientation — sans jugement, sans jargon.
        </p>
        <div className="cta-row">
          <button className="btn-primary" onClick={() => navigate("/quiz")}>
            Commencer le quiz
          </button>
          <Link to="/parcours" className="btn-ghost">
            Voir des parcours
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M5 12h14M13 6l6 6-6 6" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}
