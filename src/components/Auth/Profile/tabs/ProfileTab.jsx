import InputCom from "../../../Helpers/InputCom";

export default function ProfileTab() {
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
        <div className="w-[570px] ">
          <div className="input-item flex space-x-2.5 mb-8">
            <div className="w-1/2 h-full">
              <InputCom
                label="First Name*"
                placeholder="Demo Name"
                type="text"
                inputClasses="h-[50px]"
              />
            </div>
            <div className="w-1/2 h-full">
              <InputCom
                label="Last Name*"
                placeholder="Demo Name"
                type="text"
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
                inputClasses="h-[50px]"
              />
            </div>
            <div className="w-1/2 h-full">
              <InputCom
                label="Phone Number*"
                placeholder="012 3  *******"
                type="text"
                inputClasses="h-[50px]"
              />
            </div>
          </div>
          <div className="input-item mb-8">
            <div className="w-full">
              <InputCom
                label="Country*"
                placeholder="country"
                type="text"
                inputClasses="h-[50px]"
              />
            </div>
          </div>
          <div className="input-item mb-8">
            <div className="w-full">
              <InputCom
                label="Address*"
                placeholder="your address here"
                type="text"
                inputClasses="h-[50px]"
              />
            </div>
          </div>
          <div className="input-item flex space-x-2.5 mb-8">
            <div className="w-1/2 h-full">
              <InputCom
                label="Town / City*"
                placeholder=""
                type="text"
                inputClasses="h-[50px]"
              />
            </div>
            <div className="w-1/2 h-full">
              <InputCom
                label="Postcode / ZIP*"
                placeholder=""
                type="text"
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
          className="w-[164px] h-[50px] bg-qblack text-white text-sm"
        >
          Update Profile
        </button>
      </div>
    </>
  );
}
