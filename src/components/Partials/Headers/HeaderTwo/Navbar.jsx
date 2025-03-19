import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Arrow from "../../../Helpers/icons/Arrow";

export default function Navbar({ className }) {
  const [categoryToggle, setToggle] = useState(false);
  const [elementsSize, setSize] = useState("0px");
  // const getItems = document.querySelectorAll(`.categories-list li`).length;
  // if (categoryToggle && getItems > 0) {
  //   setSize(`${40 * getItems}px`);
  // }
  const handler = () => {
    setToggle(!categoryToggle);
  };
  useEffect(() => {
    if (categoryToggle) {
      const getItems = document.querySelectorAll(`.categories-list li`).length;
      if (categoryToggle && getItems > 0) {
        setSize(`${42 * getItems}px`);
      }
    } else {
      setSize(`0px`);
    }
  }, [categoryToggle]);

  return (
    <div
      className={`nav-widget-wrapper w-full bg-qh2-green h-[60px] relative z-30  ${
        className || ""
      }`}
    >
      <div className="container-x mx-auto h-full">
        <div className="w-full h-full relative">
          <div className="w-full h-full flex justify-between items-center">
            <div className="category-and-nav flex xl:space-x-7 space-x-3 items-center">
              <div className="category w-[270px] h-[53px] bg-white px-5 rounded-t-md mt-[6px] relative">
                <button
                  onClick={handler}
                  type="button"
                  className="w-full h-full flex justify-between items-center"
                >
                  <div className="flex space-x-3 items-center">
                    <span className="text-qblack">
                      <svg
                        className="fill-current"
                        width="14"
                        height="9"
                        viewBox="0 0 14 9"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <rect width="14" height="1" />
                        <rect y="8" width="14" height="1" />
                        <rect y="4" width="10" height="1" />
                      </svg>
                    </span>
                    <span className="text-sm font-600 text-qblacktext">
                      All Categories
                    </span>
                  </div>
                  <div>
                    <Arrow
                      width="5.78538"
                      height="1.28564"
                      className="fill-current text-qblacktext"
                    />
                  </div>
                </button>
                {categoryToggle && (
                  <div
                    className="fixed top-0 left-0 w-full h-full -z-10"
                    onClick={handler}
                  ></div>
                )}
                <div
                  className="category-dropdown w-full absolute left-0 top-[53px] overflow-hidden"
                  style={{ height: `${elementsSize} ` }}
                >
                  <ul className="categories-list">
                    <li className="category-item">
                      <a href="#">
                        <div className=" flex justify-between items-center px-5 h-10 bg-white hover:bg-qh2-green transition-all duration-300 ease-in-out cursor-pointer text-qblack hover:text-white">
                          <div className="flex items-center space-x-6">
                            <span>
                              <span>
                                <svg
                                  width="16"
                                  height="16"
                                  viewBox="0 0 24 24"
                                  xmlns="http://www.w3.org/2000/svg"
                                  className="fill-current text-qblack"
                                >
                                  <path
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="1.91"
                                    strokeMiterlimit="10"
                                    d="M1.5,10.09v1a10.49,10.49,0,0,0,6.68,9.77V22.5h7.64V20.82a10.49,10.49,0,0,0,6.68-9.77v-1Z"
                                  />
                                  <path
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="1.91"
                                    strokeMiterlimit="10"
                                    d="M10.09,10.09l7.8-7.8a2.7,2.7,0,0,1,3.82,3.82l-4,4"
                                  />
                                </svg>
                              </span>
                            </span>
                            <span className="text-xs font-400">Herbs</span>
                          </div>
                          <div>
                            <span>
                              <svg
                                className="fill-current"
                                width="6"
                                height="9"
                                viewBox="0 0 6 9"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <rect
                                  x="1.49805"
                                  y="0.818359"
                                  width="5.78538"
                                  height="1.28564"
                                  transform="rotate(45 1.49805 0.818359)"
                                />
                                <rect
                                  x="5.58984"
                                  y="4.90918"
                                  width="5.78538"
                                  height="1.28564"
                                  transform="rotate(135 5.58984 4.90918)"
                                />
                              </svg>
                            </span>
                          </div>
                        </div>
                      </a>
                    </li>
                    <li className="category-item">
                      <a href="#">
                        <div className="flex justify-between items-center px-5 h-10 bg-white hover:bg-qh2-green transition-all duration-300 ease-in-out cursor-pointer text-qblack hover:text-white">
                          <div className="flex items-center space-x-6">
                            <span>
                              <svg
                                className="fill-current"
                                width="19"
                                height="17"
                                viewBox="0 0 473.941 473.941"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M427.936,441.904c-24.758-24.758-39.071-57.177-40.728-91.913c20.303-3.632,35.767-21.408,35.767-42.74
		c0-1.469-0.075-2.953-0.222-4.413l-4.59-45.386c-0.002-0.016-9.179-90.764-9.179-90.764c-0.001-0.012-9.179-90.763-9.179-90.763
		c-0.001-0.012-4.589-45.376-4.589-45.376C393.427,13.112,378.894,0,361.384,0c-17.526,0-32.07,13.134-33.831,30.551l-9.177,90.738
		c-0.003,0.025-9.179,90.762-9.179,90.762c-0.003,0.026-9.182,90.789-9.182,90.789c-0.148,1.462-0.223,2.946-0.223,4.412
		c0,21.331,15.463,39.108,35.767,42.74c-1.657,34.735-15.97,67.155-40.728,91.913c-2.929,2.93-2.929,7.678,0,10.607
		c1.464,1.464,3.384,2.196,5.303,2.196s3.839-0.732,5.303-2.196c27.428-27.428,43.28-63.347,45.105-101.829h3.341v115.759
		c0,4.143,3.358,7.5,7.5,7.5s7.5-3.357,7.5-7.5V350.683h3.34c1.826,38.483,17.677,74.401,45.106,101.829
		c1.464,1.464,3.384,2.196,5.303,2.196s3.839-0.732,5.303-2.196C430.865,449.582,430.865,444.834,427.936,441.904z M343.223,335.683
		c-15.677,0-28.431-12.754-28.431-28.431c0-0.964,0.049-1.942,0.146-2.903l8.497-84.018h38.631c4.142,0,7.5-3.357,7.5-7.5
		s-3.358-7.5-7.5-7.5h-37.114l7.662-75.763h34.317c4.142,0,7.5-3.357,7.5-7.5s-3.358-7.5-7.5-7.5h-32.8l8.344-82.508
		C343.46,22.334,351.588,15,361.384,15c6.739,0,12.689,3.472,16.066,8.806h-2.435c-4.142,0-7.5,3.357-7.5,7.5s3.358,7.5,7.5,7.5
		h5.959l3.073,30.382h-23.621c-4.142,0-7.5,3.357-7.5,7.5s3.358,7.5,7.5,7.5h25.138l7.662,75.763h-31.159
		c-4.142,0-7.5,3.357-7.5,7.5s3.358,7.5,7.5,7.5h32.676l7.662,75.762h-10.338c-4.142,0-7.5,3.357-7.5,7.5s3.358,7.5,7.5,7.5h11.855
		l3.907,38.636c0.097,0.96,0.146,1.937,0.146,2.904c0,15.677-12.754,28.431-28.43,28.431H343.223z"
                                />
                                <path
                                  d="M392.79,303.594c0-4.143-3.358-7.5-7.5-7.5h-47.813c-4.142,0-7.5,3.357-7.5,7.5s3.358,7.5,7.5,7.5h47.813
		C389.433,311.094,392.79,307.736,392.79,303.594z"
                                />
                                <path
                                  d="M342.066,265.712h20c4.142,0,7.5-3.357,7.5-7.5s-3.358-7.5-7.5-7.5h-20c-4.142,0-7.5,3.357-7.5,7.5
		S337.924,265.712,342.066,265.712z"
                                />
                                <path
                                  d="M255.524,153.23c0-23.529-8.556-45.815-24.186-63.232c1.378-5.643,2.075-11.444,2.075-17.307
		C233.414,32.609,200.804,0,160.722,0C120.64,0,88.03,32.609,88.03,72.691c0,5.863,0.697,11.666,2.075,17.307
		c-15.63,17.418-24.186,39.703-24.186,63.232c0,3.743,0.221,7.501,0.658,11.211c-14.908,20.183-22.769,44.083-22.769,69.329
		c0,61.946,48.43,112.785,109.413,116.666V462.5c0,4.143,3.358,7.5,7.5,7.5s7.5-3.357,7.5-7.5V350.436
		c60.984-3.881,109.413-54.72,109.413-116.666c0-25.247-7.86-49.146-22.768-69.329C255.303,160.732,255.524,156.975,255.524,153.23z
		 M160.722,15c31.812,0,57.692,25.88,57.692,57.691c0,5.245-0.706,10.424-2.09,15.424l-48.102,48.1V72.691
		c0-4.143-3.358-7.5-7.5-7.5s-7.5,3.357-7.5,7.5v63.526l-6.9-6.9c-2.929-2.928-7.678-2.928-10.606,0
		c-2.929,2.93-2.929,7.678,0,10.607l17.507,17.506v77.103l-71.701-71.539c-0.393-3.228-0.601-6.501-0.601-9.765
		c0-18.496,6.288-36.077,17.837-50.264l15.745,15.746c1.464,1.464,3.384,2.196,5.303,2.196c1.919,0,3.839-0.732,5.303-2.196
		c2.929-2.93,2.929-7.678,0-10.607L105.12,88.116c-1.384-4.999-2.09-10.178-2.09-15.424C103.03,40.88,128.911,15,160.722,15z
		 M75.371,178.049l77.851,77.674v79.683c-52.706-3.852-94.413-47.963-94.413-101.636C58.809,213.695,64.509,194.599,75.371,178.049z
		 M168.222,255.916l45.396-45.396c2.929-2.929,2.929-7.676,0.001-10.606c-2.93-2.929-7.679-2.929-10.608-0.001l-34.789,34.79
		v-77.273l54.466-54.463c11.548,14.186,17.837,31.768,17.837,50.265c0,3.266-0.208,6.541-0.601,9.77l-15.699,15.699
		c-2.929,2.93-2.929,7.678,0,10.606c1.465,1.465,3.384,2.197,5.303,2.197s3.839-0.732,5.303-2.196l11.249-11.248
		c10.858,16.547,16.556,35.641,16.556,55.712c0,53.673-41.707,97.784-94.413,101.636V255.916z"
                                />
                              </svg>
                            </span>
                            <span className="text-xs font-400">Vegetables</span>
                          </div>
                          <div>
                            <span>
                              <svg
                                className="fill-current"
                                width="6"
                                height="9"
                                viewBox="0 0 6 9"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <rect
                                  x="1.49805"
                                  y="0.818359"
                                  width="5.78538"
                                  height="1.28564"
                                  transform="rotate(45 1.49805 0.818359)"
                                />
                                <rect
                                  x="5.58984"
                                  y="4.90918"
                                  width="5.78538"
                                  height="1.28564"
                                  transform="rotate(135 5.58984 4.90918)"
                                />
                              </svg>
                            </span>
                          </div>
                        </div>
                      </a>
                    </li>
                    <li className="category-item">
                      <a href="#">
                        <div className=" flex justify-between items-center px-5 h-10 bg-white hover:bg-qh2-green transition-all duration-300 ease-in-out cursor-pointer text-qblack hover:text-white">
                          <div className="flex items-center space-x-6">
                            <span>
                              <svg
                                className="fill-current"
                                width="18"
                                height="14"
                                viewBox="0 0 512.001 512.001"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M505.469,73.457l-48.808-48.81c-4.182-4.182-9.854-6.533-15.769-6.533s-11.588,2.349-15.77,6.533l-48.808,48.81
			c-3.793,3.793-6.093,8.826-6.477,14.174c-3.076,42.907-26.335,95.191-63.514,145.665c-12.143-15.715-26.97-29.285-43.911-40.024
			c-21.022-13.326-44.586-21.796-69.13-25.005V70.165c0-7.113-3.342-13.433-8.528-17.517c-11.689-15.446-42.44-49.398-86.959-49.4
			C52.696,3.249,13.353,50.798,9.016,56.22C3.192,63.5,2.511,73.633,7.308,81.626c1.357,2.263,33.909,55.432,90.489,55.432
			c19.849,0,36.967-6.407,50.882-14.752v45.94C64.898,179.209,0,251.053,0,337.774c0,37.839,12.111,73.675,35.018,103.672
			c0.057,0.079,0.113,0.156,0.171,0.233c0.034,0.046,0.067,0.095,0.103,0.141c0.043,0.057,0.095,0.104,0.14,0.159
			c0.445,0.568,0.919,1.115,1.423,1.643c0.095,0.098,0.184,0.204,0.281,0.299c0.036,0.037,0.07,0.079,0.106,0.114l48.945,48.762
			c2.762,2.753,6.2,4.732,9.966,5.742c25.283,6.778,51.404,10.213,77.643,10.213c79.821,0,154.878-31.089,211.32-87.53
			c37.788-37.788,64.776-84.974,78.047-136.457c11.789-45.734,12.571-93.807,2.371-139.834l39.935-39.937
			C514.178,96.286,514.178,82.166,505.469,73.457z M97.796,92.455c-18.212,0-32.947-11.482-42.067-21.056
			c11.995-11.332,28.725-23.548,42.066-23.548c19.046,0,34.887,13.054,44.434,23.369C132.612,80.7,116.848,92.455,97.796,92.455z
			 M63.703,404.586c-12.516-19.991-19.099-42.852-19.099-66.812c0-69.684,56.693-126.377,126.377-126.377
			c43.546,0,83.047,21.831,106.197,57.817c-6.835,7.688-13.956,15.271-21.379,22.694C194.161,353.545,121.86,395.711,63.703,404.586
			z M353.574,389.686c-48.022,48.02-111.869,74.466-179.781,74.466c-20.388,0-40.692-2.437-60.439-7.247l-14.468-14.413
			c61.207-17.132,128.86-59.454,188.45-119.044c59.596-59.596,101.889-127.241,119.001-188.422l14.419,14.419
			C441.703,235.439,416.257,327.004,353.574,389.686z M440.89,106.496l-17.269-17.269l17.269-17.271l17.269,17.271L440.89,106.496z"
                                />
                              </svg>
                            </span>
                            <span className="text-xs font-400">Fruits</span>
                          </div>
                          <div>
                            <span>
                              <svg
                                className="fill-current"
                                width="6"
                                height="9"
                                viewBox="0 0 6 9"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <rect
                                  x="1.49805"
                                  y="0.818359"
                                  width="5.78538"
                                  height="1.28564"
                                  transform="rotate(45 1.49805 0.818359)"
                                />
                                <rect
                                  x="5.58984"
                                  y="4.90918"
                                  width="5.78538"
                                  height="1.28564"
                                  transform="rotate(135 5.58984 4.90918)"
                                />
                              </svg>
                            </span>
                          </div>
                        </div>
                      </a>
                    </li>
                    <li className="category-item">
                      <a href="#">
                        <div className="flex justify-between items-center px-5 h-10 bg-white hover:bg-qh2-green transition-all duration-300 ease-in-out cursor-pointer text-qblack hover:text-white">
                          <div className="flex items-center space-x-6">
                            <span>
                              <svg
                                className="fill-current"
                                width="20"
                                height="16"
                                viewBox="0 0 24 24"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M8 3C8 1.89543 8.89543 1 10 1H14C15.1046 1 16 1.89543 16 3V5.02297L18.8108 3.89864C19.7457 3.52467 20.8129 3.90408 21.3019 4.78431L22.8508 7.57234C23.4158 8.58931 22.9969 9.87203 21.9406 10.3595L18.3863 12L21.9406 13.6405C22.9969 14.128 23.4158 15.4107 22.8508 16.4277L21.3019 19.2157C20.8129 20.0959 19.7457 20.4753 18.8108 20.1014L16 18.977V21C16 22.1046 15.1046 23 14 23H10C8.89543 23 8 22.1046 8 21V18.977L5.18918 20.1014C4.25426 20.4753 3.1871 20.0959 2.69809 19.2157L1.14918 16.4277C0.584198 15.4107 1.00309 14.128 2.05938 13.6405L5.61369 12L2.05938 10.3595C1.00309 9.87203 0.584197 8.58931 1.14918 7.57234L2.69809 4.78431C3.1871 3.90409 4.25426 3.52467 5.18918 3.89864L8 5.02297V3ZM14 3H10V6.5C10 6.83182 9.8354 7.14204 9.56062 7.32807C9.28585 7.5141 8.9367 7.55171 8.6286 7.42848L4.4464 5.7556L2.89749 8.54363L8.41905 11.092C8.7732 11.2555 9 11.6099 9 12C9 12.3901 8.7732 12.7445 8.41905 12.908L2.89749 15.4564L4.4464 18.2444L8.6286 16.5715C8.9367 16.4483 9.28585 16.4859 9.56062 16.6719C9.8354 16.858 10 17.1682 10 17.5V21H14V17.5C14 17.1682 14.1646 16.858 14.4394 16.6719C14.7141 16.4859 15.0633 16.4483 15.3714 16.5715L19.5536 18.2444L21.1025 15.4564L15.5809 12.908C15.2268 12.7445 15 12.3901 15 12C15 11.6099 15.2268 11.2555 15.5809 11.092L21.1025 8.54363L19.5536 5.7556L15.3714 7.42848C15.0633 7.55171 14.7141 7.5141 14.4394 7.32807C14.1646 7.14204 14 6.83182 14 6.5V3Z"
                                  fill="#0F0F0F"
                                />
                              </svg>
                            </span>
                            <span className="text-xs font-400">Medicines</span>
                          </div>
                          <div>
                            <span>
                              <svg
                                className="fill-current"
                                width="6"
                                height="9"
                                viewBox="0 0 6 9"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <rect
                                  x="1.49805"
                                  y="0.818359"
                                  width="5.78538"
                                  height="1.28564"
                                  transform="rotate(45 1.49805 0.818359)"
                                />
                                <rect
                                  x="5.58984"
                                  y="4.90918"
                                  width="5.78538"
                                  height="1.28564"
                                  transform="rotate(135 5.58984 4.90918)"
                                />
                              </svg>
                            </span>
                          </div>
                        </div>
                      </a>
                    </li>
                    <li className="category-item">
                      <a href="#">
                        <div className=" flex justify-between items-center px-5 h-10 bg-white hover:bg-qh2-green transition-all duration-300 ease-in-out cursor-pointer text-qblack hover:text-white">
                          <div className="flex items-center space-x-6">
                            <span>
                              <svg
                                className="fill-current"
                                width="17"
                                height="16"
                                viewBox="0 0 403.994 403.994"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M365.551,334c-1.5,3.335-4.78,5.312-8.214,5.312c-1.234,0-2.487-0.255-3.686-0.793l-7.47-3.358
	c-4.533-2.039-6.557-7.366-4.519-11.899c2.039-4.535,7.367-6.553,11.899-4.519l7.47,3.358
	C365.566,324.14,367.59,329.467,365.551,334z M107.171,82.532c-16.369,0-29.687,14.033-29.687,31.281c0,4.971,4.029,9,9,9
	s9-4.029,9-9c0-7.323,5.243-13.281,11.687-13.281c4.971,0,9-4.029,9-9S112.141,82.532,107.171,82.532z M351.886,268.727
	c1.062,0,2.142-0.189,3.192-0.589l7.658-2.907c4.646-1.764,6.984-6.961,5.22-11.608c-1.765-4.646-6.959-6.987-11.608-5.22
	l-7.658,2.907c-4.646,1.764-6.983,6.961-5.22,11.608C344.836,266.514,348.256,268.727,351.886,268.727z M53.457,301.053v26.382
	c0,14.547,11.834,26.382,26.381,26.382h103.415c4.971,0,9,4.029,9,9s-4.029,9-9,9H79.838c-24.472,0-44.381-19.909-44.381-44.382
	v-35.004c-0.005-0.125-0.008-0.251-0.008-0.378s0.002-0.253,0.008-0.378V150.904c-0.005-0.125-0.008-0.251-0.008-0.378
	s0.002-0.253,0.008-0.378V89.761c0-21.39,15.21-39.293,35.381-43.465V9c0-4.971,4.029-9,9-9h141.528c4.971,0,9,4.029,9,9v37.296
	c20.171,4.172,35.381,22.075,35.381,43.465v122.071c0,4.971-4.029,9-9,9c-4.971,0-9-4.029-9-9v-52.306H53.457v123.526h129.796
	c4.971,0,9,4.029,9,9s-4.029,9-9,9H53.457z M88.838,45.379h123.528V18H88.838V45.379z M53.457,141.526h194.29V89.761
	c0-14.547-11.834-26.382-26.381-26.382H79.838c-14.547,0-26.381,11.835-26.381,26.382V141.526z M77.486,185.908v70.763
	c0,4.971,4.029,9,9,9s9-4.029,9-9v-70.763c0-4.971-4.029-9-9-9S77.486,180.938,77.486,185.908z M303.719,288.849v70.767
	c0,24.471-19.909,44.379-44.38,44.379c-24.475,0-44.383-19.908-44.383-44.379v-35.198c-0.001-0.063-0.002-0.124-0.002-0.187
	s0.001-0.124,0.002-0.187v-35.195c0-24.472,19.908-44.381,44.379-44.381h0.004C283.81,244.468,303.719,264.377,303.719,288.849z
	 M285.719,288.849c0-14.547-11.834-26.381-26.38-26.381h-0.004c-14.545,0-26.379,11.834-26.379,26.381v26.382h26.381
	c4.971,0,9,4.029,9,9s-4.029,9-9,9h-26.381v26.385c0,14.545,11.834,26.379,26.379,26.379c14.55,0,26.384-11.834,26.384-26.379
	V288.849z M312.818,195.085c-4.531-2.038-9.86-0.016-11.899,4.519l-3.358,7.471c-2.038,4.534-0.015,9.861,4.519,11.899
	c1.198,0.538,2.451,0.793,3.686,0.793c3.434,0,6.714-1.977,8.214-5.312l3.358-7.471C319.375,202.45,317.351,197.123,312.818,195.085
	z"
                                />
                              </svg>
                            </span>
                            <span className="text-xs font-400">Vitamins</span>
                          </div>
                          <div>
                            <span>
                              <svg
                                className="fill-current"
                                width="6"
                                height="9"
                                viewBox="0 0 6 9"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <rect
                                  x="1.49805"
                                  y="0.818359"
                                  width="5.78538"
                                  height="1.28564"
                                  transform="rotate(45 1.49805 0.818359)"
                                />
                                <rect
                                  x="5.58984"
                                  y="4.90918"
                                  width="5.78538"
                                  height="1.28564"
                                  transform="rotate(135 5.58984 4.90918)"
                                />
                              </svg>
                            </span>
                          </div>
                        </div>
                      </a>
                    </li>
                    <li className="category-item">
                      <a href="#">
                        <div className="flex justify-between items-center px-5 h-10 bg-white hover:bg-qh2-green transition-all duration-300 ease-in-out cursor-pointer text-qblack hover:text-white">
                          <div className="flex items-center space-x-6">
                            <span>
                              <svg
                                className="fill-current"
                                width="17"
                                height="18"
                                viewBox="0 0 24 24"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
  <path fill="none" stroke="#000000"  d="M2,3.99079514 C2,2.89130934 2.89821238,2 3.99079514,2 L20.0092049,2 C21.1086907,2 22,2.89821238 22,3.99079514 L22,20.0092049 C22,21.1086907 21.1017876,22 20.0092049,22 L3.99079514,22 C2.89130934,22 2,21.1017876 2,20.0092049 L2,3.99079514 Z M12,15 L12,14 C12,13 12,12.5 13,12 C14,11.5 15,11 15,9.5 C15,8.5 14,7 12,7 C10,7 9,8.26413718 9,10 M12,16 L12,18"/>
                              </svg>
                            </span>
                            <span className="text-xs font-400">Others </span>
                          </div>
                          <div>
                            <span>
                              <svg
                                className="fill-current"
                                width="6"
                                height="9"
                                viewBox="0 0 6 9"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <rect
                                  x="1.49805"
                                  y="0.818359"
                                  width="5.78538"
                                  height="1.28564"
                                  transform="rotate(45 1.49805 0.818359)"
                                />
                                <rect
                                  x="5.58984"
                                  y="4.90918"
                                  width="5.78538"
                                  height="1.28564"
                                  transform="rotate(135 5.58984 4.90918)"
                                />
                              </svg>
                            </span>
                          </div>
                        </div>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="nav">
                <ul className="nav-wrapper flex xl:space-x-10 space-x-5">
                  <li className="relative">
                    <Link to="/">
                      <span className="flex items-center text-sm text-white font-600 cursor-pointer ">
                        <span>Homepage</span>
                      </span>
                    </Link>
                  </li>
                  <li>
                    <Link to="/about">
                      <span className="flex items-center text-sm text-white font-600 cursor-pointer ">
                        <span>About</span>
                      </span>
                    </Link>
                  </li>
                  <li>
                    <Link to="/blogs">
                      <span className="flex items-center text-sm text-white font-600 cursor-pointer ">
                        <span>Blog</span>
                      </span>
                    </Link>
                  </li>
                  <li>
                    <Link to="/contact">
                      <span className="flex items-center text-sm text-white font-600 cursor-pointer ">
                        <span>Contact</span>
                      </span>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="become-seller-btn  w-[161px] h-[40px]">
              <Link to="/become-saller">
                <div className="yellow-btn flex justify-center items-center cursor-pointer">
                  <div className="flex space-x-2 items-center">
                    <span className="text-sm font-600">Become a Seller</span>
                    <span>
                      <svg
                        width="6"
                        height="10"
                        viewBox="0 0 6 10"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <rect
                          x="1.08984"
                          width="6.94106"
                          height="1.54246"
                          transform="rotate(45 1.08984 0)"
                        />
                        <rect
                          x="6"
                          y="4.9082"
                          width="6.94106"
                          height="1.54246"
                          transform="rotate(135 6 4.9082)"
                        />
                      </svg>
                    </span>
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
