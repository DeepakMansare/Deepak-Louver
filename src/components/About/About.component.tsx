import { ArrowLeft, ArrowRight, ArrowUpRight } from "lucide-react";
import { useState } from "react";

import { aboutSlides } from "@mockdata";

export const About = () => {
  const [index, setIndex] = useState<number>(0);

  return (
    <section className="mt-4 py-6 px-3 font-roboto space-y-7 md:flex md:flex-row md:items-stretch md:justify-center md:space-x-6 md:space-y-0 md:px-10 md:py-4">
      <div className="flex flex-col justify-between gap-6 w-full font-roboto md:flex-1 md:min-h-full">
        <div className="md:flex md:flex-col md:justify-between space-y-10">
          <button className="inline-flex self-start items-center gap-2 whitespace-nowrap px-4 py-3 border border-gray-300 rounded-full text-sm md:py-4 md:px-6 md:text-xs">
            About Louver
          </button>

          <p className="flex items-center justify-center text-3xl font-thin md:text-3xl">
            At Louvre sport center, we’re passionate about providing a top-notch
            environment for athletes of all levels.
          </p>
        </div>
        <button className="inline-flex self-start items-center px-7 py-5 md:px-6 md:py-5 border rounded-full whitespace-nowrap gap-2 bg-black/80 text-white text-sm cursor-pointer">
          Get in Touch
          <ArrowUpRight size={20} />
        </button>
      </div>

      <div className="flex flex-col justify-between bg-[url('/AboutImg1.png')] bg-cover bg-center min-h-96 rounded-3xl text-white p-6 md:flex-1">
        <button className="self-start border backdrop-blur-sm px-4 py-2 rounded-3xl text-xs font-thin">
          Indoor Area
        </button>

        <div className="flex items-center justify-between gap-3">
          <p>Versatile space for a wide range of activities</p>

          <span className="text-black bg-white h-12 w-12 rounded-full inline-flex items-center justify-center shrink-0 ">
            <ArrowUpRight size={18} />
          </span>
        </div>
      </div>

      <div className="flex flex-col md:flex-1 md:min-h-full">
        <div className="flex flex-col justify-between bg-[url('/AboutImg2.png')] rounded-3xl bg-cover bg-center min-h-56 text-white p-6 md:rounded-xl">
          <button className="self-start border backdrop-blur-sm px-2 py-1 rounded-3xl text-xs">
            Outdoor Area
          </button>

          <div className="flex items-center justify-between gap-3">
            <p className="text-xl">Futsal Court</p>

            <span className="text-white bg-black h-10 w-10 rounded-full inline-flex items-center justify-center shrink-0">
              <ArrowUpRight size={24} />
            </span>
          </div>
        </div>

        <div className="flex flex-row justify-between py-6 space-x-5 text-gray-500">
          <p className="text-lg">{aboutSlides[index]}</p>

          <div className="flex flex-row justify-between gap-2 text-sm">
            <ArrowLeft
              size={10}
              className="h-10 w-10 md:h-12 md:w-12 border border-gray-300 backdrop-blur-sm rounded-full p-2 cursor-pointer"
              onClick={() =>
                setIndex(
                  (prev) =>
                    (prev - 1 + aboutSlides.length) % aboutSlides.length,
                )
              }
            />

            <ArrowRight
              size={10}
              className="h-10 w-10 md:h-12 md:w-12 border border-gray-300 backdrop-blur-sm rounded-full p-2 cursor-pointer"
              onClick={() =>
                setIndex((prev) => (prev + 1) % aboutSlides.length)
              }
            />
          </div>
        </div>
      </div>
    </section>
  );
};
