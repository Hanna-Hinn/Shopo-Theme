import { useRef } from "react";
import { Link } from "react-router-dom";
import Star from "../Helpers/icons/Star";
import PageTitle from "../Helpers/PageTitle";
import SimpleSlider from "../Helpers/SliderCom";
import Layout from "../Partials/Layout";

export default function About() {
  const settings = {
    slidesToShow: 3,
    slidesToScroll: 3,
    autoplay: true,
    centerMode: true,
    infinite: true,
    centerPadding: "60px",
    dots: false,
    responsive: [
      {
        breakpoint: 1026,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          centerMode: false,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerMode: false,
        },
      },
    ],
  };

  const slider = useRef(null);
  const prev = () => {
    slider.current.slickPrev();
  };
  const next = () => {
    slider.current.slickNext();
  };

  return (
    <Layout childrenClasses="pt-0 pb-0">
      {/* Page Title & Breadcrumb */}
      <div className="about-page-wrapper w-full">
        <div className="title-area w-full">
          <PageTitle
            title="About HealthPlus"
            breadcrumb={[
              { name: "Home", path: "/" },
              { name: "About HealthPlus", path: "/about" },
            ]}
          />
        </div>
      </div>

      {/* HealthPlus Introduction */}
      <div className="aboutus-wrapper w-full">
        <div className="container-x mx-auto">
          <div className="w-full min-h-[665px] lg:flex lg:space-x-12 items-center pb-10 lg:pb-0">
            <div className="md:w-[570px] w-full md:h-[560px] h-auto rounded overflow-hidden my-5 lg:my-0">
              <img
                src={`${
                  import.meta.env.VITE_PUBLIC_URL
                }/assets/images/about-banner.png`}
                alt="HealthPlus Banner"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="content flex-1">
              <h1 className="text-[18px] font-medium text-qblack mb-2.5">
                HealthPlus: Revolutionizing Wellness in Palestine
              </h1>
              <p className="text-[15px] text-qgraytwo leading-7 mb-2.5">
                In an era where e-commerce and digital services are reshaping
                how people access products, HealthPlus stands out as a dedicated
                platform for wellness, rehabilitation, and recovery herbs and
                supplements. We are bridging the gap for customers in Palestine,
                making it easier than ever to find quality health products
                online.
              </p>
              <ul className="text-[15px] text-qgraytwo leading-7 list-disc ml-5 mb-5">
                <li>Tailored shopping experience for wellness products</li>
                <li>
                  Easy access to rehabilitation and recovery herbs and
                  supplements
                </li>
                <li>
                  Detailed product insights to help you make informed decisions
                </li>
                <li>
                  Overcoming local market challenges by providing a dedicated
                  platform
                </li>
              </ul>

              <Link to="/contact">
                <div className="w-[121px] h-10">
                  <span className="yellow-btn">Contact Us</span>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* HealthPlus Service Highlights */}
      <div className="container-x mx-auto my-[60px]">
        <div
          data-aos="fade-down"
          className="best-services w-full bg-qyellow flex flex-col space-y-10 lg:space-y-0 lg:flex-row lg:justify-between lg:items-center lg:h-[110px] px-10 lg:py-0 py-10"
        >
          <div className="item">
            <div className="flex space-x-5 items-center">
              <div>
                <span>
                  <svg
                    width="36"
                    height="36"
                    viewBox="0 0 36 36"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M1 1H5.63636V24.1818H35"
                      stroke="#222222"
                      strokeWidth="2"
                      strokeMiterlimit="10"
                      strokeLinecap="square"
                    />
                    <path
                      d="M8.72763 35.0002C10.4347 35.0002 11.8185 33.6163 11.8185 31.9093C11.8185 30.2022 10.4347 28.8184 8.72763 28.8184C7.02057 28.8184 5.63672 30.2022 5.63672 31.9093C5.63672 33.6163 7.02057 35.0002 8.72763 35.0002Z"
                      stroke="#222222"
                      strokeWidth="2"
                      strokeMiterlimit="10"
                      strokeLinecap="square"
                    />
                    <path
                      d="M31.9073 35.0002C33.6144 35.0002 34.9982 33.6163 34.9982 31.9093C34.9982 30.2022 33.6144 28.8184 31.9073 28.8184C30.2003 28.8184 28.8164 30.2022 28.8164 31.9093C28.8164 33.6163 30.2003 35.0002 31.9073 35.0002Z"
                      stroke="#222222"
                      strokeWidth="2"
                      strokeMiterlimit="10"
                      strokeLinecap="square"
                    />
                    <path
                      d="M34.9982 1H11.8164V18H34.9982V1Z"
                      stroke="#222222"
                      strokeWidth="2"
                      strokeMiterlimit="10"
                      strokeLinecap="square"
                    />
                    <path
                      d="M11.8164 7.18164H34.9982"
                      stroke="#222222"
                      strokeWidth="2"
                      strokeMiterlimit="10"
                      strokeLinecap="square"
                    />
                  </svg>
                </span>
              </div>
              <div>
                <p className="text-black text-[15px] font-700 tracking-wide mb-1 uppercase">
                  Free Shipping
                </p>
                <p className="text-sm text-qblack">On orders over $100</p>
              </div>
            </div>
          </div>
          <div className="item">
            <div className="flex space-x-5 items-center">
              <div>
                <span>
                  <svg
                    width="32"
                    height="34"
                    viewBox="0 0 32 34"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M31 17.4502C31 25.7002 24.25 32.4502 16 32.4502C7.75 32.4502 1 25.7002 1 17.4502C1 9.2002 7.75 2.4502 16 2.4502C21.85 2.4502 26.95 5.7502 29.35 10.7002"
                      stroke="#222222"
                      strokeWidth="2"
                      strokeMiterlimit="10"
                    />
                    <path
                      d="M30.7 2L29.5 10.85L20.5 9.65"
                      stroke="#222222"
                      strokeWidth="2"
                      strokeMiterlimit="10"
                      strokeLinecap="square"
                    />
                  </svg>
                </span>
              </div>
              <div>
                <p className="text-black text-[15px] font-700 tracking-wide mb-1 uppercase">
                  Free Return
                </p>
                <p className="text-sm text-qblack">Return within 30 days</p>
              </div>
            </div>
          </div>
          <div className="item">
            <div className="flex space-x-5 items-center">
              <div>
                <span>
                  <svg
                    width="32"
                    height="38"
                    viewBox="0 0 32 38"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M22.6654 18.667H9.33203V27.0003H22.6654V18.667Z"
                      stroke="#222222"
                      strokeWidth="2"
                      strokeMiterlimit="10"
                      strokeLinecap="square"
                    />
                    <path
                      d="M12.668 18.6663V13.6663C12.668 11.833 14.168 10.333 16.0013 10.333C17.8346 10.333 19.3346 11.833 19.3346 13.6663V18.6663"
                      stroke="#222222"
                      strokeWidth="2"
                      strokeMiterlimit="10"
                      strokeLinecap="square"
                    />
                    <path
                      d="M31 22C31 30.3333 24.3333 37 16 37C7.66667 37 1 30.3333 1 22V5.33333L16 2L31 5.33333V22Z"
                      stroke="#222222"
                      strokeWidth="2"
                      strokeMiterlimit="10"
                      strokeLinecap="square"
                    />
                  </svg>
                </span>
              </div>
              <div>
                <p className="text-black text-[15px] font-700 tracking-wide mb-1 uppercase">
                  Secure Payment
                </p>
                <p className="text-sm text-qblack">
                  100% Secure Online Payment
                </p>
              </div>
            </div>
          </div>
          <div className="item">
            <div className="flex space-x-5 items-center">
              <div>
                <span>
                  <svg
                    width="32"
                    height="35"
                    viewBox="0 0 32 35"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M7 13H5.5C2.95 13 1 11.05 1 8.5V1H7"
                      stroke="#222222"
                      strokeWidth="2"
                      strokeMiterlimit="10"
                    />
                    <path
                      d="M25 13H26.5C29.05 13 31 11.05 31 8.5V1H25"
                      stroke="#222222"
                      strokeWidth="2"
                      strokeMiterlimit="10"
                    />
                    <path
                      d="M16 28V22"
                      stroke="#222222"
                      strokeWidth="2"
                      strokeMiterlimit="10"
                    />
                    <path
                      d="M16 22C11.05 22 7 17.95 7 13V1H25V13C25 17.95 20.95 22 16 22Z"
                      stroke="#222222"
                      strokeWidth="2"
                      strokeMiterlimit="10"
                      strokeLinecap="square"
                    />
                    <path
                      d="M25 34H7C7 30.7 9.7 28 13 28H19C22.3 28 25 30.7 25 34Z"
                      stroke="#222222"
                      strokeWidth="2"
                      strokeMiterlimit="10"
                      strokeLinecap="square"
                    />
                  </svg>
                </span>
              </div>
              <div>
                <p className="text-black text-[15px] font-700 tracking-wide mb-1 uppercase">
                  Best Quality
                </p>
                <p className="text-sm text-qblack">
                  Original products guaranteed
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
