import { html, LitElement } from 'lit-element';
import { classMap } from 'lit-html/directives/class-map';
import { fontStyles, inputStyles, fullWidthInput } from '../styles.js';

/**
 * @element t-forminput
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
export class FormInput extends LitElement {
  static get properties() {
    return {
      id: { type: String },
      value: { type: String },
      label: { type: String },
      messages: { type: Array },
      wide: { type: Boolean },
      inline: { type: Boolean },
      reversed: { type: Boolean },
      disabled: { type: Boolean },
      status: { type: String },
    };
  }

  constructor() {
    super();
    this.id = '';
    this.value = null;
    this.label = '';
    this.messages = [];
    this.wide = false;
    this.status = '';
    this.inline = false;
    this.reversed = false;
    this.disabled = false;
  }

  error() {
    return this.status === 'error';
  }

  success() {
    return this.status === 'success';
  }

  labelId() {
    return `lbl-${this.id}`;
  }

  renderLabel() {
    if (this.label) {
      return html`
        <span class="label" .id=${this.labelId()}>${this.label}</span>
      `;
    }
    return null;
  }

  renderInput() {
    return html`
      <input
        class="input"
        .id=${this.id}
        .value=${this.value}
        .name=${this.id}
        .disabled=${this.disabled}
        .aria-labelledby=${this.labelId()}
      />
    `;
  }

  renderMessages() {
    if (this.messages.length) {
      return html`
        <ul class="messages">
          ${this.messages.map(msg => html`<li>${msg}</li></ul>`)}
        </ul>
      `;
    }
    return null;
  }

  render() {
    return html`
      ${fontStyles} ${inputStyles} ${this.wide ? fullWidthInput : null}
      <label
        class=${classMap({
          'input-wrapper': true,
          inline: this.inline,
          reversed: this.reversed,
          disabled: this.disabled,
          error: this.error(),
          success: this.success(),
        })}
      >
        ${this.renderLabel()} ${this.renderInput()} ${this.renderMessages()}
      </label>
    `;
  }
}
