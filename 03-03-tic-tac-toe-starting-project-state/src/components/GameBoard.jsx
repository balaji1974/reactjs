import { useState } from 'react';

const initialState = [
    [null, null, null],
    [null, null, null],
    [null, null, null]
];

function GameBoard({onSelectSquare, activePlayerSymbol}) {
  const [gameBoard, setGameBoard] = useState(initialState);
  
  function handleButtonClick(rowIndex, colIndex) {
    setGameBoard((previousBoard) => {
      // Create a deep copy of the previous board to avoid mutating state directly 
      // and to ensure React can detect changes
      const updatedBoard = [...previousBoard.map(innerArray => [...innerArray])]; // Create a deep copy of the board
      updatedBoard[rowIndex][colIndex] = previousBoard[rowIndex][colIndex] = activePlayerSymbol;
      return updatedBoard;
    });
    onSelectSquare();
  }

  return (
    <ol id="game-board">
        {gameBoard.map((row, rowIndex) => 
            <li key={rowIndex} >
                <ol>
                    {row.map((playerSymbol, colIndex) => 
                        <li key={colIndex}>
                            <button onClick={()=> handleButtonClick(rowIndex,colIndex)}>{playerSymbol}</button>
                        </li>
                    )}
                </ol>
            </li>
        )}
    </ol>
  );
}

export default GameBoard;