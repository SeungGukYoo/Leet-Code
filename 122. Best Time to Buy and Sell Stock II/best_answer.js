function solution(prices) {
  let profit = 0;

  for (let i = 1; i < prices.length; i++) {
    let prev = prices[i - 1];
    let current = prices[i];

    if (prev < current) {
      profit += current - prev;
    }
  }
  return profit;
}

solution([7, 1, 5, 3, 6, 4]);

// solution([3, 2, 6, 5, 0, 3]);
