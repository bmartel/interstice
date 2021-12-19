import {
  CustomElement,
  Dispatch,
  MXElement,
  State,
  Storage,
} from "@interstice/mx";

@MXElement({ tag: "dark-mode-toggle" })
export class DarkModeToggle extends CustomElement {
  @Storage({ key: "darkMode" })
  @State()
  enabled: boolean | undefined = undefined;

  @Dispatch("updateDarkMode")
  toggle = () => {
    this.enabled = !this.enabled;

    return this.enabled;
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
        background-color: var(--hover-button-background-color);
      }
    `;
  }

  protected render() {
    return (
      <button type="button" onclick={this.toggle}>
        {this.enabled ? "🌙" : "☀️️️"}
      </button>
    );
  }
}
