/**
 * @param {number[]} nums
 * @return {string}
 */
var largestNumber = function (nums) {
  let checkZero = nums.filter((el) => el !== 0);
  if (!checkZero.length) return "0";

  nums = nums.sort((a, b) => {
    let num1 = a.toString() + b + toString();
    let num2 = b.toString() + a.toString();
    num1 = parseInt(num1);
    num2 = parseInt(num2);
    return num2 - num1;
  });
  return nums.join("");
};
