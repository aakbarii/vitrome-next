"use client";

import Aos from "aos";
import { useEffect } from "react";
import React from "react";
import { useTheme } from "../../../context/ThemeContext";

const ResumeSection = ({
  education,
  resumes,
  experienceTitle,
  educationTitle,
  sectionId = "resume-section",
}) => {
  const { theme } = useTheme();
  useEffect(() => {
    Aos.init({ duration: 650, once: true });
  }, []);

  return (
    <section
      className={`pt-[120px] pb-[90px] ${
        theme === "light" ? "bg-[#f6f3fc]" : "bg-[#050709]"
      }`}
      id={sectionId}
    >
      <div className="max-w-[1320px] mx-auto px-4">
        <div className="flex flex-wrap -mx-4">
          <div className="w-full md:w-1/2 px-4">
            <div
              className="mb-[50px] max-w-[700px] w-full"
              data-aos="fade-up"
              data-aos-delay="300"
            >
              <h2
                data-aos="fade-up"
                className="text-[45px] bg-gradient-to-r from-[#8750f7] to-white bg-clip-text text-transparent inline-flex gap-[15px] mb-0"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  className="w-8 h-8 fill-none stroke-current stroke-2"
                >
                  <path d="M5 7a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v7H5Z" />
                  <path d="M7 11h5" />
                  <path d="M5 14v1a2 2 0 0 0 2 2h6.5L17 20v-3h1a2 2 0 0 0 2-2v-1" />
                </svg>
                {experienceTitle}
              </h2>
            </div>

            <div
              className={`resume-widget ${
                resumes?.length > 5 ? "max-h-[400px] overflow-y-auto pr-2" : ""
              }`}
            >
              {resumes?.map((resome, index) => (
                <div
                  key={index}
                  className={`resume-item relative py-[20px] px-[30px] mb-[30px] rounded-[20px] ${
                    theme === "light" ? "bg-white" : "bg-[#140c1c]"
                  } z-[10] group before:content-[''] before:absolute before:top-0 before:left-0 before:w-full before:h-full before:opacity-0 before:transition-opacity before:duration-500 before:z-[-1] before:rounded-[20px] before:bg-gradient-to-r before:from-[#2a1454] before:to-[#8750f7] hover:before:opacity-100`}
                  data-aos="fade-left"
                >
                  <div className="time text-[#8750f7] text-[20px] font-extrabold mb-[8px] transition-colors group-hover:text-white">
                    {resome.time}
                  </div>
                  <h3
                    className={`resume-title text-[25px] mb-[8px] ${
                      theme === "light" ? "text-[#2a1454]" : ""
                    }`}
                  >
                    {resome.title}
                  </h3>
                  <div
                    className={`institute ${
                      theme === "light" ? "text-[#140c1c]" : ""
                    }`}
                  >
                    {resome.institute}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="w-full md:w-1/2 px-4">
            <div
              className="mb-[50px] max-w-[700px] w-full"
              data-aos="fade-up"
              data-aos-delay="400"
            >
              <h2
                data-aos="fade-up"
                className="text-[45px] bg-gradient-to-r from-[#8750f7] to-white bg-clip-text text-transparent inline-flex gap-[15px] mb-0"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  className="w-8 h-8 fill-none stroke-current stroke-2"
                >
                  <path d="m3 9 9-5 9 5-9 5-9-5Z" />
                  <path d="M5 11v3c0 1.5 2.5 3 7 3s7-1.5 7-3v-3" />
                  <path d="M12 4v10" />
                </svg>
                {educationTitle}
              </h2>
            </div>

            <div
              className={`resume-widget ${
                education?.length > 5 ? "max-h-[400px] overflow-y-auto pr-2" : ""
              }`}
            >
              {education?.map((edu, index) => (
                <div
                  key={index}
                  className={`resume-item relative py-[20px] px-[30px] mb-[30px] rounded-[20px] ${
                    theme === "light" ? "bg-white" : "bg-[#140c1c]"
                  } z-[10] group before:content-[''] before:absolute before:top-0 before:left-0 before:w-full before:h-full before:opacity-0 before:transition-opacity before:duration-500 before:z-[-1] before:rounded-[20px] before:bg-gradient-to-r before:from-[#2a1454] before:to-[#8750f7] hover:before:opacity-100`}
                  data-aos="fade-right"
                >
                  <div className="time text-[#8750f7] text-[20px] font-extrabold mb-[8px] transition-colors group-hover:text-white">
                    {edu.time}
                  </div>
                  <h3
                    className={`resume-title text-[25px] mb-[8px] ${
                      theme === "light" ? "text-[#2a1454]" : ""
                    }`}
                  >
                    {edu.title}
                  </h3>
                  <div
                    className={`institute ${
                      theme === "light" ? "text-[#140c1c]" : ""
                    }`}
                  >
                    {edu.institute}
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

export default ResumeSection;

