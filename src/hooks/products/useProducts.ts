import {useQuery, useQueryClient} from 'react-query';
import React, {useState} from 'react';
import productApi from '../../apis/productApi';


export const useProducts = () => {
    const queryClient = useQueryClient();
    const [page, setPage] = useState(0);


    const getData = async (page: number) => {
        const res = await productApi.getProducts(page);
        return res.data;
    };
    const {data, isLoading, isPreviousData, isFetching}: any = useQuery(['products', page],
        () => getData(page),
        {
            keepPreviousData: true,
            staleTime: 50000,
        });
    React.useEffect(() => {
        queryClient.prefetchQuery(['products', page + 1], () =>
            getData(page + 1)
        );

    }, [data, page, queryClient, getData]);

    return {
        data,
        page,
        isLoading,
        isPreviousData,
        isFetching,
        setPage
    };
};