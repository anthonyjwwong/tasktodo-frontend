import React, { useState, useEffect } from "react";
import { useTodos } from "../../context/TodoContext";

const Modal = ({
  id,
  modalMode,
  title,
  description,
  priority,
  dueDate,
  category,
  taskId,
}) => {
  const { addTodo, updateTodo } = useTodos();

  const [formData, setFormData] = useState({
    title: "",
    description: "",
    category: "work",
    priority: "medium",
    completed: false,
    dueDate: "",
  });

  useEffect(() => {
    if (modalMode === "edit") {
      setFormData({
        title: title || "",
        description: description || "",
        category: category || "work",
        priority: priority || "medium",
        completed: false,
        dueDate: dueDate?.slice(0, 10) || "",
      });
    } else {
      // Reset form for add mode
      setFormData({
        title: "",
        description: "",
        category: "work",
        priority: "medium",
        completed: false,
        dueDate: "",
      });
    }
  }, [modalMode, title, description, priority, dueDate, category]);

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (modalMode === "edit") {
      updateTodo(taskId, formData); // Update existing task
    } else {
      addTodo(formData); // Create new task
    }

    // Clear form for next use
    setFormData({
      title: "",
      description: "",
      category: "work",
      priority: "medium",
      completed: false,
      dueDate: "",
    });

    document.getElementById(id).close(); // Close modal after submit
  };

  return (
    <dialog id={id} className="modal">
      <div className="modal-box">
        <h3 className="font-bold text-lg mb-7 ">+ Add New Task</h3>

        <div>
          <form onSubmit={handleSubmit}>
            <div className="flex flex-col my-5">
              <label htmlFor="title" className="text-md font-medium">
                Title *
              </label>
              <input
                type="text"
                id="title"
                name="title"
                value={formData.title}
                onChange={handleInputChange}
                placeholder="What needs to be done?"
                required
                className="w-full mt-2 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>

            <div className="flex flex-col mb-3 my-5">
              <label htmlFor="description" className="text-md font-medium">
                Description
              </label>
              <textarea
                id="description"
                name="description"
                rows={3}
                value={formData.description}
                onChange={handleInputChange}
                placeholder="Add more details regarding the task..."
                className="mt-2 w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
              />
            </div>

            <div className="flex flex-row my-5 gap-3">
              <div className="flex flex-col w-1/2">
                <label htmlFor="category" className="text-md font-medium">
                  Category
                </label>
                <select
                  id="category"
                  name="category"
                  value={formData.category}
                  onChange={handleInputChange}
                  className="mt-2 px-1 py-2 border border-gray-300 rounded-md  focus:ring-blue-500 focus:border-transparent resize-none"
                >
                  <option value="work">Work</option>
                  <option value="personal">Personal</option>
                  <option value="shopping">Shopping</option>
                  <option value="goals">Goals</option>
                </select>
              </div>
              <div className="flex flex-col w-1/2">
                <label htmlFor="dueDate" className="text-md font-medium">
                  Due Date
                </label>
                <input
                  type="date"
                  id="dueDate"
                  name="dueDate"
                  value={formData.dueDate}
                  onChange={handleInputChange}
                  className="mt-2 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
            </div>

            <div className="flex flex-col">
              <label htmlFor="priority" className="text-md font-medium">
                Priority
              </label>
              <select
                id="priority"
                name="priority"
                value={formData.priority}
                onChange={handleInputChange}
                className="mt-2 px-1 py-2 border border-gray-300 rounded-md  focus:ring-blue-500 focus:border-transparent resize-none"
              >
                <option value="low">Low</option>
                <option value="medium">Medium</option>
                <option value="high">High</option>
              </select>
            </div>

            {/* if there is a button in form, it will close the modal */}
            <div className="float-right mt-4">
              {" "}
              <button
                className="btn"
                type="button"
                onClick={() => document.getElementById(id).close()}
              >
                Cancel
              </button>
              <button
                className="btn w-36 ml-3 bg-blue-500 text-white"
                type="submit"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </dialog>
  );
};

export default Modal;
