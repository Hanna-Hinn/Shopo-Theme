import { Link } from "react-router-dom";

export default function ProductCardRowStyleTwo({ className, datas }) {
  return (
    <div
      data-aos="fade-up"
      className={`product-card-row-two w-full  ${className || ""}`}
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
                ${datas?.price["$numberDecimal"] || 0}
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
