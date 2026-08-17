import { Fragment } from "react";
import { useReveal } from "../lib/useReveal.js";

const STEPS = [
  {
    num: "1",
    title: "Réponds au quiz",
    text: "14 questions simples, sans bonne ou mauvaise réponse."
  },
  {
    num: "2",
    title: "Découvre ton profil",
    text: "Une piste, pas une case dans laquelle t'enfermer."
  },
  {
    num: "3",
    title: "Explore des parcours",
    text: "Des histoires réelles de gens qui ont vécu la même chose."
  }
];

function HowStep({ step }) {
  const [ref, isVisible] = useReveal();

  return (
    <div className={`how-step reveal-item${isVisible ? " is-visible" : ""}`} ref={ref}>
      <div className="how-step-num">{step.num}</div>
      <h3>{step.title}</h3>
      <p>{step.text}</p>
    </div>
  );
}

function Connector() {
  return (
    <div className="how-connector" aria-hidden="true">
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M5 12h14M13 6l6 6-6 6" />
      </svg>
    </div>
  );
}

export default function HowItWorks() {
  return (
    <section className="how-section">
      <div className="wrap">
        <div className="section-head">
          <div className="eyebrow">Comment ça marche</div>
          <h2>Trois étapes, dix minutes.</h2>
        </div>
        <div className="how-steps">
          {STEPS.map((step, index) => (
            <Fragment key={step.num}>
              {index > 0 && <Connector />}
              <HowStep step={step} />
            </Fragment>
          ))}
        </div>
      </div>
    </section>
  );
}
