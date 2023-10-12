function solution(prices) {
  let money = 0;
  // buy sell
  let rt = 1;
  let lt = 0;

  while (rt < prices.length) {
    console.log(rt, prices.length, prices[rt]);
    if (prices[lt] < prices[rt]) {
      let tmp = prices[rt] - prices[lt];
      money = Math.max(tmp, money);
    } else {
      lt = rt;
    }
    rt++;
  }
  console.log(money);

  return money;
}

solution([2, 1, 2, 1, 0, 1, 2]);
// solution([3, 2, 6, 5, 0, 3]);
