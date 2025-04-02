import { BACKEND_URL } from "../config";

export const endpoints = {
  login: `${BACKEND_URL}/login`,
  getUser: `${BACKEND_URL}/users`,
  updateUser: `${BACKEND_URL}/users`,
};
