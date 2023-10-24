/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function (haystack, needle) {
  let needleIdx = 0;

  for (let i = 0; i < haystack.length; i++) {
    if (haystack[i] === needle[needleIdx]) {
      let find = true;
      for (let j = i + 1; j < needle.length + i; j++) {
        if (haystack[j] !== needle[needleIdx + 1]) {
          find = false;
          break;
        }
        needleIdx++;
      }

      if (find) {
        return i;
      }
      needleIdx = 0;
    }
  }
  return -1;
};
