/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function (nums) {
  let sol = 0,
    cnt = 0;

  for (let i = 0; i < nums.length; i++) {
    if (cnt === 0) {
      sol = nums[i];
      cnt = 1;
    } else if (sol === nums[i]) {
      cnt++;
    } else {
      cnt--;
    }
    console.log(sol, cnt, nums[i]);
  }
  return sol;
};

majorityElement([3, 1, 2, 1, 1, 3, 3, 3, 2, 3, 1, 3, 3, 2, 1, 3, 1]);
