import {
  Hero,
  About,
  Facilities,
  OtherFeatures,
  ContactForm,
  Testimonials,
  Newsletter,
  Footer,
} from "@components";

import { useState } from "react";

export const Home = () => {
  const [search, setSearch] = useState<string>("");
  const [activeSection, setActiveSection] = useState<string | null>(null);

  return (
    <div className="flex flex-col space-y-3 md:space-y-20">
      <section
        id="hero"
        className={
          activeSection === "hero"
            ? "bg-gray-100 transition-colors duration-500"
            : ""
        }
      >
        <Hero
          search={search}
          setSearch={setSearch}
          setActiveSection={setActiveSection}
        />
      </section>

      <section
        id="about"
        className={
          activeSection === "about"
            ? "bg-gray-200 transition-colors duration-500"
            : ""
        }
      >
        <About />
      </section>

      <section
        id="facilities"
        className={
          activeSection === "facilities"
            ? "bg-gray-200 transition-colors duration-500"
            : ""
        }
      >
        <Facilities />
      </section>

      <section
        id="otherFeatures"
        className={
          activeSection === "otherFeatures"
            ? "bg-gray-200 transition-colors duration-500"
            : ""
        }
      >
        <OtherFeatures />
      </section>

      <section
        id="membership"
        className={
          activeSection === "membership"
            ? "bg-gray-200 transition-colors duration-500"
            : ""
        }
      >
        <ContactForm />
      </section>

      <section
        id="testimonials"
        className={
          activeSection === "testimonials"
            ? "bg-gray-200 transition-colors duration-500"
            : ""
        }
      >
        <Testimonials />
      </section>

      <section
        id="newsletter"
        className={
          activeSection === "newsletter"
            ? "bg-gray-200 transition-colors duration-500"
            : ""
        }
      >
        <Newsletter />
      </section>

      <section
        id="footer"
        className={
          activeSection === "footer"
            ? "bg-gray-200 transition-colors duration-500"
            : ""
        }
      >
        <Footer />
      </section>
    </div>
  );
};
