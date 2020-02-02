import { css } from 'lit-element';
import { FormInput } from './forminput.js';

/**
 * @element t-range
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
        height: var(--t-outline-size);
        background: var(--t-border-color);
        border-radius: var(--t-round);
        border: var(--t-border-size) solid var(--t-border-color);
      }
      input::-ms-track {
        width: 100%;
        cursor: pointer;
        height: var(--t-outline-size);
        background: var(--t-border-color);
        border-radius: var(--t-round);
        border: var(--t-border-size) solid var(--t-border-color);
      }
      input::-webkit-slider-thumb,
      input::-moz-range-thumb {
        -moz-appearance: none;
        -webkit-appearance: none;
        box-sizing: border-box;
        width: 25px;
        height: 25px;
        border: var(--t-border-size) solid transparent;
        border-radius: var(--t-round-full);
        background: var(--t-color-primary);
        cursor: pointer;
      }
      input::-ms-thumb {
        -ms-appearance: none;
        box-sizing: border-box;
        width: 26px;
        height: 26px;
        border-radius: var(--t-round-full);
        background: var(--t-color-primary);
        cursor: pointer;
      }
      .error input::-webkit-slider-thumb,
      .error input::-moz-range-thumb {
        border-color: var(--t-color-error);
        background: var(--t-color-error);
      }
      .error input::-ms-thumb {
        border-color: var(--t-color-error);
        background: var(--t-color-error);
      }
      .success input::-webkit-slider-thumb,
      .success input::-moz-range-thumb {
        border-color: var(--t-color-success);
        background: var(--t-color-success);
      }
      .success input::-ms-thumb {
        border-color: var(--t-color-success);
        background: var(--t-color-success);
      }
      input:focus::-moz-range-track,
      input:focus::-webkit-slider-runnable-track {
        background: var(--t-color-accent);
      }
      input::-ms-fill-lower {
        background: var(--t-color-primary);
      }
      input::-ms-fill-upper {
        background: var(--t-border-color);
      }
      input:focus::-ms-fill-lower {
        background: var(--t-color-accent);
      }
      input:focus::-ms-fill-upper {
        background: var(--t-border-color);
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

window.customElements.define('t-range', Range);
