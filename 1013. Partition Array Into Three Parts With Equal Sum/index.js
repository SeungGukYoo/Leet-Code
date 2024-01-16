/**
 * @param {number[]} arr = [0,2,1,-6,6,-7,9,1,2,0,1]
 * @return {boolean} true
 */
var canThreePartsEqualSum = function (arr) {
  let sum = arr.reduce((acc, cur) => acc + cur, 0);
  const tripleEqualValue = sum / 3;

  if (sum % 3 === 1) return false;
  let curSum = 0;
  let parts = 0;

  while (arr.length && parts !== 2) {
    let value = arr.pop();
    curSum += value;

    if (tripleEqualValue === curSum) {
      parts++;
      curSum = 0;
    }
  }
  let lastParts = 0;
  if (arr.length) {
    lastParts = arr.reduce((acc, cur) => acc + cur);
    parts++;
  }
  if (tripleEqualValue === lastParts && parts === 3) return true;
  return false;
};

canThreePartsEqualSum([1, -1, 1, -1]);
canThreePartsEqualSum([0, 0, 0, 0]);

canThreePartsEqualSum([0, 2, 1, -6, 6, -7, 9, 1, 2, 0, 1]);

canThreePartsEqualSum([0, 2, 1, -6, 6, -7, 9, -1, 2, 0, 1]);
canThreePartsEqualSum([3, 3, 6, 5, -2, 2, 5, 1, -9, 4]);
