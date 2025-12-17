import { cookies } from "next/headers";
import { ThemeProvider } from "@/context/ThemeContext";
import SmoothScroll from "@/components/modules/SmoothScroll";
import "@/app/globals.css";
import "swiper/css";
import "animate.css";

export const metadata = {
  title: "Resume Portfolio",
  description: "Personal Resume Portfolio",
};

export default async function RootLayout({ children }) {
  const cookieStore = await cookies();
  const userMode = cookieStore.get("userMode")?.value;
  const defaultMode = cookieStore.get("defaultMode")?.value;
  const initialTheme = userMode || defaultMode || "dark";

  return (
    <html lang="fa" dir="rtl">
      <body>
        <SmoothScroll>
          <div>
            <ThemeProvider initialTheme={initialTheme}>
              {children}
            </ThemeProvider>
          </div>
        </SmoothScroll>
      </body>
    </html>
  );
}

