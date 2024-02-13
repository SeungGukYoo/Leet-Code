/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function (nums) {
  const map = new Map();

  for (let num of nums) {
    map.set(num, (map.get(num) || 0) + 1);
  }

  const arr = [...map];

  let count = 0;
  let answer = 0;

  arr.forEach((el) => {
    if (el[1] > count) {
      answer = el[0];
      count = el[1];
    }
  });

  return answer;
};
