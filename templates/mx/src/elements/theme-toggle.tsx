import {
  CustomElement,
  Dispatch,
  MXElement,
  State,
  Storage,
} from "@interstice/mx";

@MXElement({ tag: "theme-toggle" })
export class ThemeToggle extends CustomElement {
  @Storage({ key: "darkMode" })
  @State()
  enabled: boolean | undefined = undefined;

  @Dispatch("updateDarkMode")
  toggle = () => {
    this.enabled = !this.enabled;

    return this.enabled;
  };

  styles() {
    // language=css
    return `
      ${super.styles()}
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

  render() {
    return (
      <button type="button" onClick={this.toggle}>
        {this.enabled ? "🌙" : "☀️️️"}
      </button>
    );
  }
}
