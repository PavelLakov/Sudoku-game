import React from "react";

const Controls = ({ handleCheck, handleReset, handleNewPuzzle }) => {
  return (
    <div style={{ marginTop: 16 }}>
      <button onClick={handleCheck} style={{ marginRight: 8 }}>
        Check
      </button>
      <button onClick={handleReset} style={{ marginRight: 8 }}>
        Reset
      </button>
      <button onClick={handleNewPuzzle}>New Puzzle</button>
    </div>
  );
};

export default Controls;