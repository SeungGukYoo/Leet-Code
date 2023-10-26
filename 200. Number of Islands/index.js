/**
 * @param {character[][]} grid
 * @return {number}
 */
const move = [
  [1, 0],
  [-1, 0],
  [0, -1],
  [0, 1],
];
var numIslands = function (grid) {
  let island = 0;

  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[i].length; j++) {
      if (grid[i][j] === "1") {
        grid[i][j] = "0";
        dfs(grid, i, j);
        console.log(grid, "result");
        island += 1;
      }
    }
  }
  return island;
};

function dfs(grid, y, x) {
  console.log(grid, y, x);
  for (let i = 0; i < 4; i++) {
    let moveY = y + move[i][0];
    let moveX = x + move[i][1];

    if (moveX < 0 || moveY < 0 || moveX >= grid[0].length || moveY >= grid.length) continue;
    if (grid[moveY][moveX] === "0") continue;
    grid[moveY][moveX] = "0";
    dfs(grid, moveY, moveX);
  }
}

numIslands([
  ["1", "1", "0", "0", "0"],
  ["1", "1", "0", "0", "0"],
  ["0", "0", "1", "0", "0"],
  ["0", "0", "0", "1", "1"],
]);
