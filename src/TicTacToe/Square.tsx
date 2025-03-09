import { useState } from "react";

export default function Square({
  value,
  onSquareClick,
  style,
}: {
  value: string;
  onSquareClick: () => void;
  style: any;
}) {
  //   const [value, setValue] = useState("");
  return (
    <button className="square" onClick={onSquareClick} style={style}>
      {value}
    </button>
  );
}
