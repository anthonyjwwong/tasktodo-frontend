import React from "react";
import { useTodos } from "../../context/TodoContext";
import { Pencil, Trash } from "lucide-react";
import toast from "react-hot-toast";
import Modal from "./Modal.jsx";
const TaskItem = ({
  title,
  description,
  priority,
  dueDate,
  taskId,
  completed,
  onEdit,
  category,
}) => {
  const dateSlice = dueDate?.slice(0, 10) || "No Due Date";

  const { updateTodo, deleteTodo } = useTodos();

  const handleDelete = async () => {
    try {
      const success = await deleteTodo(taskId);
      if (success) {
        toast.success("Task deleted successfully!");
      } else {
        toast.error("Failed to delete task. Please try again.");
      }
    } catch (error) {
      toast.error("Failed to delete task. Please try again.");
    }
  };
  //Covers both num and string priority.
  const priorityStyles = {
    high: "rounded-xl px-1 text-xs font-bold py-1 bg-red-200 text-red-600 md:px-1.5",
    3: "rounded-xl px-1 text-xs font-bold py-1 bg-red-200 text-red-600 md:px-1.5",
    medium:
      "rounded-xl px-1 text-xs font-bold py-1 bg-yellow-200 text-yellow-600 md:px-1.5",
    2: "rounded-xl px-1 text-xs font-bold py-1 bg-yellow-200 text-yellow-600 md:px-1.5",
    low: "rounded-xl px-1 text-xs py-1 font-bold bg-green-200 text-green-600 md:px-1.5",
    1: "rounded-xl px-1 text-xs py-1 font-bold bg-green-200 text-green-600 md:px-1.5",
  };
  const prioToString = {
    1: "low",
    2: "medium",
    3: "high",
  };

  const handleEdit = () => {
    onEdit({
      title,
      description,
      priority,
      dueDate,
      taskId,
      category,
    });
  };

  const getPriorityStyle = (priority) => {
    return priorityStyles[priority] || priorityStyles.default;
  };
  return (
    <li
      key={taskId}
      className="mt-4 border-0.5 border-gray-300 shadow-md p-4 rounded-md bg-white transform hover:translate-y-[-2px] transition-transform duration-150 ease-in-out dark:bg-slate-700"
    >
      <div className="flex justify-between">
        {/*Left side checkbox and title */}
        <div className="flex gap-4">
          <input
            type="checkbox"
            className="md:checkbox checkbox-md dark:text-white dark:border-white"
            checked={completed}
            onChange={() => updateTodo(taskId, { completed: !completed })}
          />
          <h4
            className={`font-bold text-sm md:text-base dark:text-white ${
              completed ? "line-through text-gray-400" : ""
            }`}
          >
            {title}
          </h4>
        </div>
        {/*right side - priority, edit delete */}
        <div className="flex gap-3 items-start">
          <span className={getPriorityStyle(priority)}>
            {typeof priority === "number" ? prioToString[priority] : priority}
          </span>
          <p onClick={handleEdit} className="dark:text-white cursor-pointer">
            <Pencil size={20} />
          </p>

          <p onClick={handleDelete} className="dark:text-white cursor-pointer ">
            <Trash size={20} />
          </p>
        </div>
      </div>
      <p className="py-4 pl-7 text-sm text-gray-600 dark:text-white ">
        {description || "No Description"}
      </p>
      <hr className="h-px  bg-gray-200 border-0 dark:bg-gray-700 dark:text-white" />
      <p className="pl-7 pt-3 text-gray-500 text-sm dark:text-white">
        {dateSlice}
      </p>
    </li>
  );
};

export default TaskItem;
