function solution(nums) {
  if (nums.length === 1) return true;
  if (nums[0] === 0) return false;
  const visited = Array.from({ length: nums.length }, () => false);

  visited[0] = true;
  let vistedIdx = 0;
  for (let i = 0; i <= nums.length - 1; i++) {
    let jump = nums[i];

    for (let j = 0 + vistedIdx + 1; j <= jump + vistedIdx; j++) {
      if (visited[j - 1]) {
        visited[j] = true;
      }
    }

    if (visited[nums.length - 1]) return true;
    if (jump === 0 && visited[jump + 1] === false) return false;

    vistedIdx++;
  }
  return false;
}

console.log(solution([1, 0, 1, 0]));
console.log(solution([2, 3, 1, 4, 0]));
console.log(solution([2, 0, 1, 2]));
console.log(solution([3, 2, 1, 0, 4]));
