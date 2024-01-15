/**
 * @param {number[]} nums
 * @return {number}
 */
var arrayPairSum = function (nums) {
  let sortedNums = nums.sort((a, b) => a - b);
  let answer = 0;

  for (let i = 0; i < nums.length; i += 2) {
    answer += nums[i];
  }
  return answer;
};

arrayPairSum([6, 2, 6, 5, 1, 2]);
