import { useState } from 'react'

import Player from './components/Player.jsx'
import GameBoard from './components/GameBoard.jsx'
import Log from './components/Log.jsx';

function App() {
  const [activePlayer, setActivePlayer] = useState('X');
  const [gameTurns, setGameTurns] = useState([]);

  function handleSelectSquare() {
    setActivePlayer(currActivePlayer => {
      return currActivePlayer === 'X' ? 'O' : 'X'});
    setGameTurns();
  }

  return (
    <main>
      <div id='game-container'>
        <ol id='players' className='highlight-player'>
          <Player name='Player1' symbol='X' isActive={activePlayer==='X'}></Player>
          <Player name='Player2' symbol='O' isActive={activePlayer==='O'}></Player>
        </ol>
        <GameBoard onSelectSquare={handleSelectSquare} activePlayerSymbol={activePlayer}/>
      </div>
      <Log/>
    </main>
  )
}

export default App
