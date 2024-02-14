/**
 * @param {number[]} nums
 * @return {number[]}
 */
var rearrangeArray = function (nums) {
  const answer = [];
  let pos = 0,
    neg = 1,
    idx = 0;

  while (idx < nums.length) {
    let curNum = nums[idx];
    if (curNum > 0) {
      answer[pos] = curNum;
      pos += 2;
    } else {
      answer[neg] = curNum;
      neg += 2;
    }
    idx++;
  }
  return answer;
};

rearrangeArray([3, 1, -2, -5, 2, -4]);
rearrangeArray([-1, 1]);
