import React from "react";
import axiosClient from "../apis/axios-client";
import { URL_API } from "../constants";
import { useQuery } from "react-query";

const Test = () => {
  const getData = async () => {
    const res = await axiosClient.get(URL_API);
    return res;
  };

  const { data, isLoading } = useQuery("products-init", () => getData(), {
    staleTime: 30000,
  });

  if (isLoading) {
    return <h2>Loading...</h2>;
  }
  return (
    <div>
      {data?.data.newProducts.map((product: any, index: number) => (
        <h2 key={index}>{product.title}</h2>
      ))}
    </div>
  );
};

export default Test;
