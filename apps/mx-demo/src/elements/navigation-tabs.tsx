import { CustomElement, MXElement } from "@interstice/mx";

@MXElement({ tag: "navigation-tabs" })
export class NavigationTabs extends CustomElement {
  styles() {
    return /* css */ `
      nav {
        display: flex;
        width: 100%;
        border-bottom: 2px solid gray;
      }
      mx-link::part(anchor) {
        padding: 0.75rem 1rem;
        text-decoration: none;
      }
      mx-link[active]::part(anchor) {
        background: gray;
      }
    `;
  }

  render() {
    return (
      <nav>
        <mx-link href="/" inherit="">
          Home
        </mx-link>
        <mx-link href="/counter">Counter</mx-link>
        <mx-link href="/messages">Messages</mx-link>
      </nav>
    );
  }
}
