"use client";

import React, { useEffect, useState } from "react";
import { logoDark, iranFlag, darkIcon, lightIcon } from "@/constants/images";
import { useTheme } from "../../../context/ThemeContext";
import Link from "next/link";
import { useRouter } from "next/navigation";
import Cookies from "js-cookie";

const Header = ({ email }) => {
  const router = useRouter();
  const { theme, toggleTheme, setTheme } = useTheme();
  const [headerClass, setHeaderClass] = useState("sticky-out show");
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const userMode = Cookies.get("userMode");
    const defaultMode = Cookies.get("defaultMode");

    const mode = userMode || defaultMode || "dark"; // پیش‌فرض fallback

    if (mode === "dark") {
      setTheme("dark");
    } else if (mode === "light") {
      setTheme("light");
    }
  }, [setTheme]);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 3) {
        setHeaderClass("sticky");
      } else {
        setHeaderClass("sticky-out");
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const progressWrap = document.getElementById("scrollUp");
    if (!progressWrap) return;

    const updateScrollProgress = () => {
      let scrollPos = window.scrollY;
      let docHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      let scrollPercent = (scrollPos / docHeight) * 100;

      if (scrollPos > 100) {
        progressWrap.classList.add("opacity-100", "visible");
        progressWrap.classList.remove("opacity-0", "invisible");
      } else {
        progressWrap.classList.remove("opacity-100", "visible");
        progressWrap.classList.add("opacity-0", "invisible");
      }

      let progressPath = progressWrap.querySelector(".progress-circle path");
      if (progressPath) {
        let circumference = 49 * 2 * Math.PI;
        let strokeDashOffset =
          circumference - (scrollPercent / 100) * circumference;

        progressPath.style.strokeDasharray = `${circumference} ${circumference}`;
        progressPath.style.strokeDashoffset = strokeDashOffset;
      }
    };

    window.addEventListener("scroll", updateScrollProgress);
    return () => window.removeEventListener("scroll", updateScrollProgress);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleLanguageToggle = () => {
    const currentLang = Cookies.get("ulang");
    const newLang = currentLang === "fa" ? "en" : "fa";

    const expires = new Date(new Date().getTime() + 15 * 60 * 1000);

    Cookies.set("ulang", newLang, { expires });
    router.push("/");
    router.refresh();
  };


  return (
    <>
      <div id="loader-container" className="">
        <div id="loader"></div>
      </div>

      <div className="progress-wrap fixed bottom-[30px] right-[30px] w-[50px] h-[50px] opacity-0 invisible transition-all duration-300 z-[999] cursor-pointer hover:bottom-[35px]" id="scrollUp" onClick={scrollToTop}>
        <svg
          className="progress-circle svg-content absolute top-0 left-0 w-full h-full rotate-[-90deg]"
          width="100%"
          height="100%"
          viewBox="-1 -1 102 102"
        >
          <path d="M50,1 a49,49 0 0,1 0,98 a49,49 0 0,1 0,-98" className="stroke-[#8750f7] stroke-[3px] fill-transparent" style={{ strokeDasharray: '307.867', strokeDashoffset: '307.867' }}></path>
        </svg>
      </div>

      <header className="tj-header-area header-absolute pt-[40px] pb-[20px] absolute left-0 top-0 w-full z-[99] bg-transparent">
        <div className="max-w-[1320px] mx-auto px-4">
          <div className="flex flex-wrap -mx-4">
            <div className="navbarecastom w-full px-4 flex flex-wrap items-center">
              <div className="logo-box max-w-[60px] mr-[35px]">
                <a href="" className="inline-block">
                  <img src={logoDark} alt="Logo" className="w-[42px] h-[42px]" />
                </a>
              </div>

              <div className="header-info-list hidden md:inline-block">
                <ul className="m-0 p-0 list-none flex">
                  <li className="mr-[25px]">
                    <a href="mailto:mail@gerolddesign.com" className={`text-[15px] font-medium no-underline transition-all duration-300 hover:text-[#8750f7] ${theme === "light" ? "text-[#2a1454]" : "text-white"}`}>{email}</a>
                  </li>
                </ul>
              </div>

              <div className="header-menu ml-auto">
                <nav>
                  <ul className="m-0 p-0 list-none flex flex-wrap items-center gap-[35px]">
                    <li className="relative">
                      <a
                        onClick={() => setMenuOpen(false)}
                        href="#services-section"
                        className={`flex text-[15px] font-medium no-underline relative py-[10px] before:content-[''] before:absolute before:w-full before:h-[2px] before:rounded-[4px] before:bg-gradient-to-r before:from-[#2a1454] before:to-[#8750f7] before:bottom-[9px] before:left-0 before:origin-right before:scale-x-0 before:transition-transform before:duration-300 hover:before:origin-left hover:before:scale-x-100 ${theme === "light" ? "text-[#2a1454]" : "text-white"}`}
                      >
                        خدمات
                      </a>
                    </li>
                    <li className="relative">
                      <a
                        onClick={() => setMenuOpen(false)}
                        href="#skills-section"
                        className={`flex text-[15px] font-medium no-underline relative py-[10px] before:content-[''] before:absolute before:w-full before:h-[2px] before:rounded-[4px] before:bg-gradient-to-r before:from-[#2a1454] before:to-[#8750f7] before:bottom-[9px] before:left-0 before:origin-right before:scale-x-0 before:transition-transform before:duration-300 hover:before:origin-left hover:before:scale-x-100 ${theme === "light" ? "text-[#2a1454]" : "text-white"}`}
                      >
                        مهارت ها
                      </a>
                    </li>
                    <li className="relative">
                      <a
                        onClick={() => setMenuOpen(false)}
                        href="#resume-section"
                        className={`flex text-[15px] font-medium no-underline relative py-[10px] before:content-[''] before:absolute before:w-full before:h-[2px] before:rounded-[4px] before:bg-gradient-to-r before:from-[#2a1454] before:to-[#8750f7] before:bottom-[9px] before:left-0 before:origin-right before:scale-x-0 before:transition-transform before:duration-300 hover:before:origin-left hover:before:scale-x-100 ${theme === "light" ? "text-[#2a1454]" : "text-white"}`}
                      >
                        رزومه
                      </a>
                    </li>
                    <li className="relative">
                      <a
                        onClick={() => setMenuOpen(false)}
                        href="#works-section"
                        className={`flex text-[15px] font-medium no-underline relative py-[10px] before:content-[''] before:absolute before:w-full before:h-[2px] before:rounded-[4px] before:bg-gradient-to-r before:from-[#2a1454] before:to-[#8750f7] before:bottom-[9px] before:left-0 before:origin-right before:scale-x-0 before:transition-transform before:duration-300 hover:before:origin-left hover:before:scale-x-100 ${theme === "light" ? "text-[#2a1454]" : "text-white"}`}
                      >
                        نمونه کار
                      </a>
                    </li>
                    <li className="relative">
                      <a
                        onClick={() => setMenuOpen(false)}
                        href="#testimonials-section"
                        className={`flex text-[15px] font-medium no-underline relative py-[10px] before:content-[''] before:absolute before:w-full before:h-[2px] before:rounded-[4px] before:bg-gradient-to-r before:from-[#2a1454] before:to-[#8750f7] before:bottom-[9px] before:left-0 before:origin-right before:scale-x-0 before:transition-transform before:duration-300 hover:before:origin-left hover:before:scale-x-100 ${theme === "light" ? "text-[#2a1454]" : "text-white"}`}
                      >
                        گواهینامه ها
                      </a>
                    </li>
                    <li className="relative">
                      <a
                        onClick={() => setMenuOpen(false)}
                        href="#contact-section"
                        className={`flex text-[15px] font-medium no-underline relative py-[10px] before:content-[''] before:absolute before:w-full before:h-[2px] before:rounded-[4px] before:bg-gradient-to-r before:from-[#2a1454] before:to-[#8750f7] before:bottom-[9px] before:left-0 before:origin-right before:scale-x-0 before:transition-transform before:duration-300 hover:before:origin-left hover:before:scale-x-100 ${theme === "light" ? "text-[#2a1454]" : "text-white"}`}
                      >
                        تماس با ما
                      </a>
                    </li>
                  </ul>
                </nav>
              </div>

              <div className="header-button mr-[55px] flex gap-[12px] items-center">
                <div className="button-dark-light">
                  <button onClick={handleLanguageToggle} className="bg-transparent border-0 p-0">
                    <img src={iranFlag} alt="toggle language" className="w-[32px] h-[32px]" />
                  </button>
                </div>
                <div className="header-bine w-[2px] h-[25px] bg-[rgba(136,136,136,0.5)]"></div>
                <div
                  className="button-dark-light cursor-pointer"
                  id="toggle-theme"
                  onClick={toggleTheme}
                  role="button"
                >
                  <img
                    id="theme-icon"
                    src={theme === "dark" ? lightIcon : darkIcon}
                    alt="icon"
                    className="w-[32px] h-[32px]"
                  />
                </div>
              </div>

              <div
                className={`menu-bar lg:hidden cursor-pointer ${menuOpen ? "menu-bar-toggeled" : ""}`}
                onClick={() => {
                  setMenuOpen(!menuOpen);
                  window.scrollTo({
                    top: 4,
                    behavior: "smooth",
                  });
                }}
              >
                <button className="border-0 p-0 bg-transparent h-[25px] flex flex-col justify-between relative origin-center rotate-0 cursor-pointer transition-transform duration-300">
                  <span className={`h-[3px] w-[35px] block cursor-pointer transition-all duration-300 ml-auto ${theme === "light" ? "bg-[#8750f7]" : "bg-white"}`}></span>
                  <span className={`h-[3px] w-[40px] block cursor-pointer transition-all duration-300 ml-auto delay-200 ${theme === "light" ? "bg-[#8750f7]" : "bg-white"}`}></span>
                  <span className={`h-[3px] w-[30px] block cursor-pointer transition-all duration-300 ml-auto ${theme === "light" ? "bg-[#8750f7]" : "bg-white"}`}></span>
                  <span className={`absolute top-[-8px] left-1/2 -translate-x-1/2 block w-[3px] h-0 transition-[height] duration-400 ${theme === "light" ? "bg-[#8750f7]" : "bg-white"}`}></span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </header>

      <header
        className={`tj-header-area header-2 w-full fixed top-0 left-0 py-[15px] z-[100] transition-[opacity,top,background-color] duration-300 shadow-[0_0_30px_rgba(135,80,247,0.2)] ${theme === "light" ? "bg-[#f6f3fc]" : "bg-[#050709]"} ${headerClass === "sticky" ? "opacity-100 translate-y-0 animate-[bounceInDown_1s]" : headerClass === "sticky-out" ? "opacity-0 -translate-y-full" : ""} ${menuOpen ? "menu-opened" : ""}`}
      >
        <div className="max-w-[1320px] mx-auto px-4">
          <div className="flex flex-wrap -mx-4">
            <div className="navbarecastom w-full px-4 flex flex-nowrap items-center justify-between">
              <div className="logo-box max-w-[60px] mr-[35px]">
                <a href="" className="inline-block">
                  <img src={logoDark} alt="" className="w-[42px] h-[42px]" />
                </a>
              </div>

              <div className="header-info-list hidden md:block">
                <ul className="m-0 p-0 list-none flex">
                  <li className="mr-[25px]">
                    <a href="mailto:mail@gerolddesign.com" className={`text-[15px] font-medium no-underline transition-all duration-300 hover:text-[#8750f7] ${theme === "light" ? "text-[#2a1454]" : "text-white"}`}>{email}</a>
                  </li>
                </ul>
              </div>

              <div className={`header-menu absolute left-0 top-full w-full min-h-[90vh] overflow-y-auto origin-top transition-all duration-400 scale-y-0 ${theme === "light" ? "bg-[#ffffff]" : "bg-[#2a1454]"} ${menuOpen ? "scale-y-100" : ""} lg:static lg:relative lg:w-auto lg:min-h-auto lg:overflow-visible lg:bg-transparent lg:origin-auto lg:scale-y-100 lg:flex-1 lg:ml-auto`}>
                <nav>
                  <ul className="m-0 p-0 list-none flex flex-col lg:flex-row lg:flex-nowrap lg:items-center lg:gap-[35px] py-[20px] lg:py-0">
                    <li className="w-full lg:w-auto flex lg:block justify-center lg:justify-start">
                      <a
                        onClick={() => setMenuOpen(false)}
                        href="#services-section"
                        className={`flex justify-center lg:justify-start w-full lg:w-auto text-[22px] lg:text-[15px] font-medium no-underline py-[10px] uppercase lg:normal-case leading-none lg:leading-normal tracking-[1px] lg:tracking-normal relative lg:before:content-[''] lg:before:absolute lg:before:w-full lg:before:h-[2px] lg:before:rounded-[4px] lg:before:bg-gradient-to-r lg:before:from-[#2a1454] lg:before:to-[#8750f7] lg:before:bottom-[9px] lg:before:left-0 lg:before:origin-right lg:before:scale-x-0 lg:before:transition-transform lg:before:duration-300 lg:hover:before:origin-left lg:hover:before:scale-x-100 ${theme === "light" ? "text-[#2a1454]" : "text-white"}`}
                      >
                        خدمات
                      </a>
                    </li>
                    <li className="w-full lg:w-auto flex lg:block justify-center lg:justify-start">
                      <a
                        onClick={() => setMenuOpen(false)}
                        href="#skills-section"
                        className={`flex justify-center lg:justify-start w-full lg:w-auto text-[22px] lg:text-[15px] font-medium no-underline py-[10px] uppercase lg:normal-case leading-none lg:leading-normal tracking-[1px] lg:tracking-normal relative lg:before:content-[''] lg:before:absolute lg:before:w-full lg:before:h-[2px] lg:before:rounded-[4px] lg:before:bg-gradient-to-r lg:before:from-[#2a1454] lg:before:to-[#8750f7] lg:before:bottom-[9px] lg:before:left-0 lg:before:origin-right lg:before:scale-x-0 lg:before:transition-transform lg:before:duration-300 lg:hover:before:origin-left lg:hover:before:scale-x-100 ${theme === "light" ? "text-[#2a1454]" : "text-white"}`}
                      >
                        مهارت ها
                      </a>
                    </li>
                    <li className="w-full lg:w-auto flex lg:block justify-center lg:justify-start">
                      <a
                        onClick={() => setMenuOpen(false)}
                        href="#resume-section"
                        className={`flex justify-center lg:justify-start w-full lg:w-auto text-[22px] lg:text-[15px] font-medium no-underline py-[10px] uppercase lg:normal-case leading-none lg:leading-normal tracking-[1px] lg:tracking-normal relative lg:before:content-[''] lg:before:absolute lg:before:w-full lg:before:h-[2px] lg:before:rounded-[4px] lg:before:bg-gradient-to-r lg:before:from-[#2a1454] lg:before:to-[#8750f7] lg:before:bottom-[9px] lg:before:left-0 lg:before:origin-right lg:before:scale-x-0 lg:before:transition-transform lg:before:duration-300 lg:hover:before:origin-left lg:hover:before:scale-x-100 ${theme === "light" ? "text-[#2a1454]" : "text-white"}`}
                      >
                        رزومه
                      </a>
                    </li>
                    <li className="w-full lg:w-auto flex lg:block justify-center lg:justify-start">
                      <a
                        onClick={() => setMenuOpen(false)}
                        href="#works-section"
                        className={`flex justify-center lg:justify-start w-full lg:w-auto text-[22px] lg:text-[15px] font-medium no-underline py-[10px] uppercase lg:normal-case leading-none lg:leading-normal tracking-[1px] lg:tracking-normal relative lg:before:content-[''] lg:before:absolute lg:before:w-full lg:before:h-[2px] lg:before:rounded-[4px] lg:before:bg-gradient-to-r lg:before:from-[#2a1454] lg:before:to-[#8750f7] lg:before:bottom-[9px] lg:before:left-0 lg:before:origin-right lg:before:scale-x-0 lg:before:transition-transform lg:before:duration-300 lg:hover:before:origin-left lg:hover:before:scale-x-100 ${theme === "light" ? "text-[#2a1454]" : "text-white"}`}
                      >
                        نمونه کار
                      </a>
                    </li>
                    <li className="w-full lg:w-auto flex lg:block justify-center lg:justify-start">
                      <a
                        onClick={() => setMenuOpen(false)}
                        href="#testimonials-section"
                        className={`flex justify-center lg:justify-start w-full lg:w-auto text-[22px] lg:text-[15px] font-medium no-underline py-[10px] uppercase lg:normal-case leading-none lg:leading-normal tracking-[1px] lg:tracking-normal relative lg:before:content-[''] lg:before:absolute lg:before:w-full lg:before:h-[2px] lg:before:rounded-[4px] lg:before:bg-gradient-to-r lg:before:from-[#2a1454] lg:before:to-[#8750f7] lg:before:bottom-[9px] lg:before:left-0 lg:before:origin-right lg:before:scale-x-0 lg:before:transition-transform lg:before:duration-300 lg:hover:before:origin-left lg:hover:before:scale-x-100 ${theme === "light" ? "text-[#2a1454]" : "text-white"}`}
                      >
                        گواهینامه ها
                      </a>
                    </li>
                    <li className="w-full lg:w-auto flex lg:block justify-center lg:justify-start">
                      <a
                        onClick={() => setMenuOpen(false)}
                        href="#contact-section"
                        className={`flex justify-center lg:justify-start w-full lg:w-auto text-[22px] lg:text-[15px] font-medium no-underline py-[10px] uppercase lg:normal-case leading-none lg:leading-normal tracking-[1px] lg:tracking-normal relative lg:before:content-[''] lg:before:absolute lg:before:w-full lg:before:h-[2px] lg:before:rounded-[4px] lg:before:bg-gradient-to-r lg:before:from-[#2a1454] lg:before:to-[#8750f7] lg:before:bottom-[9px] lg:before:left-0 lg:before:origin-right lg:before:scale-x-0 lg:before:transition-transform lg:before:duration-300 lg:hover:before:origin-left lg:hover:before:scale-x-100 ${theme === "light" ? "text-[#2a1454]" : "text-white"}`}
                      >
                        تماس با ما
                      </a>
                    </li>
                  </ul>
                </nav>
              </div>

              <div className="header-button flex gap-[12px] items-center">
                <a href="#contact-section" className="no-underline inline-flex gap-[10px] items-center justify-center text-[15px] leading-none font-bold text-white capitalize bg-[length:200%] bg-gradient-to-r from-[#8750f7] via-[#2a1454] to-[#8750f7] border-none rounded-[50px] py-[17px] px-[35px] transition-all duration-400 hover:bg-[position:-100%]">
                  تماس با من
                </a>
              </div>

              <div
                className={`menu-bar lg:hidden ${menuOpen ? "menu-bar-toggeled" : ""}`}
                onClick={() => setMenuOpen(!menuOpen)}
              >
                <button className={`border-0 p-0 bg-transparent h-[25px] flex flex-col justify-between relative origin-center cursor-pointer transition-transform duration-300 ${menuOpen ? "rotate-45 delay-400" : "rotate-0"}`}>
                  <span className={`h-[3px] cursor-pointer transition-all duration-300 ml-auto ${menuOpen ? "w-0" : "w-[35px]"} ${theme === "light" ? "bg-[#8750f7]" : "bg-white"}`}></span>
                  <span className={`h-[3px] cursor-pointer transition-all duration-300 ml-auto delay-200 ${menuOpen ? "w-0" : "w-[40px]"} ${theme === "light" ? "bg-[#8750f7]" : "bg-white"}`}></span>
                  <span className={`h-[3px] cursor-pointer transition-all duration-300 ml-auto ${menuOpen ? "w-0" : "w-[30px]"} ${theme === "light" ? "bg-[#8750f7]" : "bg-white"}`}></span>
                  <span className={`absolute top-[-8px] left-1/2 -translate-x-1/2 block w-[3px] transition-[height] ${menuOpen ? "h-[40px] delay-200" : "h-0"} ${theme === "light" ? "bg-[#8750f7]" : "bg-white"}`}></span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
