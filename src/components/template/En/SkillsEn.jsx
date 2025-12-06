"use client";

import { useEffect } from "react";
import Aos from "aos";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import { useTheme } from "../../../context/ThemeContext";
import { getIcon } from "../../../assets/img/icons";

const Skills = ({ skills }) => {
  const { theme } = useTheme();
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

  return (
    <section className={`pt-[120px] pb-[120px] ${theme === "light" ? "bg-[#f6f3fc]" : "bg-[#0f0715]"}`} id="skills-section">
      <div className="container mx-auto px-4">
        <div className="w-full">
          <div className="mb-[50px] max-w-[700px] w-full mx-auto text-center">
            <h2 data-aos="fade-up" data-aos-delay="300" className="text-[45px] bg-gradient-to-r from-[#8750f7] to-white bg-clip-text text-transparent inline-flex gap-[15px] mb-0">
              My Skills
            </h2>
            <p data-aos="fade-up" data-aos-delay="400" className={`mt-[15px] ${theme === "light" ? "text-[#140c1c]" : ""}`}>
              We put your ideas and thus your wishes in the form of a unique web project that inspires you and your customers.
            </p>
          </div>
        </div>
        
        <div data-aos="fade-up" className="w-full">
          <div className="flex gap-[20px] gap-y-[30px] flex-wrap justify-center">
            <Swiper
              style={{ display:"flex" , justifyContent:"center" , alignItems:"center" }}
              modules={[Autoplay]}
              loop={true}
              spaceBetween={30}
              autoplay={{ delay: 3000, disableOnInteraction: false }}
              slidesPerView={6}
              breakpoints={{
                0: { slidesPerView: 3 },
                576: { slidesPerView: 2 },
                768: { slidesPerView: 3 },
                992: { slidesPerView: 4 },
                1200: { slidesPerView: 6 },
              }}
            >
              {skills?.map((skill, index) => (
                <SwiperSlide key={index}>
                  <div className="max-w-[180px] w-full text-center group" data-aos="fade-up" data-aos-delay="500">
                    <div className={`rounded-[25px] pt-[40px] px-[15px] pb-[30px] ${theme === "light" ? "bg-white border-[#8750f7]" : "bg-[#140c1c] border-transparent"} border mb-[15px] transition-all duration-[0.6s] ${theme === "light" ? "group-hover:bg-[#f6f3fc]" : "group-hover:bg-[#2a1454]"} group-hover:border-[#8750f7]`}>
                      <div className="max-w-[60px] w-full mx-auto mb-[30px]">
                        <img 
                          src={getIcon(skill.image) || skill.image} 
                          alt={skill.name} 
                          className="grayscale-[90%] transition-all duration-300 group-hover:grayscale-0 group-hover:scale-110" 
                        />
                      </div>
                      <div className="text-[#747779] font-extrabold text-[20px] leading-none transition-colors group-hover:text-[#8750f7]">{skill.percentage}</div>
                    </div>
                    <p className="text-[#8750f7] mb-0 whitespace-nowrap">{skill.name}</p>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
