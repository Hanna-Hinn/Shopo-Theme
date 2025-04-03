import { useEffect, useState } from "react";
import { UserApi } from "../../../../api/auth/user";
import { enqueueSnackbar } from "notistack";

export default function Dashboard() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const fetchUser = async (id) => {
      try {
        const { data: userDetails } = await UserApi(id);
        setUser(userDetails);
      } catch (error) {
        enqueueSnackbar("Something went wrong, Please try again later!", {
          variant: "error",
        });
      }
    };

    const token = localStorage.getItem("token");

    if (!token) {
      enqueueSnackbar("Something went wrong, Please try again later!", {
        variant: "error",
      });
      return;
    }

    try {
      const payload = token.split(".")[1];
      const decodedPayload = atob(payload);
      const decodedPayloadObject = JSON.parse(decodedPayload);

      fetchUser(decodedPayloadObject?.id);
    } catch (error) {
      enqueueSnackbar("Something went wrong, Please try again later!", {
        variant: "error",
      });
    }
  }, []);

  const formatHealthStatus = (healthStatus) => {
    if (!healthStatus) return "Loading...";

    const deficiencies = Object.entries(healthStatus)
      .filter(([_, value]) => value === true)
      .map(([key]) => key);

    return deficiencies.length > 0
      ? deficiencies.join(", ")
      : "No deficiencies reported";
  };

  return (
    <>
      <div className="welcome-msg w-full">
        <div>
          <p className="text-qblack text-lg">
            Hello,{" "}
            {user
              ? `User ${user.firstName || ""} ${user.lastName || ""}`
              : "Guest"}
          </p>
          <h1 className="font-bold text-[24px] text-qblack">
            Welcome to your Profile
          </h1>
        </div>
      </div>

      <div className="dashboard-info mt-8 flex flex-col bg-primarygray px-7 py-7">
        <div>
          <p className="title text-[22px] font-semibold">
            Personal Information
          </p>
          <div className="mt-5">
            <table>
              <tbody>
                <tr className="mb-5 block">
                  <td className="text-base text-qgraytwo block mb-1">Name:</td>
                  <td className="text-base text-qblack font-medium block">
                    {user
                      ? `${user?.firstName || ""} ${user?.lastName || ""}`
                      : "Loading..."}
                  </td>
                </tr>
                <tr className="mb-5 block">
                  <td className="text-base text-qgraytwo block mb-1">Email:</td>
                  <td className="text-base text-qblack font-medium block">
                    {user ? user.email : "Loading..."}
                  </td>
                </tr>
                <tr className="mb-5 block">
                  <td className="text-base text-qgraytwo block mb-1">Phone:</td>
                  <td className="text-base text-qblack font-medium block">
                    {user ? user.mobile : "Loading..."}
                  </td>
                </tr>
                <tr className="mb-5 block">
                  <td className="text-base text-qgraytwo block mb-1">
                    Health Status:
                  </td>
                  <td className="text-base text-qblack font-medium block">
                    {user
                      ? formatHealthStatus(user.healthStatus)
                      : "Loading..."}
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
}
