let clickSound = new Audio('clic.wav');
let successSound = new Audio('applaudissements.wav');
let failSound = new Audio('dommage.wav');

let secretNumber;
let attempts = 0;
let currentGuess = [];
let timeElapsed = 0;
let maxTime = 10; // en millisecondes
let gameTimer = null;
let maxAttempts = 7;




function showHint() {
    alert("Instructions du jeu : \n\n1. Cliquez sur les chiffres pour former un nombre à trois chiffres. \n\n2. Une fois que vous avez entré un nombre à trois chiffres, il sera automatiquement comparé au nombre secret. \n\n3. Les chiffres corrects à la bonne position seront affichés en vert, les chiffres corrects à la mauvaise position seront affichés en orange, et les chiffres incorrects seront affichés en rouge. \n\n4. Vous avez 7 essais pour deviner le nombre. Si vous ne parvenez pas à deviner le nombre en 7 essais, le jeu se réinitialisera et un nouveau nombre secret sera généré. \n\n5. Si vous devinez correctement le nombre, vous verrez une alerte de félicitations et le jeu se réinitialisera. \n\n6. Cliquez sur le bouton 'Effacer' pour effacer votre entrée actuelle. \n\n7. Cliquez sur 'Indice' pour afficher ces instructions à nouveau. \n\nBonne chance et amusez-vous bien !");
}

function generateRandomNumber() {
    let digits = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
    secretNumber = [];

    for(let i=0; i<3; i++) {
        let index = Math.floor(Math.random() * digits.length);
        secretNumber.push(digits[index]);
        digits.splice(index, 1);
    }
}

function addNumber(num) {
    clickSound.play();
    if (currentGuess.length < 3) {
        currentGuess.push(num);
        document.getElementById('numberInput').value = currentGuess.join('');
    }
    if (currentGuess.length === 3) {
        guessNumber();
    }
    if (gameTimer === null) {
        gameTimer = setInterval(updateTimerBar, 1);

        // Faire apparaître la barre de progression
        let progressBar = document.getElementById('progressBar');
        progressBar.style.display = 'block'; // modifier le style de la barre de progression
        progressBar.style.width = '0%'; // réinitialiser la largeur de la barre de progression
    }
}



function updateAttempts() {
    let remainingAttempts = maxAttempts - attempts;
    document.getElementById('remainingAttempts').textContent = `Essais restants: ${remainingAttempts}`;
}

function resetInput() {
    currentGuess = [];
    document.getElementById('numberInput').value = "";
}


function getJoke() {
    fetch('https://official-joke-api.appspot.com/random_joke')
        .then(response => response.json())
        .then(data => {
            console.log(data);
            alert(`Voici une blague pour vous : \n${data.setup}\n${data.punchline}`);
        })
        .catch(error => console.error('Erreur:', error));
}


function guessNumber() {
    if (currentGuess.length !== 3) {
        alert("Veuillez entrer un nombre à trois chiffres");
        return;
    }

    let userGuess = Array.from(currentGuess, Number);
    let guessContainer = document.createElement('div');
    guessContainer.className = "guess";

    let correctGuesses = 0;
    let correctGuessesIndices = [];

    for (let i = 0; i < 3; i++) {
        let guessElement = document.createElement('span');

        if(userGuess[i] == secretNumber[i]) {
            guessElement.className = "correct";
            correctGuesses++;
            correctGuessesIndices.push(i);
        }
        guessElement.textContent = userGuess[i] + " ";
        guessContainer.appendChild(guessElement);
    }

    for (let i = 0; i < 3; i++) {
        if(guessContainer.childNodes[i].className !== "correct" && secretNumber.includes(userGuess[i]) && !correctGuessesIndices.includes(secretNumber.indexOf(userGuess[i]))) {
            guessContainer.childNodes[i].className = "wrong-position";
        } else if(guessContainer.childNodes[i].className !== "correct") {
            guessContainer.childNodes[i].className = "wrong";
        }
    }

    document.getElementById('history').appendChild(guessContainer);
    resetInput();
    attempts++;

    updateAttempts();

    if (correctGuesses === 3) {
        successSound.play();
        clearInterval(gameTimer);
        gameTimer = null;

        let currentScore = updateRanking(); // Ici, vous capturez le score actuel
        let formattedScore = currentScore.toFixed(3); // Formater le score avec 3 décimales

        new Promise(resolve => setTimeout(resolve, 1000)).then(() => {
            alert(`Félicitations ! Vous avez deviné le bon nombre ! ${secretNumber.join('')}. Votre temps : ${formattedScore} secondes`);
            resetGame();
        });
    } else if (attempts >= maxAttempts) {
        failSound.play();
        clearInterval(gameTimer);
        gameTimer = null;
        new Promise(resolve => setTimeout(resolve, 1000)).then(() => {
            alert(`Vous avez atteint la limite de ${maxAttempts} essais. Le jeu va se réinitialiser. La réponse attendue était ${secretNumber.join('')}.`);
            getJoke();
            resetGame();
        });
    }
}



