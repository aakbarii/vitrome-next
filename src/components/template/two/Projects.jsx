"use client";

import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, EffectFade } from 'swiper/modules';
import { useTheme } from "../../../context/ThemeContext";
import 'swiper/css';
import 'swiper/css/navigation';

const projects = [
  {
    id: 1,
    title: 'متن تست 1',
    description: 'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله',
    image: 'https://api.academymarvel.com/contents/uploads/books/sci211.jpg',
  },
  {
    id: 2,
    title: 'متن تست 2',
    description: 'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله',
    image: 'https://api.academymarvel.com/contents/uploads/books/sci211.jpg',
  },
  {
    id: 3,
    title: 'متن تست 3',
    description: 'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله',
    image: 'https://api.academymarvel.com/contents/uploads/books/sci211.jpg',
  },
];

const Projects = () => {
  const { theme } = useTheme();
  const [activeSlide, setActiveSlide] = useState(0);

  return (
    <div className={`flex flex-col items-center py-16 ${theme === "light" ? "bg-[#f6f3fc]" : "bg-[#0f0715]"}`}>
      <h2 className={`text-3xl font-bold mb-12 text-center ${theme === "light" ? "text-[#2a1454]" : "text-white"}`}>پروژه های <span className='text-[#56BC80]'>منتخب</span></h2>
      
      <div className="container mx-auto flex flex-row-reverse items-center gap-12 px-4">
        <div className="w-1/2 text-right">
          <div className="mb-8">
            <h3 className={`text-2xl font-bold mb-4 ${theme === "light" ? "text-[#2a1454]" : "text-white"}`}>{projects[activeSlide].title}</h3>
            <p className={`mb-6 leading-relaxed ${theme === "light" ? "text-[#140c1c]" : "text-gray-400"}`}>{projects[activeSlide].description}</p>
            
            <a 
              href="#" 
              className="inline-block bg-[#C8A27A] text-white px-6 py-3 rounded-lg hover:bg-[#B89165] transition-colors duration-300"
            >
              مشاهده پروژه
            </a>
          </div>
          
          {/* Navigation Buttons */}
          <div className="flex gap-4 justify-start mt-8">
            <button className={`swiper-button-prev-custom p-3 rounded-full shadow-md transition-all ${theme === "light" ? "bg-white hover:bg-gray-100" : "bg-[#140c1c] hover:bg-[#2a1454]"}`}>
              <svg xmlns="http://www.w3.org/2000/svg" className={`h-6 w-6 ${theme === "light" ? "text-gray-600" : "text-white"}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button className={`swiper-button-next-custom p-3 rounded-full shadow-md transition-all ${theme === "light" ? "bg-white hover:bg-gray-100" : "bg-[#140c1c] hover:bg-[#2a1454]"}`}>
              <svg xmlns="http://www.w3.org/2000/svg" className={`h-6 w-6 ${theme === "light" ? "text-gray-600" : "text-white"}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>

        <div className="w-1/2">
          <Swiper
            modules={[Navigation, EffectFade]}
            navigation={{
              nextEl: '.swiper-button-next-custom',
              prevEl: '.swiper-button-prev-custom',
            }}
            effect="fade"
            spaceBetween={0}
            slidesPerView={1}
            dir="ltr"
            className="selected-projects-swiper"
            onSlideChange={(swiper) => setActiveSlide(swiper.activeIndex)}
          >
            {projects.map((project) => (
              <SwiperSlide key={project.id}>
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-auto rounded-lg shadow-xl"
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default Projects; 