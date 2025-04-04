import { useState, useEffect } from "react";
import Cart from "../../../Cart";
import ThinBag from "../../../Helpers/icons/ThinBag";
import ThinLove from "../../../Helpers/icons/ThinLove";
import ThinPeople from "../../../Helpers/icons/ThinPeople";
import SearchBox from "../../../Helpers/SearchBox";
import { Link } from "react-router-dom";
import Logo from "../../../../assets/images/logo.png";

// Desktop Header
export default function Middlebar({ className }) {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // Check if the user is logged in (based on token) when the component mounts
  useEffect(() => {
    const token = localStorage.getItem("token");
    setIsLoggedIn(!!token); // Set the login state based on token presence
  }, []);

  return (
    <div className={`w-full h-[86px] bg-white ${className}`}>
      <div className="container-x mx-auto h-full">
        <div className="relative h-full">
          <div className="flex justify-between items-center h-full">
            <div>
              <Link to="/">
                <img width="152" height="36" src={Logo} alt="logo" />
              </Link>
            </div>
            <div className="w-[517px] h-[44px]">
              <SearchBox className="search-com" />
            </div>
            <div className="flex space-x-6 items-center">
              {/* Wishlist icon */}
              {isLoggedIn && (
                <div className="favorite relative">
                  <Link to="/wishlist">
                    <span>
                      <ThinLove />
                    </span>
                  </Link>
                  <span className="w-[18px] h-[18px] rounded-full bg-qh2-green absolute -top-2.5 -right-2.5 flex justify-center items-center text-[9px] text-white">
                    1
                  </span>
                </div>
              )}

              {/* Cart icon */}
              {isLoggedIn && (
                <div className="cart-wrapper group relative py-4">
                  <div className="cart relative cursor-pointer">
                    <Link to="/cart">
                      <span>
                        <ThinBag />
                      </span>
                    </Link>
                    <span className="w-[18px] h-[18px] rounded-full bg-qh2-green absolute -top-2.5 -right-2.5 flex justify-center items-center text-[9px] text-white">
                      15
                    </span>
                  </div>
                  {/* <div className="fixed left-0 top-0 w-full h-full z-40"></div> */}
                  {/* hidden group-hover:block" */}
                  <Cart className="absolute -right-[45px] top-11 z-50 hidden group-hover:block" />
                </div>
              )}

              {/* Profile icon */}
              <div>
                <Link to="/profile">
                  <span>
                    <ThinPeople />
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
