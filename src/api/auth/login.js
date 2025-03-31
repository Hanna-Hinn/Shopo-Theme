import axios from "axios";
import { endpoints } from "../endpoints";

export const LoginApi = async (body) => {
  return await axios.post(endpoints.login, body, {
    headers: {
      "Content-Type": "application/json",
    },
  });
};
