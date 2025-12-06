import { apiClient } from "./api.js";

export async function getResumeData() {
  try {
    const response = await apiClient.get("/abol");
    return response.data;
  } catch (error) {
    console.error("خطا در دریافت اطلاعات رزومه:", error);
    throw error;
  }
}