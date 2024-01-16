/**
 * @param {number[]} bills = [5,5,10,10,20]
 * @return {boolean} true
 * @param {number[]} bills = [5,5,5,10,20]
 * @return {boolean} false
 */
var lemonadeChange = function (bills) {
  const billsObj = {
    5: 0,
    10: 0,
    20: 0,
  };

  for (let pay of bills) {
    if (pay === 5) {
      billsObj[pay]++;
    } else if (pay === 10) {
      billsObj[5]--;
      billsObj[pay]++;
      if (billsObj[5] < 0) {
        return false;
      }
    } else if (pay === 20) {
      billsObj[pay]++;

      if (billsObj[10] <= 0) {
        billsObj[5] -= 3;
      } else {
        billsObj[5]--;
        billsObj[10]--;
      }
      if (billsObj[5] < 0 || billsObj[10] < 0) {
        return false;
      }
    }
  }
  return true;
};
