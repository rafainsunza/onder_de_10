import style from './custom-component.sass';
import html from './custom-component.html';

const template = document.createElement('template');

template.innerHTML = `
    ${html}
    <style>${style}</style>
`;

class CustomComponent extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
        this.shadowRoot.appendChild(template.content.cloneNode(true));

    }
}
customElements.define('custom-component', CustomComponent);

export { CustomComponent }
