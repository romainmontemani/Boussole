import { Link, Navigate, useParams } from "react-router-dom";
import { CONSEILS } from "../data/conseils.js";

export default function ConseilPage() {
  const { id } = useParams();
  const conseil = CONSEILS.find((c) => c.id === id);

  if (!conseil) {
    return <Navigate to="/conseils" replace />;
  }

  return (
    <section className="article-section">
      <div className="wrap article-wrap">
        <Link className="article-back" to="/conseils">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M19 12H5M11 18l-6-6 6-6" />
          </svg>
          Tous les conseils
        </Link>

        <div className="article-card">
          <h1 className="conseil-title">{conseil.title}</h1>

          <div className="article-body">
            {conseil.content.map((block, i) => (
              <div className="conseil-block" key={i}>
                {block.heading && <h2>{block.heading}</h2>}
                <p>{block.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
