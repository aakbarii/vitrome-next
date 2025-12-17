import { useTheme } from "../../../context/ThemeContext";
import { Group2017 as ExperienceImg } from "@/constants/images";

const ExperienceBox = () => {
  const { theme } = useTheme();
  
  return (
    <div className={`h-40 mt-8 ${theme === "light" ? "bg-[#56BC80]" : "bg-[#56BC80]"} rounded-2xl px-10 flex items-center justify-between shadow-md text-white`}>
      <div className="flex items-center gap-7">
        <img src={ExperienceImg} alt="آیکون" />
        <span className="text-[28px] font-bold">سوابق کاری</span>
      </div>

      <div className="w-px h-12 bg-white/30 mx-4"></div>

      <div className="flex gap-24">
        <div className="flex items-center gap-4">
          <div className="text-[44px] font-bold">36</div>
          <div className="flex flex-col items-center text-base">
            <span>سابقه</span>
            <span>کاری</span>
          </div>
        </div>

        <div className="flex items-center gap-4">
          <div className="text-[44px] font-bold">05</div>
          <div className="flex flex-col items-center text-base">
            <span>تکمیل شده</span>
            <span>پروژه‌های</span>
          </div>
        </div>

        <div className="flex items-center gap-4">
          <div className="text-[44px] font-bold">K4.3</div>
          <div className="flex flex-col items-center text-base">
            <span>میزان</span>
            <span>رضایت</span>
          </div>
        </div>

        <div className="flex items-center gap-4">
          <div className="text-[44px] font-bold">42</div>
          <div className="flex flex-col items-center text-base">
            <span>سال‌های</span>
            <span>تجربیات</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExperienceBox;
