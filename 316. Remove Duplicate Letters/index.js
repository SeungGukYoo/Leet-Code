/**
 * @param {string} s = "bcabc"
 * @return {string} "abc"
 */
var removeDuplicateLetters = function (s) {
  const map = new Map();
  const answer = [];
  const visited = new Set();
  for (let i = 0; i < s.length; i++) {
    map.set(s[i], i);
  }

  for (let i = 0; i < s.length; i++) {
    let str = s[i];
    if (answer.length === 0 || (answer[answer.length - 1] > str && !visited.has(str))) {
      while (answer[answer.length - 1] > str && map.get(answer[answer.length - 1]) >= i) {
        const deleteStr = answer.pop();
        visited.delete(deleteStr);
      }
    }
    if (!visited.has(str)) {
      answer.push(str);
      visited.add(str);
    }
  }
  return answer.join("");
};

removeDuplicateLetters("cbacdcbc");
removeDuplicateLetters("bcabc");
