import { useState } from "react";

const initialBoard = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];

export default function GameBoard({onSelectSquare, turns}) {

let gameBoard = initialBoard;

for(const turn of turns){
  const{squre, player} = turn;
  const {row, col}= squre;
  gameBoard[row][col] = player;
}
  return (
    <ol id="game-board">
      {gameBoard.map((row, rowIndex) => (
        <li key={rowIndex}>
          <ol>
            {row.map((col, colIndex) => (
              <li key={colIndex}>

                <button onClick={()=> onSelectSquare(rowIndex, colIndex)}>{col}</button>
              </li>
            ))}
          </ol>
        </li>
      ))}
    </ol>
  );
}
