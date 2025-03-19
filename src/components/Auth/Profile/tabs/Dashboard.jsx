export default function Dashboard() {
  return (
    <>
      <div className="welcome-msg w-full">
        <div>
          <p className="text-qblack text-lg">Hello, John Doe</p>
          <h1 className="font-bold text-[24px] text-qblack">
            Welcome to your Profile
          </h1>
        </div>
      </div>
      <div className="dashboard-info mt-8 flex justify-between items-center bg-primarygray px-7 py-7">
        <div className="">
          <p className="title text-[22px] font-semibold">
            Parsonal Information
          </p>
          <div className="mt-5">
            <table>
              <tbody>
                <tr className="inline-flex mb-5">
                  <td className="text-base text-qgraytwo w-[100px] block">
                    <div>Name:</div>
                  </td>
                  <td className="text-base text-qblack font-medium">
                    John Doe
                  </td>
                </tr>
                <tr className="inline-flex mb-5">
                  <td className="text-base text-qgraytwo w-[100px] block">
                    <div>Email:</div>
                  </td>
                  <td className="text-base text-qblack font-medium">
                    John@gmail.com
                  </td>
                </tr>
                <tr className="inline-flex mb-5">
                  <td className="text-base text-qgraytwo w-[100px] block">
                    <div>Phone:</div>
                  </td>
                  <td className="text-base text-qblack font-medium">
                    1234567890
                  </td>
                </tr>
                <tr className="inline-flex mb-5">
                  <td className="text-base text-qgraytwo w-[100px] block">
                    <div>City:</div>
                  </td>
                  <td className="text-base text-qblack font-medium">
                    WestBank, Palestine
                  </td>
                </tr>
                <tr className="inline-flex mb-5">
                  <td className="text-base text-qgraytwo w-[100px] block">
                    <div>Zip:</div>
                  </td>
                  <td className="text-base text-qblack font-medium">0000</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div className="w-[1px] h-[164px] bg-[#E4E4E4]"></div>
        <div className="ml-6">
          <p className="title text-[22px] font-semibold">Shop Info</p>
          <div className="mt-5">
            <table>
              <tr className="inline-flex mb-5">
                <td className="text-base text-qgraytwo w-[100px] block">
                  <div>Name:</div>
                </td>
                <td className="text-base text-qblack font-medium">
                  John Doe
                </td>
              </tr>
              <tr className="inline-flex mb-5">
                <td className="text-base text-qgraytwo w-[100px] block">
                  <div>Email:</div>
                </td>
                <td className="text-base text-qblack font-medium">
                  John@gmail.com
                </td>
              </tr>
              <tr className="inline-flex mb-5">
                <td className="text-base text-qgraytwo w-[100px] block">
                  <div>Phone:</div>
                </td>
                <td className="text-base text-qblack font-medium">
                  1234567890
                </td>
              </tr>
              <tr className="inline-flex mb-5">
                <td className="text-base text-qgraytwo w-[100px] block">
                  <div>City:</div>
                </td>
                <td className="text-base text-qblack font-medium">
                  WestBank, Palestine
                </td>
              </tr>
              <tr className="inline-flex mb-5">
                <td className="text-base text-qgraytwo w-[100px] block">
                  <div>Zip:</div>
                </td>
                <td className="text-base text-qblack font-medium">0000</td>
              </tr>
            </table>
          </div>
        </div>
      </div>
    </>
  );
}
