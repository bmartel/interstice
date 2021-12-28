import { open } from "./connection";
import { CachedRequestInit, StoreRecord, StoreData } from "./types";

const background = new Map();

const different = (source: any, target: any) =>
  (!source && !!target) ||
  typeof source !== typeof target ||
  source !== target ||
  JSON.stringify(source) !== JSON.stringify(target);

async function store(info: StoreRecord, data: any) {
  const { db } = await open(info.store.db, info.store.version);
  let updated = false;
  try {
    const id = info.key.id;
    const collection = info.collection || "offline";

    const existing = db.get(collection, id);

    if (different(existing, data)) {
      await db.put(
        collection,
        { id, data, fetchedAt: Date.now() } as StoreData,
        id
      );
      updated = true;
    }
  } finally {
    db.close();
    return updated;
  }
}

async function remoteFetch(
  info: StoreRecord,
  input: RequestInfo,
  init?: CachedRequestInit
) {
  const res = await fetch(input, init);
  if (!res.ok) {
    throw res.body;
  }
  const data = await res.json();
  return await store(info, data);
}

async function processFetch(
  info: StoreRecord,
  input: RequestInfo,
  init?: CachedRequestInit
) {
  const id = info.key.id;
  const existing = background.get(id);
  background.set(id, {
    info,
    input,
    init,
    processedAt: Infinity,
    updatedAt: existing && existing.updatedAt,
  });
  let updated = false;
  try {
    if (info && input) {
      updated = await remoteFetch(info, input, init);
    }
    (postMessage as any)({ id, success: true, updated });
  } catch (err) {
    (postMessage as any)({ id, error: err });
  } finally {
    const now = Date.now();
    background.set(id, {
      info,
      input,
      init,
      processedAt: now,
      updatedAt:
        updated || !existing ? now : (existing && existing.updatedAt) || now,
    });
  }
}

onmessage = async (ev: MessageEvent) => {
  const { info, input, init } = ev.data;

  const id = info.key.id;

  // unsub or sub and fetch
  switch (init.refetchInterval) {
    case -1:
      background.delete(id);
      break;
    default:
      if (init.refetchInterval) {
        background.set(id, { info, input, init, processedAt: 0 });
      }
      await processFetch(info, input, init);
      break;
  }
};

setInterval(() => {
  const now = Date.now();
  background.forEach(({ info, input, init, processedAt }) => {
    if (now - init.refetchInterval * 1000 > processedAt) {
      processFetch(info, input, init);
    }
  });
}, 1000);
