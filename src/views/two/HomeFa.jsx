"use client";

import { useTheme } from "../../context/ThemeContext";
import Navbar from "../../components/layout/two/NavbarFa";
import HeroSection from "../../components/template/two/HeroSections";
import ExperienceBox from "../../components/template/two/ExperienceBox";
import Skills from "../../components/template/two/Skills";
import Projects from "../../components/template/two/Projects";
import Services from "../../components/template/two/Services";
import Resume from "../../components/template/two/Resume";
import Testimonials from "../../components/template/two/Testimonials";
import Contact from "../../components/template/two/Contact";
import { paletteTwo } from "@/theme/paletteTwo";

function HomeFa() {
  const { theme } = useTheme();
  
  const services = [
    { title: "طراحی وبسایت" },
    { title: "توسعه وبسایت" },
    { title: "طراحی UI/UX" },
    { title: "برنامه‌نویسی موبایل" },
  ];
  
  return (
    <>
      <div
        className={`container flex flex-col gap-y-10 min-h-screen ${
          theme === "light" ? "bg-[#FFFFFF] text-[#37383D]" : ""
        }`}
        style={
          theme === "light"
            ? undefined
            : { backgroundColor: paletteTwo.darkBg, color: paletteTwo.textPrimary }
        }
      >
        <div className="max-w-[1320px] w-full mx-auto">
        <Navbar />
        <HeroSection />
        <ExperienceBox />
        <Skills />
        <Projects />
        <Services />
        <Resume />
        <Testimonials />
        <Contact services={services} />
        </div>

      </div>
    </>
  );
}

export default HomeFa;
