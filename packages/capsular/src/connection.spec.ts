import test from "ava";
import { stub } from "sinon";

import { open } from "./connection";

const dbname = "test";

test("open creates an indexeddb instance", async (t) => {
  const idbStub = stub(global.indexedDB, "open");
  idbStub.callThrough();
  await open(dbname);
  t.is(idbStub.callCount, 1);
});
