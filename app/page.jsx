"use client";

import { useEffect, useState } from "react";
import Cookies from "js-cookie";
import Home from "@/pages/one/Home";
import HomeEn from "@/pages/one/HomeEn";
import HomeTwoFa from "@/pages/two/HomeFa";
import ResumeToggleButton from "@/components/ResumeToggleButton";
import "aos/dist/aos.css";

export default function Page() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch("https://api.myresome.ir/api/abol");
        if (!res.ok) {
          throw new Error("خطا در دریافت داده‌ها");
        }
        const data = await res.json();
        setData(data);

        Cookies.set("defaultLang", data.setting["def-lang"], {
          expires: 7,
        });

        if (!Cookies.get("userMode")) {
          Cookies.set("defaultMode", data.setting["def-mode"], {
            expires: 7,
          });
        }
      } catch (error) {
        console.error("خطا در دریافت داده‌ها:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#8750f7] mx-auto"></div>
          <p className="mt-4 text-[#8750f7]">در حال بارگذاری...</p>
        </div>
      </div>
    );
  }

  const defaultLang = Cookies.get("defaultLang");
  const userLang = Cookies.get("ulang");
  const defaultMode = Cookies.get("defaultMode");
  const resumeTemplate = Cookies.get("resumeTemplate") || "one";

  const getHomeComponent = () => {
    if (resumeTemplate === "two") {
      return <HomeTwoFa />;
    }

    if (userLang) {
      return userLang == "fa" ? (
        <Home darkStatus={defaultMode} data={data?.fa} />
      ) : (
        <HomeEn darkStatus={defaultMode} data={data?.en} />
      );
    }
    return defaultLang == "en" ? (
      <HomeEn darkStatus={defaultMode} data={data?.en} />
    ) : (
      <Home darkStatus={defaultMode} data={data?.fa} />
    );
  };

  return (
    <>
      <ResumeToggleButton />
      {getHomeComponent()}
    </>
  );
}