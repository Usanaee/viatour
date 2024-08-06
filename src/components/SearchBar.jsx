import React from "react";
import { CiSearch } from "react-icons/ci";
function SearchBar({w}) {
  return (
    <div>
      <div className={`bg-transparent border-slate-400 border gap-4 h-10 ${w == 96 ? `w-96` : `w-64`}  flex px-4 items-center justify-center rounded-full hover:shadow-md  max-sm:hidden`}>
        <span className=" cursor-pointer">
          <CiSearch />
        </span>
        <input
          type="text"
          placeholder="Search"
          className="bg-transparent flex-grow outline-none w-20 "
        />
      </div>
    </div>
  );
}

export default SearchBar;
