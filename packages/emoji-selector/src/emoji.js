import { html, css, LitElement } from 'lit-element';
import emojis from './data.js';

/**
 * @element i-emoji
 *
 * @cssprop --i-emoji-size
 */
export class Emoji extends LitElement {
  static get properties() {
    return {
      name: String,
    };
  }

  static get styles() {
    return css`
      :host {
        display: inline-flex;
        align-items: center;
        justify-content: center;
      }
      button {
        font-size: var(--i-emoji-size, 20px);
      }
    `;
  }

  constructor() {
    super();
    this.name = '';
    this.value = '';
  }

  get emoji() {
    return this.value || emojis.find(e => e.n.find(n => n === this.name));
  }

  render() {
    return html`
      <button>${this.emoji}</button>
    `;
  }
}

customElements.define('i-emoji', Emoji);
