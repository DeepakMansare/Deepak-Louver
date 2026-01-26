export const ContactForm = () => {
  return (
    <section className="w-full bg-gray-50 space-y-7">
      <div className="space-y-7 md:flex md:flex-row-reverse md:items-stretch md:w-full">
        <div className="px-4 py-8 font-roboto font-thin md:flex md:flex-1 md:justify-center">
          <div className="md:flex md:flex-col space-y-4">
            <h1 className="text-4xl md:text-6xl">Get in Touch</h1>

            <p className="text-xs md:text-sm">
              Reach out and we’ll get in touch within 24 hours.
            </p>

            <form className="max-w-2xl flex flex-col space-y-4 text-xs font-medium md:w-lg md:space-y-8">
              <input
                placeholder="Full Name"
                className="px-8 py-4 rounded-full border border-gray-300 md:px-10 md:py-6"
              />
              <input
                placeholder="Email Address"
                className="px-8 py-4 rounded-full border border-gray-300 md:px-10 md:py-6"
              />
              <input
                placeholder="Phone Number"
                className="px-8 py-4 rounded-full border border-gray-300 md:px-10 md:py-6"
              />
              <button className="px-3 py-4 rounded-full border border-gray-300 bg-cyan-200 font-medium md:px-10 md:py-5">
                SUBMIT
              </button>
            </form>
          </div>
        </div>

        <div className="max-w-2xl mx-auto md:max-w-none md:mx-0 md:flex-1 md:flex">
          <img
            src="/ContactForm1.png"
            alt="contactform"
            className="w-full md:hidden"
          />

          <img
            src="/ContactForm2.png"
            alt="contactform"
            className="hidden md:block w-full h-full object-cover"
          />
        </div>
      </div>
    </section>
  );
};
