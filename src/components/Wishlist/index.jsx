import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { enqueueSnackbar } from "notistack";

import BreadcrumbCom from "../BreadcrumbCom";
import EmptyWishlistError from "../EmptyWishlistError";
import PageTitle from "../Helpers/PageTitle";
import Layout from "../Partials/Layout";
import ProductsTable from "./ProductsTable";
import { wishApi, deleteItemFromWish,deleteAllItemFromWish } from "../../api/wishList/wishList";

// ...imports remain unchanged...

export default function Wishlist({ wishlist = true }) {
  const navigate = useNavigate();
  const [wishlistItems, setWishlistItems] = useState([]);
  const [refresh, setRefresh] = useState(false);

  useEffect(() => {
    const fetchWishlist = async () => {
      const token = localStorage.getItem("token");

      if (!token) {
        enqueueSnackbar("Not logged in. Please log in to continue.", {
          variant: "warning",
        });
        navigate("/login");
        return;
      }

      try {
        const userId = localStorage.getItem("userId");

        const data = await wishApi(userId);

        if (data && data.items) {
          setWishlistItems(data.items); 
        } else {
          setWishlistItems([]);
        }
      } catch (error) {
        enqueueSnackbar("Failed to load wishlist.", { variant: "error" });
      }
    };

    fetchWishlist();
  }, [navigate, refresh]);

  const handleDeleteItem = async (productId) => {
    try {
      const token = localStorage.getItem("token");
      const payload = JSON.parse(atob(token.split(".")[1]));
      const userId = payload?.id || payload?.userId || payload?.sub;

      await deleteItemFromWish(userId, productId);
      enqueueSnackbar("Item removed from wishlist", { variant: "success" });

      setRefresh((prev) => !prev);
    } catch (error) {
      enqueueSnackbar("Failed to delete item from wishlist", { variant: "error" });
    }
  };

  const handleClearWishlist = async () => {
    try {
      const token = localStorage.getItem("token");
      const payload = JSON.parse(atob(token.split(".")[1]));
      const userId = payload?.id || payload?.userId || payload?.sub;

      await deleteAllItemFromWish(userId);
      enqueueSnackbar("Wishlist cleared successfully", { variant: "success" });

      setRefresh((prev) => !prev);
    } catch (error) {
      enqueueSnackbar("Failed to clear wishlist", { variant: "error" });
    }
  };

  const wishlistIsEmpty = wishlistItems.length === 0;

  return (
    <Layout childrenClasses={wishlist ? "pt-0 pb-0" : ""}>
      {wishlistIsEmpty ? (
        <div className="wishlist-page-wrapper w-full">
          <div className="container-x mx-auto">
            <BreadcrumbCom
              paths={[
                { name: "home", path: "/" },
                { name: "wishlist", path: "/wishlist" },
              ]}
            />
            <EmptyWishlistError />
          </div>
        </div>
      ) : (
        <div className="wishlist-page-wrapper w-full bg-white pb-[60px]">
          <div className="w-full">
            <PageTitle
              title="Wishlist"
              breadcrumb={[
                { name: "home", path: "/" },
                { name: "wishlist", path: "/wishlist" },
              ]}
            />
          </div>
          <div className="w-full mt-[23px]">
            <div className="container-x mx-auto">
              <ProductsTable
                items={wishlistItems}
                className="mb-[30px]"
                onDeleteItem={handleDeleteItem}
              />

              <div className="w-full mt-[30px] flex sm:justify-end">
                <div className="sm:flex sm:space-x-[30px] items-center">
                  <button type="button" onClick={handleClearWishlist}>
                    <div className="w-full text-sm font-semibold text-qred mb-5 sm:mb-0">
                      Clean Wishlist
                    </div>
                  </button>

                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </Layout>
  );
}
