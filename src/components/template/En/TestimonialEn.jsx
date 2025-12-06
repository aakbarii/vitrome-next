"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay , Pagination } from "swiper/modules";
import "swiper/css";
import 'swiper/css/pagination';
import React from "react";
import { useTheme } from "../../../context/ThemeContext";
import { testimonialUser1 } from "@/constants/images";

const TestimonialSection = ({ comments }) => {
  const { theme } = useTheme();
    return (
      <section className={`pt-[120px] pb-[120px] ${theme === "light" ? "bg-[#f6f3fc]" : "bg-[#050709]"} relative`} id="testimonials-section">
        <div className="max-w-[1320px] mx-auto px-4">
          <div className="flex flex-wrap -mx-4">
            <div className="w-full lg:w-5/12 px-4">
              <div className="mb-[50px] max-w-[700px] w-full">
                <h2 data-aos="fade-left" data-aos-delay="300" className="text-[45px] bg-gradient-to-r from-[#8750f7] to-white bg-clip-text text-transparent inline-flex gap-[15px] mb-0">
                  My Client's Stories
                </h2>
                <p data-aos="fade-left" data-aos-delay="400" className={`mt-[15px] ${theme === "light" ? "text-[#140c1c]" : ""}`}>
                  Empowering people in a new digital journey with my super services
                </p>
              </div>
            </div>
            <div data-aos="fade-right" className="w-full lg:w-7/12 xl:w-1/2 xl:ml-[8.333333%] px-4">
            <div className="testimonials-widget relative overflow-hidden">
              <Swiper
                modules={[Autoplay,Pagination]}
                spaceBetween={30}
                slidesPerView={1}
                loop={true}
                pagination={{ clickable: true }}
                autoplay={{ delay: 7000, disableOnInteraction: false }}
                breakpoints={{
                  600: { slidesPerView: 2 },
                  1000: { slidesPerView: 2 },
                }}
              >
                {comments?.map((comment, index) => (
                  <SwiperSlide key={index}>
                    <div className={`testimonial-item ${theme === "light" ? "bg-white" : "bg-[#140c1c]"} max-w-[300px] w-full rounded-[15px] p-[25px]`}>
                      <div className="top-area mb-[20px] flex flex-wrap justify-between">
                        <div className="image-box w-[40%] max-w-[120px]">
                          <img
                            src={testimonialUser1}
                            alt={comment.name}
                            className="rounded-[5px_5px_5px_125px]"
                          />
                        </div>
                        <div className="logo-box max-w-[100px] w-full"></div>
                      </div>
                      <div className="icon-box mb-[25px] flex gap-[5px]">
                        <svg
                          width="42"
                          height="22"
                          viewBox="0 0 22 22"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                          className="transition-all duration-400"
                        >
                          <path
                            d="M0.105431 2.18998C0.0301532 0.988687 1.02531 -0.00647222 2.2266 0.0688056L19.4961 1.15097C21.2148 1.25867 22.0029 3.34358 20.7852 4.56127L4.5979 20.7486C3.3802 21.9663 1.2953 21.1781 1.1876 19.4594L0.105431 2.18998Z"
                            fill="url(#paint0_linear_263_588)"
                          ></path>
                          <defs>
                            <linearGradient
                              id="paint0_linear_263_588"
                              x1="-0.0363755"
                              y1="-0.0729998"
                              x2="35.3333"
                              y2="-0.0729991"
                              gradientUnits="userSpaceOnUse"
                            >
                              <stop
                                offset="1"
                                stopColor="#8750f7"
                              ></stop>
                              <stop
                                offset="1"
                                stopColor="#140C1C"
                                stopOpacity="0"
                              ></stop>
                            </linearGradient>
                          </defs>
                        </svg>
                        <svg
                          width="42"
                          height="22"
                          viewBox="0 0 22 22"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                          className="transition-all duration-400"
                        >
                          <path
                            d="M0.105431 2.18998C0.0301532 0.988687 1.02531 -0.00647222 2.2266 0.0688056L19.4961 1.15097C21.2148 1.25867 22.0029 3.34358 20.7852 4.56127L4.5979 20.7486C3.3802 21.9663 1.2953 21.1781 1.1876 19.4594L0.105431 2.18998Z"
                            fill="url(#paint0_linear_263_589)"
                          ></path>
                          <defs>
                            <linearGradient
                              id="paint0_linear_263_589"
                              x1="-0.0363755"
                              y1="-0.0729998"
                              x2="35.3333"
                              y2="-0.0729991"
                              gradientUnits="userSpaceOnUse"
                            >
                              <stop
                                offset="1"
                                stopColor="#8750f7"
                              ></stop>
                              <stop
                                offset="1"
                                stopColor="#140C1C"
                                stopOpacity="0"
                              ></stop>
                            </linearGradient>
                          </defs>
                        </svg>
                      </div>
                      <p style={{ minHeight: "75px" }} className={`quote text-[16px] mb-[50px] ${theme === "light" ? "text-[#140c1c]" : ""}`}>
                        {comment.paragraph}
                      </p>
                      <h4 className={`name text-[18px] mb-[5px] ${theme === "light" ? "text-[#2a1454]" : "text-white"}`}>{comment.name}</h4>
                      <span className={`designation text-[14px] block ${theme === "light" ? "text-[#140c1c]" : ""}`}>{comment.position}</span>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
          </div>
        </div>
      </section>
    );
  };
  
  export default TestimonialSection;
  