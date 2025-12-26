import "./App.css";
import { useEffect, useState } from "react";
import Grid from "../components/Grid";
import Controls from "../components/Controls";
import { fetchPuzzle } from "./fetch-puzzle";

function App() {
  const empty = Array(9)
    .fill(null)
    .map(() => Array(9).fill(null));

  const [board, setBoard] = useState(empty);
  const [puzzle, setPuzzle] = useState(empty);
  const [solution, setSolution] = useState(empty);

  const [selected, setSelected] = useState(null);
  const [status, setStatus] = useState("");
  const [error, setError] = useState("");
  const [greenCount, setGreenCount] = useState(0);

  useEffect(() => {
    fetchPuzzle({
      setError,
      setStatus,
      setPuzzle,
      setSolution,
      setBoard,
      setSelected,
      setGreenCount,
    });
  }, []);

  const handleInput = (rIdx, cIdx, value) => {
    if (value === "" || /^[1-9]$/.test(value)) {
      setBoard((prev) =>
        prev.map((row, r) =>
          row.map((cell, c) => {
            if (r === rIdx && c === cIdx) return value === "" ? null : parseInt(value, 10);
            return cell;
          })
        )
      );
    }
  };

  const handleCheck = () => {
    const flatBoard = board.flat();
    const flatSolution = solution.flat();

    if (flatBoard.every((cell, i) => cell === flatSolution[i])) {
      setStatus("Correct!");

      let count = 0;
      const totalCells = 81;

      const interval = setInterval(() => {
        count++;
        setGreenCount(count);
        if (count === totalCells) clearInterval(interval);
      }, 30);
    } else {
      setStatus("Incorrect! Try again");
      setGreenCount(0);
    }
  };

  const handleReset = () => {
    setBoard(puzzle.map((row) => [...row]));
    setStatus("");
    setSelected(null);
    setGreenCount(0);
  };

  const handleNewPuzzle = () => {
    fetchPuzzle({
      setError,
      setStatus,
      setPuzzle,
      setSolution,
      setBoard,
      setSelected,
      setGreenCount,
    });
  };

  return (
    <div style={{ textAlign: "center" }}>
      <h1>Sudoku</h1>

      <Grid
        board={board}
        handleInput={handleInput}
        puzzle={puzzle}
        selected={selected}
        setSelected={setSelected}
        greenCount={greenCount}
      />

      <Controls
        handleCheck={handleCheck}
        handleReset={handleReset}
        handleNewPuzzle={handleNewPuzzle}
      />

      {error && <div className="error">{error}</div>}
      {status && <div className="status">{status}</div>}
    </div>
  );
}

export default App;