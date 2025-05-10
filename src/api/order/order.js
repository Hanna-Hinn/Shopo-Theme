import axios from "axios";
import { endpoints } from "../endpoints";

export const createOrderApi = async (userId, shipmentStatus) => {
  const response = await axios.post(
    `${endpoints.orders}/${userId}`,
    { shipmentStatus },
    {
      headers: {
        "Content-Type": "application/json",
      },
    }
  );
  return response.data.data;
};
