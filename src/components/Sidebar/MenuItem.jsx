import React from "react";

const MenuItem = ({ category, isActive, onClick }) => {
  const IconComponent = category.icon;

  console.log("MenuItem rendered for:", category.name);

  const liClassName = `basis-1/2 transition-all duration-150 ease-linear mt-1 group flex justify-between gap-4 px-2 py-4 text-sm cursor-pointer rounded-md dark:text-white ${
    isActive
      ? "bg-[#3b82f6] text-white hover:bg-[#3b82f6] hover:text-white shadow-md"
      : "hover:bg-[#3b82f6] hover:text-black hover:bg-gray-200"
  }`;

  const iconClassName = `ml-4 ${
    isActive ? "text-white dark:text-white" : "text-gray-400 "
  }`;

  const spanClassName = `text-slate-600 text-md mr-7 w-6 h-6 pl-2 py-0.5 pr-0.5 rounded-full dark:bg-slate-800 dark:text-white ${
    isActive ? "bg-[#60a5fa] text-white" : "bg-white"
  }`;

  return (
    <li className={liClassName} onClick={onClick}>
      <div className="flex items-center gap-2">
        {IconComponent && <IconComponent size={20} className={iconClassName} />}
        {category.name}
      </div>
      <span className={spanClassName}>{category.count}</span>
    </li>
  );
};

export default MenuItem;
