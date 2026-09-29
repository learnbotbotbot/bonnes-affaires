# bonnes-affaires

Page « Trouvailles » d'Adil et Zoé : gratuit et bonnes affaires du Grand Vancouver.

- Trois onglets : Trouvailles (fil trié, temps d'auto et essence aller-retour au prix du jour), Notre liste (partagée, itinéraire, message au vendeur, tournée Google Maps) et Recherches (ajout ou retrait de recherches, mode auto, réglages de trajet).
- Les trouvailles sont lues dans Supabase (table `trouvailles_etat`, lecture seule pour la page).
- Les votes, recherches et idées passent par la fonction `trouvailles_envoyer`, protégée par un code ; `trouvailles_votes` montre à chacun les réponses de l'autre.
- « À Adil » et « À Zoé » passent par la fonction `trouvailles-partager`, qui envoie une notification ntfy sur le cell de l'autre (les sujets privés ne sont pas dans ce dépôt public).
- Une tâche planifiée met l'état à jour trois fois par jour (annonces, prix de l'essence, mode auto).

## Installer sur le cell

- iPhone : ouvrir la page dans Safari, bouton Partager, « Sur l'écran d'accueil ».
- Android : ouvrir la page dans Chrome, menu ⋮, « Installer l'application ».

L'app s'ouvre alors plein écran, avec son icône, reste lisible hors ligne (dernière version vue) et se met à jour toute seule quand on y revient.
