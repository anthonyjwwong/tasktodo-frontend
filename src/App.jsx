import React, { useEffect, useState } from "react";
import { Toaster } from "react-hot-toast";

import Header from "./components/Navbar/Header.jsx";
import Sidebar from "./components/Sidebar/Sidebar.jsx";
import TaskBoard from "./components/Task/TaskBoard.jsx";
const App = () => {
  return (
    <div>
      <Header />
      <div className="flex flex-col md:flex-row">
        <Sidebar />
        <main className="flex-1 p-4 bg-gray-100 dark:bg-slate-800">
          <TaskBoard />
        </main>
      </div>

      <Toaster />
    </div>
  );
};

export default App;
