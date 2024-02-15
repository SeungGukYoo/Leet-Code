var largestPerimeter = function (nums) {
  nums.sort((a, b) => (a > b ? -1 : 1));
  let sum = nums.reduce((sum, num) => sum + num, 0);
  for (const num of nums) {
    sum -= num;
    if (num < sum) return sum + num;
  }

  return -1;
};
largestPerimeter([1, 12, 1, 2, 5, 50, 3]);
largestPerimeter([1, 1, 2]);
largestPerimeter([2, 2, 3]);
largestPerimeter([5, 5, 5]);
