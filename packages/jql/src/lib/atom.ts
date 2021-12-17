import { atom } from 'jotai';
import { atomFamily } from 'jotai/utils';
import { PartialWithId, AtomEntity, AtomEffect } from './types';

const lookupTarget = new WeakMap<Record<string, any>, string>();

const mergeEntity = <E = any>(
  _relatedEntity: string | number | E,
  get: any,
  set: any,
  lookupAtom: any
): string | undefined => {
  const relatedEntity = _relatedEntity as any;
  if (typeof relatedEntity === 'string' || typeof relatedEntity === 'number') {
    return relatedEntity.toString();
  }
  if (relatedEntity && relatedEntity[lookupAtom.idKey]) {
    const idString = relatedEntity[lookupAtom.idKey].toString();

    let mergeOriginal = {};
    if (
      lookupAtom.idKey !== lookupAtom.targetKey &&
      relatedEntity && relatedEntity[lookupAtom.targetKey]
    ) {
      const original = get(
        lookupAtom({
          [lookupAtom.targetKey]:
            relatedEntity[lookupAtom.targetKey].toString(),
        })
      );
      if (typeof original === 'object' && original) {
        mergeOriginal = original;
        set(
          lookupAtom({
            [lookupAtom.targetKey]:
              relatedEntity[lookupAtom.targetKey].toString(),
          }),
          null
        );
      }
    }
    set(lookupAtom({ [lookupAtom.idKey]: idString }), {
      ...mergeOriginal,
      ...relatedEntity,
      [lookupAtom.idKey]: idString,
    });
    return idString;
  }
  return;
};

const mergeEffect = <E = any>(
  relatedEffect: E,
  set: any,
  lookupAtom: any
): string => {
  const id = (relatedEffect as any)[lookupAtom.idKey].toString();
  set(lookupAtom(relatedEffect), relatedEffect);
  return id;
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
              entityRef && entityRef[lookupAtom.idKey] || entityRef || defaultId,
          } as any)
    )
  );
};

export const atomEntity = <
  Value extends { [k: string]: any },
  IdType = { id: string }
>(
  related?: {
    [k in keyof Omit<Value, keyof IdType>]?:
      | AtomEntity<Omit<Value, keyof IdType>[k]>
      | [AtomEntity<Omit<Value, keyof IdType>[k][0]>]
      | AtomEffect<Omit<Value, keyof IdType>[k]>;
  },
  idKey = 'id',
  targetKey = idKey,
  hydrate: Record<string, Value> = {}
): AtomEntity<Value> => {
  const writableAtom = atom(hydrate);
  const entityDef = atomFamily<Value, Value, Value>(
    (init) => {
      let { [idKey]: id, ...values } = init;
      id = id && id.toString();
      return atom(
        (get) => {
          const lookupId = id || lookupTarget.get(init);
          const entity = (get(writableAtom) as any)[lookupId] || {
            [idKey]: lookupId,
            ...values,
          };
          if (related) {
            return Object.entries(related).reduce(
              (
                resolved,
                [key, lookup]: [string, AtomEntity | AtomEffect | any]
              ) => ({
                ...resolved,
                [key]: Array.isArray(lookup)
                  ? entity && entity[key]
                      && entity[key].map((relatedId: any) => {
                        return lookupEntity(relatedId, get, lookup[0]);
                      })
                      .filter(Boolean)
                  : lookup._name === 'atomEntity'
                  ? lookupEntity(entity && entity[key], get, lookup, id)
                  : get(
                      lookup({
                        [(lookup as any).idKey]: lookupId,
                        ...entity,
                      } as any)
                    ) || entity && entity[key],
              }),
              entity
            );
          }
          return entity;
        },
        (get, set, update) => {
          if (!update) return;
          let entityId = (id || update[idKey])
          entityId = entityId && entityId.toString();
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

                next[entityId][key] = next[entityId][key] && next[entityId][key]
                  .map((relatedEntity: any) =>
                    mergeEntity(relatedEntity, get, set, lookupAtom)
                  )
                  .filter(Boolean);
              } else {
                const lookupAtom = lookup as any;

                // only update if the incoming value is not just the reference to the effect
                if (
                  lookupAtom._name === 'atomEffect' &&
                  update[key] !== entityId
                ) {
                  next[entityId][key] =
                    mergeEffect(
                      { [lookupAtom.idKey]: entityId, [key]: update[key] },
                      set,
                      lookupAtom
                    ) || entityId;
                } else if (
                  key in update &&
                  lookupAtom._name === 'atomEntity' &&
                  typeof update[key] !== 'string'
                ) {
                  // only update if the incoming value is not a reference to the id
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
    (a, b) => (a && a[idKey]) === (b && b[idKey])
  );

  (entityDef as any)._name = 'atomEntity';
  (entityDef as any).idKey = idKey;
  (entityDef as any).targetKey = targetKey;
  (entityDef as any).atom = writableAtom;

  return entityDef as any;
};
