import { MXElement, QueryParam, State, Storage } from "@interstice/mx";
import { PageElement } from "./page-element";

@MXElement({ tag: "page-index", route: "^/$" })
export class PageIndex extends PageElement {
  async elements() {
    await import("./message-list");
  }

  @QueryParam({ key: "clicked" })
  @Storage({ key: "clicked" })
  @State()
  clicked: boolean | undefined = undefined;

  updateQuery = () => {
    this.clicked = !this.clicked;
  };

  styles() {
    return `
      ${super.styles()}
      button {
        background-color: var(--button-background-color);
        color: var(--color);
        cursor: pointer;
        font-size: 20px;
        appearance: none;
        border: none;
        padding: 0.75rem 1rem;
        border-radius: 6px;
        width: auto;
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 6px;
        will-change: background-color;
        transition: background-color 0.2s ease-out;
        height: 52px;
      }
      button:hover {
        background-color: var(--hover-button-background-color);
      }
      .emoji {
        font-size: 36px;
      }
      .actions {
        display: flex;
        justify-content: center;
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
    return (
      <main>
        <h1>Param and Storage State</h1>

        {this.clicked && (
          <h3>
            Check the address bar or localStorage, it now contains{" "}
            <pre>`?clicked=true`</pre> <span class="emoji">🎉</span>
          </h3>
        )}
        <div class="actions">
          <button onclick={this.updateQuery}>
            {this.clicked ? (
              "You clicked the button! Try clicking again."
            ) : (
              <div class="button-content">
                <span>Click here</span> <span class="emoji">👈</span>
              </div>
            )}
          </button>
        </div>
      </main>
    );
  }
}
