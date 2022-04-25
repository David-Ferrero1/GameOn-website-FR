# Projet GameOn
1. Forkez ce repo ;
2. Il est conseillé d'utiliser VisualStudio Code et vous pouvez utiliser Docker, mais ce n'est pas obligatoire ;
3. Il n'y a aucune dépendance ;
4. Vous ne devez utiliser que du CSS personnalisé et du JavaScript pur, sans jQuery, Bootstrap ou autre librairie.

## Objectifs principaux
- Manipuler le DOM avec JavaScript
- Valider les données d'un formulaire

## Etapes réalisées

### Close modal

- création d'une constante pour récupérer la class "**.close**" dans une variable via un querySelector
- Ecouter l'évenement click lorsque l'utilisateur souhaite fermer la modal
- création d'une fonction qui, avec l'évenement click, fait disparaitre la modal.

## Taches
- Etape 1 - Fermer la modale : Ajouter la fonctionnalité au bouton (x) _
- Etape 2 - Implémenter entrées du formulaire _
- Etape 3 - Ajouter validation ou messages d'erreur
- Etape 4 - Ajouter confirmation quand envoi réussi
- Etape 5 - Tests manuel



(1) Lier les labels aux entrées dans le HTML en utilisant les attributs "for" et "id" dans le code existant. Corriger le code HTML quand nécessaire.
(2) Utiliser du JavaScript pur (pas de jQuery) pour terminer le formulaire :

Le formulaire doit être valide quand l'utilisateur clique sur "Submit"
Les données doivent être saisies correctement :
(1) Le champ Prénom a un minimum de 2 caractères / n'est pas vide.
(2) Le champ du nom de famille a un minimum de 2 caractères / n'est pas vide.
(3) L'adresse électronique est valide.
(4) Pour le nombre de concours, une valeur numérique est saisie.
(5) Un bouton radio est sélectionné.
(6) La case des conditions générales est cochée, l'autre case est facultative / peut être laissée décochée.
Conserver les données du formulaire (ne pas effacer le formulaire) lorsqu'il ne passe pas la validation.

formulaire onSubmit
Création compte emailJS
preventDefault