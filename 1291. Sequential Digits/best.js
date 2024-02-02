/**
 * @param {number} low
 * @param {number} high
 * @return {number[]}
 */
const sequentialDigits = (low, high) => {
  const digits = "123456789";
  const ans = [];

  const minLen = low.toString().length;
  const maxLen = high.toString().length;

  for (let size = minLen; size <= maxLen; ++size) {
    for (let i = 0; i + size <= digits.length; ++i) {
      const num = parseInt(digits.substring(i, i + size));

      if (num >= low && num <= high) {
        ans.push(num);
      }
    }
  }

  return ans;
};
sequentialDigits(10, 1000000000);
