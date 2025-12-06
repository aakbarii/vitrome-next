"use client";

import React, { useState } from 'react';
import { useTheme } from "../../../context/ThemeContext";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import ResumeCard from './ResumeCard';
import 'swiper/css';
import 'swiper/css/navigation';

function Resume() {
  const { theme } = useTheme();
  const [activeWorkIndex, setActiveWorkIndex] = useState(3);
  const [activeEduIndex, setActiveEduIndex] = useState(3);
  
  const handleWorkCardClick = (index) => {
    setActiveWorkIndex(index);
  };
  
  const handleEduCardClick = (index) => {
    setActiveEduIndex(index);
  };
  
  const workExperience = [
    {
      dateRange: '2021 - 2022',
      title: 'یادگیری زبان پایتون و زبان ماشین',
      instructor: 'استاد جادی میرمیرانی',
      website: 'وبسایت مکتب خانه',
    },
    {
      dateRange: '2021 - 2022',
      title: 'یادگیری زبان پایتون و زبان ماشین',
      instructor: 'استاد جادی میرمیرانی',
      website: 'وبسایت مکتب خانه',
    },
    {
      dateRange: '2021 - 2022',
      title: 'یادگیری زبان پایتون و زبان ماشین',
      instructor: 'استاد جادی میرمیرانی',
      website: 'وبسایت مکتب خانه',
    },
    {
      dateRange: '2021 - 2022',
      title: 'یادگیری زبان پایتون و زبان ماشین',
      instructor: 'استاد جادی میرمیرانی',
      website: 'وبسایت مکتب خانه',
    },
  ];

  const education = [
    {
      dateRange: '2021 - 2022',
      title: 'یادگیری زبان پایتون و زبان ماشین',
      instructor: 'استاد جادی میرمیرانی',
      website: 'وبسایت مکتب خانه',
    },
    {
      dateRange: '2021 - 2022',
      title: 'یادگیری زبان پایتون و زبان ماشین',
      instructor: 'استاد جادی میرمیرانی',
      website: 'وبسایت مکتب خانه',
    },
    {
      dateRange: '2021 - 2022',
      title: 'یادگیری زبان پایتون و زبان ماشین',
      instructor: 'استاد جادی میرمیرانی',
      website: 'وبسایت مکتب خانه',
    },
    {
      dateRange: '2021 - 2022',
      title: 'یادگیری زبان پایتون و زبان ماشین',
      instructor: 'استاد جادی میرمیرانی',
      website: 'وبسایت مکتب خانه',
    },
  ];

  return (
    <div className={`py-16 px-6 ${theme === "light" ? "bg-[#f6f3fc]" : "bg-[#0f0715]"}`}>
      <div className="max-w-[1320px] mx-auto">
        {/* Work Experience Section */}
        <div className="mb-16">
          <h2 className={`text-2xl font-bold mb-8 text-right ${theme === "light" ? "text-[#56BC80]" : "text-[#56BC80]"}`}>
            سوابق کاری من
          </h2>
          <div className="relative">
            <Swiper
              modules={[Navigation]}
              navigation={true}
              spaceBetween={20}
              slidesPerView={1}
              breakpoints={{
                640: {
                  slidesPerView: 2,
                },
                768: {
                  slidesPerView: 3,
                },
                1024: {
                  slidesPerView: 4,
                },
              }}
              dir="rtl"
              onSlideChange={(swiper) => setActiveWorkIndex(swiper.activeIndex)}
              className="resume-swiper"
            >
              {workExperience.map((item, index) => (
                <SwiperSlide key={index}>
                  <div onClick={() => handleWorkCardClick(index)} className="cursor-pointer">
                    <ResumeCard
                      dateRange={item.dateRange}
                      title={item.title}
                      instructor={item.instructor}
                      website={item.website}
                      isActive={index === activeWorkIndex}
                    />
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>

        {/* Education Section */}
        <div>
          <h2 className={`text-2xl font-bold mb-8 text-right ${theme === "light" ? "text-[#56BC80]" : "text-[#56BC80]"}`}>
            تحصیلات من
          </h2>
          <div className="relative">
            <Swiper
              modules={[Navigation]}
              navigation={true}
              spaceBetween={20}
              slidesPerView={1}
              breakpoints={{
                640: {
                  slidesPerView: 2,
                },
                768: {
                  slidesPerView: 3,
                },
                1024: {
                  slidesPerView: 4,
                },
              }}
              dir="rtl"
              onSlideChange={(swiper) => setActiveEduIndex(swiper.activeIndex)}
              className="resume-swiper"
            >
              {education.map((item, index) => (
                <SwiperSlide key={index}>
                  <div onClick={() => handleEduCardClick(index)} className="cursor-pointer">
                    <ResumeCard
                      dateRange={item.dateRange}
                      title={item.title}
                      instructor={item.instructor}
                      website={item.website}
                      isActive={index === activeEduIndex}
                    />
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Resume;
