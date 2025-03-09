import { useState } from "react";
import Board from "./Board";
import BoardShowOnly from "./BoardShowOnly";

export default function Game() {
  // live up to the state of the board
  const [history, setHistory] = useState([Array(9).fill(null)]);
  const [xIsNext, setXIsNext] = useState(true);
  const currentSquares = history[history.length - 1];

  function handlePlay(nextSquares: any) {
    setHistory([...history, nextSquares]);
    setXIsNext(!xIsNext);
  }

  const historyBoard = history.map((squares, move) => {
    return <BoardShowOnly key={move} squares={squares} index={move} />;
  });
  return (
    <div className="game">
      <div className="game-board">
        <Board xIsNext={xIsNext} squares={currentSquares} onPlay={handlePlay} />
      </div>
      <div className="game-info">{historyBoard}</div>
    </div>
  );
}
