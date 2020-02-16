import { FormInput } from './forminput.js';

/**
 * @element i-textfield
 *
 * @cssprop --font-size
 * @cssprop --font-family
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
export class TextField extends FormInput {
  constructor() {
    super();
    this.type = 'text';
  }
}

customElements.define('i-textfield', TextField);
