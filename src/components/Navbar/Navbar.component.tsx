export const Navbar = () => {
  return (
    <nav className="w-full flex items-center justify-between px-8 py-6">
      <div className="text-white text-lg tracking-widest">
        <span className="font-bold">LOUVER</span> SPORT
      </div>

      <ul className="flex items-center gap-8 bg-white/20 backdrop-blur-sm px-8 py-3 rounded-full text-white text-sm">
        <li className="hover:opacity-80">About Us</li>
        <li className="cursor-pointer hover:opacity-80">Facilities</li>
        <li className="cursor-pointer hover:opacity-80">Membership</li>
      </ul>

      <div className="flex items-center gap-4">
        <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-full">
          <span className="text-gray-500 text-sm">Search here...</span>
          <div className="bg-lime-400 w-8 h-8 rounded-full flex items-center justify-center text-black font-bold">
            <img src="" alt="search icon" />
          </div>
        </div>

        <button className="flex items-center gap-2 bg-black text-white px-6 py-3 rounded-full text-sm font-medium hover:bg-gray-900">
          Book now
          <span>↗</span>
        </button>
      </div>
    </nav>
  );
};
