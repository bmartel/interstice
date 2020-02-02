import { html, LitElement, css } from 'lit-element';
import { classMap } from 'lit-html/directives/class-map';
import { spread } from '@open-wc/lit-helpers';
import { fontStyles, fullWidthInput } from '../styles.js';

/**
 * @element t-forminput
 *
 * @cssprop --t-font-size
 * @cssprop --t-font-family
 * @cssprop --t-leading
 * @cssprop --t-padding
 * @cssprop --t-gap
 * @cssprop --t-round
 * @cssprop --t-transition
 * @cssprop --t-color
 * @cssprop --t-color-primary
 * @cssprop --t-color-accent
 * @cssprop --t-color-error
 * @cssprop --t-input-color
 * @cssprop --t-input-bg-color
 * @cssprop --t-input-placeholder-color
 * @cssprop --t-border-color
 * @cssprop --t-border-size
 * @cssprop --t-label-color
 * @cssprop --t-label-size
 * @cssprop --t-message-size
 * @cssprop --t-outline-size
 */
export class FormInput extends LitElement {
  static get properties() {
    return {
      id: { type: String },
      name: { type: String },
      type: { type: String },
      value: { type: String },
      label: { type: String },
      hint: { type: String },
      placeholder: { type: String },
      messages: { type: Array },
      wide: { type: Boolean },
      inline: { type: Boolean },
      reversed: { type: Boolean },
      disabled: { type: Boolean },
      readonly: { type: Boolean },
      status: { type: String },
    };
  }

  static get styles() {
    return css`
      :host {
        display: inline-flex;
      }
      .input-wrapper {
        display: grid;
        grid-gap: var(--t-gap);
        grid-template-areas:
          'l l l'
          'h h h'
          'i i i'
          'm m m';
      }
      .hint {
        grid-area: h;
        font-size: var(--t-message-size);
        color: var(--t-input-placeholder-color);
        flex: 1;
      }
      .label {
        grid-area: l;
        font-size: var(--t-label-size);
        color: var(--t-label-color);
        font-weight: var(--t-label-font-weight, 600);
      }
      .messages {
        font-size: var(--t-message-size);
        margin: 0;
        padding: 0;
        list-style: none;
        grid-area: m;
        display: grid;
      }
      :host,
      .input-wrapper,
      .input:not(.check) {
        width: var(--t-w-full);
      }
      :host,
      .input-wrapper,
      .label,
      .messages,
      .check,
      .input {
        box-sizing: border-box;
        transition: var(--t-transition);
      }
      .disabled {
        opacity: 0.6;
      }
      .inline {
        grid-template-areas:
          'l i i'
          'h i i'
          '. m m';

        grid-column-gap: calc(var(--t-gap) * 2.5);
        grid-row-gap: var(--t-gap);
        align-items: center;
      }
      .inline .label {
        grid-row: span 2;
      }
      .inline .hint {
        align-self: start;
      }
      .inline .hint + .label {
        grid-row: span 1;
        align-self: end;
      }
      .inline.reversed {
        grid-template-areas:
          'i i l'
          'i i h'
          'm m .';
      }
      .input {
        -webkit-appearance: none;
        -moz-appearance: none;
        -ms-appearance: none;
        grid-area: i;
        font-size: var(--t-font-size);
        font-family: var(--t-font-family);
        padding: var(--t-padding);
        color: var(--t-input-color);
        background-color: var(--t-input-bg-color);
        border: var(--t-border-size) solid var(--t-border-color);
        border-radius: var(--t-round);
        outline-color: var(--t-outline-color);
      }
      .input::placeholder {
        color: var(--t-input-placeholder-color);
      }
      .input:focus {
        outline: 0;
        border-color: var(--t-color-primary);
      }
      .input:hover {
        border-color: var(--t-color-primary);
        box-shadow: var(--t-color-primary) 0 0 var(--t-outline-size);
      }
      .input-wrapper.error .input:hover {
        border-color: var(--t-color-error);
        box-shadow: var(--t-color-error) 0 0 var(--t-outline-size);
      }
      .input-wrapper.success .input:hover {
        border-color: var(--t-color-success);
        box-shadow: var(--t-color-success) 0 0 var(--t-outline-size);
      }
      .input::selection {
        color: var(--t-color-white);
        background-color: var(--t-color-accent);
      }
      .error .input::selection {
        background-color: var(--t-color-error);
      }
      .error .label,
      .error .check,
      .error .messages {
        color: var(--t-color-error);
      }
      .error .input {
        border-color: var(--t-color-error);
      }
      .success .input::selection {
        background-color: var(--t-color-success);
      }
      .success .label,
      .success .check,
      .success .messages {
        color: var(--t-color-success);
      }
      .success .input {
        border-color: var(--t-color-success);
      }
      @media (min-width: 640px) {
        :host,
        .input-wrapper,
        .input:not(.check) {
          width: initial;
        }
      }
    `;
  }

  constructor() {
    super();
    this.id = '';
    this.name = '';
    this.value = null;
    this.label = '';
    this.hint = '';
    this.placeholder = '';
    this.messages = [];
    this.wide = false;
    this.status = '';
    this.inline = false;
    this.reversed = false;
    this.disabled = false;
    this.readonly = false;
  }

  error() {
    return this.status === 'error';
  }

  success() {
    return this.status === 'success';
  }

  labelId() {
    return `label-${this.id}`;
  }

  hintId() {
    return `hint-${this.id}`;
  }

  inputName() {
    return this.name || this.id;
  }

  renderLabel() {
    if (this.label) {
      return html`
        <span class="label" .id=${this.labelId()}>${this.label}</span>
      `;
    }
    return null;
  }

  renderHint() {
    if (this.hint) {
      return html`
        <span class="hint" .id=${this.hintId()}>${this.hint}</span>
      `;
    }
    return null;
  }

  renderInput(props = { class: 'input' }) {
    return html`
      <input
        .id=${this.id}
        .value=${this.value}
        .type=${this.type}
        .name=${this.inputName()}
        .placeholder=${this.placeholder}
        .aria-labelledby=${this.labelId()}
        .aria-describedby=${this.hintId()}
        ?disabled=${this.disabled}
        ?readonly=${this.readonly}
        ...=${spread(props)}
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
      ${fontStyles} ${this.wide ? fullWidthInput : null}
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
        ${this.renderHint()} ${this.renderLabel()} ${this.renderInput()} ${this.renderMessages()}
      </label>
    `;
  }
}
