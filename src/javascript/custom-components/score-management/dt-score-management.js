import html from './dt-score-management.html';
import style from './dt-score-management.component.sass';

import { translate, getActiveLanguage } from '../../modules/languages.js';
import { players } from '../../modules/game-stats.js';
import confetti from 'canvas-confetti';

const template = document.createElement('template');

template.innerHTML = `
    <style>
        ${style}
    </style>
    ${html}
`;

class DtScoreManagement extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
        this.shadowRoot.appendChild(template.content.cloneNode(true));

        this.mainWrapper = this.shadowRoot.querySelector('.score-display-wrapper');
        this.scoreInput = this.shadowRoot.querySelector('.score-input');
        this.playersWrapper = this.shadowRoot.querySelector('.players-wrapper');
        this.inputTitle = this.shadowRoot.querySelector('.score-input-title');
        this.scoreSubmitButton = this.shadowRoot.querySelector('.add-button');
        this.backButton = this.shadowRoot.querySelector('dt-back-button');
        this.newGameButton = this.shadowRoot.querySelector('.new-game-button');
        this.messageDialog = this.shadowRoot.querySelector('.message-dialog');
        this.newGameDialog = this.shadowRoot.querySelector('.new-game-dialog');
        this.warningIcon = this.shadowRoot.querySelector('.warning-icon');

        const currentLanguage = getActiveLanguage();
        translate(currentLanguage.score_input, this.inputTitle);
        translate(currentLanguage.score_submit, this.scoreSubmitButton);
        translate(currentLanguage.new_game_button, this.newGameButton);

        this.appendPlayerData();
        this.totalPlayers = this.shadowRoot.querySelectorAll('.name').length;
        this.names = this.shadowRoot.querySelectorAll('.name');
        this.scores = this.shadowRoot.querySelectorAll('.score');

        this.currentRound = 1;
        this.playerNumber = 1;
        this.eliminatedPlayerNumbers = [];
        this.gameOver = false;
        this.activePlayerData = players[`player_${this.playerNumber}`]

        this.setPlaceholder();
        setTimeout(() => {
            this.backButton.disableButton();
            this.scoreInput.focus();
        }, 200)

        this.scoreInput.addEventListener('input', () => { this.removeWarning() });
        this.scoreInput.addEventListener('keydown', (e) => {
            if (e.key === 'Enter' && !this.gameOver) {
                e.preventDefault();
                this.scoreSubmitButton.click()
                this.scoreInput.focus();
            };
        });
        this.backButton.addEventListener('click', (e) => this.undoScore());
        this.scoreSubmitButton.addEventListener('click', () => this.submitScore());
        this.newGameButton.addEventListener('click', () => this.handleNewGameClick());
        document.addEventListener('language-changed', (e) => this.handleLanguageChange(e));
    }

    handleNewGameClick() {
        const closeButton = this.newGameDialog.querySelector('.new-game-dialog-close-button');
        closeButton.addEventListener('click', () => {
            this.newGameDialog.close();
            this.newGameDialog.classList.remove('new-game-dialog-open');
        });

        const messageDiv = this.newGameDialog.querySelector('.new-game-dialog-text');
        const noButton = this.newGameDialog.querySelector('.new-game-dialog-no-button');
        const yesButton = this.newGameDialog.querySelector('.new-game-dialog-yes-button');

        const message = getActiveLanguage().new_game_text;
        const yes = getActiveLanguage().new_game_confirm;
        const no = getActiveLanguage().new_game_cancel;

        noButton.innerText = no;
        yesButton.innerText = yes;
        messageDiv.innerText = message;

        this.newGameDialog.showModal();
        this.newGameDialog.classList.add('new-game-dialog-open');

        noButton.addEventListener('click', () => { this.newGame() });
        yesButton.addEventListener('click', () => { this.newGameSamePlayers() });
    }

    newGameSamePlayers() {
        const scoreDisplay = this.shadowRoot.querySelector('.score-display-wrapper');
        scoreDisplay.classList.add('slide-out');
        this.newGameDialog.close();
        this.newGameDialog.classList.remove('new-game-dialog-open');

        setTimeout(() => {
            scoreDisplay.classList.remove('slide-out');
        }, 500);

        scoreDisplay.classList.add('slide-in');
        this.resetGameState();

        this.scores.forEach((score) => {
            score.innerText = 0;
            score.classList.remove('eliminated');
        });

        this.names.forEach((name) => {
            name.classList.remove('eliminated');
        });

        this.backButton.disableButton();
        this.scoreSubmitButton.classList.remove('disabled');
        this.setPlaceholder();
    }

    newGame() {
        this.newGameDialog.close();
        this.shadowRoot.querySelector('.score-display-wrapper').classList.add('slide-out');
        setTimeout(() => {
            this.remove();

            const playerCountElement = document.createElement('dt-player-count-picker');
            if (document.querySelector('main').querySelector('dt-player-count-picker') === null) {
                document.querySelector('main').appendChild(playerCountElement);
            }

        }, 500);

    }

    resetGameState() {
        this.currentRound = 1;
        this.playerNumber = 1;
        this.eliminatedPlayerNumbers = [];
        this.gameOver = false;
        this.activePlayerData = players[`player_${this.playerNumber}`];

        for (const playerKey in players) {
            const player = players[playerKey];
            player.score_per_round = [];
            player.isEliminated = false;
            player.eliminatedRound = null;
        }
    }

    undoScore() {
        if (this.gameOver) {
            this.gameOver = false;
            this.scoreSubmitButton.classList.remove('disabled');
        }

        if (this.playerNumber === 1 && this.currentRound === 1) {
            this.backButton.disableButton();
            return;
        }

        do {
            this.playerNumber--;

            if (this.playerNumber < 1) {
                this.playerNumber = this.totalPlayers;
                this.currentRound--;
            }

            const player = players[`player_${this.playerNumber}`];

            if (player.isEliminated && player.eliminatedRound === this.currentRound) {
                this.undoElimination(player);
                break;
            }
        } while (players[`player_${this.playerNumber}`].isEliminated);

        this.activePlayerData = players[`player_${this.playerNumber}`];
        this.activePlayerData.score_per_round.pop();

        this.displayScore();
        this.setPlaceholder();

        if (this.playerNumber === 1 && this.currentRound === 1) {
            this.backButton.disableButton();
            return;
        }
        this.scoreSubmitButton.classList.remove('disabled');
    }

    undoElimination(player) {
        const score = this.scores[player.player_index]
        const name = this.names[player.player_index]

        score.classList.remove('eliminated');
        name.classList.remove('eliminated');

        player.isEliminated = false
        player.eliminatedRound = null;
    }

    eliminatePlayer() {
        const scoreDiv = this.scores[this.activePlayerData.player_index]
        const nameDiv = this.names[this.activePlayerData.player_index]

        scoreDiv.classList.add('eliminated');
        nameDiv.classList.add('eliminated');

        this.activePlayerData.isEliminated = true
        this.activePlayerData.eliminatedRound = this.currentRound;

        this.alertEliminationOrWin();

        if (this.gameOver) {
            this.scoreSubmitButton.classList.add('disabled');
        }
    }

    alertEliminationOrWin() {
        const activePlayers = Object.values(players).filter(player => !player.isEliminated);
        const name = this.activePlayerData.name;
        const dialogText = this.messageDialog.querySelector('.message-dialog-text');

        if (activePlayers.length > 1) {
            const eliminationMessage = getActiveLanguage().elimination_message;
            const insertionPoint = eliminationMessage.indexOf(',') + 1;
            const personalizedMessage = `${eliminationMessage.slice(0, insertionPoint)}\n ${name} ${eliminationMessage.slice(insertionPoint)}`;
            dialogText.innerText = personalizedMessage;
        } else {
            const winnerName = activePlayers[0].name;
            const winnerMessage = getActiveLanguage().winner_message;
            const insertionPoint = winnerMessage.indexOf('!') + 1;
            const personalizedMessage = `${winnerMessage.slice(0, insertionPoint)}\n ${winnerName} ${winnerMessage.slice(insertionPoint)}`;
            dialogText.innerText = personalizedMessage;
            this.gameOver = true;
        }

        const closeButton = this.messageDialog.querySelector('.message-dialog-button');
        closeButton.addEventListener('click', () => {
            const canvas = this.shadowRoot.querySelector('canvas');
            if (canvas) {
                canvas.remove();
            }

            this.messageDialog.classList.remove('message-dialog-open');
            this.messageDialog.close();
        });

        this.messageDialog.showModal();
        this.messageDialog.classList.add('message-dialog-open');

        if (this.gameOver) {
            this.runConfettiAnimation();
        }
    }

    runConfettiAnimation() {
        const canvas = document.createElement('canvas');
        this.messageDialog.appendChild(canvas)

        const confettiAnimation = confetti.create(canvas, {
            resize: true,
            useWorker: true,
        });

        confettiAnimation({
            particleCount: 500,
            spread: 60,
            origin: { x: 0.5, y: 0.5 },
            colors: ['#FF0000', '#00FF00', '#0000FF', '#FFFF00', '#FF00FF', '#00FFFF', '#FFA500', '#FF69B4'],
        });
    }

    alertScoreHalving() {
        const dialogText = this.messageDialog.querySelector('.message-dialog-text');
        const points = this.activePlayerData.total_score
        const name = this.activePlayerData.name;
        const message = getActiveLanguage().score_halving_message;
        const nameInsertionPoint = message.indexOf('!') + 1;
        const pointsInsertionPoint = message.lastIndexOf(' ');
        const personalizedMessage =
            `${message.slice(0, nameInsertionPoint)}\n ${name} ${message.slice(nameInsertionPoint, pointsInsertionPoint)} ${points} ${message.slice(pointsInsertionPoint)}`;

        dialogText.innerText = personalizedMessage;

        const closeButton = this.messageDialog.querySelector('.message-dialog-button');
        closeButton.addEventListener('click', () => {
            this.messageDialog.classList.remove('message-dialog-open');
            this.messageDialog.close();
        });

        this.messageDialog.showModal();
        this.messageDialog.classList.add('message-dialog-open');
    }

    submitScore() {
        if (!this.scoreInput.validity.valid) {
            this.addWarning();
            return
        }

        this.backButton.enableButton();

        const submittedScore = Number(this.scoreInput.value);
        this.activePlayerData.score_per_round.push(submittedScore);

        if (this.activePlayerData.total_score > 150) {
            this.eliminatePlayer();
        }

        if ([100, 150].includes(this.activePlayerData.total_score)) {
            const totalScore = this.activePlayerData.total_score;
            const halvedScore = totalScore / 2;
            const oldRoundScore = this.activePlayerData.score_per_round.pop();
            const newRoundScore = halvedScore - (totalScore - oldRoundScore);

            this.activePlayerData.score_per_round.push(newRoundScore);
            this.alertScoreHalving()
        }

        this.displayScore();

        do {
            this.playerNumber++;
            if (this.playerNumber > this.totalPlayers) {
                this.playerNumber = 1;
                this.currentRound++
            }


        } while (players[`player_${this.playerNumber}`].isEliminated);


        this.activePlayerData = players[`player_${this.playerNumber}`];
        this.setPlaceholder();
        this.scoreInput.focus()

    }

    displayScore() {
        this.scores[this.activePlayerData.player_index].innerText = this.activePlayerData.total_score;
    }

    setPlaceholder() {
        this.scoreInput.placeholder = this.activePlayerData.name
        this.scoreInput.value = '';
    }

    addWarning() {
        this.scoreInput.classList.add('warning');
        this.warningIcon.classList.remove('hidden');
        this.scoreInput.focus();
    }

    removeWarning() {
        this.scoreInput.classList.remove('warning');
        this.warningIcon.classList.add('hidden');
    }

    handleLanguageChange(e) {
        translate(e.detail.score_input, this.inputTitle);
        translate(e.detail.score_submit, this.scoreSubmitButton);
        translate(e.detail.new_game_button, this.newGameButton);
    }

    appendPlayerData() {
        for (const player in players) {
            const name = players[player].name;
            const score = players[player].total_score

            const container = document.createElement('div');
            const nameDiv = document.createElement('div');
            const scoreDiv = document.createElement('div');

            container.classList.add('player-container');
            nameDiv.classList.add('name');
            scoreDiv.classList.add('score');

            nameDiv.textContent = name;
            scoreDiv.textContent = score;

            container.appendChild(nameDiv),
                container.appendChild(scoreDiv)

            this.playersWrapper.appendChild(container);
        }
    }

}

customElements.define('dt-score-management', DtScoreManagement);

export { DtScoreManagement }
