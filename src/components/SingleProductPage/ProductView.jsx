import { useState, useEffect } from "react";
import Star from "../Helpers/icons/Star";
import Selectbox from "../Helpers/Selectbox";
import { handleAddToCart } from "../util/addTocart";
import { handleAddToWish } from "../util/addToWish";

export default function ProductView({ className, reportHandler, product }) {
  const [src, setSrc] = useState(product.imageUrl || "");
  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    setSrc(product.imageUrl || "");
  }, [product]);

  const changeImgHandler = (current) => {
    setSrc(current);
  };

  const increment = () => {
    if (quantity < product.availableInStock) {
      setQuantity((prev) => prev + 1);
    }
  };

  const decrement = () => {
    if (quantity > 1) {
      setQuantity((prev) => prev - 1);
    }
  };

  return (
    <div
      className={`product-view w-full lg:flex justify-between ${
        className || ""
      }`}
    >
      <div data-aos="fade-right" className="lg:w-1/2 xl:mr-[70px] lg:mr-[50px]">
        <div className="w-full">
          <div className="w-full h-[600px] border border-qgray-border flex justify-center items-center overflow-hidden relative mb-3">
            <img src={src} alt={product.name} className="object-contain" />
          </div>
          <div className="flex gap-2 flex-wrap">
            {product.images?.map((img, index) => (
              <div
                onClick={() => changeImgHandler(img.src)}
                key={index}
                className="w-[110px] h-[110px] p-[15px] border border-qgray-border cursor-pointer"
              >
                <img
                  src={img.src}
                  alt={`Product ${index}`}
                  className={`w-full h-full object-contain ${
                    src !== img.src ? "opacity-50" : ""
                  }`}
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Right Side */}
      <div className="flex-1">
        <div className="product-details w-full mt-10 lg:mt-0">
          <span
            data-aos="fade-up"
            className="text-qgray text-xs font-normal uppercase tracking-wider mb-2 inline-block"
          >
            {product.categoryName}
          </span>
          <p
            data-aos="fade-up"
            className="text-xl font-medium text-qblack mb-4"
          >
            {product.name}
          </p>

          <div
            data-aos="fade-up"
            className="flex space-x-[10px] items-center mb-6"
          >
            <div className="flex">
              {[...Array(Math.round(Number(product.averageRating) || 0))].map(
                (_, index) => (
                  <Star key={index} />
                )
              )}
            </div>
            <span className="text-[13px] font-normal text-qblack">
              {product.ratingCount} Reviews
            </span>
          </div>

          <div data-aos="fade-up" className="flex space-x-2 items-center mb-7">
            <span className="text-2xl font-500 text-qred">
              ${product.price.$numberDecimal}
            </span>
          </div>
          <p
            data-aos="fade-up"
            className="text-qgray text-sm text-normal mb-[30px] leading-7"
          >
            {product.description}
          </p>

          {/* Quantity and Add to Cart */}
          <div
            data-aos="fade-up"
            className="quantity-card-wrapper w-full flex items-center h-[50px] space-x-[10px] mb-[30px]"
          >
            <div className="w-[120px] h-full px-[26px] flex items-center border border-qgray-border">
              <div className="flex justify-between items-center w-full">
                <button
                  onClick={decrement}
                  type="button"
                  className="text-base text-qgray"
                >
                  -
                </button>
                <span className="text-qblack">{quantity}</span>
                <button
                  onClick={increment}
                  type="button"
                  className="text-base text-qgray"
                >
                  +
                </button>
              </div>
            </div>
            <div className="w-[60px] h-full flex justify-center items-center border border-qgray-border">
              <button
                type="button"
                onClick={() => handleAddToWish(product._id, quantity)}
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M17 1C14.9 1 13.1 2.1 12 3.7C10.9 2.1 9.1 1 7 1C3.7 1 1 3.7 1 7C1 13 12 22 12 22C12 22 23 13 23 7C23 3.7 20.3 1 17 1Z"
                    stroke="#D5D5D5"
                    strokeWidth="2"
                    strokeMiterlimit="10"
                    strokeLinecap="square"
                  />
                </svg>
              </button>
            </div>
            <div className="flex-1 h-full">
              <button
                type="button"
                className="black-btn text-sm font-semibold w-full h-full"
                onClick={() => handleAddToCart(product._id, quantity)}
              >
                Add To Cart
              </button>
            </div>
          </div>

          <div data-aos="fade-up" className="mb-[20px]">
            <p className="text-[13px] text-qgray leading-7">
              <span className="text-qblack">Category :</span>{" "}
              {product.categoryName}
            </p>
            <p className="text-[13px] text-qgray leading-7">
              <span className="text-qblack">Available In Stock :</span>{" "}
              {product.availableInStock || "N/A"}
            </p>
          </div>

          <div
            data-aos="fade-up"
            className="flex space-x-2 items-center mb-[20px]"
          >
            <span>
              <svg width="12" height="13" viewBox="0 0 12 13" fill="none">
                <path
                  d="M0 0C0.247634 0 0.475436 0 0.729172 0C0.738324 0.160174 0.747477 0.316279 0.757647 0.493233C1.05816 0.392044 1.33885 0.282211 1.62818 0.203395C3.11296 -0.201361 4.51385 0.0366111 5.84202 0.779512C6.47661 1.13494 7.14171 1.39071 7.86987 1.47207C8.88125 1.58496 9.82093 1.35817 10.7098 0.88426C10.9335 0.765274 11.1522 0.636627 11.411 0.491199C11.4161 0.606117 11.4237 0.693577 11.4237 0.780529C11.4242 3.18822 11.4222 5.5954 11.4288 8.00309C11.4293 8.1892 11.3718 8.29089 11.2096 8.38039C9.31956 9.42279 7.4285 9.43499 5.54557 8.37734C4.06231 7.54443 2.55363 7.43307 0.992568 8.13835C0.804428 8.22327 0.737816 8.33005 0.739341 8.53904C0.749003 9.9206 0.744426 11.3027 0.744426 12.6842C0.744426 12.7849 0.744426 12.8851 0.744426 13C0.48764 13 0.254244 13 0 13C0 8.67582 0 4.34961 0 0Z"
                  fill="#EB5757"
                />
              </svg>
            </span>
            <button
              type="button"
              onClick={reportHandler}
              className="text-qred font-semibold text-[13px]"
            >
              Report This Item
            </button>
          </div>

          <div
            data-aos="fade-up"
            className="social-share flex items-center w-full"
          >
            <span className="text-qblack text-[13px] mr-[17px] inline-block">
              Share This
            </span>
            <div className="flex space-x-5 items-center">
              {/* Social buttons */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
