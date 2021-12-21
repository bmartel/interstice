export type PropertyDecoratorArgs = {
  key?: string;
  scope?: string;
  observed?: boolean;
  session?: boolean;
};
export type PropertyBindingArgs = {
  key: string;
  lookup: string | number;
  scope?: string;
  session?: boolean;
};
