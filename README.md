# bonnes-affaires

Page « Trouvailles » d'Adil et Zoé : gratuit et bonnes affaires du Grand Vancouver.

- Les trouvailles sont lues dans Supabase (table `trouvailles_etat`, lecture seule pour la page).
- Les votes, réponses et idées passent par la fonction `trouvailles_envoyer`, protégée par un code.
- Deux tâches planifiées mettent l'état à jour : annonces (3 fois par jour) et magasins (le jeudi).
