import { html, css, LitElement } from 'lit-element';

/**
 * @element z-button
 *
 * @cssprop --z-font-size
 * @cssprop --z-font-family
 * @cssprop --z-leading
 * @cssprop --z-padding
 * @cssprop --z-round
 * @cssprop --z-transition
 * @cssprop --z-color
 * @cssprop --z-color-primary
 * @cssprop --z-color-accent
 * @cssprop --z-color-error
 * @cssprop --z-input-color
 * @cssprop --z-input-bg-color
 * @cssprop --z-border-color
 * @cssprop --z-border-size
 */
export class Button extends LitElement {
  static get properties() {
    return {
      type: { type: String },
      variant: { type: String, reflect: true },
    };
  }

  static get styles() {
    return css`
      :host
    `;
  }

  // constructor() {
  //   super();
  // }

  inputUpdate(e) {
    this.checked = e.target.checked;
  }


  render() {
    return html`
      <button><slot></slot></button>
    `;
  }
}

window.customElements.define('z-button', Button);
