export const Navbar = () => {
  return <>nav</>;
};

// import { useState } from "react";
// import { Search, ArrowUpRight } from "lucide-react";

// export const Navbar = () => {
//   const [open, setOpen] = useState(false);

//   return (
//     <>
//       <nav className="flex items-center lg:justify-evenly">
//         <div className="flex items-center gap-1 sm:gap-2 text-xl sm:text-2xl md:text-2xl font-normal tracking-widest font-hind">
//           <span className="font-semibold">LOUVER</span>
//           <span className="font-light">SPORT</span>
//         </div>

//         <ul className="hidden lg:flex ml-auto items-center justify-between gap-6 text-sm lg:backdrop-blur-sm lg:bg-white/10 lg:rounded-full lg:w-full max-w-lg h-16 lg:px-14 lg:py-9 lg:ml-96">
//           <li className="cursor-pointer hover:opacity-80 transition-opacity">
//             About Us
//           </li>
//           <li className="cursor-pointer hover:opacity-80 transition-opacity">
//             Facilities
//           </li>
//           <li className="cursor-pointer hover:opacity-80 transition-opacity">
//             Membership
//           </li>
//         </ul>

//         <div className="hidden lg:flex items-center justify-center gap-2 border border-white rounded-full px-3 py-2 text-sm lg:backdrop-blur-sm lg:bg-white/10 lg:rounded-full lg:w-52 lg:h-16 ">
//           <span>Search here...</span>
//           <div className="lg:flex items-center justify-center ml-auto h-12 w-12 rounded-full bg-white/80 ">
//             <Search size={18} className="text-gray-400" />
//           </div>
//         </div>

//         <button className="hidden lg:flex items-center justify-center gap-2 bg-black text-white px-4 py-2 rounded-full text-sm hover:bg-gray-900 transition-colors lg:rounded-full lg:w-40 lg:h-16">
//           Book now
//           <ArrowUpRight size={16} />
//         </button>

//         <button
//           className="lg:hidden text-xl w-14 h-14 rounded-full border bottom-1 sm:text-2xl hover:opacity-80 transition-opacity bg-white/20 backdrop-blur-md"
//           onClick={() => setOpen(!open)}
//           aria-label="Toggle menu"
//         >
//           ☰
//         </button>
//       </nav>

//       {open && (
//         <div className="lg:hidden bg-black bg-opacity-95 text-white px-4 py-6 mt-4 rounded-lg">
//           <ul className="flex flex-col gap-4 text-sm sm:text-base">
//             <li
//               onClick={() => setOpen(false)}
//               className="cursor-pointer hover:opacity-80 transition-opacity py-2"
//             >
//               About Us
//             </li>
//             <li
//               onClick={() => setOpen(false)}
//               className="cursor-pointer hover:opacity-80 transition-opacity py-2"
//             >
//               Facilities
//             </li>
//             <li
//               onClick={() => setOpen(false)}
//               className="cursor-pointer hover:opacity-80 transition-opacity py-2"
//             >
//               Membership
//             </li>
//             <li className="pt-2 border-t border-gray-700">
//               <button className="flex items-center gap-2 bg-white text-black px-4 py-2 rounded-full text-sm w-full justify-center">
//                 Book now
//                 <ArrowUpRight size={16} />
//               </button>
//             </li>
//           </ul>
//         </div>
//       )}
//     </>
//   );
// };
