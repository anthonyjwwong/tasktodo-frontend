import { useReducer, useEffect } from "react";

const themeReducer = (state, action) => {
  switch (action.type) {
    case "TOGGLE_THEME":
      return { theme: state.theme === "light" ? "dark" : "light" };
    case "SET_THEME":
      return { theme: action.payload };
    default:
      return state;
  }
};

const getInitialTheme = () => {
  const savedTheme = localStorage.getItem("theme");
  return savedTheme || "light";
};

const initialState = {
  theme: getInitialTheme(),
};

export const useThemeReducer = () => {
  const [state, dispatch] = useReducer(themeReducer, initialState);

  useEffect(() => {
    localStorage.setItem("theme", state.theme);
  }, [state.theme]);

  const toggleTheme = () => {
    dispatch({ type: "TOGGLE_THEME" });
  };

  return {
    theme: state.theme,
    dispatch,
    toggleTheme,
  };
};
