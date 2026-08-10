# Boussole — contexte complet du projet (à coller en premier message d'une nouvelle conversation)

*Généré le 5 août 2026*

## Le projet

Site/appli d'aide à l'orientation pour les jeunes en questionnement et
les adultes en reconversion. Nom : **Boussole**. Mission centrale :
déculpabiliser le doute face à l'avenir autant qu'orienter — l'angoisse
de ne pas savoir est un sujet tabou dont on ne parle pas assez, et le
site veut d'abord dire "tu n'es pas seul(e)".

## Charte graphique (verrouillée)

**Logo** : cercle fin + aiguille diagonale terracotta — tracé officiel
vivant dans `src/components/Logo.jsx`, jamais redessiné ailleurs.

**Couleurs** :
- Crème `#FBF9F6` (fond principal) · Sable `#F3EFEA` (fond alterné)
- Indigo `#3D3562` (marque, titres — aussi profil Analytique-scientifique)
- Anthracite `#2E2B33` (texte — aussi profil Organisateur-stratège)
- Sauge `#8FA998` (accent secondaire — aussi profil Relationnel-terrain)
- Terracotta `#E07A5F` (accent d'action/CTA — aussi profil Créatif-expression)
- Terracotta foncé `#B85A42` (profil Manuel-artisanal)

**Typographies** : Sora (titres) · Inter (texte courant) · JetBrains Mono
(données/compteurs)

**Ton** : sobre et chaleureux, tutoiement, phrases courtes, jamais
infantilisant ni administratif.

## Les 5 profils du quiz

1. Analytique-scientifique — Léa, 19 ans, BUT Informatique
2. Relationnel-terrain — Yanis, 22 ans, reconversion en cours
3. Créatif-expression — Inès, 18 ans, BTS Design graphique
4. Organisateur-stratège — Malo, 21 ans, Master Management de projet
5. Manuel-artisanal — témoignage réel encore à récolter

Chaque profil : sa couleur, son témoignage, sa page article
(contexte/déclic/aujourd'hui/conseil), sélection aléatoire si plusieurs
témoignages existent un jour pour le même profil.

## État technique actuel

- **Stack** : React + Vite, react-router-dom (routes `/`, `/quiz`,
  `/parcours`, `/parcours/:id`)
- **Site en ligne** : https://boussolefr.netlify.app (public, fonctionnel)
- **Code source** : https://github.com/romainmontemani/Boussole
- **Déploiement** : automatique via Netlify à chaque `git push`
- **Dossier local** : `~/Desktop/"Projet Boussole"` (attention à l'espace
  dans le nom — utiliser des guillemets ou l'autocomplétion Tab)
- **Base de données** : Supabase (gratuit) — table `reactions`, fonctions
  `increment_reaction` et `decrement_reaction`, sécurisées par Row Level
  Security. Clés dans un fichier `.env` à la racine du projet (jamais
  partagé publiquement, jamais commité)
- **PWA** : installable sur téléphone (manifest, service worker, icônes,
  bandeau d'installation adapté iOS/Android)

## Fonctionnalités en place

- Quiz complet (14 questions, scoring pondéré, tie-break déterministe)
- Précisions "il n'y a pas de bonne réponse" (avant le quiz) et "ce
  profil éclaire des pistes, il ne dicte pas" (après le quiz)
- Page "Parcours" (liste des témoignages) + pages articles individuelles
- Bouton de réaction "❤️ Ce parcours m'a aidé(e)" — compteur **partagé
  en temps réel** entre tous les visiteurs via Supabase, réversible
  (comme un like classique)
- Résultat de quiz sous forme d'image téléchargeable/partageable (sans
  collecte d'email, URL dynamique adaptée au domaine réel)
- Design mobile corrigé (nav en hamburger, espacements, etc.)

## Décisions importantes à ne pas oublier

- **Pas de forum ouvert ni de commentaires libres** — trop risqué à
  modérer seul pour un public incluant des mineurs
- **Fusion Témoignages/Conseils par thème abandonnée** — remplacée par
  des articles enrichis par témoignage (contexte/déclic/aujourd'hui/conseil)
- Prévoir une mention de ressources d'aide (3114, Fil Santé Jeunes)
  quelque part sur le site — pas encore fait
- Les compteurs Supabase actuels contiennent des clics de test — **à
  remettre à zéro juste avant d'annoncer le site publiquement**, jamais
  avant (`update reactions set count = 0;`)
- Consentement écrit obligatoire avant de publier un témoignage,
  accord parental en plus si la personne a moins de 18 ans (guide de
  questions + fiche de consentement déjà rédigés)

## Le workflow pour continuer à coder

1. `cd ~/Desktop/"Projet Boussole"` puis `claude` (Claude Code garde son
   propre contexte via CLAUDE.md, indépendant de cette conversation-ci)
2. Décrire le changement voulu
3. Tester en local (`npm run dev`)
4. Une fois satisfait : `git add . && git commit -m "..." && git push`
   (Netlify redéploie automatiquement)

## À faire plus tard (pas urgent)

- Récolter les vrais témoignages, remplacer le contenu provisoire
- Remettre les compteurs Supabase à zéro avant lancement public
- Google Search Console (le site n'apparaît pas encore dans les
  recherches Google — normal, pas encore fait exprès)
- Nom de domaine personnalisé (optionnel, ~7-15€/an au renouvellement)
