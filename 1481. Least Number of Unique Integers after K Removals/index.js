/**
 * @param {number[]} arr
 * @param {number} k
 * @return {number}
 */
var findLeastNumOfUniqueInts = function (arr, k) {
  const map = new Map();

  for (let x of arr) {
    map.set(x, (map.get(x) || 0) + 1);
  }
  const mapArr = [...map].sort((a, b) => a[1] - b[1]);
  let deleteNum = k;
  let curIdx = 0;
  while (deleteNum > 0) {
    let [el, count] = mapArr[curIdx];
    let value;
    if (count <= deleteNum) {
      value = deleteNum - count;
      deleteNum = value;
      map.delete(el);
    } else {
      value = count - deleteNum;
      deleteNum = 0;
      map.set(el, value);
    }
    curIdx++;
  }
  return map.size;
};

findLeastNumOfUniqueInts([4, 3, 1, 1, 3, 3, 2], 3);
findLeastNumOfUniqueInts([5, 5, 4], 1);
