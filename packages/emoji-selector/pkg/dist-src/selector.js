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
        display: flex;
        width: 100%;
        flex-direction: row-reverse;
      }
      input {
        display: flex;
        width: 100%;
        margin-bottom: var(--gap);
      }
      ol {
        list-style: none;
        width: 100%;
        display: grid;
        grid-gap: var(--gap);
      }
      li {
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
              <li><i-emoji .value=${e.e}></i-emoji></li>
            `)}
      </ol>
    `;
  }

  render() {
    return html`
      ${this.renderResults()}
      <input @change=${this.updateSearch} .value=${this.query} />
    `;
  }

}
customElements.define('i-emoji-selector', EmojiSelector);