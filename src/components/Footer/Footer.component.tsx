import { Instagram, Facebook, Linkedin, Youtube } from "lucide-react";

export const Footer = () => {
  return (
    <section className="flex flex-col items-center justify-center bg-sky-200 rounded-3xl py-5 font-roboto space-y-18 md:space-y-6 md:px-20">
      <div className="flex flex-col space-y-8 md:flex-row md:items-start md:justify-between md:w-full">
        <div className="flex flex-col items-start justify-center space-y-7 px-3 py-5">
          <p className="text-4xl md:text-2xl md:max-w-xs">
            Your Play, Your Way- Modern Sports Facilities for Every Passion
          </p>
          <button className="bg-white px-5 py-3 rounded-full text-xs">
            Louvre sport
          </button>
        </div>

        <div className="grid grid-cols-2 px-3 max-w-sm mx-auto md:mx-0 md:w-full">
          <div className="space-y-5">
            <h3 className="">Facilities</h3>
            <ul className="text-xs space-y-2">
              <li>Tennis Courts</li>
              <li>Basketball Courts</li>
              <li>Football Field</li>
              <li>Swimming Pool</li>
              <li>Gym & Fitness Center</li>
              <li>Multi-purpose Hall</li>
              <li>Sauna & Relaxation Zone</li>
              <li>Locker Rooms</li>
            </ul>
          </div>

          <div className="grid grid-cols-2 gap-6">
            <div className="space-y-5">
              <h3>About Us</h3>
              <ul className="text-xs space-y-2">
                <li>Our Mission</li>
                <li>Vision</li>
                <li>Community</li>
              </ul>
            </div>

            <div className="space-y-5">
              <h3>Social</h3>
              <ul className="text-xs space-y-3">
                <li>
                  <button className="border border-gray-400 rounded-full px-2 py-1 flex items-center">
                    <Instagram size={14} />
                    instagram
                  </button>
                </li>
                <li>
                  <button className="border border-gray-400 rounded-full px-2 py-1 flex items-center">
                    <Facebook size={14} />
                    Facebook
                  </button>
                </li>
                <li>
                  <button className="border border-gray-400 rounded-full px-2 py-1 flex items-center">
                    <Linkedin size={14} />
                    linkedIn
                  </button>
                </li>
                <li>
                  <button className="border border-gray-400 rounded-full px-2 py-1 flex items-center">
                    <Youtube size={14} />
                    YouTube
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full text-xs border-t border-gray-400 flex items-center justify-between px-3 py-3 md:py-6">
        <span>Privacy Policy/Terms</span>
        <span>All rights reserved@louver 2024</span>
      </div>
    </section>
  );
};
