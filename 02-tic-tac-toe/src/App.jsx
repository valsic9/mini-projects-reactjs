import { useState } from "react";
import { TURNS } from "./Constants";

const board = Array(9).fill(null);

export function App() {
  return (
    <main className="board">
      <h1>Tic Tac Toe</h1>
      <section className="game">
        {board.map((_, index) => {
          return (
            <div className="cell" key={index}>
              <span className="cell_content">{index}</span>
            </div>
          );
        })}
      </section>
    </main>
  );
}

export default App;
