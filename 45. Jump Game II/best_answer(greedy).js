function solution(nums) {
  const len = nums.length;
  if (len === 1) return 0;
  const target = len - 1;

  let beforeJumpIndex = 0;
  let jumpArea = 0;
  let jumpCount = 0;

  for (let i = 0; i < nums.length; i++) {
    jumpArea = Math.max(jumpArea, nums[i] + i);
    console.log(i, jumpArea, beforeJumpIndex);
    if (i === beforeJumpIndex) {
      beforeJumpIndex = jumpArea;
      jumpCount++;

      if (jumpArea === target) return jumpCount;
    }
    console.log("00");
  }
  return jumpCount;
}
console.log(solution([2, 3, 1, 1, 4]));
// console.log(solution([4, 0, 0, 0, 4]));
// console.log(solution([2, 0, 1, 1, 4]));
