// Témoignages liés aux 5 profils du quiz (voir src/data/profiles.js).
// Chaque profil a un témoignage rattaché, affiché sur l'écran de résultat
// (src/components/Quiz.jsx) et repris dans la grille de la page /parcours.
// Chaque témoignage a aussi sa propre page article, accessible via
// /parcours/[id] (voir src/pages/TestimonialPage.jsx).
//
// `id` : identifiant d'URL (slug), utilisé dans /parcours/[id].
// `photo` : URL ou chemin (ex. "/images/testimonials/lea.jpg") vers une photo
// réelle. `null` si aucun visuel n'existe encore — les composants affichent
// alors le rond de couleur du profil en repli.
// `contexte`, `declic`, `aujourdhui`, `conseil` : les 4 parties du texte long
// affiché sur la page article dédiée. Contenu provisoire pour l'instant, à
// remplacer par le témoignage complet et validé.
export const TESTIMONIALS = [
  {
    id: "lea",
    profileId: "analytique",
    name: "Léa",
    age: 19,
    formation: "BUT Informatique",
    quote:
      "Je pensais devoir choisir entre passion et sécurité. Le quiz m'a aidée à voir que les deux pouvaient se rejoindre.",
    contexte:
      "Au lycée, on me répétait que l'informatique était un choix « sûr » mais un peu froid, presque en opposition avec tout ce qui me faisait vibrer. J'avais peur de m'ennuyer, de finir dans un métier sans âme juste parce qu'il rassurait mes parents.",
    declic:
      "Le déclic est venu quand j'ai compris que la programmation pouvait aussi être un terrain d'expérimentation créatif : construire quelque chose de zéro, résoudre un problème sous plusieurs angles, itérer jusqu'à trouver la bonne solution. Ce n'était plus un plan B raisonnable, c'était un vrai choix.",
    aujourdhui:
      "Aujourd'hui, en BUT Informatique, je retrouve cette même excitation que quand je bidouillais des petits projets perso le soir. La rigueur ne m'a pas éteinte, elle m'a donné un cadre pour aller plus loin dans mes idées.",
    conseil:
      "Si je devais dire une chose à la Léa d'il y a deux ans : la passion et la sécurité ne s'excluent pas forcément, il faut juste trouver l'endroit où elles se superposent.",
    photo: "/images/testimonials/lea.jpg"
  },
  {
    id: "yanis",
    profileId: "relationnel",
    name: "Yanis",
    age: 22,
    formation: "Reconversion en cours",
    quote:
      "Après un échec en prépa, j'étais perdu. Lire un parcours qui ressemblait au mien m'a redonné confiance.",
    contexte:
      "J'ai arrêté ma prépa au milieu de la deuxième année. Sur le papier, c'était un échec, et c'est comme ça que je l'ai vécu pendant plusieurs mois : comme une preuve que je n'étais pas assez bon, pas assez rigoureux, pas assez « fait pour » réussir.",
    declic:
      "Ce que je n'avais pas vu, c'est que je m'étais épuisé à essayer de rentrer dans un moule qui ne me correspondait pas. J'avais besoin de contact humain, d'action concrète, de sentir que ce que je faisais avait un impact immédiat sur quelqu'un — pas seulement sur une copie notée.",
    aujourdhui:
      "La reconversion n'a pas été un chemin en ligne droite. Il a fallu accepter de recommencer, de poser des questions simples que j'aurais dû me poser bien avant : qu'est-ce qui me fait me sentir vivant au quotidien ? Avec qui, et pour qui, j'ai envie de travailler ? Je suis encore en plein dedans, mais pour la première fois depuis longtemps, j'avance sans avoir l'impression de me trahir.",
    conseil:
      "Si mon parcours peut rassurer quelqu'un qui traverse la même chose : un échec n'est pas une sentence, c'est parfois juste le mauvais chemin qui se referme pour en ouvrir un autre.",
    photo: null
  },
  {
    id: "ines",
    profileId: "creatif",
    name: "Inès",
    age: 18,
    formation: "BTS Design graphique",
    quote:
      "On me disait que dessiner ne mènerait à rien. Aujourd'hui je fais un BTS design et je n'ai jamais été aussi sûre de moi.",
    contexte:
      "« Tu ne vas pas vivre de ça. » Je ne compte plus le nombre de fois où on m'a dit cette phrase, souvent avec bienveillance, parfois pas. Résultat : j'ai passé des années à considérer le dessin comme un loisir qu'il fallait ranger dès que les choses sérieuses commençaient.",
    declic:
      "Le problème, c'est que plus j'essayais de m'en éloigner, plus je m'y sentais obligée de revenir. C'était la seule chose qui me donnait vraiment envie de me lever le matin, la seule où je perdais la notion du temps.",
    aujourdhui:
      "Décider de candidater en BTS Design graphique, c'était accepter de prendre un risque que mon entourage ne comprenait pas totalement. Mais depuis la rentrée, pour la première fois, mon travail scolaire et ce qui m'anime vraiment sont la même chose.",
    conseil:
      "Je ne dis pas que c'est facile ni que c'est un chemin tout tracé. Mais je n'ai plus l'impression de choisir entre « faire ce que j'aime » et « faire quelque chose de sérieux » — et ça change tout.",
    photo: null
  },
  {
    id: "malo",
    profileId: "stratege",
    name: "Malo",
    age: 21,
    formation: "Master Management de projet",
    quote:
      "Je culpabilisais de préférer organiser plutôt que 'faire'. J'ai compris que le pilotage de projet était un vrai métier, pas un plan B.",
    contexte:
      "Pendant longtemps, j'ai eu l'impression d'être le seul de mon groupe à préférer construire le planning plutôt que d'être celui qui « fabrique » concrètement le rendu final. J'avais l'impression que mon rôle était secondaire, presque un aveu que je ne savais pas faire autre chose.",
    declic:
      "Avec le temps, j'ai réalisé que sans quelqu'un pour structurer, prioriser et faire tenir un cap commun, la plupart des projets de groupe partaient dans tous les sens. Ce n'était pas un rôle « en creux », c'était une compétence à part entière — et une compétence recherchée.",
    aujourdhui:
      "En Master Management de projet, j'ai enfin un cadre où cette façon de penser est reconnue comme une expertise, pas comme un défaut d'implication. Organiser, anticiper, faire avancer un collectif : c'est un métier, avec ses propres outils et sa propre exigence.",
    conseil:
      "Si je devais résumer : arrête de culpabiliser parce que tu préfères le plan à l'exécution. On a besoin des deux, et le pilotage n'est le plan B de personne.",
    photo: null
  },
  {
    id: "nolan",
    profileId: "manuel-artisanal",
    name: "Nolan",
    age: 20,
    formation: "CAP Ébénisterie",
    quote:
      "On me demandait sans arrêt ce que j'allais 'vraiment' faire plus tard, comme si travailler de mes mains n'était pas un métier sérieux. Aujourd'hui je fabrique des meubles et je n'ai jamais rien fait d'aussi concret.",
    contexte:
      "[Témoignage provisoire, à remplacer par une vraie interview] Au collège puis au lycée, j'ai souvent eu droit à la même remarque déguisée en question : « oui mais après, tu comptes faire quoi, sérieusement ? » Comme si aimer travailler le bois, couper, poncer, assembler, n'était qu'une étape avant de « vraies » études.",
    declic:
      "Pourtant, c'est le seul endroit où j'avais l'impression de vraiment progresser. Voir une planche brute devenir un meuble fini, avec ses propres mains, ça m'apprenait autant de patience que de précision — et ça ne rentrait dans aucune case scolaire classique.",
    aujourdhui:
      "Le CAP Ébénisterie n'a pas été un repli après un échec, c'est le premier choix que j'ai fait vraiment pour moi. Il y a une rigueur technique énorme derrière chaque assemblage, chaque finition — ce n'est pas « moins intellectuel », c'est juste une autre forme d'intelligence, celle du geste.",
    conseil:
      "Aujourd'hui quand on me demande ce que je fais, je n'ai plus besoin de me justifier. Je fabrique des objets qui vont durer des années dans le salon de quelqu'un, et il n'y a pas grand-chose qui me rend aussi fier que ça.",
    photo: null
  }
];
