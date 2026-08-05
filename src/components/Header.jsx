import { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "./Logo.jsx";

export default function Header() {
  const [open, setOpen] = useState(false);
  const close = () => setOpen(false);

  return (
    <header>
      <div className="wrap header-row">
        <Link to="/" style={{ color: "inherit", textDecoration: "none" }} onClick={close}>
          <Logo />
        </Link>
        <button
          className="nav-toggle"
          onClick={() => setOpen((o) => !o)}
          aria-expanded={open}
          aria-label={open ? "Fermer le menu" : "Ouvrir le menu"}
        >
          {open ? "✕" : "☰"}
        </button>
        <nav className={open ? "open" : ""}>
          <Link to="/" onClick={close}>Accueil</Link>
          <Link to="/quiz" onClick={close}>Quiz</Link>
          <Link to="/parcours" onClick={close}>Parcours</Link>
        </nav>
      </div>
    </header>
  );
}
