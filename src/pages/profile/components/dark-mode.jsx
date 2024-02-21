import React, { useEffect, useState } from "react";
import profileIcon6 from "../../../assets/icons/profile-icon6.svg";
import "../profile.css";

const DarkMode = () => {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    // Загрузка текущей темы из localStorage при загрузке компонента
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) {
      setTheme(savedTheme);
    } else {
      // Если нет сохраненной темы, установить тему по умолчанию
      setTheme("light");
    }
  }, []);

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
    // Сохранение текущей темы в localStorage при изменении
    localStorage.setItem("theme", theme);
  }, [theme]);

  const handleThemeSwitch = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <div className="pl-6 flex items-center gap-4">
      <div>
        <img src={profileIcon6} alt="" />
      </div>
      <p className="font-medium text-lg dark:text-[#9CA3AF] cursor-pointer dark:hover:text-white text-[#242424]">
        Тунги режим
      </p>

      <div className="cl-toggle-switch">
        <label onClick={handleThemeSwitch} for="theme" className="inline-flex items-center cursor-pointer">
        <input type="checkbox" value="" class="sr-only peer"/>
        <div className="relative w-[34px] h-[14px] bg-[#F5F5F5] rounded-full">
            <span className="absolute bg-white w-[20px] h-[20px] rounded-full -top-[3px] shadow-[0_0_10px_0_rgba(0,0,0,0.2)] dark:right-0 " ></span>
        </div>
        </label>
      </div>
    </div>
  );
};

export default DarkMode;
