function solution(nums, val) {
  let zeroStartIdx = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== val) {
      nums[zeroStartIdx] = nums[i];
      zeroStartIdx++;
    }
    console.log(nums, zeroStartIdx, i);
  }
  return zeroStartIdx;
}

console.log(solution([0, 1, 2, 2, 3, 0, 4, 2], 2));
// console.log(solution([3, 2, 2, 3], 3));
