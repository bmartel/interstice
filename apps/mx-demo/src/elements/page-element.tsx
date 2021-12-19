import { CustomElement } from "@interstice/mx";

export abstract class PageElement extends CustomElement {
  styles() {
    return `
      ${super.styles()}
      :host {
        display: flex;
        flex-direction: column;
        flex: 1;
      }
      main {
        display: flex;
        flex-direction: column;
        flex: 1;
        height: 100%;
      }
    `
  }
}

