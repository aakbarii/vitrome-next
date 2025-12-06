"use client";

import Aos from "aos";
import { useEffect } from "react";
import React from "react";
import { useTheme } from "../../../context/ThemeContext";

const Resume = ({ education, resumes }) => {
  const { theme } = useTheme();
  useEffect(() => {
    Aos.init({ duration: 650, once: true });
  }, []);

  return (
    <section className={`pt-[120px] pb-[90px] ${theme === "light" ? "bg-[#f6f3fc]" : "bg-[#050709]"}`} id="resume-section">
      <div className="max-w-[1320px] mx-auto px-4">
        <div className="flex flex-wrap -mx-4">
          <div className="w-full md:w-1/2 px-4">
            <div className="mb-[50px] max-w-[700px] w-full" data-aos="fade-up">
              <h2 data-aos="fade-up" className="text-[45px] bg-gradient-to-r from-[#8750f7] to-white bg-clip-text text-transparent inline-flex gap-[15px] mb-0">
                <i className="flaticon-recommendation"></i> My Experience
              </h2>
            </div>

            <div
              className={`resume-widget ${resumes?.length > 5 ? "max-h-[400px] overflow-y-auto pr-2" : ""}`}
            >
              {resumes?.map((resome, index) => (
                <div key={index} className={`resume-item relative py-[20px] px-[30px] mb-[30px] rounded-[20px] ${theme === "light" ? "bg-white" : "bg-[#140c1c]"} z-[10] group before:content-[''] before:absolute before:top-0 before:left-0 before:w-full before:h-full before:opacity-0 before:transition-opacity before:duration-500 before:z-[-1] before:rounded-[20px] before:bg-gradient-to-r before:from-[#2a1454] before:to-[#8750f7] hover:before:opacity-100`} data-aos="fade-left">
                  <div className="time text-[#8750f7] text-[20px] font-extrabold mb-[8px] transition-colors group-hover:text-white">{resome.time}</div>
                  <h3 className={`resume-title text-[25px] mb-[8px] ${theme === "light" ? "text-[#2a1454]" : ""}`}>{resome.title}</h3>
                  <div className={`institute ${theme === "light" ? "text-[#140c1c]" : ""}`}>{resome.institute}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="w-full md:w-1/2 px-4">
            <div className="mb-[50px] max-w-[700px] w-full" data-aos="fade-up">
              <h2 data-aos="fade-up" className="text-[45px] bg-gradient-to-r from-[#8750f7] to-white bg-clip-text text-transparent inline-flex gap-[15px] mb-0">
                <i className="flaticon-graduation-cap"></i> My Education
              </h2>
            </div>

            <div
              className={`resume-widget ${education?.length > 5 ? "max-h-[400px] overflow-y-auto pr-2" : ""}`}
            >
              {education?.map((edu, index) => (
                <div key={index} className={`resume-item relative py-[20px] px-[30px] mb-[30px] rounded-[20px] ${theme === "light" ? "bg-white" : "bg-[#140c1c]"} z-[10] group before:content-[''] before:absolute before:top-0 before:left-0 before:w-full before:h-full before:opacity-0 before:transition-opacity before:duration-500 before:z-[-1] before:rounded-[20px] before:bg-gradient-to-r before:from-[#2a1454] before:to-[#8750f7] hover:before:opacity-100`} data-aos="fade-right">
                  <div className="time text-[#8750f7] text-[20px] font-extrabold mb-[8px] transition-colors group-hover:text-white">{edu.time}</div>
                  <h3 className={`resume-title text-[25px] mb-[8px] ${theme === "light" ? "text-[#2a1454]" : ""}`}>{edu.title}</h3>
                  <div className={`institute ${theme === "light" ? "text-[#140c1c]" : ""}`}>{edu.institute}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resume;
