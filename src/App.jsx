import { useState } from "react";
import "./App.css";
import GameBoard from "./component/GameBoard";
import Player from "./component/player";
import Log from "./component/Log";
import { WINNING_COMBINATIONS } from "./component/WiningCombinations";
import { GameOver } from "./component/GameOver";

const PLAYERS = {
   X :'Player 1',
   O : 'Player 2'
};

const initialBoard = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];

function DriveActivePlayer(GameTurns) {
  let currentPlayer = "X";
  if (GameTurns.length > 0 && GameTurns[0].player === "X") {
    currentPlayer = "O";
  }
  return currentPlayer;
}

function App() {
  const [players, setPlayers] = useState(PLAYERS)
  const [GameTurns, setGameTurns] = useState([]);


  const activePlayer = DriveActivePlayer(GameTurns);
  let gameBoard = [...initialBoard.map(array => [...array])];
  let winner;

  for (const turn of GameTurns) {
    const { squre, player } = turn;
    const { row, col } = squre;
    gameBoard[row][col] = player;
  }

  for (const combination of WINNING_COMBINATIONS) {
    const firstCombination =gameBoard[combination[0].row][combination[0].column];
    const secCombination = gameBoard[combination[1].row][combination[1].column];
    const ThirdCombination =gameBoard[combination[2].row][combination[2].column];
    if (firstCombination && firstCombination === secCombination && firstCombination === ThirdCombination) {
      winner = players[firstCombination];
    }
  }

  const hisDraw = GameTurns.length === 9 && !winner;

  function handleSquareSelect(rowIndex, colIndex) {
    setGameTurns((prevTurns) => {
      const currentPlayer = DriveActivePlayer(prevTurns);

      const updateTurns = [
        { squre: { row: rowIndex, col: colIndex }, player: currentPlayer },
        ...prevTurns,
      ];
      return updateTurns;
    });
  }

  function HandleReatstGame() {
    setGameTurns([]);
  }


  function handlePlayerName(symbol, newName){
    setPlayers((prevPlayers)=>{
      return {
        ...prevPlayers, 
        [symbol]:newName
      };
    });
  }

  return (
    <main>
      <div id="game-container">
        <ol id="players" className="highlight-player">
          <Player
            initialName={PLAYERS.X}
            symbol="X"
            isActive={activePlayer === "X"} onChangeName={handlePlayerName}
          />
          <Player
            initialName={PLAYERS.O}
            symbol="O"
            isActive={activePlayer === "O"}  onChangeName={handlePlayerName}
          />
        </ol>
        {(winner || hisDraw) && (
          <GameOver winner={winner} GameRematch={HandleReatstGame} />
        )}
        <GameBoard onSelectSquare={handleSquareSelect} board={gameBoard} />
      </div>
      <Log turns={GameTurns} />
    </main>
  );
}

export default App;
