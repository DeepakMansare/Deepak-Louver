import { ArrowUpRight } from "lucide-react";

export const OtherFeatures = () => {
  return (
    <section className="flex px-16">
      <div className="flex flex-col items-center justify-around space-y-4 md:flex-row">
        <div className="flex flex-col items-start justify-around space-y-6 md:w-2/5 md:h-full">
          <div className="flex text-sm items-start justify-center space-x-3">
            <button className="border px-4 py-3 rounded-full shrink-0">
              Competition
            </button>
            <button className="border px-4 py-3 rounded-full shrink-0">
              Training
            </button>
            <button className="border px-4 py-3 rounded-full shrink-0">
              Friendly Match
            </button>
          </div>
          <div className="text-3xl md:text-6xl font-thin md:max-w-lg">
            <p>Experience the best in Courts, Fields, and More</p>
          </div>
          <div className="text-sm md:max-w-80">
            <p>
              Our state-of-art sports facilities offer a variety of courts and
              fields, including tennis, basketball and football, designed to
              cater to both casual player and competitive athletes.
            </p>
          </div>
          <div className="flex text-xs items-center justify-around border px-5 py-3 rounded-full space-x-2 bg-black text-white">
            <button>Book now</button>
            <ArrowUpRight size={16} />
          </div>
        </div>

        <div className="md:w-4/7 md:h-full">
          <img
            src="./OtherFeatureImg1.png"
            alt=""
            className="md:block hidden object-cover"
          />
          <img
            src="./OtherFeatureImg2.png"
            alt=""
            className="md:hidden block"
          />
        </div>
      </div>
    </section>
  );
};
