import { BACKEND_URL } from "../config";

export const endpoints = {
  login: `${BACKEND_URL}/login`,
  sign: `${BACKEND_URL}/register`,
  users: `${BACKEND_URL}/users`,
  products: `${BACKEND_URL}/products`,
};
