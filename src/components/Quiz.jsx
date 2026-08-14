import { useEffect, useMemo, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { PROFILES } from "../data/profiles.js";
import { TESTIMONIALS } from "../data/testimonials.js";
import ShareableResult from "./ShareableResult.jsx";

// Chaque question a un poids (1 = normale, 1.5 = question "valeurs", plus décisive).
// Chaque option distribue des points à un ou deux profils (0 à 3), plutôt qu'un
// simple "1 profil = 1 point" : ça crée des scores plus étalés et réduit le
// risque d'égalité entre deux profils proches à la fin du quiz.
const QUESTIONS = [
  {
    text: "Dans un projet de groupe, qu'est-ce qui te motive le plus ?",
    weight: 1.5,
    options: [
      { text: "Trouver une solution originale à un problème", scores: { creatif: 3, analytique: 1 } },
      { text: "Coordonner les autres et tenir les délais", scores: { stratege: 3, relationnel: 1 } },
      { text: "Être sur le terrain, en contact direct", scores: { relationnel: 3, creatif: 1 } },
      { text: "Analyser les données pour prendre la meilleure décision", scores: { analytique: 3, stratege: 1 } },
      { text: "Fabriquer ou réparer quelque chose de concret", scores: { "manuel-artisanal": 3, analytique: 1 } }
    ]
  },
  {
    text: "Le week-end, tu préfères plutôt...",
    weight: 1,
    options: [
      { text: "Bidouiller un projet perso (code, montage, bricolage)", scores: { analytique: 3, creatif: 1 } },
      { text: "Voir du monde, sortir, organiser une sortie", scores: { relationnel: 3, stratege: 1 } },
      { text: "Dessiner, écrire, faire de la musique", scores: { creatif: 3 } },
      { text: "Planifier ta semaine, ranger, optimiser ton temps", scores: { stratege: 3, analytique: 1 } },
      { text: "Construire ou réparer quelque chose de tes mains", scores: { "manuel-artisanal": 3, creatif: 1 } }
    ]
  },
  {
    text: "Face à un problème compliqué, ton premier réflexe est...",
    weight: 1,
    options: [
      { text: "Le décomposer étape par étape", scores: { analytique: 3 } },
      { text: "Demander l'avis de quelqu'un", scores: { relationnel: 3 } },
      { text: "Chercher une approche différente, hors des sentiers battus", scores: { creatif: 3 } },
      { text: "Faire un plan d'action avec des priorités", scores: { stratege: 3 } }
    ]
  },
  {
    text: "Ce qui compte le plus pour toi dans un futur métier...",
    weight: 1.5,
    options: [
      { text: "Comprendre en profondeur un sujet", scores: { analytique: 3 } },
      { text: "Aider concrètement des gens", scores: { relationnel: 3 } },
      { text: "Créer quelque chose qui n'existait pas", scores: { creatif: 3 } },
      { text: "Avoir des responsabilités et de l'impact", scores: { stratege: 3 } }
    ]
  },
  {
    text: "En cours, tu te sens le plus à l'aise dans...",
    weight: 1,
    options: [
      { text: "Les matières scientifiques (maths, physique, SVT)", scores: { analytique: 3 } },
      { text: "Les travaux de groupe et les débats", scores: { relationnel: 3, stratege: 1 } },
      { text: "Les matières artistiques ou littéraires", scores: { creatif: 3 } },
      { text: "Les matières où il faut gérer un projet (SES, éco-gestion...)", scores: { stratege: 3 } },
      { text: "Les ateliers pratiques et matières technologiques", scores: { "manuel-artisanal": 3, analytique: 1 } }
    ]
  },
  {
    text: "Un·e ami·e te décrirait plutôt comme...",
    weight: 1,
    options: [
      { text: "Quelqu'un de rationnel, qui réfléchit avant d'agir", scores: { analytique: 3 } },
      { text: "Quelqu'un de chaleureux, toujours disponible", scores: { relationnel: 3 } },
      { text: "Quelqu'un d'original, qui voit les choses autrement", scores: { creatif: 3 } },
      { text: "Quelqu'un d'organisé, qui prend les choses en main", scores: { stratege: 3 } }
    ]
  },
  {
    text: "Ton pire cauchemar dans un travail, ce serait...",
    weight: 1,
    options: [
      { text: "Devoir improviser sans aucune méthode", scores: { analytique: 3 } },
      { text: "Travailler seul·e toute la journée, sans contact", scores: { relationnel: 3 } },
      { text: "Suivre un cadre strict sans aucune liberté", scores: { creatif: 3 } },
      { text: "Ne pas savoir qui fait quoi ni où va le projet", scores: { stratege: 3 } }
    ]
  },
  {
    text: "Dans un jeu vidéo ou un jeu de société, tu es plutôt...",
    weight: 1,
    options: [
      { text: "Celui/celle qui optimise la stratégie", scores: { stratege: 3, analytique: 1 } },
      { text: "Celui/celle qui explore et invente des façons de jouer", scores: { creatif: 3 } },
      { text: "Celui/celle qui joue surtout pour l'ambiance avec les autres", scores: { relationnel: 3 } },
      { text: "Celui/celle qui analyse les statistiques et les règles", scores: { analytique: 3 } }
    ]
  },
  {
    text: "Si on te donnait un an de libre pour apprendre ce que tu veux...",
    weight: 1.5,
    options: [
      { text: "Tu approfondirais un sujet scientifique ou technique", scores: { analytique: 3 } },
      { text: "Tu partirais sur le terrain, au contact des gens", scores: { relationnel: 3 } },
      { text: "Tu créerais un projet artistique perso", scores: { creatif: 3 } },
      { text: "Tu monterais une association ou un petit projet à piloter", scores: { stratege: 3 } }
    ]
  },
  {
    text: "Ce qui te stresse le plus à l'idée de choisir une voie...",
    weight: 1,
    options: [
      { text: "Me tromper sur un raisonnement, manquer de bases solides", scores: { analytique: 3 } },
      { text: "Me sentir isolé·e, sans lien avec les autres", scores: { relationnel: 3 } },
      { text: "Devoir rentrer dans un moule qui ne me ressemble pas", scores: { creatif: 3 } },
      { text: "Ne pas avoir de vision claire ni de plan", scores: { stratege: 3 } }
    ]
  },
  {
    text: "Dans une équipe, le rôle qui te correspond le plus...",
    weight: 1,
    options: [
      { text: "L'expert·e qu'on consulte pour les détails techniques", scores: { analytique: 3 } },
      { text: "Le/la médiateur·rice qui maintient la bonne ambiance", scores: { relationnel: 3 } },
      { text: "Celui/celle qui propose des idées différentes", scores: { creatif: 3 } },
      { text: "Le/la chef·fe de projet qui garde le cap", scores: { stratege: 3 } }
    ]
  },
  {
    text: "Une réussite qui te rendrait vraiment fier/fière...",
    weight: 1,
    options: [
      { text: "Résoudre un problème que personne n'avait réussi à expliquer", scores: { analytique: 3 } },
      { text: "Avoir vraiment changé le quotidien de quelqu'un", scores: { relationnel: 3 } },
      { text: "Avoir créé quelque chose de personnel et reconnu", scores: { creatif: 3 } },
      { text: "Avoir mené un projet d'équipe jusqu'au bout, avec succès", scores: { stratege: 3 } }
    ]
  },
  {
    text: "Face à un objet cassé ou qui ne fonctionne plus, ton réflexe est...",
    weight: 1,
    options: [
      { text: "Le démonter et tenter de le réparer toi-même", scores: { "manuel-artisanal": 3, analytique: 1 } },
      { text: "Chercher méthodiquement l'origine de la panne, étape par étape", scores: { analytique: 3, "manuel-artisanal": 1 } },
      { text: "Demander à quelqu'un de confiance de t'aider à le réparer", scores: { relationnel: 3 } },
      { text: "Le détourner pour lui donner une deuxième vie, différente de l'originale", scores: { creatif: 3 } },
      { text: "Peser le pour et le contre entre réparer et racheter", scores: { stratege: 3 } }
    ]
  },
  {
    text: "Ce qui te rendrait le plus fier·e dans un travail bien fait...",
    weight: 1.5,
    options: [
      { text: "Un objet solide et bien fini, que tu as fabriqué ou réparé de tes mains", scores: { "manuel-artisanal": 3 } },
      { text: "Une explication claire d'un phénomène compliqué", scores: { analytique: 3 } },
      { text: "Avoir vraiment aidé quelqu'un, concrètement", scores: { relationnel: 3 } },
      { text: "Une création personnelle qui touche ou surprend", scores: { creatif: 3 } },
      { text: "Un projet mené à terme, dans les délais, avec toute l'équipe", scores: { stratege: 3 } }
    ]
  }
];

const RING_CIRCUMFERENCE = 691;

// Score = somme(points de l'option choisie x poids de la question) par profil.
// En cas d'égalité stricte entre deux profils (cas rare vu la pondération),
// on garde le premier profil rencontré dans PROFILES — un choix arbitraire
// mais stable, plutôt que de laisser le résultat changer à chaque calcul.
function computeResult(answers) {
  const totals = Object.fromEntries(PROFILES.map((p) => [p.id, 0]));

  QUESTIONS.forEach((question, i) => {
    const optionIndex = answers[i];
    if (optionIndex == null) return;
    const option = question.options[optionIndex];
    Object.entries(option.scores).forEach(([profileId, points]) => {
      totals[profileId] += points * question.weight;
    });
  });

  let winner = PROFILES[0];
  let max = -Infinity;
  PROFILES.forEach((profile) => {
    if (totals[profile.id] > max) {
      max = totals[profile.id];
      winner = profile;
    }
  });

  return winner;
}

export default function Quiz() {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState([]);
  const isFinished = step >= QUESTIONS.length;

  useEffect(() => {
    if (isFinished) {
      // Le passage question -> résultat change la hauteur du contenu sans
      // navigation de route : sans ce reset, le scroll reste où il était
      // pendant le quiz et le titre du résultat se retrouve à moitié
      // caché au-dessus de l'écran sur mobile.
      window.scrollTo({ top: 0, behavior: "auto" });
      window.dispatchEvent(new Event("quiz-finished"));
    }
  }, [isFinished]);

  const result = useMemo(() => {
    if (!isFinished) return null;
    const profile = computeResult(answers);
    // Plusieurs témoignages peuvent correspondre au même profil : on en
    // tire un au hasard plutôt que de toujours montrer le premier trouvé.
    // S'il n'y en a aucun (nouveau profil sans témoignage), `matching` est
    // vide et `testimonial` reste undefined — le rendu gère déjà ce cas.
    const matching = TESTIMONIALS.filter((t) => t.profileId === profile.id);
    const testimonial =
      matching.length > 0
        ? matching[Math.floor(Math.random() * matching.length)]
        : undefined;
    return { profile, testimonial };
  }, [isFinished, answers]);

  const selectOption = (optionIndex) => {
    const updated = [...answers];
    updated[step] = optionIndex;
    setAnswers(updated);
    setTimeout(() => setStep((s) => s + 1), 250);
  };

  const restart = () => {
    setStep(0);
    setAnswers([]);
  };

  const shareRef = useRef(null);
  const [busy, setBusy] = useState(false);
  const [canShareFiles, setCanShareFiles] = useState(false);

  // Détection de l'API Web Share niveau 2 (partage de fichiers) : pas
  // supportée par tous les navigateurs (ex. Safari desktop, Firefox), d'où
  // le "probe" avec un File factice plutôt qu'un simple `"share" in navigator`.
  useEffect(() => {
    if (typeof navigator === "undefined" || !navigator.canShare) return;
    try {
      const probe = new File([""], "probe.png", { type: "image/png" });
      setCanShareFiles(navigator.canShare({ files: [probe] }));
    } catch {
      setCanShareFiles(false);
    }
  }, []);

  // Import différé : html-to-image n'est chargé que si l'utilisateur clique
  // vraiment sur télécharger/partager, pas sur chaque visite du site.
  const generateImageBlob = async () => {
    const { toBlob } = await import("html-to-image");
    return toBlob(shareRef.current, { pixelRatio: 2, backgroundColor: "#FBF9F6" });
  };

  const downloadResult = async (profileId) => {
    if (!shareRef.current || busy) return;
    setBusy(true);
    try {
      const blob = await generateImageBlob();
      if (!blob) return;
      const url = URL.createObjectURL(blob);
      const link = document.createElement("a");
      link.href = url;
      link.download = `boussole-resultat-${profileId}.png`;
      link.click();
      URL.revokeObjectURL(url);
    } finally {
      setBusy(false);
    }
  };

  const shareResult = async (profileId, profileLabel) => {
    if (!shareRef.current || busy) return;
    setBusy(true);
    try {
      const blob = await generateImageBlob();
      if (!blob) return;
      const file = new File([blob], `boussole-resultat-${profileId}.png`, { type: "image/png" });
      await navigator.share({
        files: [file],
        title: "Mon profil Boussole",
        text: `Mon profil d'orientation : ${profileLabel}`
      });
    } catch (err) {
      if (err?.name !== "AbortError") console.error(err);
    } finally {
      setBusy(false);
    }
  };

  if (isFinished && result) {
    const { profile, testimonial } = result;
    const siteUrl = typeof window !== "undefined" ? window.location.host : "";
    return (
      <section className="quiz-section" id="quiz">
        <div className="wrap">
          <div className="section-head">
            <div className="eyebrow">Ton résultat</div>
            <h2>Voici une piste pour toi.</h2>
            <p>
              Ce résultat n'est pas une case définitive : c'est un point de
              départ pour explorer plus loin.
            </p>
          </div>
          <div className="result-panel">
            <span className="profile-badge" style={{ background: profile.color }}>
              Profil {profile.label}
            </span>
            <p className="result-disclaimer">
              Ce profil éclaire des pistes. Il ne doit jamais dicter ton choix.
            </p>
            <h3>{profile.tagline}</h3>
            <p className="result-desc">{profile.description}</p>
            <ul className="result-pistes">
              {profile.pistes.map((piste) => (
                <li key={piste}>{piste}</li>
              ))}
            </ul>
            {testimonial && (
              <Link className="result-testimonial" to={`/parcours/${testimonial.id}`}>
                <p className="quote">« {testimonial.quote} »</p>
                <div className="testi-author">
                  {testimonial.photo ? (
                    <img
                      className="avatar"
                      src={testimonial.photo}
                      alt={`${testimonial.name}, ${testimonial.age} ans — ${testimonial.formation}`}
                    />
                  ) : (
                    <div className="avatar" style={{ background: profile.color }} />
                  )}
                  <span>
                    {testimonial.name}, {testimonial.age} ans — {testimonial.formation}
                  </span>
                </div>
              </Link>
            )}
            <div className="cta-row">
              <button className="btn-primary" onClick={restart}>
                Recommencer le quiz
              </button>
              <Link to="/parcours" className="btn-ghost">
                Voir tous les parcours
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M5 12h14M13 6l6 6-6 6" />
                </svg>
              </Link>
            </div>
            <div className="share-actions">
              <button
                className="btn-ghost"
                onClick={() => downloadResult(profile.id)}
                disabled={busy}
              >
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 3v12" />
                  <path d="M7 10l5 5 5-5" />
                  <path d="M5 21h14" />
                </svg>
                {busy ? "Génération…" : "Télécharger mon résultat"}
              </button>
              {canShareFiles && (
                <button
                  className="btn-ghost"
                  onClick={() => shareResult(profile.id, profile.label)}
                  disabled={busy}
                >
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 15V3" />
                    <path d="M8 7l4-4 4 4" />
                    <path d="M20 12v7a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-7" />
                  </svg>
                  Partager
                </button>
              )}
            </div>
          </div>
        </div>
        <div className="share-offscreen" aria-hidden="true">
          <ShareableResult ref={shareRef} profile={profile} siteUrl={siteUrl} />
        </div>
      </section>
    );
  }

  const question = QUESTIONS[step];
  const progress = step / QUESTIONS.length;

  return (
    <section className="quiz-section" id="quiz">
      <div className="wrap">
        <div className="section-head">
          <div className="eyebrow">Quiz d'orientation</div>
          <h2>Dix minutes pour y voir plus clair.</h2>
          <p>
            Réponds à quelques questions simples pour découvrir ton profil
            d'orientation et des pistes concrètes.
          </p>
          {step === 0 && (
            <p className="quiz-intro-note">
              Il n'y a pas de bonne ou de mauvaise réponse : réponds avec ce
              qui te vient naturellement.
            </p>
          )}
        </div>
        <div className="quiz-panel">
          <div>
            <div className="progress-track">
              <div className="progress-fill" style={{ width: `${progress * 100}%` }} />
            </div>
            <div className="q-label">
              Question {step + 1} sur {QUESTIONS.length}
            </div>
            <h3>{question.text}</h3>
            <div className="options">
              {question.options.map((opt, i) => (
                <button
                  key={opt.text}
                  className={`option${answers[step] === i ? " selected" : ""}`}
                  onClick={() => selectOption(i)}
                >
                  {opt.text}
                </button>
              ))}
            </div>
          </div>
          <div className="compass-dial">
            <svg viewBox="0 0 240 240" fill="none">
              <circle cx="120" cy="120" r="110" stroke="#E4DFD8" strokeWidth="2" />
              <circle
                cx="120" cy="120" r="110" stroke="#E07A5F" strokeWidth="4"
                strokeDasharray={RING_CIRCUMFERENCE}
                strokeDashoffset={RING_CIRCUMFERENCE - RING_CIRCUMFERENCE * progress}
                strokeLinecap="round"
                transform="rotate(-90 120 120)"
                style={{ transition: "stroke-dashoffset .3s ease" }}
              />
              <circle cx="120" cy="120" r="82" stroke="#3D3562" strokeWidth="1" />
              <polygon points="120,58 132,120 120,182 108,120" fill="#3D3562" />
              <polygon points="120,58 126,120 120,120" fill="#E07A5F" />
              <circle cx="120" cy="120" r="6" fill="#2E2B33" />
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
}
