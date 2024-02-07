/**
 * @param {string} s
 * @return {string}
 */
var frequencySort = function (s) {
  const frequencyMap = new Map();

  for (let str of s) {
    frequencyMap.set(str, (frequencyMap.get(str) || 0) + 1);
  }
  const stack = [...frequencyMap].sort((a, b) => b[1] - a[1]);

  let answer = "";
  for (let i = 0; i < stack.length; i++) {
    const el = stack[i];
    answer += el[0].repeat(el[1]);
  }

  return answer;
};

frequencySort("cccaaaaaa11");
