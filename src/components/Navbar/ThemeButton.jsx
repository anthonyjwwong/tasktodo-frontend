import React from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "../../context/ThemeContext";
const ThemeButton = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      type="button"
      className="border-1 py-1 px-3 rounded-md cursor-pointer text-gray-500 border-slate-500 dark:text-white"
    >
      {theme === "light" ? <Moon /> : <Sun />}
    </button>
  );
};

export default ThemeButton;
