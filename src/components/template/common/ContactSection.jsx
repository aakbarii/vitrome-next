"use client";

import { useEffect, useState } from "react";
import Aos from "aos";
import React from "react";
import { useTheme } from "../../../context/ThemeContext";
import { phoneCall, mailInbox, location as locationIcon } from "@/constants/images";

const defaultPlaceholders = {
  firstName: "First Name",
  lastName: "Last Name",
  email: "Email",
  phone: "Phone",
  service: "Choose Service",
  message: "Message",
};

const ContactSection = ({
  services,
  user,
  number,
  email,
  address,
  name,
  title,
  description,
  submitText,
  placeholders = {},
  onSubmit,
  isRTL = false,
  sectionId = "contact-section",
  formIntroDelay = { title: 0, description: 0 },
  infoDelay = { phone: 400, email: 500, address: 600 },
}) => {
  const { theme } = useTheme();

  useEffect(() => {
    Aos.init({ duration: 1000, once: true });
  }, []);

  const [formData, setFormData] = useState({
    conName: "",
    conLName: "",
    conEmail: "",
    conPhone: "",
    conService: "",
    conMessage: "",
    ResomeUser: user,
  });

  const mergedPlaceholders = { ...defaultPlaceholders, ...placeholders };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (onSubmit) {
      await onSubmit(formData);
    }
  };

  const textDirClass = isRTL ? "rtl" : "";

  return (
    <section
      className={`pt-[120px] pb-[120px] ${
        theme === "light" ? "bg-[#f6f3fc]" : "bg-[#050709]"
      } relative`}
      id={sectionId}
    >
      <div className="max-w-[1320px] mx-auto px-4">
        <div className="flex flex-wrap -mx-4">
          <div className="w-full lg:w-1/2 md:w-7/12 px-4 order-2 md:order-1">
            <div
              data-aos="fade-left"
              className={`contact-form-box ${
                theme === "light" ? "bg-white" : "bg-[#140c1c]"
              } p-[40px] rounded-[15px]`}
            >
              <div className="mb-[25px] max-w-[700px] w-full">
                <h2 className="text-[45px] bg-gradient-to-r from-[#8750f7] to-white bg-clip-text text-transparent inline-flex gap-[15px] mb-0">
                  {title}
                </h2>
                {description && (
                  <p
                    className={`mt-[15px] ${
                      theme === "light" ? "text-[#140c1c]" : ""
                    } ${textDirClass}`}
                    data-aos="fade-left"
                    data-aos-delay={formIntroDelay.description}
                  >
                    {description}
                  </p>
                )}
              </div>
              <div className="tj-contact-form">
                <form id="myForm" onSubmit={handleSubmit}>
                  <div className="flex flex-wrap -mx-3">
                    <div className="w-full sm:w-1/2 px-3">
                      <div className="mb-[15px] w-full">
                        <input
                          onChange={handleChange}
                          type="text"
                          name="conName"
                          id="conName"
                          placeholder={mergedPlaceholders.firstName}
                          autoComplete="off"
                          required
                          className={`block w-full ${
                            theme === "light"
                              ? "bg-[#f6f3fc] border-[#8750f7] text-[#140c1c]"
                              : "bg-[#050709] border-[#22272c] text-white"
                          } border text-[16px] leading-none p-[14px_20px] rounded-[8px] transition-all duration-300 outline-none focus:border-[#8750f7] ${textDirClass}`}
                        />
                      </div>
                    </div>
                    <div className="w-full sm:w-1/2 px-3">
                      <div className="mb-[15px] w-full">
                        <input
                          onChange={handleChange}
                          type="text"
                          name="conLName"
                          id="conLName"
                          placeholder={mergedPlaceholders.lastName}
                          autoComplete="off"
                          className={`block w-full ${
                            theme === "light"
                              ? "bg-[#f6f3fc] border-[#8750f7] text-[#140c1c]"
                              : "bg-[#050709] border-[#22272c] text-white"
                          } border text-[16px] leading-none p-[14px_20px] rounded-[8px] transition-all duration-300 outline-none focus:border-[#8750f7] ${textDirClass}`}
                        />
                      </div>
                    </div>
                    <div className="w-full sm:w-1/2 px-3">
                      <div className="mb-[15px] w-full">
                        <input
                          onChange={handleChange}
                          type="email"
                          name="conEmail"
                          id="conEmail"
                          placeholder={mergedPlaceholders.email}
                          autoComplete="off"
                          required
                          className={`block w-full ${
                            theme === "light"
                              ? "bg-[#f6f3fc] border-[#8750f7] text-[#140c1c]"
                              : "bg-[#050709] border-[#22272c] text-white"
                          } border text-[16px] leading-none p-[14px_20px] rounded-[8px] transition-all duration-300 outline-none focus:border-[#8750f7] ${textDirClass}`}
                        />
                      </div>
                    </div>
                    <div className="w-full sm:w-1/2 px-3">
                      <div className="mb-[15px] w-full">
                        <input
                          onChange={handleChange}
                          type="tel"
                          name="conPhone"
                          id="conPhone"
                          placeholder={mergedPlaceholders.phone}
                          autoComplete="off"
                          required
                          className={`block w-full ${
                            theme === "light"
                              ? "bg-[#f6f3fc] border-[#8750f7] text-[#140c1c]"
                              : "bg-[#050709] border-[#22272c] text-white"
                          } border text-[16px] leading-none p-[14px_20px] rounded-[8px] transition-all duration-300 outline-none focus:border-[#8750f7] ${textDirClass}`}
                        />
                      </div>
                    </div>
                    <div className="w-full px-3">
                      <div className="mb-[15px] w-full">
                        <select
                          onChange={handleChange}
                          name="conService"
                          id="conService"
                          value={formData.conService}
                          required
                          className={`block w-full ${
                            theme === "light"
                              ? "bg-[#f6f3fc] border-[#8750f7] text-[#140c1c]"
                              : "bg-[#050709] border-[#22272c] text-white"
                          } border text-[16px] leading-none p-[17px_20px] rounded-[8px] transition-all duration-300 outline-none focus:border-[#8750f7] ${textDirClass}`}
                        >
                          <option value="" disabled>
                            {mergedPlaceholders.service}
                          </option>
                          {services?.map((service, index) => (
                            <option key={index} value={service.title}>
                              {service.title}
                            </option>
                          ))}
                        </select>
                      </div>
                    </div>
                    <div className="w-full px-3">
                      <div className="mb-[15px] w-full">
                        <textarea
                          onChange={handleChange}
                          name="conMessage"
                          id="conMessage"
                          placeholder={mergedPlaceholders.message}
                          required
                          className={`block w-full ${
                            theme === "light"
                              ? "bg-[#f6f3fc] border-[#8750f7] text-[#140c1c]"
                              : "bg-[#050709] border-[#22272c] text-white"
                          } border text-[16px] leading-none p-[14px_20px] rounded-[8px] transition-all duration-300 outline-none focus:border-[#8750f7] h-[200px] resize-none ${textDirClass}`}
                        ></textarea>
                      </div>
                    </div>
                    <input
                      hidden
                      type="text"
                      name="ResomeUser"
                      id="ResomeUser"
                      value={user}
                      onChange={handleChange}
                    />
                    <div className="w-full px-3">
                      <div className="form_btn">
                        <button
                          type="submit"
                          className="no-underline inline-flex gap-[10px] items-center justify-center text-[15px] leading-none font-bold text-white capitalize bg-[length:200%] bg-gradient-to-r from-[#8750f7] via-[#2a1454] to-[#8750f7] border-none rounded-[50px] py-[17px] px-[35px] transition-all duration-400 hover:bg-[position:-100%]"
                        >
                          {submitText}
                        </button>
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
                <li
                  className="flex flex-wrap items-center relative pr-[165px] mb-[40px] last:mb-0"
                  data-aos="fade-right"
                  data-aos-delay={infoDelay.phone}
                >
                  <div className="icon-box w-[50px] h-[50px] rounded-full bg-gradient-to-br from-[#2a1454] to-[#8750f7] absolute top-0 right-[90px] left-auto text-center leading-[60px] text-[20px] flex items-center justify-center">
                    <img className="icon-img w-8" src={phoneCall} alt="Phone" />
                  </div>
                  <div className="text-box">
                    <p
                      className={`mb-[3px] ${
                        theme === "light" ? "text-[#140c1c]" : ""
                      } ${textDirClass}`}
                    >
                      {isRTL ? "شماره تماس" : "Phone"}
                    </p>
                    <a
                      href={`tel:${number}`}
                      className={`text-[20px] font-medium no-underline transition-all duration-400 hover:text-[#8750f7] ${
                        theme === "light" ? "text-[#2a1454]" : "text-white"
                      } ${textDirClass}`}
                    >
                      {number}
                    </a>
                  </div>
                </li>
                <li
                  className="flex flex-wrap items-center relative pr-[165px] mb-[40px] last:mb-0"
                  data-aos="fade-right"
                  data-aos-delay={infoDelay.email}
                >
                  <div className="icon-box w-[50px] h-[50px] rounded-full bg-gradient-to-br from-[#2a1454] to-[#8750f7] absolute top-0 right-[90px] left-auto text-center leading-[60px] text-[20px] flex items-center justify-center">
                    <img className="icon-img w-8" src={mailInbox} alt="Email" />
                  </div>
                  <div className="text-box">
                    <p
                      className={`mb-[3px] ${
                        theme === "light" ? "text-[#140c1c]" : ""
                      } ${textDirClass}`}
                    >
                      {isRTL ? "ایمیل" : "Email"}
                    </p>
                    <a
                      href={`mailto:${email}`}
                      className={`text-[20px] font-medium no-underline transition-all duration-400 hover:text-[#8750f7] ${
                        theme === "light" ? "text-[#2a1454]" : "text-white"
                      } ${textDirClass}`}
                    >
                      {email}
                    </a>
                  </div>
                </li>
                <li
                  className="flex flex-wrap items-center relative pr-[165px] mb-[40px] last:mb-0"
                  data-aos="fade-right"
                  data-aos-delay={infoDelay.address}
                >
                  <div className="icon-box w-[50px] h-[50px] rounded-full bg-gradient-to-br from-[#2a1454] to-[#8750f7] absolute top-0 right-[90px] left-auto text-center leading-[60px] text-[20px] flex items-center justify-center">
                    <img className="icon-img w-8" src={locationIcon} alt="Location" />
                  </div>
                  <div className="text-box">
                    <p
                      className={`mb-[3px] ${
                        theme === "light" ? "text-[#140c1c]" : ""
                      } ${textDirClass}`}
                    >
                      {isRTL ? "آدرس" : "Address"}
                    </p>
                    <a
                      href="#"
                      className={`text-[20px] font-medium no-underline transition-all duration-400 hover:text-[#8750f7] ${
                        theme === "light" ? "text-[#2a1454]" : "text-white"
                      } ${textDirClass}`}
                    >
                      {address}
                    </a>
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

export default ContactSection;

