import { useEffect, useState } from "react";
import { Link, Navigate, useParams } from "react-router-dom";
import { PROFILES } from "../data/profiles.js";
import { TESTIMONIALS } from "../data/testimonials.js";
import { supabase } from "../lib/supabase.js";

// La fonction RPC increment_reaction peut renvoyer soit un scalaire, soit une
// ligne/tableau selon comment elle a été écrite côté Supabase — on extrait le
// total peu importe la forme plutôt que de supposer un seul format.
function extractCount(data) {
  const row = Array.isArray(data) ? data[0] : data;
  if (row == null) return null;
  if (typeof row === "number") return row;
  if (typeof row === "object" && typeof row.count === "number") return row.count;
  return null;
}

export default function TestimonialPage() {
  const { id } = useParams();
  const testimonial = TESTIMONIALS.find((t) => t.id === id);

  const [reactionCount, setReactionCount] = useState(0);
  const [reacted, setReacted] = useState(false);
  const [reacting, setReacting] = useState(false);

  useEffect(() => {
    if (!testimonial) return;
    let cancelled = false;
    const reactedKey = `boussole-reacted-${testimonial.id}`;
    setReacted(localStorage.getItem(reactedKey) === "1");

    supabase
      .from("reactions")
      .select("count")
      .eq("testimonial_id", testimonial.id)
      .maybeSingle()
      .then(({ data, error }) => {
        if (cancelled) return;
        if (error) {
          console.error(error);
          return;
        }
        setReactionCount(data?.count ?? 0);
      });

    return () => {
      cancelled = true;
    };
  }, [testimonial?.id]);

  if (!testimonial) {
    return <Navigate to="/" replace />;
  }

  const profile = PROFILES.find((p) => p.id === testimonial.profileId);

  const toggleReaction = async () => {
    if (reacting) return;
    setReacting(true);
    const reactedKey = `boussole-reacted-${testimonial.id}`;
    const wasReacted = reacted;

    const { data, error } = await supabase.rpc(
      wasReacted ? "decrement_reaction" : "increment_reaction",
      { p_testimonial_id: testimonial.id }
    );

    if (error) {
      console.error(error);
      setReacting(false);
      return;
    }

    const newTotal = extractCount(data);
    setReactionCount((current) =>
      newTotal != null ? newTotal : current + (wasReacted ? -1 : 1)
    );
    setReacted(!wasReacted);
    if (wasReacted) {
      localStorage.removeItem(reactedKey);
    } else {
      localStorage.setItem(reactedKey, "1");
    }
    setReacting(false);
  };

  return (
    <section className="article-section">
      <div className="wrap article-wrap">
        <Link className="article-back" to="/parcours">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M19 12H5M11 18l-6-6 6-6" />
          </svg>
          Tous les parcours
        </Link>

        <div className="article-card">
          <div className="article-head">
            {testimonial.photo ? (
              <img
                className="avatar article-avatar"
                src={testimonial.photo}
                alt={`${testimonial.name}, ${testimonial.age} ans`}
              />
            ) : (
              <div
                className="avatar article-avatar"
                style={{ background: profile.color }}
              />
            )}
            <div>
              <span className="profile-badge" style={{ background: profile.color }}>
                Profil {profile.label}
              </span>
              <h1>
                {testimonial.name}, {testimonial.age} ans
              </h1>
              <p className="article-formation">{testimonial.formation}</p>
            </div>
          </div>

          <blockquote className="article-quote">« {testimonial.quote} »</blockquote>

          <div className="article-body">
            <div className="article-block">
              <h2>Le contexte</h2>
              <p>{testimonial.contexte}</p>
            </div>
            <div className="article-block">
              <h2>Le déclic</h2>
              <p>{testimonial.declic}</p>
            </div>
            <div className="article-block">
              <h2>Aujourd'hui</h2>
              <p>{testimonial.aujourdhui}</p>
            </div>
          </div>

          <div className="article-conseil">
            <h2>Son conseil</h2>
            <p>{testimonial.conseil}</p>
          </div>

          <div className="article-reaction">
            <button
              className={`reaction-btn${reacted ? " reacted" : ""}`}
              onClick={toggleReaction}
              disabled={reacting}
            >
              <span className="reaction-heart">{reacted ? "❤️" : "🤍"}</span>
              Ce parcours m'a aidé(e)
            </button>
            <span className="reaction-count">
              {reactionCount} personne{reactionCount !== 1 ? "s" : ""}{" "}
              {reactionCount !== 1 ? "se sont reconnues" : "s'est reconnue"} dans ce
              parcours
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
