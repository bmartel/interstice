import { html, LitElement } from 'lit-element';
import { classMap } from 'lit-html/directives/class-map';
import { fontStyles, inputStyles, fullWidthInput } from '../styles.js';

/**
 * @element t-text-field
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
 * @cssprop --t-border-color
 * @cssprop --t-border-size
 * @cssprop --t-outline-size
 */
export class TextField extends LitElement {
  static get properties() {
    return {
      id: { type: String },
      label: { type: String },
      messages: { type: Array },
      wide: { type: Boolean },
      inline: { type: Boolean },
      error: { type: Boolean },
    };
  }

  constructor() {
    super();
    this.id = '';
    this.label = '';
    this.messages = [];
    this.wide = false;
    this.error = false;
    this.inline = false;
  }

  labelId() {
    return `lbl-${this.id}`;
  }

  render() {
    return html`
      ${fontStyles} ${inputStyles} ${this.wide ? fullWidthInput : null}
      <label
        .for=${this.id}
        class=${classMap({ 'input-wrapper': true, inline: this.inline, error: this.error })}
      >
        <span class="label" .id=${this.labelId()}>${this.label}</span>
        <input
          class="input"
          type="text"
          .id=${this.id}
          .name=${this.id}
          .aria-labelledby=${this.labelId()}
        />
        ${this.messages.length
          ? html`
              <ul class="messages">
                ${this.messages.map(msg => html`<li>${msg}</li></ul>`)}
              </ul>
            `
          : null}
      </label>
    `;
  }
}

window.customElements.define('t-text-field', TextField);
