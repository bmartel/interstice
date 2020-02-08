import { html, css } from 'lit-element';
import { spread } from '@open-wc/lit-helpers';
import './checkbox.js';
import { FormSelect } from './formselect.js';

/**
 * @element z-checkboxgroup
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
export class CheckBoxGroup extends FormSelect {
  static get styles() {
    return css`
      ${FormSelect.styles}
      .messages {
        --z-gap: 0;
      }
      .label,
      .hint {
        margin-bottom: var(--z-gap);
      }
      .hint + .label {
        margin-bottom: 0;
      }
      .label + .select-group {
        margin-top: var(--z-gap);
      }
      z-checkbox {
        --z-label-font-weight: var(--z-font-normal);
      }
    `;
  }

  renderOption(option, index) {
    const { inline, reversed, wide, ...optionProps } = option;
    return html`
      <z-checkbox
        .name=${this.name}
        .id=${this.inputId(index)}
        .label=${this.convertLabel(option)}
        .value=${this.convertValue(option)}
        ?checked=${this.inputSelected(option, index)}
        @update=${e => this.inputUpdate(e, index)}
        reversed
        ...=${spread(optionProps)}
      ></z-checkbox>
    `;
  }
}

window.customElements.define('z-checkboxgroup', CheckBoxGroup);
