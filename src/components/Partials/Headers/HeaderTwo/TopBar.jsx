import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Arrow from "../../../Helpers/icons/Arrow";
import Selectbox from "../../../Helpers/Selectbox";
import ArabicFlag from "../../../../assets/images/UAE-flag.png";
import EnglishFlag from "../../../../assets/images/united-states.png";
import { ConvertUsdToNisApi } from "../../../../api/ratings/rate"

export default function TopBar({ className }) {
  const [selectedCountry, setSelectedCountry] = useState("United State");
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [selectedCurrency, setSelectedCurrency] = useState("USD");

  const flagSrc = selectedCountry === "United State" ? EnglishFlag : ArabicFlag;

  const handleCountryChange = (value) => {
    setSelectedCountry(value);
  };
  const handleCurrencyChange = async (value) => {
    setSelectedCurrency(value);
    localStorage.setItem("selectedCurrency", value);
  
    const now = Date.now();
    const lastFetched = parseInt(localStorage.getItem("usdToNisRateFetchedAt") || "0");
    const TWELVE_HOURS = 12 * 60 * 60 * 1000;
  
    if (value === "NIS") {
      if (!lastFetched || now - lastFetched > TWELVE_HOURS) {
        try {
          const rate = await ConvertUsdToNisApi();
          localStorage.setItem("usdToNisRate", rate);
          localStorage.setItem("usdToNisRateFetchedAt", now.toString());
          console.log("Fetched new USD to NIS rate:", rate);
        } catch (error) {
          console.error("Failed to fetch exchange rate:", error);
          if (!localStorage.getItem("usdToNisRate")) {
            localStorage.setItem("usdToNisRate", "1");
          }
        }
      } else {
        console.log("Using cached USD to NIS rate.");
      }
    }
  
    window.location.reload();
  };
  
  useEffect(() => {
    const token = localStorage.getItem("token");
    setIsLoggedIn(!!token);
  }, []);

  useEffect(() => {
    const savedCurrency = localStorage.getItem("selectedCurrency");
    if (savedCurrency) {
      setSelectedCurrency(savedCurrency);
    }
  }, []);

  return (
    <div
      className={`w-full bg-white h-10 border-b border-qgray-border ${
        className || ""
      }`}
    >
      <div className="container-x mx-auto h-full">
        <div className="flex justify-between items-center h-full">
          <div className="topbar-nav">
            <ul className="flex space-x-6">
              <li>
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

          <div className="topbar-dropdowns sm:block hidden">
            <div className="flex space-x-6">
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

              <div className="currency-select flex space-x-1 items-center">
                <Selectbox
                  className="w-fit"
                  datas={["USD", "NIS"]}
                  action={handleCurrencyChange}
                  value={selectedCurrency}
                />
                <Arrow className="fill-current qblack" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
