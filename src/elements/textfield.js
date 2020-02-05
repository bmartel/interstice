import { FormInput } from './forminput.js';

/**
 * @element z-textfield
 *
 * @cssprop --z-font-size
 * @cssprop --z-font-family
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
export class TextField extends FormInput {
  constructor() {
    super();
    this.type = 'text';
  }
}

window.customElements.define('z-textfield', TextField);
