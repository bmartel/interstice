export type PartialWithId<
  T = Record<string, any>,
  IdType = { id: string }
> = Partial<T> & IdType;
