"use client";

import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useTheme } from "../../../context/ThemeContext";
import Swal from "sweetalert2";
import { aMan, greenBg } from "@/constants/images";

// Icons (using SVG or emoji as placeholders)
const PersonIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-[#56BC80]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
  </svg>
);

const EmailIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-[#56BC80]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
  </svg>
);

const GearIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-[#56BC80]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
  </svg>
);

const PhoneIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-[#56BC80]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
  </svg>
);

const MessageIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-[#56BC80]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
  </svg>
);

function Contact({ services = [], user = "" }) {
  const { theme } = useTheme();
  
  const [formData, setFormData] = useState({
    conName: "",
    conEmail: "",
    conService: "",
    conPhone: "",
    conMessage: "",
    ResomeUser: user,
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await fetch("https://api.myresome.ir/api/SendMassage", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        Swal.fire({
          title: "پیام شما ارسال شد",
          text: `فرم شما با موفقیت ارسال شد.`,
          icon: "success",
          timer: 3000,
          showConfirmButton: false,
        });
        // Reset form
        setFormData({
          conName: "",
          conEmail: "",
          conService: "",
          conPhone: "",
          conMessage: "",
          ResomeUser: user,
        });
      } else {
        Swal.fire({
          title: "خطا در ارسال پیام",
          text: "لطفاً دوباره تلاش کنید.",
          icon: "error",
        });
      }
    } catch {
      Swal.fire({
        title: "خطا",
        text: "مشکلی در ارتباط با سرور پیش آمد.",
        icon: "error",
      });
    }
  };

  return (
    <div className={`py-16 px-6 ${theme === "light" ? "bg-white" : "bg-[#0f0715]"}`}>
      <div className="max-w-[1320px] mx-auto">
        <div className="flex flex-wrap -mx-4">
          {/* Left Column - Contact Form */}
          <div className="w-full lg:w-1/2 px-4">
            <div className={`relative ${theme === "light" ? "bg-white" : "bg-[#140c1c]"} rounded-2xl p-8 lg:p-10`}>
              {/* Decorative green curve in top-left */}
              <div className="absolute top-0 left-0 w-32 h-32 overflow-hidden rounded-tl-2xl">
                <div className="absolute -top-10 -left-10 w-40 h-40 bg-[#56BC80] rounded-full opacity-20"></div>
              </div>

              {/* Header */}
              <div className="relative z-10 mb-8">
                <h2 className={`text-3xl lg:text-4xl font-bold mb-3 ${theme === "light" ? "text-black" : "text-white"}`}>
                  بیا با هم <span className="text-[#56BC80]">کار کنیم</span>!
                </h2>
                <p className={`text-sm ${theme === "light" ? "text-gray-600" : "text-gray-400"}`}>
                  من چیزهای ساده و زیبا را طراحی و برنامه‌نویسی می‌کنم و آنچه انجام می‌دهم را دوست دارم. به همین سادگی!
                </p>
              </div>

              {/* Contact Form */}
              <form onSubmit={handleSubmit} className="space-y-4">
                {/* Name Field */}
                <div className="relative">
                  <div className="absolute right-4 top-1/2 -translate-y-1/2">
                    <PersonIcon />
                  </div>
                  <input
                    type="text"
                    name="conName"
                    id="conName"
                    placeholder="نام شما"
                    value={formData.conName}
                    onChange={handleChange}
                    required
                    className={`w-full pr-12 pl-4 py-3 rounded-lg border transition-all outline-none focus:border-[#56BC80] ${
                      theme === "light" 
                        ? "bg-[#f0f9f4] border-[#56BC80] text-[#140c1c]" 
                        : "bg-[#050709] border-[#2a1454] text-white"
                    }`}
                  />
                </div>

                {/* Email and Service Row */}
                <div className="flex flex-wrap gap-4">
                  {/* Email Field */}
                  <div className="flex-1 min-w-[200px] relative">
                    <div className="absolute right-4 top-1/2 -translate-y-1/2">
                      <EmailIcon />
                    </div>
                    <input
                      type="email"
                      name="conEmail"
                      id="conEmail"
                      placeholder="ایمیل"
                      value={formData.conEmail}
                      onChange={handleChange}
                      required
                      className={`w-full pr-12 pl-4 py-3 rounded-lg border transition-all outline-none focus:border-[#56BC80] ${
                        theme === "light" 
                          ? "bg-[#f0f9f4] border-[#56BC80] text-[#140c1c]" 
                          : "bg-[#050709] border-[#2a1454] text-white"
                      }`}
                    />
                  </div>

                  {/* Service Dropdown */}
                  <div className="flex-1 min-w-[200px] relative">
                    <div className="absolute right-4 top-1/2 -translate-y-1/2 z-10">
                      <GearIcon />
                    </div>
                    <select
                      name="conService"
                      id="conService"
                      value={formData.conService}
                      onChange={handleChange}
                      required
                      className={`w-full pr-12 pl-4 py-3 rounded-lg border transition-all outline-none focus:border-[#56BC80] appearance-none ${
                        theme === "light" 
                          ? "bg-[#f0f9f4] border-[#56BC80] text-[#140c1c]" 
                          : "bg-[#050709] border-[#2a1454] text-white"
                      }`}
                    >
                      <option value="">انتخاب خدمات</option>
                      {services?.map((service, index) => (
                        <option key={index} value={service.title}>{service.title}</option>
                      ))}
                    </select>
                    <div className="absolute left-4 top-1/2 -translate-y-1/2 pointer-events-none">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </div>
                  </div>
                </div>

                {/* Phone Field */}
                <div className="relative">
                  <div className="absolute right-4 top-1/2 -translate-y-1/2">
                    <PhoneIcon />
                  </div>
                  <input
                    type="tel"
                    name="conPhone"
                    id="conPhone"
                    placeholder="شماره تماس"
                    value={formData.conPhone}
                    onChange={handleChange}
                    required
                    className={`w-full pr-12 pl-4 py-3 rounded-lg border transition-all outline-none focus:border-[#56BC80] ${
                      theme === "light" 
                        ? "bg-[#f0f9f4] border-[#56BC80] text-[#140c1c]" 
                        : "bg-[#050709] border-[#2a1454] text-white"
                    }`}
                  />
                </div>

                {/* Message Field */}
                <div className="relative">
                  <div className="absolute right-4 top-4">
                    <MessageIcon />
                  </div>
                  <textarea
                    name="conMessage"
                    id="conMessage"
                    placeholder="پیام شما"
                    value={formData.conMessage}
                    onChange={handleChange}
                    required
                    rows={6}
                    className={`w-full pr-12 pl-4 py-3 rounded-lg border transition-all outline-none focus:border-[#56BC80] resize-none ${
                      theme === "light" 
                        ? "bg-[#f0f9f4] border-[#56BC80] text-[#140c1c]" 
                        : "bg-[#050709] border-[#2a1454] text-white"
                    }`}
                  />
                </div>

                <input type="hidden" name="ResomeUser" value={user} />

                {/* Submit Button */}
                <div className="flex justify-center pt-4">
                  <button
                    type="submit"
                    className="bg-[#56BC80] hover:bg-[#4CA870] text-white font-semibold px-8 py-3 rounded-lg transition-all shadow-md hover:shadow-lg"
                  >
                    ارسال پیام
                  </button>
                </div>
              </form>
            </div>
          </div>

          {/* Right Column - Promotional Box with glass card */}
          <div className="w-full lg:w-1/2 px-4 mt-8 lg:mt-0">
            <div className="relative rounded-2xl h-full min-h-[500px] overflow-hidden flex items-center justify-center">
              {/* Green background image */}
              <img
                src={greenBg}
                alt="Background"
                className="absolute inset-0 w-full h-full object-cover"
              />

              {/* Glass card */}
              <div className="relative z-10 max-w-md w-full mx-auto rounded-3xl bg-white/15 backdrop-blur-md border border-white/40 px-8 py-10">
                <div className="flex flex-row-reverse items-center gap-6">
                  {/* Text on the right (top-right inside card) */}
                  <div className="flex-1 text-right text-white space-y-1 leading-relaxed">
                    <p className="text-lg font-semibold">خیلی خوبه</p>
                    <p className="text-lg font-semibold">آثار هستند</p>
                    <p className="text-lg font-semibold">در انتظار</p>
                    <p className="text-lg font-semibold">شما وارد شوید</p>
                    <p className="text-lg font-semibold">حالا!!!</p>
                  </div>

                  {/* Man image on the left inside card */}
                  <div className="shrink-0">
                    <img
                      src={aMan}
                      alt="Person illustration"
                      className="h-40 w-auto drop-shadow-xl"
                    />
                  </div>
                </div>
              </div>

              {/* Lightning icon on card bottom-right */}
              <div className="absolute bottom-8 right-8 w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-lg">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-yellow-400"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M13 2L3 14h8l-1 8 10-12h-8l1-8z" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

Contact.propTypes = {
  services: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string.isRequired,
  })),
  user: PropTypes.string,
};

export default Contact;

