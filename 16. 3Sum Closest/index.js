function solution(nums, target) {
  const sortNum = nums.sort((a, b) => a - b);
  let diff = Number.MAX_SAFE_INTEGER;
  for (let i = 0; i < sortNum.length; i++) {
    let lt = i + 1,
      rt = sortNum.length - 1;

    while (lt < rt) {
      let sum = sortNum[i] + sortNum[lt] + sortNum[rt];
      if (Math.abs(target - sum) < Math.abs(target - diff)) {
        diff = sum;
      }
      if (sum > target) rt--;
      else lt++;
    }
  }

  return diff;
}

