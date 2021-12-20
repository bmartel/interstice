import { MXElement, On, State } from "@interstice/mx";
import {PageElement} from "./page-element";
import "./counter-button";

@MXElement({ tag: "page-counter", route: "^/counter$" })
export class PageCounter extends PageElement {
  @State()
  totalCount: number = 0;

  @On("updateCount")
  updateCount = () => {
    this.totalCount++;
  };

  styles() {
    return `
      ${super.styles()}
      .emoji {
        font-size: 36px;
      }
      .actions {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 1rem;
      }
      .button-content {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 10px;
      }
    `;
  }

  render() {
    console.log("rendering counter");
    return (
      <main>
        <h1>Simple Counter</h1>

        <div class="actions">
          <counter-button></counter-button>
          <span class="emoji">➕</span>
          <counter-button></counter-button>
          <span class="emoji">👉</span>
          <counter-button disabled="" totalCount={this.totalCount as any}></counter-button>
        </div>
      </main>
    );
  }
}
