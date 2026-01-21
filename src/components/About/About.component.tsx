import { ArrowLeft, ArrowRight, ArrowUpRight } from "lucide-react";

export const About = () => {
  return (
    <section className="mt-4 py-6 px-3 font-roboto space-y-7 md:flex md:flex-row md:items-stretch md:justify-center md:space-x-6 md:space-y-0 md:px-7 md:py-4">
      <div className="flex flex-col justify-between gap-6 w-full font-roboto md:flex-1">
        <button className="inline-flex self-start items-center gap-2 whitespace-nowrap px-3 py-2 border border-gray-300 rounded-full text-sm md:py-4 md:px-4 md:text-xs">
          About Louver
        </button>

        <p className="flex items-center justify-center text-3xl font-thin md:text-2xl">
          At Louvre sport center, we’re passionate about providing a top-notch
          environment for athletes of all levels.
        </p>

        <button className="inline-flex self-start items-center px-3 py-3 border rounded-full whitespace-nowrap gap-2 bg-black/80 text-white text-sm">
          Get in Touch
          <ArrowUpRight size={20} />
        </button>
      </div>

      <div className="flex flex-col justify-between bg-[url('/AboutImg1.png')] bg-cover bg-center min-h-72 rounded-3xl text-white p-6 md:flex-1">
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

      <div className="md:flex-1 flex flex-col justify-between">
        <div className="flex flex-col justify-between bg-[url('/AboutImg2.png')] rounded-3xl bg-cover bg-center min-h-48 text-white p-6 md:rounded-xl">
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
          <p>
            Discover your new - favourite place - to play, train, and compete.
          </p>

          <div className="flex flex-row justify-between gap-2 text-sm">
            <ArrowLeft
              size={8}
              className="h-10 w-10 border border-gray-300 backdrop-blur-sm rounded-full p-2"
            />
            <ArrowRight
              size={8}
              className="h-10 w-10 border border-gray-300 backdrop-blur-sm rounded-full p-2"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
