"use client";

import { useState, useEffect, useRef } from "react";
import AOS from "aos";
import React from "react";
import { useTheme } from "../../../context/ThemeContext";

const ServicesSection = ({ services }) => {
  const { theme } = useTheme();

    const [activeIndex, setActiveIndex] = useState(0);
    const serviceWidgetRef = useRef(null);
    const activeBgRef = useRef(null);
  
    useEffect(() => {
      AOS.init({ duration: 1000, once: true });
    }, []);
  
    useEffect(() => {
      const serviceItems = document.querySelectorAll(".service-item");
      const activeBg = activeBgRef.current;
  
      if (!activeBg || serviceItems.length === 0 || activeIndex === null) return;
  
      const updateActiveBg = () => {
        const element = serviceItems[activeIndex];
        if (!element || !serviceWidgetRef.current) return;
  
        const rect = element.getBoundingClientRect();
        const containerRect = serviceWidgetRef.current.getBoundingClientRect();
        const topOffset = activeIndex === 0 ? 0 : rect.top - containerRect.top;
  
        activeBg.style.top = `${topOffset}px`;
        activeBg.style.height = `${rect.height}px`;
      };
  
      updateActiveBg();
      window.addEventListener("resize", updateActiveBg);
      
      return () => window.removeEventListener("resize", updateActiveBg);
    }, [activeIndex, services])
  
    useEffect(() => {
      AOS.refresh();
    }, [activeIndex]);
    
  return (
    <section className={`pt-[120px] pb-[120px] ${theme === "light" ? "bg-[#f6f3fc]" : "bg-[#050709]"}`} id="services-section">
      <div className="max-w-[1320px] mx-auto px-4">
        <div className="flex flex-wrap -mx-4">
          <div className="w-full px-4">
            <div className="mb-[50px] max-w-[700px] w-full mx-auto text-center">
              <h2 data-aos="fade-up" data-aos-delay="300" className="text-[45px] bg-gradient-to-r from-[#8750f7] to-white bg-clip-text text-transparent inline-flex gap-[15px] mb-0">
                My Quality Services
              </h2>
              <p data-aos="fade-up" data-aos-delay="400" className={`mt-[15px] ${theme === "light" ? "text-[#140c1c]" : ""}`}>
                We put your ideas and thus your wishes in the form of a unique
                web project that inspires you and your customers.
              </p>
            </div>
          </div>
        </div>

        <div className="flex flex-wrap -mx-4">
          <div className="w-full px-4">
            <div className="relative" ref={serviceWidgetRef}>
              {services?.map((service, index) => (
                <div
                  key={index}
                  className={`service-item border-b ${theme === "light" ? "border-[#8750f7]" : "border-[#2a1454]"} px-[30px] relative z-[2] flex flex-wrap items-center gap-[20px] cursor-pointer group ${index === activeIndex ? "current" : ""}`}
                  data-aos="fade-up"
                  onMouseEnter={() => setActiveIndex(index)}
                  onClick={() => setActiveIndex(index)}
                >
                  <div className="left-box w-[calc(40%-10px)] py-[30px] gap-[20px] flex flex-wrap items-center">
                    <span className={`text-[20px] font-bold transition-all duration-500 ${index === activeIndex ? "text-white" : "text-[#8750f7] group-hover:text-white"}`}>{`0${index + 1}`}</span>
                    <h3 className={`text-[30px] mb-0 capitalize ${theme === "light" ? "text-[#2a1454]" : ""}`}>{service.title}</h3>
                  </div>
                  <div className="right-box w-[calc(60%-10px)] py-[30px] pl-[15%]">
                    <p className={`last:mb-0 ${theme === "light" ? "text-[#140c1c]" : ""}`}>{service.paragraph}</p>
                  </div>
                  <i className={`absolute top-1/2 left-[55px] right-auto text-[20px] leading-none text-[#8750f7] transition-all duration-500 -translate-y-1/2 ${index === activeIndex ? "rotate-180 text-white" : "rotate-180 group-hover:rotate-[270deg] group-hover:text-white"}`}></i>
                </div>
              ))}
              <div className="active-bg absolute top-0 bottom-0 left-0 right-0 z-[1] bg-gradient-to-r from-[#2a1454] to-[#8750f7] transition-all duration-500" ref={activeBgRef}></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
