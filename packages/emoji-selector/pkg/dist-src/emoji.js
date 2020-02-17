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
      name: String
    };
  }

  static get styles() {
    return css`
      :host {
        box-sizing: border-box;
        display: inline-flex;
        align-items: center;
        justify-content: center;
      }
      button {
        -webkit-appearance: none;
        -moz-appearance: none;
        box-sizing: border-box;
        cursor: pointer;
        transition: var(--transition);
        background-color: none;
        border: 0;
        overflow: hidden;
        border-radius: var(--round);
        font-size: var(--i-emoji-size, 20px);
      }
      button:focus {
        outline: 0;
        background-color: var(--color-gray-400);
      }
      button:hover {
        border-color: var(--color-primary);
        background-color: var(--color-gray-300);
      }
    `;
  }

  constructor() {
    super();
    this.name = '';
    this.value = null;
  }

  get emoji() {
    return this.value || emojis.find(e => e.n.find(n => n === this.name));
  }

  updateSelection() {
    const {
      emoji
    } = this;
    this.dispatchEvent(new CustomEvent('selected-emoji', {
      composed: true,
      bubbles: true,
      detail: {
        emoji
      }
    }));
  }

  render() {
    const {
      emoji
    } = this;
    return html`
      <button .title=${emoji.n[0]} @click=${this.updateSelection}>${emoji.e}</button>
    `;
  }

}
customElements.define('i-emoji', Emoji);