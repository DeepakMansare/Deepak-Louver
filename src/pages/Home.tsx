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

export const Home = () => {
  return (
    <div>
      <Hero />
      <About />
      <Facilities />
      <OtherFeatures />
      <ContactForm />
      <Testimonials />
      <Newsletter />
      <Footer />
    </div>
  );
};
