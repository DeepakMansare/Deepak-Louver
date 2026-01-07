import HeroImg from "../../assets/HeroImg.png";
import { Navbar } from "@components";

export const Hero = () => {
  return (
    <section
      className="relative min-h-screen pt-24 bg-cover bg-center"
      style={{ backgroundImage: `url(${HeroImg})` }}
    >
      <Navbar />

      <div className="px-8 pt-12 flex justify-between">
        <div className="max-w-xl">
          <div className="inline-block border border-white/50 text-white text-sm px-4 py-2 rounded-full mb-8">
            Sport Center
          </div>

          <h1 className="text-white text-5xl font-light leading-tight">
            Your Play, Your Way-
            <br />
            Modern Sports Facilities
            <br />
            for Every Passion
          </h1>
        </div>

        <div className="text-white text-right text-xs max-w-28 mt-20">
          <span className="text-lg">*</span>
          <p className="mt-1">All in one sports facilities centre</p>
        </div>
      </div>

      <div className="absolute bottom-8 right-8 bg-white/90 backdrop-blur-sm rounded-2xl p-4 max-w-xs">
        <div className="flex -space-x-2 mb-2">
          <div className="w-8 h-8 rounded-full bg-gray-300 border-2 border-white"></div>
          <div className="w-8 h-8 rounded-full bg-gray-400 border-2 border-white"></div>
          <div className="w-8 h-8 rounded-full bg-gray-500 border-2 border-white"></div>
          <div className="w-8 h-8 rounded-full bg-gray-600 border-2 border-white"></div>
        </div>
        <p className="text-xs text-gray-700">
          We're committed to delivering a high-quality experience in a welcoming
          and supportive atmosphere
        </p>
      </div>
    </section>
  );
};
