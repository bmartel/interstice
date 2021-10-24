import { DocumentNode } from 'graphql';
import { useAtom } from 'jotai';
import { CombinedError, useMutation } from 'urql';
import { useCallback, useState } from 'react';
import { AtomEntity } from './atom';
import { PartialWithId } from './types';

export type UpdateEntityReturn<Value extends { id: string }> = (
  id: string
) => [
  { entity?: PartialWithId<Value>; loading: boolean; error: CombinedError },
  (value: Partial<Value>) => Promise<void>
];

export const updateEntity = <Value extends { id: string }>(
  atomEntityInstance: AtomEntity<Value>,
  mutation: string | DocumentNode
): UpdateEntityReturn<Value> => {
  return (id: string) => {
    const [entity, updateEntityInstance] = useAtom(
      atomEntityInstance({ id } as any)
    ) as any;
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null as any);
    const [, performUpdate] = useMutation(mutation);

    const optimisticUpdate = useCallback(
      async (value: Partial<Value>) => {
        setLoading(true);
        const entityInstance = entity as any;

        // Update optimistically
        updateEntityInstance({ ...value, id } as any);

        const res = await performUpdate({ ...value, id } as any);
        setLoading(false);
        if (res.error) {
          setError(res.error as CombinedError);
          // restore if failed
          updateEntityInstance({ ...entityInstance, id });
          throw res.error;
        }
      },
      [id, entity]
    );

    return [
      {
        entity,
        loading,
        error,
      },
      optimisticUpdate,
    ];
  };
};
