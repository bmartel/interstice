import { CustomElement, MXElement, On, Storage } from "@interstice/mx";

@MXElement({ tag: "theme-provider" })
export class ThemeProvider extends CustomElement {
  @Storage({ key: "darkMode" })
  darkMode: boolean | undefined = undefined;

  @On("updateDarkMode")
  updateDarkMode(e: CustomEvent<boolean>) {
    this.darkMode = e.detail;
    super.updateStyles();
  }

  async connected() {
    if (typeof this.darkMode !== "boolean") {
      this.darkMode = window.matchMedia("(prefers-color-scheme: dark)").matches;
    }
  }

  darkModeStyles() {
    return `
      --hsl-background-color: var(--base-hue), 0%, 4%;
      --hsl-color: var(--base-hue), 0%, 100%;
      --background-color: hsl(var(--hsl-background-color));
      --color: hsl(var(--hsl-color));
      --outline-width: 2px;
      --outline-offset: -2px;
      --outline-color: hsl(var(--base-hue), 85.5%, 54.1%);
      --accent-color: hsl(var(--base-hue), 85.5%, 74.1%);
      --input-background-color: hsl(var(--base-hue),16%,8%);
      --border-color: hsl(var(--base-hue),16%,10%);
      --button-background-color: hsl(var(--base-hue),16%,16%);
      --hover-button-background-color: hsl(var(--base-hue),16%,22%);
      --message-button-background-color: var(--outline-color);
      --hover-message-button-background-color: var(--accent-color);
      --emoji-bullet: "◽";
    `;
  }

  lightModeStyles() {
    return `
      --hsl-background-color: var(--base-hue), 0%, 100%;
      --hsl-color: var(--base-hue), 0%, 4%;
      --background-color: hsl(var(--hsl-background-color));
      --color: hsl(var(--hsl-color));
      --outline-width: 0;
      --outline-offset: -3px;
      --outline-color: hsl(var(--base-hue), 85.5%, 54.1%);
      --accent-color: hsl(var(--base-hue), 85.5%, 74.1%);
      --input-background-color: hsl(var(--base-hue),16%,94%);
      --border-color: hsl(var(--base-hue),16%,86%);
      --button-background-color: hsl(var(--base-hue),16%,86%);
      --hover-button-background-color: hsl(var(--base-hue),16%,92%);
      --message-button-background-color: var(--outline-color);
      --hover-message-button-background-color: var(--accent-color);
      --emoji-bullet: "◾";
    `;
  }

  styles() {
    return `
      ${super.styles()}
      :host {
        --base-hue: 222;
        display: flex;
        flex-direction: column;
        min-height: 100vh;
        ${this.darkMode ? this.darkModeStyles() : this.lightModeStyles()}
        background-color: var(--background-color);
        color: var(--color);
      }
      div {
        flex: 1;
        display: flex;
        flex-direction: column;
        box-sizing: border-box;
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
