import React from "react";
import searchIcon from "../../assets/Component32.svg";
import filterIcon from "../../assets/Component 39.svg";

const SearchAndFilter = () => {
  return (
    <div className="flex justify-between items-center h-[80px] bg-white p-4 rounded-[10px] shadow-md mb-6">
      <img src={searchIcon} alt="" className="bg-white" />
      <input
        type="text"
        placeholder="Search here..."
        className="flex-1 border-none bg-white"
      />
      <button className="flex ml-4 bg-white p-2 rounded-md ">
        <img src={filterIcon} alt="" className="bg-white" /> Filters
      </button>
    </div>
  );
};

export default SearchAndFilter;

// <div className="bg-gray-500 h-[80px] w-[620px] flex items-center justify-stretch rounded-lg">
//   <img src={searchIcon} alt="" className="pl-7" />
//   <input type="text" placeholder="Search here..." />
//   <img src={filterIcon} alt="" />
//   <span>filter</span>
// </div>
