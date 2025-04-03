import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Arrow from "../../../Helpers/icons/Arrow";
import Selectbox from "../../../Helpers/Selectbox";
import ArabicFlag from "../../../../assets/images/UAE-flag.png";
import EnglishFlag from "../../../../assets/images/united-states.png";

export default function TopBar({ className }) {
  const [selectedCountry, setSelectedCountry] = useState("United State");
  const [isLoggedIn, setIsLoggedIn] = useState(false); // Track login status

  // Determine which flag to show based on selection
  const flagSrc = selectedCountry === "United State" ? EnglishFlag : ArabicFlag;

  // This function is passed as "action" to the Selectbox
  const handleCountryChange = (value) => {
    setSelectedCountry(value);
  };

  // Check if the user is logged in (based on token) when the component mounts
  useEffect(() => {
    const token = localStorage.getItem("token");
    setIsLoggedIn(!!token); // Set the login state based on token presence
  }, []);

  return (
    <div
      className={`w-full bg-white h-10 border-b border-qgray-border ${
        className || ""
      }`}
    >
      <div className="container-x mx-auto h-full">
        <div className="flex justify-between items-center h-full">
          {/* Left side: links */}
          <div className="topbar-nav">
            <ul className="flex space-x-6">
              <li>
                {/* Show "Login" if not logged in, otherwise "Account" */}
                <Link to={isLoggedIn ? "/profile" : "/login"}>
                  <span className="text-xs leading-6 text-qblack font-500">
                    {isLoggedIn ? "Account" : "Login"}
                  </span>
                </Link>
              </li>
              <li>
                <Link to="/tracking-order">
                  <span className="text-xs leading-6 text-qblack font-500">
                    Track Order
                  </span>
                </Link>
              </li>
              <li>
                <Link to="/faq">
                  <span className="text-xs leading-6 text-qblack font-500">
                    Support
                  </span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Right side: country & currency selectors */}
          <div className="topbar-dropdowns sm:block hidden">
            <div className="flex space-x-6">
              {/* Country Select */}
              <div className="country-select flex space-x-1 items-center">
                <div>
                  <img
                    src={flagSrc}
                    width="16"
                    height="16"
                    alt="country flag"
                    className="overflow-hidden rounded-full"
                  />
                </div>
                <Selectbox
                  className="w-fit"
                  datas={["United State", "العربية"]}
                  action={handleCountryChange}
                />
                <div>
                  <Arrow className="fill-current qblack" />
                </div>
              </div>

              {/* Currency Select */}
              <div className="currency-select flex space-x-1 items-center">
                <Selectbox className="w-fit" datas={["USD"]} />
                <Arrow className="fill-current qblack" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
