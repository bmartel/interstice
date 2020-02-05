import { css } from 'lit-element';
import { FormInput } from './forminput.js';

/**
 * @element z-range
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
        height: var(--z-outline-size);
        background: var(--z-border-color);
        border-radius: var(--z-round);
        border: var(--z-border-size) solid var(--z-border-color);
      }
      input::-ms-track {
        width: 100%;
        cursor: pointer;
        height: var(--z-outline-size);
        background: var(--z-border-color);
        border-radius: var(--z-round);
        border: var(--z-border-size) solid var(--z-border-color);
      }
      input::-webkit-slider-thumb,
      input::-moz-range-thumb {
        -moz-appearance: none;
        -webkit-appearance: none;
        box-sizing: border-box;
        width: 25px;
        height: 25px;
        border: var(--z-border-size) solid transparent;
        border-radius: var(--z-round-full);
        background: var(--z-color-primary);
        cursor: pointer;
      }
      input::-ms-thumb {
        -ms-appearance: none;
        box-sizing: border-box;
        width: 26px;
        height: 26px;
        border-radius: var(--z-round-full);
        background: var(--z-color-primary);
        cursor: pointer;
      }
      .error input::-webkit-slider-thumb,
      .error input::-moz-range-thumb {
        border-color: var(--z-color-error);
        background: var(--z-color-error);
      }
      .error input::-ms-thumb {
        border-color: var(--z-color-error);
        background: var(--z-color-error);
      }
      .success input::-webkit-slider-thumb,
      .success input::-moz-range-thumb {
        border-color: var(--z-color-success);
        background: var(--z-color-success);
      }
      .success input::-ms-thumb {
        border-color: var(--z-color-success);
        background: var(--z-color-success);
      }
      input:focus::-moz-range-track,
      input:focus::-webkit-slider-runnable-track {
        background: var(--z-color-accent);
      }
      input::-ms-fill-lower {
        background: var(--z-color-primary);
      }
      input::-ms-fill-upper {
        background: var(--z-border-color);
      }
      input:focus::-ms-fill-lower {
        background: var(--z-color-accent);
      }
      input:focus::-ms-fill-upper {
        background: var(--z-border-color);
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

window.customElements.define('z-range', Range);
