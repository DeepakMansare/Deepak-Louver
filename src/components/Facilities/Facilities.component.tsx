import { ArrowUpRight, ArrowRight, ArrowLeft } from "lucide-react";
import { useState } from "react";

export const Facilities = () => {
  const facilities = [
    {
      buttonTxt: "Tennis court",
      desc: "Professionally Designed Courts for Every Skill level",
      img: "/FacilitiesImg1.png",
    },
    {
      buttonTxt: "Swimming Pool",
      desc: "Dive In - Relax and Enjoy in Our Pool",
      img: "/FacilitiesImg2.png",
    },
    {
      buttonTxt: "Basketball court",
      desc: "Full-Sized Courts for play and Competition.",
      img: "/FacilitiesImg3.png",
    },
    {
      buttonTxt: "Outdoor Area",
      desc: "Enjoy the fresh air and beautiful surroundings",
      img: "/FacilitiesImg4.png",
    },
  ];

  const facilitiesNotes = [
    "Book a court for focused practice, team drills, or private coaching, and take your game to the next level.",
    "Train smarter with courts designed for performance, skill growth, and consistency.",
    "Perfect spaces for team drills, coaching sessions, and competitive preparation.",
  ];

  const [index, setIndex] = useState<number>(0);

  return (
    <section className="font-roboto px-3 space-y-9 md:px-7">
      <div className="flex flex-col space-y-6 md:flex-row md:items-center md:justify-between md:space-y-0">
        <div className="flex flex-col space-y-3 md:flex-row md:items-center md:space-x-4 md:space-y-0">
          <button className="inline-flex w-fit px-5 py-2 border border-gray-300 rounded-3xl text-sm">
            Facilities
          </button>
          <h1 className="text-3xl">Explore Our Facilities</h1>
        </div>

        <button className="inline-flex w-fit items-center bg-black/85 text-white px-5 py-3 rounded-3xl gap-2 font-thin text-xs">
          View all <ArrowUpRight size={18} />
        </button>
      </div>

      <div className="flex overflow-x-auto space-x-2 md:justify-start ">
        {facilities.map((item) => (
          <div
            key={item.buttonTxt}
            className="flex flex-col items-start justify-between border aspect-[3/4.7] w-80 md:w-1/4 shrink-0 px-2 py-3 bg-cover bg-center rounded-2xl text-white"
            style={{ backgroundImage: `url(${item.img})` }}
          >
            <button className="px-3 py-2 border rounded-3xl text-sm">
              {item.buttonTxt}
            </button>

            <div className="flex items-center justify-between bg-white/20 backdrop-blur-sm px-5 py-6 rounded-2xl font-thin text-sm text-white space-x-0">
              <p>{item.desc}</p>
              <span className="inline-flex aspect-square p-3 bg-black rounded-full shrink-0">
                <ArrowUpRight size={18} />
              </span>
            </div>
          </div>
        ))}
      </div>

      <div className="flex flex-col justify-center space-y-3 md:flex-row-reverse md:items-center md:justify-between md:space-y-0">
        <p className="text-sm font-thin text-right ml-auto max-w-96 md:text-base text-gray-600">
          {facilitiesNotes[index]}
        </p>
        <div className="flex items-center justify-end space-x-3">
          <span className="h-14 w-14 rounded-full border border-gray-300 flex items-center justify-center">
            <ArrowLeft
              size={24}
              strokeWidth={1}
              onClick={() =>
                setIndex(
                  (prev) =>
                    (prev - 1 + facilitiesNotes.length) %
                    facilitiesNotes.length,
                )
              }
            />
          </span>
          <span className="h-14 w-14 rounded-full border border-gray-300 flex items-center justify-center ">
            <ArrowRight
              size={24}
              strokeWidth={1}
              onClick={() =>
                setIndex((prev) => (prev + 1) % facilitiesNotes.length)
              }
            />
          </span>
        </div>
      </div>
    </section>
  );
};
