/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function (s) {
  const answer = new Map();
  const exist = new Set();

  for (let i = 0; i < s.length; i++) {
    if (answer.get(s[i]) !== undefined || exist.has(s[i])) {
      answer.delete(s[i]);
      exist.add(s[i]);
    } else answer.set(s[i], i);
  }

  if (answer.size === 0) return -1;

  return [...answer][0][1];
};

firstUniqChar("loveleetcode");
firstUniqChar("leetcode");
firstUniqChar("aabb");
