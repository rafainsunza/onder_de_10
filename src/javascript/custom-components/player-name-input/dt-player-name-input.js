import html from './dt-player-name-input.html';
import style from './dt-player-name-input.component.sass';

import { translate, getActiveLanguage } from '../../modules/languages.js';
import { players } from '.././../modules/game-stats.js';

const template = document.createElement('template');

template.innerHTML = `
    <style>
        ${style}
    </style>
    ${html}
`;

class DtPlayerNameInput extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
        this.shadowRoot.appendChild(template.content.cloneNode(true));

        this.inputContainer = this.shadowRoot.querySelector('.name-input-container');
        this.input = this.shadowRoot.querySelector('.name-input');
        this.inputTitle = this.shadowRoot.querySelector('.name-input-title');
        this.submitButton = this.shadowRoot.querySelector('.name-input-confirm');
        this.warningIcon = this.shadowRoot.querySelector('.warning-icon');

        const activeLanguage = getActiveLanguage();
        translate(activeLanguage.score_submit, this.submitButton);
        translate(activeLanguage.name_input, this.inputTitle);
        this.input.placeholder = activeLanguage.placeholder;

        this.playerCount = 0;
        this.startNameInput();

        this.input.addEventListener('input', () => this.resetWarning());
        this.input.addEventListener('keydown', (e) => { if (e.key === 'Enter') { this.submitButton.click() } });
        this.submitButton.addEventListener('click', () => this.handleNameInput());
        this.addEventListener('back-button-clicked', (e) => this.handleBackButtonClick(e));
        document.addEventListener('language-changed', (e) => {
            translate(e.detail.score_submit, this.submitButton);
            translate(e.detail.name_input, this.inputTitle);
            this.input.placeholder = e.detail.placeholder;
            this.setPlaceholder();
        });

    }

    handleBackButtonClick(e) {
        const existingPicker = document.querySelector('dt-player-count-picker');

        if (existingPicker === null) {
            const newPicker = document.createElement('dt-player-count-picker');
            document.querySelector('main').appendChild(newPicker);
        }

        this.remove();
    }

    resetWarning() {
        this.input.classList.remove('warning');
        this.warningIcon.classList.add('hidden');
    }

    startNameInput() {
        this.playerCount = 1;
        this.setPlaceholder();
    }

    handleNameInput() {
        let nameInput = this.input.value.trim();
        if (nameInput === '') {
            this.input.classList.add('warning');
            this.warningIcon.classList.remove('hidden');
            return
        }

        if (nameInput.length > 22) {
            this.input.classList.add('warning');
            this.warningIcon.classList.remove('hidden');
            this.input.value = '';
            return
        }

        nameInput = this.input.value
            .split(' ')
            .map(name => name.charAt(0).toUpperCase() + name.slice(1).toLowerCase())
            .join(' ');

        players[`player_${this.playerCount}`].name = nameInput;

        this.playerCount++

        if (this.playerCount <= Object.keys(players).length) {
            this.input.value = "";
            this.input.placeholder = this.input.placeholder.slice(0, -2);
            this.setPlaceholder();
        } else {
            this.inputContainer.classList.add('slide-out');

            setTimeout(() => {
                const scoreDisplay = document.createElement('dt-score-display');

                if (document.querySelector('main').querySelector('dt-score-display') === null) {
                    document.querySelector('main').appendChild(scoreDisplay);
                };

                this.remove();
            }, 500);
        }
    }

    setPlaceholder() {
        this.input.placeholder = `${this.input.placeholder} ${this.playerCount}`;
    }


}

customElements.define('dt-player-name-input', DtPlayerNameInput);

export { DtPlayerNameInput }
