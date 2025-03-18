import { Square } from "./Square";

export function WinnerModal({ winner, resetGame }) {
  if (winner === null) return null;
  const text = winner === false ? "It's a draw!" : `Winner:`;
  return (
    <section className="winner">
      <div className="text">
        <h2>{text}</h2>
        <header className="win">{winner && <Square>{winner}</Square>}</header>
        <footer>
          <button onClick={resetGame}>Reset Game</button>
        </footer>
      </div>
    </section>
  );
}
