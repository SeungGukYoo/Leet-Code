/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfTwo = function (n) {
  let pow = 0;

  while (2 ** pow <= n) {
    if (2 ** pow === n) {
      return true;
    }
    pow++;
  }
  return false;
};

isPowerOfTwo(16);
