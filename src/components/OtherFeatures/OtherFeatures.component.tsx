import { ArrowUpRight } from "lucide-react";

export const OtherFeatures = () => {
  return (
    <section className="flex md:px-8 font-roboto">
      <div className="flex flex-col items-center justify-around space-y-4 md:flex-row">
        <div className="flex flex-col px-4 items-start justify-around space-y-6 md:w-2/5 md:h-full md:space-y-0">
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
          <div className="text-4xl leading-snug md:text-6xl font-thin md:max-w-xl">
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

        <div className="w-full h-112 p-4 relative md:w-3/5 md:h-full">
          <div className="absolute inset-5 rounded-3xl bg-blue-200 blur-xs -translate-x-6 -translate-y-6"></div>

          <img
            src="./OtherFeatureImg.jpg"
            alt="OtherFeatureImg"
            className="relative h-full w-full rounded-3xl object-cover"
          />
        </div>
      </div>
    </section>
  );
};
