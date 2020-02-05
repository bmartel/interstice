import { html } from 'lit-element';
import { spread } from '@open-wc/lit-helpers';
import './radio.js';
import {FormSelect} from './formselect.js';

/**
 * @element z-radiogroup
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
      <z-radio
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
      ></z-radio>
    `;
  }
}

window.customElements.define('z-radiogroup', RadioGroup);
