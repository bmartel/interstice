import { html, css } from 'lit-element';
import { classMap } from 'lit-html/directives/class-map';
import { FormInput } from './forminput.js';

/**
 * @element t-checkbox
 *
 * @cssprop --t-font-size
 * @cssprop --t-font-family
 * @cssprop --t-leading
 * @cssprop --t-padding
 * @cssprop --t-round
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
 * @cssprop --t-message-size
 * @cssprop --t-outline-size
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
        color: var(--t-color-primary);
      }
      .check:not(.input):not(.radio) {
        color: var(--t-color-white);
      }
      input:checked + .check {
        background-color: var(--t-color-primary);
        border-color: var(--t-color-primary);
      }
      .error input:checked + .check {
        background-color: var(--t-color-error);
        border-color: var(--t-color-error);
      }
      .success input:checked + .check {
        background-color: var(--t-color-success);
        border-color: var(--t-color-success);
      }
      input:checked + .radio,
      .error input:checked + .radio,
      .success input:checked + .radio {
        background-color: var(--t-input-bg-color);
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
        border-radius: var(--t-round-full);
      }
      .hidden {
        opacity: 0;
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

window.customElements.define('t-checkbox', CheckBox);
