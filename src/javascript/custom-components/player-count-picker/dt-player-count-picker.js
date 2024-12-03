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
        this.nextButton = this.shadowRoot.querySelector('.next-button');
        this.previousButton = this.shadowRoot.querySelector('.previous-button');

        this.renderCards();

        this.cards.scrollTo({ left: 0, behavior: 'smooth' })
        this.nextButton.addEventListener('click', (e) => this.scrollCards(e));
        this.previousButton.addEventListener('click', (e) => this.scrollCards(e));

    }

    renderCards() {
        this.cardsUrls.forEach((url, index) => {
            const button = document.createElement('button');
            button.classList.add('card-button');
            button.id = `card-${index + 2}`;

            fetchImage(url, button, 'card');

            this.cards.appendChild(button);
        });

        const firstCard = this.cards.querySelector('.card-button:first-child');
        const lastCard = this.cards.querySelector('.card-button:last-child');
        this.setObserver(lastCard, this.nextButton);
        this.setObserver(firstCard, this.previousButton)
    }


    scrollCards(e) {
        const clickedButton = e.target.closest('button');
        const scrollWidth = this.cards.scrollWidth;
        const cardCount = this.cards.children.length;
        const scrollAmount = scrollWidth / cardCount;
        const currentScrollPosition = this.cards.scrollLeft;

        let targetScroll;

        if (clickedButton === this.nextButton) {
            targetScroll = currentScrollPosition + scrollAmount
        }
        if (clickedButton === this.previousButton) {
            targetScroll = currentScrollPosition - scrollAmount
        }

        this.cards.scrollTo({ left: targetScroll, behavior: 'smooth' });

    }

    setObserver(element, button) {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.target === element && entry.isIntersecting) {
                        button.classList.add('hidden');
                    } else {
                        button.classList.remove('hidden');
                    }
                });
            },
            {
                root: this.cards,
                rootMargin: '0px',
                threshold: 0.9
            }
        );

        observer.observe(element)
    }

}







customElements.define('dt-player-count-picker', DtPlayerCountPicker);

export { DtPlayerCountPicker }
