import { useState } from "react";
import { Link } from "react-router-dom";
import Arrow from "../../../Helpers/icons/Arrow";
import Selectbox from "../../../Helpers/Selectbox";
import ArabicFlag from "../../../../assets/images/UAE-flag.png";
import EnglishFlag from "../../../../assets/images/united-states.png";

export default function TopBar({ className }) {
  // Track which country is selected.
  const [selectedCountry, setSelectedCountry] = useState("United State");

  // Determine which flag to display.
  const flagSrc = selectedCountry === "United State" ? EnglishFlag : ArabicFlag;

  // Handle the change from the Selectbox.
  const handleCountryChange = (value) => {
    setSelectedCountry(value);
  };

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
                <Link to="/profile">
                  <span className="text-xs leading-6 text-qblack font-500">
                    Account
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
                  value={selectedCountry} // Pass the current value
                  onChange={handleCountryChange} // Handle changes
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
