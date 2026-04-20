# 🔐 Jeu de Cadenas

Un jeu de déduction de code secret, jouable directement dans le navigateur. Devinez le nombre secret avant que le temps ne s'écoule !

<br>

## 📸 Aperçu

**Écran d'accueil — Choix du pseudo & difficulté**

![Écran d'accueil](screenshots/accueil.png)

<br>

**Partie en cours — Clavier, tentatives & classement**

![Partie en cours](screenshots/partie.png)

<br>

**Modale d'aide — Comment jouer**

![Comment jouer](screenshots/comment_jouer.png)

<br>

**Victoire 🎉**

![Victoire](screenshots/victoire.png)

<br>

---

## 🎮 Comment jouer

1. Entre ton **pseudo** et choisis ta **difficulté**
2. Clique sur les chiffres du pavé (ou utilise ton **clavier**) pour former ton code
3. Dès que tu as entré le bon nombre de chiffres, ta tentative est soumise automatiquement
4. Le résultat s'affiche avec un code couleur :

| Couleur | Signification |
|---|---|
| 🟢 **Vert** | Bon chiffre, bonne position |
| 🟡 **Orange** | Bon chiffre, mauvaise position |
| 🔴 **Rouge** | Chiffre absent du code secret |

5. Trouve le code avant d'épuiser tes essais ou le temps imparti !

<br>

---

## ⚙️ Niveaux de difficulté

| Niveau | Chiffres | Temps | Essais max |
|---|---|---|---|
| 🟢 Facile | 4 chiffres | 90 secondes | 10 essais |
| 🟡 Normal | 3 chiffres | 60 secondes | 7 essais |
| 🔴 Difficile | 3 chiffres | 30 secondes | 5 essais |

<br>

---

## ✨ Fonctionnalités

- 🎯 **Déduction de code** à 3 ou 4 chiffres uniques
- ⏱️ **Timer dynamique** qui pulse en rouge dans les dernières secondes
- 🎹 **Saisie au clavier** supportée (chiffres + `Backspace`)
- 🌙 **Mode sombre / clair** commutable
- 🎉 **Animations confettis** en cas de victoire
- 💬 **Blague en français** affichée en cas d'échec (via JokeAPI)
- 🏆 **Classement** basé sur le score combiné (temps + essais + difficulté)
- 📜 **Historique global** de toutes les parties jouées
- 👤 **Système de pseudo** pour différencier les joueurs
- 📱 **Responsive** — s'adapte au mobile et au desktop

<br>

---

## 🗂️ Structure du projet

```
cadenas/
├── index.html                 # Structure HTML du jeu
├── script.js                  # Logique du jeu (JavaScript)
├── assets/
│   └── css/
│       └── style.css          # Styles CSS
├── screenshots/               # Captures d'écran pour le README
│   ├── accueil.png
│   ├── partie.png
│   ├── comment_jouer.png
│   └── victoire.png
├── applaudissements.wav       # Son de victoire
├── clic.wav                   # Son de clic sur le pavé
├── dommage.wav                # Son d'échec
└── README.md
```

<br>

---

## 🚀 Installation & Lancement

### Méthode 1 — Ouverture directe *(simple)*

Double-clique sur `index.html` pour l'ouvrir dans ton navigateur.

> ⚠️ L'API de blagues peut être bloquée par le navigateur en mode fichier local (CORS). Utilise la méthode 2 pour éviter ça.

### Méthode 2 — Serveur local avec VS Code *(recommandé)*

1. Installe l'extension **[Live Server](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer)**
2. Ouvre le dossier du projet dans VS Code
3. Clic droit sur `index.html` → **"Open with Live Server"**
4. Le jeu s'ouvre sur `http://127.0.0.1:5500`

### Méthode 3 — Serveur local avec Node.js

```bash
# Clone le dépôt
git clone https://github.com/YamiUtsukushi/cadenas.git
cd cadenas

# Lance un serveur local
npx serve .
```

Ouvre ensuite `http://localhost:3000` dans ton navigateur.

<br>

---

## 🔢 Calcul du score

Le score est calculé à la fin de chaque partie gagnée selon la formule suivante :

```
Score = (1000 + bonus_essais - pénalité_temps) × multiplicateur_difficulté
```

| Paramètre | Valeur |
|---|---|
| Bonus essais | `(max_essais - essais_utilisés) × 100` |
| Pénalité temps | `temps_écoulé × 10` |
| Multiplicateur Facile | × 1 |
| Multiplicateur Normal | × 1.5 |
| Multiplicateur Difficile | × 2 |

<br>

---

## 🛠️ Technologies utilisées

- **HTML5** — Structure
- **CSS3** — Styles, animations, responsive design
- **JavaScript (Vanilla)** — Logique du jeu, timer, LocalStorage
- **[JokeAPI](https://jokeapi.dev/)** — Blagues en français
- **[Google Fonts](https://fonts.google.com/)** — Polices *Syne* & *Space Mono*

<br>

---

## 🤝 Contribution

Les contributions sont les bienvenues !

1. Fork le projet
2. Crée une branche : `git checkout -b feature/ma-fonctionnalite`
3. Commit tes changements : `git commit -m "feat: ajout de ma fonctionnalité"`
4. Push la branche : `git push origin feature/ma-fonctionnalite`
5. Ouvre une **Pull Request**

Pour signaler un bug ou suggérer une amélioration, ouvre une [issue](https://github.com/YamiUtsukushi/cadenas/issues).

<br>

---

## 📄 Licence

Ce projet est sous licence **MIT**. Tu es libre de l'utiliser, le modifier et le distribuer, sous réserve de conserver la licence originale dans toutes les copies ou versions dérivées.

<br>

---

## 👨‍💻 Auteur

Projet réalisé par **Jayson MOOKEN**

[![LinkedIn](https://img.shields.io/badge/LinkedIn-Jayson%20Mooken-0077B5?style=for-the-badge&logo=linkedin)](https://www.linkedin.com/in/jayson-mooken/)
[![GitHub](https://img.shields.io/badge/GitHub-YamiUtsukushi-181717?style=for-the-badge&logo=github)](https://github.com/YamiUtsukushi/cadenas)
