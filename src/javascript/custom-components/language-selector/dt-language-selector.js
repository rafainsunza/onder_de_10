import html from './dt-language-selector.html';
import style from './dt-language-selector.component.sass';

import { fetchImage } from '../../utils.js';
import { languages, getActiveLanguage, setActiveLanguage } from '../../languages.js';

const template = document.createElement('template');

template.innerHTML = `
    <style>
        ${style}
    </style>
    ${html}
`;

class DtLanguageSelector extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
        this.shadowRoot.appendChild(template.content.cloneNode(true));

        this.dialog = this.shadowRoot.querySelector('dialog');
        this.languageUl = this.shadowRoot.querySelector('.language-ul');
        this.languageSelectedButton = this.shadowRoot.querySelector('.language-selected-button');
        this.closeButton = this.shadowRoot.querySelector('.close-button');

        this.renderDefaultLanguageButton();
        this.renderLanguageButtons();

        this.languageSelectedButton.addEventListener('click', () => this.showDialog());
        this.languageUl.addEventListener('click', (e) => this.setNewLanguage(e));
        this.closeButton.addEventListener('click', () => { this.closeDialog() });

    }

    renderLanguageButtons() {
        Object.keys(languages).forEach((key) => {
            const language = languages[key];

            const li = document.createElement('li');
            const button = document.createElement('button');
            const span = document.createElement('span');

            li.classList.add('language-option');

            button.classList.add('language-button', `${language.name}`);
            button.setAttribute('aria-label', `Select ${language.name}`);
            fetchImage(language.flag, button, 'language-flag');

            span.classList.add('language-name');
            span.innerText = language.name

            button.appendChild(span);
            li.appendChild(button);
            this.languageUl.appendChild(li);
        });
    }

    renderDefaultLanguageButton() {
        const activeLanguage = getActiveLanguage();
        fetchImage(activeLanguage.flag, this.languageSelectedButton, 'language-flag');
    }

    showDialog() {
        this.dialog.showModal();
    }

    closeDialog() {
        this.dialog.close();
    }

    setNewLanguage(e) {
        const clickedButton = e.target.closest('.language-button');
        if (clickedButton === null) { return }

        const newLanguage = Object.values(languages).find(language => language.name.toLowerCase() === clickedButton.classList[1].toLowerCase());
        if (newLanguage === getActiveLanguage()) {
            this.dialog.close();
            return
        }

        setActiveLanguage(newLanguage);
        const activeLanguage = getActiveLanguage();

        this.languageSelectedButton.innerHTML = '';
        fetchImage(activeLanguage.flag, this.languageSelectedButton, 'language-flag');

        this.dialog.close();
    }

}



customElements.define('dt-language-selector', DtLanguageSelector);

export { DtLanguageSelector }
