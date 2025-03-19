export default function DiscountBanner({ className }) {
  return (
    <div
      className={`discount-banner w-full h-[307px] bg-cover flex justify-center items-center ${
        className || ""
      }`}
      style={{
        background: `url(${
          import.meta.env.VITE_PUBLIC_URL
        }/assets/images/discount-banner-2.jpg) no-repeat`,
        backgroundSize: "cover",
      }}
    >
      <div>
        <div data-aos="fade-up">
          <h1 className="sm:text-3xl text-xl font-700 text-qblack mb-2 text-center">
            <span className="mx-1 text-qyellow">
              From Nature to Medicine - Quality You Can Trust!
            </span>
          </h1>
          <h1 className="sm:text-3xl text-xl font-700 text-qblack mb-2 text-center">
            We offer a curated selection of herbs, vegetables, fruits, and
            pharmaceuticals to support your well-being.
          </h1>
        </div>
      </div>
    </div>
  );
}
