/**
 * @param {number[]} nums = [2,1,5,0,4,6]
 * @param {number[]} nums = [20, 100, 10, 5, 9, 13]
 * @return {boolean} true
 */
// 20 100 13
// 100 10 13
// 10 5 13
// 10 9 13
//

var increasingTriplet = function (nums) {
  let firstNumber = Infinity;
  let secondNumber = Infinity;

  for (let currentNumber of nums) {
    if (currentNumber > secondNumber && currentNumber > secondNumber) {
      return true;
    } else {
      if (currentNumber > firstNumber) {
        secondNumber = currentNumber;
      } else {
        firstNumber = currentNumber;
      }
    }
  }
  return false;
};

// console.log(increasingTriplet([1, 6, 2, 5, 1]));
console.log(increasingTriplet([20, 100, 10, 5, 9, 13]));

