import { useNavigate } from "react-router-dom";
import { useReveal } from "../lib/useReveal.js";
import { PROFILES } from "../data/profiles.js";

function ProfilePill({ profile }) {
  const [ref, isVisible] = useReveal();

  return (
    <div className={`profile-pill reveal-item${isVisible ? " is-visible" : ""}`} ref={ref}>
      <span className="profile-pill-dot" style={{ background: profile.color }} />
      <h3>{profile.label}</h3>
      {profile.tagline && <p>{profile.tagline}</p>}
    </div>
  );
}

export default function ProfilesPreview() {
  const navigate = useNavigate();

  return (
    <section className="profiles-section">
      <div className="wrap">
        <div className="section-head">
          <div className="eyebrow">Les profils</div>
          <h2>Cinq profils, une piste pour chacun.</h2>
        </div>
        <div className="profiles-grid">
          {PROFILES.map((p) => (
            <ProfilePill profile={p} key={p.id} />
          ))}
        </div>
        <div className="profiles-cta">
          <button className="btn-primary" onClick={() => navigate("/quiz")}>
            Découvrir mon profil
          </button>
        </div>
      </div>
    </section>
  );
}
