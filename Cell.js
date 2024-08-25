import React from 'react';
import useSpreadsheetStore from '../store/useSpreadsheetStore';

const Cell = ({ index, value }) => {
  const updateCell= useSpreadsheetStore((state) => state.updateCell);

  const handleChange = (e) => {
    updateCell(index, e.target.value);
  };

  return (
    <input
      className="border p-2 w-full"
      value={value}
      onChange={handleChange}
    />
  );
};

export default Cell;
