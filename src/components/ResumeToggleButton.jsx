"use client";

import React, { useTransition } from "react";
import { useTheme } from "@/context/ThemeContext";
import { useRouter } from "next/navigation";
import { setResumeTemplateCookie } from "@/app/actions/cookies";

const ResumeToggleButton = ({ resumeTemplate = "one" }) => {
  const { theme } = useTheme();
  const router = useRouter();
  const [, startTransition] = useTransition();

  const handleResumeToggle = () => {
    const newTemplate = resumeTemplate === "one" ? "two" : "one";

    startTransition(async () => {
      await setResumeTemplateCookie(newTemplate);
      router.push("/");
      router.refresh();
    });
  };

  return (
    <div
      className={`resume-toggle-btn fixed bottom-[30px] left-[30px] w-[50px] h-[50px] ${theme === "light" ? "bg-white border-[#8750f7]" : "bg-[#140c1c] border-[#8750f7]"} border-2 rounded-full flex items-center justify-center transition-all duration-300 z-999 cursor-pointer hover:scale-110 shadow-[0_0_20px_rgba(135,80,247,0.3)]`}
      onClick={handleResumeToggle}
      title="تغییر رزومه"
      aria-label="تغییر رزومه"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        className="w-6 h-6 text-[#8750f7] fill-none stroke-current stroke-2"
      >
        <path
          d="M6 4h7a2 2 0 0 1 2 2v2h-5a2 2 0 0 0-2 2v5H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2Z"
        />
        <path d="M10 10h8a2 2 0 0 1 2 2v6l-3-2-3 2v-4" />
      </svg>
    </div>
  );
};

export default ResumeToggleButton;

