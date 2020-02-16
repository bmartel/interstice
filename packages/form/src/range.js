import { css } from 'lit-element';
import { FormInput } from './forminput.js';

/**
 * @element i-range
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
export class Range extends FormInput {
  static get properties() {
    return {
      min: { Type: Number },
      max: { Type: Number },
      step: { Type: Number },
    };
  }

  static get styles() {
    return css`
      ${FormInput.styles}
      .input {
        border: none;
        padding: 0px;
      }
      input::-moz-range-track,
      input::-webkit-slider-runnable-track {
        width: 100%;
        cursor: pointer;
        height: var(--outline-size);
        background: var(--border-color);
        border-radius: var(--round);
        border: var(--border-size) solid var(--border-color);
      }
      input::-ms-track {
        width: 100%;
        cursor: pointer;
        height: var(--outline-size);
        background: var(--border-color);
        border-radius: var(--round);
        border: var(--border-size) solid var(--border-color);
      }
      input::-webkit-slider-thumb,
      input::-moz-range-thumb {
        -moz-appearance: none;
        -webkit-appearance: none;
        box-sizing: border-box;
        width: 25px;
        height: 25px;
        border: var(--border-size) solid transparent;
        border-radius: var(--round-full);
        background: var(--color-primary);
        cursor: pointer;
      }
      input::-ms-thumb {
        -ms-appearance: none;
        box-sizing: border-box;
        width: 26px;
        height: 26px;
        border-radius: var(--round-full);
        background: var(--color-primary);
        cursor: pointer;
      }
      .error input::-webkit-slider-thumb,
      .error input::-moz-range-thumb {
        border-color: var(--color-error);
        background: var(--color-error);
      }
      .error input::-ms-thumb {
        border-color: var(--color-error);
        background: var(--color-error);
      }
      .success input::-webkit-slider-thumb,
      .success input::-moz-range-thumb {
        border-color: var(--color-success);
        background: var(--color-success);
      }
      .success input::-ms-thumb {
        border-color: var(--color-success);
        background: var(--color-success);
      }
      input:focus::-moz-range-track,
      input:focus::-webkit-slider-runnable-track {
        background: var(--color-accent);
      }
      input::-ms-fill-lower {
        background: var(--color-primary);
      }
      input::-ms-fill-upper {
        background: var(--border-color);
      }
      input:focus::-ms-fill-lower {
        background: var(--color-accent);
      }
      input:focus::-ms-fill-upper {
        background: var(--border-color);
      }
    `;
  }

  constructor() {
    super();
    this.type = 'range';
    this.min = 0;
    this.max = 100;
    this.step = 1;
    this.inputUpdate = this.inputUpdate.bind(this);
  }

  inputUpdate(e) {
    this.value = e.target.value;
  }

  renderInput() {
    return super.renderInput({
      class: 'input',
      '@input': this.inputUpdate,
    });
  }
}

customElements.define('i-range', Range);
