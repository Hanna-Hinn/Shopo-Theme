import { useEffect, useState } from "react";

export default function ProductsTable({ className, items = [], onDeleteItem }) {
  const [currency, setCurrency] = useState("USD");
  const [nisRate, setNisRate] = useState(1);

  useEffect(() => {
    const storedCurrency = localStorage.getItem("selectedCurrency") || "USD";
    const storedRate = parseFloat(localStorage.getItem("usdToNisRate")) || 1;
    setCurrency(storedCurrency);
    setNisRate(storedRate);
  }, []);

  const getDisplayPrice = (price) => {
    const numericPrice = parseFloat(price?.["$numberDecimal"] || 0);
    if (currency === "NIS") {
      return `₪${(numericPrice * nisRate).toFixed(2)}`;
    }
    return `$${numericPrice.toFixed(2)}`;
  };

  return (
    <div className={`w-full ${className || ""}`}>
      <div className="relative w-full overflow-x-auto border border-[#EDEDED]">
        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
          <tbody>
            {/* Table heading */}
            <tr className="text-[13px] font-medium text-black bg-[#F6F6F6] whitespace-nowrap px-2 border-b default-border-bottom uppercase">
              <td className="py-4 pl-10 w-[380px]">Product</td>
              <td className="py-4 text-center">Price</td>
              <td className="py-4 text-center w-[114px]">{/* Empty cell */}</td>
            </tr>

            {/* Table rows */}
            {items.map((item) => (
              <tr key={item.id} className="bg-white border-b hover:bg-gray-50">
                <td className="pl-10 py-4 w-[380px]">
                  <div className="flex space-x-6 items-center">
                    <div className="w-[80px] h-[80px] overflow-hidden flex justify-center items-center border border-[#EDEDED]">
                      <img
                        src={item.productImage || "/placeholder.png"}
                        alt={item.productName}
                        className="w-full h-full object-contain"
                      />
                    </div>
                    <div className="flex-1 flex flex-col">
                      <p className="font-medium text-[15px] text-qblack">
                        {item.productName}
                      </p>
                    </div>
                  </div>
                </td>

                <td className="py-4 text-center">
                  <span className="text-[15px] font-normal">
                    {getDisplayPrice(item?.price)}
                  </span>
                </td>

                <td className="py-4 text-center">
                  <button
                    onClick={() => onDeleteItem(item.productId || item.id)}
                    className="text-red-500 hover:text-red-700"
                  >
                    <svg
                      width="10"
                      height="10"
                      viewBox="0 0 10 10"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M9.7 0.3C9.3 -0.1 8.7 -0.1 8.3 0.3L5 3.6L1.7 0.3C1.3 -0.1 0.7 -0.1 0.3 0.3C-0.1 0.7 -0.1 1.3 0.3 1.7L3.6 5L0.3 8.3C-0.1 8.7 -0.1 9.3 0.3 9.7C0.7 10.1 1.3 10.1 1.7 9.7L5 6.4L8.3 9.7C8.7 10.1 9.3 10.1 9.7 9.7C10.1 9.3 10.1 8.7 9.7 8.3L6.4 5L9.7 1.7C10.1 1.3 10.1 0.7 9.7 0.3Z"
                        fill="#AAAAAA"
                      />
                    </svg>
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
