
# Projet Cadenas

Ce projet est une application interactive développée en HTML, CSS, et JavaScript. Le but du projet est de simuler un jeu ou une interaction basée sur des indices et des réponses, similaire à un jeu de cadenas ou de devinettes.

## Prérequis

Avant de pouvoir lancer ce projet, assurez-vous d'avoir les éléments suivants installés sur votre machine :

- **Navigateur Web** : Le projet peut être exécuté directement dans un navigateur web moderne.
- **Serveur local (facultatif)** : Pour tester l'application en environnement local, vous pouvez utiliser un serveur local comme [Live Server](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer) pour VS Code.

## Installation

Suivez les étapes ci-dessous pour installer et lancer le projet localement :

1. **Cloner le dépôt** :
   
   Clonez ce dépôt sur votre machine locale en utilisant la commande suivante :

   ```bash
   git clone https://github.com/YamiUtsukushi/cadenas.git
   ```

2. **Accéder au répertoire du projet** :

   Déplacez-vous dans le répertoire du projet :

   ```bash
   cd cadenas
   ```

3. **Ouvrir le fichier `index.html`** :

   Ouvrez le fichier `index.html` dans votre navigateur pour commencer à utiliser l'application.

## Fonctionnalités de l'application

Voici un aperçu des fonctionnalités disponibles dans ce projet :

1. **clickSound, successSound, failSound** : Ces objets Audio sont utilisés pour jouer différents sons lors d'événements spécifiques.
2. **secretNumber** : C'est le nombre que l'utilisateur doit deviner. Il est généré de manière aléatoire par la fonction `generateRandomNumber`.
3. **generateRandomNumber** : Cette fonction génère un nombre aléatoire à trois chiffres qui devient le nombre secret.
4. **attempts, currentGuess, timeElapsed, maxTime, gameTimer, maxAttempts** : Ces variables sont utilisées pour suivre l'état actuel du jeu.
5. **showHint** : Cette fonction affiche les instructions du jeu.
6. **addNumber** : Cette fonction est utilisée pour ajouter un nombre à la supposition actuelle de l'utilisateur et déclenche une nouvelle supposition lorsque l'utilisateur a entré trois chiffres.
7. **updateAttempts** : Cette fonction met à jour l'affichage du nombre d'essais restants.
8. **resetInput** : Cette fonction réinitialise la supposition de l'utilisateur.
9. **getJoke** : Cette fonction fait une requête à une API de blagues et affiche une blague à l'utilisateur.
10. **guessNumber** : Cette fonction est utilisée pour vérifier la supposition de l'utilisateur. Elle compare la supposition de l'utilisateur au nombre secret et met à jour l'affichage en conséquence.
11. **updateTimerBar** : Cette fonction met à jour l'affichage de la barre de temps et arrête le jeu si le temps est écoulé.
12. **updateRanking** : Cette fonction met à jour le classement des scores et affiche le meilleur score.
13. **updateScoreboard** : Cette fonction met à jour l'affichage du tableau des scores.
14. **resetGame** : Cette fonction réinitialise le jeu.
15. **window.onload** : C'est l'événement qui se produit lorsque la page a fini de charger. Il déclenche la génération du nombre secret et l'affichage des tentatives restantes et du tableau des scores.

Le jeu fonctionne en invitant l'utilisateur à deviner un nombre à trois chiffres dans un temps limité. L'utilisateur a un nombre maximum d'essais pour deviner le nombre. Si l'utilisateur devine le nombre correctement, il reçoit des applaudissements et le jeu se réinitialise. Si l'utilisateur n'arrive pas à deviner le nombre après un certain nombre d'essais ou si le temps est écoulé, le jeu se réinitialise et une blague est affichée.

## Structure du projet

Voici un aperçu de la structure des fichiers et des dossiers dans ce projet :

```
cadenas/
│
├── assets/
│   ├── start_screenshot.png
│   ├── game_in_progress.png
│   ├── success_screenshot.png
│   └── failure_screenshot.png
│
├── applaudissements.wav
├── clic.wav
├── dommage.wav
├── index.html
├── script.js
├── style.css
└── README.md
```

## Contribution

Les contributions sont les bienvenues ! Si vous avez des idées d'amélioration ou si vous trouvez des bugs, n'hésitez pas à ouvrir une *issue* ou une *pull request*.

## Licence

Ce projet est sous licence MIT. Vous êtes libre de l'utiliser, le modifier et le distribuer, sous réserve de maintenir la licence originale dans toutes les copies ou versions dérivées.

---

Merci d'avoir exploré ce projet ! N'hésitez pas à me contacter pour toute question ou suggestion d'amélioration.
