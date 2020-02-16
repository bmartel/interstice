import { html, css } from 'lit-element';
import { CheckBox } from './checkbox.js';

/**
 * @element i-radio
 *
 * @cssprop --font-size
 * @cssprop --font-family
 * @cssprop --leading
 * @cssprop --padding
 * @cssprop --round
 * @cssprop --gap
 * @cssprop --transition
 * @cssprop --color
 * @cssprop --color-primary
 * @cssprop --color-accent
 * @cssprop --color-error
 * @cssprop --input-color
 * @cssprop --input-background-color
 * @cssprop --border-color
 * @cssprop --border-size
 * @cssprop --label-color
 * @cssprop --label-size
 * @cssprop --message-size
 * @cssprop --outline-size
 */
export class Radio extends CheckBox {
  static get styles() {
    return css`
      ${CheckBox.styles}
      .radio {
        fill: currentColor;
        border-radius: var(--round-full);
      }
      :host([checked]) input + .radio,
      :host([checked]) .error input + .radio,
      :host([checked]) .success input + .radio {
        background-color: var(--input-background-color);
      }
    `;
  }

  constructor() {
    super();
    this.type = 'radio';
  }

  renderCheck() {
    if (this.checked) {
      return html`
        <svg class="check radio" viewBox="0 0 24 24" preserveAspectRatio="xMidYMid meet">
          <circle cx="12" cy="12" r="6"></circle>
        </svg>
      `;
    }
    return null;
  }
}

customElements.define('i-radio', Radio);
