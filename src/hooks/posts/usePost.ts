import {useQuery} from "react-query";
import postApi from '../../apis/postApi';


export const usePost = (params: any) => {
    const queryKey = ['post', params];
    const {data, isLoading, error} = useQuery(queryKey, () => postApi.getPostId(params));

    return {
        post: data?.data,
        isLoading,
        error
    };
};
