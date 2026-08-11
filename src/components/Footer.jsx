import { Link } from "react-router-dom";
import Logo from "./Logo.jsx";

export default function Footer() {
  return (
    <footer>
      <div className="footer-mark" aria-hidden="true">
        <svg viewBox="0 0 200 200" fill="none" stroke="currentColor" strokeWidth="0.6">
          <circle cx="100" cy="100" r="98" />
          <circle cx="100" cy="100" r="74" />
          <line x1="100" y1="2" x2="100" y2="198" />
          <line x1="2" y1="100" x2="198" y2="100" />
          <line x1="30" y1="30" x2="170" y2="170" />
          <line x1="170" y1="30" x2="30" y2="170" />
        </svg>
      </div>
      <div className="wrap footer-inner">
        <div className="footer-row footer-brand">
          <Logo size={20} />
        </div>

        <div className="footer-row footer-bottom">
          <div className="footer-links">
            <Link to="/faq" className="footer-link">FAQ</Link>
            <Link to="/ressources" className="footer-link">Ressources d'aide</Link>
          </div>

          <div className="footer-social">
            {/* TODO: remplacer par les vrais liens Instagram/LinkedIn */}
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="footer-social-link"
              aria-label="Instagram"
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <rect x="3" y="3" width="18" height="18" rx="5" />
                <circle cx="12" cy="12" r="4" />
                <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
              </svg>
            </a>
            {/* TODO: remplacer par les vrais liens Instagram/LinkedIn */}
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="footer-social-link"
              aria-label="LinkedIn"
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <rect x="3" y="3" width="18" height="18" rx="3" />
                <line x1="7.5" y1="10" x2="7.5" y2="17" />
                <circle cx="7.5" cy="6.7" r="0.9" fill="currentColor" stroke="none" />
                <path d="M11.5 17v-4.2a2.3 2.3 0 0 1 4.6 0V17" />
                <line x1="11.5" y1="10" x2="11.5" y2="17" />
              </svg>
            </a>
          </div>

          <span className="footer-spacer"></span>
        </div>
      </div>
    </footer>
  );
}
