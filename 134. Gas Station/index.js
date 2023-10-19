function solution(gas, cost) {
  let curGasTank = 0;
  let totalGasTank = 0;
  let pos = 0;

  for (let i = 0; i < gas.length; i++) {
    curGasTank += gas[i] - cost[i];
    totalGasTank += gas[i] - cost[i];

    if (curGasTank <= 0) {
      pos = i + 1;
      curGasTank = 0;
    }
  }
  return totalGasTank < 0 ? -1 : pos;
}

solution([3, 1, 1], [1, 2, 2]);
