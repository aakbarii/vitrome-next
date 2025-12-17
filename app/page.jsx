import { cookies } from "next/headers";
import Home from "@/views/one/Home";
import HomeEn from "@/views/one/HomeEn";
import HomeTwoFa from "@/views/two/HomeFa";
import ResumeToggleButton from "@/components/ResumeToggleButton";
import fallbackResume from "@/data/resumeFallback.json";
import "aos/dist/aos.css";

let hasLoggedResumeError = false;

async function fetchResumeData() {
  const endpoint = process.env.NEXT_PUBLIC_RESUME_API || "https://api.myresome.ir/api/abol";

  try {
    const res = await fetch(endpoint, {
      cache: "no-store",
    });

    if (!res.ok) {
      throw new Error(`خطا در دریافت داده‌ها (status ${res.status})`);
    }

    return res.json();
  } catch (error) {
    if (!hasLoggedResumeError) {
      console.warn("خطا در دریافت داده‌ها، استفاده از داده‌ی پشتیبان.", error);
      hasLoggedResumeError = true;
    }
    return fallbackResume;
  }
}

export default async function Page() {
  const cookieStore = await cookies();
  const userLang = cookieStore.get("ulang")?.value;
  const userMode = cookieStore.get("userMode")?.value;
  const resumeTemplate = cookieStore.get("resumeTemplate")?.value || "one";
  const defaultLangCookie = cookieStore.get("defaultLang")?.value;
  const defaultModeCookie = cookieStore.get("defaultMode")?.value;

  const data = await fetchResumeData();

  const defaultLang = defaultLangCookie || data?.setting?.["def-lang"];
  const defaultMode = defaultModeCookie || (!userMode ? data?.setting?.["def-mode"] : undefined);

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
      <ResumeToggleButton resumeTemplate={resumeTemplate} />
      {getHomeComponent()}
    </>
  );
}