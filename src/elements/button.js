import { html, css, LitElement } from 'lit-element';

/**
 * @element z-button
 *
 * @cssprop --z-font-size
 * @cssprop --z-font-family
 * @cssprop --z-padding
 * @cssprop --z-round
 * @cssprop --z-transition
 * @cssprop --z-color
 * @cssprop --z-color-primary
 * @cssprop --z-color-accent
 * @cssprop --z-color-error
 * @cssprop --z-button-size
 * @cssprop --z-button-color
 * @cssprop --z-border-color
 * @cssprop --z-border-size
 */
export class Button extends LitElement {
  static get properties() {
    return {
      type: { type: String },
      color: { type: String, reflect: true },
      size: { type: String, reflect: true },
      inverted: { type: Boolean, reflect: true },
    };
  }

  static get styles() {
    return css`
      :host {
        --z-button-padding: var(--z-padding);
        --z-button-font-size: var(--z-font-size);
        --z-button-font-family: var(--z-font-family);
        --z-button-color: var(--z-white);
        --z-button-bg-color: var(--z-background-color);
        --z-button-border-color: var(--z-border-color);
      }
      :host([size=sm]) {
        --z-button-padding: var(--z-p-2);
        --z-button-font-size: var(--z-text-sm);
      }
      :host([size=md]) {
        --z-button-padding: var(--z-p-4);
        --z-button-font-size: var(--z-text-md);
      }
      :host([size=lg]) {
        --z-button-padding: var(--z-p-6);
        --z-button-font-size: var(--z-text-lg);
      }
      :host([color=default]) {
        --z-button-color: var(--z-color) !important;
      }
      :host([color=primary]) {
        --z-button-bg-color: var(--z-color-primary);
        --z-button-border-color: var(--z-color-primary);
      }
      :host([color=accent]) {
        --z-button-bg-color: var(--z-color-accent);
        --z-button-border-color: var(--z-color-accent);
      }
      :host([color=error]) {
        --z-button-bg-color: var(--z-color-error);
        --z-button-border-color: var(--z-color-error);
      }
      :host([color=success]) {
        --z-button-bg-color: var(--z-color-success);
        --z-button-border-color: var(--z-color-success);
      }
      :host([inverted]) {
        --z-button-bg-color: var(--z-background-color);
      }
      :host([inverted]):host([color=primary]) {
        --z-button-color: var(--z-color-primary) !important;
      }
      :host([inverted]):host([color=accent]) {
        --z-button-color: var(--z-color-accent) !important;
      }
      :host([inverted]):host([color=error]) {
        --z-button-color: var(--z-color-error) !important;
      }
      :host([inverted]):host([color=success]) {
        --z-button-color: var(--z-color-success) !important;
      }
      button {
        font-family: var(--z-button-font-family);
        font-size: var(--z-button-font-size);
        padding: calc(var(--z-button-padding) / 2) var(--z-button-padding);
        border-radius: var(--z-round);
        transition: var(--z-transition);
        color: var(--z-button-color);
        background-color: var(--z-button-bg-color);
        border: var(--z-button-border-color) solid var(--z-border-size);
      }
      button:hover {
        opacity: 0.8;
        cursor: pointer;
      }
    `;
  }

  constructor() {
    super();
    this.type = 'button';
    this.color = 'default';
  }

  // inputUpdate(e) {
  //   this.checked = e.target.checked;
  // }


  render() {
    return html`
      <button
        .type=${this.type}
      ><slot></slot></button>
    `;
  }
}

window.customElements.define('z-button', Button);
