# bonnes-affaires

Page « Trouvailles » d'Adil et Zoé : gratuit et bonnes affaires du Grand Vancouver.

- Les trouvailles sont lues dans Supabase (table `trouvailles_etat`, lecture seule pour la page).
- Les votes, réponses et idées passent par la fonction `trouvailles_envoyer`, protégée par un code.
- Deux tâches planifiées mettent l'état à jour : annonces (3 fois par jour) et magasins (le jeudi).

## Installer sur le cell

- iPhone : ouvrir la page dans Safari, bouton Partager, « Sur l'écran d'accueil ».
- Android : ouvrir la page dans Chrome, menu ⋮, « Installer l'application ».

L'app s'ouvre alors plein écran, avec son icône, et reste lisible hors ligne (dernière version vue).
Les alertes d'aubaines arrivent par l'app ntfy (le nom du sujet privé n'est pas dans ce dépôt public).
