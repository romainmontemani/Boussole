import { Link } from "react-router-dom";
import { useReveal } from "../lib/useReveal.js";
import CompassMark from "../components/CompassMark.jsx";
import { CONSEILS } from "../data/conseils.js";
import pilierClarteImg from "../assets/images/pilier-clarte.jpg";

function ConseilCard({ conseil }) {
  const [ref, isVisible] = useReveal();

  return (
    <Link
      className={`conseil-card reveal-item${isVisible ? " is-visible" : ""}`}
      to={`/conseils/${conseil.id}`}
      ref={ref}
    >
      <h3>{conseil.title}</h3>
      <p>{conseil.excerpt}</p>
    </Link>
  );
}

export default function Conseils() {
  return (
    <section className="conseils-section" id="conseils">
      <CompassMark spin />
      <div className="wrap">
        <div className="faq-banner">
          <img src={pilierClarteImg} alt="Carnet et stylo, pour prendre le temps de réfléchir" />
        </div>
        <div className="section-head">
          <div className="eyebrow">Conseils</div>
          <h2>Quelques repères pour avancer.</h2>
        </div>
        <div className="conseils-grid">
          {CONSEILS.map((conseil) => (
            <ConseilCard conseil={conseil} key={conseil.id} />
          ))}
        </div>
      </div>
    </section>
  );
}
