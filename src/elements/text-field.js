import { html, LitElement } from 'lit-element';
import { inputStyles, fullWidthInput } from '../styles.js';

/**
 * @element t-text-field
 *
 * @cssprop --t-font-size
 * @cssprop --t-font-family
 * @cssprop --t-padding
 * @cssprop --t-color
 */
export class TextField extends LitElement {
  static get properties() {
    return {
      wide: { type: Boolean },
    };
  }

  constructor() {
    super();
    this.wide = false;
  }

  render() {
    return html`
      ${inputStyles} ${this.wide ? fullWidthInput : null}
      <span class="input-wrapper">
        <input class="input" type="text" />
      </span>
    `;
  }
}

window.customElements.define('t-text-field', TextField);
