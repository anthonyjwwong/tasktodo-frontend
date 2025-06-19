import { createContext, useContext } from "react";
import { useThemeReducer } from "../hooks/useThemes";

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const { theme, dispatch, toggleTheme } = useThemeReducer();

  return (
    <ThemeContext.Provider value={{ theme, dispatch, toggleTheme }}>
      <div className={theme === "dark" ? "dark" : ""}>{children}</div>
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);
