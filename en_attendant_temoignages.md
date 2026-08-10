# En attendant les témoignages — ce qui vaut la peine d'être fait maintenant

## 1. Le consentement — à régler avant de recevoir les premières réponses

Publier le prénom, l'âge, une photo et une histoire personnelle de
quelqu'un en ligne nécessite son accord clair. **Si la personne a moins de
18 ans, il faut aussi l'accord d'un parent** — un simple message ou une
case à cocher suffit, mais ça doit exister.

**Action concrète** : ajoute une ligne à la fin de ton guide de questions
(`questions_temoignages.md`), du type :

> "En répondant à ces questions, tu acceptes que tes réponses (et ta photo
> si tu en fournis une) soient publiées sur le site Boussole, sous ton
> prénom ou un pseudo au choix. Si tu as moins de 18 ans, merci de nous le
> signaler pour qu'on obtienne aussi l'accord d'un parent."

Ce n'est pas un contrat juridique complexe à ce stade — juste s'assurer
que l'accord est explicite et tracé (garde les échanges par écrit, même un
simple message).

## 2. Tester le quiz à fond (rapide, à faire toi-même)

Refais le quiz plusieurs fois en répondant différemment chaque fois, pour
vérifier que :
- Les 5 profils peuvent chacun sortir comme résultat (pas seulement 4)
- Le tie-break fonctionne bien s'il y a égalité
- Aucune question ne "bloque" ou ne s'affiche mal

## 3. Convertir le site en PWA et tester sur ton téléphone

Le guide (`GUIDE_PWA.md`) est prêt depuis un moment mais pas encore
appliqué. C'est le meilleur moyen de repérer des problèmes d'affichage
mobile (texte trop petit, boutons trop proches) — bien plus utile à faire
maintenant, sur le vrai contenu, que d'attendre la fin.

## 4. Mettre le projet sous Git / GitHub

Toujours pas fait (recommandé depuis plusieurs étapes). Un projet qui
grossit sans sauvegarde externe est un risque inutile — 5 minutes à
investir :
```bash
cd ~/Desktop/"Projet Boussole"
git init
git add .
git commit -m "Sauvegarde avant récolte des témoignages"
```
Puis créer un dépôt sur https://github.com/new et suivre les instructions.

## 5. Relire le contenu du profil Manuel-Artisanal

C'est le plus récent des 5 profils — vérifie que sa tagline, sa
description et ses pistes de métiers/formations sonnent aussi naturelles
et non-clichées que les 4 autres (pas de "métier de la main" écrit avec un
ton condescendant, par exemple).

## 6. Petits détails techniques utiles maintenant

- **Titre de l'onglet et favicon** : vérifie que l'onglet du navigateur
  affiche bien "Boussole" et une petite icône (pas juste "Vite + React"
  par défaut)
- **Meta description** : une phrase qui décrirait le site si quelqu'un le
  partage sur les réseaux ou dans un moteur de recherche

## Ce qui peut clairement attendre

- Les finitions fines de design (mieux vaut les faire une fois le contenu
  réel en place, pas avant)
- Toute nouvelle fonctionnalité — pas la priorité pendant cette phase
  d'attente
