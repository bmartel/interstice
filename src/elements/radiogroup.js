import { html } from 'lit-element';
import { spread } from '@open-wc/lit-helpers';
import './radio.js';
import {FormSelect} from './formselect.js';

/**
 * @element t-radiogroup
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
export class RadioGroup extends FormSelect {
  static get properties() {
    return {
      value: { type: String },
    }
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
    return html`
      <t-radio
        .name=${this.name}
        .id=${this.inputId(index)}
        .label=${this.convertLabel(option)}
        .value=${this.convertValue(option)}
        ?wide=${this.wide}
        ?inline=${this.inline}
        ?reversed=${this.reversed}
        ?checked=${this.inputSelected(option)}
        @click=${this.inputUpdate}
        ...=${spread(option)}
      ></t-radio>
    `;
  }
}

window.customElements.define('t-radiogroup', RadioGroup);
