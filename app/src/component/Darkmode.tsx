"use client";
import { useState, useEffect } from "react";
import { BiSolidSun, BiSolidMoon } from "react-icons/bi";

export const Darkmode = () => {
  const [theme, setTheme] = useState(
    typeof window !== "undefined"
      ? localStorage.getItem("theme") || "light"
      : "light"
  );

  const toggleTheme = () => setTheme(theme === "dark" ? "light" : "dark");

  useEffect(() => {
    localStorage.setItem("theme", theme);
    document.documentElement.classList.toggle("dark", theme === "dark");
  }, [theme]);

  return (
    <>
      {theme === "dark" ? (
        <BiSolidSun onClick={toggleTheme} className="text-2xl" />
      ) : (
        <BiSolidMoon onClick={toggleTheme} className="text-2xl" />
      )}
    </>
  );
};
