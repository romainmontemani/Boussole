// Les 5 profils types du quiz. Un profil est déterminé par le score pondéré
// le plus haut à l'issue du quiz (voir src/components/Quiz.jsx).
// Chaque témoignage (src/data/testimonials.js) est rattaché à un profil via `profileId`.
export const PROFILES = [
  {
    id: "analytique",
    label: "Analytique-scientifique",
    tagline: "Tu avances par la logique et la compréhension.",
    description:
      "Tu aimes comprendre comment les choses fonctionnent, résoudre des problèmes complexes et avancer avec méthode. La rigueur ne te fait pas peur, elle te rassure.",
    pistes: [
      "Filières scientifiques, techniques ou informatiques",
      "Métiers de la recherche ou de l'ingénierie",
      "Formations qui laissent de la place à l'expérimentation"
    ],
    color: "var(--indigo)"
  },
  {
    id: "relationnel",
    label: "Relationnel-terrain",
    tagline: "Tu te sens vivant·e au contact des autres.",
    description:
      "Ce qui te motive, c'est l'action concrète et le lien humain. Tu préfères apprendre en faisant, entouré·e, plutôt que seul·e derrière un écran.",
    pistes: [
      "Métiers du social, de la santé ou de l'éducation",
      "Formations en alternance, proches du terrain",
      "Environnements d'équipe, tournés vers l'humain"
    ],
    color: "var(--sauge)"
  },
  {
    id: "creatif",
    label: "Créatif-expression",
    tagline: "Tu as besoin d'espace pour inventer et t'exprimer.",
    description:
      "Les cadres trop rigides t'étouffent. Tu avances par l'intuition, l'image, l'écriture ou le son, et tu as besoin que ton travail te ressemble.",
    pistes: [
      "Filières artistiques, design ou communication",
      "Écoles qui valorisent le projet personnel",
      "Métiers où l'originalité est un atout, pas un problème"
    ],
    color: "var(--terracotta)"
  },
  {
    id: "stratege",
    label: "Organisateur-stratège",
    tagline: "Tu vois l'ensemble avant de voir les détails.",
    description:
      "Organiser, prioriser, faire avancer un groupe vers un objectif commun : c'est là que tu es le plus à l'aise. Tu penses déjà en termes de plan et de responsabilités.",
    pistes: [
      "Écoles de commerce, de gestion ou d'administration",
      "Rôles de coordination ou de gestion de projet",
      "Formations avec une forte dimension collective"
    ],
    color: "var(--indigo-deep)"
  },
  {
    id: "manuel-artisanal",
    label: "Manuel-artisanal",
    tagline: "Tu apprends en faisant, avec tes mains autant qu'avec ta tête.",
    description:
      "Ce qui te parle, c'est le geste concret : fabriquer, réparer, transformer la matière. Tu apprends en pratiquant plutôt qu'en lisant, et un objet bien fait vaut souvent mieux qu'un long discours.",
    pistes: [
      "CAP, Bac pro ou apprentissage dans un métier manuel ou technique",
      "Filières comme la mécanique, le bâtiment, l'artisanat d'art ou l'électrotechnique",
      "Formations en alternance, au plus près du geste et du concret"
    ],
    color: "var(--terracotta-deep)"
  }
];
