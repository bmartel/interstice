import { html } from 'lit-element';
import { CheckBox } from './checkbox.js';

/**
 * @element t-radio
 *
 * @cssprop --t-font-size
 * @cssprop --t-font-family
 * @cssprop --t-leading
 * @cssprop --t-padding
 * @cssprop --t-gap
 * @cssprop --t-transition
 * @cssprop --t-color
 * @cssprop --t-color-primary
 * @cssprop --t-color-accent
 * @cssprop --t-color-error
 * @cssprop --t-input-color
 * @cssprop --t-input-bg-color
 * @cssprop --t-border-color
 * @cssprop --t-border-size
 * @cssprop --t-label-color
 * @cssprop --t-label-size
 * @cssprop --t-message-size
 * @cssprop --t-outline-size
 */
export class Radio extends CheckBox {
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

window.customElements.define('t-radio', Radio);

