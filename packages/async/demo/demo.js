import { AsyncElement } from "/src/index.js";
import {html} from "lit-html";

class AsyncDemo extends AsyncElement {

  static get deps() {
    return ['delay'];
  }

  static get properties() {
    return {
      delay: Number
    }
  }

  erroring(err) {
    console.log(err);
    return html`${err.toString()}`;
  }

  loading() {
    console.log('loading');
    return html`<p>Loading ...</p>`;
  }

  async load(changedProps) {
    await import('/demo/async-stub.js');

    return html`
      <i-async-stub>
        <h1>Here is some async content!!</h1>
        <p>It was loaded in from the async element</p>
        ${this.delay ? html`<p>delayed by: ${this.delay}`: null}
      </i-async-stub>
    `;
  }
}

customElements.define('i-async-demo', AsyncDemo);
