import { createContext, useContext } from "react";
import { useAppReducer } from "../hooks/useApp";

const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const { selectedCategory, categories, counts, setCategory, refetchStats } =
    useAppReducer();

  return (
    <AppContext.Provider
      value={{
        selectedCategory,
        categories,
        counts,
        setCategory,
        refetchStats,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useApp = () => useContext(AppContext);
