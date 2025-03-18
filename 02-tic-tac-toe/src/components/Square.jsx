export const Square = ({ children, index, isSelected, updateBoard }) => {
  const classes = `square ${isSelected ? "is-selected" : ""}`;
  const handleClick = () => {
    updateBoard(index);
  };
  return (
    <div className={classes} onClick={handleClick}>
      {children}
    </div>
  );
};
