import { Search, ArrowUpRight } from "lucide-react";

export const Navbar = () => {
  return (
    <nav className="w-full h-[150px] flex items-center justify-between px-8">
      <div className="text-white text-[24px] leading-none tracking-[0.09em] font-['Hind Kochi']">
        <span className="font-bold">LOUVER</span>{" "}
        <span className="font-normal">SPORT</span>
      </div>

      <ul className="flex items-center justify-between w-[500px] h-[72px] pt-[24px] pr-[61px] pb-[24px] pl-[61px] gap-[10px] bg-white/20 backdrop-blur-sm rounded-full text-white text-[16px] translate-x-[275px]">
        <li className="cursor-pointer hover:opacity-80">About Us</li>
        <li className="cursor-pointer hover:opacity-80">Facilities</li>
        <li className="cursor-pointer hover:opacity-80">Membership</li>
      </ul>

      <div className="flex items-center justify-between w-[238px] h-[72px] border border-white backdrop-blur-sm px-[24px] rounded-full text-white text-[16px] translate-x-[150px]">
        <span className="text-[15px] whitespace-nowrap">Search here...</span>
        <div className="bg-white w-10 h-10 rounded-full flex items-center justify-center">
          <Search size={20} className="text-gray-400" />
        </div>
      </div>

      <button className="flex items-center w-[170px] h-[72px] pt-[19px] pr-[28px] pb-[19px] pl-[28px] gap-[10px] bg-black text-white rounded-full text-[16px] hover:bg-gray-900 ">
        Book now
        <ArrowUpRight size={22} />
      </button>
    </nav>
  );
};
