// components/Search.js

import React from 'react';
import useSpreadsheetStore from '../store/useSpreadsheetStore';

const Search = () => {
  const { searchQuery, setSearchQuery } = useSpreadsheetStore((state) => ({
    searchQuery: state.searchQuery,
    setSearchQuery: state.setSearchQuery,
  }));

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  return (
    <div className="mb-4">
      <input
        type="text"
        value={searchQuery}
        onChange={handleSearchChange}
        placeholder="Search..."
        className="border p-2 w-full"
      />
    </div>
  );
};

export default Search;
