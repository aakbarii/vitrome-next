import { ThemeProvider } from "@/context/ThemeContext";
import SmoothScroll from "@/components/modules/SmoothScroll";
import "@/app/globals.css";
import "swiper/css";
import "animate.css";

export const metadata = {
  title: "Resume Portfolio",
  description: "Personal Resume Portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="fa" dir="rtl">
      <body>
        <SmoothScroll>
          <ThemeProvider>
            {children}
          </ThemeProvider>
        </SmoothScroll>
      </body>
    </html>
  );
}

