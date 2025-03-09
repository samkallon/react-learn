import Square from "./Square";

export default function BoardShowOnly({
  squares,
  index,
}: {
  squares: any;
  index: number;
}) {
  const winner = calculateWinner(squares);
  const boardContent = (
    <div>
      <button>jump to step</button>
      {Array(3)
        .fill(null)
        .map((e, i) => {
          return (
            <div className="board-row" key={i}>
              {Array(3)
                .fill(null)
                .map((s, si) => {
                  return (
                    <Square
                      key={si}
                      value={squares[i * 3 + si]}
                      onSquareClick={() => null}
                      style={{
                        color:
                          winner && winner.line.includes(i * 3 + si)
                            ? "red"
                            : "black",
                      }}
                    ></Square>
                  );
                })}
            </div>
          );
        })}
    </div>
  );

  return boardContent;
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
