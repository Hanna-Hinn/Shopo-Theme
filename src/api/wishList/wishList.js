import axios from "axios";
import { endpoints } from "../endpoints";

export const wishApi = async (userId) => {
  const response = await axios.get(`${endpoints.favorites}/${userId}`, {
    headers: {
      "Content-Type": "application/json",
    },
  });
  
  
  return response.data.data;
};

export const addItemToWish = async (wishId, productId, quantity = 1) => {
  const response = await axios.post(
    `${endpoints.favorites}/${wishId}/items/${productId}`,
    {
      quantity: Number(quantity),
    },
    {
      headers: {
        "Content-Type": "application/json",
      },
    }
  );

  const { _id, totalPrice, totalItems, cartItems } = response.data.data;

  return {
    cartId: _id,
    totalPrice,
    totalItems,
    cartItems,
  };
};

export const deleteItemFromWish = async (cartId, productId) => {
await axios.delete(
    `${endpoints.favorites}/${cartId}/items/${productId}`,
    {
      headers: {
        "Content-Type": "application/json",
      },
    }
  );
};



export const deleteAllItemFromWish = async (cartId) => {
 await axios.delete(
    `${endpoints.favorites}/${cartId}`,
    {
      headers: {
        "Content-Type": "application/json",
      },
    }
  );
};

