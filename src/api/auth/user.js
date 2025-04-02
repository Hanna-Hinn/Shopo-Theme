import axios from "axios";
import { endpoints } from "../endpoints";

export const UserApi = async (userId, token) => {
  try {
    const response = await axios.get(`${endpoints.getUser}/${userId}`, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`, // Include token if required
      },
    });
    return response.data;
  } catch (error) {
    console.error("Error fetching user data:", error);
    throw error;
  }
};

export const updateUser = async (userId, token, updatedData) => {
  try {
    const response = await axios.put(
      `${endpoints.updateUser}/${userId}`,
      updatedData,
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      }
    );
    return response.data;
  } catch (error) {
    console.error("Error updating user:", error);
    throw error;
  }
};
