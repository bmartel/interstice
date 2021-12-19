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
      --border-color: hsl(242,1%,10%);
      --button-background-color: hsl(242,1%,10%);
      --hover-button-background-color: hsl(242,1%,18%);
    `;
  }

  lightModeStyles() {
    return `
      --background-color: white;
      --color: black;
      --border-color: hsl(242,16%,82%);
      --button-background-color: hsl(242,16%,82%);
      --hover-button-background-color: hsl(242,16%,90%);
    `;
  }

  styles() {
    return `
      :host {
        box-sizing: border-box;
        display: flex;
        flex-direction: column;
        min-height: 100vh;
        ${this.darkMode ? this.darkModeStyles() : this.lightModeStyles()}
      }
      div {
        box-sizing: border-box;
        flex: 1;
        display: flex;
        flex-direction: column;
        box-sizing: border-box;
        background-color: var(--background-color);
        color: var(--color);
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
