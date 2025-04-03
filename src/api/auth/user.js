import axios from "axios";
import { endpoints } from "../endpoints";

export const UserApi = async (userId) => {
  const token = localStorage.getItem("token");
  const response = await axios.get(`${endpoints.users}/${userId}`, {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`, // Include token if required
    },
  });
  return response.data;
};

export const updateUser = async (userId, updatedData) => {
  const token = localStorage.getItem("token");
  const response = await axios.put(
    `${endpoints.users}/${userId}`,
    updatedData,
    {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    }
  );
  return response.data;
};
