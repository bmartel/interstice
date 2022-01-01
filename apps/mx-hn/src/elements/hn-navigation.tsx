import { CustomElement, MXElement } from '@interstice/mx';
import { HNNodeListType } from '../data/hn-node';

@MXElement({ tag: 'hn-navigation' })
export class HNNavigation extends CustomElement {
  async elements() {
    await import('./theme-toggle');
  }

  listTypes = Object.values(HNNodeListType);

  styles() {
    return /*css*/ `
      ${super.styles()}
      :host {
        display: flex;
        width: 100%;
        max-width: 800px;
        margin: 0 auto;
      }
      .nav-section {
        flex: 1;
        display: inline-flex;
        align-items: center;
        gap: 0.75rem;
        justify-content: space-between;
        border-bottom: 2px solid var(--border-color);
      }
      nav {
        display: flex;
        width: 100%;
      }
      mx-link::part(anchor), mx-link::part(anchor-current-page) {
        color: var(--color);
        background-color: transparent;
        box-sizing: border-box;
        display: flex;
        align-items: center;
        justify-content: center;
        text-decoration: none;
        height: 36px;
        padding-inline: 1rem;
        will-change: background-color;
        transition: background-color 0.2s ease-out;
      }
      mx-link:hover::part(anchor) {
        background-color: var(--hover-button-background-color);
      }
      mx-link::part(anchor-current-page)  {
        background-color: var(--button-background-color);
      }

    `;
  }

  render() {
    return (
      <div class="nav-section">
        <nav>
          {this.listTypes.map((type: string) => (
            <mx-link root="" href={`/${type}`}>
              {type}
            </mx-link>
          ))}
        </nav>
        <theme-toggle></theme-toggle>
      </div>
    );
  }
}
