import { storage } from './storage';
import { CustomElement } from './custom-element';
import { MX_NAVIGATION_EVENT } from './navigation';

const memory = storage('memory');

export abstract class RouteElement extends CustomElement {
  public active?: any;
  public tag: string = '';
  public route: string | RegExp = '';
  private _matcher: RegExp | undefined = undefined;
  protected _matched: RegExpMatchArray | null = null;
  private _namedGroups: Record<string, number> = {};
  private _url: URL | null = null;

  private updateUrl() {
    this._url = new URL(window.location.href);
  }

  private updateStorage(key: string, data: any = {}) {
    const _data = memory.getItem('route') || {};
    memory.setItem('route', {
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
      let _route = this.route as string;
      let _search = _route;
      let _named = '';
      let i = 0;
      let j = 0;
      let k = 0;
      let g = 0;

      while (i > -1) {
        g++;
        i = _search.indexOf('(');
        k = _search.indexOf(')');
        if (i === -1 || k < i) break;
        j = i - 1;
        _named = '';
        if (_search.charAt(i - 1) === '>') {
          while (j--) {
            let _char = _search.charAt(j);
            if (_char === '<') {
              break;
            }
            _named = _char + _named;
          }
          if (_named) {
            this._namedGroups[_named] = g;
          }
        }
        _search = _search.substring(k + 1);
      }

      if (Object.keys(this._namedGroups).length) {
        _route = _route.replace(/<.*>/g, '');
      }
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
      this.createMountPoint();
      this.forceRender();
    } else {
      this.removeAttribute('active');
      this.destroyMountPoint();
    }
  };

  async connectedCallback() {
    await this.connected();
    if (this._matched) {
      this.setAttribute('active', '');
      this.createMountPoint();
    }
  }

  protected async connected(): Promise<void> {
    await super.connected();
    this.parseMatch();
    window.addEventListener(MX_NAVIGATION_EVENT, this.updateAndRender);
  }

  protected async disconnected(): Promise<void> {
    await super.disconnected();
    window.removeEventListener(MX_NAVIGATION_EVENT, this.updateAndRender);
  }
}
