import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import BreadcrumbCom from "../BreadcrumbCom";
import EmptyCardError from "../EmptyCardError";
import InputCom from "../Helpers/InputCom";
import PageTitle from "../Helpers/PageTitle";
import Layout from "../Partials/Layout";
import ProductsTable from "./ProductsTable";
import { enqueueSnackbar } from "notistack";
import { cartApi, deleteItemFromCart } from "../../api/carts/carts";

export default function CardPage({ cart = true }) {
  const navigate = useNavigate();
  const [cartItems, setCartItems] = useState([]);
  const [refresh, setRefresh] = useState(false);

  // Retrieve currency and conversion rate
  const selectedCurrency = localStorage.getItem("selectedCurrency") || "USD";
  const usdToNisRate = parseFloat(localStorage.getItem("usdToNisRate") || "3.6");

  // Format price based on selected currency
  const formatPrice = (amount) => {
    const convertedAmount = selectedCurrency === "NIS" ? amount * usdToNisRate : amount;
    const currencySymbol = selectedCurrency === "NIS" ? "₪" : "$";
    return `${currencySymbol}${convertedAmount.toFixed(2)}`;
  };

  // Calculate subtotal
  const subtotal = cartItems.reduce((acc, item) => {
    const price = parseFloat(item?.price?.["$numberDecimal"] || 0);
    return acc + price * item.quantity;
  }, 0);

  useEffect(() => {
    const fetchCart = async () => {
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
        const data = await cartApi(userId);
        setCartItems(data?.cartItems || []);
      } catch (error) {
        enqueueSnackbar("Failed to load cart.", { variant: "error" });
      }
    };

    fetchCart();
  }, [navigate, refresh]);

  const handleDeleteItem = async (productId) => {
    try {
      const token = localStorage.getItem("token");
      const payload = JSON.parse(atob(token.split(".")[1]));
      const cartId = payload?.id || payload?.userId || payload?.sub;

      await deleteItemFromCart(cartId, productId);
      enqueueSnackbar("Item removed from cart", { variant: "success" });
      setRefresh((prev) => !prev);
    } catch (error) {
      console.error("Error deleting item from cart:", error);
      enqueueSnackbar("Failed to delete item", { variant: "error" });
    }
  };

  const cartIsEmpty = cartItems.length === 0;

  return (
    <Layout childrenClasses={cart ? "pt-0 pb-0" : ""}>
      {cartIsEmpty ? (
        <div className="cart-page-wrapper w-full">
          <div className="container-x mx-auto">
            <BreadcrumbCom
              paths={[
                { name: "home", path: "/" },
                { name: "cart", path: "/cart" },
              ]}
            />
            <EmptyCardError />
          </div>
        </div>
      ) : (
        <div className="cart-page-wrapper w-full bg-white pb-[60px]">
          <div className="w-full">
            <PageTitle
              title="Your Cart"
              breadcrumb={[
                { name: "home", path: "/" },
                { name: "cart", path: "/cart" },
              ]}
            />
          </div>
          <div className="w-full mt-[23px]">
            <div className="container-x mx-auto">
              <ProductsTable
                items={cartItems}
                className="mb-[30px]"
                onDeleteItem={handleDeleteItem}
                selectedCurrency={selectedCurrency}
                usdToNisRate={usdToNisRate}
              />

              <div className="w-full mt-[30px] flex sm:justify-end">
                <div className="sm:w-[370px] w-full border border-[#EDEDED] px-[30px] py-[26px]">
                  <div className="sub-total mb-6">
                    <div className="flex justify-between mb-6">
                      <p className="text-[15px] font-medium text-qblack">Subtotal</p>
                      <p className="text-[15px] font-medium text-qred">
                        {formatPrice(subtotal)}
                      </p>
                    </div>
                    <div className="w-full h-[1px] bg-[#EDEDED]"></div>
                  </div>

                  <div className="shipping mb-6">
                    <span className="text-[15px] font-medium text-qblack mb-[18px] block">
                      Shipping
                    </span>
                    {["Free Shipping", "Flat Rate", "Local Delivery"].map((label, index) => (
                      <div key={index} className="flex justify-between items-center mb-1">
                        <div className="flex space-x-2.5 items-center">
                          <input type="radio" name="shipping" className="accent-pink-500" />
                          <span className="text-[13px] text-qgraytwo">{label}</span>
                        </div>
                        <span className="text-[13px] text-qgraytwo">+{formatPrice(0)}</span>
                      </div>
                    ))}
                  </div>

                  <div className="shipping-calculation w-full mb-3">
                    <div className="title mb-[17px]">
                      <h1 className="text-[15px] font-medium">Calculate Shipping</h1>
                    </div>
                    <div className="w-full h-[50px] border border-[#EDEDED] px-5 flex justify-between items-center mb-2">
                      <span className="text-[13px] text-qgraytwo">Select Country</span>
                      <svg
                        width="11"
                        height="7"
                        viewBox="0 0 11 7"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M5.4 6.8L0 1.4L1.4 0L5.4 4L9.4 0L10.8 1.4L5.4 6.8Z"
                          fill="#222222"
                        />
                      </svg>
                    </div>
                    <div className="w-full h-[50px]">
                      <InputCom
                        inputClasses="w-full h-full"
                        type="text"
                        placeholder="Postcode / ZIP"
                      />
                    </div>
                  </div>

                  <button type="button" className="w-full mb-10">
                    <div className="w-full h-[50px] bg-[#F6F6F6] flex justify-center items-center">
                      <span className="text-sm font-semibold">Update Cart</span>
                    </div>
                  </button>

                  <div className="total mb-6">
                    <div className="flex justify-between">
                      <p className="text-[18px] font-medium text-qblack">Total</p>
                      <p className="text-[18px] font-medium text-qred">
                        {formatPrice(subtotal)}
                      </p>
                    </div>
                  </div>

                  <Link to="/checkout">
                    <div className="w-full h-[50px] black-btn flex justify-center items-center">
                      <span className="text-sm font-semibold">Proceed to Checkout</span>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </Layout>
  );
}
