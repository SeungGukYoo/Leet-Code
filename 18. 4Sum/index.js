function solution(nums, target) {
  const sortNums = nums.sort((a, b) => a - b);
  console.log(sortNums);
  const answer = [];
  const len = sortNums.length;
  for (let a = 0; a < len - 3; a++) {
    for (let b = a + 1; b < len - 2; b++) {
      let c = b + 1,
        d = len - 1;

      while (c < d) {
        const sum = sortNums[a] + sortNums[b] + sortNums[c] + sortNums[d];
        console.log(sortNums[a], sortNums[b], sortNums[c], sortNums[d]);
        if (sum === target) {
          answer.push([sortNums[a], sortNums[b], sortNums[c], sortNums[d]]);
          while (sortNums[c] === sortNums[c + 1]) c++;
          while (sortNums[d] === sortNums[d - 1]) d--;
          c++;
          d--;
        } else if (sum > target) d--;
        else c++;
      }
      while (sortNums[b] === sortNums[b + 1]) b++;
    }
    while (sortNums[a] === sortNums[a + 1]) a++;
  }
  console.log(answer);
}

solution([-3, -1, 0, 2, 4, 5], 0);
// solution([1, 2, 3, 4, 5, 6], 0);
solution([1, 0, -1, 0, -2, 2], 0);
// solution([2, 2, 2, 2, 2], 8);
