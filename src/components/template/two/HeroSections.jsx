"use client";

import React from "react";
import { useTheme } from "../../../context/ThemeContext";
import { heroImage as hero } from "@/constants/images";

const HeroSection = () => {
  const { theme } = useTheme();
  
  return (
    <section className={`flex flex-col md:flex-row items-center justify-between px-6 ${theme === "light" ? "bg-[#f6f3fc]" : "bg-[#0f0715]"}`}>
      {/* Right Side (Text & Download Button) */}
      <div className="w-full md:w-1/2 md:text-right">
        <h2 className={`text-3xl font-bold ${theme === "light" ? "text-[#2a1454]" : "text-white"}`}>
          من <span className="text-green-600">جابیلو</span> هستم
        </h2>
        <h1 className={`text-4xl font-extrabold mt-2 ${theme === "light" ? "text-[#2a1454]" : "text-white"}`}>
          برنامه نویس و طراح سایت
        </h1>
        <p className={`mt-4 ${theme === "light" ? "text-[#140c1c]" : "text-gray-400"}`}>
          لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده
          از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله
        </p>

        <div className={`w-[500px] gap-x-12 mt-6 flex items-center justify-center md:justify-start shadow-md rounded-lg px-4 py-2 border ${theme === "light" ? "bg-white border-gray-200" : "bg-[#140c1c] border-[#2a1454]"}`}>
          <div className="flex gap-x-2">
            <span className={`size-9 border rounded-full ${theme === "light" ? "border-gray-400" : "border-[#8750f7]"}`}></span>
            <span className={`size-9 border rounded-full ${theme === "light" ? "border-gray-400" : "border-[#8750f7]"}`}></span>
            <span className={`size-9 border rounded-full ${theme === "light" ? "border-gray-400" : "border-[#8750f7]"}`}></span>
            <span className={`size-9 border rounded-full ${theme === "light" ? "border-gray-400" : "border-[#8750f7]"}`}></span>
          </div>
          <span className={`border-l h-6 ${theme === "light" ? "border-gray-300" : "border-[#2a1454]"}`}></span>
          <button style={{ borderRadius:"10px"}} className="w-36 h-12 bg-[#56BC80] text-white rounded-xl">
            دانلود
          </button>
        </div>
      </div>
      {/* Left Side (Image & Badges) */}
      <div className="relative w-full md:w-1/2 flex justify-center">
      <img src={hero} alt="hero" className="w-[600px] h-[617px]" />
      
      {/* Badge 1 */}
      <div className={`absolute top-10 left-0 shadow-lg p-2 rounded-md flex flex-col items-center gap-2 text-xs ${theme === "light" ? "bg-white" : "bg-[#140c1c]"}`}>
        <span className="text-green-600 font-bold flex">
            
        <img src="/path-to-icon1.png" alt="icon" className="w-5 h-5" />
            تبریک می گوییم!
        </span>
        <span className={theme === "light" ? "text-gray-600" : "text-gray-400"}>شما ما را از بهترین ها انتخاب کردید</span>
      </div>
      
      {/* Badge 2 */}
      <div className={`absolute top-10 right-0 shadow-lg p-2 rounded-md flex items-center text-xs gap-2 ${theme === "light" ? "bg-white" : "bg-[#140c1c]"}`}>
        <img src="/path-to-icon2.png" alt="icon" className="w-6 h-6" />
        <div>
          <p className={`font-bold text-sm ${theme === "light" ? "text-black" : "text-white"}`}>150K+</p>
          <p className={theme === "light" ? "text-gray-600" : "text-gray-400"}>فرصت های شغلی خالی</p>
        </div>
      </div>
      
      {/* Badge 3 */}
      <div className={`absolute bottom-10 left-0 shadow-lg p-2 rounded-md flex items-center gap-2 text-xs ${theme === "light" ? "bg-white" : "bg-[#140c1c]"}`}>
        <div>
          <p className={`font-bold text-sm ${theme === "light" ? "text-black" : "text-white"}`}>برنامه نویس وب</p>
          <p className={theme === "light" ? "text-gray-600" : "text-gray-400"}>مایکروسافت</p>
        </div>
        <button className="bg-green-100 text-green-700 px-2 py-1 rounded-md text-xs">Apply</button>
        <img src="/path-to-microsoft-logo.png" alt="microsoft logo" className="w-5 h-5" />
      </div>
      
      {/* Badge 4 */}
      <div className={`absolute bottom-10 right-0 shadow-lg p-2 rounded-md flex items-center gap-2 text-xs ${theme === "light" ? "bg-white" : "bg-[#140c1c]"}`}>
        <div>
          <p className={`font-bold text-sm ${theme === "light" ? "text-black" : "text-white"}`}>50K+</p>
          <p className={theme === "light" ? "text-gray-600" : "text-gray-400"}>نظرات مشتریان ما</p>
        </div>
        <div className="flex -space-x-1 rtl:space-x-reverse">
          <img src="/path-to-avatar1.png" alt="user" className="w-6 h-6 rounded-full border border-white" />
          <img src="/path-to-avatar2.png" alt="user" className="w-6 h-6 rounded-full border border-white" />
          <img src="/path-to-avatar3.png" alt="user" className="w-6 h-6 rounded-full border border-white" />
          <img src="/path-to-avatar4.png" alt="user" className="w-6 h-6 rounded-full border border-white" />
          <span className="w-6 h-6 bg-blue-500 text-white flex items-center justify-center rounded-full border border-white text-xs">+</span>
        </div>
      </div>
    </div>
    </section>
  );
};

export default HeroSection;
