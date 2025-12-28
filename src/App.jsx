
import { useState } from 'react';
import './App.css'
import GameBoard from './component/GameBoard';
import Player from './component/player';
import Log from './component/Log';


function App() {
  const[GameTurns, setGameTurns] = useState([]);
const [activePlayer, setactivePlayer] = useState('X');

function handleSquareSelect(rowIndex, colIndex) {
  setactivePlayer((currentActive) => currentActive === 'X' ? 'O' : 'X');
  setGameTurns((prevTurns) =>{
    let currentPlayer = 'X';
    
    if(prevTurns.length>0 && prevTurns[0].player === 'X'){
      currentPlayer = 'O';
    }
const updateTurns = [
  {squre : {row:rowIndex, col:colIndex}, player:currentPlayer}, ...prevTurns,];
return updateTurns;
  });
}

  return (
  <main>
    <div id="game-container" >
    <ol id="players" className='highlight-player'>
    <Player initialName="Player1" symbol="X" isActive= {activePlayer === 'X'}/>
    <Player initialName="Player2" symbol="O" isActive= {activePlayer === 'O'}/>
    </ol>
    <GameBoard onSelectSquare={handleSquareSelect} turns={GameTurns} />
    </div> 
      <Log/>
    
  </main>
  )
}

export default App
