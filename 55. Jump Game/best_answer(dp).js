function solution(nums) {
  const memo = new Map();

  function premute(idx) {
    if (memo.has(idx)) return memo.get(idx);
    if (idx >= nums.length - 1) return true;
    if (nums[idx] === 0) return false;

    for (let i = nums[idx]; i >= 1; i--) {
      if (premute(idx + 1)) {
        memo.set(idx, true);
        return true;
      }
    }
    memo.set(idx, false);
    return false;
  }
  return premute(0);
}

// console.log(solution([1, 0, 1, 0]));
// console.log(solution([2, 3, 1, 4, 0]));
// console.log(solution([2, 0, 1, 2]));
console.log(solution([2, 3, 1, 0, 4]));
