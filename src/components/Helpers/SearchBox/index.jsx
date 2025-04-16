import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function SearchBox({ className, type }) {
  const [searchValue, setSearchValue] = useState("");
  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchValue.trim()) {
      navigate(`/all-products?productName=${encodeURIComponent(searchValue.trim())}`);
    }
  };

  return (
    <div
      className={`w-full h-full flex items-center border border-qgray-border bg-white ${
        className || ""
      }`}
    >
      <form onSubmit={handleSearch} className="flex-1 h-full flex">
        <input
          type="text"
          className="search-input w-full"
          placeholder="Search Product..."
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
        />
      </form>

      <div className="w-[1px] h-[22px] bg-qgray-border"></div>

      <button
        onClick={handleSearch}
        className={`w-[93px] h-full text-sm font-600 ${
          type === 3 ? "bg-qh3-blue text-white" : "search-btn"
        }`}
        type="button"
      >
        Search
      </button>
    </div>
  );
}
