import axiosClient from './axios-client';

const photoApi = {
  getPhotos: async (page: number = 1) => {
    const url = `https://picsum.photos/v2/list?page=${page}&limit=10`;
    return axiosClient.get(url);
  },
};
export default photoApi;
