import React, { useState } from "react";
import iconSearch from "../assets/icon-search.svg";

const SearchBar = ({ onSearch }) => {
  const [input, setInput] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch(input);
  };

  return (
    <div className="flex justify-center mb-6">
      {/* Adicionado flex e items-center no form para unir os elementos */}
      <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row w-full max-w-2xl mx-auto">
        <div className="relative flex-1">
          <img src={iconSearch} alt="Search" className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 " />
          <input
            className="w-full text-white bg-[#25253f] px-4 py-3 pl-10 rounded-lg sm:rounded-r-none outline-none"
            type="text"
            placeholder="Search for a place..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
        </div>

        <button
          className="w-full sm:w-auto bg-[#4657d9] text-white px-6 py-3 rounded-lg sm:rounded-l-none"
          type="submit"
        >
          Search
        </button>
      </form>
    </div>
  );
};

export default SearchBar;
