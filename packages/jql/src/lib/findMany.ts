/* eslint-disable react-hooks/rules-of-hooks */
import { useCallback, useEffect } from 'react';
import { Atom, WritableAtom, atom } from 'jotai';
import {
  atomWithReset,
  RESET,
  useAtomValue,
  useResetAtom,
  useUpdateAtom,
} from 'jotai/utils';
import { uniqBy } from './utils';
import { AtomEntity, QueryWrite, CombinedError } from './types';

export type FindManyEntitiesReturn<Value extends { id: string }> = ((
  vars?: any
) => [
  {
    entities: Value[];
    loaded: boolean;
    loading: boolean;
    error?: CombinedError;
  },
  {
    fetch: (input?: any) => void;
    reset: () => void;
  }
]) & {
  entitiesAtom: WritableAtom<Value[], Value[]>;
  entityIdsAtom: WritableAtom<string[], string[]> | null;
  errorAtom: WritableAtom<CombinedError | null, CombinedError | null>;
  loadingAtom: WritableAtom<boolean, boolean>;
  hasFetchedAtom: WritableAtom<number, number>;
};

export const findManyEntities = <Value extends { id: string }>(
  atomEntityInstance: AtomEntity<Value>,
  query: QueryWrite<any, Value[]>,
  listAtom?: Atom<Value[]>,
  hydrate?: Value[],
  autoReset = true
): FindManyEntitiesReturn<Value> => {
  const hasFetchedAtom = atomWithReset<number>(hydrate?.length ? 1 : -1);
  const loadingAtom = atomWithReset(false);
  const errorAtom = atomWithReset(null as CombinedError | null);
  let initialEntityIds: string[];
  const entityIdsAtom = listAtom
    ? null
    : atom<string[]>(
        (initialEntityIds =
          (hydrate
            ?.map((entity: any) => {
              if (!entity?.[atomEntityInstance.idKey]) {
                return null;
              }
              atomEntityInstance(entity);
              return entity[atomEntityInstance.idKey];
            })
            .filter(Boolean) as string[]) || [])
      );
  const entitiesAtom =
    listAtom ||
    atom(
      (get) => {
        const entityIds = get(entityIdsAtom as any) as any;
        const entityLen = entityIds.length;
        for (let i = 0; i < entityLen; i++) {
          let eid = entityIds[i];
          if (typeof eid !== 'string') {
            eid = eid[atomEntityInstance.idKey];
          }
          entityIds[i] = get(
            atomEntityInstance({ [atomEntityInstance.idKey]: eid } as any)
          );
        }
        return entityIds;
      },
      (_get, set, update: any[] | typeof RESET) => {
        if (update === RESET) {
          set(entityIdsAtom as any, initialEntityIds);
          return;
        }
        set(
          entityIdsAtom as any,
          uniqBy(
            update.map((u) => {
              const instanceId = u[atomEntityInstance.idKey];
              set(
                atomEntityInstance({
                  [atomEntityInstance.idKey]: instanceId,
                } as any),
                u
              );
              return instanceId;
            })
          )
        );
      }
    );

  const queryWrite: QueryWrite<any, Value[]> = async (get, set, params) => {
    try {
      set(params.atoms.loadingAtom, true);
      set(params.atoms.hasFetchedAtom, 0);
      params.previous = get(params.atoms.readAtom) as any;
      await query(get, set, params);
    } catch (err) {
      set(params.atoms.errorAtom, err);
    } finally {
      set(params.atoms.loadingAtom, false);
    }
  };
  const queryAtom = atom(null, queryWrite);

  function findManyHook(vars?: any) {
    const hasFetched = useAtomValue(hasFetchedAtom as any);
    const resetHasFetched = useResetAtom(hasFetchedAtom as any);
    const loading = useAtomValue(loadingAtom);
    const resetLoading = useResetAtom(loadingAtom as any);
    const error = useAtomValue(errorAtom);
    const resetError = useResetAtom(errorAtom as any);
    const entities = useAtomValue(entitiesAtom as any);
    const resetEntities = useResetAtom(entitiesAtom as any);
    const loaded = (hasFetched as number) > -1 && !loading;
    const query = useUpdateAtom(queryAtom);

    const fetchQuery = useCallback(async (input?: any) => {
      await query({
        input,
        atoms: {
          loadingAtom,
          hasFetchedAtom,
          errorAtom,
          readAtom: entitiesAtom,
          writeAtom: entitiesAtom as WritableAtom<Value[], Value[]>,
        },
      });
    }, []);

    useEffect(() => {
      fetchQuery(vars);
    }, [vars]);

    const reset = useCallback(() => {
      resetEntities();
      resetError();
      resetLoading();
      resetHasFetched();
    }, []);

    // @ts-ignore
    useEffect(() => {
      if (autoReset) {
        return reset;
      }
    }, []);

    return [
      {
        entities,
        loading,
        loaded,
        error,
      },
      {
        fetch: fetchQuery,
        reset,
      },
    ];
  }

  // Keep a reference on the function itself to the atoms for Create/Delete purposes, and allowing fine grain reads by
  // outside consumers
  findManyHook.entitiesAtom = entitiesAtom as any;
  findManyHook.entityIdsAtom = entityIdsAtom as any;
  findManyHook.errorAtom = errorAtom as any;
  findManyHook.loadingAtom = loadingAtom as any;
  findManyHook.hasFetchedAtom = hasFetchedAtom as any;

  return findManyHook as any;
};
