import { useEffect, useRef, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import BreadcrumbCom from "../BreadcrumbCom";
import ProductCardStyleOne from "../Helpers/Cards/ProductCardStyleOne";
import DataIteration from "../Helpers/DataIteration";
import InputCom from "../Helpers/InputCom";
import Layout from "../Partials/Layout";
import ProductView from "./ProductView";
import Reviews from "./Reviews";
import SallerInfo from "./SallerInfo";
import { getProductByIdApi } from "../../api/products/product";
import { enqueueSnackbar } from "notistack";

export default function SingleProductPage() {
  const { id } = useParams();
  const [tab, setTab] = useState("des");
  const [product, setProduct] = useState(null);
  const [relatedProducts, setRelatedProducts] = useState([]);
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [reviewLoading, setLoading] = useState(false);
  const reviewElement = useRef(null);
  const [report, setReport] = useState(false);
  const [comments, setComments] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    async function fetchProduct() {
      try {
        const res = await getProductByIdApi(id);
        setProduct(res.data.product);
        setRelatedProducts(res.data.relatedProducts || []);
      } catch (error) {
        enqueueSnackbar("Something went wrong", { variant: "error" });
        navigate("/");
      }
    }
    fetchProduct();
  }, [id]);

  const reviewAction = () => {
    setLoading(true);
    setTimeout(() => {
      if (name && message && rating) {
        setComments((prev) => [
          {
            id: Math.random(),
            author: name,
            comments: message,
            review: rating,
          },
          ...prev,
        ]);
        setLoading(false);
        setName("");
        setEmail("");
        setPhone("");
        setMessage("");
        setRating(0);
        setHover(0);
        window.scrollTo({
          top: -reviewElement.current.getBoundingClientRect().top,
          left: 0,
          behavior: "smooth",
        });
      } else {
        setLoading(false);
      }
    }, 2000);
  };

  if (!product) {
    return (
      <Layout>
        <div className="w-full text-center py-20">Loading product...</div>
      </Layout>
    );
  }

  return (
    <Layout childrenClasses="pt-0 pb-0">
      <div className="single-product-wrapper w-full">
        <div className="product-view-main-wrapper bg-white pt-[30px] w-full">
          <div className="breadcrumb-wrapper w-full">
            <div className="container-x mx-auto">
              <BreadcrumbCom
                paths={[
                  { name: "home", path: "/" },
                  { name: product.title, path: `/product/${product._id}` },
                ]}
              />
            </div>
          </div>
          <div className="w-full bg-white pb-[60px]">
            <div className="container-x mx-auto">
              <ProductView
                product={product}
                reportHandler={() => setReport(!report)}
              />
            </div>
          </div>
        </div>

        <div
          className="product-des-wrapper w-full relative pb-[60px]"
          ref={reviewElement}
        >
          <div className="tab-buttons w-full mb-10 mt-5 sm:mt-0">
            <div className="container-x mx-auto">
              <ul className="flex space-x-12">
                {["des", "review", "info"].map((t) => (
                  <li key={t}>
                    <span
                      onClick={() => setTab(t)}
                      className={`py-[15px] sm:text-[15px] text-sm sm:block border-b font-medium cursor-pointer ${
                        tab === t
                          ? "border-qyellow text-qblack"
                          : "border-transparent text-qgray"
                      }`}
                    >
                      {t === "des"
                        ? "Description"
                        : t === "review"
                        ? "Reviews"
                        : "Seller Info"}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="w-full h-[1px] bg-[#E8E8E8] absolute left-0 sm:top-[50px] top-[36px] -z-10"></div>
          </div>

          <div className="tab-contents w-full min-h-[400px]">
            <div className="container-x mx-auto">
              {tab === "des" && (
                <div data-aos="fade-up" className="w-full tab-content-item">
                  <h6 className="text-[18px] font-medium text-qblack mb-2">
                    Description
                  </h6>
                  <p className="text-[15px] text-qgray text-normal mb-10">
                    {product.description}
                  </p>
                  {product.features && (
                    <div>
                      <h6 className="text-[18px] text-medium mb-4">
                        Features:
                      </h6>
                      <ul className="list-disc ml-[15px]">
                        {product.features.map((f, idx) => (
                          <li
                            key={idx}
                            className="font-normal text-qgray leading-9"
                          >
                            {f}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              )}
              {tab === "review" && (
                <div data-aos="fade-up" className="w-full tab-content-item">
                  <h6 className="text-[18px] font-medium text-qblack mb-2">
                    Reviews
                  </h6>
                  <Reviews
                    ratingDetails={product?.ratingDetails?.[0]}
                    reviewLoading={reviewLoading}
                    reviewAction={reviewAction}
                    comments={comments.slice(0, 2)}
                    name={name}
                    nameHandler={(e) => setName(e.target.value)}
                    email={email}
                    emailHandler={(e) => setEmail(e.target.value)}
                    phone={phone}
                    phoneHandler={(e) => setPhone(e.target.value)}
                    message={message}
                    messageHandler={(e) => setMessage(e.target.value)}
                    rating={rating}
                    ratingHandler={setRating}
                    hoverRating={hover}
                    hoverHandler={setHover}
                  />
                </div>
              )}
              {tab === "info" && (
                <SallerInfo
                  seller={product?.ownerDetails?.[0]}
                  products={relatedProducts}
                />
              )}
            </div>
          </div>
        </div>

        {relatedProducts.length > 0 && (
          <div className="related-product w-full bg-white">
            <div className="container-x mx-auto">
              <div className="w-full py-[60px]">
                <h1 className="sm:text-3xl text-xl font-600 text-qblacktext leading-none mb-[30px]">
                  Related Product
                </h1>
                <div className="grid xl:grid-cols-4 lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 xl:gap-[30px] gap-5">
                  {relatedProducts.map((p) => (
                    <div key={p._id} className="item">
                      <ProductCardStyleOne datas={p} />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}

        {report && (
          <div className="w-full h-full flex fixed left-0 top-0 justify-center z-50 items-center">
            <div
              onClick={() => setReport(!report)}
              className="w-full h-full fixed left-0 right-0 bg-black  bg-opacity-25"
            ></div>
            <div
              data-aos="fade-up"
              className="sm:w-[548px] sm:h-[509px] w-full h-full bg-white relative py-[40px] px-[38px]"
              style={{ zIndex: "999" }}
            >
              <div className="title-bar flex items-center justify-between mb-3">
                <h6 className="text-2xl font-medium">Report Products</h6>
                <span
                  className="cursor-pointer"
                  onClick={() => setReport(!report)}
                >
                  <svg width="54" height="54" viewBox="0 0 54 54" fill="none">
                    <path
                      d="M26.9399 54C12.0678 53.9832 -0.0210736 41.827 2.75822e-05 26.9125C0.0211287 12.0507 12.1965 -0.0315946 27.115 6.20658e-05C41.9703 0.0317188 54.0401 12.2153 54 27.1404C53.9599 41.9452 41.7972 54.0191 26.9399 54Z"
                      fill="#F34336"
                    />
                  </svg>
                </span>
              </div>

              <div className="inputs w-full">
                <div className="w-full mb-5">
                  <InputCom
                    label="Enter Report Title*"
                    placeholder="Reports Headline here"
                    type="text"
                    name="reportTitle"
                    inputClasses="h-[50px]"
                    labelClasses="text-[13px] font-600 leading-[24px] text-qblack"
                  />
                </div>
                <div className="w-full mb-[40px]">
                  <h6 className="input-label text-[13px] font-600 leading-[24px] text-qblack block mb-2">
                    Enter Report Note*
                  </h6>
                  <textarea
                    cols="30"
                    rows="6"
                    className="w-full focus:ring-0 focus:outline-none py-3 px-4 border border-qgray-border placeholder:text-sm text-sm"
                    placeholder="Type Here"
                  ></textarea>
                </div>
                <button type="button" className="w-full h-[50px] black-btn">
                  Submit Report
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </Layout>
  );
}
