import { useState, useEffect } from "react";
import { useSearchParams, useNavigate } from "react-router-dom";
import BreadcrumbCom from "../BreadcrumbCom";
import ProductCardStyleOne from "../Helpers/Cards/ProductCardStyleOne";
import Layout from "../Partials/Layout";
import { productApi, productByNameApi } from "../../api/products/product";

export default function AllProductPage() {
  const [products, setProducts] = useState([]);
  const [totalPages, setTotalPages] = useState(1); // New state
  const [totalProducts, setTotalProducts] = useState(0);
  const [filterToggle, setToggle] = useState(false);
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();

  const categoryName = searchParams.get("categoryName") || null;
  const pageNumber = parseInt(searchParams.get("pageNumber")) || 1;
  const productName = searchParams.get("productName") || null;

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        let fetchedProducts = [];
        let fetchedTotalPages = 1;
        let totalProductsCount = 0;

        if (productName) {
          const res = await productByNameApi(productName, pageNumber);
          fetchedProducts = res?.data?.products || [];
          fetchedTotalPages = res?.data?.totalPages || 1;
          totalProductsCount = res?.data?.totalProducts || 0;
        } else {
          const res = await productApi(categoryName, pageNumber);
          fetchedProducts = res?.data?.products || [];
          fetchedTotalPages = res?.data?.totalPages || 1;
          totalProductsCount = res?.data?.totalProducts || 0;
        }

        const formatted = fetchedProducts.map((product) => ({
          ...product,
          price: parseFloat(product.price?.["$numberDecimal"] || 0),
        }));

        setProducts(formatted);
        setTotalPages(fetchedTotalPages);
        setTotalProducts(totalProductsCount);
      } catch (error) {
        setProducts([]);
      }
    };

    fetchProducts();
  }, [categoryName, pageNumber, productName]);

  const handlePageChange = (page) => {
    const queryParams = new URLSearchParams();

    queryParams.set("pageNumber", page);
    if (categoryName) queryParams.set("categoryName", categoryName);
    if (productName) queryParams.set("productName", productName);

    navigate(`/all-products?${queryParams.toString()}`);
  };

  return (
    <Layout>
      <div className="products-page-wrapper w-full">
        <div className="container-x mx-auto">
          <BreadcrumbCom />
          <div className="w-full lg:flex lg:space-x-[30px]">
            <div className="flex-1">
              <div className="products-sorting w-full bg-white md:h-[70px] flex md:flex-row flex-col md:space-y-0 space-y-5 md:justify-between md:items-center p-[30px] mb-[40px]">
                <div>
                  <p className="font-400 text-[13px]">
                    <span className="text-qgray">Showing</span> 1–
                    {products.length} of {totalProducts} results
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
              <div className="grid xl:grid-cols-4 grid-cols-3 sm:grid-cols-2 grid-cols-1 xl:gap-[30px] gap-5 mb-[40px]">
                {products.map((product) => (
                  <div data-aos="fade-up" key={product._id}>
                    <ProductCardStyleOne datas={product} />
                  </div>
                ))}
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
