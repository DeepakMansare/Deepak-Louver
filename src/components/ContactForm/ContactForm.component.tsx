import { inputConfig } from "@mockdata";
import { useState } from "react";

export const ContactForm = () => {
  const [userData, setUserData] = useState<Record<string, string>>({});

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUserData({ ...userData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(userData);
    setUserData({});
  };

  return (
    <section className="w-full h-96 bg-gray-50 space-y-7">
      <div className="space-y-7 md:flex md:flex-row-reverse md:items-stretch md:w-full md:h-152">
        <div className="px-4 py-8 font-roboto font-thin md:flex md:flex-1 md:justify-center md:h-full md:ml-7">
          <div className="md:flex md:flex-col space-y-4">
            <h1 className="text-4xl md:text-6xl">Get in Touch</h1>

            <p className="text-xs md:text-sm">
              Reach out and we’ll get in touch within 24 hours.
            </p>

            <form
              className="max-w-2xl flex flex-col space-y-4 text-xs font-medium md:w-lg md:space-y-6 md:mt-7"
              onSubmit={handleSubmit}
            >
              {inputConfig.map((item) => (
                <input
                  key={item.name}
                  type={item.type}
                  name={item.name}
                  placeholder={item.placeholder}
                  value={userData[item.name] || ""}
                  onChange={handleChange}
                  className="px-8 py-4 rounded-full border border-gray-300 md:px-10 md:py-7"
                />
              ))}
              <button
                className="px-3 py-4 rounded-full border border-gray-300 bg-sky-200 font-medium md:px-10 md:py-7 md:shadow-xl"
                type="submit"
              >
                SUBMIT
              </button>
            </form>
          </div>
        </div>

        <div className="w-full h-128 md:max-w-none md:mx-0 md:flex-1 md:flex md:h-full">
          <img
            src="/ContactForm.png"
            alt="contactform"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </section>
  );
};
