import html from './dt-player-count-picker.html';
import style from './dt-player-count-picker.component.sass';

import { fetchImage } from '../../utils.js';
import { languages, getActiveLanguage, setActiveLanguage, translate } from '../../modules/languages.js';

const template = document.createElement('template');

template.innerHTML = `
    <style>
        ${style}
    </style>
    ${html}
`;

class DtPlayerCountPicker extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
        this.shadowRoot.appendChild(template.content.cloneNode(true));

        this.cardsUrls =
            [
                'assets/card_pink_2.png',
                'assets/card_blue_3.png',
                'assets/card_yellow_4.jpg',
                'assets/card_pink_5.png',
                'assets/card_green_6.png',
            ];

        this.cards = this.shadowRoot.querySelector('.cards');

        this.renderCards();

    }

    renderCards() {


        this.cardsUrls.forEach((url, index) => {
            const button = document.createElement('button');

            button.classList.add('card-button');
            button.id = `card-${index + 2}`;

            fetchImage(url, button, 'card');

            this.cards.appendChild(button);

        });
    }

}



customElements.define('dt-player-count-picker', DtPlayerCountPicker);

export { DtPlayerCountPicker }
