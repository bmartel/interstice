import { storage } from '@interstice/mx';

export const store = storage('memory');
export const db = storage('local');

export enum HNNodeListType {
  New = 'new',
  Top = 'top',
  Best = 'best',
  Ask = 'ask',
  Show = 'show',
  Job = 'job',
}

export enum HNNodeType {
  Story = 'story',
  Job = 'job',
  Comment = 'comment',
  Poll = 'poll',
  PollOption = 'pollopt',
}

export interface HNNode {
  id: number;
  type: HNNodeType;
  text: string;
  time: number;
  by: string;
  poll?: number;
  parts?: number[];
  score?: number;
  title?: string;
  parent?: number;
  kids?: number[];
  url?: string;
  descendants?: number;
  deleted?: boolean;
  dead?: boolean;
}

const apiUrl = `https://hacker-news.firebaseio.com/v0/`;

const fetchNode = async (id: number | string): Promise<HNNode | undefined> =>
  fetch(`${apiUrl}item/${id}.json`).then((r) => (r.ok && r.json()) || undefined);

let deferWrite: any = null;

export const nodes = (
  value?: Record<string | number, HNNode>,
): Record<string | number, HNNode> | undefined => {
  if (value === undefined) {
    return store.getItem('nodes') || db.getItem('nodes') || {};
  }
  store.setItem('nodes', { ...store.getItem('nodes'), ...value });
  if (deferWrite) clearTimeout(deferWrite);
  deferWrite = setTimeout(() => {
    db.setItem('nodes', store.getItem('nodes'));
  }, 1000 / 60);
  return;
};

export const node = async (
  id: number | string,
  value?: HNNode | null,
): Promise<HNNode | undefined> => {
  const _nodes = nodes();
  if (value === undefined) {
    let data = _nodes?.[id];
    if (!data && (data = await fetchNode(id))) {
      nodes({
        [id]: data,
        ..._nodes,
      });
    }
    return data;
  }
  if (value === null) {
    _nodes && delete _nodes[id];
  } else {
    _nodes && (_nodes[id] = value);
  }
  nodes(_nodes);
  return;
};

const fetchStories = async (type: HNNodeListType): Promise<number[]> =>
  fetch(`${apiUrl}${type}stories.json`).then((r) => (r.ok && r.json()) || []);

export const stories = async (type: HNNodeListType): Promise<number[]> => {
  const key = `stories:${type}`;
  let data = store.getItem(key) || db.getItem(key);
  if (!data) {
    data = await fetchStories(type).then((ids) => {
      store.setItem(`stories:${type}`, ids || []);
      db.setItem(`stories:${type}`, ids || []);
      return ids;
    });
  }
  return data || [];
};
