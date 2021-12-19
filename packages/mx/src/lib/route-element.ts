import { define } from './utils';
import { BaseElement } from './base-element';
import { routeStorage } from './storage';
import { m } from 'million';

define('mx-route')(
  class RouteElement extends BaseElement {
    private options: { tag: string; route?: string | RegExp } | null = null;
    private _matcher: RegExp | undefined = undefined;
    private _matched: RegExpMatchArray | null = null;
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
      if (this._matcher) {
        return;
      }
      if (typeof this.options!.route === 'string') {
        const groupsSplit = (this.options!.route as string).split(/\(.+\)/g);
        let captureGroupPosition = 1;
        for (let i = 0; i < groupsSplit.length - 1; i++) {
          const isCaptureGroup =
            groupsSplit[i].charAt(0) === '(' &&
            groupsSplit[i].charAt(groupsSplit[i].length - 1) === ')';
          if (
            i > 0 &&
            isCaptureGroup &&
            groupsSplit[i - 1].charAt(groupsSplit[i - 1].length - 1) === '>'
          ) {
            const _namedGroup = this._matchNamedGroup.exec(groupsSplit[i - 1]);
            if (_namedGroup) {
              this._namedGroups[_namedGroup[1]] = captureGroupPosition;
              groupsSplit[i - 1] = '';
            }
          }
          if (isCaptureGroup) {
            captureGroupPosition++;
          }
        }
        const _route = groupsSplit.join('');
        this._matcher = new RegExp(_route);
        return;
      }
      this._matcher = this.options!.route;
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
      this.forceRender();
    };

    protected async connect(): Promise<void> {
      await super.connect();
      this.parseMatch();
      window.addEventListener('mx-navigation', this.updateAndRender);
    }

    protected async disconnect(): Promise<void> {
      await super.disconnect();
      window.removeEventListener('mx-navigation', this.updateAndRender);
    }

    render() {
      return m('slot', this._matched ? undefined : { name: 'fallback' });
    }
  }
);
