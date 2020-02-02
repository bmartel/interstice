import { html, css } from 'lit-element';
import { spread } from '@open-wc/lit-helpers';
import { FormInput } from './forminput.js';
import './radio.js';

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
export class RadioGroup extends FormInput {
  static get properties() {
    return {
      options: { type: Array },
      inline: { type: Boolean },
      reversed: { type: Boolean },
    };
  }

  static get styles() {
    return css`
      .radio-group {
        display: grid;
        grid-gap: var(--t-gap);
      }
    `;
  }

  constructor() {
    super();
    this.reversed = true;
    this.options = [];
    this.inputUpdate = this.inputUpdate.bind(this);
  }

  inputUpdate(e) {
    this.value = e.target.value;
  }

  radioId(index) {
    return `${this.id}-${index + 1}`;
  }

  radioSelected(value) {
    return this.value === value;
  }

  renderInput() {
    return html`
      <div class="radio-group">
        ${this.options.map(
          (radio, index) =>
            html`
              <t-radio
                .name=${this.name}
                .id=${this.radioId(index)}
                ?wide=${this.wide}
                ?inline=${this.inline}
                ?reversed=${this.reversed}
                ?checked=${this.radioSelected(radio.value)}
                @click=${this.inputUpdate}
                ...=${spread(radio)}
              ></t-radio>
            `,
        )}
      </div>
    `;
  }
}

window.customElements.define('t-radiogroup', RadioGroup);
