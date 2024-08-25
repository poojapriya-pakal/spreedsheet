import React from 'react';
import Cell from './Cell';
import useSpreadsheetStore from '../store/useSpreadsheetStore';

const Grid = () => {
  const { cells } = useSpreadsheetStore();
  return (
    <div className="grid grid-cols-10 gap-1 p-4">
      {cells.map((cell, index) => (
        <Cell key={index} index={index} value={cell} />
      ))}
    </div>
  );
};

export default Grid;
