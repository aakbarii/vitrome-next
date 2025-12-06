"use client";

import React, { useState } from 'react';
import { useTheme } from "../../../context/ThemeContext";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import TestimonialCard from './TestimonialCard';
import { testimonialUser1 } from "@/constants/images";
import 'swiper/css';
import 'swiper/css/navigation';

function Testimonials() {
  const { theme } = useTheme();
  
  const testimonials = [
    {
      id: 1,
      text: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد",
      name: "زینا نوری",
      position: "برنامه نویس",
      avatar: testimonialUser1,
      color: "#4A90E2" // آبی
    },
    {
      id: 2,
      text: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد",
      name: "فاطی",
      position: "برنامه نویس وب",
      avatar: testimonialUser1,
      color: "#8750f7" // بنفش
    },
    {
      id: 3,
      text: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد",
      name: "سارا",
      position: "طراح UI/UX",
      avatar: testimonialUser1,
      color: "#56BC80" // سبز
    },
    {
      id: 4,
      text: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد",
      name: "مریم",
      position: "توسعه دهنده",
      avatar: testimonialUser1,
      color: "#4A90E2" // آبی
    },
  ];

  return (
    <div className={`py-16 px-6 ${theme === "light" ? "bg-[#e5e5e5]" : "bg-[#0f0715]"}`}>
      <div className="max-w-[1320px] mx-auto">
        <div className="flex flex-wrap -mx-4 items-start">
          {/* Right Section - Title and Description */}
          <div className="w-full lg:w-1/3 px-4 mb-8 lg:mb-0">
            <div className="relative">
              {/* Dot pattern background */}
              <div className="absolute top-0 right-0 w-16 h-16 opacity-20">
                <div className="grid grid-cols-4 gap-1">
                  {Array.from({ length: 16 }).map((_, i) => (
                    <div 
                      key={i} 
                      className={`w-2 h-2 rounded-full ${theme === "light" ? "bg-gray-400" : "bg-gray-600"}`}
                    ></div>
                  ))}
                </div>
              </div>
              
              <div className="pr-2">
                <div className={`text-sm font-medium mb-2 ${theme === "light" ? "text-[#56BC80]" : "text-[#56BC80]"}`}>
                  نظرات مشتریان
                </div>
                <h2 className={`text-3xl lg:text-4xl font-bold mb-4 leading-tight ${theme === "light" ? "text-[#2a1454]" : "text-white"}`}>
                  داستان های
                  <br />
                  مشتریان من
                </h2>
                <p className={`text-sm leading-relaxed ${theme === "light" ? "text-gray-600" : "text-gray-400"}`}>
                  لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون
                </p>
              </div>
            </div>
          </div>

          {/* Left Section - Testimonials Slider */}
          <div className="w-full lg:w-2/3 px-4">
            <div className="relative">
              <Swiper
                modules={[Navigation]}
                navigation={{
                  nextEl: '.testimonial-next',
                  prevEl: '.testimonial-prev',
                }}
                spaceBetween={20}
                slidesPerView={1}
                breakpoints={{
                  640: {
                    slidesPerView: 1,
                  },
                  768: {
                    slidesPerView: 2,
                  },
                  1024: {
                    slidesPerView: 2,
                  },
                }}
                dir="rtl"
                className="testimonial-swiper"
              >
                {testimonials.map((testimonial) => (
                  <SwiperSlide key={testimonial.id}>
                    <TestimonialCard
                      text={testimonial.text}
                      name={testimonial.name}
                      position={testimonial.position}
                      avatar={testimonial.avatar}
                      color={testimonial.color}
                    />
                  </SwiperSlide>
                ))}
              </Swiper>

              {/* Custom Navigation Buttons */}
              <div className="flex justify-center gap-2 mt-8">
                <button className="testimonial-prev w-9 h-9 rounded-full border border-gray-300 bg-white hover:bg-gray-50 flex items-center justify-center transition-all shadow-sm cursor-pointer">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                  </svg>
                </button>
                <button className="testimonial-next w-9 h-9 rounded-full border border-gray-300 bg-white hover:bg-gray-50 flex items-center justify-center transition-all shadow-sm cursor-pointer">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Testimonials;

