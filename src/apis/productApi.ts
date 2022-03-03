import axiosClient from './axios-client';


const productApi = {
    getProducts: (params: any) => {
        const url = ` https://haolux01api.herokuapp.com/products/Giay-Adidas?limit=3&page=${params.page}&minPrice=200000&maxPrice=1500000`;
        return axiosClient.get(url);
    }
}

export default  productApi;