function updateTimerBar() {
    timeElapsed += 0.001; // Increase timeElapsed by 0.001 seconds (1 millisecond)
    let progressBar = document.getElementById('progressBar');
    let percentComplete = (timeElapsed / maxTime) * 100;
    progressBar.style.width = percentComplete + "%";

    if (timeElapsed < maxTime) {
        // Calculate time left in seconds
        let timeLeft = maxTime - timeElapsed;

        // Convert timeLeft to seconds and milliseconds and format it as ss:fff
        let seconds = Math.floor(timeLeft);
        let milliseconds = Math.floor((timeLeft % 1) * 1000);
        let timeString = `${seconds.toString().padStart(2, '0')}:${milliseconds.toString().padStart(3, '0')}`;

        // Update timeLeft element
        document.getElementById('timeLeft').textContent = timeString;
    }

    if (timeElapsed >= maxTime) {
        clearInterval(gameTimer); // Stop the timer
        gameTimer = null; // Reset the timer variable
        setTimeout(function() {
            alert(`Le temps est écoulé ! La partie va se réinitialiser. La réponse attendue était ${secretNumber.join('')}.`);
            resetGame();
            updateScoreboard(); // Mettez à jour le tableau des scores après la réinitialisation du jeu
        }, 500);
    }
}


function updateRanking() {
    // Récupérer les scores précédents du LocalStorage
    let scores = JSON.parse(localStorage.getItem('scores')) || [];

    // Ajouter le score actuel (temps écoulé en "microsecondes") à la liste
    scores.push(timeElapsed);

    // Trier les scores par ordre croissant (plus petit en premier)
    scores.sort((a, b) => a - b);

    // Enregistrer seulement les 10 premiers scores (les meilleurs)
    scores = scores.slice(0, 10);

    // Enregistrer les scores dans le LocalStorage
    localStorage.setItem('scores', JSON.stringify(scores));

    // Déterminer le classement de l'utilisateur
    let rank = scores.indexOf(timeElapsed) + 1; // +1 car les indices commencent à 0

    // Mettre à jour le texte de l'indicateur de classement
    let rankingText;
    if (rank <= 5) {
        rankingText = "Vous êtes parmi les 5 meilleurs";
    } else if (rank <= 10) {
        rankingText = "Vous êtes parmi les 10 meilleurs";
    } else {
        rankingText = "Hors classement";
    }

    document.getElementById('ranking').textContent = rankingText;

    // Mettre à jour le meilleur score
    if (scores.length > 0) {
        let bestScore = scores[0];  // Le meilleur score est le premier de la liste triée
        document.getElementById('bestScore').textContent = `Meilleur score: ${bestScore.toFixed(3)} secondes`;
    }

    // Renvoie le score courant pour afficher dans l'alerte
    return timeElapsed;
}

function updateScoreboard() {
    // Récupérer les scores du LocalStorage
    let scores = JSON.parse(localStorage.getItem('scores')) || [];

    // Trier les scores par ordre croissant (plus petit en premier)
    scores.sort((a, b) => a - b);

    // Générer le tableau des scores
    let scoreboardHtml = "<h2>Meilleurs temps:</h2><ol>";
    for (let i = 0; i < scores.length; i++) {
        // Convertir le temps en secondes et "microsecondes"
        let seconds = Math.floor(scores[i]);
        let microseconds = Math.floor((scores[i] - seconds) * 1000);
        let timeString = seconds + "." + microseconds.toString().padStart(3, '0') + "s";

        scoreboardHtml += "<li>" + timeString + "</li>";
    }
    scoreboardHtml += "</ol>";

    // Afficher le tableau des scores
    document.getElementById('scoreboard').innerHTML = scoreboardHtml;
}

function resetGame() {
    attempts = 0;
    timeElapsed = 0; // Reset the elapsed time
    document.getElementById('history').innerHTML = ""; // Clear history
    generateRandomNumber(); // Generate new secret number
    clearInterval(gameTimer); // Stop the timer
    gameTimer = null; // Reset the timer variable
    updateAttempts(); // Update remaining attempts

    // Cacher la barre de progression
    let progressBar = document.getElementById('progressBar');
    progressBar.style.display = 'none'; // modifier le style de la barre de progression

    updateScoreboard(); // Update the scoreboard with the latest scores
}


window.onload = function() {
    generateRandomNumber();
    updateAttempts(); // Display remaining attempts when the page loads
    updateScoreboard(); // Display the scoreboard when the page loads

}

