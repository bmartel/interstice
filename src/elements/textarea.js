import { html } from 'lit-element';
import { FormInput } from './forminput.js';

/**
 * @element t-text-area
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
export class TextArea extends FormInput {
  static get properties() {
    return {
      ...FormInput.properties,
      readonly: { type: Boolean },
    };
  }

  constructor() {
    super();
    this.readonly = false;
  }

  renderInput() {
    return html`
      <textarea
        class="input"
        .id=${this.id}
        .value=${this.value}
        .name=${this.id}
        .disabled=${this.disabled}
        .readonly=${this.readonly}
        .aria-labelledby=${this.labelId()}
      >
        ${this.value}
      </textarea>
    `;
  }
}

window.customElements.define('t-textarea', TextArea);
