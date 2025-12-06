import { apiClient } from "./api.js";

/**
 * ارسال پیام تماس
 * @param {Object} formData - داده‌های فرم تماس
 * @returns {Promise} پاسخ API
 */
export async function sendMessage(formData) {
  try {
    const response = await apiClient.post("/SendMassage", formData);
    return response;
  } catch (error) {
    console.error("خطا در ارسال پیام:", error);
    throw error;
  }
}


