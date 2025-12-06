"use client";

import { phoneCall, mailInbox, location } from "@/constants/images";
import React from "react";
import { useTheme } from "../../../context/ThemeContext";

const Contact = ({ services, user, number, email, address, name }) => {
  const { theme } = useTheme();
  return (
    <section className={`pt-[120px] pb-[120px] ${theme === "light" ? "bg-[#f6f3fc]" : "bg-[#050709]"} relative`} id="contact-section">
      <div className="max-w-[1320px] mx-auto px-4">
        <div className="flex flex-wrap -mx-4">
          <div className="w-full lg:w-1/2 md:w-7/12 px-4 order-2 md:order-1">
            <div className={`contact-form-box ${theme === "light" ? "bg-white" : "bg-[#140c1c]"} p-[40px] rounded-[15px]`} data-aos="fade-left" data-aos-delay="300">
              <div className="mb-[25px] max-w-[700px] w-full">
                <h2 className="text-[45px] bg-gradient-to-r from-[#8750f7] to-white bg-clip-text text-transparent inline-flex gap-[15px] mb-0">Let's work together!</h2>
                <p className={`mt-[15px] ${theme === "light" ? "text-[#140c1c]" : ""}`}>
                  I design and code beautifully simple things and I love what I do.
                  Just simple like that!
                </p>
              </div>
              <div className="tj-contact-form">
                <form id="myForm" action="/SendMessage" method="POST" onSubmit={(e) => { e.preventDefault(); alert(`Your message has been sent to ${name}`); }}>
                  <div className="flex flex-wrap -mx-3">
                    <div className="w-full sm:w-1/2 px-3">
                      <div className="mb-[15px] w-full">
                        <input type="text" name="conName" id="conName" placeholder="First Name" autoComplete="off" required className={`block w-full ${theme === "light" ? "bg-[#f6f3fc] border-[#8750f7] text-[#140c1c]" : "bg-[#050709] border-[#22272c] text-white"} border text-[16px] leading-none p-[14px_20px] rounded-[8px] transition-all duration-300 outline-none focus:border-[#8750f7]`} />
                      </div>
                    </div>
                    <div className="w-full sm:w-1/2 px-3">
                      <div className="mb-[15px] w-full">
                        <input type="text" name="conLName" id="conLName" placeholder="Last Name" autoComplete="off" className={`block w-full ${theme === "light" ? "bg-[#f6f3fc] border-[#8750f7] text-[#140c1c]" : "bg-[#050709] border-[#22272c] text-white"} border text-[16px] leading-none p-[14px_20px] rounded-[8px] transition-all duration-300 outline-none focus:border-[#8750f7]`} />
                      </div>
                    </div>
                    <div className="w-full sm:w-1/2 px-3">
                      <div className="mb-[15px] w-full">
                        <input type="email" name="conEmail" id="conEmail" placeholder="Email" autoComplete="off" required className={`block w-full ${theme === "light" ? "bg-[#f6f3fc] border-[#8750f7] text-[#140c1c]" : "bg-[#050709] border-[#22272c] text-white"} border text-[16px] leading-none p-[14px_20px] rounded-[8px] transition-all duration-300 outline-none focus:border-[#8750f7]`} />
                      </div>
                    </div>
                    <div className="w-full sm:w-1/2 px-3">
                      <div className="mb-[15px] w-full">
                        <input type="tel" name="conPhone" id="conPhone" placeholder="Phone Number" autoComplete="off" required className={`block w-full ${theme === "light" ? "bg-[#f6f3fc] border-[#8750f7] text-[#140c1c]" : "bg-[#050709] border-[#22272c] text-white"} border text-[16px] leading-none p-[14px_20px] rounded-[8px] transition-all duration-300 outline-none focus:border-[#8750f7]`} />
                      </div>
                    </div>
                    <div className="w-full px-3">
                      <div className="mb-[15px] w-full">
                        <select name="conService" id="conService" className={`block w-full ${theme === "light" ? "bg-[#f6f3fc] border-[#8750f7] text-[#140c1c]" : "bg-[#050709] border-[#22272c] text-white"} border text-[16px] leading-none p-[17px_20px] rounded-[8px] transition-all duration-300 outline-none focus:border-[#8750f7]`}>
                          <option value="" selected required>Choose Service</option>
                          {services?.map((service, index) => (
                            <option key={index} value={service.title}>{service.title}</option>
                          ))}
                        </select>
                      </div>
                    </div>
                    <div className="w-full px-3">
                      <div className="mb-[15px] w-full">
                        <textarea name="conMessage" id="conMessage" placeholder="Message" required className={`block w-full ${theme === "light" ? "bg-[#f6f3fc] border-[#8750f7] text-[#140c1c]" : "bg-[#050709] border-[#22272c] text-white"} border text-[16px] leading-none p-[14px_20px] rounded-[8px] transition-all duration-300 outline-none focus:border-[#8750f7] h-[200px] resize-none`}></textarea>
                      </div>
                    </div>
                    <input hidden type="text" name="ResomeUser" id="ResomeUser" value={user} />
                    <div className="w-full px-3">
                      <div className="form_btn">
                        <button type="submit" className="no-underline inline-flex gap-[10px] items-center justify-center text-[15px] leading-none font-bold text-white capitalize bg-[length:200%] bg-gradient-to-r from-[#8750f7] via-[#2a1454] to-[#8750f7] border-none rounded-[50px] py-[17px] px-[35px] transition-all duration-400 hover:bg-[position:-100%]">Send Message</button>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
          <div className="w-full lg:w-5/12 lg:ml-[8.333333%] md:w-5/12 px-4 flex flex-wrap items-center order-1 md:order-2">
            <div className="contact-info-list">
              <ul className="m-0 p-0 list-none">
                <li className="flex flex-wrap items-center relative pr-[165px] mb-[40px] last:mb-0" data-aos="fade-right" data-aos-delay="400">
                  <div className="icon-box w-[50px] h-[50px] rounded-full bg-gradient-to-br from-[#2a1454] to-[#8750f7] absolute top-0 right-[90px] left-auto text-center leading-[60px] text-[20px] flex items-center justify-center">
                    <img className="icon-img" src={phoneCall} alt="Phone" />
                  </div>
                  <div className="text-box">
                    <p className={`mb-[3px] ${theme === "light" ? "text-[#140c1c]" : ""}`}>Phone</p>
                    <a href={`tel:${number}`} className={`text-[20px] font-medium no-underline transition-all duration-400 hover:text-[#8750f7] ${theme === "light" ? "text-[#2a1454]" : "text-white"}`}>{number}</a>
                  </div>
                </li>
                <li className="flex flex-wrap items-center relative pr-[165px] mb-[40px] last:mb-0" data-aos="fade-right" data-aos-delay="500">
                  <div className="icon-box w-[50px] h-[50px] rounded-full bg-gradient-to-br from-[#2a1454] to-[#8750f7] absolute top-0 right-[90px] left-auto text-center leading-[60px] text-[20px] flex items-center justify-center">
                    <img className="icon-img" src={mailInbox} alt="Email" />
                  </div>
                  <div className="text-box">
                    <p className={`mb-[3px] ${theme === "light" ? "text-[#140c1c]" : ""}`}>Email</p>
                    <a href={`mailto:${email}`} className={`text-[20px] font-medium no-underline transition-all duration-400 hover:text-[#8750f7] ${theme === "light" ? "text-[#2a1454]" : "text-white"}`}>{email}</a>
                  </div>
                </li>
                <li className="flex flex-wrap items-center relative pr-[165px] mb-[40px] last:mb-0" data-aos="fade-right" data-aos-delay="600">
                  <div className="icon-box w-[50px] h-[50px] rounded-full bg-gradient-to-br from-[#2a1454] to-[#8750f7] absolute top-0 right-[90px] left-auto text-center leading-[60px] text-[20px] flex items-center justify-center">
                    <img className="icon-img" src={location} alt="Location" />
                  </div>
                  <div className="text-box">
                    <p className={`mb-[3px] ${theme === "light" ? "text-[#140c1c]" : ""}`}>Address</p>
                    <a href="#" className={`text-[20px] font-medium no-underline transition-all duration-400 hover:text-[#8750f7] ${theme === "light" ? "text-[#2a1454]" : "text-white"}`}>{address}</a>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
