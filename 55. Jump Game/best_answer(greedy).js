function solution1() {
  var goal = nums.length - 1;
  for (var i = nums.length - 1; i >= 0; i--) {
    if (nums[i] + i >= goal) goal = i;
  }

  if (goal == 0) return true;
  return false;
}
function solution2(nums) {
  const length = nums.length;
  if (length === 1) return true;
  let iCounter = 0;
  for (i = 0; i < length; i++) {
    iCounter = iCounter <= nums[i] ? nums[i] : iCounter - 1;
    if (nums[i] === 0 && iCounter === 0) return false;
    if (nums[i] + i >= length - 1) return true;
  }
}
function solution3(nums) {
  let idx = 0;
  let max = 0;
  let target = nums.length - 1;

  while (idx < nums.length) {
    max = Math.max(max, idx + nums[idx]);

    if (max >= target) {
      return true;
    }

    if (max <= idx && nums[idx] === 0) {
      return false;
    }

    idx++;
  }

  return false;
}

// solution3([2, 3, 1, 0, 2]);
console.log(solution2([2, 3, 1, 0, 2]));
// console.log(solution2([2, 0, 1, 0, 2]));
