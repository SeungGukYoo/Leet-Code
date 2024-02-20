/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function (nums) {
  let len = nums.length;

  let total = (len * (len + 1)) / 2;
  let sum = nums.reduce((acc, cur) => acc + cur, 0);
  return total - sum;
};

missingNumber([6, 1, 4, 3, 0, 2]);
