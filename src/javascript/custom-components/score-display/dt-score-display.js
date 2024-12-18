import html from './dt-score-display.html';
import style from './dt-score-display.component.sass';

import { translate, getActiveLanguage } from '../../modules/languages.js';
import { observablePlayers, increasePlayerScore } from '../../modules/game-stats.js';

const template = document.createElement('template');

template.innerHTML = `
    <style>
        ${style}
    </style>
    ${html}
`;

class DtScoreDisplay extends HTMLElement {
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
        this.warningIcon = this.shadowRoot.querySelector('.warning-icon');

        const currentLanguage = getActiveLanguage();
        translate(currentLanguage.score_input, this.inputTitle);
        translate(currentLanguage.score_submit, this.scoreSubmitButton);

        this.appendPlayerData();
        this.totalPlayers = this.shadowRoot.querySelectorAll('.name').length;
        this.scores = this.shadowRoot.querySelectorAll('.score');

        this.currentRound = 1;
        this.playerTurn = 1;
        this.setPlaceholder();
        setTimeout(() => {
            this.backButton.disableButton();
            this.scoreInput.focus();

        }, 200)

        this.scoreInput.addEventListener('input', () => { this.removeWarning() });
        this.scoreInput.addEventListener('keydown', (e) => {
            if (e.key === 'Enter') { this.scoreSubmitButton.click() };
            this.scoreInput.focus();
        });
        this.backButton.addEventListener('click', (e) => this.undoScore());
        this.scoreSubmitButton.addEventListener('click', () => this.submitScore());
        document.addEventListener('language-changed', (e) => this.handleLanguageChange(e));
        document.addEventListener('score-changed', (e) => console.log('a player total score changed...'))
    }

    undoScore() {
        if (this.currentRound === 1) {
            if (this.playerTurn === 1) {
                return
            }

            this.playerTurn--;
        } else if (this.currentRound > 1) {
            if (this.playerTurn === 1) {
                this.currentRound--;
                this.playerTurn = this.totalPlayers;
            } else {
                this.playerTurn--
            }
        }

        const currentPlayer = `player_${this.playerTurn}`;
        const playerData = observablePlayers[currentPlayer];
        playerData.score_per_round.pop();

        if (this.playerTurn === 1 && this.currentRound === 1) { this.backButton.disableButton() }

        this.setPlaceholder();
        this.displayScore(playerData);
        this.scoreInput.focus();
        this.removeWarning();
    }

    submitScore() {
        const inputIsValid = this.scoreInput.validity.valid;
        const score = Number(this.scoreInput.value);
        const currentPlayer = `player_${this.playerTurn}`;
        const playerData = observablePlayers[currentPlayer];

        if (!inputIsValid) {
            this.addWarning();
            return
        }

        if (this.playerTurn <= this.totalPlayers) {
            this.backButton.enableButton()
            playerData.score_per_round.push(score);
            this.displayScore(playerData);

            this.playerTurn++;
            this.setPlaceholder();
        }

        if (this.playerTurn > this.totalPlayers) {
            this.playerTurn = 1;
            this.currentRound++;
            this.setPlaceholder();
        }

        this.scoreInput.focus();
    }

    displayScore(playerData) {
        this.scores[this.playerTurn - 1].innerText = playerData.total_score;
    }

    setPlaceholder() {
        const currentPlayer = `player_${this.playerTurn}`;
        this.scoreInput.placeholder = `${observablePlayers[currentPlayer]?.name || ''}`;
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
    }

    appendPlayerData() {
        for (const player in observablePlayers) {
            const name = observablePlayers[player].name;
            const score = observablePlayers[player].total_score

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

customElements.define('dt-score-display', DtScoreDisplay);

export { DtScoreDisplay }

