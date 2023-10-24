/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function (nums, target) {
  let lt = 0;
  let rt = nums.length - 1;
  if (nums.length === 1) {
    if (nums[0] === target) return 0;
    return nums[0] > target ? 0 : 1;
  }
	while (lt <= rt) {
		
	}

  return lt;
};
// console.log(searchInsert([1, 3, 5], 6));
// console.log(searchInsert([1, 3, 5], 2));
console.log(searchInsert([2, 3, 5, 6], 5));
// console.log(searchInsert([2, 3, 5, 6], 7));
// console.log(searchInsert([2, 3, 5, 6], 3));
// console.log(searchInsert([2, 3, 5, 6], 4));
