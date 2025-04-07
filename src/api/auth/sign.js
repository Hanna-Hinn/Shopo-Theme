import axios from "axios";
import { endpoints } from "../endpoints";

export const SignApi = async (body) => {


  return await axios.post(endpoints.sign, body, {
    headers: {
      "Content-Type": "application/json",
    },
  });
};
