/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function (nums) {
  const answer = [];
  function dfs(arr) {
    if (arr.length === nums.length) {
      answer.push([...arr]);
      console.log(answer);
      return;
    }

    for (let i = 0; i < nums.length; i++) {
      if (arr.includes(nums[i])) continue;

      arr.push(nums[i]);
      dfs(arr);
      arr.pop();
    }
  }
  dfs([]);
  return answer;
};

permute([1, 2, 3]);
