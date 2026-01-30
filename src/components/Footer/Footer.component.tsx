import { Footerfacilities, AboutUs, Buttons } from "@mockdata";

export const Footer = () => {
  return (
    <div className="px-2 mb-6">
      <div className="flex flex-col items-center justify-center bg-sky-200 rounded-3xl font-roboto space-y-12 py-1 md:space-y-8 md:px-18 md:py-10 md:max-w-full md:mx-9">
        <div className="flex flex-col space-y-8 md:flex-row md:items-start md:justify-between md:w-full">
          <div className="flex flex-col items-start justify-center space-y-4 md:space-y-7 px-3 py-6 md:py-0">
            <p className="text-4xl md:text-2xl md:max-w-72">
              Your Play, Your Way- Modern Sports Facilities for Every Passion
            </p>
            <button className="bg-white px-5 py-3 rounded-full text-xs">
              Louvre sport
            </button>
          </div>

          <div className="grid grid-cols-2 px-4 md:px-0 max-w-sm mx-auto md:mx-0 md:w-full md:mr-10">
            <div className="space-y-5">
              <h3 className="">Facilities</h3>
              <ul className="text-xs space-y-2">
                {Footerfacilities.map((item) => (
                  <li key={item.id}>{item.label}</li>
                ))}
              </ul>
            </div>

            <div className="grid grid-cols-2 gap-3 md:gap-18 whitespace-nowrap">
              <div className="space-y-5">
                <h3>About Us</h3>
                <ul className="text-xs space-y-2">
                  {AboutUs.map((item) => (
                    <li key={item.id}>{item.label}</li>
                  ))}
                </ul>
              </div>

              <div className="space-y-4">
                <h3>Social</h3>
                <ul className="text-xs space-y-3">
                  {Buttons.map((item) => (
                    <li key={item.id}>
                      <a
                        href={item.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block"
                      >
                        <button className="border border-gray-400 rounded-full px-2 py-1 flex items-center gap-1 md:gap-3 cursor-pointer">
                          <item.icon size={14} />
                          {item.label}
                        </button>
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="w-full text-xs border-t border-gray-400 flex items-center justify-between px-3 py-4 md:py-6 md:mt-3">
          <span>Privacy Policy/Terms</span>
          <span>All rights reserved@louver 2024</span>
        </div>
      </div>
    </div>
  );
};
