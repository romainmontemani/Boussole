import { useState } from "react";
import { useReveal } from "../lib/useReveal.js";
import faqImg from "../assets/images/faq.jpg";

const FAQ_ITEMS = [
  {
    question: "C'est quoi Boussole ?",
    answer:
      "Un outil pour t'aider à y voir plus clair sur ton orientation, sans jugement. Quiz, présentations de parcours, ce site est fait pour que tu puisses te trouver et avoir des sources d'exemples.",
  },
  {
    question: "Le quiz est-il fiable ?",
    answer:
      "Il éclaire des pistes à partir de tes réponses, il ne dicte pas ton avenir. À prendre comme un point de départ, pas une vérité absolue.",
  },
  {
    question: "Mes réponses sont-elles enregistrées ?",
    answer: "Non, le quiz ne collecte aucune donnée personnelle ni email.",
  },
  {
    question: "C'est gratuit ?",
    answer: "Oui, entièrement.",
  },
  {
    question: "C'est pour qui ?",
    answer: "Les jeunes en questionnement autant que les adultes en reconversion.",
  },
  {
    question: "Le résultat est-il définitif ?",
    answer:
      "Non, un profil peut évoluer, ce n'est pas une case dans laquelle t'enfermer.",
  },
  {
    question: "C'est quoi un \"parcours\" ?",
    answer:
      "C'est le témoignage d'une personne réelle qui a vécu une situation proche de la tienne : son contexte, son déclic, où elle en est aujourd'hui, et un conseil qu'elle aurait aimé recevoir.",
  },
  {
    question: "Les témoignages sont-ils vrais ?",
    answer: "Oui, ce sont de vraies personnes qui ont accepté de partager leur histoire.",
  },
  {
    question: "Comment le parcours qui s'affiche après mon quiz est-il choisi ?",
    answer:
      "Il correspond au profil que ton quiz a dégagé. S'il existe plusieurs témoignages pour ce même profil, l'un d'eux est choisi au hasard.",
  },
  {
    question: "Je peux partager mon parcours ?",
    answer: (
      <>
        Oui, si tu as 18 ans ou plus ! On pense que le recul compte pour raconter une
        histoire utile aux autres. Remplis{" "}
        <a
          href="https://docs.google.com/forms/d/e/1FAIpQLSdadAVrE2Rpsa-kx0j-DqNZKajDj0Sqc5lTmyC3z-PoZPHFfQ/viewform"
          target="_blank"
          rel="noopener noreferrer"
        >
          ce formulaire
        </a>
        , on te recontactera.
      </>
    ),
  },
];

function FaqItem({ item, isOpen, onToggle }) {
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

export default function Faq() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (index) => {
    setOpenIndex((current) => (current === index ? null : index));
  };

  return (
    <section className="faq-section">
      <div className="wrap">
        <div className="faq-banner">
          <img src={faqImg} alt="Personne qui consulte des questions fréquentes" />
        </div>
        <div className="faq-header">
          <h1>Questions fréquentes</h1>
        </div>
        <div className="faq-list">
          {FAQ_ITEMS.map((item, index) => (
            <FaqItem
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
