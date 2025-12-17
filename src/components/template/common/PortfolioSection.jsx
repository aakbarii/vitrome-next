"use client";

import Aos from "aos";
import { useEffect } from "react";
import React from "react";
import { useTheme } from "../../../context/ThemeContext";

const PortfolioSection = ({
  projects,
  title,
  description,
  sectionId = "works-section",
}) => {
  const { theme } = useTheme();

  useEffect(() => {
    Aos.init({ duration: 1000, once: true });
  }, []);

  return (
    <section
      className={`pt-[120px] pb-[80px] ${
        theme === "light" ? "bg-[#f6f3fc]" : "bg-[#0f0715]"
      }`}
      id={sectionId}
    >
      <div className="max-w-[1320px] mx-auto px-4">
        <div className="flex flex-wrap -mx-4">
          <div className="w-full px-4">
            <div className="mb-[50px] max-w-[700px] w-full mx-auto text-center">
              <h2
                data-aos="fade-up"
                data-aos-delay="300"
                className="text-[45px] bg-gradient-to-r from-[#8750f7] to-white bg-clip-text text-transparent inline-flex gap-[15px] mb-0"
              >
                {title}
              </h2>
              {description && (
                <p
                  data-aos="fade-up"
                  data-aos-delay="400"
                  className={`mt-[15px] ${
                    theme === "light" ? "text-[#140c1c]" : ""
                  }`}
                >
                  {description}
                </p>
              )}
            </div>
          </div>
        </div>

        <div className="flex flex-wrap -mx-4">
          <div className="w-full px-4">
            <div
              className="portfolio-filter text-center"
              data-aos="fade-up"
              data-aos-delay="500"
            ></div>

            <div
              className="portfolio-box pt-[50px] relative before:content-[''] before:absolute before:top-1/2 before:left-1/2 before:w-[35%] before:h-[35%] before:-translate-x-1/2 before:-translate-y-1/2 before:rounded-full before:bg-gradient-to-br before:from-[#8750f7] before:to-transparent before:blur-[150px] grid grid-cols-2 gap-5 max-md:grid-cols-1"
              data-aos="fade-up"
              data-aos-delay="600"
            >
              {projects?.map((project, index) => (
                <div
                  key={index}
                  className={`portfolio-item ${
                    theme === "light" ? "bg-white" : "bg-[#140c1c]"
                  } mb-[4%] p-[36px] rounded-[10px] relative group overflow-hidden ${
                    project.category || ""
                  }`}
                >
                  <div className="image-box text-center">
                    <img
                      src={`/assets/img/project/${project.image}`}
                      alt={project.proname}
                      className="w-full h-auto transition-transform duration-300 group-hover:scale-110"
                    />
                  </div>
                  <div className="content-box absolute bottom-[15px] left-0 bg-gradient-to-r from-[#2a1454] to-[#8750f7] w-[calc(100%-40px)] rounded-[15px] mx-auto right-0 p-[20px] pr-[50px] opacity-0 invisible transition-all duration-300 translate-y-[15px] group-hover:opacity-100 group-hover:visible group-hover:translate-y-0">
                    <h3 className="text-[30px]">{project.proname}</h3>
                    <p className="mb-0">{project.paragraph}</p>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      className="absolute top-1/2 left-[25px] right-auto w-5 h-5 text-white transition-all duration-500 -translate-y-1/2 origin-center group-hover:rotate-[270deg]"
                    >
                      <path
                        d="M7 17 17 7M9 7h8v8"
                        className="fill-none stroke-current stroke-2"
                      />
                    </svg>
                    <button
                      data-mfp-src="#portfolio-wrapper"
                      className="portfolio-link modal-popup absolute top-0 left-0 w-full h-full z-[1] bg-transparent border-0 p-0"
                    ></button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;

