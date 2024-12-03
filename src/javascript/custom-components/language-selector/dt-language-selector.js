import html from './dt-language-selector.html';
import style from './dt-language-selector.component.sass';

import { fetchImage } from '../../utils.js';
import { languages, getActiveLanguage, setActiveLanguage, translate } from '../../modules/languages.js';

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

        this.dropdownContainer = this.shadowRoot.querySelector('.dropdown-container');
        this.dropdownMenu = this.shadowRoot.querySelector('.dropdown-menu');
        this.openButton = this.shadowRoot.querySelector('.open-button');
        this.closeButton = this.shadowRoot.querySelector('.close-button');

        this.renderDefaultLanguageButton();
        this.renderLanguageButtons();

        this.openButton.addEventListener('click', (e) => this.openDropdown());
        this.dropdownMenu.addEventListener('click', (e) => this.setNewLanguage(e));
        this.closeButton.addEventListener('click', () => { this.closeDropdown() });

    }

    openDropdown() {
        this.dropdownMenu.classList.add('show');
    }

    closeDropdown() {
        this.dropdownMenu.classList.remove('show')
    }

    renderLanguageButtons() {
        Object.keys(languages).forEach((key) => {
            const language = languages[key];

            const li = document.createElement('li');
            const button = document.createElement('button');
            const span = document.createElement('span');

            li.classList.add('language-option');

            button.classList.add('language-button', `${language.name}`);
            fetchImage(language.flag, button, 'language-flag');

            span.classList.add('language-name');
            span.innerText = language.name

            button.appendChild(span);
            li.appendChild(button);
            this.dropdownMenu.appendChild(li);
        });
    }

    renderDefaultLanguageButton() {
        const activeLanguage = getActiveLanguage();
        fetchImage(activeLanguage.flag, this.openButton, 'language-flag');
    }


    setNewLanguage(e) {
        const clickedButton = e.target.closest('.language-button');
        if (clickedButton === null) { return }

        const newLanguage = Object.values(languages).find(language => language.name.toLowerCase() === clickedButton.classList[1].toLowerCase());
        if (newLanguage === getActiveLanguage()) {
            this.closeDropdown();
            return
        }

        setActiveLanguage(newLanguage);
        const activeLanguage = getActiveLanguage();

        this.openButton.innerHTML = '';
        fetchImage(activeLanguage.flag, this.openButton, 'language-flag');

        translate(activeLanguage.title, document.querySelector('.header-title'))
        this.closeDropdown();
    }

}



customElements.define('dt-language-selector', DtLanguageSelector);

export { DtLanguageSelector }
