/**
 * @param {string} s = "aba"
 * @return {boolean} true
 */
var validPalindrome = function (s) {
  const map = new Map();
  let left = 0;
  let right = s.length - 1;
  let isDelete = false;
  for (let letter of s) {
    map.set(letter, (map.get(letter) || 0) + 1);
  }
  while (left <= right) {
    console.log(s[left], s[right]);
    if (s[left] !== s[right]) {
      if (isDelete) return false;
      const leftValue = map.get(s[left]);
      const rightValue = map.get(s[right]);

      if (leftValue % 2 === 1) {
        map.set(s[left], leftValue - 1);
        if (map.get(s[left]) === 0) map.delete(s[left]);
        isDelete = true;
        left++;
      } else {
        map.set(s[right], rightValue - 1);
        if (map.get(s[right]) === 0) map.delete(s[right]);
        isDelete = true;
        right--;
      }
    } else {
      map.set(s[left], map.get(s[left]) - 2);
      if (map.get(s[left]) <= 0) map.delete(s[left]);
      left++;
      right--;
    }
  }
  console.log(map);
  return true;
};

console.log(validPalindrome("accbba"));
