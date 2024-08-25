// components/Spreadsheet.js

import React from 'react';
import Cell from './Cell';
import useSpreadsheetStore from '../store/useSpreadsheetStore';

const Spreadsheet = () => {
  const { cells, updateCell, undo, redo } = useSpreadsheetStore((state) => ({
    cells: state.cells,
    updateCell: state.updateCell,
    undo: state.undo,
    redo: state.redo,
  }));

  return (
    <div>
      <div className="grid grid-cols-10 gap-1">
        {cells.map((value, index) => (
          <Cell
            key={index}
            index={index}
            value={value}
          />
        ))}
      </div>
      <div className="mt-4">
        <button onClick={undo} className="mr-2 p-2 bg-gray-300">Undo</button>
        <button onClick={redo} className="p-2 bg-gray-300">Redo</button>
      </div>
    </div>
  );
};

export default Spreadsheet;
