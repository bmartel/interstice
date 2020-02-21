import { html, LitElement, css } from 'lit-element';
import { classMap } from 'lit-html/directives/class-map';
import { spread } from '@open-wc/lit-helpers';
import { fontStyles, fullWidthInput } from './styles.js';
import { Validation } from './validation.js';

/**
 * @element i-forminput
 *
 * @cssprop --font-size
 * @cssprop --font-family
 * @cssprop --leading
 * @cssprop --padding
 * @cssprop --gap
 * @cssprop --round
 * @cssprop --transition
 * @cssprop --color
 * @cssprop --color-primary
 * @cssprop --color-accent
 * @cssprop --color-error
 * @cssprop --input-color
 * @cssprop --input-background-color
 * @cssprop --input-placeholder-color
 * @cssprop --border-color
 * @cssprop --border-size
 * @cssprop --label-color
 * @cssprop --label-size
 * @cssprop --label-font-weight
 * @cssprop --message-size
 * @cssprop --message-gap
 * @cssprop --outline-size
 */
export class FormInput extends Validation(LitElement) {
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
        grid-gap: var(--gap);
        grid-template-areas:
          'l l l'
          'h h h'
          'i i i'
          'm m m';
      }
      .hint {
        grid-area: h;
        font-size: var(--message-size);
        color: var(--input-placeholder-color);
        flex: 1;
        margin-bottom: var(--gap);
      }
      .label {
        grid-area: l;
        font-size: var(--label-size);
        color: var(--label-color);
        font-weight: var(--label-font-weight, 600);
      }
      .messages {
        font-size: var(--message-size);
        margin: var(--gap) 0 0 0;
        padding: 0;
        list-style: none;
        grid-area: m;
        display: grid;
      }
      :host,
      .input-wrapper:not(.inline),
      .input:not(.check) {
        width: var(--w-full);
      }
      :host,
      .input-wrapper,
      .label,
      .messages,
      .check,
      .input {
        box-sizing: border-box;
        transition: var(--transition);
      }
      .disabled {
        opacity: 0.6;
      }
      .inline {
        grid-template-areas:
          'l i i'
          'h i i'
          '. m m';

        grid-column-gap: calc(var(--gap) * 2.5);
        grid-row-gap: var(--gap);
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
        font-size: var(--font-size);
        font-family: var(--font-family);
        padding: var(--padding);
        color: var(--input-color);
        background-color: var(--input-background-color);
        border: var(--border-size) solid var(--border-color);
        border-radius: var(--round);
        outline-color: var(--outline-color);
      }
      .input::placeholder {
        color: var(--input-placeholder-color);
      }
      .input:focus {
        outline: 0;
        border-color: var(--color-primary);
        background-color: var(--input-focus-background-color);
      }
      .input:hover {
        border-color: var(--color-primary);
        box-shadow: var(--color-primary) 0 0 var(--outline-size);
      }
      .input-wrapper.error .input:hover {
        border-color: var(--color-error);
        box-shadow: var(--color-error) 0 0 var(--outline-size);
      }
      .input-wrapper.success .input:hover {
        border-color: var(--color-success);
        box-shadow: var(--color-success) 0 0 var(--outline-size);
      }
      .input::selection {
        color: var(--color-white);
        background-color: var(--color-accent);
      }
      .error .input::selection {
        background-color: var(--color-error);
      }
      .error .label,
      .error .check,
      .error .messages {
        color: var(--color-error);
      }
      .error .input {
        border-color: var(--color-error);
      }
      .success .input::selection {
        background-color: var(--color-success);
      }
      .success .label,
      .success .check,
      .success .messages {
        color: var(--color-success);
      }
      .success .input {
        border-color: var(--color-success);
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

  get error() {
    return this.status === 'error';
  }

  set error(_) {} // eslint-disable-line

  get success() {
    return this.status === 'success';
  }

  set success(_) {} // eslint-disable-line

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
          error: this.error,
          success: this.success,
        })}
      >
        ${this.renderHint()} ${this.renderLabel()} ${this.renderInput()} ${this.renderMessages()}
      </label>
    `;
  }
}
