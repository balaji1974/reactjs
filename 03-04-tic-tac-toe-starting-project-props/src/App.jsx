import { useState } from 'react'

import Player from './components/Player.jsx'
import GameBoard from './components/GameBoard.jsx'
import Log from './components/Log.jsx';
import GameOver from './components/GameOver.jsx';

import { WINNING_COMBINATIONS } from './winning-combinations.js';

const PLAYERS = {
  'X': 'Player 1',
  'O': 'Player 2'
}

const INITIAL_GAME_BOARD = [
    [null, null, null],
    [null, null, null],
    [null, null, null]
];


function deriveActvePlayer(turns) {
  let currPlayer = 'X';
  if(turns.length>0 && turns[0].player === 'X') {
    currPlayer = 'O';
  }
  return currPlayer;
}

function deriveWinner(gameBoard, players) {
  let winner;
  for(const combination of WINNING_COMBINATIONS) {
    const [first, second, third] = combination;
    const firstSymbol = gameBoard[first.row][first.column];
    const secondSymbol = gameBoard[second.row][second.column];
    const thirdSymbol = gameBoard[third.row][third.column];

    if(firstSymbol && firstSymbol === secondSymbol && firstSymbol === thirdSymbol) {
      winner = players[firstSymbol];
      console.log(`${winner} wins!`);
    }
  }
  return winner;
}

function deriveGameBoard(gameTurns) {
  let gameBoard = [...INITIAL_GAME_BOARD.map(row => [...row])]; // deep copy of the initial board
  for(const turn of gameTurns) {
    const {square, player} = turn;
    const {row, col} = square;
    gameBoard[row][col] = player;
  }
  return gameBoard;
}

function App() {
  // const [activePlayer, setActivePlayer] = useState('X');
  const [gameTurns, setGameTurns] = useState([]);
  const activePlayer = deriveActvePlayer(gameTurns);
  const [players,setPlayers] = useState(PLAYERS);

  
  const gameBoard = deriveGameBoard(gameTurns);
  const winner = deriveWinner(gameBoard, players);
  const hasDraw = gameTurns.length === 9 && !winner;

  function handleSelectSquare(rowIndex, colIndex) {
    //setActivePlayer((currActivePlayer) => currActivePlayer === 'X' ? 'O' : 'X');
    setGameTurns((previousTurns) => {
      let currPlayer = deriveActvePlayer(previousTurns);
      const updateTurns = [
        {
          square: {row: rowIndex, col: colIndex}, 
          player: currPlayer
        }, 
        ...previousTurns];
      return updateTurns;
    });
  }

  function handleRestartGame() {
    setGameTurns([]);
  } 

  function handlePlayerNameChange(symbol, newName) {
    setPlayers(prevPlayers => {
      return {
        ...prevPlayers,
        [symbol]: newName 
      };
    })
  }

  return (
    <main>
      <div id='game-container'>
        <ol id='players' className='highlight-player'>
          <Player 
            name={PLAYERS.X} 
            symbol='X' 
            isActive={activePlayer==='X'}
            onNameChange={handlePlayerNameChange}
          >
          </Player>
          <Player 
            name={PLAYERS.O}
            symbol='O' 
            isActive={activePlayer==='O'}
            onNameChange={handlePlayerNameChange}
          >
          </Player>
        </ol>
        { (winner || hasDraw) && <GameOver winner={winner} onRestart={handleRestartGame}/> }
        <GameBoard 
          onSelectSquare={handleSelectSquare} 
          board={gameBoard}
        />
      </div>
      <Log turns={gameTurns}/>
    </main>
  )
}

export default App
