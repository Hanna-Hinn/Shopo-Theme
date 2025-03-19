import Accodion from "../Helpers/Accodion";
import InputCom from "../Helpers/InputCom";
import PageTitle from "../Helpers/PageTitle";
import Layout from "../Partials/Layout";

export default function Faq() {
  return (
    <Layout childrenClasses="pt-0 pb-0">
      {/* Page title and breadcrumb */}
      <div className="faq-page-wrapper w-full mb-10">
        <div className="page-title w-full">
          <PageTitle
            title="HealthPlus - FAQs"
            breadcrumb={[
              { name: "Home", path: "/" },
              { name: "HealthPlus FAQ", path: "/faq" },
            ]}
          />
        </div>
      </div>

      {/* FAQ and Contact Section */}
      <div className="contact-wrapper w-full mb-10">
        <div className="container-x mx-auto">
          <div className="main-wrapper w-full lg:flex lg:space-x-[30px]">
            {/* FAQ Column */}
            <div className="lg:w-1/2 w-full mb-10 lg:mb-0">
              <h1 className="text-qblack font-bold text-[22px] mb-4">
                Frequently Asked Questions
              </h1>
              <div className="flex flex-col space-y-7">
                <Accodion
                  title="01. What is HealthPlus?"
                  des="HealthPlus is a dedicated e-commerce platform that provides wellness, rehabilitation, and recovery herbs and supplements to meet the unique needs of consumers in Palestine."
                />
                <Accodion
                  init
                  title="02. How does HealthPlus support local health needs?"
                  des="By grouping related products with detailed information and benefits, HealthPlus ensures customers can make informed decisions while enjoying the convenience of online shopping."
                />
                <Accodion
                  title="03. What types of products are available on HealthPlus?"
                  des="Our platform offers a wide range of wellness and recovery products, including various herbs, supplements, and health-related items carefully selected to support a healthy lifestyle."
                />
                <Accodion
                  title="04. How do I trust the quality of the products?"
                  des="HealthPlus partners with trusted local suppliers and provides comprehensive product information, so you can feel confident about the authenticity and effectiveness of each item."
                />
                <Accodion
                  title="05. How can I get support or more information?"
                  des="If you have questions or need assistance, please use the contact form provided on this page. Our dedicated customer service team is here to help you with any inquiries."
                />
              </div>
            </div>

            {/* Contact Form Column */}
            <div className="flex-1">
              <div className="bg-white sm:p-10 p-5">
                <div className="title flex flex-col items-center">
                  <h1 className="lg:text-[34px] text-xl font-bold text-qblack">
                    Have any questions about HealthPlus?
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
      </div>
    </Layout>
  );
}
