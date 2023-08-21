function solution(nums) {
  const jump = new Array(nums.length).fill(Infinity);
  jump[0] = 0; //Since we are already at index 0 initially

  for (let i = 1; i < nums.length; i++) {
    for (let j = 0; j < i; j++) {
      if (nums[j] >= i - j) {
        jump[i] = Math.min(jump[i], jump[j] + 1);
      }
    }
  }

  return jump[nums.length - 1];
}
console.log(solution([2, 3, 1, 1, 4]));
// console.log(solution([2, 3, 1, 1, 4]));
// solution([2, 0, 1, 1, 4]);
