import { html, css } from 'lit-element';
import { spread } from '@open-wc/lit-helpers';
import './checkbox.js';
import { FormSelect } from './formselect.js';
/**
 * @element i-checkboxgroup
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
 *
 */

export class CheckBoxGroup extends FormSelect {
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
      i-checkbox {
        --label-font-weight: var(--font-normal);
      }
    `;
  }

  renderOption(option, index) {
    const {
      inline,
      reversed,
      wide,
      ...optionProps
    } = option;
    return html`
      <i-checkbox
        .name=${this.name}
        .id=${this.inputId(index)}
        .label=${this.convertLabel(option)}
        .value=${this.convertValue(option)}
        ?checked=${this.inputSelected(option, index)}
        @update=${e => this.inputUpdate(e, index)}
        reversed
        ...=${spread(optionProps)}
      ></i-checkbox>
    `;
  }

}
customElements.define('i-checkboxgroup', CheckBoxGroup);