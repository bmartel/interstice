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

  render() {
    console.log("rendering counter");
    return (
      <main>
        <h1>Simple Counter</h1>

        <counter-button someText=" +"></counter-button>
        <counter-button></counter-button>
        <counter-button totalCount={this.totalCount as any}></counter-button>
      </main>
    );
  }
}
