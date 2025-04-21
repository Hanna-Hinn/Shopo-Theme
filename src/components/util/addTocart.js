import { addItemToCart } from "../../api/carts/carts.js";
import { enqueueSnackbar } from "notistack";

export const handleAddToCart = async (productId, quantity = 1) => {
  const userId = localStorage.getItem("userId");

  try {
    if (!userId || !productId) {
      enqueueSnackbar("Something went wrong.", { variant: "warning" });
      return;
    }

    await addItemToCart(userId, productId, quantity);
    enqueueSnackbar("Item added to cart successfully!", { variant: "success" });
  } catch (err) {
    enqueueSnackbar("Failed to add item to cart. Please try again.", {
      variant: "warning",
    });
  }
};
