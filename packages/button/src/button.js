import { html, css, LitElement } from 'lit-element';

/**
 * @element i-button
 *
 * @slot - the default slot
 * @slot icon-left - the icon left of the default slot
 * @slot icon-right - the icon right of the default slot
 *
 * @cssprop --font-size
 * @cssprop --font-family
 * @cssprop --padding
 * @cssprop --round
 * @cssprop --transition
 * @cssprop --color
 * @cssprop --color-primary
 * @cssprop --color-accent
 * @cssprop --color-error
 * @cssprop --button-size
 * @cssprop --button-color
 * @cssprop --button-display
 * @cssprop --button-align-items
 * @cssprop --border-color
 * @cssprop --border-size
 * @cssprop --outline-size
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
        --button-padding: var(--padding);
        --button-font-size: var(--font-size);
        --button-font-family: var(--font-family);
        --button-color: var(--color-white);
        --button-background-color: var(--background-color);
        --button-border-color: var(--border-color);
      }
      :host([size='sm']) {
        --button-padding: var(--p-2);
        --button-font-size: var(--text-sm);
      }
      :host([size='md']) {
        --button-padding: var(--p-4);
        --button-font-size: var(--text-md);
      }
      :host([size='lg']) {
        --button-padding: var(--p-6);
        --button-font-size: var(--text-lg);
      }
      :host([size='input']) {
        --button-padding: var(--p-6);
      }
      :host([color='default']) {
        --button-color: var(--color);
      }
      :host([color='primary']) {
        --button-background-color: var(--color-primary);
        --button-border-color: var(--color-primary);
      }
      :host([color='accent']) {
        --button-background-color: var(--color-accent);
        --button-border-color: var(--color-accent);
      }
      :host([color='error']) {
        --button-background-color: var(--color-error);
        --button-border-color: var(--color-error);
      }
      :host([color='success']) {
        --button-background-color: var(--color-success);
        --button-border-color: var(--color-success);
      }
      :host([inverted]) {
        --button-background-color: var(--background-color);
      }
      :host([inverted]):host([color='primary']) {
        --button-color: var(--color-primary) !important;
      }
      :host([inverted]):host([color='accent']) {
        --button-color: var(--color-accent) !important;
      }
      :host([inverted]):host([color='error']) {
        --button-color: var(--color-error) !important;
      }
      :host([inverted]):host([color='success']) {
        --button-color: var(--color-success) !important;
      }
      button {
        -webkit-appearance: none;
        -moz-appearance: none;
        display: var(--button-display, inline-flex);
        align-items: var(--button-align-items, center);
        font-family: var(--button-font-family);
        font-size: var(--button-font-size);
        padding: calc(var(--button-padding) / 2) var(--button-padding);
        border-radius: var(--round);
        transition: var(--transition);
        color: var(--button-color);
        background-color: var(--button-background-color);
        border: var(--button-border-color) solid var(--border-size);
      }
      button:hover,
      button:focus {
        outline: none;
        cursor: pointer;
        box-shadow: var(--button-border-color) 0 0 0 var(--outline-size, 2px);
      }
    `;
  }

  constructor() {
    super();
    this.type = 'button';
    this.color = 'default';
  }

  render() {
    return html`
      <button .type=${this.type}>
        <slot name="icon-left"></slot><slot></slot><slot name="icon-right"></slot>
      </button>
    `;
  }
}

customElements.define('i-button', Button);
