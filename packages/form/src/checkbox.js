import { html, css } from 'lit-element';
import { classMap } from 'lit-html/directives/class-map';
import { FormInput } from './forminput.js';

/**
 * @element i-checkbox
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
export class CheckBox extends FormInput {
  static get properties() {
    return {
      checked: { type: Boolean, reflect: true },
    };
  }

  static get styles() {
    return css`
      ${FormInput.styles}
      .input {
        color: var(--color-primary);
      }
      .check:not(.input):not(.radio) {
        color: var(--color-white);
      }
      :host([checked]) input + .check {
        background-color: var(--color-primary);
        border-color: var(--color-primary);
      }
      :host([checked]) .error input + .check {
        background-color: var(--color-error);
        border-color: var(--color-error);
      }
      :host([checked]) .success input + .check {
        background-color: var(--color-success);
        border-color: var(--color-success);
      }
      .input.check {
        cursor: pointer;
        stroke: currentColor;
        stroke-width: 4px;
        width: 26px;
        height: 26px;
      }
      .hidden {
        opacity: 0;
        -webkit-appearance: none;
        -moz-appearance: none;
        width: 0;
        height: 0;
        cursor: pointer;
      }
    `;
  }

  constructor() {
    super();
    this.inline = true;
    this.checked = false;
    this.type = 'checkbox';
    this.inputUpdate = this.inputUpdate.bind(this);
  }

  inputStyles() {
    const styles = {
      display: 'flex',
      cursor: 'pointer',
    };
    if (this.checked) {
      styles.padding = '0';
    }
    return styles;
  }

  inputUpdate(e) {
    this.checked = e.target.checked;
    this.dispatchEvent(new CustomEvent('update'));
  }

  renderCheck() {
    if (this.checked) {
      return html`
        <svg class="check" viewBox="0 0 24 24" preserveAspectRatio="xMidYMid meet">
          <path fill="none" d="M6,11.3 L10.3,16 L18,6.2"></path>
        </svg>
      `;
    }
    return null;
  }

  renderInput() {
    return html`
      ${super.renderInput({
        class: 'hidden',
        '?checked': this.checked,
        '@click': this.inputUpdate,
      })}
      <div class=${classMap({ input: true, check: true, [this.type]: true })} style="padding: 0;">
        ${this.renderCheck()}
      </div>
    `;
  }
}

customElements.define('i-checkbox', CheckBox);
