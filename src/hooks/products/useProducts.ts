import { useQuery, useQueryClient } from 'react-query';
import React from 'react';
import productApi from '../../apis/productApi';

export const useProducts = (params: any) => {
  const queryClient = useQueryClient();

  const getData = async (page: number) => {
    const res = await productApi.getProducts(params);
    return res.data;
  };

  const { data, isLoading, isPreviousData, isFetching, isError }: any = useQuery(
    ['products', params.page],
    () => getData(params.page),
    {
      keepPreviousData: true,
      staleTime: 50000,
    }
  );

  React.useEffect(() => {
    queryClient.prefetchQuery(['products', params.page + 1], () => getData(params.page + 1));
  }, [data, params.page, queryClient, getData]);

  return {
    data,
    isLoading,
    isPreviousData,
    isFetching,
    isError,
  };
};
