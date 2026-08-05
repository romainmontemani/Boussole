import { Link } from "react-router-dom";
import { TESTIMONIALS } from "../data/testimonials.js";

// Une seule citation mise en avant sur l'accueil, entre les piliers et le
// footer. Renvoie vers la page article du témoignage choisi.
const FEATURED_ID = "ines";

export default function FeaturedQuote() {
  const testimonial = TESTIMONIALS.find((t) => t.id === FEATURED_ID);
  if (!testimonial) return null;

  return (
    <section className="home-quote-section">
      <div className="wrap">
        <Link className="home-quote" to={`/parcours/${testimonial.id}`}>
          <p>« {testimonial.quote} »</p>
          <span className="home-quote-author">— {testimonial.name}</span>
        </Link>
      </div>
    </section>
  );
}
