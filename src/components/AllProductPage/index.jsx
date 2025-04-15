import { useState, useEffect } from "react";
import { useSearchParams, useNavigate } from "react-router-dom";
import BreadcrumbCom from "../BreadcrumbCom";
import ProductCardStyleOne from "../Helpers/Cards/ProductCardStyleOne";
import DataIteration from "../Helpers/DataIteration";
import Layout from "../Partials/Layout";
import { productApi } from "../../api/products/product";

export default function AllProductPage() {
  const [products, setProducts] = useState([]);
  const [totalPages, setTotalPages] = useState(1); // New state
  const [filterToggle, setToggle] = useState(false);
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();

  const categoryName = searchParams.get("categoryName") || null;
  const pageNumber = parseInt(searchParams.get("pageNumber")) || 1;

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await productApi(categoryName, pageNumber);

        const formattedProducts = res?.data?.products?.map((product) => ({
          ...product,
          price: parseFloat(product.price["$numberDecimal"] || 0),
        }));

        setProducts(formattedProducts || []);
        setTotalPages(res?.data?.totalPages || 1); // Capture total pages
      } catch (error) {
        setProducts([]);
      }
    };

    fetchProducts();
  }, [categoryName, pageNumber]);

  const handlePageChange = (page) => {
    const query = categoryName
      ? `?pageNumber=${page}&categoryName=${categoryName}`
      : `?pageNumber=${page}`;
    navigate(`/all-products${query}`);
  };

  return (
    <Layout>
      <div className="products-page-wrapper w-full">
        <div className="container-x mx-auto">
          <BreadcrumbCom />
          <div className="w-full lg:flex lg:space-x-[30px]">
            <div className="lg:w-[270px]">
              <div className="w-full hidden lg:block h-[295px]">
                <img
                  src={`${
                    import.meta.env.VITE_PUBLIC_URL
                  }/assets/images/bannera-5.png`}
                  alt=""
                  className="w-full h-full object-contain"
                />
              </div>
            </div>

            <div className="flex-1">
              <div className="products-sorting w-full bg-white md:h-[70px] flex md:flex-row flex-col md:space-y-0 space-y-5 md:justify-between md:items-center p-[30px] mb-[40px]">
                <div>
                  <p className="font-400 text-[13px]">
                    <span className="text-qgray">Showing</span> 1–
                    {products.length} of {products.length} results
                  </p>
                </div>
                <div className="flex space-x-3 items-center">
                  <span className="font-400 text-[13px]">Sort by:</span>
                  <div className="flex space-x-3 items-center border-b border-b-qgray">
                    <span className="font-400 text-[13px] text-qgray">
                      Default
                    </span>
                    <span>
                      <svg
                        width="10"
                        height="6"
                        viewBox="0 0 10 6"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M1 1L5 5L9 1" stroke="#9A9A9A" />
                      </svg>
                    </span>
                  </div>
                </div>
                <button
                  onClick={() => setToggle(!filterToggle)}
                  type="button"
                  className="w-10 lg:hidden h-10 rounded flex justify-center items-center border border-qyellow text-qyellow"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z"
                    />
                  </svg>
                </button>
              </div>

              <div className="grid xl:grid-cols-3 sm:grid-cols-2 grid-cols-1 xl:gap-[30px] gap-5 mb-[40px]">
                <DataIteration datas={products} startLength={0} endLength={6}>
                  {({ datas }) => (
                    <div data-aos="fade-up" key={datas._id}>
                      <ProductCardStyleOne datas={datas} />
                    </div>
                  )}
                </DataIteration>
              </div>

              <div className="w-full h-[164px] overflow-hidden mb-[40px]">
                <img
                  src={`${
                    import.meta.env.VITE_PUBLIC_URL
                  }/assets/images/bannera-6.png`}
                  alt=""
                  className="w-full h-full object-contain"
                />
              </div>

              <div className="grid xl:grid-cols-3 sm:grid-cols-2 grid-cols-1 xl:gap-[30px] gap-5 mb-[40px]">
                <DataIteration datas={products} startLength={6} endLength={15}>
                  {({ datas }) => (
                    <div data-aos="fade-up" key={datas._id}>
                      <ProductCardStyleOne datas={datas} />
                    </div>
                  )}
                </DataIteration>
              </div>

              {/* Pagination */}
              <div className="flex justify-center space-x-2 mt-6">
                {[...Array(totalPages)].map((_, i) => {
                  const page = i + 1;
                  return (
                    <button
                      key={page}
                      onClick={() => handlePageChange(page)}
                      className={`w-10 h-10 border rounded ${
                        page === pageNumber
                          ? "bg-qh2-green text-white"
                          : "bg-white text-qblack"
                      } hover:bg-qh2-green hover:text-white transition`}
                    >
                      {page}
                    </button>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
