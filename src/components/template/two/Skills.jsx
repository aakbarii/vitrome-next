import { useTheme } from "../../../context/ThemeContext";
import { Figma } from "@/constants/images";
import { paletteTwo } from "@/theme/paletteTwo";

const skills = [
  { name: "Laravel", percent: 95, logo: Figma },
  { name: "Figma", percent: 65, logo: Figma },
  { name: "Laravel", percent: 70, logo: Figma },
  { name: "Laravel", percent: 70, logo: Figma },
  { name: "Figma", percent: 65, logo: Figma },
  { name: "Laravel", percent: 70, logo: Figma },
  { name: "Laravel", percent: 70, logo: Figma },
  { name: "Laravel", percent: 70, logo: Figma },
];

function Skills() {
  const { theme } = useTheme();
  
  return (
    <div
      className={`py-16 px-4 md:px-20 text-center ${theme === "light" ? "bg-[#ffff]" : ""}`}
      style={theme === "light" ? undefined : { backgroundColor: paletteTwo.darkBg, color: paletteTwo.textPrimary }}
    >
      <h2 className={`text-4xl font-bold mb- ${theme === "light" ? "text-[#2a1454]" : ""}`} style={theme === "light" ? undefined : { color: paletteTwo.textPrimary }}>
        برجسته ترین <span className="text-green-500">مهارت‌ ها</span>
      </h2>
      <p className={`mb-10 text-base ${theme === "light" ? "text-[#140c1c]" : ""}`} style={theme === "light" ? undefined : { color: paletteTwo.textSecondary }}>
        با ترکیبی از تجربه و دانش، مهارت‌های ما تضمین می‌کند که پروژه‌های شما به
        بهترین نحو انجام شوند.
      </p>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
        {skills.map((skill, index) => (
          <div
            key={index}
            className={`size-[270px] px-6 rounded-2xl shadow-md transition-all ${theme === "light" ? "bg-white hover:bg-green-50" : ""}`}
            style={
              theme === "light"
                ? undefined
                : { backgroundColor: paletteTwo.surface, borderColor: paletteTwo.border }
            }
          >
            <img
              src={skill.logo}
              alt={skill.name}
              className="mx-auto size-16 mt-14"
            />
            <div className={`my-6 ${theme === "light" ? "text-[#140c1c]" : ""}`} style={theme === "light" ? undefined : { color: paletteTwo.textPrimary }}>{skill.name}</div>
            <div
              className={`w-full h-8 rounded-full overflow-hidden flex justify-end relative ${theme === "light" ? "bg-gray-200" : ""}`}
              style={theme === "light" ? undefined : { backgroundColor: paletteTwo.surface }}
            >
              <div
                className={`bg-[#56BC80] h-full rounded-full transition-all duration-500`}
                style={{ width: `${skill.percent}%` }}
              ></div>
              <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-sm text-white">
                {skill.percent}%
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Skills;
