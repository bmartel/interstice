
import { html } from 'lit-element';
import { styleMap } from 'lit-html/directives/style-map';
import {FormInput} from './FormInput.js';

/**
 * @element t-check-box
 *
 * @cssprop --t-font-size
 * @cssprop --t-font-family
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
 * @cssprop --t-message-color
 * @cssprop --t-message-size
 * @cssprop --t-outline-size
 */
export class CheckBox extends FormInput {
  static get properties() {
    return {
      ...FormInput.properties,
      checked: { type: Boolean },
    };
  }

  constructor() {
    super();
    this.checked = false;
  }

  renderCheck() {
    if (this.checked) {
      return html`
        <svg class="check" viewBox="0 0 24 24" preserveAspectRatio="xMidYMid meet">
          <path fill="none" d="M6,11.3 L10.3,16 L18,6.2"></path>
        </svg>
      `;
    }
    return null;
  }

  inputStyles() {
    const styles = {
      display: 'flex',
      cursor: 'pointer',
    }
    if (this.checked) {
      styles.padding = '0';
    }
    return styles;
  }

  inputUpdate(e) {
    this.checked = e.target.checked;
  }

  renderInput() {
    return html`
      <input
        class="hidden"
        type="checkbox"
        .id=${this.id}
        .name=${this.id}
        .aria-labelledby=${this.labelId()}
        @click=${this.inputUpdate}
      />
        <div class="input check" style="padding: 0;">
        ${this.renderCheck()}
      </div>
    `;
  }
}

window.customElements.define('t-check-box', CheckBox);
