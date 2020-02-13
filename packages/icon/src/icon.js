import { css, html } from 'lit-element';
import AsyncElement from '@interstice/async';

/**
 * @element i-icon
 *
 * @cssprop --i-icon-color
 * @cssprop --i-icon-width
 * @cssprop --i-icon-height
 */
export default class extends AsyncElement {
  static get properties() {
    return {
      name: String
    }
  }

  static get styles() {
    return css`
      svg {
        width: var(--i-icon-width, 20px);
        height: var(--i-icon-height, 20px);
        fill: var(--i-icon-color, currentColor);
      }
    `;
  }

  constructor() {
    super();
    this.name = '';
  }

  async asyncRender() {
    if (!this.name) {
      return null;
    }
    const svg = await import(`./${this.name}.js`);
    return html`<svg>${svg}</svg>`;
  }
}
