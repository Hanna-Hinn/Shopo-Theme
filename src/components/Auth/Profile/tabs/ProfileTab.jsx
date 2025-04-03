import { useEffect, useState } from "react";
import InputCom from "../../../Helpers/InputCom";
import { UserApi } from "../../../../api/auth/user"; // Replace with actual user API function
import { updateUser } from "../../../../api/auth/user"; // Assuming this is for updating user data
import { enqueueSnackbar } from "notistack";

export default function ProfileTab() {
  const [user, setUser] = useState(null);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    mobile: "",
  });

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const token = localStorage.getItem("token");
        if (!token) return;

        const payload = token.split(".")[1];
        const decodedPayload = atob(payload);
        const decodedPayloadObject = JSON.parse(decodedPayload);
        const { data: userDetails } = await UserApi(decodedPayloadObject?.id); // Fetch user info
        setUser(userDetails);
        setFormData({
          firstName: userDetails.firstName || "",
          lastName: userDetails.lastName || "",
          email: userDetails.email || "",
          mobile: userDetails.mobile || "",
        });
      } catch (error) {
        enqueueSnackbar( "Something went wrong, Please try again later!", { variant : "error" } );  

      }
    };

    fetchUser();
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleUpdateProfile = async () => {
    try {
      // Add _id to the payload

      const payload = { ...formData, _id: user?._id };

      await updateUser(user?._id, payload);  // Make API call to update user
    } catch (error) {
      enqueueSnackbar( "Something went wrong, Please try again later!", { variant : "error" } );  

    }
  };

  return (
    <>
      <div className="flex-1">
        <div className="update-logo w-full mb-9">
          <h1 className="text-xl tracking-wide font-bold text-qblack flex items-center mb-2">
            Update Profile
          </h1>
        </div>
      </div>

      <div className="flex space-x-8">
        <div className="w-[570px]">
          <div className="input-item flex space-x-2.5 mb-8">
            <div className="w-1/2 h-full">
              <InputCom
                label="First Name*"
                placeholder="Demo Name"
                type="text"
                name="firstName"
                id="firstName" 
                value={formData.firstName}
                inputHandler={handleInputChange} // Correct prop name should be inputHandler
                inputClasses="h-[50px]"
              />
            </div>
            <div className="w-1/2 h-full">
              <InputCom
                label="Last Name*"
                placeholder="Demo Name"
                type="text"
                name="lastName"
                id="lastName"
                value={formData.lastName}
                inputHandler={handleInputChange} // Correct prop name should be inputHandler
                inputClasses="h-[50px]"
              />
            </div>
          </div>
          <div className="input-item flex space-x-2.5 mb-8">
            <div className="w-1/2 h-full">
              <InputCom
                label="Email*"
                placeholder="demoemial@gmail.com"
                type="email"
                name="email"
                id="email"
                value={formData.email}
                inputHandler={handleInputChange} // Correct prop name should be inputHandler
                inputClasses="h-[50px]"
              />
            </div>
            <div className="w-1/2 h-full">
              <InputCom
                label="Phone Number*"
                placeholder="012 3  *******"
                type="text"
                name="mobile"
                id="mobile"  
                value={formData.mobile}
                inputHandler={handleInputChange} // Correct prop name should be inputHandler
                inputClasses="h-[50px]"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="action-area flex space-x-4 items-center">
        <button type="button" className="text-sm text-qred font-semibold">
          Cancel
        </button>
        <button
          type="button"
          onClick={handleUpdateProfile}
          className="w-[164px] h-[50px] bg-qblack text-white text-sm"
        >
          Update Profile
        </button>
      </div>
    </>
  );
}
