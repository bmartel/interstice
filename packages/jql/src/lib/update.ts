import { useCallback, useMemo } from 'react';
import { DocumentNode } from 'graphql';
import { useAtom } from 'jotai';
import { CombinedError, useMutation } from 'urql';
import { AtomEntity, PartialWithId } from './types';
import { atomWithReset, useResetAtom } from 'jotai/utils';

export type UpdateEntityReturn<
  Value extends { id: string },
  InputValue = Value
> = (id: string) => [
  { entity?: Partial<Value>; loading: boolean; error?: CombinedError },
  {
    update: (value: Partial<InputValue>) => Promise<void>;
    reset: () => void;
  }
];

export const updateEntity = <Value extends { id: string }, InputValue = Value>(
  atomEntityInstance: AtomEntity<Value>,
  mutation: string | DocumentNode,
  fromData?: (data: any, original: Partial<Value>) => PartialWithId<Value>,
  inputData?: (data: Partial<InputValue>) => any
): UpdateEntityReturn<Value, InputValue> => {
  return (id: string) => {
    const [entity, updateEntityInstance] = useAtom(
      atomEntityInstance({ id } as any)
    );
    const loadingAtom = useMemo(() => atomWithReset(false as any), [id]) as any;
    const [loading, setLoading] = useAtom<boolean, boolean, any>(loadingAtom);
    const resetLoading = useResetAtom(loadingAtom as any);
    const errorAtom = useMemo(() => atomWithReset(null as any), [id]) as any;
    const resetError = useResetAtom(errorAtom as any);
    const [error, setError] = useAtom<
      CombinedError | null,
      CombinedError | null,
      any
    >(errorAtom);
    const [, performUpdate] = useMutation(mutation);

    const optimisticUpdate = useCallback(
      async (value: Partial<InputValue>) => {
        setLoading(true);
        const entityInstance = entity as any;

        // Update optimistically
        updateEntityInstance({ ...value, id } as any);

        const input = inputData
          ? inputData({ id, ...value })
          : { id, ...value };

        const res = await performUpdate(input);

        setLoading(false);

        if (res.error) {
          setError(res.error as any);
          // restore if failed
          updateEntityInstance({ ...entityInstance, id });
          throw res.error;
        }

        // Update from remote
        if (fromData) {
          updateEntityInstance({
            ...fromData(res.data as any, entityInstance),
            id,
          } as any);
        }
      },
      [id, entity, updateEntityInstance]
    );

    const reset = useCallback(() => {
      resetError();
      resetLoading();
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return [
      {
        entity,
        loading,
        error,
      },
      { update: optimisticUpdate, reset },
    ] as any;
  };
};
