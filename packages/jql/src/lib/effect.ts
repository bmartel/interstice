import { atom } from 'jotai';
import { atomFamily } from 'jotai/utils';
import { AtomEffect, AtomEffectRef, AtomEffectUpdate, Write } from './types';

const effectCache = new WeakMap();

export const atomEffect = <Value = any>(
  targetKey: string,
  write: Write<AtomEffectUpdate<Value>>,
  initialValue?: any,
  idKey = 'id'
): AtomEffect<Value> => {
  const writableAtom = atom({} as any);
  const entityDef = atomFamily<Value, Value, Value>((init: any) => {
    let { [idKey]: id, [targetKey]: targetValue } = init;
    id = id && id.toString();
    return atom(
      (get) => {
        const store = get(writableAtom) as any;
        const instance = store[id];
        return instance && instance[targetKey] || targetValue || initialValue;
      },
      (get, set, update) => {
        let updateId = (update as any)[idKey]
        updateId = updateId && updateId.toString() || id;
        const updater: AtomEffectUpdate<Value> = {
          value: (): Value => {
            let _val = get(writableAtom)[updateId]
            return _val && _val[targetKey] || initialValue
          },
          ref: (): { [k: string]: string } => {
            const prev = get(writableAtom) as any;
            const current = prev[updateId] || {
              [targetKey]: initialValue,
            };

            // stable ref
            if (!('_ref' in current)) {
              current._ref = { [idKey]: updateId, targetKey };
              set(writableAtom, { ...prev, [updateId]: current });
            }

            return current._ref;
          },
          clearRef: (ref: AtomEffectRef): void => {
            effectCache.delete(ref);
          },
          set: (value: Value): void => {
            const prev = get(writableAtom) as any;
            const current = prev[updateId] || {
              [targetKey]: initialValue,
            };

            // stable ref
            if (!('_ref' in current)) {
              current._ref = { [idKey]: updateId, targetKey };
            }

            current[targetKey] = value;

            set(writableAtom, { ...prev, [updateId]: current });
          },
          cache: (ref: AtomEffectRef, value?: any): any => {
            if (value === undefined) {
              return effectCache.get(ref);
            }
            effectCache.set(ref, value);
          },
          memo: (ref: AtomEffectRef, value?: any): any => {
            if (effectCache.has(ref) || value === undefined) {
              return effectCache.get(ref);
            }
            const storedValue = typeof 'function' ? value() : value;
            effectCache.set(ref, storedValue);
            return storedValue;
          },
          atom: writableAtom,
          id: updateId,
          idKey,
          targetKey,
          update: (update as any)[targetKey],
          initialValue,
          shouldSkip: () => {
            const previous = updater.value();
            return (
              previous !== updater.initialValue && previous === updater.update
            );
          },
        };
        return write(get, set, updater);
      }
    );
  });

  (entityDef as any)._name = 'atomEffect';
  (entityDef as any).idKey = idKey;
  (entityDef as any).targetKey = targetKey;
  (entityDef as any).atom = writableAtom;

  return entityDef as any;
};
