import { ArrowUpRight } from "lucide-react";

export const OtherFeatures = () => {
  return (
    <section className="flex md:px-16">
      <div className="flex flex-col items-center justify-around space-y-4 md:flex-row">
        <div className="flex flex-col px-4 items-start justify-around space-y-6 md:w-2/5 md:h-full">
          <div className="flex flex-nowrap text-sm items-start justify-center gap-3">
            <button className="border px-3 py-2 md:px-4 md:py-3 rounded-full">
              Competition
            </button>
            <button className="border px-3 py-2 md:px-4 md:py-3 rounded-full">
              Training
            </button>
            <button className="border px-3 py-2 md:px-4 md:py-3 rounded-full">
              Friendly Match
            </button>
          </div>
          <div className="text-4xl leading-snug md:text-6xl font-thin md:max-w-lg">
            <p>Experience the best in Courts, Fields, and More</p>
          </div>
          <div className="text-sm md:max-w-80">
            <p>
              Our state-of-art sports facilities offer a variety of courts and
              fields, including tennis, basketball and football, designed to
              cater to both casual player and competitive athletes.
            </p>
          </div>
          <div className="flex text-xs items-center justify-around border px-3 py-2 md:px-5 md:py-3 rounded-full space-x-2 bg-black text-white">
            <button>Book now</button>
            <ArrowUpRight size={16} />
          </div>
        </div>

        <div className="md:w-3/5 md:h-full pr-3">
          <img
            src="./OtherFeatureImg1.png"
            alt=""
            className="md:block hidden w-full h-full object-cover"
          />
          <img
            src="./OtherFeatureImg2.png"
            alt=""
            className="md:hidden block h-full w-full"
          />
        </div>
      </div>
    </section>
  );
};
