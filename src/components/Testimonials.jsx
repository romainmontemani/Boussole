import { Link } from "react-router-dom";
import { useReveal } from "../lib/useReveal.js";
import { PROFILES } from "../data/profiles.js";
import { TESTIMONIALS } from "../data/testimonials.js";
import pilierDeculpabiliserImg from "../assets/images/pilier-deculpabiliser.jpg";

function TestiCard({ testimonial, profile }) {
  const [ref, isVisible] = useReveal();
  const author = `${testimonial.name}, ${testimonial.age} ans — ${testimonial.formation}`;

  return (
    <Link
      className={`testi-card reveal-item${isVisible ? " is-visible" : ""}`}
      to={`/parcours/${testimonial.id}`}
      ref={ref}
    >
      <span className="testi-tag">Profil {profile.label}</span>
      <p className="quote">« {testimonial.quote} »</p>
      <div className="testi-author">
        {testimonial.photo ? (
          <img className="avatar" src={testimonial.photo} alt={author} />
        ) : (
          <div className="avatar" style={{ background: profile.color }} />
        )}
        <span>{author}</span>
      </div>
    </Link>
  );
}

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
            return <TestiCard testimonial={t} profile={profile} key={t.id} />;
          })}
        </div>
      </div>
    </section>
  );
}
