/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
var minWindow = function (s, t) {
  if (t.length > s.length) return "";

  const currentStringMap = new Map();
  for (let str of t) {
    currentStringMap.set(str, (currentStringMap.get(str) || 0) + 1);
  }

  let lt = 0,
    rt = 0;
  let currentStr = "";
  let conditionLength = currentStringMap.size;

  while (rt < s.length) {
    let curChar = s[rt];

    if (currentStringMap.get(curChar) !== undefined) {
      currentStringMap.set(curChar, currentStringMap.get(curChar) - 1);
      if (currentStringMap.get(curChar) === 0) conditionLength--;
    }

    while (conditionLength === 0) {
      let leftChar = s[lt];
      if (!currentStr || currentStr.length > rt - lt + 1) {
        currentStr = s.slice(lt, rt + 1);
      }

      if (currentStringMap.get(leftChar) !== undefined) {
        currentStringMap.set(leftChar, currentStringMap.get(leftChar) + 1);
        if (currentStringMap.get(leftChar) > 0) conditionLength++;
      }
      lt++;
    }
    rt++;
  }
  return currentStr;
};
minWindow("ADOBECODEBANC", "ABC");
