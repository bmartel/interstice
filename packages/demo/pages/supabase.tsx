import { NextPage } from 'next';
import {
  atomEntity,
  createEntity,
  findManyEntities,
  Maybe,
  subscribeEntities,
} from '@interstice/jql';
import { createClient } from '@supabase/supabase-js';

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
);

interface Label {
  id: string;
  value: string;
}

interface Task {
  id: string;
  name: string;
  content?: Maybe<string>;
  completed_at?: Maybe<Date>;
  client_id?: string;
  labels?: Maybe<Partial<Label>[]>;
}

const labelEntity = atomEntity<Label>();
const taskEntity = atomEntity<Task>({
  labels: [labelEntity],
});

const useListTasks = findManyEntities<Task>(
  taskEntity,
  async (_get, set, query) => {
    const res = await supabase
      .from('tasks')
      .select('*')
      .order('completed_at', {
        nullsFirst: true,
        ascending: false,
      })
      .order('active_at', {
        ascending: false,
      })
      .order('start_at', { ascending: false })
      .order('active_duration', {
        ascending: false,
      });
    if (res.data) {
      const tasks = res.data;
      set(query.atoms.writeAtom, [...(query.previous || []), ...tasks]);
    }
  }
);

const useCreateTask = createEntity<Task>(
  taskEntity,
  async (_get, set, update) => {
    const res = await supabase.from('tasks').insert(update.input).single();
    if (res.data) {
      const task = res.data;
      set(update.atoms.writeAtom, task);
    }
  },
  useListTasks.entitiesAtom
);

const useSubscribeTasks = subscribeEntities<Task>(
  taskEntity,
  (_get, set, subscription) => {
    const tasksSubscription = supabase
      .from('tasks')
      .on('*', (payload) => {
        console.log(payload);
        // const previous = get(subscription.atoms.readAtom);
        // set(subscription.atoms.writeAtom, [task, ...(previous || [])]);
      })
      .subscribe();

    set(subscription.atoms.unsubscribeAtom, () =>
      supabase.removeSubscription(tasksSubscription)
    );
  },
  useListTasks.entitiesAtom
);

// const useCreateLabel = createEntity<Label>(
//   taskEntity,
//   async (_get, set, update) => {
//     const res = await supabase.from('labels').insert(update.input);
//     console.log(res.data);
//     if (res.data) {
//       const [label] = res.data;
//       set(update.atoms.writeAtom, label);
//     }
//   }
// );

const SupabaseExample: NextPage = () => {
  const [{ entities: tasks }] = useListTasks();
  useSubscribeTasks();
  const [, { create: createTask }] = useCreateTask();
  return (
    <div>
      <h1>SupabaseExample</h1>

      <button
        onClick={() =>
          createTask({
            client_id: 'bad43842-52bf-4197-ade9-483954f9d7a6',
            name: 'testing from jql',
            content: 'remove this later!',
            labels: [
              {
                value: 'jql',
              },
            ],
          })
        }
      >
        Create Task
      </button>
      {tasks.map((task) => (
        <article key={task.id}>
          <h3>{task.name}</h3>
        </article>
      ))}
    </div>
  );
};

export default SupabaseExample;
