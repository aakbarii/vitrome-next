"use client";

import PortfolioCard from './PortfolioCard';
import { Swiper, SwiperSlide } from 'swiper/react';
import React from 'react';
import { useTheme } from "../../../context/ThemeContext";

import 'swiper/css';

function Portfolio() {
  const { theme } = useTheme();
  // Placeholder data for portfolio items
  const portfolioItems = [
    {
      dateRange: '2021 - 2022',
      title: 'یادگیری زبان پایتون و زبان ماشین',
      instructor: 'استاد جادی میرمیرانی',
      website: 'وبسایت مکتب خانه',
      isActive: false
    },
    {
      dateRange: '2021 - 2022',
      title: 'یادگیری زبان پایتون و زبان ماشین',
      instructor: 'استاد جادی میرمیرانی',
      website: 'وبسایت مکتب خانه',
      isActive: false
    },
    {
      dateRange: '2021 - 2022',
      title: 'یادگیری زبان پایتون و زبان ماشین',
      instructor: 'استاد جادی میرمیرانی',
      website: 'وبسایت مکتب خانه',
      isActive: false
    },
    {
      dateRange: '2021 - 2022',
      title: 'یادگیری زبان پایتون و زبان ماشین',
      instructor: 'استاد جادی میرمیرانی',
      website: 'وبسایت مکتب خانه',
      isActive: true // This card is active based on the image
    },
  ];

  return (
    <div className={`py-10 text-center ${theme === "light" ? "bg-[#f6f3fc]" : "bg-[#0f0715]"}`}>
      <h2 className={`mb-10 text-2xl font-bold ${theme === "light" ? "text-[#2a1454]" : "text-white"}`}>سوابق کاری من</h2>
      <div className="w-11/12 mx-auto portfolio-slider-container">
        <Swiper
          spaceBetween={20} // Adjust spacing as needed
          slidesPerView={1} // Show one slide by default
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
          }} // Responsive breakpoints
        >
          {portfolioItems.map((item, index) => (
            <SwiperSlide key={index}>
              <PortfolioCard
                dateRange={item.dateRange}
                title={item.title}
                instructor={item.instructor}
                website={item.website}
                isActive={item.isActive}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}

export default Portfolio;