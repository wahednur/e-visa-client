import React, { useEffect, useState } from "react";
import { IoMoon, IoSunnyOutline } from "react-icons/io5";

const Theme = () => {
  const [isDarkTheme, setIsDarkTheme] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) {
      setIsDarkTheme(savedTheme === "dark");
    }
  }, []);

  useEffect(() => {
    if (isDarkTheme) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [isDarkTheme]);

  const toggleTheme = () => setIsDarkTheme((prevTheme) => !prevTheme);

  return (
    <div>
      <button
        onClick={toggleTheme}
        className=" p-2 bg-blue-500 text-white rounded-full"
      >
        {isDarkTheme ? <IoSunnyOutline /> : <IoMoon />}
      </button>
    </div>
  );
};

export default Theme;
