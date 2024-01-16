/**
 * @param {number[]} arr = [0,2,1,-6,6,-7,9,1,2,0,1]
 * @return {boolean} true
 */
var canThreePartsEqualSum = function (arr) {
  if (arr.length === 3 && arr[0] === arr[1] && arr[1] === arr[2]) return true;

  const total = arr.reduce((acc, cur) => acc + cur, 0);

  let left = 1,
    right = arr.length - 2;
  let leftSum = arr[0],
    rightSum = arr[arr.length - 1];

  while (left <= right) {
    if (leftSum === rightSum && leftSum === total - (leftSum + rightSum)) {
      return true;
    }
    if (leftSum !== total / 3) {
      leftSum += arr[left];
      left++;
    } else if (rightSum !== total / 3) {
      rightSum += arr[right];
      right--;
    } else break;
  }
  return false;
};

// canThreePartsEqualSum([1, -1, 1, -1]);
// canThreePartsEqualSum([0, 0, 0, 0]);
// canThreePartsEqualSum([0, 2, 1, -6, 6, -7, 9, -1, 2, 0, 1]);
// canThreePartsEqualSum([3, 3, 6, 5, -2, 2, 5, 1, -9, 4]);

canThreePartsEqualSum([0, 2, 1, -6, 6, -7, 9, 1, 2, 0, 1]);
