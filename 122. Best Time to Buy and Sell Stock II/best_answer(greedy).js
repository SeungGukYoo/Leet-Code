function solution(prices) {
  const accumulate = (prev, cur) => prev + cur;

  var maxProfit = function (prices) {
    let profit = new Array();

    for (let i = 0; i < prices.length - 1; i++) {
      if (prices[i] < prices[i + 1]) {
        profit.push(prices[i + 1] - prices[i]);
      }
    }
    return profit.reduce(accumulate, 0);
  };
  return maxProfit(prices);
}

// solution([7, 1, 5, 3, 6, 4]);
console.log(solution([3, 2, 6, 5, 0, 3]));
