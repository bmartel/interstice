import { html, css } from 'lit-element';
import { FormInput } from './forminput.js';

/**
 * @element z-textarea
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
export class TextArea extends FormInput {
  static get properties() {
    return {
      rows: { type: Number },
    };
  }

  static get styles() {
    return css`
      ${FormInput.styles}
      textarea {
        min-height: calc(var(--z-font-size) * 7.7);
      }
    `;
  }

  constructor() {
    super();
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

window.customElements.define('z-textarea', TextArea);
