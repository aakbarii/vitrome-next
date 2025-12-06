import { NextResponse } from "next/server";
import { getResumeData } from "@/services/resumeService";

export async function GET() {
  try {
    const data = await getResumeData();
    return NextResponse.json(data, { status: 200 });
  } catch (error) {
    console.error("خطا در دریافت اطلاعات رزومه:", error);
    return NextResponse.json(
      { error: "خطا در دریافت اطلاعات رزومه" },
      { status: 500 }
    );
  }
}


