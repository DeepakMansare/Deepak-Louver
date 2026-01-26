import { ArrowRight, ArrowLeft } from "lucide-react";

export const Testimonials = () => {
  return (
    <section className="flex flex-col items-center justify-center px-3 py-5 font-roboto bg-gray-50 md:py-5">
      <button className="border border-gray-300 px-2 py-1 md:px-3 md:py-2 rounded-full mt-10">
        Testimonial
      </button>

      <h1 className="text-3xl text-center px-2 mt-5 md:text-3xl">
        Here is what our Clients are saying about us
      </h1>

      <div className="mt-12 md:flex md:flex-row md:w-full md:items-center justify-center md:max-w-full md:space-x-8 md:mt-6">
        <span className="hidden md:flex items-center border h-10 w-10  justify-center rounded-full text-gray-600 md:shadow-xl md:shrink-0">
          <ArrowLeft size={18} />
        </span>

        <div className="flex flex-col items-center bg-white/95 rounded-3xl shadow-sm space-y-4 px-4 py-4 md:px-6 md:py-12 md:flex-row md:items-stretch md:gap-5">
          <img
            src="/Testimonialimg.png"
            alt="image"
            className="h-42 w-42 md:m-auto"
          />

          <div className="flex flex-col justify-between space-y-2 md:max-w-xl">
            <h2 className="text-xl font-semibold w-full text-left">
              Hannah Schmitt
            </h2>

            <p className="flex items-center justify-center leading-snug">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cursus
              nibh mauris, nec turpis orci lectus maecenas. Suspendisse sed
              magna eget nibh in turpis. Consequat duis diam lacus arcu.
              Faucibus venenatis felis id augue sit cursus pellentesque enim
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>

            <span className="w-full text-left text-xs font-thin">
              May 8, 2020
            </span>
          </div>
        </div>

        <span className="hidden md:flex items-center border h-10 w-10  justify-center rounded-full text-gray-600 md:shadow-xl md:shrink-0">
          <ArrowRight size={18} />
        </span>
      </div>

      <div className="w-full flex flex-row items-center justify-between mt-5 md:hidden">
        <span className="border border-gray-300 h-14 w-14 flex items-center justify-center rounded-full text-gray-600">
          <ArrowLeft size={24} />
        </span>
        <span className="border border-gray-300 h-14 w-14 flex items-center justify-center rounded-full text-gray-600">
          <ArrowRight size={24} />
        </span>
      </div>
    </section>
  );
};
