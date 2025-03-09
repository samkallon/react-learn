import Square from "./Square";

export default function Board({
  xIsNext,
  squares,
  onPlay,
}: {
  xIsNext: any;
  squares: any;
  onPlay: any;
}) {
  const winner = calculateWinner(squares);
  let status;
  if (winner) {
    status = "Winner: " + winner.winner;
  } else {
    status = "Next player: " + (xIsNext ? "X" : "O");
  }
  function handleClick(i: number) {
    // if the square is filled or there is a winner, return
    if (squares[i] || calculateWinner(squares)) {
      // highlight the winner

      return;
    }
    // copy the squares array
    const nextSquares = squares.slice();
    if (xIsNext) {
      nextSquares[i] = "X";
    } else {
      nextSquares[i] = "O";
    }
    // call the setxxxx Method will trigger the re-render
    onPlay(nextSquares);
  }
  return (
    <>
      <div className="status">{status}</div>
      <div className="board-row">
        <Square
          value={squares[0]}
          onSquareClick={() => handleClick(0)}
          style={{
            color: winner && winner.line.includes(0) ? "red" : "black",
          }}
        ></Square>
        <Square
          value={squares[1]}
          onSquareClick={() => handleClick(1)}
          style={{
            color: winner && winner.line.includes(1) ? "red" : "black",
          }}
        ></Square>
        <Square
          value={squares[2]}
          onSquareClick={() => handleClick(2)}
          style={{
            color: winner && winner.line.includes(2) ? "red" : "black",
          }}
        ></Square>
      </div>
      <div className="board-row">
        <Square
          value={squares[3]}
          onSquareClick={() => handleClick(3)}
          style={{
            color: winner && winner.line.includes(3) ? "red" : "black",
          }}
        ></Square>
        <Square
          value={squares[4]}
          onSquareClick={() => handleClick(4)}
          style={{
            color: winner && winner.line.includes(4) ? "red" : "black",
          }}
        ></Square>
        <Square
          value={squares[5]}
          onSquareClick={() => handleClick(5)}
          style={{
            color: winner && winner.line.includes(5) ? "red" : "black",
          }}
        ></Square>
      </div>
      <div className="board-row">
        <Square
          value={squares[6]}
          onSquareClick={() => handleClick(6)}
          style={{
            color: winner && winner.line.includes(6) ? "red" : "black",
          }}
        ></Square>
        <Square
          value={squares[7]}
          onSquareClick={() => handleClick(7)}
          style={{
            color: winner && winner.line.includes(7) ? "red" : "black",
          }}
        ></Square>
        <Square
          value={squares[8]}
          onSquareClick={() => handleClick(8)}
          style={{
            color: winner && winner.line.includes(8) ? "red" : "black",
          }}
        ></Square>
      </div>
    </>
  );
}

function calculateWinner(squares: (string | null)[]) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return {
        winner: squares[a],
        line: lines[i],
      };
    }
  }
  return null;
}
