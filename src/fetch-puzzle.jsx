const QUERY = `{newboard(limit:1){grids{value solution}}}`;

const SUDOKU_API =
  `https://sudoku-api.vercel.app/api/dosuku?query=${encodeURIComponent(QUERY)}`;

export const fetchPuzzle = async ({
  setError,
  setStatus,
  setPuzzle,
  setSolution,
  setBoard,
  setSelected,
  setGreenCount,
}) => {
  setError("");
  setStatus("loading");

  try {
    const res = await fetch(SUDOKU_API);

    if (!res.ok) {
      throw new Error(`HTTP ${res.status}`);
    }

    const data = await res.json();

    // API might return either { newboard: ... } or { data: { newboard: ... } }
    const grid =
      data?.newboard?.grids?.[0] ??
      data?.data?.newboard?.grids?.[0];

    if (!grid) {
      throw new Error("Bad API response shape");
    }

    const puzzle = grid.value.map((row) =>
      row.map((cell) => (cell === 0 ? null : cell))
    );

    const solution = grid.solution;

    setPuzzle(puzzle);
    setSolution(solution);
    setBoard(puzzle);
    setSelected(null);
    setGreenCount(0);
    setStatus("ready");
  } catch (e) {
    console.error("fetchPuzzle error:", e);
    setError(`Failed to fetch puzzle: ${e.message}`);
    setStatus("error");
  }
};