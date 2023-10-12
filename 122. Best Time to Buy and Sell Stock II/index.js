function solution(prices) {
  // current money
  let money = 0;

  // buy price
  let buyPrice = Infinity;
  let sellPrice = 0;

  let beforeSellIdx = -1;
  let beforeBuyIdx = -1;
  let count = 0;

  for (let i = 0; i < prices.length; i++) {
    // count 0
    console.log(`${money} 현재금액`);
    if (count === 0) {
      if (prices[i] > sellPrice && beforeSellIdx >= 0) {
        money -= prices[beforeSellIdx];
        money += prices[i];
        sellPrice = prices[i];
        beforeSellIdx = i;
        console.log(`${money} 재판매`);
        console.log("===");
        continue;
      }

      buyPrice = prices[i];
      money -= prices[i];
      beforeBuyIdx = i;
      count = 1;
      console.log(`${money}구입`);
      console.log("===");
      continue;
    }

    // count 1
    if (count === 1) {
      if (prices[i] < buyPrice) {
        money += prices[beforeBuyIdx];
        money -= prices[i];
        buyPrice = prices[i];
        beforeBuyIdx = i;
        console.log(`${money} 재구매`);
        console.log("===");
        continue;
      }

      sellPrice = prices[i];
      beforeSellIdx = i;
      money += prices[i];
      count -= 1;
      console.log(`${money} 판매`);
      console.log("===");
    }
  }

  if (count) {
    money += prices[beforeBuyIdx];
  }

  return money;
}

// solution([7, 1, 5, 3, 6, 4]);
solution([3, 2, 6, 5, 0, 3]);
