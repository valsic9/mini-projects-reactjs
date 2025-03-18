import { WINNING_COMBOS } from "../Constants";

// Check if there is a winner
export const checkWinnerFrom = (boardToCheck) => {
  // check all combos to find a matching one
  for (let combo of WINNING_COMBOS) {
    const [a, b, c] = combo;
    if (
      boardToCheck[a] &&
      boardToCheck[a] === boardToCheck[b] &&
      boardToCheck[a] === boardToCheck[c]
    ) {
      return boardToCheck[a];
    }
  }
  // if no match is found, return null (no winner)
  return null;
};

export const checkEndGameFrom = (boardToCheck) => {
  return boardToCheck.every((square) => square !== null);
};
