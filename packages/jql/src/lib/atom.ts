import { Atom, atom, Getter, WritableAtom } from 'jotai';
import { atomFamily } from 'jotai/utils';
import { PartialWithId } from './types';

export type ShouldRemove<Param> = (
  createdAt: number,
  param: PartialWithId<Param>
) => boolean;
export type AtomFamily<Param, AtomType> = {
  (param: PartialWithId<Param>): AtomType;
  remove(param: PartialWithId<Param>): void;
  setShouldRemove(shouldRemove: ShouldRemove<Param> | null): void;
};

export type PauseAtomEntity = (
  atoms: Record<string, Atom<any>>
) => (get: Getter) => boolean;

export type AtomEntity<Value = Record<string, any>> = AtomFamily<
  Value,
  WritableAtom<PartialWithId<Value>, Partial<Value>>
> & {
  idKey: string;
  targetKey: string;
  atom: WritableAtom<
    Record<string, PartialWithId<Value>>,
    Record<string, PartialWithId<Value>>
  >;
};

const lookupTarget = new WeakMap<Record<string, any>, string>();

const mergeEntity = <E = any>(
  relatedEntity: E | string | number,
  get: any,
  set: any,
  lookupAtom: AtomEntity
): string => {
  if (typeof relatedEntity === 'string' || typeof relatedEntity === 'number') {
    return relatedEntity.toString() as string;
  }
  if ((relatedEntity as any)?.[lookupAtom.idKey]) {
    const idString = (relatedEntity as any)[
      lookupAtom.idKey as string
    ].toString();

    let mergeOriginal = {};
    if (
      lookupAtom.idKey !== lookupAtom.targetKey &&
      (relatedEntity as any)?.[lookupAtom.targetKey]
    ) {
      const original = get(
        lookupAtom({
          [lookupAtom.targetKey]: (relatedEntity as any)[
            lookupAtom.targetKey as string
          ].toString(),
        } as any)
      );
      if (typeof original === 'object' && original) {
        mergeOriginal = original;
        set(
          lookupAtom({
            [lookupAtom.targetKey as string]: (relatedEntity as any)[
              lookupAtom.targetKey as any
            ].toString(),
          } as any),
          null
        );
      }
    }
    set(lookupAtom({ [lookupAtom.idKey]: idString } as any), {
      ...mergeOriginal,
      ...relatedEntity,
      [lookupAtom.idKey]: idString,
    });
    return idString as any;
  }
  return '';
};

const lookupEntity = <Value = any>(
  entityRef: PartialWithId<Value> | string,
  get: any,
  lookupAtom: any,
  defaultId?: string
): Value | null | undefined => {
  return get(
    lookupAtom(
      typeof entityRef === 'object'
        ? entityRef
        : ({
            [lookupAtom.idKey]:
              entityRef?.[lookupAtom.idKey] || entityRef || defaultId,
          } as any)
    )
  );
};

export const atomEntity = <
  Value extends { [k: string]: any },
  IdType = { id: string }
>(
  idKey = 'id',
  targetKey = idKey,
  related?: {
    [k in keyof Omit<Value, keyof IdType>]?:
      | AtomEntity<Omit<Value, keyof IdType>[k]>
      | [AtomEntity<Omit<Value, keyof IdType>[k][0]>];
  },
  hydrate: Record<string, Value> = {}
): AtomEntity<Value> => {
  const writableAtom = atom(hydrate);
  const entityDef = atomFamily<Value, Value, Value>(
    (init) => {
      let { [idKey]: id, ...values } = init;
      id = id?.toString();
      return atom(
        (get) => {
          const lookupId = id || lookupTarget.get(init);
          const entity = (get(writableAtom) as any)[lookupId] || {
            [idKey]: lookupId,
            ...values,
          };
          if (related) {
            return Object.entries(related).reduce(
              (resolved, [key, lookup]) => ({
                ...resolved,
                [key]: Array.isArray(lookup)
                  ? entity?.[key]
                      ?.map((relatedId: any) => {
                        return lookupEntity(relatedId, get, lookup[0]);
                      })
                      .filter(Boolean)
                  : lookupEntity(entity?.[key], get, lookup, id),
              }),
              entity
            );
          }
          return entity;
        },
        (get, set, update) => {
          if (!update) return;
          const entityId = (id || update[idKey])?.toString();
          if (!entityId) return;

          const prev = get(writableAtom) as any;
          const targetUpdate = update[targetKey]
            ? { [update[targetKey]]: null }
            : {};
          const next = {
            ...prev,
            ...targetUpdate,
            [entityId]: {
              ...(prev[entityId] || prev[update[targetKey]]),
              ...update,
            },
          } as any;
          if (targetKey !== idKey && update[targetKey]) {
            lookupTarget.set(init, entityId);
            delete next[update[targetKey]];
          }
          if (related) {
            Object.entries(related).map(([key, lookup]) => {
              if (Array.isArray(lookup)) {
                const lookupAtom = lookup[0] as any;

                next[entityId][key] = next[entityId][key]
                  ?.map((relatedEntity: any) =>
                    mergeEntity(relatedEntity, get, set, lookupAtom)
                  )
                  .filter(Boolean);
              } else {
                if (key in update && typeof update[key] !== 'string') {
                  const lookupAtom = lookup as any;
                  next[entityId][key] =
                    mergeEntity(update[key], get, set, lookupAtom) || entityId;
                }
              }
            });
          }
          set(writableAtom as any, next);
        }
      );
    },
    (a, b) => a?.[idKey] === b?.[idKey]
  );

  (entityDef as any).idKey = idKey;
  (entityDef as any).atom = writableAtom;

  return entityDef as any;
};
