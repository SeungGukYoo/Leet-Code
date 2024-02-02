/**
 * @param {number} low
 * @param {number} high
 * @return {number[]}
 */
var sequentialDigits = function (low, high) {
  if (low === high) return [];

  const answer = [];

  let tmp = low.toString();
  let firstDigit = parseInt(tmp[0]);
  let lt = tmp.length;
  let rt = high.toString().length;
  let idx = 0;
  while (lt <= rt) {
    let curNum = 0;
    for (let i = 0; i < lt; i++) {
      if (firstDigit + i === 9 && i !== lt - 1) {
        curNum = 0;
        firstDigit = 1;
        i = 0;
        idx++;
        lt++;
      }
      if (lt > rt) break;

      curNum += (firstDigit + i) * 10 ** (lt - 1 - i);
    }
    firstDigit++;

    if (curNum < low) {
      continue;
    }
    if (curNum <= high) {
      answer.push(curNum);
      idx = 0;
    } else {
      lt++;
    }
  }

  return answer;
};

sequentialDigits(100000000, 1000000000);
