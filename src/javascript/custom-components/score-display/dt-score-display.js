import html from './dt-score-display.html';
import style from './dt-score-display.component.sass';

import { translate, getActiveLanguage } from '../../modules/languages.js';

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

    }

}

customElements.define('dt-score-display', DtScoreDisplay);

export { DtScoreDisplay }

