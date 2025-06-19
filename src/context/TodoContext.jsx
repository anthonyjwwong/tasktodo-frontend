import { createContext, useContext, useMemo } from "react";
import { useTodosReducer } from "../hooks/useTodos";

const TodoContext = createContext();

export const TodoProvider = ({ children }) => {
  const { todos, dispatch, setTodos, updateTodo, addTodo, deleteTodo } =
    useTodosReducer();

  // Memoize the context value to prevent unnecessary re-renders
  const contextValue = useMemo(
    () => ({
      todos,
      dispatch,
      setTodos,
      updateTodo,
      addTodo,
      deleteTodo,
    }),
    [todos, dispatch, setTodos, updateTodo, addTodo, deleteTodo]
  );

  return (
    <TodoContext.Provider value={contextValue}>{children}</TodoContext.Provider>
  );
};

export const useTodos = () => useContext(TodoContext);
