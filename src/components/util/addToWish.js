import { addItemToWish } from "../../api/wishList/wishList";
import { enqueueSnackbar } from "notistack";

export const handleAddToWish = async (productId, quantity = 1) => {
  const userId = localStorage.getItem("userId");

  try {
    if (!userId || !productId) {
      enqueueSnackbar("Something went wrong.", { variant: "warning" });
      return;
    }

    await addItemToWish(userId, productId, quantity);
    enqueueSnackbar("Item added to WishList successfully!", { variant: "success" });
  } catch (err) {
    enqueueSnackbar("Failed to add item to WishList. Please try again.", {
      variant: "warning",
    });
  }
};
