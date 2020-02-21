import { html, css } from 'lit-element';
import { spread } from '@open-wc/lit-helpers';
import './radio.js';
import { FormSelect } from './formselect.js';

/**
 * @element i-radiogroup
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
export class RadioGroup extends FormSelect {
  static get properties() {
    return {
      value: { type: String },
    };
  }

  static get styles() {
    return css`
      ${FormSelect.styles}
      .messages {
        --gap: 0;
      }
      .label,
      .hint {
        margin-bottom: var(--gap);
      }
      .hint + .label {
        margin-bottom: 0;
      }
      i-radio {
        --label-font-weight: var(--font-normal);
      }
    `;
  }

  constructor() {
    super();
    this.value = '';
  }

  inputUpdate(e) {
    this.value = e.target.value;
  }

  inputSelected(value) {
    return this.value === this.convertValue(value);
  }

  renderOption(option, index) {
    const { inline, reversed, wide, ...optionProps } = option;
    return html`
      <i-radio
        .name=${this.name}
        .id=${this.inputId(index)}
        .label=${this.convertLabel(option)}
        .value=${this.convertValue(option)}
        ?checked=${this.inputSelected(option)}
        @click=${this.inputUpdate}
        reversed
        ...=${spread(optionProps)}
      ></i-radio>
    `;
  }
}

customElements.define('i-radiogroup', RadioGroup);
