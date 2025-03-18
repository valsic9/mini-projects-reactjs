import { useState } from "react";
import confetti from "canvas-confetti";

import "../css/App.css";

import { TURNS } from "./Constants";
import { Square } from "./components/Square";
import { checkWinnerFrom, checkEndGameFrom } from "./logic/board";
import { WinnerModal } from "./components/WinnerModal";

export function App() {
  const [board, setBoard] = useState(Array(9).fill(null));

  const [turn, setTurn] = useState(TURNS.X);

  const [winner, setWinner] = useState(null); // null (no winner), false (draw), x / o (winner)

  const updateBoard = (index) => {
    // If the square is already filled, don´t do anything
    if (board[index] || winner) return;

    // update Turn
    const newTurn = turn === TURNS.X ? TURNS.O : TURNS.X;
    setTurn(newTurn);

    // update Board
    const newBoard = [...board];
    newBoard[index] = turn; // x u o;
    setBoard(newBoard);

    // check winner
    const newWinner = checkWinnerFrom(newBoard);
    if (newWinner) {
      confetti();
      setWinner(newWinner);
    } else if (checkEndGameFrom(newBoard)) {
      // check for draw
      setWinner(false);
    }
  };

  // Reset the game
  const resetGame = () => {
    setBoard(Array(9).fill(null));
    setTurn(TURNS.X);
    setWinner(null);
  };

  return (
    <main className="board">
      <h1>Tic Tac Toe</h1>
      <button onClick={resetGame}> Reset Game</button>
      <section className="game">
        {board.map((_, index) => {
          return (
            <Square key={index} index={index} updateBoard={updateBoard}>
              {board[index]}
            </Square>
          );
        })}
      </section>

      <section className="turn">
        <Square isSelected={turn == TURNS.X}>{TURNS.X}</Square>
        <Square isSelected={turn == TURNS.O}>{TURNS.O}</Square>
      </section>

      <WinnerModal resetGame={resetGame} winner={winner} />
    </main>
  );
}

export default App;
