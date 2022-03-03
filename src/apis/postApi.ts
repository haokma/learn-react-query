import axiosClient from './axios-client';

const postsApi = {
    getPosts: async ( params: any) => {
        const url = ` http://localhost:3000/posts`;
        return await  axiosClient.get(url);
    },
    addPost : async ( post: any) => {
        const url = ` http://localhost:3000/posts`;
        return await  axiosClient.post(url, post);
    },
    deletePost: async (id: any) => {
        const url = `http://localhost:3000/posts/${id}`;
        return axiosClient.delete(url);
    },
    getPostId: async (id: any) => {
        const url = ` http://localhost:3000/posts/${id}`;
        return await  axiosClient.get(url);
    }
}
export default  postsApi;