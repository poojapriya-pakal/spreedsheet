// store/useSpreadsheetStore.js

import create from 'zustand';

const useSpreadsheetStore = create((set) => ({
  cells: Array(1000).fill(""),
  history: [],
  future: [],
  searchQuery: "",
  filteredCells: Array(1000).fill(""),

  // Method to update cell and record history
  updateCell: (index, value) => set((state) => {
    const newCells = [...state.cells];
    newCells[index] = value;
    
    // Save current state to history before making a change
    const newHistory = [...state.history, state.cells];
    return { 
      cells: newCells,
      filteredCells: applySearchFilter(newCells, state.searchQuery),
      history: newHistory,
      future: []  // Clear future stack on new change
    };
  }),

  // Search and filter
  setSearchQuery: (query) => set((state) => {
    const filtered = applySearchFilter(state.cells, query);
    return { searchQuery: query, filteredCells: filtered };
  }),

  undo: () => set((state) => {
    if (state.history.length === 0) return state;
    const previousCells = state.history[state.history.length - 1];
    const newHistory = state.history.slice(0, -1);
    return { 
      cells: previousCells,
      filteredCells: applySearchFilter(previousCells, state.searchQuery),
      history: newHistory,
      future: [state.cells, ...state.future] 
    };
  }),

  redo: () => set((state) => {
    if (state.future.length === 0) return state;
    const nextCells = state.future[0];
    const newFuture = state.future.slice(1);
    return { 
      cells: nextCells,
      filteredCells: applySearchFilter(nextCells, state.searchQuery),
      history: [...state.history, state.cells],
      future: newFuture
    };
  }),
}));

// Utility function to apply search filter
const applySearchFilter = (cells, query) => {
  return cells.map(cell => cell.includes(query) ? cell : "");
};

export default useSpreadsheetStore;
