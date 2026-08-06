import { Link } from "react-router-dom";
import Logo from "./Logo.jsx";

export default function Footer() {
  return (
    <footer>
      <div className="wrap footer-inner">
        <div className="footer-row footer-brand">
          <Logo size={20} />
        </div>

        <div className="footer-row footer-bottom">
          <Link to="/faq" className="footer-link">FAQ</Link>

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
