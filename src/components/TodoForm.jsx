import React from "react";
import { axiosInstance } from "../lib/axios";
import toast from "react-hot-toast";

const TodoForm = ({ todo, setTodo, createNewTodo }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    if (todo.text.trim() === "") {
      toast.error("Todo cannot be empty");
      return;
    }
    createNewTodo(todo);
  };

  return (
    <div className="flex justify-center mt-24 max-w-xl w-full px-4 mx-auto py-7 bg-[#E6E1F9] rounded-tr-2xl rounded-tl-2xl">
      <form
        className="bg-white p-6 rounded-2xl shadow-md w-full max-w-lg"
        onSubmit={handleSubmit}
      >
        <input
          type="text"
          className="w-full border border-gray-300 p-2 rounded mb-4"
          placeholder="todos.."
          value={todo.text}
          onChange={(e) => setTodo({ ...todo, text: e.target.value })}
        />
        <button
          type="submit"
          className="w-[40%] block bg-[rgb(239,151,131)] mx-auto text-white py-2 rounded hover:bg-[rgb(239,151,131)] transition font-semibold cursor-pointer shadow-lg"
        >
          Add
        </button>
      </form>
    </div>
  );
};

export default TodoForm;
