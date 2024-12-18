import html from './dt-back-button.html';
import style from './dt-back-button.component.sass';

import { translate, getActiveLanguage } from '../../modules/languages.js';

const template = document.createElement('template');

template.innerHTML = `
    <style>
        ${style}
    </style>
    ${html}
`;

class DtBackButton extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
        this.shadowRoot.appendChild(template.content.cloneNode(true));

        this.backButton = this.shadowRoot.querySelector('.back-button');

        const activeLanguage = getActiveLanguage();
        this.backButton.textContent = activeLanguage.step_back;

        this.backButton.addEventListener('click', () => this.handleBackButtonClick());
        document.addEventListener('language-changed', (e) => this.handleLanguageChange(e));
    }

    enableButton() {
        this.backButton.classList.remove('disabled');
    }

    disableButton() {
        this.backButton.classList.add('disabled');
    }

    handleLanguageChange(e) {
        translate(e.detail.step_back, this.backButton);
    }

    handleBackButtonClick() {
        const customEvent = new CustomEvent('back-button-clicked', {
            detail: { message: 'Step back required' },
            bubbles: true,
            composed: true
        });

        this.dispatchEvent(customEvent);
    }
}

customElements.define('dt-back-button', DtBackButton);

export { DtBackButton }

