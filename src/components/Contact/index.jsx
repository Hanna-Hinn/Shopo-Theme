import InputCom from "../Helpers/InputCom";
import PageTitle from "../Helpers/PageTitle";
import Layout from "../Partials/Layout";

export default function Contact() {
  return (
    <Layout childrenClasses="pt-0 pb-0">
      <div className="page-title mb-10">
        <PageTitle
          title="Contact"
          breadcrumb={[
            { name: "home", path: "/" },
            { name: "contact", path: "/contact" },
          ]}
        />
      </div>
      <div className="contact-wrapper w-full mb-10">
        <div className="container-x mx-auto">
          <div className="main-wrapper w-full lg:flex lg:space-x-[30px]">
            {/* Contact Information Column */}
            <div className="lg:w-1/2 w-full">
              <h1 className="text-[22px] font-semibold text-qblack leading-[30px] mb-1">
                Contact Information
              </h1>
              <p className="text-[15px] text-qgraytwo leading-[30px] mb-5">
                Fill the form below or write to us. We will help you as soon as
                possible.
              </p>

              <div className="xl:flex xl:space-x-[30px] mb-[30px]">
                {/* Phone Block */}
                <div className="xl:w-1/2 w-full h-[196px] flex flex-col items-center justify-center bg-[#FFEAE5] p-5">
                  <div className="flex justify-center mb-3 ">
                    <svg
                      width="44"
                      height="44"
                      viewBox="0 0 44 44"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <circle cx="22" cy="22" r="21.5" stroke="#FFBB38" />
                      <path
                        d="M10.4708 17.7624L10.4708 17.7624C10.4976 19.0577 10.9088 20.276 11.473 21.4906C13.5525 25.9672 16.7815 29.3804 21.081 31.7969C22.5665 32.6319 24.0756 33.2848 25.7334 33.4698L25.7335 33.4698C26.8399 33.5935 27.7241 33.3528 28.4392 32.5473L28.4392 32.5473C28.724 32.2265 29.0458 31.9115 29.3517 31.612C29.514 31.4532 29.6717 31.2987 29.8172 31.15L29.8174 31.1498C30.2031 30.7562 30.3337 30.4343 30.336 30.1731C30.3383 29.9141 30.2153 29.5973 29.8364 29.2104L29.8363 29.2104C28.988 28.3441 28.1276 27.4873 27.2602 26.637L27.2601 26.6369C26.8659 26.2503 26.5505 26.126 26.2959 26.1268C26.0403 26.1277 25.7225 26.2552 25.3251 26.6438L25.325 26.6439C24.8114 27.1458 24.3044 27.6511 23.8109 28.166L23.8108 28.1661C23.6684 28.3146 23.4735 28.4645 23.2169 28.5099C22.9464 28.5578 22.7021 28.4739 22.5009 28.341C22.2427 28.1708 21.9677 28.0004 21.686 27.8258C21.0293 27.4187 20.3358 26.9889 19.7325 26.4866C18.0622 25.0969 16.5823 23.48 15.5981 21.4476C15.4993 21.2439 15.4281 21.0037 15.4728 20.7408C15.5179 20.4753 15.6665 20.2715 15.8341 20.112L15.8342 20.1119C16.3521 19.6191 16.86 19.1182 17.3507 18.6035L17.3508 18.6034C17.7203 18.2159 17.84 17.9093 17.8397 17.663C17.8395 17.4176 17.7199 17.1127 17.3474 16.7286L17.3474 16.7286C16.4823 15.8366 15.605 14.9566 14.7136 14.0922C14.3582 13.7475 14.053 13.6318 13.7983 13.6338C13.5412 13.6359 13.2305 13.7585 12.8676 14.1078L10.4708 17.7624ZM10.4708 17.7624L10.4706 17.757M10.4708 17.7624L10.4706 17.757M10.4706 17.757C10.4433 16.8876 10.7133 16.1864 11.3505 15.6062M10.4706 17.757L11.3505 15.6062M11.3505 15.6062C11.6606 15.3245 11.9774 15.0025 12.2815 14.6935C12.4844 14.4873 12.6817 14.2868 12.8675 14.1079L11.3505 15.6062Z"
                        fill="#FFBB38"
                        stroke="#FFBB38"
                      />
                    </svg>
                  </div>
                  <p className="text-[22px] text-black leading-[30px] text-center font-semibold">
                    Phone
                  </p>
                  <p className="text-[15px] text-black leading-[30px] text-center">
                    +(970) 1234 5678 012
                  </p>
                  <p className="text-[15px] text-black leading-[30px] text-center">
                    +(972) 1234 5678 012
                  </p>
                </div>
                {/* Email Block */}
                <div className="xl:w-1/2 w-full h-[196px] flex flex-col items-center justify-center bg-[#E7F2EC] p-5">
                  <div className="flex justify-center mb-3 ">
                    <svg
                      width="44"
                      height="44"
                      viewBox="0 0 44 44"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M22 43C33.598 43 43 33.598 43 22C43 10.402 33.598 1 22 1C10.402 1 1 10.402 1 22C1 33.598 10.402 43 22 43ZM22 44C34.1503 44 44 34.1503 44 22C44 9.84974 34.1503 0 22 0C9.84974 0 0 9.84974 0 22C0 34.1503 9.84974 44 22 44Z"
                        fill="#FFBB38"
                      />
                      <path
                        d="M11.0183 18.6455C11.2024 18.761 11.3464 18.8458 11.4851 18.9382C14.2825 20.8029 17.0792 22.6676 19.8759 24.5331C21.3894 25.5429 22.6125 25.5413 24.1329 24.5277C26.9304 22.663 29.7271 20.7975 32.5237 18.9328C32.6539 18.8465 32.7856 18.7634 32.9659 18.6478C32.9782 18.8042 32.9959 18.9212 32.9959 19.0391C32.9974 22.1169 32.9997 25.1939 32.9959 28.2718C32.9944 29.6582 32.1625 30.4854 30.773 30.4862C24.9186 30.4877 19.0641 30.4877 13.2096 30.4862C11.8456 30.4854 11.0037 29.6543 11.0022 28.3003C10.9983 25.2086 11.0006 22.1169 11.0014 19.0245C11.0022 18.9151 11.0114 18.8065 11.0183 18.6455Z"
                        fill="#FFBB38"
                      />
                    </svg>
                  </div>
                  <p className="text-[22px] text-black leading-[30px] text-center font-semibold">
                    Email
                  </p>
                  <p className="text-[15px] text-black leading-[30px] text-center">
                    Demoemail@gmail.com
                  </p>
                  <p className="text-[15px] text-black leading-[30px] text-center">
                    John@gmail.com
                  </p>
                </div>
              </div>

              {/* Address Block */}
              <div className="p-5 flex flex-col justify-between w-full bg-[#E7F2EC]">
                <div className="flex space-x-5">
                  <span>
                    <svg
                      width="44"
                      height="44"
                      viewBox="0 0 44 44"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M22 43C33.598 43 43 33.598 43 22C43 10.402 33.598 1 22 1C10.402 1 1 10.402 1 22C1 33.598 10.402 43 22 43ZM22 44C34.1503 44 44 34.1503 44 22C44 9.84974 34.1503 0 22 0C9.84974 0 0 9.84974 0 22C0 34.1503 9.84974 44 22 44Z"
                        fill="#FFBB38"
                      />
                      <path
                        d="M11.0183 18.6455C11.2024 18.761 11.3464 18.8458 11.4851 18.9382C14.2825 20.8029 17.0792 22.6676 19.8759 24.5331C21.3894 25.5429 22.6125 25.5413 24.1329 24.5277C26.9304 22.663 29.7271 20.7975 32.5237 18.9328C32.6539 18.8465 32.7856 18.7634 32.9659 18.6478C32.9782 18.8042 32.9959 18.9212 32.9959 19.0391C32.9974 22.1169 32.9997 25.1939 32.9959 28.2718C32.9944 29.6582 32.1625 30.4854 30.773 30.4862C24.9186 30.4877 19.0641 30.4877 13.2096 30.4862C11.8456 30.4854 11.0037 29.6543 11.0022 28.3003C10.9983 25.2086 11.0006 22.1169 11.0014 19.0245C11.0022 18.9151 11.0114 18.8065 11.0183 18.6455Z"
                        fill="#FFBB38"
                      />
                    </svg>
                  </span>
                  <div>
                    <h1 className="text-[22px] font-semibold text-qblack leading-[30px] mb-2">
                      Address
                    </h1>
                    <p className="text-[15px] text-qblack leading-[30px]">
                      Beit Lid, <br />
                      Palestine
                    </p>
                  </div>
                </div>
                <div className="w-full h-[206px] mt-5">
                  <iframe
                    title="Beit Lid Map"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3381.8598290273157!2d35.172697015023374!3d31.91508558134901!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x151c8e99a1234567%3A0xa1b2c3d4e5f67890!2sBeit%20Lid%2C%20Palestine!5e0!3m2!1sen!2s!4v1650000000000!5m2!1sen!2s"
                    style={{ border: "0", width: "100%", height: "100%" }}
                    allowFullScreen=""
                    loading="lazy"
                  ></iframe>
                </div>
              </div>
            </div>

            {/* Contact Form Column */}
            <div className="flex-1 bg-white sm:p-10 p-3">
              <div className="title flex flex-col items-center">
                <h1 className="text-[34px] font-bold text-qblack">
                  Get In Touch
                </h1>
                <span className="-mt-5 block">
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
                </span>
              </div>
              <div className="inputs mt-5">
                <div className="mb-4">
                  <InputCom
                    label="First Name*"
                    placeholder="Demo Name"
                    name="first_name"
                    inputClasses="h-[50px]"
                  />
                </div>
                <div className="mb-4">
                  <InputCom
                    label="Email Address*"
                    placeholder="info@healthplus.com"
                    name="email"
                    inputClasses="h-[50px]"
                  />
                </div>
                <div className="mb-4">
                  <InputCom
                    label="Subject*"
                    placeholder="Your Subject here"
                    name="subject"
                    inputClasses="h-[50px]"
                  />
                </div>
                <div className="mb-5">
                  <h6 className="input-label text-qgray capitalize text-[13px] font-normal block mb-2">
                    Message*
                  </h6>
                  <textarea
                    placeholder="Type your message here"
                    className="w-full h-[105px] focus:ring-0 focus:outline-none p-3 border border-qgray-border placeholder:text-sm"
                  ></textarea>
                </div>
                <div>
                  <a href="#">
                    <div className="black-btn text-sm font-semibold w-full h-[50px] flex justify-center items-center">
                      <span>Send Now</span>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
