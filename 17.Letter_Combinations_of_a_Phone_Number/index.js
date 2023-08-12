function solution(digits) {
  const digitObj = {
    2: ["a", "b", "c"],
    3: ["d", "e", "f"],
    4: ["g", "h", "i"],
    5: ["j", "k", "l"],
    6: ["m", "n", "o"],
    7: ["p", "q", "r", "s"],
    8: ["t", "u", "v"],
    9: ["w", "x", "y", "z"],
  };
  if (digits.length === 0) return [];
  if (digits.length === 1) return digitObj[digits];
  const answer = [];
  const letterArray = [];

  const visited = [];
  for (let x of digits) {
    letterArray.push(digitObj[x]);
    visited.push(Array.from({ length: digitObj[x].length }, () => false));
  }

  const visitedBig = Array.from({ length: visited.length }, () => false);

  console.log(letterArray, visited);

  function dfs(arr, idx) {
    if (arr.length === digits.length) {
      let str = arr.join("");

      answer.push(str);
      return;
    } else {
      for (let i = idx; i < letterArray.length; i++) {
        if (visitedBig[i] === false) {
          visitedBig[i] = true;

          for (let j = 0; j < letterArray[i].length; j++) {
            if (visited[i][j] === false) {
              visited[i][j] = true;
              arr.push(letterArray[i][j]);
              console.log(console.log(visited), arr);
              dfs(arr, (idx += 1));
              arr.pop();
              idx -= 1;
              visited[i][j] = false;
            }
          }
          visitedBig[i] = false;
        }
      }
    }
  }
  dfs([], 0);

  return answer;
}
