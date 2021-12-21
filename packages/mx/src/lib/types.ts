export type StorageType = 'session' | 'local' | 'cookie' | 'memory' | 'route';
export type PropertyDecoratorArgs = {
  key?: string;
  scope?: string;
  storageType?: StorageType;
  expiry?: string | number;
  observed?: boolean;
};
export type PropertyBindingArgs = {
  key: string;
  scope?: string;
  storageType?: StorageType;
  expiry?: string | number;
  lookup: string | number;
};

export type PropertyDecorator = (
  target: any,
  propertyKey: string | symbol
) => void;
