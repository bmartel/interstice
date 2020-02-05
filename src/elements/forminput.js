import { html, LitElement, css } from 'lit-element';
import { classMap } from 'lit-html/directives/class-map';
import { spread } from '@open-wc/lit-helpers';
import { fontStyles, fullWidthInput } from '../styles.js';

/**
 * @element z-forminput
 *
 * @cssprop --z-font-size
 * @cssprop --z-font-family
 * @cssprop --z-leading
 * @cssprop --z-padding
 * @cssprop --z-gap
 * @cssprop --z-round
 * @cssprop --z-transition
 * @cssprop --z-color
 * @cssprop --z-color-primary
 * @cssprop --z-color-accent
 * @cssprop --z-color-error
 * @cssprop --z-input-color
 * @cssprop --z-input-bg-color
 * @cssprop --z-input-placeholder-color
 * @cssprop --z-border-color
 * @cssprop --z-border-size
 * @cssprop --z-label-color
 * @cssprop --z-label-size
 * @cssprop --z-label-font-weight 
 * @cssprop --z-message-size
 * @cssprop --z-message-gap
 * @cssprop --z-outline-size
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
        grid-gap: var(--z-gap);
        grid-template-areas:
          'l l l'
          'h h h'
          'i i i'
          'm m m';
      }
      .hint {
        grid-area: h;
        font-size: var(--z-message-size);
        color: var(--z-input-placeholder-color);
        flex: 1;      
        margin-bottom: var(--z-gap);
      }
      .label {
        grid-area: l;
        font-size: var(--z-label-size);
        color: var(--z-label-color);
        font-weight: var(--z-label-font-weight, 600);
      }
      .messages {
        font-size: var(--z-message-size);
        margin: var(--z-gap) 0 0 0;
        padding: 0;
        list-style: none;
        grid-area: m;
        display: grid;
      }
      :host,
      .input-wrapper,
      .input:not(.check) {
        width: var(--z-w-full);
      }
      :host,
      .input-wrapper,
      .label,
      .messages,
      .check,
      .input {
        box-sizing: border-box;
        transition: var(--z-transition);
      }
      .disabled {
        opacity: 0.6;
      }
      .inline {
        grid-template-areas:
          'l i i'
          'h i i'
          '. m m';

        grid-column-gap: calc(var(--z-gap) * 2.5);
        grid-row-gap: var(--z-gap);
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
        font-size: var(--z-font-size);
        font-family: var(--z-font-family);
        padding: var(--z-padding);
        color: var(--z-input-color);
        background-color: var(--z-input-bg-color);
        border: var(--z-border-size) solid var(--z-border-color);
        border-radius: var(--z-round);
        outline-color: var(--z-outline-color);
      }
      .input::placeholder {
        color: var(--z-input-placeholder-color);
      }
      .input:focus {
        outline: 0;
        border-color: var(--z-color-primary);
      }
      .input:hover {
        border-color: var(--z-color-primary);
        box-shadow: var(--z-color-primary) 0 0 var(--z-outline-size);
      }
      .input-wrapper.error .input:hover {
        border-color: var(--z-color-error);
        box-shadow: var(--z-color-error) 0 0 var(--z-outline-size);
      }
      .input-wrapper.success .input:hover {
        border-color: var(--z-color-success);
        box-shadow: var(--z-color-success) 0 0 var(--z-outline-size);
      }
      .input::selection {
        color: var(--z-color-white);
        background-color: var(--z-color-accent);
      }
      .error .input::selection {
        background-color: var(--z-color-error);
      }
      .error .label,
      .error .check,
      .error .messages {
        color: var(--z-color-error);
      }
      .error .input {
        border-color: var(--z-color-error);
      }
      .success .input::selection {
        background-color: var(--z-color-success);
      }
      .success .label,
      .success .check,
      .success .messages {
        color: var(--z-color-success);
      }
      .success .input {
        border-color: var(--z-color-success);
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
