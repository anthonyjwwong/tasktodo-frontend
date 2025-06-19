import React from "react";
import { useApp } from "../../context/AppContext";

function RemainingTask() {
  const { counts } = useApp();

  return (
    <div className="text-sm text-center py-3 border-1 border-gray-300 rounded-xl bg-white dark:bg-slate-600 ">
      <span className="text-[#60a5fa] text-2xl font-bold">{counts.total}</span>
      <p className="text-gray-400 dark:text-white">Tasks Remaining</p>
    </div>
  );
}

export default RemainingTask;
