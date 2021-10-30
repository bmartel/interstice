import type { Atom, WritableAtom } from 'jotai'

export type Getter = {
  <Value>(atom: Atom<Value | Promise<Value>>): Value
  <Value>(atom: Atom<Promise<Value>>): Value
  <Value>(atom: Atom<Value>): Value
}
export type WriteGetter = Getter & {
  <Value>(atom: Atom<Value | Promise<Value>>, unstable_promise: true): Value | Promise<Value>
  <Value>(atom: Atom<Promise<Value>>, unstable_promise: true): Value | Promise<Value>
  <Value>(atom: Atom<Value>, unstable_promise: true): Value | Promise<Value>
}
export type Setter = {
  <Value>(atom: WritableAtom<Value, undefined>): void | Promise<void>
  <Value, Update>(atom: WritableAtom<Value, Update>, update: Update): void | Promise<void>
}
export type Read<Value, Effect = any> = (
  get: Getter,
  effect?: WritableAtom<Effect, Effect>
) => Value | Promise<Value>
export type Write<Update> = (get: WriteGetter, set: Setter, update: Update) => void | Promise<void>

export type PartialWithId<T = Record<string, any>, IdType = { id: string }> = Partial<T> & IdType

export type ShouldRemove<Param> = (createdAt: number, param: PartialWithId<Param>) => boolean
export type AtomFamily<Param, AtomType> = {
  (param: PartialWithId<Param>): AtomType
  remove(param: PartialWithId<Param>): void
  setShouldRemove(shouldRemove: ShouldRemove<Param> | null): void
}

export type PauseAtomEntity = (atoms: Record<string, Atom<any>>) => (get: Getter) => boolean

export type AtomEffectRef = { [k: string]: string }

export type AtomEffect<Value = any> = AtomFamily<
  Value,
  WritableAtom<PartialWithId<{ [k: string]: Value }>, PartialWithId<{ [k: string]: Value }>>
> & {
  _name: string
  idKey: string
  targetKey: string
  atom: WritableAtom<
    Record<string, PartialWithId<{ [k: string]: Value }>>,
    Record<string, PartialWithId<{ [k: string]: Value }>>
  >
}

export type AtomEntity<Value = Record<string, any>> = AtomFamily<
  Value,
  WritableAtom<PartialWithId<Value>, Partial<Value>>
> & {
  _name: string
  idKey: string
  targetKey: string
  atom: WritableAtom<Record<string, PartialWithId<Value>>, Record<string, PartialWithId<Value>>>
}
