/**
 * @param {number[]} nums
 * @return {number}
 */
var largestPerimeter = function (nums) {
  nums.sort((a, b) => b - a);

  let cur = 0;
  while (cur < nums.length) {
    let num = nums[cur++];
    let sum = 0;
    for (let i = cur; i < nums.length; i++) {
      sum += nums[i];
    }
    if (num < sum) {
      return num + sum;
    }
  }
  return -1;
};

console.log(largestPerimeter([1, 12, 1, 2, 5, 50, 3]));
console.log(largestPerimeter([1, 1, 2]));
console.log(largestPerimeter([2, 2, 3]));
console.log(largestPerimeter([5, 5, 5]));
