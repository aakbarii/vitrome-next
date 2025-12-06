"use client";

import React, { useContext, createContext, useEffect, useState } from "react";
import Cookies from "js-cookie";

const ThemeContext = createContext();

export const ThemeProvider = ({ children, initialTheme = "dark" }) => {
  const [theme, setTheme] = useState(initialTheme);

  useEffect(() => {
    // Only access cookies on client side
    if (typeof window !== "undefined") {
      const cookieUserMode = Cookies.get("userMode");
      const cookieDefaultMode = Cookies.get("defaultMode");
      const initialThemeValue = cookieUserMode || cookieDefaultMode || initialTheme;
      setTheme(initialThemeValue);
    }
  }, [initialTheme]);

  useEffect(() => {
    if (typeof window !== "undefined") {
      document.body.classList.remove("dark-mode", "light-mode");
      document.body.classList.add(`${theme}-mode`);
    }
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => {
      const newTheme = prev === "dark" ? "light" : "dark";
      const expires = new Date(new Date().getTime() + 15 * 60 * 1000);
      Cookies.set("userMode", newTheme, { expires });
      return newTheme;
    });
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);
