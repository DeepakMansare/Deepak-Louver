import HeroImg from "../../assets/HeroImg.png";
import { Navbar } from "@components";

export const Hero = () => {
  return (
    <section
      className="min-h-screen bg-cover bg-center px-4 py-4"
      style={{ backgroundImage: `url(${HeroImg})` }}
    >
      <Navbar />

      <div className="grid grid-cols-2 px-8 mt-44 gap-16">
        <div className="flex flex-col gap-6 max-w-[700px]">
          <div className="inline-flex items-center justify-center w-[133.4px] h-[53.36px] pt-[18px] pr-[23px] pb-[18px] pl-[23px] gap-[10px] border-[0.74px] border-white/50 rounded-full text-white text-sm">
            Sport Center
          </div>

          <h1 className="w-[531px] min-h-[179px] text-white text-[50px] font-light leading-[61px] tracking-[0px] font-['Roboto']">
            <span className="block">Your Play, Your Way-</span>
            <span className="block">Modern Sports Facilities</span>
            <span className="block">for Every Passion</span>
          </h1>
        </div>
      </div>

      <div className="flex flex-col items-start justify-center w-[80px] h-[60.08px] text-white text-xs ml-auto mb-20 mr-20 -translate-x-[220px] -translate-y-[200px]">
        <span className="text-xl font-bold">*</span>
        <p>All in one sports facilities centre</p>
      </div>

      <div className="flex justify-end px-8 mt-20 flex-col items-center w-[228px] h-[125.76px] rounded-full p-4 ml-auto mr-8 translate-y-[15px]">
        <div className="flex justify-center items-center -space-x-2 mb-3 w-[220px] border border-blue-500 rounded-full">
          <div className="w-12 h-12 rounded-full bg-gray-300 border-2 border-white"></div>
          <div className="w-12 h-12 rounded-full bg-gray-400 border-2 border-white"></div>
          <div className="w-12 h-12 rounded-full bg-gray-500 border-2 border-white"></div>
          <div className="w-12 h-12 rounded-full bg-gray-600 border-2 border-white"></div>
        </div>

        <p className="text-xs text-white flex flex-col items-end text-right mt-2 -translate-y-[10px] w-[220px]">
          <span>We're committed to delivering a high</span>
          <span>quality experience in a welcoming and</span>
          <span>supportive atmosphere</span>
        </p>
      </div>
    </section>
  );
};
