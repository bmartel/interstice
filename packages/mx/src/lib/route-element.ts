import { routeStorage } from './storage';
import { CustomElement } from './custom-element';

window.addEventListener('popstate', () => {
  dispatchEvent(
    new CustomEvent('mx-navigation', {
      bubbles: true,
      composed: true,
      cancelable: true,
    })
  );
});

export abstract class RouteElement extends CustomElement {
  public active?: any;
  public tag: string = '';
  public route: string | RegExp = '';
  private _matcher: RegExp | undefined = undefined;
  protected _matched: RegExpMatchArray | null = null;
  private _namedGroups: Record<string, number> = {};
  private _matchNamedGroup = /<(.+)>/g;
  private _url: URL | null = null;

  private updateUrl() {
    this._url = new URL(window.location.href);
  }

  private updateStorage(key: string, data: any = {}) {
    const _data = routeStorage() || {};
    routeStorage({
      ...data,
      [key]: {
        ...(_data && _data[key]),
        ...data,
      },
    });
  }

  private createMatcher() {
    if (this._matcher || !this.tag || !this.route) {
      return;
    }

    if (typeof this.route === 'string') {
      let _route = this.route as string
      // const groupsSplit = /(\((?!\().*\))/g.exec(_route as string);
      const groupsSplit = _route.split(/[\(\)]/g)
      console.log(groupsSplit)
      // let captureGroupPosition = 1;
      // for (let i = 0; i < this.route.length - 1; i++) {
      //   const isCaptureGroup =
      //     groupsSplit[i].charAt(0) === '(' &&
      //     groupsSplit[i].charAt(groupsSplit[i].length - 1) === ')';
      //   if (
      //     i > 0 &&
      //     isCaptureGroup &&
      //     groupsSplit[i - 1].charAt(groupsSplit[i - 1].length - 1) === '>'
      //   ) {
      //     const _namedGroup = this._matchNamedGroup.exec(groupsSplit[i - 1]);
      //     if (_namedGroup) {
      //       this._namedGroups[_namedGroup[1]] = captureGroupPosition;
      //       groupsSplit[i - 1] = '';
      //     }
      //   }
      //   if (isCaptureGroup) {
      //     captureGroupPosition++;
      //   }
      // }
      // console.log(_route)
      this._matcher = new RegExp(_route);
      return;
    }
    this._matcher = this.route;
  }

  private parseMatch() {
    this.updateUrl();
    this.createMatcher();
    if (!this._url) return;
    if (this._matcher) {
      this._matched = this._matcher.exec(this._url.pathname);

      if (this._matched) {
        this.updateStorage(this._url.pathname, {
          namedGroups: this._namedGroups,
          params: this._matched || {},
          query: this._url.searchParams,
          hash: new URLSearchParams(this._url.hash.replace('#', '')),
        });
      }
    }
  }

  updateAndRender = () => {
    this.parseMatch();
    if (this._matched) {
      this.setAttribute('active', '');
      this.createMountPoint();
      this.forceRender();
    } else {
      this.removeAttribute('active');
      this.destroyMountPoint();
    }
  };

  async connectedCallback() {
    await this.connect();
    if (this._matched) {
      this.setAttribute('active', '');
      this.createMountPoint();
    }
  }

  protected async connect(): Promise<void> {
    await super.connect();
    this.parseMatch();
    window.addEventListener('mx-navigation', this.updateAndRender);
  }

  protected async disconnect(): Promise<void> {
    await super.disconnect();
    window.removeEventListener('mx-navigation', this.updateAndRender);
  }
}
