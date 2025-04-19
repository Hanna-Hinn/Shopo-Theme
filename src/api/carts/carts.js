import axios from "axios";
import { endpoints } from "../endpoints";

export const cartApi = async (userId) => {
  const response = await axios.get(`${endpoints.carts}/${userId}`, {
    headers: {
      "Content-Type": "application/json",
    },
  });
  return response.data.data;
};

export const addItemToCart = async (cartId, productId, quantity = 1) => {
  const response = await axios.post(
    `${endpoints.carts}/${cartId}/items/${productId}`,
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

export const deleteItemFromCart = async (cartId, productId) => {
  await axios.delete(`${endpoints.carts}/${cartId}/products/${productId}`, {
    headers: {
      "Content-Type": "application/json",
    },
  });
};
