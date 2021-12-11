import type { Atom, WritableAtom } from 'jotai';

export type Maybe<T> = T | null | undefined;

export interface GraphQLError {
  message: string;
  nodes?: Maybe<ReadonlyArray<any> | any>;
  source?: Maybe<any>;
  positions?: Maybe<ReadonlyArray<number>>;
  path?: Maybe<ReadonlyArray<string | number>>;
  originalError?: Maybe<Error>;
  extensions?: Maybe<{ [key: string]: any }>;
}

export declare class CombinedError extends Error {
  name: string;
  message: string;
  graphQLErrors?: GraphQLError[];
  networkError?: Error;
  response?: any;
  constructor({
    networkError,
    graphQLErrors,
    response,
  }: {
    networkError?: Error;
    graphQLErrors?: Array<string | Partial<GraphQLError> | Error>;
    response?: any;
  });
  toString(): string;
}

export type Getter = {
  <Value>(atom: Atom<Value | Promise<Value>>): Value;
  <Value>(atom: Atom<Promise<Value>>): Value;
  <Value>(atom: Atom<Value>): Value;
};
export type WriteGetter = Getter & {
  <Value>(atom: Atom<Value | Promise<Value>>, unstable_promise: true):
    | Value
    | Promise<Value>;
  <Value>(atom: Atom<Promise<Value>>, unstable_promise: true):
    | Value
    | Promise<Value>;
  <Value>(atom: Atom<Value>, unstable_promise: true): Value | Promise<Value>;
};
export type Setter = {
  <Value>(atom: WritableAtom<Value, undefined>): void | Promise<void>;
  <Value, Update>(
    atom: WritableAtom<Value, Update>,
    update: Update
  ): void | Promise<void>;
};
export type Read<Value, Effect = any> = (
  get: Getter,
  effect?: WritableAtom<Effect, Effect>
) => Value | Promise<Value>;
export type Write<Update> = (
  get: WriteGetter,
  set: Setter,
  update: Update
) => void | Promise<void>;

export type PartialWithId<
  T = Record<string, any>,
  IdType = { id: string }
> = Partial<T> & IdType;

export type ShouldRemove<Param> = (
  createdAt: number,
  param: PartialWithId<Param>
) => boolean;
export type AtomFamily<Param, AtomType> = {
  (param: PartialWithId<Param>): AtomType;
  remove(param: PartialWithId<Param>): void;
  setShouldRemove(shouldRemove: ShouldRemove<Param> | null): void;
};

export type SetAtom<
  Update,
  Result extends void | Promise<void>
> = undefined extends Update
  ? (update?: Update) => Result
  : (update: Update) => Result;

export type PauseAtomEntity = (
  atoms: Record<string, Atom<any>>
) => (get: Getter) => boolean;

export type AtomEffectRef = { [k: string]: string };

export type AtomEffectUpdate<Value> = {
  value: () => Value;
  ref: () => AtomEffectRef;
  clearRef: (ref: AtomEffectRef) => void;
  set: (value: Value) => void;
  cache: (ref: AtomEffectRef, value?: any) => any;
  memo: (ref: AtomEffectRef, value?: any) => any;
  atom: WritableAtom<
    PartialWithId<{ [k: string]: Value }>,
    PartialWithId<{ [k: string]: Value }>
  >;
  id: string;
  idKey: string;
  targetKey: string;
  initialValue?: any;
  shouldSkip: () => boolean;
  update: Value;
};

export type AtomEffect<Value = any> = AtomFamily<
  Value,
  WritableAtom<
    PartialWithId<{ [k: string]: Value }>,
    PartialWithId<{ [k: string]: Value }>
  >
> & {
  _name: string;
  idKey: string;
  targetKey: string;
  atom: WritableAtom<
    Record<string, PartialWithId<{ [k: string]: Value }>>,
    Record<string, PartialWithId<{ [k: string]: Value }>>
  >;
};

export type AtomEntity<Value = Record<string, any>> = AtomFamily<
  Value,
  WritableAtom<PartialWithId<Value>, Partial<Value>>
> & {
  _name: string;
  idKey: string;
  targetKey: string;
  atom: WritableAtom<
    Record<string, PartialWithId<Value>>,
    Record<string, PartialWithId<Value>>
  >;
};

export type ResolveType<T> = T extends Promise<infer V> ? V : T;

export type MutationAtoms<Value> = {
  readAtom: Atom<Value | null>;
  writeAtom: WritableAtom<Value, Value>;
  errorAtom: WritableAtom<CombinedError | null, CombinedError | null>;
  loadingAtom: WritableAtom<boolean, boolean>;
};

export type QueryAtoms<Value> = {
  readAtom: Atom<Value | null>;
  writeAtom: WritableAtom<Value, Value>;
  errorAtom: WritableAtom<CombinedError | null, CombinedError | null>;
  loadingAtom: WritableAtom<boolean, boolean>;
  hasFetchedAtom: WritableAtom<number, number>;
};

export type SubscriptionAtoms<Value> = {
  readAtom: Atom<Value | null>;
  writeAtom: WritableAtom<Value, Value>;
  errorAtom: WritableAtom<CombinedError | null, CombinedError | null>;
  unsubscribeAtom: WritableAtom<any | null, any | null>;
};

export type MutationWrite<InputValue, Value> = Write<{
  input: Partial<InputValue>;
  entity?: PartialWithId<Value>;
  atoms: MutationAtoms<Value>;
}>;

export type QueryWrite<InputValue = any, Value = InputValue> = Write<{
  input: InputValue;
  previous?: Value;
  atoms: QueryAtoms<Value>;
}>;

export type SubscriptionWrite<InputValue = any, Value = InputValue> = Write<{
  input: InputValue;
  atoms: SubscriptionAtoms<Value>;
}>;
