import { useNavigate } from "react-router-dom";
import { useReveal } from "../lib/useReveal.js";

export default function CtaBanner() {
  const navigate = useNavigate();
  const [ref, isVisible] = useReveal();

  return (
    <section className="cta-section">
      <div className="wrap">
        <div className={`cta-banner reveal-item${isVisible ? " is-visible" : ""}`} ref={ref}>
          <h2>Prêt à voir plus clair ?</h2>
          <button className="btn-primary" onClick={() => navigate("/quiz")}>
            Commencer le quiz
          </button>
        </div>
      </div>
    </section>
  );
}
