"use client";

import React from "react";
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

function HomeFa() {
  const { theme } = useTheme();
  
  // Mock services data - you can replace this with actual data from props or API
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
          theme === "light"
            ? "bg-[#FFFFFF] text-[#37383D]"
            : "bg-[#24252D] text-[#FFFFFF]"
        }`}
      >
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
    </>
  );
}

export default HomeFa;
