import { CustomElement, MXElement, On, State, Storage } from "@interstice/mx";

@MXElement({ tag: "theme-provider" })
export class ThemeProvider extends CustomElement {
  @Storage({ key: "darkMode" })
  @State()
  darkMode: boolean | undefined = undefined;

  @On("updateDarkMode")
  updateDarkMode(e: CustomEvent<boolean>) {
    console.log(e);
    this.darkMode = e.detail;
  }

  async connect() {
    if (this.darkMode !== undefined) {
      this.darkMode = window.matchMedia("(prefers-color-scheme: dark)").matches;
    }
  }

  darkModeStyles() {
    return `
      --background-color: black;
    `;
  }

  lightModeStyles() {
    return `
      --background-color: white;
    `;
  }

  styles() {
    return `
      :host {
        box-sizing: border-box;
        display: block;
        ${this.darkMode ? this.darkModeStyles() : this.lightModeStyles()}
      }
      div {
        box-sizing: border-box;
        min-height: 100vh;
        background-color: var(--background-color);
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
