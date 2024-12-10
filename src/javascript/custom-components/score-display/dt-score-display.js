import html from './dt-score-display.html';
import style from './dt-score-display.component.sass';

import { translate, getActiveLanguage } from '../../modules/languages.js';
import { players, setPlayerScore } from '../../modules/game-stats.js';

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

        const currentLanguage = getActiveLanguage();
        translate(currentLanguage.score_input, this.inputTitle);
        translate(currentLanguage.score_submit, this.scoreSubmitButton);

        this.appendPlayerData();
        this.totalPlayers = this.shadowRoot.querySelectorAll('.name').length;
        this.playerCount = 1;
        this.setPlaceholder();

        this.scoreSubmitButton.addEventListener('click', () => this.handleScoreSubmit());
        document.addEventListener('language-changed', (e) => this.handleLanguageChange(e));
    }


    setPlaceholder() {
        const currentPlayer = `player_${this.playerCount}`;
        this.scoreInput.placeholder = `${players[currentPlayer]?.name || ''}`;
    }

    handleScoreSubmit() {
        const submittedScore = this.scoreInput.value;

        if (this.playerCount <= this.totalPlayers) {
            const currentPlayer = `player_${this.playerCount}`;

            setPlayerScore(submittedScore, currentPlayer);
            this.scoreInput.value = '';
            this.playerCount++;
            this.setPlaceholder();
        }

        if (this.playerCount > this.totalPlayers) {
            console.log(players)
        }

    }

    handleLanguageChange(e) {
        translate(e.detail.score_input, this.inputTitle);
        translate(e.detail.score_submit, this.scoreSubmitButton);
    }

    appendPlayerData() {
        for (const player in players) {
            const name = players[player].name;
            const score = players[player].score

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

