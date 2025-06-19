import React from "react";
import SearchBar from "./SearchBar";
import ThemeButton from "./ThemeButton";

const Header = () => {
  return (
    <header className="bg-gradient-to-r from-[#f1f5f9] to-[#cbd5e1] dark:bg-gradient-to-r dark:from-[#0f172a] dark:to-[#334155] text-white p-4">
      {/*Main desktop header row: Logo + searchbar + Theme button*/}
      <div className="flex justify-between items-center mb-3 md:mb-0">
        <div className="flex items-center gap-2">
          <h1 className="px-4 text-2xl text-slate-800 dark:text-white font-bold">
            TASK MASTER
          </h1>
        </div>

        <div className="flex gap-3 md:gap-4">
          <div className="hidden md:block">
            <SearchBar />
          </div>
          <ThemeButton />
        </div>
      </div>
      {/* Mobile search bar, show below row of logo*/}
      <div className="md:hidden">
        <SearchBar />
      </div>
    </header>
  );
};

export default Header;
