/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var splitArray = function (nums, k) {
  let low = Math.max(...nums);
  let high = nums.reduce((acc, cur) => acc + cur, 0);
  let answer = Number.MAX_SAFE_INTEGER;

  while (low <= high) {
    let mid = Math.floor(low + (high - low) / 2);
    const result = checkParts(nums, mid, k);
    if (result) {
      high = mid - 1;
      answer = Math.min(mid, answer);
    } else {
      low = mid + 1;
    }
  }
  return answer;
};

function checkParts(arr, mid, k) {
  let part = 1;
  let sum = 0;

  for (let num of arr) {
    sum += num;
    if (sum > mid) {
      sum = num;
      part++;
    }
  }
  return part <= k;
}
