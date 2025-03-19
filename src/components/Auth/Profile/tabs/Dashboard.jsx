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
      <div className="dashboard-info mt-8 flex flex-col bg-primarygray px-7 py-7">
        <div>
          <p className="title text-[22px] font-semibold">
            Personal Information
          </p>
          <div className="mt-5">
            <table>
              <tbody>
                {/* Each row now stacks its cells vertically */}
                <tr className="mb-5 block">
                  <td className="text-base text-qgraytwo block mb-1">Name:</td>
                  <td className="text-base text-qblack font-medium block">
                    John Doe
                  </td>
                </tr>
                <tr className="mb-5 block">
                  <td className="text-base text-qgraytwo block mb-1">Email:</td>
                  <td className="text-base text-qblack font-medium block">
                    John@gmail.com
                  </td>
                </tr>
                <tr className="mb-5 block">
                  <td className="text-base text-qgraytwo block mb-1">Phone:</td>
                  <td className="text-base text-qblack font-medium block">
                    1234567890
                  </td>
                </tr>
                <tr className="mb-5 block">
                  <td className="text-base text-qgraytwo block mb-1">City:</td>
                  <td className="text-base text-qblack font-medium block">
                    WestBank, Palestine
                  </td>
                </tr>
                <tr className="mb-5 block">
                  <td className="text-base text-qgraytwo block mb-1">Zip:</td>
                  <td className="text-base text-qblack font-medium block">
                    0000
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
