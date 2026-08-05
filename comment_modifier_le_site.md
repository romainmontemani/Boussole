# Comment modifier le site Boussole

## Le principe général

Tu ne touches jamais le code toi-même — tu décris ce que tu veux changer en
français à Claude Code, et c'est lui qui modifie les fichiers. Ton rôle :
décrire clairement, vérifier le résultat, redemander des ajustements si besoin.

## Le cycle de travail, à chaque fois

### 1. Ouvrir un terminal et se placer dans le projet
```bash
cd ~/Desktop/boussole-app
```

### 2. Lancer Claude Code
```bash
claude
```
Il relit automatiquement `CLAUDE.md` et retrouve le contexte du projet.

### 3. Décrire le changement voulu, en une phrase claire

Plus la demande est précise, meilleur est le résultat. Compare :

| Vague (à éviter) | Précis (à privilégier) |
|---|---|
| "Améliore la page d'accueil" | "Le titre de la page d'accueil est trop petit sur mobile, agrandis-le" |
| "Change les couleurs" | "Le bouton 'Commencer le quiz' est peu visible sur fond crème, teste un fond plus contrasté" |
| "Corrige un bug" | "Sur la page témoignages, le nom de Malo déborde de sa carte sur petit écran" |

### 4. Laisser Claude Code travailler, puis lire son résumé
Il explique ce qu'il a modifié et pourquoi — pas besoin de comprendre le
code, juste de vérifier que ça correspond à ta demande.

### 5. Vérifier dans le navigateur

Dans un **second onglet de terminal** (Cmd+T, pour garder la session Claude
Code active dans le premier) :
```bash
cd ~/Desktop/boussole-app
npm run dev
```
Puis ouvrir http://localhost:5173 et regarder le résultat.

### 6. Si ce n'est pas encore ça
Retourne dans l'onglet Claude Code et précise ce qui ne va pas — il ajuste.
Pas besoin de tout recommencer, juste de continuer la conversation.

## Exemples de demandes que tu pourras faire

- "Ajoute une 5ème question au quiz sur le style de vie souhaité"
- "La fiche conseil sur l'échec est trop longue, raccourcis-la à 3 phrases"
- "Sur mobile, les cartes de témoignages sont trop serrées, ajoute de l'espace"
- "Change le texte du bouton principal de 'Commencer le quiz' à 'C'est parti'"

## Pour les changements de contenu texte (pas de design)

Certains textes vivent dans des fichiers de données simples
(`src/data/testimonials.js`, `src/data/profiles.js`) — tu peux aussi
demander à Claude Code d'éditer directement un texte précis :

> Dans le témoignage de Léa, remplace "Le quiz m'a aidée" par "Ce test m'a aidée"

## Rappel

Chaque modification reste enregistrée sur ton Mac, dans le dossier du
projet — rien ne se perd entre deux sessions, tant que tu ne supprimes pas
de fichiers toi-même.
