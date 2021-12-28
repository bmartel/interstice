import { MXElement } from "@interstice/mx";
import { PageElement } from "../elements/page-element";

@MXElement({ tag: "page-index", route: "^/$" })
export class PageIndex extends PageElement {
  async elements() {
    await import("../elements/theme-toggle");
  }

  styles() {
    // language=css
    return `
      ${super.styles()}
      .emoji {
        font-size: 36px;
      }
      .toggle-section {
        display: inline-flex;
        align-items: center;
        gap: 0.75rem;
      }
      main {
        align-items: center;
      }
    `;
  }

  render() {
    return (
      <main>
        <h1>
          MX App <span class="emoji">🎉</span>
        </h1>

        <div class="toggle-section">
          <p>Toggle the theme</p>
          <theme-toggle></theme-toggle>
        </div>
      </main>
    );
  }
}
