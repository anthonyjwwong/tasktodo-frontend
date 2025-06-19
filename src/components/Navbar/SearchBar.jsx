import React from "react";

const SearchBar = () => {
  return (
    <input
      className="w-[99%] md:w-64 ml-1.5 border-gray-400 border-0.5 bg-white rounded-md py-1 px-3 outline-none placeholder-gray-400 text-black text-sm md:text-base dark:bg-gray-600 dark:placeolder-gray-400 dark:text-white"
      placeholder="Search task..."
    />
  );
};

export default SearchBar;
