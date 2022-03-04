import { useMutation, useQuery, useQueryClient } from 'react-query';
import postsApi from '../../apis/postApi';

export const usePosts = (params: any) => {
  const queryKey = ['posts', params];
  const queryClient = useQueryClient();
  const { data, isLoading, error } = useQuery(queryKey, () => postsApi.getPosts(params));

  const { data: post } = useQuery(queryKey, () => postsApi.getPostId(params));

  const addMutation = useMutation(postsApi.addPost, {
    onSuccess: async () => {
      await queryClient.invalidateQueries(queryKey);
    },
  });
  const deleteMutation = useMutation(postsApi.deletePost, {
    onSuccess: async () => {
      await queryClient.invalidateQueries(queryKey);
    },
  });

  return {
    posts: data?.data,
    post: post?.data,
    isLoading,
    error,
    addMutation,
    deleteMutation,
  };
};
