import { html, css } from 'lit-element';
import { FormInput } from './forminput.js';

/**
 * @element t-text-area
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
 * @cssprop --t-message-color
 * @cssprop --t-message-size
 * @cssprop --t-outline-size
 */
export class TextArea extends FormInput {
  static get properties() {
    return {
      readonly: { type: Boolean },
      rows: { type: Number },
    };
  }

  static get styles() {
    return css`
      textarea {
        min-height: calc(var(--t-font-size) * 4);
      }
    `;
  }

  constructor() {
    super();
    this.readonly = false;
    this.rows = 4;
  }

  renderInput() {
    return html`
      <textarea
        class="input"
        .id=${this.id}
        .value=${this.value}
        .placeholder=${this.placeholder}
        .name=${this.id}
        .rows=${this.rows}
        .aria-labelledby=${this.labelId()}
        .aria-describedby=${this.hintId()}
        ?disabled=${this.disabled}
        ?readonly=${this.readonly}
      >
        ${this.value}
      </textarea>
    `;
  }
}

window.customElements.define('t-textarea', TextArea);
