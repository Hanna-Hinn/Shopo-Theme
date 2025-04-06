import { useState } from "react";
import InputCom from "../../Helpers/InputCom";
import Layout from "../../Partials/Layout";
import Thumbnail from "./Thumbnail";
import { SignApi } from "../../../api/auth/sign";
import { enqueueSnackbar } from "notistack";

export default function Signup() {
  const [checked, setValue] = useState(false);
  const rememberMe = () => {
    setValue(!checked);
  };

  const [healthStatus, setHealthStatus] = useState({
    others: "",
    vitaminD: false,
    vitaminC: false,
    magnesium: false,
    iron: false,
    vitaminB12: false,
    calcium: false,
    omega3: false,
    iodine: false,
    folate: false,
    zinc: false,
    otherCheck: false,
  });

  const [addresses, setAddresses] = useState([
    {
      street: "",
      postalCode: "",
      state: "",
      city: "",
    },
  ]);

  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleAddressChange = (e, index) => {
    const { name, value } = e.target;
    const newAddresses = [...addresses];
    newAddresses[index][name] = value;
    setAddresses(newAddresses);
  };

  const addAddress = () => {
    setAddresses([
      ...addresses,
      { street: "", postalCode: "", state: "", city: "" },
    ]);
  };

  const removeAddress = (index) => {
    if (index > 0) {
      const newAddresses = addresses.filter((_, i) => i !== index);
      setAddresses(newAddresses);
    }
  };

  const toggleSupplement = (key) => {
    setHealthStatus((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
  };

  const handleOtherChange = (e) => {
    setHealthStatus({
      ...healthStatus,
      others: e.target.value,
    });
  };

  const handleOtherCheck = () => {
    setHealthStatus((prev) => ({
      ...prev,
      otherCheck: !prev.otherCheck,
    }));
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleConfirmPasswordChange = (e) => {
    setConfirmPassword(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const healthStatusList = Object.keys(healthStatus)
    .filter(
      (key) =>
        healthStatus[key] === true && key !== "otherCheck" && key !== "others"
    )
    .concat(healthStatus.otherCheck && healthStatus.others ? [healthStatus.others] : []);

    const data = {
      firstName: e.target.fname.value,
      lastName: e.target.lname.value,
      email: e.target.email.value,
      mobile: e.target.mobile.value,
      password,
      imageUrl:
        "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png",
      addresses,
      healthStatus: healthStatusList,
    };

    if (password !== confirmPassword) {
      enqueueSnackbar("Passwords do not match!", { variant: "error" });
      return;
    }

    try {
      const response = await SignApi(data);
      if (response.status === 200) {
        enqueueSnackbar("Account created successfully!", { variant: "success" });
      }
    } catch (error) {
      enqueueSnackbar("An error occurred. Please try again.", { variant: "error" });
    }
  };

  return (
    <Layout childrenClasses="pt-0 pb-0">
      <div className="login-page-wrapper w-full py-10">
        <div className="container-x mx-auto">
          <div className="lg:flex items-center relative">
            <div className="lg:w-[572px] w-full lg:h-auto bg-white flex flex-col justify-center sm:p-10 p-5 border border-[#E0E0E0]">
              <form onSubmit={handleSubmit}>
                <div className="w-full">
                  <div className="title-area flex flex-col justify-center items-center relative text-center mb-7">
                    <h1 className="text-[34px] font-bold leading-[74px] text-qblack">
                      Create Account
                    </h1>
                    <div className="shape -mt-6">
                      <svg
                        width="354"
                        height="30"
                        viewBox="0 0 354 30"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M1 28.8027C17.6508 20.3626 63.9476 8.17089 113.509 17.8802C166.729 28.3062 341.329 42.704 353 1"
                          stroke="#FFBB38"
                          strokeWidth="2"
                          strokeLinecap="round"
                        />
                      </svg>
                    </div>
                  </div>
                  <div className="input-area">
                    <div className="flex sm:flex-row flex-col space-y-5 sm:space-y-0 sm:space-x-5 mb-5">
                      <InputCom
                        placeholder="John"
                        label="First Name*"
                        name="fname"
                        type="text"
                        inputClasses="h-[50px]"
                      />
                      <InputCom
                        placeholder="Doe"
                        label="Last Name*"
                        name="lname"
                        type="text"
                        inputClasses="h-[50px]"
                      />
                    </div>

                    <div className="flex sm:flex-row flex-col space-y-5 sm:space-y-0 sm:space-x-5 mb-5">
                      <InputCom
                        placeholder="John@Doe.com"
                        label="Email Address*"
                        name="email"
                        type="email"
                        inputClasses="h-[50px]"
                      />
                      <InputCom
                        placeholder="+1234567890"
                        label="mobile*"
                        name="mobile"
                        type="text"
                        inputClasses="h-[50px]"
                      />
                    </div>

                    <div className="flex sm:flex-row flex-col space-y-5 sm:space-y-0 sm:space-x-5 mb-5">
                      <InputCom
                        placeholder="Enter Password"
                        label="Password*"
                        name="password"
                        type="password"
                        inputClasses="h-[50px]"
                        value={password}
                        inputHandler={handlePasswordChange}
                      />
                      <InputCom
                        placeholder="Confirm Password"
                        label="Confirm Password*"
                        name="confirmPassword"
                        type="password"
                        inputClasses="h-[50px]"
                        value={confirmPassword}
                        inputHandler={handleConfirmPasswordChange}
                      />
                    </div>

                    {/* Address Section */}
                    {addresses.map((address, index) => (
                      <div key={index} className="address-section mb-5">
                        <div className="flex sm:flex-row flex-col space-y-5 sm:space-y-0 sm:space-x-5 mb-5">
                          <InputCom
                            placeholder="Your Street Address"
                            label="Street Address*"
                            name="street"
                            type="text"
                            inputClasses="h-[50px]"
                            value={address.street}
                            inputHandler={(e) => handleAddressChange(e, index)}
                          />
                          <InputCom
                            placeholder="12345"
                            label="Postal Code*"
                            name="postalCode"
                            type="text"
                            inputClasses="h-[50px]"
                            value={address.postalCode}
                            inputHandler={(e) => handleAddressChange(e, index)}
                          />
                        </div>

                        <div className="flex sm:flex-row flex-col space-y-5 sm:space-y-0 sm:space-x-5 mb-5">
                          <InputCom
                            placeholder="Your State"
                            label="State*"
                            name="state"
                            type="text"
                            inputClasses="h-[50px]"
                            value={address.state}
                            inputHandler={(e) => handleAddressChange(e, index)}
                          />
                          <InputCom
                            placeholder="Your City"
                            label="City*"
                            name="city"
                            type="text"
                            inputClasses="h-[50px]"
                            value={address.city}
                            inputHandler={(e) => handleAddressChange(e, index)}
                          />
                        </div>

                        {index > 0 && (
                          <button
                            type="button"
                            onClick={() => removeAddress(index)}
                            className="text-red-500 mt-2"
                          >
                            Remove Address
                          </button>
                        )}
                      </div>
                    ))}

                    <button
                      type="button"
                      onClick={addAddress}
                      className="text-blue-500 mt-4"
                    >
                      Add Another Address
                    </button>

                    <div className="mb-6">
                      <h6 className="input-label text-qgray capitalize text-[13px] font-normal block mb-3">
                        Health Supplements You Take:
                      </h6>
                      <div className="grid grid-cols-2 gap-3">
                        {[
                          "vitaminD",
                          "vitaminC",
                          "magnesium",
                          "iron",
                          "vitaminB12",
                          "calcium",
                          "omega3",
                          "iodine",
                          "folate",
                          "zinc",
                        ].map((key) => (
                          <label
                            key={key}
                            className="flex items-center space-x-2 text-[13px]"
                          >
                            <input
                              type="checkbox"
                              checked={healthStatus[key]}
                              onChange={() => toggleSupplement(key)}
                            />
                            <span className="capitalize">{key}</span>
                          </label>
                        ))}
                        <label className="flex items-center space-x-2 text-[13px]">
                          <input
                            type="checkbox"
                            checked={healthStatus.otherCheck}
                            onChange={handleOtherCheck}
                          />
                          <span className="capitalize">Other</span>
                        </label>
                        {healthStatus.otherCheck && (
                          <input
                            type="text"
                            className="h-[50px] w-full border border-[#E0E0E0] p-2 mt-2"
                            placeholder="Enter supplement name"
                            value={healthStatus.others}
                            onChange={handleOtherChange}
                          />
                        )}
                      </div>
                    </div>

                    <div className="forgot-password-area mb-5">
                      <div className="remember-checkbox flex items-center space-x-4">
                        <button
                          onClick={rememberMe}
                          type="button"
                          className="w-5 h-5 text-qblack flex justify-center items-center border border-light-gray"
                        >
                          {checked && (
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              className="h-5 w-5"
                              viewBox="0 0 20 20"
                              fill="currentColor"
                            >
                              <path
                                fillRule="evenodd"
                                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                clipRule="evenodd"
                              />
                            </svg>
                          )}
                        </button>
                        <span
                          onClick={rememberMe}
                          className="text-base text-black"
                        >
                          I Agree All Terms and Conditions
                        </span>
                      </div>
                    </div>

                    <div className="signin-area mb-3">
                      <div className="flex justify-center">
                        <button
                          type="submit"
                          className="black-btn text-sm text-white w-full h-[50px] font-semibold flex justify-center bg-purple items-center"
                        >
                          <span>Create Account</span>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </form>
            </div>
            <div className="flex-1 lg:flex hidden transform scale-60 xl:scale-100 xl:justify-center">
              <div
                className="absolute xl:-right-20 -right-[138px]"
                style={{ top: "calc(50% - 258px)" }}
              >
                <Thumbnail />
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
