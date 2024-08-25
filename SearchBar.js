import React, { useState } from 'react';
import useSpreadsheetStore from '../store/useSpreadsheetStore';

const SearchBar = () => {
  const [query, setQuery] = useState('');
  const { cells } = useSpreadsheetStore();

  const handleSearch = () => {
    const filteredCells = cells.filter((cell) => cell.includes(query));
    console.log(filteredCells); // Implement a UI to display filtered cells
  };

  return (
    <div className="mb-4">
      <input
        type="text"
        className="border p-2"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <button onClick={handleSearch} className="bg-gray-500 text-white px-4 py-2">
        Search
      </button>
    </div>
  );
};

export default SearchBar;

