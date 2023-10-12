function solution(prices) {
  let [curHold, curNotHold] = [-Infinity, 0];

  for (const stockPrice of prices) {
    // infinity, 0 = infinity, 0
    let [prevHold, prevNotHold] = [curHold, curNotHold];
    curHold = Math.max(prevHold, prevNotHold - stockPrice);
    curNotHold = Math.max(prevNotHold, prevHold + stockPrice);
  }
}

// solution([7, 1, 5, 3, 6, 4]);
solution([3, 2, 6, 5, 0, 3]);
