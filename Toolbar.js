import React from 'react';
import useSpreadsheetStore from '../store/useSpreadsheetStore';

const Toolbar = () => {
  const { undo, redo } = useSpreadsheetStore();
  return (
    <div className="flex space-x-4 mb-4">
      <button onClick={undo} className="bg-blue-500 text-white px-4 py-2">
        Undo
      </button>
      <button onClick={redo} className="bg-green-500 text-white px-4 py-2">
        Redo
      </button>
    </div>
  );
};

export default Toolbar;
