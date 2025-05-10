import { Link } from "react-router-dom";
import QuickViewIco from "../icons/QuickViewIco";
import ThinLove from "../icons/ThinLove";
import { handleAddToCart } from "../../util/addTocart";
import { handleAddToWish } from "../../util/addToWish";
import { useState, useEffect } from "react";

export default function ProductCardRowStyleOneTwo({ className, datas }) {
  const [currency, setCurrency] = useState("USD");
  const [nisRate, setNisRate] = useState(1);

  useEffect(() => {
    const storedCurrency = localStorage.getItem("selectedCurrency") || "USD";
    const storedRate = parseFloat(localStorage.getItem("usdToNisRate")) || 1;
    setCurrency(storedCurrency);
    setNisRate(storedRate);
  }, []);

  const getDisplayPrice = () => {
    const price = parseFloat(datas?.price["$numberDecimal"] || 0);
    if (currency === "NIS") {
      return `₪${(price * nisRate).toFixed(2)}`;
    }
    return `$${price.toFixed(2)}`;
  };

  return (
    <div
      data-aos="fade-left"
      className={`product-row-card-style-one-two w-full h-[250px] bg-white group relative overflow-hidden ${
        className || ""
      }`}
    >
      <div className="flex space-x-5 items-center w-full h-full p-[16px]">
        <div className="w-1/3 h-full">
          <img
            src={`${datas.imageUrl}`}
            alt=""
            className="w-full h-full object-contain"
          />
        </div>
        <div className="flex-1 flex flex-col justify-center h-full">
          <div>
            <Link to={`/single-product/${datas._id}`}>
              <p className="title mb-2 sm:text-[20px] text-[15px] font-600 text-qblack leading-[24px] line-clamp-2 hover:text-blue-600">
                {datas.name}
              </p>
            </Link>
            <p className="price flex space-x-2 items-center  mb-2.5">
              <div className="price">
                <span className="offer-price text-center text-qred font-600 text-[18px] mr-1 inline-block">
                  {getDisplayPrice()}
                </span>
              </div>
            </p>
            <button
              type="button"
              className="w-[116px] h-[40px]"
              onClick={() => handleAddToCart(datas._id)}
            >
              <span className="yellow-btn"> Add To Cart</span>
            </button>
          </div>
        </div>
      </div>
      <div className="quick-access-btns flex flex-col space-y-2 absolute group-hover:right-4 -right-10 top-20 transition-all duration-300 ease-in-out">
        <button
          onClick={() => handleAddToWish(datas._id)}
          type="button"
          className="w-10 h-10 flex justify-center items-center bg-primarygray rounded"
        >
          <ThinLove />
        </button>
      </div>
    </div>
  );
}
