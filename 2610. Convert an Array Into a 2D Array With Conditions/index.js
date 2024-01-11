/**
 * @param {number[]} nums = [1,3,4,1,2,3,1]
 * @return {number[][]} [[1,3,4,2],[1,3],[1]]
 */

var findMatrix = function (nums) {
  const numsObj = nums.reduce((pre, cur) => {
    if (!pre[cur]) pre[cur] = 0;
    pre[cur] += 1;
    return pre;
  }, {});
  const convertObjAndSorted = Object.entries(numsObj).sort((a, b) => a[1] - b[1]);
  const answer = Array.from({ length: convertObjAndSorted[convertObjAndSorted.length - 1][1] }, () => []);

  while (arr.length) {
    const el = arr.pop();
    for (let i = 0; i < el[1]; i++) {
      answer[i].push(parseInt(el[0]));
    }
  }
  return answer;
};

findMatrix([1, 3, 4, 1, 2, 3, 1]);
