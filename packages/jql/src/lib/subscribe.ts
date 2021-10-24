/* eslint-disable react-hooks/rules-of-hooks */
import { useCallback, useEffect, useMemo, useRef } from 'react';
import { DocumentNode } from 'graphql';
import { useSubscription } from 'urql';
import { Atom, atom, useAtom, WritableAtom } from 'jotai';
import { atomWithReset, RESET, useResetAtom } from 'jotai/utils';
import { AtomEntity, PauseAtomEntity } from './atom';
import { uniqBy } from './utils';

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

export type HandleSubscription<Value extends { [k: string]: any }> = (
  current: Value[],
  response: any
) => Value[];

const defaultHandleSubscription = (_: unknown, response: any) => response;

const wrapHandleSubscription = <Value extends { [k: string]: any }>(
  handler: HandleSubscription<Value>,
  transformer: (data: any) => Value[]
): HandleSubscription<Value> => {
  return (current: Value[], response: any): Value[] => {
    return transformer(handler(current, response));
  };
};

export const subscribeEntities = <Value extends { [k: string]: any }>(
  atomEntityInstance: AtomEntity<Value>,
  query: string | DocumentNode,
  fromData: (data: any) => Value[] = (data) => data,
  listAtom?: Atom<Value[]>,
  pauseWhen: PauseAtomEntity | boolean = false,
  handleSubscription: HandleSubscription<Value> = defaultHandleSubscription,
  initialVariables: any = {},
  hydrate?: Value[]
): SubscribeEntitiesReturn<Value> => {
  const variablesAtom = atomWithReset(initialVariables);
  const pauseAtom = atom<boolean>(
    typeof pauseWhen === 'boolean' || !pauseWhen
      ? pauseWhen
      : (pauseWhen({ variablesAtom }) as any)
  );
  let initialEntityIds: string[];
  const entityIdsAtom = listAtom
    ? null
    : atom<string[]>(
        (initialEntityIds =
          (hydrate
            ?.map((entity) => {
              if (!entity?.id) {
                return null;
              }
              atomEntityInstance(entity as any);
              return entity.id;
            })
            .filter(Boolean) as string[]) || [])
      );
  const entitiesAtom =
    listAtom ||
    atom(
      (get) =>
        get(entityIdsAtom!)
          ?.map((id) => get(atomEntityInstance({ id } as any)))
          ?.filter(Boolean),
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
    );

  function subscribeHook(vars?: any) {
    const entitiesRef = useRef<Value[]>([]);
    const [variables, setVariables] = useAtom(variablesAtom);
    const resetVariables = useResetAtom(variablesAtom as any);
    const [pause] = useAtom(pauseAtom);
    const [entities, setEntities] = useAtom(entitiesAtom as any);
    const resetEntities = useResetAtom(entitiesAtom as any);

    // Ensure useEffect can have a non stale reference without triggering recalcs
    entitiesRef.current = entities as any;

    useEffect(() => {
      if (vars) {
        setVariables((prev: any) => ({ ...prev, ...vars }));
      }
    }, [vars]);

    const [{ data }] = useSubscription(
      {
        query,
        variables,
        pause,
      },
      useMemo(
        () => wrapHandleSubscription(handleSubscription, fromData) as any,
        [handleSubscription, fromData]
      )
    );

    useEffect(() => {
      if (data) {
        setEntities(
          uniqBy(
            [...(entitiesRef.current || ([] as any)), ...data],
            'id'
          ) as any
        );
      }
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [data]);

    const reset = useCallback(() => {
      resetVariables();
      resetEntities();
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return [{ entities }, { reset }];
  }
  // Keep a reference on the function itself to the entitiesAtom for Create/Delete purposes
  subscribeHook.entitiesAtom = entitiesAtom as any;

  return subscribeHook as any;
};
