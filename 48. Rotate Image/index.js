/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var rotate = function (matrix) {
  const len = matrix.length;
  const copyMatrix = Array.from({ length: len }, (_, idx) => Array.from([...matrix[idx]]));
  for (let i = 0; i < len; i++) {
    for (let j = 0; j < len; j++) {
      matrix[i][j] = copyMatrix[len - 1 - j][i];
    }
  }
  return;
};

rotate([
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
]);
rotate([
  [5, 1, 9, 11],
  [2, 4, 8, 10],
  [13, 3, 6, 7],
  [15, 14, 12, 16],
]);
