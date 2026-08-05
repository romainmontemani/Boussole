# Les likes sur localhost sont réels et permanents

## Pourquoi ça persiste

Le compteur vit dans Supabase, un service en ligne totalement indépendant
de ton ordinateur. `localhost:5173` n'est qu'une **adresse d'accès**
pendant que tu développes — les données que cette adresse écrit vont
exactement au même endroit que celles qu'écrirait la vraie adresse
publique plus tard. Rien n'est "en mode test" côté base de données.

## Ce que ça implique concrètement

Chaque clic que tu as fait pendant tes essais est resté enregistré dans
la table `reactions` de Supabase — le compteur n'est donc plus à 0
actuellement, il contient tes propres tests.

## Une petite nuance annexe (mineure)

Le système qui t'empêche de cliquer plusieurs fois sur le même
témoignage (le "déjà réagi") est stocké dans le localStorage de ton
navigateur, lié à l'adresse exacte que tu utilises. Donc si tu passes de
`localhost:5173` à une vraie adresse plus tard, ce blocage personnel ne
suivra pas automatiquement — tu pourrais reliker une fois de plus sur le
vrai site. Pas grave en soi (juste un like en plus), mais bon à savoir.

## Ce qu'il faut faire avant le vrai lancement public

Remettre les compteurs à zéro dans Supabase, pour que les chiffres
affichés reflètent uniquement de vrais visiteurs, pas tes tests de
développement.

### Comment faire, quand tu seras prêt à lancer pour de vrai

Dans Supabase → **SQL Editor** → nouvelle requête → colle :

```sql
update reactions set count = 0;
```

Puis "Run". Ça remet tous les compteurs à zéro sans supprimer la
structure — le site repart avec des chiffres honnêtes dès l'ouverture au
public.

**Ne le fais pas maintenant** — seulement juste avant le vrai lancement,
une fois que tu auras fini tous tes tests et réglages.
