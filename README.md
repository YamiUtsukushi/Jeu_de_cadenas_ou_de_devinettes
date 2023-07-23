Voici les différentes fonctionnalités qu'il comporte:

clickSound, successSound, failSound: ces objets Audio sont utilisés pour jouer différents sons lors d'événements spécifiques.

secretNumber: C'est le nombre que l'utilisateur doit deviner. Il est généré de manière aléatoire par la fonction generateRandomNumber.

generateRandomNumber: Cette fonction génère un nombre aléatoire à trois chiffres qui devient le nombre secret.

attempts, currentGuess, timeElapsed, maxTime, gameTimer, maxAttempts: Ces variables sont utilisées pour suivre l'état actuel du jeu.

showHint: Cette fonction affiche les instructions du jeu.


addNumber: Cette fonction est utilisée pour ajouter un nombre à la supposition actuelle de l'utilisateur et déclenche une nouvelle supposition lorsque l'utilisateur a entré trois chiffres.

updateAttempts: Cette fonction met à jour l'affichage du nombre d'essais restants.

resetInput: Cette fonction réinitialise la supposition de l'utilisateur.

getJoke: Cette fonction fait une requête à une API de blagues et affiche une blague à l'utilisateur.

guessNumber: Cette fonction est utilisée pour vérifier la supposition de l'utilisateur. Elle compare la supposition de l'utilisateur au nombre secret et met à jour l'affichage en conséquence.

updateTimerBar: Cette fonction met à jour l'affichage de la barre de temps et arrête le jeu si le temps est écoulé.

updateRanking: Cette fonction met à jour le classement des scores et affiche le meilleur score.

updateScoreboard: Cette fonction met à jour l'affichage du tableau des scores.

resetGame: Cette fonction réinitialise le jeu.

window.onload: C'est l'événement qui se produit lorsque la page a fini de charger. Il déclenche la génération du nombre secret et l'affichage des tentatives restantes et du tableau des scores.

Le jeu fonctionne en invitant l'utilisateur à deviner un nombre à trois chiffres dans un temps limité. L'utilisateur a un nombre maximum d'essais pour deviner le nombre. Si l'utilisateur devine le nombre correctement, il reçoit des applaudissements et le jeu se réinitialise. Si l'utilisateur n'arrive pas à deviner le nombre après un certain nombre d'essais ou si le temps est écoulé, le jeu se réinitialise et une blague est affichée.
