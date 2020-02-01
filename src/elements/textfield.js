import { html } from 'lit-element';
import { FormInput } from './forminput.js';

/**
 * @element t-textfield
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
export class TextField extends FormInput {
  static get properties() {
    return {
      ...FormInput.properties,
      type: { type: String },
      readonly: { type: Boolean },
    };
  }

  constructor() {
    super();
    this.type = 'text';
    this.readonly = false;
  }

  renderInput() {
    return html`
      <input
        class="input"
        .id=${this.id}
        .value=${this.value}
        .type=${this.type}
        .name=${this.id}
        .disabled=${this.disabled}
        .readonly=${this.readonly}
        .aria-labelledby=${this.labelId()}
      />
    `;
  }
}

window.customElements.define('t-textfield', TextField);
