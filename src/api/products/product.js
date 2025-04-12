import axios from "axios";
import { endpoints } from "../endpoints";

export const productApi = async (categoryName, pageNumber) => {
  const headers = {
    "Content-Type": "application/json",
  };

  const params = {
    ...(categoryName && { categoryName }),
    pageNumber,
  };

  const response = await axios.get(
    `${endpoints.products}/v1/searchFilter/v1/query`,
    {
      headers,
      params,
    }
  );

  return response.data;
};

export const productByTagApi = async (tag, pageNumber = 1, limit = 5) => {
  const headers = {
    "Content-Type": "application/json",
  };

  const params = {
    tag,
    pageNumber,
    limit,
  };
    const response = await axios.get(
      `${endpoints.products}/v1/searchFilter/v1/query`,
      { headers, params }
    );

    const products = response?.data?.data?.products
    // console.log(products);

    const filteredProducts = products.filter(
      (product) => product[tag] === true
    );

    return filteredProducts;
  // return [];
};
