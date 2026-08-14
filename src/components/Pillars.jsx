import pilierClarteImg from "../assets/images/pilier-clarte.jpg";
import pilierInspirationImg from "../assets/images/pilier-inspiration.jpg";
import pilierDeculpabiliserImg from "../assets/images/pilier-deculpabiliser.jpg";

const PILLARS = [
  {
    num: "01",
    title: "Clarté",
    text: "Un quiz pensé pour t'aider à comprendre ce qui compte vraiment pour toi, sans réduire ton profil à une case.",
    image: pilierClarteImg,
    alt: "Personne assise qui prend le temps de réfléchir",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="1.8" strokeLinecap="round">
        <circle cx="12" cy="12" r="4" />
        <path d="M12 2v3M12 19v3M2 12h3M19 12h3" />
      </svg>
    )
  },
  {
    num: "02",
    title: "Inspiration & conseils",
    text: "Des parcours réels de jeunes et d'adultes en reconversion, racontés jusqu'au bout, avec le conseil qu'ils auraient aimé recevoir.",
    image: pilierInspirationImg,
    alt: "Échange entre deux personnes autour d'un conseil d'orientation",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="1.8" strokeLinecap="round">
        <path d="M12 3v2M12 19v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M3 12h2M19 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4" />
        <circle cx="12" cy="12" r="4.5" />
      </svg>
    )
  },
  {
    num: "03",
    title: "Déculpabiliser",
    text: "Douter de son avenir n'est pas un échec. C'est une étape que traversent la majorité des jeunes, et beaucoup d'adultes aussi. Tu n'es pas seul(e), même si ça y ressemble parfois.",
    image: pilierDeculpabiliserImg,
    alt: "Personne apaisée, sans jugement sur son parcours",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="8" cy="8" r="3" />
        <path d="M3 19c0-3 2.5-5 5-5s5 2 5 5" />
        <circle cx="17" cy="9" r="2.5" />
        <path d="M13.5 19c.3-2.5 2-4 3.5-4s3.2 1.5 3.5 4" />
      </svg>
    )
  }
];

export default function Pillars() {
  return (
    <section className="pillars">
      <div className="wrap">
        <div className="section-head">
          <div className="eyebrow">Notre approche</div>
          <h2>Trois piliers, un seul objectif : avancer.</h2>
        </div>
        <div className="pillars-grid">
          {PILLARS.map((p) => (
            <div className="pillar-card" key={p.num}>
              <div className="num">{p.num}</div>
              <div className="pillar-image">
                <img src={p.image} alt={p.alt} loading="lazy" />
              </div>
              <div className="icon-circle">{p.icon}</div>
              <h3>{p.title}</h3>
              <p>{p.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
