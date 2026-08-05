# Boussole — projet React

Application d'aide à l'orientation des jeunes. Ce dossier est un projet React
(Vite) prêt à être ouvert et continué dans **Claude Code**.

## Où on en est

- ✅ Étape 1 : structure générale + page d'accueil (ce projet)
- ✅ Étape 2 : quiz fonctionnel avec logique de résultats
- ⬜ Étape 3 : section témoignages (données réelles + filtres)
- ⬜ Étape 4 : section conseils
- ⬜ Étape 5 : finitions du design

## Charte graphique (rappel)

Les couleurs, polices et règles de mise en page sont toutes dans
`src/index.css` (variables CSS en haut du fichier) — ne pas dupliquer ces
valeurs ailleurs, toujours réutiliser les classes existantes ou les variables
`var(--indigo)`, `var(--terracotta)`, etc.

Le logo (`src/components/Logo.jsx`) est la seule source du tracé de marque
(cercle + aiguille diagonale). Toujours importer ce composant plutôt que de
redessiner l'icône ailleurs dans le code.

- Indigo `#3D3562` · Terracotta `#E07A5F` · Sauge `#8FA998`
- Crème `#FBF9F6` · Sable `#F3EFEA` · Anthracite `#2E2B33`
- Titres : Sora · Texte courant : Inter

## Démarrer le projet

Il faut Node.js installé (version 18 ou plus). Dans un terminal, à la racine
de ce dossier :

```bash
npm install
npm run dev
```

Le site s'ouvre alors sur `http://localhost:5173`.

## Continuer avec Claude Code

1. Installer Claude Code si ce n'est pas déjà fait : voir
   https://docs.claude.com/en/docs/claude-code
2. Ouvrir un terminal dans ce dossier (`boussole-app/`)
3. Lancer `claude` — Claude Code prend alors le contexte du projet
4. Prochaine étape à demander : section conseils (étape 4 ci-dessus).

## Décisions prises pour le quiz (étape 2)

- 4 profils types (`src/data/profiles.js`) : analytique-scientifique,
  relationnel-terrain, créatif-expression, organisateur-stratège — un par
  témoignage (`src/data/testimonials.js`), pas de témoignage orphelin.
- 12 questions, chacune pondérée (poids 1 ou 1.5 pour les questions
  "valeurs"), chaque option distribuant des points à un ou deux profils
  (0 à 3) plutôt qu'à un seul — ça étale les scores et limite les égalités
  entre deux profils proches. En cas d'égalité stricte malgré tout, le
  premier profil du tableau `PROFILES` l'emporte (choix arbitraire mais
  stable).

## Déploiement

Une fois prêt : `npm run build` génère un dossier `dist/` statique,
déployable gratuitement sur Vercel ou Netlify (glisser-déposer le dossier
sur netlify.com/drop suffit pour un premier test).
