import { CustomElement, MXElement, On, State, Storage } from "@interstice/mx";

@MXElement({ tag: "theme-provider" })
export class ThemeProvider extends CustomElement {
  @Storage({ key: "darkMode" })
  @State()
  darkMode: boolean | undefined = undefined;

  @On("updateDarkMode")
  updateDarkMode(e: CustomEvent<boolean>) {
    this.darkMode = e.detail;
    this.updateStyles()
  }

  async connect() {
    if (this.darkMode === undefined) {
      this.darkMode = window.matchMedia("(prefers-color-scheme: dark)").matches;
    }
  }

  darkModeStyles() {
    return `
      --background-color: black;
      --color: white;
      --outline-width: 2px;
      --outline-offset: -2px;
      --outline-color: hsl(210.9, 85.5%, 54.1%);
      --accent-color: hsl(210.9, 85.5%, 74.1%);
      --input-background-color: hsl(242,1%,5%);
      --border-color: hsl(242,1%,10%);
      --button-background-color: hsl(242,1%,10%);
      --hover-button-background-color: hsl(242,1%,18%);
    `;
  }

  lightModeStyles() {
    return `
      --background-color: white;
      --color: black;
      --outline-width: 0;
      --outline-offset: -3px;
      --outline-color: hsl(210.9, 85.5%, 54.1%);
      --accent-color: hsl(210.9, 85.5%, 74.1%);
      --input-background-color: hsl(242,16%,87%);
      --border-color: hsl(242,16%,82%);
      --button-background-color: hsl(242,16%,82%);
      --hover-button-background-color: hsl(242,16%,90%);
    `;
  }

  styles() {
    return `
      ${super.styles()}
      :host {
        display: flex;
        flex-direction: column;
        min-height: 100vh;
        ${this.darkMode ? this.darkModeStyles() : this.lightModeStyles()}
      }
      div {
        flex: 1;
        display: flex;
        flex-direction: column;
        box-sizing: border-box;
        background-color: var(--background-color);
        color: var(--color);
      }
      ::slotted([active]) {
        display: flex;
        flex-direction: column;
        flex: 1;
      }
    `;
  }

  protected render() {
    return (
      <div>
        <slot></slot>
      </div>
    );
  }
}
