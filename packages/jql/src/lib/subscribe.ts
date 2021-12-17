/* eslint-disable react-hooks/rules-of-hooks */
import { useCallback, useEffect } from 'react';
import { Atom, atom, WritableAtom } from 'jotai';
import {
  atomWithReset,
  RESET,
  useAtomValue,
  useResetAtom,
  useUpdateAtom,
} from 'jotai/utils';
import { AtomEntity, CombinedError, SubscriptionWrite } from './types';

export type SubscribeEntitiesReturn<
  Value extends { [k: string]: string | number }
> = (vars?: any) => [
  {
    entities: Value[];
  },
  {
    reset: () => void;
  }
] & { entitiesAtom: WritableAtom<Value[], Value[]> };

export const subscribeEntities = <Value extends { [k: string]: any }>(
  atomEntityInstance: AtomEntity<Value>,
  subscription: SubscriptionWrite<any, Value[]>,
  listAtom?: Atom<Value[]>,
  hydrate?: Value[]
): SubscribeEntitiesReturn<Value> => {
  const errorAtom = atomWithReset(null as CombinedError | null);
  const unsubscribeAtom = atomWithReset(null as any);
  let initialEntityIds: string[];
  const entityIdsAtom = listAtom
    ? null
    : atom<string[]>(
        (initialEntityIds =
          (hydrate && hydrate
            .map((entity) => {
              if (!entity || !entity.id) {
                return null;
              }
              atomEntityInstance(entity as any);
              return entity.id;
            })
            .filter(Boolean) as string[]) || [])
      );
  const entitiesAtom =
    listAtom ||
    (atom(
      (get) => {
        let _val = get(entityIdsAtom!)
        return _val && _val.map((id) => get(atomEntityInstance({ id } as any)))
          .filter(Boolean) || []
      },
      (_get, set, update: any[] | typeof RESET) => {
        if (update === RESET) {
          set(entityIdsAtom!, initialEntityIds);
          return;
        }
        set(
          entityIdsAtom!,
          update.map((u) => {
            set(atomEntityInstance({ id: u.id } as any), u);
            return u.id;
          })
        );
      }
    ) as any);

  const subscriptionWrite: SubscriptionWrite<any, Value[]> = (
    get,
    set,
    params
  ) => {
    try {
      const unsubscribe = get(params.atoms.unsubscribeAtom);
      unsubscribe && unsubscribe();

      subscription(get, set, params);
    } catch (err) {
      set(params.atoms.errorAtom, err);
    }
  };
  const subscriptionAtom = atom(null, subscriptionWrite);

  function subscribeHook(vars?: any) {
    const entities = useAtomValue(entitiesAtom as any) as any;
    const resetEntities = useResetAtom(entitiesAtom as any);
    const error = useAtomValue(errorAtom);
    const resetError = useResetAtom(errorAtom as any);
    const subscription = useUpdateAtom(subscriptionAtom);

    const subscribe = useCallback(async (input?: any) => {
      subscription({
        input,
        atoms: {
          errorAtom,
          readAtom: entitiesAtom,
          writeAtom: entitiesAtom as WritableAtom<Value[], Value[]>,
          unsubscribeAtom,
        },
      });
    }, []);

    useEffect(() => {
      subscribe(vars);
    }, [vars]);

    const reset = useCallback(() => {
      resetError();
      resetEntities();
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return [{ entities, error }, { reset }];
  }

  // Keep a reference on the function itself to the entitiesAtom for Create/Delete purposes
  subscribeHook.entitiesAtom = entitiesAtom as any;
  subscribeHook.errorAtom = errorAtom as any;

  return subscribeHook as any;
};
