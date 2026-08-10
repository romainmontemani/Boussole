import { Link } from "react-router-dom";
import { PROFILES } from "../data/profiles.js";
import { TESTIMONIALS } from "../data/testimonials.js";
import pilierDeculpabiliserImg from "../assets/images/pilier-deculpabiliser.jpg";

export default function Testimonials() {
  return (
    <section className="testi-section" id="temoignages">
      <div className="wrap">
        <div className="testi-banner">
          <img src={pilierDeculpabiliserImg} alt="Personne apaisée, sans jugement sur son parcours" />
        </div>
        <div className="section-head">
          <div className="eyebrow">Parcours</div>
          <h2>Ils ont douté aussi.</h2>
        </div>
        <div className="testi-grid">
          {TESTIMONIALS.map((t) => {
            const profile = PROFILES.find((p) => p.id === t.profileId);
            const author = `${t.name}, ${t.age} ans — ${t.formation}`;
            return (
              <Link className="testi-card" to={`/parcours/${t.id}`} key={t.id}>
                <span className="testi-tag">Profil {profile.label}</span>
                <p className="quote">« {t.quote} »</p>
                <div className="testi-author">
                  {t.photo ? (
                    <img className="avatar" src={t.photo} alt={author} />
                  ) : (
                    <div className="avatar" style={{ background: profile.color }} />
                  )}
                  <span>{author}</span>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
