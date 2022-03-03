import React from 'react';
import {useProducts} from '../hooks';

const Products = () => {
    const {data, page, setPage, isLoading, isFetching , isPreviousData} = useProducts();

    if (isLoading) {
        return <h1>Loading...</h1>;
    }
    console.log(data.totalPage)
    return (
        <div>
            <button disabled={page === 0} onClick={() => {
                setPage(page - 1);
            }}>Prev page
            </button>
            <button
                disabled={isPreviousData || !(data.totalPage-1> page)}
                onClick={() => {
                    console.log({
                        isPreviousData,
                        data: data.totalPage>= page
                    })

                        setPage(old => old + 1)


                }}>Next page
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
