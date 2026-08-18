import { useState } from "react";
import { useReveal } from "../lib/useReveal.js";
import CompassMark from "../components/CompassMark.jsx";
import ressourcesImg from "../assets/images/ressources.jpg";

const RESSOURCES_ITEMS = [
  {
    question: "Comprendre ce qui te motive",
    answer:
      "Des tests d'intérêts et de personnalité peuvent compléter ce que Boussole t'a montré. L'ONISEP propose plusieurs quiz gratuits pour explorer tes centres d'intérêt plus en détail.",
  },
  {
    question: "Explorer les métiers et les formations",
    answer: (
      <>
        <a href="https://www.onisep.fr" target="_blank" rel="noopener noreferrer">
          ONISEP
        </a>{" "}
        (onisep.fr) — le site officiel de l'orientation en France, fiches métiers
        et formations.{" "}
        <a href="https://www.parcoursup.fr" target="_blank" rel="noopener noreferrer">
          Parcoursup
        </a>{" "}
        — pour les choix post-bac.{" "}
        <a
          href="https://labonnealternance.apprentissage.beta.gouv.fr"
          target="_blank"
          rel="noopener noreferrer"
        >
          La Bonne Alternance
        </a>{" "}
        — pour trouver une alternance ou un contrat pro.
      </>
    ),
  },
  {
    question: "Parler à quelqu'un",
    answer:
      "Un CIO (Centre d'Information et d'Orientation) près de chez toi, gratuit et souvent sans rendez-vous. Une Mission Locale si tu as entre 16 et 25 ans, pour l'orientation, la formation, l'emploi. Le psychologue de l'Éducation nationale de ton établissement, si tu es encore scolarisé.",
  },
  {
    question: "Si le doute dépasse juste l'orientation",
    answer: (
      <>
        Parfois, les questions sur l'avenir touchent à autre chose de plus
        large. Le Fil Santé Jeunes (
        <a href="tel:0800235236">0800 235 236</a>) est une ligne d'écoute
        gratuite et anonyme pour parler de ce qui te préoccupe, pas seulement
        l'orientation.
      </>
    ),
  },
];

function RessourceItem({ item, isOpen, onToggle }) {
  const [ref, isVisible] = useReveal();

  return (
    <div
      className={`faq-item reveal-item${isOpen ? " open" : ""}${isVisible ? " is-visible" : ""}`}
      ref={ref}
    >
      <button className="faq-question" onClick={onToggle} aria-expanded={isOpen}>
        <span>{item.question}</span>
        <svg
          className="faq-chevron"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        >
          <path d="M6 9l6 6 6-6" />
        </svg>
      </button>
      <div className="faq-answer-wrap">
        <div className="faq-answer-inner">
          <p className="faq-answer">{item.answer}</p>
        </div>
      </div>
    </div>
  );
}

export default function Ressources() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (index) => {
    setOpenIndex((current) => (current === index ? null : index));
  };

  return (
    <section className="faq-section">
      <CompassMark spin />
      <div className="wrap">
        <div className="faq-banner">
          <img src={ressourcesImg} alt="Groupe de jeunes qui échangent" />
        </div>
        <div className="faq-header">
          <h1>Ressources d'aide</h1>
        </div>
        <div className="faq-list">
          {RESSOURCES_ITEMS.map((item, index) => (
            <RessourceItem
              item={item}
              isOpen={openIndex === index}
              onToggle={() => toggle(index)}
              key={item.question}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
