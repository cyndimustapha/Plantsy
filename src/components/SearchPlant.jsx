// SearchPlant.js
import React from "react";

function SearchPlant({ searchInput, setSearchInput }) {
  return (
    <div>
      <h2 className="font-bold text-2xl">Search Plants:</h2>
      <input
        type="text"
        placeholder="Type a name to search"
        className="border-b-2 border-gray-600 outline-none focus:border-green-500 w-full mb-4"
        value={searchInput}
        onChange={(e) => setSearchInput(e.target.value)}
      />
    </div>
  );
}

export default SearchPlant;