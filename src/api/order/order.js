import axios from "axios";
import { endpoints } from "../endpoints";


export const createOrderApi = async (userId, shipmentStatus, addressId) => {
  const response = await axios.post(
    `${endpoints.orders}/${userId}`,
    {
      shipmentStatus,
      addressId,
    },
    {
      headers: {
        "Content-Type": "application/json",
      },
    }
  );
  return response.data.data;
};
