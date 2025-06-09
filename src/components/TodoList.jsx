import React from "react";
import TodoItem from "./TodoItem";
const TodoList = ({ todoList, updateCompleteTodo, deleteTodo }) => {
  return (
    <div className="flex justify-center max-w-xl w-full px-4 mx-auto py-7 bg-[#FAF9FD] rounded-tr-2xl rounded-tl-2xl">
      <ul className="bg-white p-6 rounded-2xl shadow-md w-full max-w-lg">
        {todoList.map((todo) => {
          return (
            <TodoItem
              id={todo._id}
              title={todo.text}
              completed={todo.completed}
              updateCompleteTodo={updateCompleteTodo}
              deleteTodo={deleteTodo}
            />
          );
        })}
      </ul>
    </div>
  );
};

export default TodoList;
