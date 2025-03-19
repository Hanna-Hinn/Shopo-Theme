import StripeLogo from "../../../../assets/images/stripe.png";

export default function Payment() {
  return (
    <div className="items-wrapper-bank-payment w-full">
      <ul className="items">
        <li className="sm:flex justify-between items-center w-full py-[30px] border-b border-light-purple">
          <div className="flex space-x-5 items-center mb-3 sm:mb-0">
            <div className="sm:w-[120px] sm:h-[120px] flex items-center justify-center rounded-full sm:bg-[#F2F2F2]">
              <img src={StripeLogo} alt="Stripe Account" />
            </div>
            <div className="flex flex-col space-y-2">
              <p className="sm:text-xl text-lg tracking-wide text-qblack font-bold">
                Stripe Inc.
              </p>
              <p className="text-thin-light-gray sm:text-18 text-sm tracking-wide">
                Account ************1234
              </p>
              <p className="sm:text-18 text-sm tracking-wide text-green-500">
                Connected
              </p>
            </div>
          </div>
          <div>
            <button
              type="button"
              className="w-[116px] sm:h-[46px] h-[40px] bg-qyellow text-qblack font-medium sm:text-18 text-sm tracking-wide"
            >
              Manage
            </button>
          </div>
        </li>
      </ul>
      <div className="flex space-x-4">
        <button
          type="button"
          className="text-white bg-qblack w-[126px] h-[50px] text-sm font-semibold"
        >
          Add Payment Method
        </button>
      </div>
    </div>
  );
}
