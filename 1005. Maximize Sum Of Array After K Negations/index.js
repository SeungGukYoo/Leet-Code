/**
 * @param {number[]} nums = [2,-3,-1,5,-4]
 * @param {number} k = 2
 * @return {number}
 */
var largestSumAfterKNegations = function (nums, k) {
  let sortedNums = nums.sort((a, b) => a - b);

  let modify = 0;
  let idx = 0;
  while (k > 0) {
    console.log(sortedNums);
    if (sortedNums[idx] < sortedNums[modify]) {
      modify = idx;
    }

    if (idx + 1 < sortedNums.length) {
      idx++;
    }

    sortedNums[modify] = -sortedNums[modify];
    k--;
    console.log(sortedNums);
  }

  let answer = sortedNums.reduce((acc, cur) => acc + cur, 0);
  return answer;
};

// largestSumAfterKNegations([3, -1, 0, 2], 3);
largestSumAfterKNegations([2, -3, -1, 5, -4], 2);
