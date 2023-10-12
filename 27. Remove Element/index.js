function solution(nums, val) {
  let count = 0;
  for (let j = 0; j < nums.length; j++) {
    if (nums[j] === val) {
      for (let k = j + 1; k < nums.length; k++) {
        if (nums[k] !== val) {
          [nums[j], nums[k]] = [nums[k], nums[j]];
          count++;
          break;
        }
      }
    } else count++;
  }
  return count;
}

console.log(solution([0, 1, 2, 2, 3, 0, 4, 2], 2));
console.log(solution([3, 2, 2, 3], 3));
