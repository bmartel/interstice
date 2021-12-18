// import { syncedStore, getYjsValue } from "@syncedstore/core";
// import { WebrtcProvider } from "y-webrtc";
// import { Doc } from "yjs";

export interface User {
  email: string;
}
export interface Message {
  id: string;
  content: string;
  user: User;
  createdAt: Date | string;
  updatedAt?: Date | string;
}

// Create your SyncedStore store
// export const store = syncedStore({ messages: [] as Message[] });

// Get the Yjs document and sync automatically using y-webrtc
// export const doc = getYjsValue(store);

// export const webrtcProvider = new WebrtcProvider("my-document-id", doc as Doc);
