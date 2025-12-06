"use client";

import React from "react";
import { useTheme } from "@/context/ThemeContext";
import Cookies from "js-cookie";
import { useRouter } from "next/navigation";

const ResumeToggleButton = () => {
  const { theme } = useTheme();
  const router = useRouter();

  const handleResumeToggle = () => {
    const currentTemplate = Cookies.get("resumeTemplate") || "one";
    const newTemplate = currentTemplate === "one" ? "two" : "one";

    const expires = new Date(new Date().getTime() + 15 * 60 * 1000);

    Cookies.set("resumeTemplate", newTemplate, { expires });
    router.push("/");
    router.refresh();
  };

  return (
    <div
      className={`resume-toggle-btn fixed bottom-[30px] left-[30px] w-[50px] h-[50px] ${theme === "light" ? "bg-white border-[#8750f7]" : "bg-[#140c1c] border-[#8750f7]"} border-[2px] rounded-full flex items-center justify-center transition-all duration-300 z-[999] cursor-pointer hover:scale-110 shadow-[0_0_20px_rgba(135,80,247,0.3)]`}
      onClick={handleResumeToggle}
      title="تغییر رزومه"
    >
      <i className="flaticon-recommendation text-[#8750f7] text-[24px]"></i>
    </div>
  );
};

export default ResumeToggleButton;

