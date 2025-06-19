import React, { useState } from "react";
import TaskList from "./TaskList.jsx";
import Modal from "./Modal.jsx";
import { useApp } from "../../context/AppContext.jsx";
const TaskBoard = () => {
  const { counts } = useApp();

  const [modalState, setModalState] = useState({
    mode: "add",
    taskData: null,
  });

  const openAddModal = () => {
    setModalState({
      mode: "add",
      taskData: null,
    });
    document.getElementById("task_modal").showModal();
  };

  const openEditModal = (taskData) => {
    setModalState({
      mode: "edit",
      taskData,
    });
    document.getElementById("task_modal").showModal();
  };

  const closeModal = () => {
    setModalState({
      mode: "add",
      taskData: null,
    });
  };

  console.log(counts);
  return (
    <div className="md:px-8">
      <div className="flex justify-between">
        <h1 className="text-3xl font-bold dark:text-white">Work Task</h1>
        <button
          type="button"
          onClick={openAddModal}
          className="bg-[#3b82f6] text-white px-5 py-2 font-bold rounded-md shadow-md cursor-pointer transform hover:translate-y-[-2px] transition-transform duration-150 ease-in-out "
        >
          + Add Task
        </button>
        <Modal
          id="task_modal"
          modalMode={modalState.mode}
          {...modalState.taskData} // Spread task data for edit mode
        />
      </div>
      <div className="py-3 text-gray-400 dark:text-white">
        4 total 1Completed 1high priority 1 overude
      </div>
      <TaskList onEdit={openEditModal} />
    </div>
  );
};

export default TaskBoard;
