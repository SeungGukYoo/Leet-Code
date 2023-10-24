/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function (board) {
  const setSdoku = Array.from({ length: 3 }, () => Array.from({ length: 3 }, () => new Set()));

  for (let i = 0; i < 9; i++) {
    let rowSet = new Set();
    let colSet = new Set();
    for (let j = 0; j < 9; j++) {
      let colPos = parseInt(i / 3);
      let rowPos = parseInt(j / 3);
      if (board[i][j] !== "." && rowSet.has(board[i][j])) {
        return false;
      }
      if (board[j][i] !== "." && colSet.has(board[j][i])) {
        return false;
      }
      if (board[i][j] !== "." && setSdoku[colPos][rowPos].has(board[i][j])) {
        return false;
      }
      setSdoku[colPos][rowPos].add(board[i][j]);
      rowSet.add(board[i][j]);
      colSet.add(board[j][i]);
    }
  }
  return true;
};
