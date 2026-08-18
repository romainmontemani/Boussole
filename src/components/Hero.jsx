import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import CompassMark from "./CompassMark.jsx";
import heroImg from "../assets/images/hero.jpg";

export default function Hero() {
  const navigate = useNavigate();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const frame = requestAnimationFrame(() => setVisible(true));
    return () => cancelAnimationFrame(frame);
  }, []);

  const revealClass = (extra = "") =>
    `reveal-item${visible ? " is-visible" : ""}${extra ? ` ${extra}` : ""}`;

  return (
    <section className="hero" id="accueil">
      <CompassMark spin />
      <div className="hero-image">
        <img src={heroImg} alt="Personne face à la mer, en pleine réflexion" />
      </div>
      <div className="wrap">
        <div className={revealClass("eyebrow")}>Orientation &amp; avenir</div>
        <h1 className={revealClass()}>
          Retrouve le nord
          <br />
          de ton <span>avenir</span>.
        </h1>
        <p className={revealClass("lead")}>
          Un espace pensé pour t'aider à voir plus clair dans tes choix de
          formation, d'études et d'orientation. Sans jugement, sans jargon.
        </p>
        <div className={revealClass("cta-row")}>
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
