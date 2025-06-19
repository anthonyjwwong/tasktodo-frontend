import { useEffect, useReducer } from "react";
import { Briefcase, Home, ShoppingCart, Target } from "lucide-react";
import { axiosInstance } from "../lib/axios";

const defaultCategories = [
  { id: "work", name: "Work", icon: Briefcase },
  { id: "personal", name: "Personal", icon: Home },
  { id: "shopping", name: "Shopping", icon: ShoppingCart },
  { id: "goals", name: "Goals", icon: Target },
];

const initialState = {
  categories: defaultCategories,
  selectedCategory: "work",
  isLoading: false,
  isError: false,
  counts: {},
};

const appReducer = (state, action) => {
  switch (action.type) {
    case "SET_CATEGORY":
      return { ...state, selectedCategory: action.payload };
    case "SET_LOADING":
      return { ...state, isLoading: action.payload };
    case "SET_ERROR":
      return { ...state, isError: action.payload };
    case "SET_COUNTS":
      return { ...state, counts: action.payload };
    default:
      return state;
  }
};

export const useAppReducer = () => {
  const [state, dispatch] = useReducer(appReducer, initialState);

  const fetchStats = async () => {
    try {
      dispatch({ type: "SET_LOADING", payload: true });
      const stats_res = await axiosInstance("todos/stats");
      dispatch({ type: "SET_COUNTS", payload: stats_res.data });
    } catch (error) {
      dispatch({ type: "SET_ERROR", payload: true });
    } finally {
      dispatch({ type: "SET_LOADING", payload: false });
    }
  };

  useEffect(() => {
    fetchStats();
  }, []);

  const setCategory = (category) => {
    dispatch({ type: "SET_CATEGORY", payload: category });
    console.log(category);
  };

  const categoriesWithCount = state.categories.map((category) => ({
    ...category,
    count: state.counts.byCategory?.[category.id] || 0,
  }));

  return {
    selectedCategory: state.selectedCategory,
    categories: categoriesWithCount,
    counts: state.counts,
    isLoading: state.isLoading,
    isError: state.isError,
    setCategory,
    refetchStats: fetchStats,
  };
};
