"use client";

import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { meImage } from "@/constants/images";
import Odometer from "react-odometerjs";
import { useTheme } from "../../../context/ThemeContext";
import { TelegramIcon, InstagramIcon, LinkedInIcon, GithubIcon } from "@/components/icons/SocialIcons";

const HeroSection = ({ counters, information, links }) => {
  const { theme } = useTheme();
  const [counter, setCounter] = useState({
    history: 0,
    completion: 0,
    satisfied: 0,
    experience: 0,
  });

  const heroRef = useRef(null);
  const statsRef = useRef(null);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    const svgText = document.querySelector(
      ".hero-section .intro_text svg text"
    );

    if (svgText) {
      gsap.to(svgText, {
        delay: 1,
        opacity: 0.7,
        duration: 2,
        onComplete: () => {
          svgText.classList.add("animate-stroke");
        },
      });
    }
  }, []);

  useEffect(() => {
    if (counters) {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting && !hasAnimated) {
              setCounter({
                history: counters.history,
                completion: counters.completion,
                satisfied: counters.satisfied,
                experience: counters.experience,
              });
              setHasAnimated(true); // فقط یکبار اجرا شود
            }
          });
        },
        { threshold: 0.5 }
      );

      if (statsRef.current) {
        observer.observe(statsRef.current);
      }

      return () => {
        if (statsRef.current) observer.unobserve(statsRef.current);
      };
    }
  }, [counters, hasAnimated]);

  return (
    <section className={`pt-[200px] pb-[50px] ${theme === "light" ? "bg-[#f6f3fc]" : "bg-[#0f0715]"} relative overflow-hidden z-[1] flex items-center before:content-[''] before:absolute before:top-0 before:right-0 before:w-[322px] before:h-[308px] before:rounded-full before:bg-gradient-to-br before:from-[#8750f7] before:to-transparent before:blur-[150px] before:-mr-[5%] before:-mt-[5%] before:z-[-1]`} id="intro">
      <div className="intro_text hidden md:block">
        <svg viewBox="0 0 1320 300" className="font-['Russo_One'] absolute w-full h-full left-[46%] top-[55%] -translate-x-1/2 -translate-y-1/2 scale-100 flex items-center justify-center z-[-1] animate-[pulsate_3s_infinite_alternate_ease-in-out]">
          <text x="50%" y="50%" textAnchor="middle" className="uppercase stroke-[1.2] stroke-[#2a1454] fill-transparent text-[240px] inline-block opacity-0" id="hero-svg-text">
            HI
          </text>
        </svg>
      </div>

      <div className="max-w-[1320px] mx-auto px-4">
        <div className="flex flex-wrap items-center -mx-4">
          <div className="w-full md:w-1/2 px-4">
            <div className="hero-content-box">
              <span className="text-[36px] font-bold block mb-[10px]">I am {information?.name}</span>
              <h1 className="text-[65px] bg-gradient-to-r from-[#8750f7] to-white bg-clip-text text-transparent">
                {information?.job1}
                <br />
                {information?.job2}
              </h1>

              <div className="hero-image-box md:hidden flex justify-center items-center">
                <img src={meImage} alt="Hero" className={`rounded-[38px] rotate-[4.29deg] relative border-2 ${theme === "light" ? "border-[#8750f7]" : "border-[#2a1454]"} transition-all duration-300 hover:border-[#8750f7] hover:rotate-0`} />
              </div>

              <p className={`text-[20px] max-w-[550px] w-full mb-0 ${theme === "light" ? "text-[#140c1c]" : ""}`}>{information?.aboutmy}</p>
              <div className="button-box mt-[50px] gap-[25px] flex flex-wrap items-center">
                <a href={links?.resume} className="no-underline text-[15px] leading-none font-medium text-[#8750f7] rounded-[50px] py-[17px] px-[35px] border border-[#8750f7] transition-all duration-300 tracking-[1px] flex items-center gap-[6px] hover:bg-[#8750f7] hover:text-white">
                  Download CV
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    className="w-[17px] h-[17px] fill-none stroke-current stroke-2"
                  >
                    <path d="M12 4v10m0 0 4-4m-4 4-4-4" />
                    <path d="M5 18h14" />
                  </svg>
                </a>
                <ul className="m-0 p-0 list-none flex gap-3">
                  <li>
                    <a href={links?.telegram} target="_blank" rel="noopener noreferrer" className="text-[#8750f7] w-[35px] h-[35px] border border-[#8750f7] rounded-full flex items-center justify-center relative z-[1] no-underline before:content-[''] before:absolute before:top-0 before:left-0 before:w-full before:h-full before:bg-[#8750f7] before:scale-0 before:transition-all before:duration-300 before:rounded-full before:z-[-1] hover:border-[#8750f7] hover:text-white hover:before:scale-110">
                      <TelegramIcon className="w-[18px] h-[18px] transition-all duration-300" />
                    </a>
                  </li>
                  <li>
                    <a href={links?.instagram} target="_blank" rel="noopener noreferrer" className="text-[#8750f7] w-[35px] h-[35px] border border-[#8750f7] rounded-full flex items-center justify-center relative z-[1] no-underline before:content-[''] before:absolute before:top-0 before:left-0 before:w-full before:h-full before:bg-[#8750f7] before:scale-0 before:transition-all before:duration-300 before:rounded-full before:z-[-1] hover:border-[#8750f7] hover:text-white hover:before:scale-110">
                      <InstagramIcon className="w-[18px] h-[18px] transition-all duration-300" />
                    </a>
                  </li>
                  <li>
                    <a href={links?.linkedin} target="_blank" rel="noopener noreferrer" className="text-[#8750f7] w-[35px] h-[35px] border border-[#8750f7] rounded-full flex items-center justify-center relative z-[1] no-underline before:content-[''] before:absolute before:top-0 before:left-0 before:w-full before:h-full before:bg-[#8750f7] before:scale-0 before:transition-all before:duration-300 before:rounded-full before:z-[-1] hover:border-[#8750f7] hover:text-white hover:before:scale-110">
                      <LinkedInIcon className="w-[18px] h-[18px] transition-all duration-300" />
                    </a>
                  </li>
                  <li>
                    <a href={links?.github} target="_blank" rel="noopener noreferrer" className="text-[#8750f7] w-[35px] h-[35px] border border-[#8750f7] rounded-full flex items-center justify-center relative z-[1] no-underline before:content-[''] before:absolute before:top-0 before:left-0 before:w-full before:h-full before:bg-[#8750f7] before:scale-0 before:transition-all before:duration-300 before:rounded-full before:z-[-1] hover:border-[#8750f7] hover:text-white hover:before:scale-110">
                      <GithubIcon className="w-[18px] h-[18px] transition-all duration-300" />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="w-full md:w-1/2 px-4 hidden md:block">
            <div className="flex justify-center hero-image-box text-center relative before:content-[''] before:absolute before:bottom-0 before:left-0 before:w-[220px] before:h-[220px] before:rounded-full before:bg-gradient-to-br before:from-[#8750f7] before:to-transparent before:blur-[150px] before:-ml-[5%] before:-mb-[5%]">
              <img src={meImage} alt="Hero" className={`rounded-[38px] rotate-[4.29deg] relative border-2 ${theme === "light" ? "border-[#8750f7]" : "border-[#2a1454]"} transition-all duration-300 hover:border-[#8750f7] hover:rotate-0`} />
            </div>
          </div>
        </div>

        <div className="funfact-area mt-[120px]" ref={statsRef}>
          <div className="flex flex-wrap -mx-4">
            <div className="w-1/2 lg:w-1/4 px-4">
              <div className="flex flex-col sm:flex-row flex-wrap items-center gap-[15px]">
                <div className="text-[64px] leading-none font-bold flex flex-wrap items-center">
                  <Odometer
                    value={counter?.history}
                    format="d"
                    duration={2000}
                  />
                </div>
                <div className={`text ${theme === "light" ? "text-[#140c1c]" : ""}`}>Work <br /> History</div>
              </div>
            </div>
            <div className="w-1/2 lg:w-1/4 px-4">
              <div className="flex flex-col sm:flex-row flex-wrap items-center gap-[15px]">
                <div className="text-[64px] leading-none font-bold flex flex-wrap items-center">
                  <Odometer
                    value={counter?.completion}
                    format="d"
                    duration={2000}
                  />+
                </div>
                <div className={`text ${theme === "light" ? "text-[#140c1c]" : ""}`}>Completed <br /> Projects</div>
              </div>
            </div>
            <div className="w-1/2 lg:w-1/4 px-4">
              <div className="flex flex-col sm:flex-row flex-wrap items-center gap-[15px]">
                <div className="text-[64px] leading-none font-bold flex flex-wrap items-center">
                  <Odometer
                    value={counter?.satisfied}
                    format="d"
                    duration={2000}
                  />K
                </div>
                <div className={`text ${theme === "light" ? "text-[#140c1c]" : ""}`}>Client <br /> Satisfaction</div>
              </div>
            </div>
            <div className="w-1/2 lg:w-1/4 px-4">
              <div className="flex flex-col sm:flex-row flex-wrap items-center gap-[15px]">
                <div className="text-[64px] leading-none font-bold flex flex-wrap items-center">
                  <Odometer
                    value={counter?.experience}
                    format="d"
                    duration={2000}
                  />
                </div>
                <div className={`text ${theme === "light" ? "text-[#140c1c]" : ""}`}>Years of <br /> Experience</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
