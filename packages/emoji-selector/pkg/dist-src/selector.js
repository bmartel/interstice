import { html, css, LitElement } from 'lit-element';
import emojis from './data.js';
import './emoji.js';
/**
 * @element i-emoji-selector
 *
 * @cssprop --i-emoji-size
 */

export class EmojiSelector extends LitElement {
  static get properties() {
    return {
      query: String
    };
  }

  static get styles() {
    return css`
      :host {
        box-sizing: border-box;
        display: flex;
        width: 100%;
        flex-direction: column-reverse;
      }
      input {
        -webkit-appearance: none;
        -moz-appearance: none;
        -ms-appearance: none;
        box-sizing: border-box;
        display: flex;
        width: 100%;
        margin-bottom: var(--gap);
        font-size: var(--font-size);
        font-family: var(--font-family);
        padding: var(--padding);
        color: var(--input-color);
        background-color: var(--input-background-color);
        border: var(--border-size) solid var(--border-color);
        border-radius: var(--round);
        outline-color: var(--outline-color);
      }
      input::placeholder {
        color: var(--input-placeholder-color);
      }
      input:focus {
        outline: 0;
        border-color: var(--color-primary);
      }
      input:hover {
        border-color: var(--color-primary);
        box-shadow: var(--color-primary) 0 0 var(--outline-size);
      }
      ol {
        box-sizing: border-box;
        padding: 0;
        margin: 0;
        list-style: none;
        width: 100%;
        display: grid;
        grid-gap: var(--gap);
        grid-template-columns: repeat(7, 1fr);
      }
      li {
        box-sizing: border-box;
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 0;
      }
    `;
  }

  constructor() {
    super();
    this.query = '';
  }

  updateSearch(e) {
    this.query = e.target.value;
  }

  get results() {
    return this.query ? emojis.filter(emoji => emoji.n.filter(name => name.toLowerCase().indexOf(this.query.toLowerCase()) >= 0).length) : emojis.slice(0, 100);
  }

  renderResults() {
    return html`
      <ol>
        ${this.results.map(e => html`
              <li><i-emoji .value=${e}></i-emoji></li>
            `)}
      </ol>
    `;
  }

  render() {
    return html`
      ${this.renderResults()}
      <input @keyup=${this.updateSearch} .value=${this.query} />
    `;
  }

}
customElements.define('i-emoji-selector', EmojiSelector);