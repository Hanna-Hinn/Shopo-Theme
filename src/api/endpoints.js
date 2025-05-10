import { BACKEND_URL,BACKEND_URLRate } from "../config";

export const endpoints = {
  login: `${BACKEND_URL}/login`,
  sign: `${BACKEND_URL}/register`,
  users: `${BACKEND_URL}/users`,
  products: `${BACKEND_URL}/products`,
  carts: `${BACKEND_URL}/carts`,
  favorites: `${BACKEND_URL}/favorites`,
  rate:`${BACKEND_URLRate}/convert`,
  orders:`${BACKEND_URL}/orders`,
};
export const rateApi = "efc8efc3a03da0059fef9e6dc6415ba0";
