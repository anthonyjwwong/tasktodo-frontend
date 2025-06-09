import React from "react";
import { FaRegTrashAlt } from "react-icons/fa";

const TodoItem = ({ id, title, completed, updateCompleteTodo, deleteTodo }) => {
  //Logic 1 = onClick = update the completed in the button, and strike through for text.

  const handleClick = () => {
    updateCompleteTodo(id, completed);
  };
  //Logic 2 - Trash button deletes the item
  const handleDelete = async () => {
    deleteTodo(id);
  };

  return (
    <li key={id} className="flex items-center justify-between gap-4 p-2">
      <p className={completed ? "flex-1 line-through" : "flex-1"}>{title}</p>
      <button
        onClick={handleClick}
        className="text-sm text-white bg-green-600 px-3 py-1 rounded min-w-[100px] cursor-pointer"
      >
        {completed ? "Completed" : "Not Completed"}
      </button>
      <FaRegTrashAlt
        onClick={handleDelete}
        className="text-red-500 cursor-pointer"
      />
    </li>
  );
};

export default TodoItem;
