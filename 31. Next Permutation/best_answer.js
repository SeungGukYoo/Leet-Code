function solution(nums) {
  for (let i = nums.length - 1; i >= 0; i--) {
    if (nums[i] < nums[i + 1]) {
      let nextLargeNum = nextLarge(i);
      swap(i, nextLargeNum);
      reverse(i + 1);
      console.log(nums);
      return;
    }
  }

  function swap(idx1, idx2) {
    [nums[idx1], nums[idx2]] = [nums[idx2], nums[idx1]];
  }
  function nextLarge(idx) {
    for (let i = nums.length - 1; i > idx; i--) {
      if (nums[i] > nums[idx]) return i;
    }
  }

  function reverse(idx) {
    let start = idx,
      end = nums.length - 1;
    while (start < end) {
      [nums[start], nums[end]] = [nums[end], nums[start]];
      start++;
      end--;
    }
  }
  nums.reverse();
}

solution([1, 3, 2, 4, 5]);
