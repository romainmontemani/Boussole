// Articles de la rubrique Conseils (page liste /conseils, page article
// /conseils/[id]). Même principe que src/data/testimonials.js : `id` sert
// directement de slug dans l'URL, pas de champ `slug` séparé.
//
// `content` est un tableau de blocs plutôt qu'un unique bloc de texte, pour
// pouvoir afficher les sous-titres en gras qui structurent chaque article
// (repris de src/pages/ConseilPage.jsx) sans avoir à parser du markdown :
// - `{ text }` : un paragraphe simple, sans sous-titre.
// - `{ heading, text }` : un sous-titre en gras suivi de son paragraphe.
export const CONSEILS = [
  {
    id: "cinq-questions-avant-de-choisir",
    title: "Cinq questions à te poser avant de choisir une voie",
    excerpt:
      "Pas ce qu'on t'a dit d'aimer, mais ce qui te correspond vraiment. Cinq questions à te poser, sans pression.",
    content: [
      {
        text:
          "Choisir une voie, ça ne se résume pas à cocher une case sur Parcoursup ou à répondre 'je sais pas encore' à la question qu'on te pose trop souvent. Voici cinq questions plus utiles que 'qu'est-ce que tu veux faire plus tard ?' — à te poser à toi-même, sans pression."
      },
      {
        heading: "1. Qu'est-ce que je fais quand personne ne me demande de le faire ?",
        text: "Pas ce qu'on t'a dit d'aimer. Ce vers quoi tu reviens naturellement, même quand rien ne t'y oblige."
      },
      {
        heading: "2. Dans quel genre de moments je perds la notion du temps ?",
        text:
          "Ce signal-là ne trompe pas. Que ce soit devant un écran, un carnet, un terrain de sport ou un établi, remarque ce qui te fait oublier de regarder l'heure."
      },
      {
        heading: "3. Est-ce que je choisis pour moi, ou pour rassurer quelqu'un d'autre ?",
        text:
          "Une question difficile, mais honnête. Il n'y a pas de mauvaise réponse — juste l'intérêt de savoir laquelle est vraie pour toi, aujourd'hui."
      },
      {
        heading: "4. Qu'est-ce que je suis prêt·e à rater, pour essayer quelque chose ?",
        text:
          "Aucune voie n'est sans risque. La vraie question n'est pas 'comment ne jamais me tromper', mais 'qu'est-ce que je suis prêt·e à tenter, sachant que ça peut ne pas marcher du premier coup'."
      },
      {
        heading: "5. Si je me trompe, qu'est-ce qui se passe vraiment ?",
        text:
          "Souvent, beaucoup moins grave que ce qu'on imagine. Une réorientation, un changement de cap à 20 ou 30 ans, ce n'est pas un échec — c'est même le chemin le plus courant."
      },
      {
        text:
          "Tu n'as pas besoin de répondre à ces cinq questions aujourd'hui. Les laisser infuser suffit déjà à y voir un peu plus clair."
      }
    ]
  },
  {
    id: "parler-a-tes-parents-sans-conflit",
    title: "Comment en parler à tes parents sans que ça devienne un conflit",
    excerpt:
      "Le doute sur son avenir, c'est déjà difficile à porter seul·e. Quelques pistes pour que la conversation se passe mieux.",
    content: [
      {
        text:
          "Le doute sur son avenir, c'est déjà difficile à porter seul·e. Alors quand il faut en plus l'expliquer à ses parents — qui ont leurs propres attentes, leurs propres peurs — la conversation peut vite tourner au conflit. Quelques pistes pour que ça se passe mieux."
      },
      {
        heading: "Choisis le bon moment, pas le premier qui passe.",
        text:
          "Une conversation sérieuse improvisée entre deux portes finit rarement bien. Préviens que tu veux parler de ton avenir, calmement, à un moment où personne n'est pressé."
      },
      {
        heading: "Sépare 'je doute' de 'je n'ai pas de plan'.",
        text:
          "Douter ne veut pas dire être perdu·e. Tu peux dire clairement : 'Je réfléchis encore, ça ne veut pas dire que je ne fais rien' — ça change souvent la tonalité de l'échange."
      },
      {
        heading: "Explique ce que tu as déjà fait, pas seulement ce que tu ne sais pas.",
        text:
          "Si tu as fait un quiz, discuté avec quelqu'un, lu des témoignages — dis-le. Ça montre que le doute est actif, pas de la paresse."
      },
      {
        heading: "Accepte que leur peur n'est pas contre toi.",
        text:
          "Souvent, l'inquiétude des parents vient de leur propre expérience, pas d'un manque de confiance en toi. Ça n'excuse pas tout, mais ça aide parfois à moins le prendre personnellement."
      },
      {
        heading: "Si ça bloque, un tiers peut aider.",
        text:
          "Un professeur, un psychologue de l'Éducation nationale, un adulte de confiance en dehors de la famille — parfois, une voix extérieure débloque une conversation qui tourne en rond à deux."
      }
    ]
  },
  {
    id: "jargon-de-lorientation-decrypte",
    title: "Le jargon de l'orientation, décrypté",
    excerpt:
      "Parcoursup, spécialités, BUT, CPGE... Quelques mots qui reviennent souvent, expliqués simplement.",
    content: [
      {
        text:
          "Parcoursup, spécialités, vœux, BUT, CPGE... Le vocabulaire de l'orientation peut sembler être un langage à part. Voici quelques mots qui reviennent souvent, expliqués simplement."
      },
      {
        heading: "Parcoursup",
        text:
          "La plateforme où tu formules tes vœux pour l'après-bac (ou l'après-CAP/Bac pro). Pas une école en soi, juste l'outil pour candidater."
      },
      {
        heading: "Spécialités",
        text:
          "Depuis la réforme du bac, tu choisis des matières 'spécialisées' en 1ère et Terminale (par exemple maths, SES, physique-chimie...) plutôt qu'une filière S/ES/L classique."
      },
      {
        heading: "BUT",
        text:
          "Bachelor Universitaire de Technologie. Un diplôme en 3 ans après le bac, plus concret et professionnalisant qu'une licence classique."
      },
      {
        heading: "CPGE",
        text:
          "Classe Préparatoire aux Grandes Écoles. Deux ans intensifs après le bac pour préparer les concours d'entrée aux grandes écoles (ingénieur, commerce...)."
      },
      {
        heading: "Alternance",
        text:
          "Une formation où tu partages ton temps entre l'entreprise et l'école, souvent payée. Existe du CAP jusqu'au Master."
      },
      {
        heading: "Réorientation",
        text:
          "Changer de voie en cours d'études. Beaucoup plus courant que ce qu'on imagine, et rarement vu comme un problème par les établissements."
      },
      {
        heading: "Voie professionnelle",
        text:
          "Un parcours axé sur un métier concret (CAP, Bac pro), aussi valable qu'une voie générale — juste différente."
      }
    ]
  },
  {
    id: "se-tromper-de-voie-ca-arrive",
    title: "Se tromper de voie, ça arrive — et ce n'est pas grave",
    excerpt:
      "On te fait souvent croire que le choix d'orientation est définitif. Ce n'est pas vrai.",
    content: [
      {
        text:
          "On te fait souvent croire que le choix d'orientation est définitif, presque irréversible. Ce n'est pas vrai. Voici pourquoi se tromper de voie n'est ni rare, ni grave."
      },
      {
        heading: "C'est plus fréquent que tu ne le penses.",
        text:
          "Une grande partie des étudiants change de filière, d'école ou de voie au moins une fois avant de trouver ce qui leur convient vraiment. Tu n'es l'exception de personne."
      },
      {
        heading: "Une 'erreur' t'apprend souvent plus qu'un choix 'parfait' du premier coup.",
        text:
          "Savoir ce qui ne te convient pas, c'est déjà une information précieuse — parfois plus utile que d'avoir deviné juste dès le départ."
      },
      {
        heading: "Le système est fait pour permettre de changer de cap.",
        text:
          "Passerelles, réorientations, années de césure, reconversions à tout âge — les portes de sortie existent, même si on ne te les présente pas toujours clairement."
      },
      {
        heading: "Ce n'est pas du temps perdu.",
        text:
          "Une expérience qui ne débouche pas sur ce que tu imaginais t'apporte quand même des compétences, des rencontres, une meilleure connaissance de toi. Rien de tout ça ne disparaît si tu changes de direction."
      },
      {
        text: "Se tromper, ce n'est pas l'inverse de réussir. C'est souvent une étape du chemin qui y mène."
      }
    ]
  },
  {
    id: "pourquoi-orientation-fait-peur",
    title: "Pourquoi le mot 'orientation' fait peur (et pourquoi il ne devrait pas)",
    excerpt:
      "Le mot 'orientation' sonne souvent comme une sentence. Ce n'est pas une coïncidence.",
    content: [
      {
        text:
          "Le mot 'orientation' sonne souvent comme une sentence : un choix unique, à faire au bon moment, sans droit à l'erreur. Ce n'est pas une coïncidence si autant de gens le redoutent."
      },
      {
        heading: "Il sonne comme une décision finale, alors que c'est un point de départ.",
        text:
          "S'orienter, ce n'est pas choisir toute sa vie à 17 ou 25 ans. C'est juste décider de la prochaine étape — une parmi plusieurs, sur un chemin qui continue de bouger."
      },
      {
        heading: "Il est souvent associé à l'échec ou la réussite scolaire.",
        text:
          "Beaucoup ont grandi avec l'idée que l'orientation 'sanctionne' un niveau scolaire. En réalité, elle a beaucoup plus à voir avec ce que tu es et ce qui te motive qu'avec une moyenne générale."
      },
      {
        heading: "Il isole, alors que c'est une question partagée par presque tout le monde.",
        text:
          "Le doute sur son avenir touche la grande majorité des jeunes — et beaucoup d'adultes aussi, à un tournant de leur vie professionnelle. Ce n'est pas un problème individuel, c'est une étape commune."
      },
      {
        text:
          "Le jour où le mot 'orientation' ressemblera davantage à 'exploration' qu'à 'verdict', il fera sans doute beaucoup moins peur."
      }
    ]
  }
];
