import { Search, ArrowUpRight } from "lucide-react";
import { useState } from "react";
import smallImg1 from "@assets/HeroSmallimg1.png";
import smallImg2 from "@assets/HeroSmallimg2.png";
import smallImg3 from "@assets/HeroSmallimg3.png";
import smallImg4 from "@assets/HeroSmallimg4.png";

export const Hero = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <section className="h-screen font-roboto flex flex-col justify-start bg-cover bg-center bg-no-repeat text-white bg-[url('/HeroImgMobile.png')] lg:bg-[url('/HeroImgDesktop.png')] px-3 py-4 2xl:py-4 2xl:px-6">
        <nav className="w-full px-2 py-7 flex items-center justify-between mx-auto">
          <div className="flex items-center gap-2 text-xl tracking-widest font-hind">
            <span className="font-semibold">LOUVER</span>
            <span className="font-sans">SPORT</span>
          </div>

          <div className="h-14 w-14 border backdrop-blur-sm flex items-center justify-center rounded-full lg:hidden">
            <button onClick={() => setOpen(!open)} aria-label="Toggle menu">
              ☰
            </button>
          </div>

          <div className="hidden lg:flex items-center gap-4 2xl:gap-16">
            <div className="hidden lg:flex w-64 h-14 items-center backdrop-blur-sm p-2 rounded-full xl:w-96 2xl:w-96">
              <ul className="mx-auto flex items-center space-x-6 text-sm xl:space-x-10">
                <li>About Us</li>
                <li>Facilities</li>
                <li>Membership</li>
              </ul>
            </div>

            <div className="hidden lg:flex h-14 w-56 items-center justify-between backdrop-blur-sm p-2 rounded-full border">
              <span className="flex-wrap ml-3 text-sm">Search here...</span>
              <div className="h-12 w-12 flex items-center justify-center bg-white text-gray-300 border rounded-full">
                <Search size={28} className="leading-none" />
              </div>
            </div>

            <div className="hidden lg:flex items-center justify-center w-32 h-14 p-2 rounded-full bg-gray-800">
              <button className="flex items-center gap-2 text-sm">
                Book now <ArrowUpRight size={18} />
              </button>
            </div>
          </div>

          {open && (
            <div className="fixed top-28 right-6 z-50 w-32 bg-white text-black rounded-lg shadow-lg lg:hidden">
              <ul className="flex flex-col text-sm">
                <li
                  onClick={() => setOpen(false)}
                  className="px-4 py-2 hover:bg-black hover:text-white cursor-pointer"
                >
                  About Us
                </li>
                <li
                  onClick={() => setOpen(false)}
                  className="px-4 py-2 hover:bg-black hover:text-white cursor-pointer"
                >
                  Facilities
                </li>
                <li
                  onClick={() => setOpen(false)}
                  className="px-4 py-2 hover:bg-black hover:text-white cursor-pointer"
                >
                  Membership
                </li>
              </ul>
            </div>
          )}
        </nav>

        <div className="w-full h-16 flex items-center justify-between backdrop-blur-sm p-2 rounded-full border lg:hidden">
          <span className="flex-wrap ml-3">Search here...</span>
          <div className="h-12 w-12 flex items-center justify-center bg-white text-gray-300 border rounded-full">
            <Search size={28} className="leading-none" />
          </div>
        </div>

        <div className="xl:mr-40 2xl:mt-28 2xl:-ml-20">
          <div className="flex flex-col items-end mt-16 text-xs lg:mt-40">
            <span className="mr-20">*</span>
            <p className="flex flex-col">
              <span>All in one sports</span>
              <span>facilities center</span>
            </p>
          </div>
        </div>

        <div className="inline-flex self-start justify-center px-3 py-2 border text-sm bg-transparent rounded-full mt-16 lg:-mt-14 2xl:-mt-24 2xl:py-4 2xl:px-4">
          <button>Sport Center</button>
        </div>

        <h1 className="text-3xl leading-none mt-3 md:leading-snug lg:text-4xl lg:mt-10 lg:leading-snug lg:font-light 2xl:text-5xl 2xl:leading-normal 2xl:font-light">
          <span className="block">Your Play, Your Way-</span>
          <span className="block">Modern Sports Facilities</span>
          <span className="block">for Every Passion</span>
        </h1>

        <div className="flex flex-col items-end mt-20 lg:mt-12 2xl:mt-20">
          <div className="flex items-center justify-center border border-blue-600 rounded-full -space-x-3 px-2 py-1 -mt-5 2xl:-mt-8 2xl:px-3 2xl:py-3">
            <img
              src={smallImg1}
              alt="image"
              className="h-12 w-12 2xl:h-14 2xl:w-14 rounded-full border bg-gray-500"
            />
            <img
              src={smallImg2}
              alt="image"
              className="h-12 w-12 2xl:h-14 2xl:w-14 rounded-full border bg-gray-500"
            />
            <img
              src={smallImg3}
              alt="image"
              className="h-12 w-12 2xl:h-14 2xl:w-14 rounded-full border bg-gray-500"
            />
            <img
              src={smallImg4}
              alt="image"
              className="h-12 w-12 2xl:h-14 2xl:w-14 rounded-full border bg-gray-500"
            />
          </div>
          <p className="text-right text-xs w-52 max-w-xs ml-auto leading-snug mt-2 xl:mt-5 2xl:w-64 2xl:max-w-none 2xl:text-sm 2xl:mt-5">
            We’re committed to delivering a high quality experience in a
            welcoming and supportive atmosphere
          </p>
        </div>
      </section>
    </>
  );
};
