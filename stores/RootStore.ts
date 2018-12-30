import { applySnapshot, Instance, SnapshotIn, SnapshotOut, types } from "mobx-state-tree";
import { postStore, Post, PostList } from './PostStore';

let rootStore = null as any

const RootStore = types
    .model('Root', {
        post: types.maybe(Post),
        postStore: types.maybe(PostList)
    })

const initStore = (isServer, snapshot = null) => {

   if (isServer) {
       rootStore = RootStore.create({postStore})
   }

   if (rootStore === null) {
       rootStore = RootStore.create({postStore})
   }

   if (snapshot) {
       applySnapshot(rootStore, snapshot)
   }

    return rootStore;
}

export { initStore }