import { MXElement, Param } from '@interstice/mx';
import { HNNodeListType } from '../data/hn-node';
import { PageElement } from '../elements/page-element';

@MXElement({ tag: 'page-index', route: '^/<filter>(\\w+)?$' })
export class PageIndex extends PageElement {
  async elements() {
    await import('../elements/hn-stories');
  }

  @Param({ key: 'filter' })
  nodeId: HNNodeListType | string = HNNodeListType.New;

  styles() {
    return /* css */ `
      ${super.styles()}
      hn-stories {
        width: 100%;
        max-width: 800px;
      }
    `;
  }

  render() {
    return (
      <main>
        <hn-stories key={this.nodeId}></hn-stories>
      </main>
    );
  }
}
