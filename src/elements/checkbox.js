import { html, css } from 'lit-element';
import { classMap } from 'lit-html/directives/class-map';
import { FormInput } from './forminput.js';

/**
 * @element z-checkbox
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
export class CheckBox extends FormInput {
  static get properties() {
    return {
      checked: { type: Boolean },
    };
  }

  static get styles() {
    return css`
      ${FormInput.styles}
      .input {
        color: var(--z-color-primary);
      }
      .check:not(.input):not(.radio) {
        color: var(--z-color-white);
      }
      input:checked + .check {
        background-color: var(--z-color-primary);
        border-color: var(--z-color-primary);
      }
      .error input:checked + .check {
        background-color: var(--z-color-error);
        border-color: var(--z-color-error);
      }
      .success input:checked + .check {
        background-color: var(--z-color-success);
        border-color: var(--z-color-success);
      }
      input:checked + .radio,
      .error input:checked + .radio,
      .success input:checked + .radio {
        background-color: var(--z-input-bg-color);
      }
      .input.check {
        cursor: pointer;
        stroke: currentColor;
        stroke-width: 4px;
        width: 26px;
        height: 26px;
      }
      .radio {
        fill: currentColor;
        border-radius: var(--z-round-full);
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

window.customElements.define('z-checkbox', CheckBox);
