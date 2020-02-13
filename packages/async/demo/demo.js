import AsyncElement from "/src/index.js";
import {html} from "lit-html";

class AsyncDemo extends AsyncElement {

  static get properties() {
    return {
      name: String 
    }
  }

  constructor() {
    super();
    this.name = 'async-stub';
  }

  erroring(err) {
    return html`${err.toString()}`;
  }

  loading() {
    return html`<p>Loading ...</p>`;
  }

  async asyncRender() {
    await import(`/demo/${this.name}.js`);

    switch(this.name) {
      case 'async-stub': {
        return html`
          <i-async-stub>
            <h1>Here is some async content!!</h1>
            <p>It was loaded in from the async element</p>
          </i-async-stub>
        `;
      }
      default: {
        return html`
          <i-async-stub-two>
            <h1>A different async element</h1>
            <p>It was also loaded asynchronously</p>
          </i-async-stub-two>
        `;
      }
    }
  }
}

customElements.define('i-async-demo', AsyncDemo);
