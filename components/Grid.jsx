import React from "react";
import classNames from "classnames";

const Grid = ({ board, puzzle, selected, setSelected, handleInput, greenCount }) => {
  return (
    <div className="container">
      <table className="table">
        <tbody>
          {board.map((row, rIdx) => (
            <tr key={rIdx}>
              {row.map((cell, cIdx) => {
                const isPrefilled = puzzle[rIdx][cIdx] !== null;
                const cellIndex = rIdx * 9 + cIdx;

                return (
                  <td
                    key={cIdx}
                    className={classNames("cell", {
                      "same-row": selected && rIdx === selected[0],
                      "same-col": selected && cIdx === selected[1],
                      "same-box":
                        selected &&
                        Math.floor(rIdx / 3) === Math.floor(selected[0] / 3) &&
                        Math.floor(cIdx / 3) === Math.floor(selected[1] / 3),
                      green: cellIndex < greenCount,
                    })}
                  >
                    <input
                      className="input"
                      type="text"
                      maxLength={1}
                      value={cell === null ? "" : cell}
                      readOnly={isPrefilled}
                      onFocus={() => setSelected([rIdx, cIdx])}
                      onClick={() => setSelected([rIdx, cIdx])}
                      onChange={(e) => {
                        if (isPrefilled) return;

                        const v = e.target.value;
                        if (v !== "" && !/^[1-9]$/.test(v)) return;

                        handleInput(rIdx, cIdx, v);
                      }}
                    />
                  </td>
                );
              })}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Grid;