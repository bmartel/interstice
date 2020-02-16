import { html, css } from 'lit-element';
import { FormInput } from './forminput.js';

/**
 * @element i-textarea
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
        min-height: calc(var(--font-size) * 7.7);
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
      </textarea
      >
    `;
  }
}

customElements.define('i-textarea', TextArea);
