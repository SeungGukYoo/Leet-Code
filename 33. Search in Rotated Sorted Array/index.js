function solution(nums, target) {
  let left = 0;
  let right = nums.length - 1;

  while (left <= right) {
    let mid = Math.floor((left + right) / 2);

    if (nums[mid] === target) return mid;
    // console.log(nums[left], nums[mid], nums[right]);
    // console.log(left, mid, right);

    if (nums[left] <= nums[mid]) {
      if (nums[left] <= target && target <= nums[mid]) {
        right = mid - 1;
      } else {
        left = mid + 1;
      }
    } else {
      if (nums[mid] <= target && target <= nums[right]) {
        left = mid + 1;
      } else {
        right = mid - 1;
      }
    }
  }
  return -1;
}

// console.log(solution([1, 3], 3));
console.log(solution([4, 5, 6, 7, 0, 1, 2], 0));
// solution([4, 5, 6, 7, 8, 9, 0, 1, 2], 6);
