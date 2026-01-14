import { Search, Menu, ArrowUpRight } from "lucide-react";
import { useState } from "react";

import { smallImg1, smallImg2, smallImg3, smallImg4 } from "@assets";

export const Hero = () => {
  const [open, setOpen] = useState(false);
  const navItems = ["About Us", "Facilities", "Membership"];
  const descriptionLines = [
    "We’re committed to delivering a high",
    "quality experience in a welcoming and",
    "supportive atmosphere",
  ];

  return (
    <section className="min-h-screen font-roboto flex flex-col bg-cover bg-center bg-no-repeat text-white bg-[url('/HeroImgMobile.png')] md:bg-[url('/HeroImgDesktop.png')] px-3 py-4 md:px-4 md:py-3 overflow-auto">
      <nav className="w-full flex items-center justify-between py-6">
        <div className="flex items-center gap-2 text-xl tracking-widest font-hind">
          <span className="font-semibold">LOUVER</span>
          <span>SPORT</span>
        </div>

        <div className="flex items-center gap-4 ml-auto min-w-0 md:w-full">
          <div className="hidden md:flex items-center gap-6 w-full ml-auto justify-end font-light">
            <div className="flex items-center justify-between backdrop-blur-sm px-4 py-5 rounded-full flex-1 w-full max-w-sm">
              <ul className="flex items-center gap-8 text-sm whitespace-nowrap mx-auto">
                {navItems.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>

            <div className="flex items-center justify-between backdrop-blur-sm px-4 py-2 rounded-full border flex-1 w-full max-w-52 gap-1">
              <span className="text-sm">Search here...</span>
              <div className="h-10 w-10 flex items-center justify-center bg-white text-gray-300 border rounded-full shrink-0">
                <Search size={20} />
              </div>
            </div>

            <button className="px-4 py-6 text-sm rounded-full bg-gray-800 whitespace-nowrap flex items-center gap-1 md:px-3 md:py-4">
              Book now
              <ArrowUpRight size={16} />
            </button>
          </div>

          <div className="h-14 w-14 border backdrop-blur-sm flex items-center justify-center rounded-full md:hidden">
            <button onClick={() => setOpen(!open)} aria-label="Toggle menu">
              <Menu size={26} />
            </button>
          </div>
        </div>

        {open && (
          <div className="fixed top-24 right-4 z-50 w-32 bg-white text-black rounded-lg shadow-lg md:hidden">
            <ul className="flex flex-col text-sm">
              {["About Us", "Facilities", "Membership"].map((item) => (
                <li
                  key={item}
                  onClick={() => setOpen(false)}
                  className="px-4 py-2 hover:bg-black hover:text-white cursor-pointer"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
        )}
      </nav>

      <div className="w-full max-w-md mx-auto h-16 flex items-center justify-between gap-3 backdrop-blur-sm p-2 rounded-full border md:hidden md:gap-2">
        <span className="pl-3">Search here...</span>
        <div className="h-12 w-12 flex items-center justify-center bg-white text-gray-300 border rounded-full shrink-0">
          <Search size={28} />
        </div>
      </div>

      <div className="flex justify-end mt-16 text-xs md:mt-32 w-full">
        <div className="inline-block md:mr-40">
          <span className="block text-left">*</span>
          <p className="flex flex-col text-right">
            <span>All in one sports</span>
            <span>facilities center</span>
          </p>
        </div>
      </div>

      <div className="inline-flex self-start px-3 py-2 border text-sm rounded-full mt-12 md:-mt-1 md:px-3 md:py-3">
        <button>Sport Center</button>
      </div>

      <h1 className="text-3xl leading-normal mt-3 md:text-5xl md:leading-tight md:font-light">
        <span className="block">Your Play, Your Way-</span>
        <span className="block">Modern Sports Facilities</span>
        <span className="block">for Every Passion</span>
      </h1>

      <div className="flex flex-col items-end gap-4 mt-9 md:mt-5">
        <div className="flex items-center border border-blue-600 rounded-full -space-x-3 px-2 py-1 md:px-4 md:py-2">
          {[smallImg1, smallImg2, smallImg3, smallImg4].map((img, i) => (
            <img
              key={i}
              src={img}
              alt="avatar"
              className="h-12 w-12 rounded-full border bg-gray-500 md:h-14 md:w-14"
            />
          ))}
        </div>

        <p className="text-right text-xs leading-snug text-gray-200">
          {descriptionLines.map((line, i) => (
            <span key={i} className="block">
              {line}
            </span>
          ))}
        </p>
      </div>
    </section>
  );
};
