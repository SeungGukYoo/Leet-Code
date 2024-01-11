/**
 * @param {string[]} bank=["011001","000000","010100","001000"]
 * @return {number} 8
 */
var numberOfBeams = function (bank) {
  let prevBeamsCount = 0;
  let answer = 0;
  for (let i = 0; i < bank.length; i++) {
    let currentBeamsCount = 0;
    for (let j = 0; j < bank[i].length; j++) {
      let currnetPos = bank[i][j];
      if (currnetPos === "1") {
        currentBeamsCount++;
      }
    }

    if (currentBeamsCount !== 0) {
      if (prevBeamsCount === 0) {
        prevBeamsCount = currentBeamsCount;
      } else {
        answer += prevBeamsCount * currentBeamsCount;
        prevBeamsCount = currentBeamsCount;
      }
    }
  }
  return answer;
};
numberOfBeams(["011001", "000000", "010100", "001000"]);
