import { CustomElement, MXElement, On, State, Storage } from "@interstice/mx";

@MXElement({ tag: "dark-mode-toggle" })
export class DarkModeToggle extends CustomElement {
  @Storage("darkMode")
  @State()
  enabled: boolean | undefined = undefined;

  protected async connect(): Promise<void> {
    await super.connect();
    if (this.enabled === undefined) {
      this.enabled = window.matchMedia("(prefers-color-scheme: dark)").matches;
    }
  }

  @On("click")
  toggle = () => {
    this.enabled = !this.enabled;
  };

  protected styles() {
    return /* css */ `
      button {
        background-color: transparent;
        cursor: pointer;
        font-size: 20px;
        appearance: none;
        border: none;
        height: 34px;
        width: 34px;
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 6px;
        will-change: background-color;
        transition: background-color 0.2s ease-out;
      }
      button:hover {
        background-color: lavender;
      }
    `;
  }

  protected render() {
    return <button type="button">{this.enabled ? "🌙" : "☀️️️"}</button>;
  }
}
