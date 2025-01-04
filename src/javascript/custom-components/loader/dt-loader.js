import html from './dt-loader.html';
import style from './dt-loader.component.sass';

const template = document.createElement('template');

template.innerHTML = `
    <style>
        ${style}
    </style>
    ${html}
`;

class DtLoader extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
        this.shadowRoot.appendChild(template.content.cloneNode(true));

    }

}

customElements.define('dt-loader', DtLoader);

export { DtLoader }

