import { CustomElement, MXElement } from "@interstice/mx";
import "./dark-mode-toggle";

@MXElement({ tag: "navigation-tabs" })
export class NavigationTabs extends CustomElement {
  styles() {
    return /* css */ `
      nav {
        box-sizing: border-box;
        display: flex;
        width: 100%;
        border-bottom: 2px solid gray;
      }
      .nav-group {
        display: flex;
        flex: 1;
      }
      mx-link {
        box-sizing: border-box;
      }
      mx-link::part(anchor) {
        box-sizing: border-box;
        display: flex;
        align-items: center;
        justify-content: center;
        text-decoration: none;
        height: 36px;
        padding-inline: 1rem;
      }
      mx-link[active]::part(anchor) {
        background: gray;
      }
      dark-mode-toggle {
        margin-right: 0.75rem;
      }
    `;
  }

  render() {
    return (
      <nav>
        <div class="nav-group">
          <mx-link href="/" inherit="" exact="">
            Home
          </mx-link>
          <mx-link href="/counter">Counter</mx-link>
          <mx-link href="/messages">Messages</mx-link>
        </div>

        <dark-mode-toggle></dark-mode-toggle>
      </nav>
    );
  }
}
