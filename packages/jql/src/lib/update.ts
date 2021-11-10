import { DocumentNode } from 'graphql';
import { useAtom } from 'jotai';
import { CombinedError, useMutation } from 'urql';
import { useCallback, useState } from 'react';
import { AtomEntity, PartialWithId } from './types';

export type UpdateEntityReturn<
  Value extends { id: string },
  InputValue = Value
> = (
  id: string
) => [
  { entity?: Partial<Value>; loading: boolean; error?: CombinedError },
  (value: Partial<InputValue>) => Promise<void>
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
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
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

    return [
      {
        entity,
        loading,
        error,
      },
      optimisticUpdate,
    ] as any;
  };
};
