function solution(ratings) {
  const candy = Array.from({ length: ratings.length }, () => 1);

  for (let i = 1; i < ratings.length; i++) {
    if (ratings[i] > ratings[i - 1]) {
      candy[i] = candy[i - 1] + 1;
    }
  }

  for (let i = ratings.length - 2; i >= 0; i--) {
    if (ratings[i] > ratings[i + 1]) {
      candy[i] = Math.max(candy[i], candy[i + 1] + 1);
    }
  }
  return candy.reduce((pre, cur) => pre + cur, 0);
}
solution([1, 2, 2]);
