import HeroImg from "../../assets/HeroImg.png";
import { Navbar } from "@components";

export const Hero = () => {
  return (
    <section
      className="relative min-h-screen bg-cover bg-center"
      style={{ backgroundImage: `url(${HeroImg})` }}
    >
      <Navbar />
    </section>
  );
};
