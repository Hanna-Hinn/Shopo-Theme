import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

export default function ProductCardRowStyleTwo({ className, datas }) {
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
      data-aos="fade-up"
      className={`product-card-row-two w-full ${className || ""}`}
    >
      <div className="w-full h-[105px] bg-white border border-primarygray px-5 ">
        <div className="w-full h-full flex space-x-5 justify-center items-center">
          <div className="w-[75px] h-[75px]">
            <img
              src={`${datas.imageUrl}`}
              alt=""
              className="w-full h-full object-cover"
            />
          </div>
          <div className="flex-1 h-full flex flex-col justify-center ">
            <Link to={`/single-product/${datas._id}`}>
              <p className="title mb-2 sm:text-[15px] text-[13px] font-600 text-qblack leading-[24px] line-clamp-1 hover:text-blue-600">
                {datas.name}
              </p>
            </Link>

            <p className="price">
              <span className="offer-price text-center text-qred font-600 text-[18px] mr-1 inline-block">
                {getDisplayPrice()}
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
