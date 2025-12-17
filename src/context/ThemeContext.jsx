"use client";

import React, {
  useContext,
  createContext,
  useEffect,
  useState,
  useTransition,
} from "react";
import { setUserModeCookie } from "@/app/actions/cookies";

const ThemeContext = createContext();

export const ThemeProvider = ({ children, initialTheme = "dark" }) => {
  const [theme, setTheme] = useState(initialTheme);
  const [, startTransition] = useTransition();

  useEffect(() => {
    setTheme(initialTheme);
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
      startTransition(() => setUserModeCookie(newTheme));
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
