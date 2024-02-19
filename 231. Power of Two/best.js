/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfTwo = function (n) {
  return Math.log2(n) === Math.floor(Math.log2(n));
};

isPowerOfTwo(16);
