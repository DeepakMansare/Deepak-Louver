import { Search, Menu, ArrowUpRight } from "lucide-react";
import { useState } from "react";

export const Navbar = ({
  search,
  setSearch,
  setActiveSection,
}: {
  search: string;
  setSearch: React.Dispatch<React.SetStateAction<string>>;
  setActiveSection: React.Dispatch<React.SetStateAction<string | null>>;
}) => {
  const [open, setOpen] = useState<boolean>(false);

  const navItems: { label: string; target: string }[] = [
    { label: "About Us", target: "about" },
    { label: "Facilities", target: "facilities" },
    { label: "Membership", target: "membership" },
  ];

  const handleScroll = (target: string) => {
    setActiveSection(target);
    setTimeout(() => setActiveSection(null), 800);
    document.getElementById(target)?.scrollIntoView({ behavior: "smooth" });
    setOpen(false);
  };

  return (
    <nav className="relative w-full flex items-center justify-between py-6">
      <div className="flex items-center gap-2 text-xl tracking-widest font-hind">
        <span className="font-semibold">LOUVER</span>
        <span>SPORT</span>
      </div>

      <div className="flex items-center gap-4 ml-auto md:w-full">
        <div className="hidden md:flex items-center gap-4 w-full ml-auto justify-end font-light">
          <div className="flex items-center justify-between backdrop-blur-sm px-4 py-5 rounded-full flex-1 w-full max-w-sm">
            <ul className="flex items-center gap-8 text-sm whitespace-nowrap mx-auto">
              {navItems.map((item) => (
                <li
                  key={item.target}
                  className="cursor-pointer"
                  onClick={() => handleScroll(item.target)}
                >
                  {item.label}
                </li>
              ))}
            </ul>
          </div>

          <div className="flex items-center justify-between backdrop-blur-sm px-3 py-2 rounded-full border flex-1 w-full max-w-52">
            <input
              type="text"
              placeholder="Search here..."
              value={search}
              className="bg-transparent text-xs outline-none w-full"
              onChange={(e) => setSearch(e.target.value)}
            />
            <div
              className="h-10 w-10 flex items-center justify-center bg-white text-gray-300 border rounded-full shrink-0 cursor-pointer"
              onClick={() => console.log(search)}
            >
              <Search size={20} />
            </div>
          </div>

          <button
            className="px-4 py-6 text-sm rounded-full bg-gray-800 whitespace-nowrap flex items-center gap-1 md:px-3 md:py-4 cursor-pointer"
            onClick={() => handleScroll("membership")}
          >
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
        <div
          className="fixed inset-0 z-40 md:hidden"
          onClick={() => setOpen(false)}
        />
      )}

      {open && (
        <div className="absolute top-24 right-4 z-50 w-32 bg-white text-black rounded-lg shadow-lg md:hidden">
          <ul className="flex flex-col text-sm">
            {navItems.map((item) => (
              <li
                key={item.target}
                onClick={() => handleScroll(item.target)}
                className="px-4 py-2 hover:bg-black hover:text-white cursor-pointer"
              >
                {item.label}
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
};
