export const Navbar = () => {
  return (
    <nav className="absolute top-0 left-0 px-12 h-16 w-full flex items-center justify-between">
      <div className="text-white font-bold tracking-widset">
        LOUVER <span>SPORT</span>
      </div>

      <ul className="flex items-center justify-between">
        <li>About us</li>
        <li>Facilities</li>
        <li>Membership</li>
      </ul>

      <div className="flex items-center justify-between">
        <span>Search here..</span>
        <img src="" alt="search icon" />
      </div>

      <div>
        <button>Book now</button>
      </div>
    </nav>
  );
};
