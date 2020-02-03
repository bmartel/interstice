import { html } from 'lit-element';
import { spread } from '@open-wc/lit-helpers';
import './checkbox.js';
import {FormSelect} from './formselect.js';

/**
 * @element t-checkboxgroup
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
export class CheckBoxGroup extends FormSelect {
  renderOption(option, index) {
    return html`
      <t-checkbox
        .name=${this.name}
        .id=${this.inputId(index)}
        .label=${this.convertLabel(option)}
        .value=${this.convertValue(option)}
        ?wide=${this.wide}
        ?inline=${this.inline}
        ?reversed=${this.reversed}
        ?checked=${this.inputSelected(option, index)}
        @click=${e => this.inputUpdate(e, index)}
        ...=${spread(option)}
      ></t-checkbox>
    `;
  }
}

window.customElements.define('t-checkboxgroup', CheckBoxGroup);

