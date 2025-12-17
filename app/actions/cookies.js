"use server";

import { cookies } from "next/headers";

const fifteenMinutes = 60 * 15;

export async function setUserModeCookie(mode) {
  if (!mode) return;
  const cookieStore = await cookies();
  cookieStore.set("userMode", mode, {
    maxAge: fifteenMinutes,
    path: "/",
  });
}

export async function setLanguageCookie(lang) {
  if (!lang) return;
  const cookieStore = await cookies();
  cookieStore.set("ulang", lang, {
    maxAge: fifteenMinutes,
    path: "/",
  });
}

export async function setResumeTemplateCookie(template) {
  if (!template) return;
  const cookieStore = await cookies();
  cookieStore.set("resumeTemplate", template, {
    maxAge: fifteenMinutes,
    path: "/",
  });
}

