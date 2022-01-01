import { CustomElement, MXElement, On, Storage } from '@interstice/mx';

@MXElement({ tag: 'theme-provider' })
export class ThemeProvider extends CustomElement {
  @Storage({ key: 'darkMode' })
  darkMode: boolean | undefined = undefined;

  @On('updateDarkMode')
  updateDarkMode(e: CustomEvent<boolean>) {
    this.darkMode = e.detail;
    super.updateStyles();
  }

  async connected() {
    if (typeof this.darkMode !== 'boolean') {
      this.darkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;
    }
  }

  darkModeStyles() {
    // language=css
    return `
      --hsl-background-color: var(--base-hue), 0%, 4%;
      --hsl-color: var(--base-hue), 0%, 100%;
      --background-color: hsl(var(--hsl-background-color));
      --color: hsl(var(--hsl-color));
      --outline-color: hsl(var(--base-hue), 85.5%, 54.1%);
      --accent-color: hsl(var(--base-hue), 85.5%, 74.1%);
      --input-background-color: hsl(var(--base-hue), 16%, 8%);
      --border-color: hsl(var(--base-hue),16%,10%);
      --button-background-color: hsl(var(--base-hue), 16%, 16%);
      --hover-button-background-color: hsl(var(--base-hue), 16%, 22%);
      --author-color: hsl(var(--base-hue), 16%, 62%);
    `;
  }

  lightModeStyles() {
    // language=css
    return `
      --hsl-background-color: var(--base-hue), 0%, 100%;
      --hsl-color: var(--base-hue), 0%, 4%;
      --background-color: hsl(var(--hsl-background-color));
      --color: hsl(var(--hsl-color));
      --outline-color: hsl(var(--base-hue), 85.5%, 54.1%);
      --accent-color: hsl(var(--base-hue), 85.5%, 74.1%);
      --input-background-color: hsl(var(--base-hue), 16%, 94%);
      --border-color: hsl(var(--base-hue),16%,86%);
      --button-background-color: hsl(var(--base-hue), 16%, 86%);
      --hover-button-background-color: hsl(var(--base-hue), 16%, 92%);
      --author-color: hsl(var(--base-hue), 16%, 49%);
    `;
  }

  styles() {
    // language=css
    return `
      ${super.styles()}
      :host {
        --base-hue: 222;
        --outline-width: 2px;
        --outline-offset: -2px;
        ${this.darkMode ? this.darkModeStyles() : this.lightModeStyles()}
        display: flex;
        flex-direction: column;
        min-height: 100vh;
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
