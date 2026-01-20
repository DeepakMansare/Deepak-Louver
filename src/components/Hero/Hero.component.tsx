import { Search } from "lucide-react";

import { smallImg1, smallImg2, smallImg3, smallImg4 } from "@assets";
import { Navbar } from "@components";

const descriptionLines: string[] = [
  "We’re committed to delivering a high",
  "quality experience in a welcoming and",
  "supportive atmosphere",
];

const targetImg = [smallImg1, smallImg2, smallImg3, smallImg4];

export const Hero = ({
  search,
  setSearch,
  setActiveSection,
}: {
  search: string;
  setSearch: React.Dispatch<React.SetStateAction<string>>;
  setActiveSection: React.Dispatch<React.SetStateAction<string | null>>;
}) => {
  return (
    <section className="min-h-screen font-roboto flex flex-col bg-cover bg-center bg-no-repeat text-white bg-[url('/HeroImgMobile.png')] md:bg-[url('/HeroImgDesktop.png')] px-3 py-4 md:px-4 md:py-3">
      <Navbar
        search={search}
        setSearch={setSearch}
        setActiveSection={setActiveSection}
      />

      <div className="w-full max-w-md mx-auto h-16 flex items-center justify-between gap-3 backdrop-blur-sm p-2 rounded-full border md:hidden md:gap-2">
        <input
          type="text"
          value={search}
          placeholder="Search here..."
          onChange={(e) => setSearch(e.target.value)}
          className="bg-transparent text-sm outline-none pl-3 w-full"
        />
        <div
          className="h-12 w-12 flex items-center justify-center bg-white text-gray-300 border rounded-full shrink-0 cursor-pointer"
          onClick={() => console.log(search)}
        >
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

      <div className="inline-flex self-start px-3 py-2 border text-sm rounded-full mt-12 md:-mt-1 md:py-3">
        <button>Sport Center</button>
      </div>

      <h1 className="text-3xl leading-normal mt-3 md:text-5xl md:leading-tight md:font-light">
        <span className="block">Your Play, Your Way-</span>
        <span className="block">Modern Sports Facilities</span>
        <span className="block">for Every Passion</span>
      </h1>

      <div className="flex flex-col items-end gap-4 mt-9 md:mt-5">
        <div className="flex items-center border border-blue-600 rounded-full -space-x-3 px-2 py-1 md:px-4 md:py-2">
          {targetImg.map((img, i) => (
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
