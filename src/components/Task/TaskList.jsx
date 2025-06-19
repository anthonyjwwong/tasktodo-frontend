import React, { useEffect, useMemo } from "react";
import { useTodos } from "../../context/TodoContext.jsx";
import { useApp } from "../../context/AppContext.jsx";
import TaskItem from "./TaskItem.jsx";
const TaskList = ({ onEdit }) => {
  const { setTodos, todos } = useTodos();
  const { selectedCategory } = useApp();
  useEffect(() => {
    setTodos();
  }, []);

  // Memoize the filtered results to prevent unnecessary recalculations
  const currentCategory = useMemo(() => {
    return todos.filter((todo) => todo.category.includes(selectedCategory));
  }, [todos, selectedCategory]);

  console.log(currentCategory);

  return (
    <ul className="w-full">
      {currentCategory.map((category) => {
        return (
          <TaskItem
            key={category._id}
            taskId={category._id}
            title={category.title}
            description={category.description}
            priority={category.priority}
            dueDate={category.dueDate}
            completed={category.completed}
            category={category.category}
            onEdit={onEdit}
          />
        );
      })}
    </ul>
  );
};

export default TaskList;
