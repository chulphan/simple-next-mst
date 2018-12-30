import { applySnapshot, Instance, SnapshotIn, SnapshotOut, types } from "mobx-state-tree";

const Post = types
    .model({
        id: types.identifierNumber,
        title: types.string,
        content: types.string,
        date: types.Date
    })

const PostList = types
    .model('posts', {
        postlist: types.optional(types.array(Post), [])
    })
    .actions((self) => {
        const addPost = (post) => {
            self.postlist.push(post);
        };

        const updatePost = (updatedPost: PostStore, id: number) => {
            self.postlist[id] = updatedPost;
        };

        return { addPost, updatePost } 
    })
    .views((self) => {
        const getAllPost = () => {
            return self.postlist;
        }

        const getOnePost = (id: number) => {
            return self.postlist.find((post:any) => post.id === id)
        }

        const getLastPostId = () => {
            return self.postlist.length != 0 ? self.postlist.length - 1 : 0;
        }
        
        return { getAllPost, getOnePost, getLastPostId }
    })
    
type PostStore = Instance<typeof Post>
type PostStoreSnapshotIn = SnapshotIn<typeof Post>;
type PostStoreStoreSnapshotOut = SnapshotOut<typeof Post>;

const postStore = PostList.create();

export { postStore, PostList, Post, PostStore, PostStoreSnapshotIn, PostStoreStoreSnapshotOut }