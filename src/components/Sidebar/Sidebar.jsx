import React from "react";
import MenuList from "./MenuList.jsx";
import RemainingTask from "./RemainingTask.jsx";

const Sidebar = () => {
  return (
    <aside
      className="w-full md:w-80 dark:bg-slate-600 p-0 md:min-h-screen"
      aria-label="Sidebar"
    >
      <div className="h-full px-5 py-2  overflow-x-auto md:overflow-y-auto bg-gray-50 dark:bg-gray-700">
        <MenuList />
        <RemainingTask />
      </div>
    </aside>
  );
};

export default Sidebar;
