export const define =
  (name: string) => (El: any, opt?: ElementDefinitionOptions) => {
    window.customElements.define(name, El, opt);
    return El;
  };

export function addQueryParam(key: string, value: any) {
  const url = new URL(window.location.href);
  url.searchParams.set(key, encodeURIComponent(value));
  window.history.pushState({}, '', url.toString());
}

export function getQueryParam(key: string): any {
  const url = new URL(window.location.href);
  const param = url.searchParams.get(key);
  if (!param) return param;
  return decodeURIComponent(param);
}

export function defaultParseProperty(newValue: any): any {
  return typeof newValue === 'string'
    ? ['{', '['].indexOf(newValue && newValue.charAt(0)) > -1 &&
      ['}', ']'].indexOf(
        newValue && newValue.charAt(+(newValue && newValue.length) - 1)
      ) > -1
      ? JSON.parse(newValue)
      : newValue === 'true'
      ? true
      : newValue === 'false'
      ? false
      : newValue === 'undefined'
      ? undefined
      : newValue === 'null'
      ? null
      : /^\d+(\.\d+)?$/.test(newValue)
      ? Number(newValue)
      : newValue
    : newValue;
}
