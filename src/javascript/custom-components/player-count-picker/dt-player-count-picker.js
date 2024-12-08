import html from './dt-player-count-picker.html';
import style from './dt-player-count-picker.component.sass';

import { fetchImage } from '../../modules/utils.js';
import { languages, getActiveLanguage, setActiveLanguage, translate } from '../../modules/languages.js';
import { resetPlayerCount, setPlayerCount } from '../../modules/game-stats.js';

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
        this.indicatorContainer = this.shadowRoot.querySelector('.indicator-container');
        this.cardTitle = this.shadowRoot.querySelector('.card-title');

        this.renderCards();
        const firstCard = this.cards.querySelector('.card-button:first-child');
        const lastCard = this.cards.querySelector('.card-button:last-child');

        this.toggleNavButtons(lastCard, this.nextButton);
        this.toggleNavButtons(firstCard, this.previousButton);
        this.updateActiveIndicator();

        document.addEventListener('language-changed', (e) => { translate(e.detail.player_count, this.cardTitle) });
        this.nextButton.addEventListener('click', (e) => this.scrollCards(e));
        this.previousButton.addEventListener('click', (e) => this.scrollCards(e));
        this.cards.addEventListener('click', (e) => { this.handlePlayerCountSelection(e) });
    }

    handlePlayerCountSelection(e) {
        resetPlayerCount();
        const clickedButton = e.target.closest('.card-button');
        const buttonIdString = clickedButton.id
        const chosenPlayerCount = Number(buttonIdString[buttonIdString.length - 1]);
        setPlayerCount(chosenPlayerCount);

        this.shadowRoot.querySelector('.card-slider').classList.add('slide-out');
        setTimeout(() => {
            this.remove();
        }, 500);
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

    toggleNavButtons(card, button) {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.target === card && entry.isIntersecting) {
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

        observer.observe(card)
    }

    updateActiveIndicator() {
        const cards = this.cards.querySelectorAll('.card-button')
        const visibleCards = new Set();

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        visibleCards.add(entry.target)
                    } else {
                        visibleCards.delete(entry.target)
                    }
                });

                const indicators = this.indicatorContainer.querySelectorAll('.indicator');
                const cardsArr = Array.from(cards);

                this.setActiveIndicator(cardsArr, indicators, visibleCards.size, visibleCards);
            },
            {
                root: this.cards,
                rootMargin: '0px',
                threshold: 0.9
            }
        );

        cards.forEach((card) => {
            observer.observe(card)
        })
    }

    setActiveIndicator(cardsArr, indicators, visibleCardSize, visibleCards) {
        const combinations = [];

        indicators.forEach((indicator) => {
            indicator.classList.remove('active');
        });

        switch (visibleCardSize) {
            case 2:
                cardsArr.forEach((card, index) => {
                    const combo = [cardsArr[index], cardsArr[index + 1]];
                    if (combo.includes(undefined)) { return; }
                    combinations.push(combo);
                });
                break;
            case 3:
                cardsArr.forEach((card, index) => {
                    const combo = [cardsArr[index], cardsArr[index + 1], cardsArr[index + 2]];
                    if (combo.includes(undefined)) { return }
                    combinations.push(combo);
                });
                break;
            case 4:
                cardsArr.forEach((card, index) => {
                    const combo = [cardsArr[index], cardsArr[index + 1], cardsArr[index + 2], cardsArr[index + 3]];
                    if (combo.includes(undefined)) { return }
                    combinations.push(combo);
                });
                break;

        }

        if (combinations.length === 0) {
            return;
        }

        const visibleCardsSet = new Set(visibleCards);

        const matchingIndex = combinations.findIndex(combo => {
            const comboSet = new Set(combo);
            return [...visibleCardsSet].every(card => comboSet.has(card)) && [...comboSet].every(card => visibleCardsSet.has(card));
        });

        indicators[matchingIndex].classList.add('active');
    }
}

customElements.define('dt-player-count-picker', DtPlayerCountPicker);

export { DtPlayerCountPicker }
