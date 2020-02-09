import { html, css } from 'lit-element';
import { CheckBox } from './checkbox.js';

/**
 * @element z-radio
 *
 * @cssprop --z-font-size
 * @cssprop --z-font-family
 * @cssprop --z-leading
 * @cssprop --z-padding
 * @cssprop --z-round
 * @cssprop --z-gap
 * @cssprop --z-transition
 * @cssprop --z-color
 * @cssprop --z-color-primary
 * @cssprop --z-color-accent
 * @cssprop --z-color-error
 * @cssprop --z-input-color
 * @cssprop --z-input-bg-color
 * @cssprop --z-border-color
 * @cssprop --z-border-size
 * @cssprop --z-label-color
 * @cssprop --z-label-size
 * @cssprop --z-message-size
 * @cssprop --z-outline-size
 */
export class Radio extends CheckBox {
  static get styles() {
    return css`
      ${CheckBox.styles}
      .radio {
        fill: currentColor;
        border-radius: var(--z-round-full);
      }
      :host([checked]) input + .radio,
      :host([checked]) .error input + .radio,
      :host([checked]) .success input + .radio {
        background-color: var(--z-input-bg-color);
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

window.customElements.define('z-radio', Radio);
