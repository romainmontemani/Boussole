# Comment modifier le site maintenant qu'il est en ligne — le workflow complet

Ce guide remplace l'ancien (`comment_modifier_le_site.md`) — la
différence principale : il y a maintenant une étape en plus pour que tes
changements apparaissent sur le vrai site (`boussolefr.netlify.app`), pas
seulement en local sur ton Mac.

## Le principe en une phrase

Tu décris le changement à Claude Code → tu testes en local → une fois
content du résultat, tu "pousses" le changement → Netlify met à jour le
vrai site tout seul, automatiquement.

## Le cycle complet, à chaque fois

### 1. Ouvrir un terminal et se placer dans le projet
```bash
cd ~/Desktop/"Projet Boussole"
```

### 2. Lancer Claude Code
```bash
claude
```

### 3. Décrire le changement voulu, en une phrase claire
Comme avant — plus la demande est précise, meilleur est le résultat.
Exemples : "agrandis le titre de la page d'accueil sur mobile", "corrige
le témoignage de Léa, remplace 'aidée' par 'aidé'", "ajoute une 6ème
question au quiz sur..."

### 4. Vérifier le résultat en local (avant de mettre en ligne)

Dans un **second onglet de terminal** (Cmd+T, pour garder Claude Code
actif dans le premier) :
```bash
cd ~/Desktop/"Projet Boussole"
npm run dev
```
Ouvre `http://localhost:5173` et vérifie que le changement correspond
bien à ce que tu voulais.

**Ne saute jamais cette étape** — mieux vaut repérer un problème en local
que sur le vrai site que d'autres pourraient déjà visiter.

### 5. Une fois satisfait, mettre en ligne (pousser le changement)

Toujours dans ce second onglet (arrête `npm run dev` avec Ctrl+C
d'abord) :
```bash
git add .
git commit -m "Description courte du changement"
git push
```

Le message après `-m` peut être n'importe quoi de compréhensible pour
toi plus tard (ex. "Ajout question 6 au quiz", "Correction texte Léa").

### 6. Netlify se charge du reste, automatiquement

Dès que tu fais `git push`, Netlify détecte le changement sur GitHub et
relance un déploiement tout seul — pas besoin d'aller sur Netlify ni de
cliquer sur quoi que ce soit.

### 7. Vérifier que la mise en ligne s'est bien passée

1. Va sur https://app.netlify.com → ton site "boussolefr"
2. Onglet "Deploys" — le déploiement le plus récent doit passer à
   "Published" (1-2 minutes)
3. Ouvre `https://boussolefr.netlify.app` pour confirmer que le
   changement est bien visible sur le vrai site

## Résumé visuel du cycle

```
Décrire à Claude Code
        ↓
Tester en local (npm run dev)
        ↓
   Content du résultat ?
    ↙ non         ↘ oui
Repréciser      git add . / commit / push
à Claude Code         ↓
                Netlify redéploie tout seul
                        ↓
                Vérifier sur le vrai site
```

## Ce qui ne change pas

- Tu ne touches jamais le code toi-même, tu décris juste ce que tu veux
- Les mêmes principes de demande précise vs vague s'appliquent toujours
- Pour du contenu texte simple (un témoignage, un libellé), tu peux
  toujours donner le texte exact à remplacer directement à Claude Code

## Si un changement mis en ligne casse quelque chose

Netlify garde l'historique de tous tes déploiements précédents. Tu peux
revenir en arrière :
1. Onglet "Deploys" sur Netlify
2. Trouve un déploiement précédent qui fonctionnait bien
3. Clique dessus → cherche une option "Publish deploy" ou "Rollback"
   pour le republier tel quel, le temps de corriger le problème
   tranquillement en local

## Rappel important sur les compteurs Supabase

Chaque test en ligne (comme chaque test en local) modifie le vrai
compteur partagé — normal pendant que tu continues à peaufiner le site,
à remettre à zéro seulement juste avant d'annoncer largement le site
(voir le rappel donné précédemment).
