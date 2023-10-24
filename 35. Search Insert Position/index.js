/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function (nums, target) {
  let lt = 0;
  let rt = nums.length;

  while (lt < rt) {
    let mid = Math.floor((rt + lt) / 2);

    if (target > nums[mid]) lt = mid + 1;
    else rt = mid;
  }

  return lt;
};
// console.log(searchInsert([1, 3, 5], 6));
// console.log(searchInsert([1, 3, 5], 2));
console.log(searchInsert([2, 3, 5, 6], 5));
// console.log(searchInsert([2, 3, 5, 6], 7));
// console.log(searchInsert([2, 3, 5, 6], 3));
// console.log(searchInsert([2, 3, 5, 6], 4));
