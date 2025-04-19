import { useEffect, useState } from "react";
import { enqueueSnackbar } from "notistack";
import { UserApi } from "../../../../api/auth/user";

export default function OrderTab() {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchUserOrders = async (id) => {
      try {
        const { data: userDetails } = await UserApi(id);
        if (userDetails && userDetails.orders) {
          setOrders(userDetails.orders);
        } else {
          setError("No orders found");
        }
      } catch (err) {
        setError("Error fetching user data");
        enqueueSnackbar("Something went wrong, Please try again later!", {
          variant: "error",
        });
      } finally {
        setLoading(false);
      }
    };

    const token = localStorage.getItem("token");

    if (!token) {
      return;
    }

    try {
      const payload = token.split(".")[1];
      const decodedPayload = atob(payload);
      const decodedPayloadObject = JSON.parse(decodedPayload);

      fetchUserOrders(decodedPayloadObject?.id);
    } catch (error) {
      enqueueSnackbar( "Something went wrong, Please try again later!", { variant : "error" } );  
    }
  }, []);

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const options = { year: "numeric", month: "short", day: "2-digit" };
    return date.toLocaleDateString("en-US", options);
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error || orders.length === 0 ) {
    return <div>No orders found.</div>;
  }


  return (
    <>
      <div className="relative w-full overflow-x-auto sm:rounded-lg">
        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
          <tbody>
            {/* Table Heading */}
            <tr className="text-base text-qgray whitespace-nowrap px-2 border-b default-border-bottom">
              <td className="py-4 block whitespace-nowrap text-center">
                Order
              </td>
              <td className="py-4 whitespace-nowrap text-center">Date</td>
              <td className="py-4 whitespace-nowrap text-center">Status</td>
              <td className="py-4 whitespace-nowrap text-center">Amount</td>
              <td className="py-4 whitespace-nowrap text-center">Action</td>
            </tr>
            {/* Table Heading End */}

            {orders.map((order) => (
              <tr key={order.id} className="bg-white border-b hover:bg-gray-50">
                <td className="text-center py-4">
                  <span className="text-lg text-qgray font-medium">
                    #{order.id}
                  </span>
                </td>
                <td className="text-center py-4 px-2">
                  <span className="text-base text-qgray whitespace-nowrap">
                    {formatDate(order.date)}
                  </span>
                </td>
                <td className="text-center py-4 px-2">
                  <span
                    className={`text-sm rounded ${
                      order.shipmentStatus === "delivered"
                        ? "text-green-500 bg-green-100"
                        : order.shipmentStatus === "pending"
                        ? "text-yellow-500 bg-yellow-100"
                        : "text-blue-500 bg-blue-100"
                    } p-2`}
                  >
                    {order.shipmentStatus}
                  </span>
                </td>
                <td className="text-center py-4 px-2">
                  <span className="text-base text-qblack whitespace-nowrap px-2">
                    {order.totalPrice}
                  </span>
                </td>
                <td className="text-center py-4">
                  <button
                    type="button"
                    className="w-[116px] h-[46px] bg-qyellow text-qblack font-bold"
                  >
                    View Details
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}
