import React, { useEffect, useState } from "react";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList.jsx";
import { Toaster } from "react-hot-toast";
import { axiosInstance } from "./lib/axios";
import toast from "react-hot-toast";
const App = () => {
  //1. Useeffect to get the item using the getTodo route in backend
  //2. Propagate todoList with the todos.
  //3. Render.
  const [todoList, setTodoList] = useState([]);
  const [todo, setTodo] = useState({
    text: "",
    completed: false,
  });

  const fetchTodos = async () => {
    try {
      const res = await axiosInstance.get("/todos");
      setTodoList(res.data);
    } catch (error) {
      console.error("Failed to fetch todos:", error);
    }
  };

  const createNewTodo = async (data) => {
    try {
      const res = await axiosInstance.post("/todos", { text: data.text });
      toast.success("Added Todos");
      setTodo({ text: "" });
      setTodoList((prev) => [...prev, res.data]);
    } catch (error) {
      toast.error(error?.response?.data?.message || "Something went wrong");
    }
  };

  const updateCompleteTodo = async (id, completed) => {
    try {
      const res = await axiosInstance.put(`/todos/${id}`, {
        completed: !completed,
      });
      setTodoList((prev) =>
        prev.map((todo) => (todo._id === id ? res.data : todo))
      );
    } catch (error) {
      console.error("Failed to update todo", error);
    }
  };

  const deleteTodo = async (id) => {
    try {
      await axiosInstance.delete(`/todos/${id}`);
      setTodoList((prev) => prev.filter((todo) => todo._id !== id));
    } catch (error) {
      console.error("Failed to delete item", error);
    }
  };

  useEffect(() => {
    fetchTodos();
  }, []);

  console.log(todoList);

  return (
    <div>
      <div>
        <TodoForm todo={todo} setTodo={setTodo} createNewTodo={createNewTodo} />
        <TodoList
          todoList={todoList}
          updateCompleteTodo={updateCompleteTodo}
          deleteTodo={deleteTodo}
        />
      </div>

      <Toaster />
    </div>
  );
};

export default App;
