import { Send } from "lucide-react";
import { useState } from "react";

import { NewsletterImg } from "@assets";

export const Newsletter = () => {
  const [email, setEmail] = useState("");

  return (
    <section className="px-2 py-4 md:px-10 md:py-10">
      <div className="flex flex-col bg-gray-900 rounded-3xl p-4 text-white font-roboto space-y-14 md:space-y-4 md:space-x-0 md:grid md:grid-cols-3 md:gap-8 md:w-full">
        <div className="w-full h-full">
          <img
            src={NewsletterImg}
            alt="Newsletter"
            className="w-full h-full object-cover rounded-3xl"
          />
        </div>

        <div className="flex flex-col justify-between w-full space-y-8 md:col-span-2 md:justify-around md:space-y-2">
          <div className="flex items-start space-x-3">
            <button className="border border-white/40 rounded-full px-4 py-3 md:px-6">
              Membership
            </button>
            <button className="bg-white text-black rounded-full px-6 py-3 md:px-7 md:py-4">
              Newsletter
            </button>
          </div>

          <h1 className="text-3xl md:text-4xl leading-snug">
            Get the Last Updates, Special Offers, and Exclusive Event
            Invitations!
          </h1>

          <div className="flex items-center w-full bg-gray-700 px-6 h-16 rounded-full max-w-xl md:max-w-md">
            <input
              type="email"
              className="bg-transparent outline-none border-none w-full text-sm placeholder:text-gray-300"
              placeholder="Enter your Email id"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <div
              className="flex items-center justify-center rounded-full bg-sky-400 h-12 w-12 shrink-0"
              onClick={() => setEmail("")}
            >
              <Send size={20} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
