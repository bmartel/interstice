import { CustomElement, MXElement, On, State } from "@interstice/mx";
import "./counter-button";

@MXElement({ tag: "page-counter", route: "^/counter$" })
export class PageCounter extends CustomElement {
  @State()
  totalCount: number = 0;

  @On("updateCount")
  updateCount = () => {
    this.totalCount++;
  };

  styles() {
    return /* css */ `
      main {
        background: hotpink;
      }
    `;
  }

  render() {
    return (
      <main>
        <h1>Simple Counter</h1>

        <counter-button text=" +"></counter-button>
        <counter-button></counter-button>
        <counter-button defaultCount={this.totalCount as any}></counter-button>
      </main>
    );
  }
}
