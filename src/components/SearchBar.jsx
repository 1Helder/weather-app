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
      <form onSubmit={handleSubmit} className="flex items-center">
        <div className="relative">
          <img src={iconSearch} alt="Search" className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 " />
          <input
            className="text-white w-96 bg-[#25253f] px-4 py-2 pl-9 rounded-l-lg outline-none"
            type="text"
            placeholder="Search for a place..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
        </div>

        <button
          className="text-white bg-[#4657d9] px-4 py-2 rounded-r-lg"
          type="submit"
        >
          Search
        </button>
      </form>
    </div>
  );
};

export default SearchBar;
