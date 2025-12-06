"use client";

import React from "react";
import Link from "next/link";
import { useTheme } from "../../../context/ThemeContext";
import { iranFlag, darkIcon, lightIcon } from "@/constants/images";

const Navbar = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <nav className={`flex items-center justify-between px-6 py-4 ${theme === "light" ? "bg-white" : "bg-[#050709]"}`}>
      <div className="text-[40px] font-bold">
        <span className="text-green-600">جا</span>
        <span className={theme === "light" ? "text-black" : "text-white"}>بلیو</span>
      </div>

      <ul className="flex gap-x-10 p-0 m-0">
        <li>
          <a href="#skills-section" className={theme === "light" ? "text-[#37383D]" : "text-white"}>
            مهارت ها
          </a>
        </li>
        <li>
          <a href="#works-section" className={theme === "light" ? "text-[#37383D]" : "text-white"}>
            نمونه کار
          </a>
        </li>
        <li>
          <a href="#services-section" className={theme === "light" ? "text-[#37383D]" : "text-white"}>
            خدمات
          </a>
        </li>
        <li>
          <a href="#resume-section" className={theme === "light" ? "text-[#37383D]" : "text-white"}>
            رزومه
          </a>
        </li>
        <li>
          <a href="#testimonials-section" className={theme === "light" ? "text-[#37383D]" : "text-white"}>
            گواهینامه ها
          </a>
        </li>
        <li>
          <a href="#contact-section" className={theme === "light" ? "text-[#37383D]" : "text-white"}>
            تماس با ما
          </a>
        </li>
      </ul>

      <div className="flex items-center gap-2">
        <img
          className="size-6"
          src={theme === "dark" ? lightIcon : darkIcon}
          alt="toggleTheme"
          onClick={toggleTheme}
          role="button"
        />
        <img src={iranFlag} alt="icon1" className="size-6" />
      </div>
    </nav>
  );
};

export default Navbar;
