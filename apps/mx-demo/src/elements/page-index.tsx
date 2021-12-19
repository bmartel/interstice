import {
  CustomElement,
  MXElement,
  QueryParam,
  State,
  Storage,
} from "@interstice/mx";
import "./counter-button";
import "./message-list";

@MXElement({ tag: "page-index", route: "^/$" })
export class PageIndex extends CustomElement {
  @QueryParam({ key: "clicked" })
  @Storage({ key: "clicked" })
  @State()
  clicked: boolean | undefined = undefined;

  updateQuery = () => {
    this.clicked = !this.clicked;
  };

  render() {
    console.log("rendering index");
    return (
      <main>
        <h1>Param and Storage State</h1>

        {this.clicked && (
          <h3>
            Check the address bar, it how contains <pre>`?clicked=true`</pre>
          </h3>
        )}
        <button onclick={this.updateQuery}>
          {this.clicked
            ? "You clicked the button! Try clicking again."
            : "Click here"}
        </button>
      </main>
    );
  }
}
