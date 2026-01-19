import { ArrowUpRight } from "lucide-react";

export const OtherFeatures = () => {
  return (
    <section className="flex flex-col space-y-5 font-roboto px-3 md:flex-row md:space-y-0 md:gap-6 md:space-x-3 md:px-7 md:h-96">
      <div className="inline-flex flex-col space-y-6 md:h-96 md:w-1/3 md:space-y-4">
        <div className="flex items-center space-x-2 text-xs md:flex-nowrap md:whitespace-nowrap">
          <button className="px-3 py-2 border border-gray-300 rounded-3xl whitespace-nowrap">
            Competition
          </button>
          <button className="px-3 py-2 border border-gray-300 rounded-3xl whitespace-nowrap">
            Training
          </button>
          <button className="px-3 py-2 border border-gray-300 rounded-3xl whitespace-nowrap">
            Friendly Match
          </button>
        </div>

        <h1 className="text-5xl font-thin md:font-light">
          Experience the best in Courts, Fields, and More
        </h1>

        <p className="text-sm md:text-sm font-thin">
          Our state-of-art sports facilities offer a variety of courts and
          fields, including tennis, basketball and football, designed to cater
          to both casual player and competitive athletes.
        </p>

        <button className="bg-black text-white inline-flex w-fit items-center px-4 py-2 rounded-3xl space-x-1 text-xs">
          <span>Book Now</span>
          <span>
            <ArrowUpRight size={14} />
          </span>
        </button>
      </div>

      <div className="rounded-3xl overflow-hidden max-w-3xl mx-auto md:max-w-none md:w-2/3 md:h-96">
        <img
          src="/OtherFeatureImg2.png"
          className="w-full h-full object-cover md:hidden "
        />

        <img
          src="/OtherFeatureImg1.png"
          className="hidden md:block w-full h-full object-cover"
        />
      </div>
    </section>
  );
};
