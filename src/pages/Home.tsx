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

const SECTIONS = [
  { id: "about", Component: About },
  { id: "facilities", Component: Facilities },
  { id: "otherFeatures", Component: OtherFeatures },
  { id: "membership", Component: ContactForm },
  { id: "testimonials", Component: Testimonials },
  { id: "newsletter", Component: Newsletter },
  { id: "footer", Component: Footer },
];

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

      {SECTIONS.map(({ id, Component }) => (
        <section
          key={id}
          id={id}
          className={
            activeSection === id
              ? "bg-gray-200 transition-colors duration-500"
              : ""
          }
        >
          <Component />
        </section>
      ))}
    </div>
  );
};
