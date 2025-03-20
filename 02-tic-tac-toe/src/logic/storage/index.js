export const saveGameToLocalStorage = (board, turn) => {
  window.localStorage.setItem("board", JSON.stringify(board));
  window.localStorage.setItem("turn", turn);
};

export const resetGameFromLocalStorage = () => {
  window.localStorage.removeItem("board");
  window.localStorage.removeItem("turn");
};
