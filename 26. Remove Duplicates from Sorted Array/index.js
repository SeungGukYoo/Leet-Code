function solution(nums) {
  let i = 1;
  for (let j = 0; j < nums.length; j++) {
    if (nums[i] !== nums[j]) {
      nums[++i] = nums[j];
    }
  }
  return i;
}

console.log(solution([0, 0, 1, 1, 1, 2, 2, 3, 3, 4]));
