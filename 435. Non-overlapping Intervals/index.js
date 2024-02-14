/**
 * @param {number[][]} intervals
 * @return {number}
 */
var eraseOverlapIntervals = function (intervals) {
  intervals.sort((a, b) => a[0] - b[0]);
  let count = 0;
  let prevEnd = intervals[0][1];

  for (let i = 1; i < intervals.length; i++) {
    if (prevEnd > intervals[i][0]) {
      count++;
      prevEnd = Math.min(prevEnd, intervals[i][1]);
    } else {
      prevEnd = intervals[i][1];
    }
  }

  return count;
};

eraseOverlapIntervals([
  [1, 100],
  [11, 22],
  [1, 11],
  [2, 12],
]);
eraseOverlapIntervals([
  [1, 2],
  [2, 3],
  [3, 4],
  [1, 3],
]);
eraseOverlapIntervals([
  [1, 2],
  [1, 3],
  [1, 4],
  [1, 5],
  [2, 3],
  [3, 4],
]);
