"use client";

import React from 'react'
import { useTheme } from "../../../context/ThemeContext";

function Services() {
  const { theme } = useTheme();
  
  return (
    <div className={`container mx-auto px-4 py-16 ${theme === "light" ? "bg-[#f6f3fc]" : "bg-[#0f0715]"}`}>
      <div className="flex flex-row justify-between items-start gap-8">
        {/* Right Side - Text Content */}
        <div className="w-1/2">
          <h2 className={`text-3xl font-bold mb-8 text-right ${theme === "light" ? "text-[#2a1454]" : "text-white"}`}>
            خدمات <span className="text-green-500">با کیفیت</span> من
          </h2>
          
          {/* Services List */}
          <div className="space-y-4 text-right">
            <div className="flex items-center justify-start gap-2">
              <div className={`w-6 h-6 rounded-full flex items-center justify-center ${theme === "light" ? "bg-gray-200" : "bg-[#2a1454]"}`}>
                <svg className={`w-4 h-4 ${theme === "light" ? "text-gray-500" : "text-gray-400"}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <span className={theme === "light" ? "text-gray-700" : "text-gray-300"}>طراحی و توسعه وبسایت</span>
            </div>
            
            <div className="flex items-center justify-start gap-2">
              <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center transform transition-transform hover:scale-110">
                <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <span className="text-green-500">طراحی و توسعه ربات</span>
            </div>
            
            <div className="flex items-center justify-start gap-2">
              <div className={`w-6 h-6 rounded-full flex items-center justify-center ${theme === "light" ? "bg-gray-200" : "bg-[#2a1454]"}`}>
                <svg className={`w-4 h-4 ${theme === "light" ? "text-gray-500" : "text-gray-400"}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <span className={theme === "light" ? "text-gray-700" : "text-gray-300"}>برنامه نویس وب</span>
            </div>
            
            <div className="flex items-center justify-start gap-2">
              <div className={`w-6 h-6 rounded-full flex items-center justify-center ${theme === "light" ? "bg-gray-200" : "bg-[#2a1454]"}`}>
                <svg className={`w-4 h-4 ${theme === "light" ? "text-gray-500" : "text-gray-400"}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <span className={theme === "light" ? "text-gray-700" : "text-gray-300"}>ادیتور و تدوین گر</span>
            </div>
          </div>

          {/* Description Text */}
          <div className={`mt-8 text-right ${theme === "light" ? "text-[#140c1c]" : "text-gray-400"}`}>
            <p>
              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله
            </p>
          </div>
        </div>

        {/* Left Side - Card with Avatars */}
        <div className="w-1/2 flex items-center justify-center">
          <div className={`relative w-[400px] aspect-square rounded-lg p-6 shadow-lg border ${theme === "light" ? "bg-white border-gray-100" : "bg-[#140c1c] border-[#2a1454]"}`}>
            <div className="space-y-6">
              <div className="flex items-center gap-2">
                <div className={`h-2 flex-grow rounded ${theme === "light" ? "bg-gray-100" : "bg-[#2a1454]"}`}></div>
                <div className="w-8 h-8 bg-green-100 rounded-full overflow-hidden border-2 border-green-500"></div>
              </div>
              <div className="flex items-center gap-2">
                <div className={`h-2 flex-grow rounded ${theme === "light" ? "bg-gray-100" : "bg-[#2a1454]"}`}></div>
                <div className={`w-8 h-8 rounded-full overflow-hidden ${theme === "light" ? "bg-gray-100" : "bg-[#2a1454]"}`}></div>
              </div>
              <div className="flex items-center gap-2">
                <div className={`h-2 flex-grow rounded ${theme === "light" ? "bg-gray-100" : "bg-[#2a1454]"}`}></div>
                <div className={`w-8 h-8 rounded-full overflow-hidden ${theme === "light" ? "bg-gray-100" : "bg-[#2a1454]"}`}></div>
              </div>
            </div>
            
            {/* Floating Avatars */}
            <div className="absolute -right-6 top-1/2 transform -translate-y-1/2">
              <div className={`w-12 h-12 rounded-full border-4 shadow-lg ${theme === "light" ? "bg-white border-white" : "bg-[#140c1c] border-[#140c1c]"}`}>
                <div className="w-full h-full bg-green-100 rounded-full"></div>
              </div>
            </div>
            <div className="absolute -left-6 top-1/2 transform -translate-y-1/2">
              <div className={`w-12 h-12 rounded-full border-4 shadow-lg ${theme === "light" ? "bg-white border-white" : "bg-[#140c1c] border-[#140c1c]"}`}>
                <div className="w-full h-full bg-green-100 rounded-full"></div>
              </div>
            </div>
            <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2">
              <div className={`w-12 h-12 rounded-full border-4 shadow-lg ${theme === "light" ? "bg-white border-white" : "bg-[#140c1c] border-[#140c1c]"}`}>
                <div className="w-full h-full bg-green-100 rounded-full"></div>
              </div>
            </div>

            {/* Green Check Circle */}
            <div className="absolute -top-3 -right-3">
              <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center shadow-lg">
                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Services 