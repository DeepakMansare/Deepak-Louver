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

type SectionKey =
  | "hero"
  | "about"
  | "facilities"
  | "otherFeatures"
  | "membership"
  | "testimonials"
  | "newsletter"
  | "footer";

type SectionInfo = {
  id: SectionKey;
  Component: React.ComponentType<any>;
};

const SECTIONS: SectionInfo[] = [
  { id: "hero", Component: Hero },
  { id: "about", Component: About },
  { id: "facilities", Component: Facilities },
  { id: "otherFeatures", Component: OtherFeatures },
  { id: "membership", Component: ContactForm },
  { id: "testimonials", Component: Testimonials },
  { id: "newsletter", Component: Newsletter },
  { id: "footer", Component: Footer },
];

export const Home = () => {
  const [search, setSearch] = useState("");
  const [activeSection, setActiveSection] = useState<SectionKey | null>(null);

  return (
    <div className="flex flex-col space-y-3 md:space-y-20">
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
          {id === "hero" ? (
            <Component
              search={search}
              setSearch={setSearch}
              setActiveSection={setActiveSection}
            />
          ) : (
            <Component />
          )}
        </section>
      ))}
    </div>
  );
};
