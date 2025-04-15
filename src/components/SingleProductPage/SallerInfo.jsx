import ProductCardStyleOne from "../Helpers/Cards/ProductCardStyleOne";
import DataIteration from "../Helpers/DataIteration";
import Star from "../Helpers/icons/Star";

export default function SallerInfo({ seller, products }) {
  const fullName = `${seller?.firstName || ""} ${seller?.lastName || ""}`;
  const location = seller?.addresses?.[0]
    ? `${seller.addresses[0].city}, ${seller.addresses[0].state}`
    : "Unknown Location";

  return (
    <div className="saller-info-wrapper w-full">
      <div className="saller-info sm:flex justify-between items-center pb-[30px] border-b border-[#E8E8E8]">
        <div className="sm:flex sm:space-x-5 items-center sm:w-1/4">
          <div className="saller w-[73px] h-[73px] rounded-full overflow-hidden">
            <img
              src={
                seller?.imageUrl ||
                `${import.meta.env.VITE_PUBLIC_URL}/assets/images/comment-user-1.png`
              }
              alt={fullName}
              className="w-full h-full object-cover"
            />
          </div>
          <div>
            <h6 className="text-[18px] font-medium leading-[30px]">
              {fullName}
            </h6>
            <p className="text-[13px] font-normal text-qgray leading-[30px]">
              {location}
            </p>
            <div className="flex items-center mt-4">
              <div className="flex">
                {[...Array(5)].map((_, index) => (
                  <Star key={index} w="15" h="15" />
                ))}
              </div>
              <span className="text-[13px] font-normal ml-1">(5.0)</span>
            </div>
          </div>
        </div>
        <div className="flex-1 w-full sm:flex sm:space-x-5 justify-between sm:ml-[60px] mt-5 sm:mt-0">
          <div className="w-full mb-5 sm:mb-0">
            <ul>
              <li className="text-qgray leading-[30px]">
                <span className="text-[15px] font-normal text-qblack">
                  Email
                </span>
                : {seller?.email || "N/A"}
              </li>
              <li className="text-qgray leading-[30px]">
                <span className="text-[15px] font-normal text-qblack">
                  Mobile
                </span>
                : {seller?.mobile || "N/A"}
              </li>
              <li className="text-qgray leading-[30px]">
                <span className="text-[15px] font-normal text-qblack">
                  Description
                </span>
                : {seller?.description || "N/A"}
              </li>
            </ul>
          </div>
          <div className="w-full">
            <ul>
              <li className="text-qgray leading-[30px]">
                <span className="text-[15px] font-normal text-qblack">
                  Products
                </span>
                : {products?.length || 0}
              </li>
              <li className="text-qgray leading-[30px]">
                <span className="text-[15px] font-normal text-qblack">
                  Role
                </span>
                : {seller?.role || "N/A"}
              </li>
              <li className="text-qgray leading-[30px]">
                <span className="text-[15px] font-normal text-qblack">
                  City
                </span>
                : {seller?.addresses?.[0]?.city || "N/A"}
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="saller-product w-full mt-[30px]">
        <h1 className="text-[18px] font-medium mb-5">Products from Shop</h1>
        <div className="grid xl:grid-cols-4 lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 xl:gap-[30px] gap-5">
          <DataIteration datas={products} startLength={0} endLength={products.length}>
            {({ datas }) => (
              <div key={datas._id} className="item">
                <ProductCardStyleOne datas={datas} />
              </div>
            )}
          </DataIteration>
        </div>
      </div>
    </div>
  );
}
