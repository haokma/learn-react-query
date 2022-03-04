import React, { useEffect, useState } from 'react';
import { useProducts } from '../hooks';
import { useLocation, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

const Products = () => {
  const navigation = useNavigate();

  const useQueryParams = () => new URLSearchParams(useLocation().search);
  let query = useQueryParams();

  const [filter, setFilter] = useState({
    page: Number(query.get('page')) || 0,
    search: '',
  });

  const { data, isLoading, isFetching, isPreviousData, isError } = useProducts(filter);

  useEffect(() => {
    if (isError) {
      toast.error('Có lỗi xảy ra');
    }
  }, [isError]);

  if (isLoading) {
    return <h1>Loading...</h1>;
  }
  if (isError) {
    return <></>;
  }

  return (
    <div>
      <button
        disabled={filter.page === 0}
        onClick={() => {
          navigation(`/product/?page=${filter.page - 1}`);
          setFilter({
            ...filter,
            page: filter.page - 1,
          });
        }}
      >
        Prev page
      </button>
      <button
        disabled={isPreviousData || !(data.totalPage - 1 > filter.page)}
        onClick={() => {
          navigation(`/product/?page=${filter.page + 1}`);
          setFilter({
            ...filter,
            page: filter.page + 1,
          });
        }}
      >
        Next page
      </button>
      <ul>
        <h1>Product</h1>
        {data?.products.map((product: any, index: number) => (
          <li key={index}>{product.title}</li>
        ))}
      </ul>

      {isFetching ? <span> Loading...</span> : null}
    </div>
  );
};

export default Products;
