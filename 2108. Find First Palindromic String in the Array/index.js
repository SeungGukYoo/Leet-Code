/**
 * @param {string[]} words
 * @return {string}
 */
var firstPalindrome = function (words) {
  for (let word of words) {
    let len = word.length - 1;
    let find = true;
    for (let lt = 0, rt = len; lt <= rt; ) {
      if (word[lt] !== word[rt]) {
        find = false;
        break;
      }
      lt++;
      rt--;
    }
    if (find) return word;
  }
  return "";
};
