
import './App.css'
import GameBoard from './component/GameBoard';
import Player from './component/player';

function App() {
  return (
  <div id="game-container">
    <ol id="players">
    <Player initialName="Player1" symbol="X"/>
    <Player initialName="Player2" symbol="O"/>
    </ol>
    <GameBoard/>

  </div>
  )
}

export default App
