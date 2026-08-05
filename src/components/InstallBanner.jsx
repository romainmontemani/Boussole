import { useEffect, useState } from "react";

const DISMISS_KEY = "boussole-install-dismissed";
const SHOW_DELAY_MS = 8000;

function isStandalone() {
  return (
    window.matchMedia("(display-mode: standalone)").matches ||
    window.navigator.standalone === true
  );
}

function getPlatform() {
  const ua = window.navigator.userAgent;
  if (/iPhone|iPad|iPod/.test(ua) && !window.MSStream) return "ios";
  if (/Android/.test(ua)) return "android";
  return "other";
}

// Bandeau discret proposant l'installation sur l'écran d'accueil.
// Déclenché après quelques secondes de navigation, ou dès la fin du quiz
// (événement "quiz-finished" déclenché par Quiz.jsx) — ce qui arrive en premier.
// Ne s'affiche que sur mobile (iOS/Android), jamais si déjà installée ou fermée.
export default function InstallBanner() {
  const [platform] = useState(getPlatform);
  const [eligible] = useState(
    () => (getPlatform() === "ios" || getPlatform() === "android") &&
      !isStandalone() &&
      localStorage.getItem(DISMISS_KEY) !== "1"
  );
  const [visible, setVisible] = useState(false);
  const [deferredPrompt, setDeferredPrompt] = useState(null);

  useEffect(() => {
    if (!eligible) return;

    const onBeforeInstall = (e) => {
      e.preventDefault();
      setDeferredPrompt(e);
    };
    const onInstalled = () => {
      localStorage.setItem(DISMISS_KEY, "1");
      setVisible(false);
    };
    const onQuizFinished = () => setVisible(true);

    window.addEventListener("beforeinstallprompt", onBeforeInstall);
    window.addEventListener("appinstalled", onInstalled);
    window.addEventListener("quiz-finished", onQuizFinished);
    const timer = setTimeout(() => setVisible(true), SHOW_DELAY_MS);

    return () => {
      window.removeEventListener("beforeinstallprompt", onBeforeInstall);
      window.removeEventListener("appinstalled", onInstalled);
      window.removeEventListener("quiz-finished", onQuizFinished);
      clearTimeout(timer);
    };
  }, [eligible]);

  if (!eligible || !visible) return null;

  const dismiss = () => {
    setVisible(false);
    localStorage.setItem(DISMISS_KEY, "1");
  };

  const handleInstallClick = async () => {
    if (!deferredPrompt) return;
    deferredPrompt.prompt();
    await deferredPrompt.userChoice;
    setDeferredPrompt(null);
    localStorage.setItem(DISMISS_KEY, "1");
    setVisible(false);
  };

  return (
    <div className="install-banner" role="group" aria-label="Installer Boussole sur l'écran d'accueil">
      <div className="icon-circle install-banner-icon">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 3v12" />
          <path d="M7 10l5 5 5-5" />
          <path d="M5 21h14" />
        </svg>
      </div>
      <div className="install-banner-text">
        <strong>Installe Boussole sur ton écran d'accueil</strong>
        {platform === "ios" ? (
          <p>
            Appuie sur
            <svg className="install-inline-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M12 15V3" />
              <path d="M8 7l4-4 4 4" />
              <path d="M20 12v7a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-7" />
            </svg>
            Partager, puis « Sur l'écran d'accueil ».
          </p>
        ) : deferredPrompt ? (
          <p>Accède à l'app en un clic, même hors connexion.</p>
        ) : (
          <p>Ouvre le menu de ton navigateur puis choisis « Installer l'application ».</p>
        )}
      </div>
      <div className="install-banner-actions">
        {deferredPrompt && (
          <button className="btn-primary install-btn" onClick={handleInstallClick}>
            Installer
          </button>
        )}
        <button className="install-close" onClick={dismiss} aria-label="Fermer ce message">
          ✕
        </button>
      </div>
    </div>
  );
}
