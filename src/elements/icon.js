import { html, LitElement } from 'lit-element';

/**
 * @element z-icon
 *
 * @cssprop --z-padding
 * @cssprop --z-transition
 * @cssprop --z-color
 * @cssprop --z-color-primary
 * @cssprop --z-color-accent
 * @cssprop --z-color-error
 */
export class Icon extends LitElement {
  static get properties() {
    return {
      name: { type: String },
    };
  }

  constructor() {
    super();
    this.name = '';
  }

  loadIcon() {
    return import(`./icons/${this.name}.js`);
  }

  async render() {
    const { default: icon } = await this.loadIcon();
    const i = icon();
    console.log(i);
    return html`
      ${i}
    `;
  }
}

window.customElements.define('z-icon', Icon);
