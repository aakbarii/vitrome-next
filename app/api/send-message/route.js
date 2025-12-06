import { NextResponse } from "next/server";
import { sendMessage } from "@/services/messageService";

/**
 * POST handler for /api/send-message
 * ارسال پیام تماس به API خارجی
 */
export async function POST(request) {
  try {
    const body = await request.json();
    const response = await sendMessage(body);
    return NextResponse.json(
      { success: true, data: response.data },
      { status: 200 }
    );
  } catch (error) {
    console.error("خطا در ارسال پیام:", error);
    return NextResponse.json(
      { error: "خطا در ارسال پیام", details: error.message },
      { status: 500 }
    );
  }
}


