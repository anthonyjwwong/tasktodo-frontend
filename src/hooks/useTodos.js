import { useReducer } from "react";
import { axiosInstance } from "../lib/axios";
import { useApp } from "../context/AppContext.jsx";

const todoReducer = (state, action) => {
  switch (action.type) {
    case "SET_TODO":
      return action.payload;
    case "UPDATE_TODO":
      return state.map((todo) => {
        return todo._id === action.payload._id ? action.payload : todo;
      });
    case "ADD_TODO":
      return [...state, action.payload];
    case "DELETE_TODO":
      return state.filter((todo) => todo._id !== action.payload); // Filter out deleted todo
    default:
      return state;
  }
};

export const useTodosReducer = () => {
  const { refetchStats } = useApp();
  const [todos, dispatch] = useReducer(todoReducer, []);

  const addTodo = async (newTodo) => {
    try {
      const res = await axiosInstance.post("todos", newTodo);
      dispatch({ type: "ADD_TODO", payload: res.data });
      refetchStats();
    } catch (error) {
      console.log("Fail to add todo:", error);
    }
  };

  const deleteTodo = async (todoId) => {
    try {
      await axiosInstance.delete(`todos/${todoId}`);
      dispatch({ type: "DELETE_TODO", payload: todoId });
      refetchStats();
      return true;
    } catch (error) {
      console.log("Failed to delete todo:", error);
      return false;
    }
  };

  const updateTodo = async (id, updatedFields) => {
    try {
      const currentTodo = todos.find((todo) => todo._id === id);
      const updatedTodo = { ...currentTodo, ...updatedFields };

      dispatch({ type: "UPDATE_TODO", payload: updatedTodo });

      const res = await axiosInstance.put(`todos/${id}`, updatedFields);

      dispatch({ type: "UPDATE_TODO", payload: res.data });
      console.log("todos", todos);
    } catch (error) {
      console.log(error);
    }
  };

  const setTodos = async () => {
    try {
      const res = await axiosInstance.get("todos");
      dispatch({ type: "SET_TODO", payload: res.data });
    } catch (error) {
      console.log("Failed to load todos:", error);
    }
  };

  return { todos, dispatch, setTodos, updateTodo, addTodo, deleteTodo };
};
